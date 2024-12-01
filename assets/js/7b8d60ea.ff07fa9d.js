"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[443392],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>m});var n=t(296540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),g=o,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||r;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},926658:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=t(58168),o=(t(296540),t(15680));const r={title:"Spark Load",language:"en"},i=void 0,l={unversionedId:"design/spark_load",id:"design/spark_load",title:"Spark Load",description:"\x3c!--",source:"@site/community/design/spark_load.md",sourceDirName:"design",slug:"/design/spark_load",permalink:"/community/design/spark_load",draft:!1,tags:[],version:"current",frontMatter:{title:"Spark Load",language:"en"},sidebar:"community",previous:{title:"Metadata Design Document",permalink:"/community/design/metadata-design"},next:{title:"Debug Tool",permalink:"/community/developer-guide/debug-tool"}},s={},d=[{value:"Background",id:"background",level:2},{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Design",id:"design",level:2},{value:"Objective",id:"objective",level:3},{value:"Implementation Plans",id:"implementation-plans",level:3},{value:"Plan A",id:"plan-a",level:4},{value:"Syntax",id:"syntax",level:5},{value:"SparkLoadJob",id:"sparkloadjob",level:5},{value:"SparkLoadPendingTask",id:"sparkloadpendingtask",level:5},{value:"LoadLoadingTask",id:"loadloadingtask",level:5},{value:"Data loading to BE",id:"data-loading-to-be",level:5},{value:"Plan B",id:"plan-b",level:4},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:a,...t}=e;return(0,o.yg)(u,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"implementation-design-for-spark-load"},"Implementation Design for Spark Load"),(0,o.yg)("h2",{id:"background"},"Background"),(0,o.yg)("p",null,"Doris supports various data ingestion methods, including Broker Load, Routine Load, Stream Load, and Mini Batch Load.\nSpark Load is the optimal choice for first-time data ingestion into Doris. It is for moving large volumes of data and can speed up data ingestion."),(0,o.yg)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"FE: Frontend, the frontend nodes of Doris. They process request from clients, manage metadata and clusters, and generate query execution plans."),(0,o.yg)("li",{parentName:"ul"},"BE: Backend, the backend nodes of Doris. They store and manage data, and execute query plans."),(0,o.yg)("li",{parentName:"ul"},"Tablet:  A table in Doris is divided into tablets."),(0,o.yg)("li",{parentName:"ul"},"DPP: Data preprocessing. To transfer, clean, partition, sort, and aggregate data using external computing resources (Hadoop, Spark)")),(0,o.yg)("h2",{id:"design"},"Design"),(0,o.yg)("h3",{id:"objective"},"Objective"),(0,o.yg)("p",null,"Doris itself is relatively slow in batch import of 100GB data or larger. As it hasn't realized read/writing separation. Such batch import can lead to high CPU usage. For users who need to migrate large data volumes, Doris provides the Spark Load option. It leverages the data loading and concurrency capabilities of Spark clusters to perform ETL, sorting, and aggregation upon data ingestion. In this way, users can migrate huge datasets faster and less costly."),(0,o.yg)("p",null,"The Spark Load method must be compatible with the multiple deployment modes of Spark. The first step is to support YARN clusters. Meanwhile, considering the variety of data formats, it needs to support multiple kinds of data files, including CSV, Parquet, and ORC.  "),(0,o.yg)("h3",{id:"implementation-plans"},"Implementation Plans"),(0,o.yg)("p",null,"When designing the implementation of Spark Load, we take into account the our existing data loading framework."),(0,o.yg)("h4",{id:"plan-a"},"Plan A"),(0,o.yg)("p",null,"For the ease of development, we hope to reuse the existing data loading framework as much as possible, so this is the overall plan for implementing Spark Load:"),(0,o.yg)("p",null,"The Spark Load statement input by the user will be parsed to produce LoadStmt. An identifier field ",(0,o.yg)("inlineCode",{parentName:"p"},"isSparkLoad")," will be added to the LoadStmt. If it is true, the system will create a SparkLoadJob  (similar to how a BrokerLoadJob is created). The job will be executed by a state machine mechanism. In PENDING stage, a SparkLoadPendingTask will be created; in LOADING stage, a LoadLoadingTask will be created for data loading. Doris reuses its existing data loading framework and executes the loading plan in the BE."),(0,o.yg)("p",null,"A few considerations for this plan:"),(0,o.yg)("h5",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,"The Spark Load statement is similar to that of Broker Load. This is an example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'        LOAD LABEL example_db.label1\n        (\n        DATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\n        NEGATIVE\n        INTO TABLE `my_table`\n        PARTITION (p1, p2)\n        COLUMNS TERMINATED BY ","\n        columns(k1,k2,k3,v1,v2)\n        set (\n            v3 = v1 + v2,\n            k4 = hll_hash(k2)\n        )\n        where k1 > 20\n        )\n        with spark.cluster_name\n        PROPERTIES\n        (\n        "spark.master" = "yarn",\n        "spark.executor.cores" = "5",\n        "spark.executor.memory" = "10g",\n        "yarn.resourcemanager.address" = "xxx.tc:8032",\n        "max_filter_ratio" = "0.1",\n        );\n')),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"spark.cluster_name")," is the name of the Spark cluster to be loaded. It can be set via SET PROPERTY and users may refer to the configurations of the original Hadoop cluster. The Spark cluster configurations in the PROPERTIES will overwrite those in ",(0,o.yg)("inlineCode",{parentName:"p"},"spark.cluster_name"),"."),(0,o.yg)("p",null,"Explanation of the properties:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"spark.master: Spark cluster deployment mode. Supported modes include yarn/standalone/local/k8s. We will prioritize the support for yarn and implement the yarn-cluster mode. (The yarn-client mode is mainly used in interactive scenarios.)"),(0,o.yg)("li",{parentName:"ul"},"spark.executor.cores: the number of CPUs in the executor"),(0,o.yg)("li",{parentName:"ul"},"spark.executor.memory: the memory size of the executor"),(0,o.yg)("li",{parentName:"ul"},"yarn.resourcemanager.address: address of the resourcemanager of the specified YARN"),(0,o.yg)("li",{parentName:"ul"},"max_filter_ratio: the upper limit of the filter ratio")),(0,o.yg)("h5",{id:"sparkloadjob"},"SparkLoadJob"),(0,o.yg)("p",null,"After a user sends a Spark Load statement, the statement will be parsed and a SparkLoadJob will be created."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SparkLoadJob:\n         +-------+-------+\n         |    PENDING    |-----------------|\n         +-------+-------+                 |\n                 | SparkLoadPendingTask    |\n                 v                         |\n         +-------+-------+                 |\n         |    LOADING    |-----------------|\n         +-------+-------+                 |\n                 | LoadLoadingTask         |\n                 v                         |\n         +-------+-------+                 |\n         |  COMMITTED    |-----------------|\n         +-------+-------+                 |\n                 |                         |\n                 v                         v  \n         +-------+-------+         +-------+-------+     \n         |   FINISHED    |         |   CANCELLED   |\n         +-------+-------+         +-------+-------+\n                 |                         \u039b\n                 +-------------------------+\n")),(0,o.yg)("p",null,"The above is the execution process of a SparkLoadJob."),(0,o.yg)("h5",{id:"sparkloadpendingtask"},"SparkLoadPendingTask"),(0,o.yg)("p",null,"A SparkLoadPendingTask is to commit a Spark ETL job to the Spark cluster. Since Spark supports various deployment modes (localhost, standalone, yarn, k8s), we need an abstraction of a generic interface for Spark ETL. The main tasks include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Commit a Spark ETL job"),(0,o.yg)("li",{parentName:"ul"},"Cancel a Spark ETL job"),(0,o.yg)("li",{parentName:"ul"},"Obtain status of the Spark ETL job")),(0,o.yg)("p",null,"A prototype of the interface:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"class SparkEtlJob {\n    // Commit a Spark ETL job\n    // Return JobId\n    String submitJob(TBrokerScanRangeParams params);\n\n    // Cancel a Spark ETL job\n    bool cancelJob(String jobId);\n\n    // Obtain status of the Spark ETL job\n    JobStatus getJobStatus(String jobId);\nprivate:\n    std::list<DataDescription> data_descriptions;\n};\n")),(0,o.yg)("p",null,"We hope to support various sub-classes to support different cluster deployment modes. And we hope to implement SparkEtlJobForYarn to support Spark Load for YARN clusters. The JobId in the above snippet is the aphid of the YARN cluster. One way to obtain the appid is to commit a Spark Job via the spark-submit client, analyze the standard error output, and retrieve the appid by text matching."),(0,o.yg)("p",null,"However, based on lessons drawn from Hadoop DPP jobs, we need to take care of job queuing issues: due to data volume or cluster queue reasons, the number of concurrent loading jobs might hit the limit and subsequent job commits might fail. One solution is to separately set a limit on the number of concurrent Spark Load jobs and a per-user concurrency limit, so as to avoid avoid interference between jobs of different users. "),(0,o.yg)("p",null,"Additionally, implementing a job scheduling system that prioritizes jobs based on their importance and allocates resources accordingly can ensure that critical jobs are processed first and that resources are used efficiently."),(0,o.yg)("p",null,"Key steps of executing a Spark ETL job include:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Type conversion\uff08extraction/transformation\uff09"),(0,o.yg)("p",{parentName:"li"},"Transfer the fields in the source file into column types (check if the fields are legal for function computation, etc.)")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Function computation (transformation), including negative computation"),(0,o.yg)("p",{parentName:"li"},'Complete computation of the specified function. Function list: "strftime", "time_format", "alignment_timestamp", "default_value", "md5sum", "replace_value", "now", "hll_hash", "substitute".')),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},'"columns from path" extraction')),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},'"where" filtering')),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Data partitioning and bucketing")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Data sorting and pre-aggregation"))),(0,o.yg)("p",null,"   The OlapTableSink includes data sorting and aggregation, so logically we don't need to implement them separately, ",(0,o.yg)("strong",{parentName:"p"},"but we decide to include them in the Spark ETL job in order to  improve BE efficiency by skipping these steps during loading in BE.")," We might change that based on future test performance.  "),(0,o.yg)("p",null,"   Another nut to crack to support global dictionary for bitmap since the bitmap columns of string type require global dictionary."),(0,o.yg)("p",null,"   To indicate whether the data sorting and aggregation have been completed, we plan to generate a a job.json description file upon job completion, which includes the following properties:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "is_segment_file" : "false",\n    "is_sort" : "true",\n    "is_agg" : "true",\n}\n')),(0,o.yg)("p",null,"   Explanation:\nis_sort: if the data is sorted\nis_agg: if the data is aggregated\nis_segment_file: if the generated files are segment files"),(0,o.yg)("ol",{start:7},(0,o.yg)("li",{parentName:"ol"},"Since the computation of Rollup is based on the base table, to optimize the generation of Rollups, we need to look into the index hierarchy.")),(0,o.yg)("p",null,"The tricky part is to support expression calculation for columns."),(0,o.yg)("p",null,"Lastly, for the storage format of the output file after a Spark Load job is finished, we plan to support CSV, Parquet, and ORC, and make Parquet the default option for higher storage efficiency."),(0,o.yg)("h5",{id:"loadloadingtask"},"LoadLoadingTask"),(0,o.yg)("p",null,"For the LoadLoadingTask, we can reuse our existing logic. What's different from BrokerLoadJob is, LoadLoadingTask doesn't need to include column mapping, function, computation, negative import, filtering, or aggregation, because they have all been done in SparkEtlTask. A LoadLoadingTask can just include simple column mapping and type conversion."),(0,o.yg)("h5",{id:"data-loading-to-be"},"Data loading to BE"),(0,o.yg)("p",null,"For this part, we can fully reuse the existing framework."),(0,o.yg)("h4",{id:"plan-b"},"Plan B"),(0,o.yg)("p",null,"Plan A can reuse our data loading framework to a great extend and realize support for large data import as soon as possible. But the downside is, data processed by the Spark ETL job is already partitioned into tablets, but our existing Broker Load framework will still partition and bucket the data, serialize it, and then send  data to the target BE nodes via RPC. The process generates extra overheads. "),(0,o.yg)("p",null,"So we have a second plan. Plan B is to generate Segment files of the Doris storage format after the SparkEtlJob. And then the three replicas should complete file loading via the add_rowset interface under a clone-like mechanism. The difference between Plan B and Plan A is that, in Plan B, you need to:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Add a tabletid suffix to the generated files"),(0,o.yg)("li",{parentName:"ol"},"Add an interface to SparkLoadPendingTask class: Map<long, Pair<String, Long>> getFilePathMap(). The interface returns the mapping relations between tabletid and files."),(0,o.yg)("li",{parentName:"ol"},'Add a "spark_push" interface to BE RPC service, in order to pull the transformed files after ETL to local machines (read via Broker) and then load data via the "add_rowset" interface using clone-like logic.'),(0,o.yg)("li",{parentName:"ol"},'Generate a new loading task: SparkLoadLoadingTask. The task is to read job.json files, parse the properties, and use the properties as RPC parameters. Then it calls the "spark_push" interface and sends a data loading request to the BE where the tablet is. The "spark_push" interface in BE will decide what to do based on the "is_segment_file" parameter. If it is true, it will download the segment file and add rowset; if it is false, it will follow the pusher logic and execute data loading.')),(0,o.yg)("p",null,"Plan B also moves the segment file generation workload to the Spark cluster, which can greatly reduce the burden on the Doris cluster and thus improve efficiency. However, in Plan B, the underlying rowset and the segment v2 interface will be packed into individual SO files, and we need to use Spark to call that interface to transfer data into segment files. "),(0,o.yg)("p",null," relies on packaging the underlying rowset and segment v2 interfaces into independent shared object (SO) files, and using Spark to call these interfaces to transform data into segment files."),(0,o.yg)("h2",{id:"conclusion"},"Conclusion"),(0,o.yg)("p",null,"As we compare two plans, Plan A allows for the least development work but the BE will undertake unnecessary workloads, while for Plan B, we can make use of our existing Hadoop data loading framework. Therefore, we plan to implement Spark Load in two steps."),(0,o.yg)("p",null,"Step 1: Go with Plan B and complete data partitioning, sorting, and aggregation in Spark, and generate Parquet files. Then we follow the Hadoop pusher process and transfer data formats in the BE."),(0,o.yg)("p",null,"Step 2: Encapsulate the database of segment writing, generate Doris formats directly, and add an RPC interface to implement clone-like data loading logic."))}c.isMDXComponent=!0}}]);