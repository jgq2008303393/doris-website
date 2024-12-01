"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[563142],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=g(a),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},584576:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=a(58168),r=(a(296540),a(15680));const l={title:"BladePipe",language:"en"},o=void 0,i={unversionedId:"ecosystem/cloudcanal",id:"version-3.0/ecosystem/cloudcanal",title:"BladePipe",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/ecosystem/cloudcanal.md",sourceDirName:"ecosystem",slug:"/ecosystem/cloudcanal",permalink:"/docs/3.0/ecosystem/cloudcanal",draft:!1,tags:[],version:"3.0",frontMatter:{title:"BladePipe",language:"en"},sidebar:"ecosystem",next:{title:"Spark Doris Connector",permalink:"/docs/3.0/ecosystem/spark-doris-connector"}},s={},g=[{value:"Functions",id:"functions",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Add DataSources",id:"add-datasources",level:3},{value:"Create a DataJob",id:"create-a-datajob",level:3}],p={toc:g},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.yg)(c,(0,n.A)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"BladePipe is a ",(0,r.yg)("strong",{parentName:"p"},"real-time end-to-end data replication")," tool, moving data between ",(0,r.yg)("strong",{parentName:"p"},"30+")," databases, message queues, search engines, caching, real-time data warehouses, data lakes and more, with ",(0,r.yg)("strong",{parentName:"p"},"ultra-low latency less than 3 seconds"),". It features efficiency, stability and scalability, compatibility with diverse database engines, one-stop management, enhanced security, and complex data transformation."),(0,r.yg)("h2",{id:"functions"},"Functions"),(0,r.yg)("p",null,"BladePipe presents a visual management interface, allowing you to easily create DataJobs to realize ",(0,r.yg)("strong",{parentName:"p"},"schema migration, data migration, synchronization, verification and correction"),", etc. In addition, more refined and customized configurations are supported by setting parameters. Now BladePipe supports data movement from the following source DataSources to Doris:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Source DataSource"),(0,r.yg)("th",{parentName:"tr",align:null},"Schema Migration"),(0,r.yg)("th",{parentName:"tr",align:null},"Data Migration"),(0,r.yg)("th",{parentName:"tr",align:null},"Data Sync"),(0,r.yg)("th",{parentName:"tr",align:null},"Verification & Correction"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MySQL/MariaDB/AuroraMySQL"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Oracle"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PostgreSQL/AuroraPostgreSQL"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SQL Server"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AutoMQ"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TiDB"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hana"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PolarDB-X"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For more functions and parameter settings, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://doc.bladepipe.com/dataMigrationAndSync/connection/mysql2?target=Doris"},"BladePipe Connections"),".")),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"https://doc.bladepipe.com/productOP/docker/install_worker_docker"},"Install Worker (Docker)")," or ",(0,r.yg)("a",{parentName:"p",href:"https://doc.bladepipe.com/productOP/binary/install_worker_binary"},"Install Worker (Binary)")," to download and install a BladePipe Worker."),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Taking a MySQL instance as an example, the following part describes how to move data from MySQL to Doris. "),(0,r.yg)("h3",{id:"add-datasources"},"Add DataSources"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Log in to the ",(0,r.yg)("a",{parentName:"p",href:"https://cloud.bladepipe.com/"},"BladePipe Cloud"),". Click ",(0,r.yg)("strong",{parentName:"p"},"DataSource")," > ",(0,r.yg)("strong",{parentName:"p"},"Add DataSource"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select MySQL and Doris as the Type respectively, and fill in the setup form accordingly.\n",(0,r.yg)("img",{alt:"Add DataSources-1",src:a(772128).A,width:"7008",height:"3868"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"Test Connection"),". After successful connection, click ",(0,r.yg)("strong",{parentName:"p"},"Add DataSource")," to add the DataSource.\n",(0,r.yg)("img",{alt:"Add DataSources-2",src:a(127163).A,width:"7020",height:"952"})))),(0,r.yg)("h3",{id:"create-a-datajob"},"Create a DataJob"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click DataJob > ",(0,r.yg)("a",{parentName:"p",href:"https://doc.bladepipe.com/operation/job_manage/create_job/create_full_incre_task"},"Create DataJob"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the source and target DataSources, and click ",(0,r.yg)("strong",{parentName:"p"},"Test Connection")," to ensure the connection to the source and target DataSources are both successful.\n",(0,r.yg)("img",{alt:"Create a DataJob-1",src:a(378162).A,width:"7008",height:"3880"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select ",(0,r.yg)("strong",{parentName:"p"},"Incremental")," for DataJob Type, together with the ",(0,r.yg)("strong",{parentName:"p"},"Full Data")," option.\n",(0,r.yg)("img",{alt:"Create a DataJob-2",src:a(759725).A,width:"7004",height:"3888"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the tables to be replicated.\n",(0,r.yg)("img",{alt:"Create a DataJob-3",src:a(717220).A,width:"7040",height:"3864"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the columns to be replicated.\n",(0,r.yg)("img",{alt:"Create a DataJob-4",src:a(630783).A,width:"7056",height:"3876"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Confirm the DataJob creation.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The DataJob runs automatically. BladePipe will automatically run the following DataTasks:   "))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Schema Migration"),": The schemas of the source tables will be migrated to the target instance.   "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Full Data"),": All existing data of the source tables will be fully migrated to the target instance.   "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Incremental"),": Ongoing data changes will be continuously synchronized to the target instance.\n",(0,r.yg)("img",{alt:"Create a DataJob-5",src:a(880529).A,width:"7044",height:"968"}))))}d.isMDXComponent=!0},772128:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bp-doris-1-edc2b9025db34ae70a10e145c30922c8.png"},127163:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bp-doris-2-9b96de6808c3c4ca6e285fe43a5324ea.png"},378162:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bp-doris-3-b40712eaa2421ebdd8dab6291115a338.png"},759725:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bp-doris-4-e7e5c0640e54163ded2d4b94de151923.png"},717220:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bp-doris-5-cda03389cff177055369aa4c73f24e25.png"},630783:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bp-doris-6-1a51a820d22b9bcb1c48aa364451438d.png"},880529:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bp-doris-8-eb7dd8e44eb2666bfaa6fbcfc8641885.png"}}]);