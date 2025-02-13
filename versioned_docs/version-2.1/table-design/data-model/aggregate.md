---
{
    "title": "Aggregate Key Model",
    "language": "en"
}
---

<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

The aggregate data model, also known as the Aggregate model, aggregates data based on key columns. The Doris storage layer retains the aggregated data, which helps reduce storage space and improve query performance. This model is typically used in scenarios where summarization or aggregation of information (such as totals or averages) is required.

The following example illustrates what the aggregate model is and how to use it correctly.

### Importing Data Aggregation

Assume that the business has the following data table schema:

| ColumnName      | Type         | AggregationType | Comment                     |
| --------------- | ------------ | --------------- | --------------------------- |
| user_id          | LARGEINT     |                 | user id                     |
| date            | DATE         |                 | date of data filling        |
| city            | VARCHAR (20) |                 | User City                   |
| age             | SMALLINT     |                 | User age                    |
| sex             | TINYINT      |                 | User gender                 |
| last_visit_date | DATETIME     | REPLACE         | Last user access time       |
| cost            | BIGINT       | SUM             | Total User Consumption      |
| max_dwell_time  | INT          | MAX             | Maximum user residence time |
| min_dwell_time  | INT          | MIN             | User minimum residence time |

The corresponding to CREATE TABLE statement would be as follows (omitting the Partition and Distribution information):

```sql
CREATE DATABASE IF NOT EXISTS example_db;

CREATE TABLE IF NOT EXISTS example_db.example_tbl_agg1
(
    `user_id` LARGEINT NOT NULL COMMENT "user id",
    `date` DATE NOT NULL COMMENT "data import time",
    `city` VARCHAR(20) COMMENT "city",
    `age` SMALLINT COMMENT "age",
    `sex` TINYINT COMMENT "gender",
    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "last visit date time",
    `cost` BIGINT SUM DEFAULT "0" COMMENT "user total cost",
    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "user max dwell time",
    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "user min dwell time"
)
AGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)
DISTRIBUTED BY HASH(`user_id`) BUCKETS 10
PROPERTIES (
"replication_allocation" = "tag.location.default: 3"
);
```

As you can see, this is a typical fact table of user information and visit behaviors. In star models, user information and visit behaviors are usually stored in dimension tables and fact tables, respectively. Here, for the convenience of explanation, we store the two types of information in one single table.

The columns in the table are divided into Key (dimension) columns and Value (indicator columns) based on whether they are set with an `AggregationType`. **Key** columns are not set with an  `AggregationType`, such as `user_id`, `date`, and  `age`, while **Value** columns are.

When data are imported, rows with the same contents in the Key columns will be aggregated into one row, and their values in the Value columns will be aggregated as their `AggregationType` specify. Currently, there are several aggregation methods and "agg_state" options available:

- SUM: Accumulate the values in multiple rows.

- REPLACE: The newly imported value will replace the previous value.

- MAX: Keep the maximum value.

- MIN: Keep the minimum value.

- REPLACE_IF_NOT_NULL: Non-null value replacement. Unlike REPLACE, it does not replace null values.

- HLL_UNION: Aggregation method for columns of HLL type, using the HyperLogLog algorithm for aggregation.

- BITMAP_UNION: Aggregation method for columns of BITMAP type, performing a union aggregation of bitmaps.

:::tip

If these aggregation methods cannot meet the requirements, you can choose to use the "agg_state" type.

:::

Suppose that you have the following import data (raw data):

| user\_id | date       | city      | age  | sex  | last\_visit\_date   | cost | max\_dwell\_time | min\_dwell\_time |
| -------- | ---------- | --------- | ---- | ---- | ------------------- | ---- | ---------------- | ---------------- |
| 10000    | 2017-10-01 | Beijing   | 20   | 0    | 2017-10-01 06:00    | 20   | 10               | 10               |
| 10000    | 2017-10-01 | Beijing   | 20   | 0    | 2017-10-01 07:00    | 15   | 2                | 2                |
| 10001    | 2017-10-01 | Beijing   | 30   | 1    | 2017-10-01 17:05:45 | 2    | 22               | 22               |
| 10002    | 2017-10-02 | Shanghai  | 20   | 1    | 2017-10-02 12:59:12 | 200  | 5                | 5                |
| 10003    | 2017-10-02 | Guangzhou | 32   | 0    | 2017-10-02 11:20:00 | 30   | 11               | 11               |
| 10004    | 2017-10-01 | Shenzhen  | 35   | 0    | 2017-10-01 10:00:15 | 100  | 3                | 3                |
| 10004    | 2017-10-03 | Shenzhen  | 35   | 0    | 2017-10-03 10:20:22 | 11   | 6                | 6                |


And you can import data with the following sql:

```sql
insert into example_db.example_tbl_agg1 values
(10000,"2017-10-01","Beijing",20,0,"2017-10-01 06:00:00",20,10,10),
(10000,"2017-10-01","Beijing",20,0,"2017-10-01 07:00:00",15,2,2),
(10001,"2017-10-01","Beijing",30,1,"2017-10-01 17:05:45",2,22,22),
(10002,"2017-10-02","Shanghai",20,1,"2017-10-02 12:59:12",200,5,5),
(10003,"2017-10-02","Guangzhou",32,0,"2017-10-02 11:20:00",30,11,11),
(10004,"2017-10-01","Shenzhen",35,0,"2017-10-01 10:00:15",100,3,3),
(10004,"2017-10-03","Shenzhen",35,0,"2017-10-03 10:20:22",11,6,6);
```

This is a table recording the user behaviors when visiting a certain commodity page. The first row of data, for example, is explained as follows:

| Data             | Description                              |
| ---------------- | ---------------------------------------- |
| 10000            | User ID, each user uniquely identifies id |
| 2017-10-01       | Data storage time, accurate to date      |
| Beijing          | User City                                |
| 20               | User Age                                 |
| 0                | Gender male (1 for female)               |
| 2017-10-01 06:00 | User's time to visit this page, accurate to seconds |
| 20               | Consumption generated by the user's current visit |
| 10               | User's visit, time to stay on the page   |
| 10               | User's current visit, time spent on the page (redundancy) |

After this batch of data is imported into Doris correctly, it will be stored in Doris as follows:

| user\_id | date       | city      | age  | sex  | last\_visit\_date   | cost | max\_dwell\_time | min\_dwell\_time |
| -------- | ---------- | --------- | ---- | ---- | ------------------- | ---- | ---------------- | ---------------- |
| 10000    | 2017-10-01 | Beijing   | 20   | 0    | 2017-10-01 07:00    | 35   | 10               | 2                |
| 10001    | 2017-10-01 | Beijing   | 30   | 1    | 2017-10-01 17:05:45 | 2    | 22               | 22               |
| 10002    | 2017-10-02 | Shanghai  | 20   | 1    | 2017-10-02 12:59:12 | 200  | 5                | 5                |
| 10003    | 2017-10-02 | Guangzhou | 32   | 0    | 2017-10-02 11:20:00 | 30   | 11               | 11               |
| 10004    | 2017-10-01 | Shenzhen  | 35   | 0    | 2017-10-01 10:00:15 | 100  | 3                | 3                |
| 10004    | 2017-10-03 | Shenzhen  | 35   | 0    | 2017-10-03 10:20:22 | 11   | 6                | 6                |

The data of User 10000 have been aggregated to one row, while those of other users remain the same. The explanation for the aggregated data of User 10000 is as follows (the first 5 columns remain unchanged, so it starts with Column 6 `last_visit_date`):

- The value in the 6th column is 2017-10-01 07:00: The `last_visit_date` column is aggregated by REPLACE, so `2017-10-01 07:00` has replaced  `2017-10-01 06:00`.

:::tip

When using REPLACE to aggregate data from the same import batch, the order of replacement is uncertain. That means, in this case, the data eventually saved in Doris could be `2017-10-01 06:00`. However, for different import batches, it is certain that data from the new batch will replace those from the old batch.

:::

- The value in the 7th column is 35: The `cost`column is aggregated by SUM, so the update value `35` is the result of `20` + `15`.
- The value in the 8th column is 10: The `max_dwell_time` column is aggregated by MAX, so `10` is saved as it is the maximum between `10` and `2`.
- The value in the 9th column is 2: The  `min_dwell_time` column is aggregated by MIN, so `2` is saved as it is the minimum between `10` and `2`.

After aggregation, Doris only stores the aggregated data. In other words, the detailed raw data will no longer be available.

### Import data and aggregate with existing data.

Assuming that the table already contains the previously imported data:

| user_id | date       | city      | age  | sex  | last\_visit\_date   | cost | max\_dwell\_time | min\_dwell\_time |
| ------- | ---------- | --------- | ---- | ---- | ------------------- | ---- | ---------------- | ---------------- |
| 10000   | 2017-10-01 | Beijing   | 20   | 0    | 2017-10-01 07:00    | 35   | 10               | 2                |
| 10001   | 2017-10-01 | Beijing   | 30   | 1    | 2017-10-01 17:05:45 | 2    | 22               | 22               |
| 10002   | 2017-10-02 | Shanghai  | 20   | 1    | 2017-10-02 12:59:12 | 200  | 5                | 5                |
| 10003   | 2017-10-02 | Guangzhou | 32   | 0    | 2017-10-02 11:20:00 | 30   | 11               | 11               |
| 10004   | 2017-10-01 | Shenzhen  | 35   | 0    | 2017-10-01 10:00:15 | 100  | 3                | 3                |
| 10004   | 2017-10-03 | Shenzhen  | 35   | 0    | 2017-10-03 10:20:22 | 11   | 6                | 6                |

Now import a new batch of data:

| user_id | date       | city     | age  | sex  | last\_visit\_date   | cost | max\_dwell\_time | min\_dwell\_time |
| ------- | ---------- | -------- | ---- | ---- | ------------------- | ---- | ---------------- | ---------------- |
| 10004   | 2017-10-03 | Shenzhen | 35   | 0    | 2017-10-03 11:22:00 | 44   | 19               | 19               |
| 10005   | 2017-10-03 | Changsha | 29   | 1    | 2017-10-03 18:11:02 | 3    | 1                | 1                |

With the following SQL:

```sql
insert into example_db.example_tbl_agg1 values
(10004,"2017-10-03","Shenzhen",35,0,"2017-10-03 11:22:00",44,19,19),
(10005,"2017-10-03","Changsha",29,1,"2017-10-03 18:11:02",3,1,1);
```

After importing, the data stored in Doris will be updated as follows:

| user_id | date       | city      | age  | sex  | last\_visit\_date   | cost | max\_dwell\_time | min\_dwell\_time |
| ------- | ---------- | --------- | ---- | ---- | ------------------- | ---- | ---------------- | ---------------- |
| 10000   | 2017-10-01 | Beijing   | 20   | 0    | 2017-10-01 07:00    | 35   | 10               | 2                |
| 10001   | 2017-10-01 | Beijing   | 30   | 1    | 2017-10-01 17:05:45 | 2    | 22               | 22               |
| 10002   | 2017-10-02 | Shanghai  | 20   | 1    | 2017-10-02 12:59:12 | 200  | 5                | 5                |
| 10003   | 2017-10-02 | Guangzhou | 32   | 0    | 2017-10-02 11:20:00 | 30   | 11               | 11               |
| 10004   | 2017-10-01 | Shenzhen  | 35   | 0    | 2017-10-01 10:00:15 | 100  | 3                | 3                |
| 10004   | 2017-10-03 | Shenzhen  | 35   | 0    | 2017-10-03 11:22:00 | 55   | 19               | 6                |
| 10005   | 2017-10-03 | Changsha  | 29   | 1    | 2017-10-03 18:11:02 | 3    | 1                | 1                |

As you can see, the existing data and the newly imported data of User 10004 have been aggregated. Meanwhile, the new data of User 10005 have been added.

In Doris, data aggregation happens in the following 3 stages:

1. The ETL stage of each batch of import data. At this stage, the batch of import data will be aggregated internally.
2. The data compaction stage of the underlying BE. At this stage, BE will aggregate data from different batches that have been imported.
3. The data query stage. The data involved in the query will be aggregated accordingly.

At different stages, data will be aggregated to varying degrees. For example, when a batch of data is just imported, it may not be aggregated with the existing data. But for users, they **can only query aggregated data**. That is, what users see are the aggregated data, and they **should not assume that what they have seen are not or partly aggregated**. 

### agg_state

:::tip

AGG_STATE cannot be used as a key column, and when creating a table, you need to declare the signature of the aggregation function. Users do not need to specify a length or default value. The actual storage size of the data depends on the function implementation.

:::


CREATE TABLE

```sql
set enable_agg_state=true;
create table aggstate(
    k1 int null,
    k2 agg_state<sum(int)> generic,
    k3 agg_state<group_concat(string)> generic
)
aggregate key (k1)
distributed BY hash(k1) buckets 3
properties("replication_num" = "1");
```


`agg_state` is used to declare the data type as `agg_state,` and `sum/group_concat` are the signatures of aggregation functions.

Please note that `agg_state` is a data type, similar to `int`, `array`, or `string`.

`agg_state` can only be used in conjunction with the [state](../../sql-manual/sql-functions/combinators/state.md)/[merge](../../sql-manual/sql-functions/combinators/merge.md)/[union](../../sql-manual/sql-functions/combinators/union.md) function combinators.

`agg_state` represents an intermediate result of an aggregation function. For example, with the aggregation function `sum`, `agg_state` can represent the intermediate state of summing values like `sum(1, 2, 3, 4, 5)`, rather than the final result.

The `agg_state` type needs to be generated using the `state` function. For the current table, it would be `sum_state` and `group_concat_state` for the "sum" and `group_concat` aggregation functions, respectively.

```sql
insert into aggstate values(1,sum_state(1),group_concat_state('a'));
insert into aggstate values(1,sum_state(2),group_concat_state('b'));
insert into aggstate values(1,sum_state(3),group_concat_state('c'));
```

At this point, the table contains only one row. Please note that the table below is for illustrative purposes and cannot be selected/displayed directly:

| k1   | k2         | k3                        |
| ---- | ---------- | ------------------------- |
| 1    | sum(1,2,3) | group_concat_state(a,b,c) |

Insert another record.

```sql
insert into aggstate values(2,sum_state(4),group_concat_state('d'));
```

The table's structure at this moment is...

| k1   | k2         | k3                        |
| ---- | ---------- | ------------------------- |
| 1    | sum(1,2,3) | group_concat_state(a,b,c) |
| 2    | sum(4)     | group_concat_state(d)     |

We can use the `merge` operation to combine multiple states and return the final result calculated by the aggregation function.

```
mysql> select sum_merge(k2) from aggstate;
+---------------+
| sum_merge(k2) |
+---------------+
|            10 |
+---------------+
```

`sum_merge` will first combine sum(1,2,3) and sum(4) into sum(1,2,3,4), and return the calculated result.
Because `group_concat` has a specific order requirement, the result is not stable.

```
mysql> select group_concat_merge(k3) from aggstate;
+------------------------+
| group_concat_merge(k3) |
+------------------------+
| c,b,a,d                |
+------------------------+
```

If you do not want the final aggregation result, you can use 'union' to combine multiple intermediate aggregation results and generate a new intermediate result.

```sql
insert into aggstate select 3,sum_union(k2),group_concat_union(k3) from aggstate ;
```

The table's structure at this moment is...

| k1   | k2           | k3                          |
| ---- | ------------ | --------------------------- |
| 1    | sum(1,2,3)   | group_concat_state(a,b,c)   |
| 2    | sum(4)       | group_concat_state(d)       |
| 3    | sum(1,2,3,4) | group_concat_state(a,b,c,d) |

You can achieve this through a query.

```
mysql> select sum_merge(k2) , group_concat_merge(k3)from aggstate;
+---------------+------------------------+
| sum_merge(k2) | group_concat_merge(k3) |
+---------------+------------------------+
|            20 | c,b,a,d,c,b,a,d        |
+---------------+------------------------+

mysql> select sum_merge(k2) , group_concat_merge(k3)from aggstate where k1 != 2;
+---------------+------------------------+
| sum_merge(k2) | group_concat_merge(k3) |
+---------------+------------------------+
|            16 | c,b,a,d,c,b,a          |
+---------------+------------------------+
```

Users can perform more detailed aggregation function operations using `agg_state`.

:::tip

 `agg_state` comes with a certain performance overhead.

:::