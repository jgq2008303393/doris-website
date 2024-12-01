"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[228880],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,d=p["".concat(l,".").concat(y)]||p[y]||g[y]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},747515:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const o={title:"Hybrid Storage",language:"en"},i=void 0,s={unversionedId:"table-design/row-store",id:"version-3.0/table-design/row-store",title:"Hybrid Storage",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/table-design/row-store.md",sourceDirName:"table-design",slug:"/table-design/row-store",permalink:"/docs/3.0/table-design/row-store",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Hybrid Storage",language:"en"},sidebar:"docs",previous:{title:"Usage Notes",permalink:"/docs/3.0/table-design/data-model/tips"},next:{title:"Basic concepts",permalink:"/docs/3.0/table-design/data-partitioning/basic-concepts"}},l={},c=[{value:"Hybrid Storage",id:"hybrid-storage",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Notice",id:"notice",level:2}],u={toc:c},p="wrapper";function g(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"hybrid-storage"},"Hybrid Storage"),(0,a.yg)("p",null,"Doris defaults to columnar storage, where each column is stored contiguously. Columnar storage offers excellent performance for analytical scenarios (such as aggregation, filtering, sorting, etc.), as it only reads the necessary columns, reducing unnecessary IO. However, in point query scenarios (such as ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT *"),"), all columns need to be read, requiring an IO operation for each column, which can lead to IOPS becoming a bottleneck, especially for wide tables with many columns (e.g., hundreds of columns)."),(0,a.yg)("p",null,"To address the IOPS bottleneck in point query scenarios, starting from version 2.0.0, Doris supports hybrid storage. When users create tables, they can specify whether to enable row storage. With row storage enabled, each row only requires one IO operation for point queries (such as ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT *"),"), significantly improving performance."),(0,a.yg)("p",null,"The principle of row storage is that an additional column is added during storage. This column concatenates all the columns of the corresponding row and stores them using a special binary format."),(0,a.yg)("h2",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"When creating a table, specify whether to enable row storage, which columns to enable row storage for, and the storage compression unit size page_size in the table's PROPERTIES."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Whether to enable row storage: defaults to false (not enabled).")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Which columns to enable row storage for:if ",(0,a.yg)("inlineCode",{parentName:"li"},'"store_row_column" = "true"'),", all columns are enabled by default. If you need to specify that only some columns are enabled for row storage, set the row_store_columns parameter, formatted as a comma-separated list of column names.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"row_store_columns" = "column1,column2,column3"\n')),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Row storage page_size: defaults to 16KB.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"row_store_page_size" = "16384"\n')),(0,a.yg)("p",null,"The page is the smallest unit of storage read/write operations, and page_size is the size of the row storage page. This means that reading one row also requires generating an IO for a page. The larger the value, the better the compression effect and the lower the storage space usage, but the higher the IO overhead for point queries (since one IO reads at least one page), and vice versa. The smaller the value, the higher the storage space, the better the point query performance. The default value of 16KB is a balanced choice in most cases. If you prefer query performance, you can configure a smaller value such as 4KB or even lower. If you prefer storage space, you can configure a larger value such as 64KB or even higher."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,'The example below creates an 8-column table, where "key,v1,v3,v5,v7" are the 5 columns enabled for row storage. To optimize for high-concurrency point query performance, the page_size is configured to 4KB.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE `tbl_point_query` (\n     `key` int(11) NULL,\n     `v1` decimal(27, 9) NULL,\n     `v2` varchar(30) NULL,\n     `v3` varchar(30) NULL,\n     `v4` date NULL,\n     `v5` datetime NULL,\n     `v6` float NULL,\n     `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key`) BUCKETS 1\nPROPERTIES (\n     "enable_unique_key_merge_on_write" = "true",\n     "light_schema_change" = "true",\n     "row_store_columns" = "key,v1,v3,v5,v7",\n     "row_store_page_size" = "4096"\n);\n')),(0,a.yg)("p",null,"Query"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT key, v1, v3, v5, v7 FROM tbl_point_query WHERE key = 100\uff1b\n")),(0,a.yg)("p",null,"For more information on point query usage, please refer to ",(0,a.yg)("a",{parentName:"p",href:"../query-acceleration/high-concurrent-point-query"},"High-Concurrent Point Query"),"."),(0,a.yg)("h2",{id:"notice"},"Notice"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Enabling row storage will increase the storage space used. The increase in storage space is related to the data characteristics and is generally 2 to 10 times the size of the original table. The exact space usage needs to be tested with actual data."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"page_size")," of row storage also affects the storage space. You can adjust it based on the previous table attribute parameter ",(0,a.yg)("inlineCode",{parentName:"li"},"row_store_page_size"),".")))}g.isMDXComponent=!0}}]);