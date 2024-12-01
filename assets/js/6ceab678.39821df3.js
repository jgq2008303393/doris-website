"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[71157],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,y=s["".concat(d,".").concat(m)]||s[m]||g[m]||o;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},427854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const o={title:"Updating Overview",language:"en"},i=void 0,l={unversionedId:"data-operate/update/update-overview",id:"version-2.1/data-operate/update/update-overview",title:"Updating Overview",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/data-operate/update/update-overview.md",sourceDirName:"data-operate/update",slug:"/data-operate/update/update-overview",permalink:"/docs/data-operate/update/update-overview",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Updating Overview",language:"en"},sidebar:"docs",previous:{title:"Migrating Data from Other OLAP",permalink:"/docs/data-operate/import/migrate-data-from-other-olap"},next:{title:"Updating Data with UPDATE Command",permalink:"/docs/data-operate/update/unique-update"}},d={},p=[{value:"Update in Primary Key (Unique) Model",id:"update-in-primary-key-unique-model",level:2},{value:"Two Update Methods in Unique Key Model",id:"two-update-methods-in-unique-key-model",level:3},{value:"<code>UPDATE</code> statement",id:"update-statement",level:4},{value:"Batch update based on load",id:"batch-update-based-on-load",level:4},{value:"Update Transactions in Unique Key Model",id:"update-transactions-in-unique-key-model",level:3},{value:"Updating Data Using the <code>UPDATE</code> Statement",id:"updating-data-using-the-update-statement",level:4},{value:"Batch Updates Based on Load",id:"batch-updates-based-on-load",level:4},{value:"Update in Aggregate Model",id:"update-in-aggregate-model",level:2},{value:"Comparison of Update Capabilities for Different Models/Implementations",id:"comparison-of-update-capabilities-for-different-modelsimplementations",level:2},{value:"Performance Comparison",id:"performance-comparison",level:3},{value:"Feature Support Comparison",id:"feature-support-comparison",level:3}],u={toc:p},s="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Data update primarily refers to the modification of the value column of data with the same key. For the primary(unique) key model, this update involves replacing the existing value, while for the aggregate model, it involves aggregating the values in the value column."),(0,r.yg)("h2",{id:"update-in-primary-key-unique-model"},"Update in Primary Key (Unique) Model"),(0,r.yg)("p",null,"Starting from Doris 2.0, Doris primary key (unique) model supports both Merge-on-Read (MoR) and Merge-on-Write (MoW) storage modes. MoR is optimized for write operations, while MoW is optimized for faster analysis performance. In actual tests, the analysis performance of MoW storage can be 5-10 times faster than MoR."),(0,r.yg)("p",null,'By default, in Doris 2.0, the unique key model is still based on MoR. To create a MoW model, you need to manually specify the parameter "enable_unique_key_merge_on_write" as "true". Here\'s an example:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS example_tbl_unique_merge_on_write\n(\n    `user_id` LARGEINT NOT NULL,\n    `username` VARCHAR(50) NOT NULL ,\n    `city` VARCHAR(20),\n    `age` SMALLINT,\n    `sex` TINYINT,\n    `phone` LARGEINT,\n    `address` VARCHAR(500),\n    `register_time` DATETIME\n)\nUNIQUE KEY(`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"enable_unique_key_merge_on_write" = "true"\n);\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Starting from Doris 2.1, MoW is the default mode for the unique key model. So, if you are using Doris 2.1 or higher version, make sure to read the relevant table creation documentation.")),(0,r.yg)("h3",{id:"two-update-methods-in-unique-key-model"},"Two Update Methods in Unique Key Model"),(0,r.yg)("h4",{id:"update-statement"},(0,r.yg)("inlineCode",{parentName:"h4"},"UPDATE")," statement"),(0,r.yg)("p",null,"Whether it is MoR or MoW, the semantics ensure that the specified columns are updated. The time taken for a single UPDATE operation increases with the amount of data being updated."),(0,r.yg)("h4",{id:"batch-update-based-on-load"},"Batch update based on load"),(0,r.yg)("p",null,'Doris supports multiple data load methods, including Stream Load, Broker Load, Routine Load, and Insert Into. For primary key tables, all load operations default to "UPSERT" semantics: if a record with the same key does not exist, it is inserted; if it already exists, it is updated. There are two types of updates: full row updates and partial column updates.'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Full Row Update"),": Updates for Unique Key tables default to full row updates. During data loading, users can choose to provide either all fields or only part of them. If only partial fields are provided, Doris will fill in the missing fields with default values to form a complete record for updating.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Partial Column Update"),": Unique Key MoW supports partial column updates. Users can enable this feature by setting the session variable ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_unique_key_partial_update = true")," or by specifying ",(0,r.yg)("inlineCode",{parentName:"p"},"partial_columns:true")," in the HTTP Header. When enabled, if a record with the given primary key exists, only the specified fields are updated; if the primary key does not exist, the missing fields are filled with default values."))),(0,r.yg)("p",null,"We will provide detailed explanations of these two update methods in the documentation: ",(0,r.yg)("a",{parentName:"p",href:"../update/unique-update"},"Update in Unique Key Model")," and ",(0,r.yg)("a",{parentName:"p",href:"../update/update-of-unique-model"},"Load Update in Unique Key Model"),"."),(0,r.yg)("h3",{id:"update-transactions-in-unique-key-model"},"Update Transactions in Unique Key Model"),(0,r.yg)("h4",{id:"updating-data-using-the-update-statement"},"Updating Data Using the ",(0,r.yg)("inlineCode",{parentName:"h4"},"UPDATE")," Statement"),(0,r.yg)("p",null,"By default, Doris does not allow multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"UPDATE")," operations on the same table to occur concurrently. The ",(0,r.yg)("inlineCode",{parentName:"p"},"UPDATE")," statement uses table-level locking to ensure transactional consistency."),(0,r.yg)("p",null,"Users can adjust concurrency limits by modifying the FE configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_concurrent_update=true"),". When concurrency limits are relaxed, the ",(0,r.yg)("inlineCode",{parentName:"p"},"UPDATE")," statement will no longer provide transactional guarantees."),(0,r.yg)("h4",{id:"batch-updates-based-on-load"},"Batch Updates Based on Load"),(0,r.yg)("p",null,"Doris provides atomicity for all load update operations\u2014each data load will either be fully applied or fully rolled back."),(0,r.yg)("p",null,"For concurrent load updates, Doris determines the order of concurrent updates using an internal version control system (assigned based on the order of completed loading), using an MVCC mechanism."),(0,r.yg)("p",null,"Since the commit order of multiple concurrent load updates may be unpredictable, if these concurrent load jobs involve updates to the same primary key, the order in which they take effect is also uncertain. As a result, the final visible outcome may be indeterminate. To address this issue, Doris provides a ",(0,r.yg)("inlineCode",{parentName:"p"},"sequence")," column mechanism, allowing users to specify a version for each row in concurrent load updates, thus ensuring determinism in the outcome of concurrent updates."),(0,r.yg)("p",null,"For more detailed information on transaction mechanisms, refer to the documentation on ",(0,r.yg)("a",{parentName:"p",href:"/docs/data-operate/update/unique-update-transaction"},"Transactional Updates in the Primary Key Model"),"."),(0,r.yg)("h2",{id:"update-in-aggregate-model"},"Update in Aggregate Model"),(0,r.yg)("p",null,"The update in the aggregate model refers to the process of generating new aggregate values by combining new column values with existing aggregate values, according to the requirements of the aggregate functions."),(0,r.yg)("p",null,"New Agg Value = Agg Func ( Old Agg Value, New Column Value)"),(0,r.yg)("p",null,"The update in the aggregate model is only supported through load methods and does not support the use of Update statements. When defining a table in the aggregate model, if the aggregation function for the value column is defined as REPLACE_IF_NULL, it indirectly achieves partial column update capabilities similar to the unique key model. For more details, please refer to the documentation on ",(0,r.yg)("a",{parentName:"p",href:"../update/update-of-aggregate-model"},"Load Update in the Aggregate Model"),"."),(0,r.yg)("h2",{id:"comparison-of-update-capabilities-for-different-modelsimplementations"},"Comparison of Update Capabilities for Different Models/Implementations"),(0,r.yg)("h3",{id:"performance-comparison"},"Performance Comparison"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"Unique Key MoW"),(0,r.yg)("th",{parentName:"tr",align:null},"Unique Key MoR"),(0,r.yg)("th",{parentName:"tr",align:null},"Aggregate Key"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Import Speed"),(0,r.yg)("td",{parentName:"tr",align:null},"Deduplication is performed during import. Small-batch real-time writes incur approximately 10%-20% performance loss compared to MoR, while large-batch imports (e.g., tens or hundreds of millions of records) have about 30%-50% performance loss compared to MoR."),(0,r.yg)("td",{parentName:"tr",align:null},"Similar to Duplicate Key"),(0,r.yg)("td",{parentName:"tr",align:null},"Similar to Duplicate Key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Query Speed"),(0,r.yg)("td",{parentName:"tr",align:null},"Similar to Duplicate Key"),(0,r.yg)("td",{parentName:"tr",align:null},"Requires deduplication during queries, with query time approximately 3-10 times that of MoW"),(0,r.yg)("td",{parentName:"tr",align:null},"If the aggregation function is REPLACE/REPLACE_IF_NOT_NULL, query speed is similar to MoR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Predicate Pushdown"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Resource Consumption"),(0,r.yg)("td",{parentName:"tr",align:null},"- ",(0,r.yg)("strong",{parentName:"td"},"Import Resource Consumption"),": Consumes approximately 10%-30% more CPU compared to Duplicate Key/Unique Key MoR.",(0,r.yg)("br",null)," - ",(0,r.yg)("strong",{parentName:"td"},"Query Resource Consumption"),": Similar to Duplicate Key with no additional resource consumption.",(0,r.yg)("br",null)," - ",(0,r.yg)("strong",{parentName:"td"},"Compaction Resource Consumption"),": Higher memory and CPU usage compared to Duplicate Key, specific usage depends on data characteristics and volume."),(0,r.yg)("td",{parentName:"tr",align:null},"- ",(0,r.yg)("strong",{parentName:"td"},"Import Resource Consumption"),": Similar to Duplicate Key with no additional resource consumption.",(0,r.yg)("br",null)," - ",(0,r.yg)("strong",{parentName:"td"},"Query Resource Consumption"),": Higher CPU and memory consumption during queries compared to Duplicate Key/Unique Key MoW.",(0,r.yg)("br",null)," - ",(0,r.yg)("strong",{parentName:"td"},"Compaction Resource Consumption"),": Higher memory and CPU usage than Duplicate Key, specific usage depends on data characteristics and volume."),(0,r.yg)("td",{parentName:"tr",align:null},"Same as Unique Key MoR")))),(0,r.yg)("h3",{id:"feature-support-comparison"},"Feature Support Comparison"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null}),(0,r.yg)("th",{parentName:"tr",align:null},"Unique Key MoW"),(0,r.yg)("th",{parentName:"tr",align:null},"Unique Key MoR"),(0,r.yg)("th",{parentName:"tr",align:null},"Aggregate Key"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"UPDATE"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DELETE"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sequence column"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"delete_sign"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Partial Column Updates"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported(can't update null value)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Inverted Index"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported"),(0,r.yg)("td",{parentName:"tr",align:null},"Not Supported")))))}g.isMDXComponent=!0}}]);