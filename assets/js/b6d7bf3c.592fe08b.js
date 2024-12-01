"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[843402],{15680:(t,e,a)=>{a.d(e,{xA:()=>y,yg:()=>s});var n=a(296540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),o=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},y=function(t){var e=o(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,y=p(t,["components","mdxType","originalType","parentName"]),d=o(a),u=r,s=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(s,g(g({ref:e},y),{},{components:a})):n.createElement(s,g({ref:e},y))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:r,g[1]=p;for(var o=2;o<l;o++)g[o]=a[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},859020:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(58168),r=(a(296540),a(15680));const l={title:"Export Overview",language:"en"},g=void 0,p={unversionedId:"data-operate/export/export-overview",id:"version-3.0/data-operate/export/export-overview",title:"Export Overview",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/data-operate/export/export-overview.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-overview",permalink:"/docs/3.0/data-operate/export/export-overview",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Export Overview",language:"en"},sidebar:"docs",previous:{title:"Temporary Partition",permalink:"/docs/3.0/data-operate/delete/table-temp-partition"},next:{title:"Export",permalink:"/docs/3.0/data-operate/export/export-manual"}},i={},o=[{value:"Choosing Export Methods",id:"choosing-export-methods",level:2},{value:"SELECT INTO OUTFILE",id:"select-into-outfile",level:3},{value:"EXPORT",id:"export",level:3},{value:"MySQL Dump",id:"mysql-dump",level:3},{value:"Export File Column Type Mapping",id:"export-file-column-type-mapping",level:2}],y={toc:o},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.yg)(d,(0,n.A)({},y,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The data export function is used to write the query result set or Doris table data into the specified storage system in the specified file format."),(0,r.yg)("p",null,"The differences between the export function and the data backup function are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u2003"),(0,r.yg)("th",{parentName:"tr",align:null},"Data Export"),(0,r.yg)("th",{parentName:"tr",align:null},"Data Backup"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Final Storage Location"),(0,r.yg)("td",{parentName:"tr",align:null},"HDFS, Object Storage, Local File System"),(0,r.yg)("td",{parentName:"tr",align:null},"HDFS, Object Storage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Format"),(0,r.yg)("td",{parentName:"tr",align:null},"Open file formats such as Parquet, ORC, CSV"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris internal storage format")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Execution Speed"),(0,r.yg)("td",{parentName:"tr",align:null},"Moderate (requires reading data and converting to the target data format)"),(0,r.yg)("td",{parentName:"tr",align:null},"Fast (no parsing and conversion required, directly upload Doris data files)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Flexibility"),(0,r.yg)("td",{parentName:"tr",align:null},"Can flexibly define the data to be exported through SQL statements"),(0,r.yg)("td",{parentName:"tr",align:null},"Only supports table-level full backup")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Use Cases"),(0,r.yg)("td",{parentName:"tr",align:null},"Result set download, data exchange between different systems"),(0,r.yg)("td",{parentName:"tr",align:null},"Data backup, data migration between Doris clusters")))),(0,r.yg)("h2",{id:"choosing-export-methods"},"Choosing Export Methods"),(0,r.yg)("p",null,"Doris provides three different data export methods:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"SELECT INTO OUTFILE"),": Supports the export of any SQL result set."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"EXPORT"),": Supports the export of partial or full table data."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"MySQL DUMP"),": Compatible with the MySQL dump command for data export.")),(0,r.yg)("p",null,"The similarities and differences between the three export methods are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u2003"),(0,r.yg)("th",{parentName:"tr",align:null},"SELECT INTO OUTFILE"),(0,r.yg)("th",{parentName:"tr",align:null},"EXPORT"),(0,r.yg)("th",{parentName:"tr",align:null},"MySQL DUMP"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous/Asynchronous"),(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous"),(0,r.yg)("td",{parentName:"tr",align:null},"Asynchronous (submit EXPORT tasks and check task progress via SHOW EXPORT command)"),(0,r.yg)("td",{parentName:"tr",align:null},"Synchronous")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Supports any SQL"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Export specific partitions"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Export specific tablets"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Concurrent export"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported with high concurrency (depends on whether the SQL statement has operators such as ORDER BY that need to be processed on a single node)"),(0,r.yg)("td",{parentName:"tr",align:null},"Supported with high concurrency (supports tablet-level concurrent export)"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported, single-threaded export only")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Supported export data formats"),(0,r.yg)("td",{parentName:"tr",align:null},"Parquet, ORC, CSV"),(0,r.yg)("td",{parentName:"tr",align:null},"Parquet, ORC, CSV"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL Dump proprietary format")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Supports exporting external tables"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Partially supported"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Supports exporting views"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Supported export locations"),(0,r.yg)("td",{parentName:"tr",align:null},"S3, HDFS, LOCAL"),(0,r.yg)("td",{parentName:"tr",align:null},"S3, HDFS, LOCAL"),(0,r.yg)("td",{parentName:"tr",align:null},"LOCAL")))),(0,r.yg)("h3",{id:"select-into-outfile"},"SELECT INTO OUTFILE"),(0,r.yg)("p",null,"Suitable for the following scenarios:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Data needs to be exported after complex calculations, such as filtering, aggregation, joins, etc."),(0,r.yg)("li",{parentName:"ul"},"Suitable for scenarios that require synchronous tasks.")),(0,r.yg)("h3",{id:"export"},"EXPORT"),(0,r.yg)("p",null,"Suitable for the following scenarios:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Large-scale single table export, with simple filtering conditions."),(0,r.yg)("li",{parentName:"ul"},"Scenarios that require asynchronous task submission.")),(0,r.yg)("h3",{id:"mysql-dump"},"MySQL Dump"),(0,r.yg)("p",null,"Suitable for the following scenarios:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Compatible with the MySQL ecosystem, requires exporting both table structure and data."),(0,r.yg)("li",{parentName:"ul"},"Only for development testing or scenarios with very small data volumes.")),(0,r.yg)("h2",{id:"export-file-column-type-mapping"},"Export File Column Type Mapping"),(0,r.yg)("p",null,"Parquet and ORC file formats have their own data types. Doris's export function can automatically map Doris's data types to the corresponding data types in Parquet and ORC file formats. The CSV format does not have types, all data is output as text."),(0,r.yg)("p",null,"The following table shows the mapping between Doris data types and Parquet, ORC file format data types:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Doris export to ORC file format data type mapping table:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Orc Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datev2"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2"),(0,r.yg)("td",{parentName:"tr",align:null},"timestamp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char / varchar / string"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"array")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},"Not supported"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When Doris exports to Parquet file format, it first converts Doris in-memory data to Arrow in-memory data format, then writes out to Parquet file format. The mapping relationship between Doris data types and Arrow data types is:"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Arrow Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"int8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"int16")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"int64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datev2"),(0,r.yg)("td",{parentName:"tr",align:null},"Date32Type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2"),(0,r.yg)("td",{parentName:"tr",align:null},"TimestampType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"float64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char / varchar / string"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal128")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"list")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")))))))}m.isMDXComponent=!0}}]);