"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[739224],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var r=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return t?r.createElement(g,s(s({ref:a},d),{},{components:t})):r.createElement(g,s({ref:a},d))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=p;var n={};for(var l in a)hasOwnProperty.call(a,l)&&(n[l]=a[l]);n.originalType=e,n[u]="string"==typeof e?e:i,s[1]=n;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},110943:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const o={title:"Introduction to Apache Doris: a next-generation real-time data warehouse",description:"This is a technical overview of Apache Doris, introducing how it enables fast query performance with its architectural design, features, and mechanisms.",date:"2023-10-03",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/doris-intro.png"},s=void 0,n={permalink:"/zh-CN/blog/introduction-to-apache-doris-a-next-generation-real-time-data-warehouse",source:"@site/blog/introduction-to-apache-doris-a-next-generation-real-time-data-warehouse.md",title:"Introduction to Apache Doris: a next-generation real-time data warehouse",description:"This is a technical overview of Apache Doris, introducing how it enables fast query performance with its architectural design, features, and mechanisms.",date:"2023-10-03T00:00:00.000Z",formattedDate:"2023\u5e7410\u67083\u65e5",tags:[{label:"Tech Sharing",permalink:"/zh-CN/blog/tags/tech-sharing"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Introduction to Apache Doris: a next-generation real-time data warehouse",description:"This is a technical overview of Apache Doris, introducing how it enables fast query performance with its architectural design, features, and mechanisms.",date:"2023-10-03",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/doris-intro.png"},prevItem:{title:"Migrating from ClickHouse to Apache Doris: what happened?",permalink:"/zh-CN/blog/migrating-from-clickhouse-to-apache-doris-what-happened"},nextItem:{title:"Log analysis: Elasticsearch vs Apache Doris",permalink:"/zh-CN/blog/log-analysis-elasticsearch-vs-apache-doris"}},l={authorsImageUrls:[void 0]},c=[{value:"What is Apache Doris?",id:"what-is-apache-doris",level:2},{value:"Performance",id:"performance",level:2},{value:"Architectural Design",id:"architectural-design",level:2},{value:"Fast Point Queries for A Column-Oriented Database",id:"fast-point-queries-for-a-column-oriented-database",level:2},{value:"Data Ingestion",id:"data-ingestion",level:2},{value:"Data Update",id:"data-update",level:2},{value:"Service Availability &amp; Data Reliability",id:"service-availability--data-reliability",level:2},{value:"Cross Cluster Replication",id:"cross-cluster-replication",level:2},{value:"Multi-Tenant Management",id:"multi-tenant-management",level:2},{value:"Easy to Use",id:"easy-to-use",level:2},{value:"Semi-Structured Data Analysis",id:"semi-structured-data-analysis",level:2},{value:"Data Lakehouse",id:"data-lakehouse",level:2},{value:"Tiered Storage",id:"tiered-storage",level:2},{value:"The Apache Doris Community",id:"the-apache-doris-community",level:2}],d={toc:c},u="wrapper";function h(e){let{components:a,...o}=e;return(0,i.yg)(u,(0,r.A)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"what-is-apache-doris"},"What is Apache Doris?"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/"},"Apache Doris")," is an open-source real-time data warehouse. It can collect data from various data sources, including relational databases (MySQL, PostgreSQL, SQL Server, Oracle, etc.), logs, and time series data from IoT devices. It is capable of reporting, ad-hoc analysis, federated queries, and log analysis, so it can be used to support dashboarding, self-service BI, A/B testing, user behavior analysis and the like."),(0,i.yg)("p",null,"Apache Doris supports both batch import and stream writing. It can be well integrated with Apache Spark, Apache Hive, Apache Flink, Airbyte, DBT, and Fivetran. It can also connect to data lakes such as Apache Hive, Apache Hudi, Apache Iceberg, Delta Lake, and Apache Paimon."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"What-Is-Apache-Doris",src:t(27748).A,width:"1280",height:"654"})),(0,i.yg)("h2",{id:"performance"},"Performance"),(0,i.yg)("p",null,"As a real-time OLAP engine, Apache Doris hasn a competitive edge in query speed. According to the TPC-H and SSB-Flat benchmarking results, Doris can deliver much faster performance than Presto, Greenplum, and ClickHouse."),(0,i.yg)("p",null,"As for its self-volution, it has increased its query speed by over 10 times in the past two years, both in complex queries and flat table analysis."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Apache-Doris-VS-Presto-Greenplum-ClickHouse",src:t(457663).A,width:"1280",height:"616"})),(0,i.yg)("h2",{id:"architectural-design"},"Architectural Design"),(0,i.yg)("p",null,"Behind the fast speed of Apache Doris is the architectural design, features, and mechanisms that contribute to the performance of Doris. "),(0,i.yg)("p",null,"First of all, Apache Doris has a cost-based optimizer (CBO) that can figure out the most efficient execution plan for complicated big queries. It has a fully vectorized execution engine so it can reduce virtual function calls and cache misses. It is MPP-based (Massively Parallel Processing) so it can give full play to the user's machines and cores. In Doris, query execution is data-driven, which means whether a query gets executed is determined by whether its relevant data is ready, and this enables more efficient use of CPUs. "),(0,i.yg)("h2",{id:"fast-point-queries-for-a-column-oriented-database"},"Fast Point Queries for A Column-Oriented Database"),(0,i.yg)("p",null,'Apache Doris is a column-oriented database so it can make data compression and data sharding easier and faster. But this might not be suitable for cases such as customer-facing services. In these cases, a data platform will have to handle requests from a large number of users concurrently (these are called "high-concurrency point queries"), and having a columnar storage engine will amplify I/O operations per second, especially when data is arranged in flat tables. '),(0,i.yg)("p",null,"To fix that, Apache Doris enables hybrid storage, which means to have row storage and columnar storage at the same time. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Hybrid-Columnar-Row-Storage",src:t(799670).A,width:"1914",height:"456"})),(0,i.yg)("p",null,"In addition, since point queries are all simple queries, it will be unnecessary and wasteful to call out the query planner, so Doris executes a short circuit plan for them to reduce overhead. "),(0,i.yg)("p",null,"Another big source of overheads in high-concurrency point queries is SQL parsing. For that, Doris has prepared statements. The idea is to pre-compute the SQL statement and cache them, so they can be reused for similar queries."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"prepared-statement-and-short-circuit-plan",src:t(965993).A,width:"1902",height:"392"})),(0,i.yg)("h2",{id:"data-ingestion"},"Data Ingestion"),(0,i.yg)("p",null,"Apache Doris provides a range of methods for data ingestion."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Real-Time stream writing"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/stream-load-manual?_highlight=stream&_highlight=loa"},"Stream Load")),": You can apply this method to write local files or data streams via HTTP. It is linearly scalable and can reach a throughput of 10 million records per second in some use cases."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/1.2/ecosystem/flink-doris-connector/"},"Flink-Doris-Connector")),": With built-in Flink CDC, this Connector ingests data from OLTP databases to Doris. So far, we have realized auto-synchronization of data from MySQL and Oracle to Doris."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/routine-load-manual"},"Routine Load")),": This is to subscribe data from Kafka message queues. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/insert-into-manual"},"Insert Into")),": This is especially useful when you try to do ETL in Doris internally, like writing data from one Doris table to another.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Batch writing"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/spark-load-manual"},"Spark Load")),": With this method, you can leverage Spark resources to pre-process data from HDFS and object storage before writing to Doris."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("a",{parentName:"strong",href:"https://doris.apache.org/docs/dev/data-operate/import/import-way/broker-load-manual"},"Broker Load")),": This supports HDFS and S3 protocol."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"insert into <internal table> select from <external table>"),": This simple statement allows you to connect Doris to various storage systems, data lakes, and databases.")),(0,i.yg)("h2",{id:"data-update"},"Data Update"),(0,i.yg)("p",null,"For data updates, what Apache Doris has to offer is that, it supports both Merge on Read and Merge on Write, the former for low-frequency batch updates and the latter for real-time writing. With Merge on Write, the latest data will be ready by the time you execute queries, and that's why it can improve your query speed by 5 to 10 times compared to Merge on Read. "),(0,i.yg)("p",null,"From an implementation perspective, these are a few common data update operations, and Doris supports them all: "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Upsert"),": to replace or update a whole row"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Partial column update"),": to update just a few columns in a row"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Conditional updating"),": to filter out some data by combining a few conditions in order to replace or delete it"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Insert Overwrite"),": to rewrite a table or partition")),(0,i.yg)("p",null,"In some cases, data updates happen concurrently, which means there is numerous new data coming in and trying to modify the existing data record, so the updating order matters a lot. That's why Doris allows you to decide the order, either by the order of transaction commit or that of the sequence column (something that you specify in the table in advance). Doris also supports data deletion based on the specified predicate, and that's how conditional updating is done."),(0,i.yg)("h2",{id:"service-availability--data-reliability"},"Service Availability & Data Reliability"),(0,i.yg)("p",null,"Apart from fast performance in queries and data ingestion, Apache Doris also provides service availability guarantee, and this is how: "),(0,i.yg)("p",null,"Architecturally, Doris has two processes: frontend and backend. Both of them are easily scalable. The frontend nodes manage the clusters, metadata and handle user requests; the backend nodes execute the queries and are capable of auto data balancing and auto-restoration. It supports cluster upgrading and scaling to avoid interruption to services."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"architecture-design-of-Apache-Doris",src:t(82656).A,width:"1118",height:"720"})),(0,i.yg)("h2",{id:"cross-cluster-replication"},"Cross Cluster Replication"),(0,i.yg)("p",null,"Enterprise users, especially those in finance or e-commerce, will need to backup their clusters or their entire data center, just in case of force majeure. So Doris 2.0 provides Cross Cluster Replication (CCR). With CCR, users can do a lot:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Disaster recovery"),": for quick restoration of data services"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Read-write separation"),": master cluster + slave cluster; one for reading, one for writing"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Isolated upgrade of clusters"),": For cluster scaling, CCR allows users to pre-create a backup cluster for a trial run so they can clear out the possible incompatibility issues and bugs.")),(0,i.yg)("p",null,"Tests show that Doris CCR can reach a data latency of minutes. In the best case, it can reach the upper speed limit of the hardware environment."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Cross-Cluster-Replication-in-Apache-Doris",src:t(437691).A,width:"1280",height:"297"})),(0,i.yg)("h2",{id:"multi-tenant-management"},"Multi-Tenant Management"),(0,i.yg)("p",null,"Apache Doris has sophisticated Role-Based Access Control, and it allows fine-grained privilege control on the level of databases, tables, rows, and columns. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"multi-tenant-management-in-Apache-Doris",src:t(688690).A,width:"1095",height:"720"})),(0,i.yg)("p",null,"For resource isolation, Doris used to implement a hard isolation plan, which is to divide the backend nodes into resource groups, and assign the Resource Groups to different workloads. This is a hard isolation plan. It was simple and neat. But sometimes users can make the most out of their computing resource because some Resource Groups are idle."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"resource-group-in-Apache-Doris",src:t(440693).A,width:"1280",height:"685"})),(0,i.yg)("p",null,"Thus, instead of Resource Groups, Doris 2.0 introduces Workload Group. A soft limit is set for a Workload Group about how many resources it can use. When that soft limit is hit, and meanwhile there are some idle resources available. The idle resources will be shared across the workload groups. Users can also prioritize the workload groups in terms of their access to idle resources."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"workload-group-in-Apache-Doris",src:t(357804).A,width:"1166",height:"362"})),(0,i.yg)("h2",{id:"easy-to-use"},"Easy to Use"),(0,i.yg)("p",null,"As many capabilities as Apache Doris provides, it is also easy to use. It supports standard SQL and is compatible with MySQL protocol and most BI tools on the market."),(0,i.yg)("p",null,"Another effort that we've made to improve usability is a feature called Light Schema Change. This means if users need to add or delete some columns in a table, they just need to update the metadata in the frontend but don't have to modify all the data files. Light Schema Change can be done within milliseconds. It also allows changes to indexes and data type of columns. The combination of Light Schema Change and Flink-Doris-Connector means synchronization of upstream tables within milliseconds."),(0,i.yg)("h2",{id:"semi-structured-data-analysis"},"Semi-Structured Data Analysis"),(0,i.yg)("p",null,"Common examples of semi-structure data include logs, observability data, and time series data. These cases require schema-free support, lower cost, and capabilities in multi-dimensional analysis and full-text search."),(0,i.yg)("p",null,"In text analysis, mostly, people use the LIKE operator, so we put a lot of effort into improving the performance of it, including pushing down the LIKE operator down to the storage layer (to reduce data scanning), and introducing the NGram Bloomfilter, the Hyperscan regex matching library, and the Volnitsky algorithm (for sub-string matching)."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"LIKE-operator",src:t(883518).A,width:"1280",height:"335"})),(0,i.yg)("p",null,"We have also introduced inverted index for text tokenization. It is a power tool for fuzzy keyword search, full-text search, equivalence queries, and range queries."),(0,i.yg)("h2",{id:"data-lakehouse"},"Data Lakehouse"),(0,i.yg)("p",null,"For users to build a high-performing data lakehouse and a unified query gateway, Doris can map, cache, and auto-refresh the meta data from external sources. It supports Hive Metastore and almost all open data lakehouse formats. You can connect it to relational databases, Elasticsearch, and many other sources. And it allows you to reuse your own authentication systems, like Kerberos and Apache Ranger, on the external tables."),(0,i.yg)("p",null,"Benchmark results show that Apache Doris is 3~5 times faster than Trino in queries on Hive tables. It is the joint result of a few features: "),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Efficient query engine"),(0,i.yg)("li",{parentName:"ol"},"Hot data caching mechanism"),(0,i.yg)("li",{parentName:"ol"},"Compute nodes"),(0,i.yg)("li",{parentName:"ol"},"Views in Doris")),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/compute-node"},"Compute Nodes")," is a newly introduced solution in version 2.0 for data lakehousing. Unlike normal backend nodes, Compute Nodes are stateless and do not store any data. Neither are they involved in data balancing during cluster scaling. Thus, they can join the cluster flexibly and easily during computation peak times. "),(0,i.yg)("p",null,"Also, Doris allows you to write the computation results of external tables into Doris to form a view. This is a similar thinking to Materialized Views: to trade space for speed. After a query on external tables is executed, the results can be put in Doris internally. When there are similar queries following up, the system can directly read the results of previous queries from Doris, and that speeds things up."),(0,i.yg)("h2",{id:"tiered-storage"},"Tiered Storage"),(0,i.yg)("p",null,"The main purpose of tiered storage is to save money. ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/advanced/cold-hot-separation?_highlight=cold"},"Tiered storage "),"means to separate hot data and cold data into different storage, with hot data being the data that is frequently accessed and cold data that isn't. It allows users to put hot data in the quick but expensive disks (such as SSD and HDD), and cold data in object storage."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"tiered-storage-in-Apache-Doris",src:t(636007).A,width:"1150",height:"622"})),(0,i.yg)("p",null,"Roughly speaking, for a data asset consisting of 80% cold data, tiered storage will reduce your storage cost by 70%."),(0,i.yg)("h2",{id:"the-apache-doris-community"},"The Apache Doris Community"),(0,i.yg)("p",null,"This is an overview of Apache Doris, an open-source real-time data warehouse. It is actively evolving with an agile release schedule, and the ",(0,i.yg)("a",{parentName:"p",href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw"},"community")," embraces any questions, ideas, and feedback."))}h.isMDXComponent=!0},799670:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/Introduction_3-1ec14fc9a98e2d4029ce949804b3e1a7.png"},965993:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/Introduction_4-5daaa3b40e9f7b62a6f30bf10a039f94.png"},27748:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_1-d906db31b97b75340d9e0cf7fe267dfc.png"},883518:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_10-f4a60eac6572f70e2d4cedb5046e2b60.png"},636007:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_11-a841a4fd892e69d61184e21b7c34246b.png"},457663:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_2-3b95346f511caf321269de6c7ea692cd.png"},82656:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_5-69ce643bd14fb428099a545039a4e18e.png"},437691:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_6-0a799bae221f0af5ddfe41901743df98.png"},688690:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_7-97a2ac7fbb42fff86d99e46f92e184e5.png"},440693:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_8-c25066059694cad6e5e4015a4e4e8976.png"},357804:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/introduction_9-aeadca64cd04fe431a0120cec1fd6b20.png"}}]);