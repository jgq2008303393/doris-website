"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[367252],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),y=p(t),c=r,m=y["".concat(i,".").concat(c)]||y[c]||u[c]||l;return t?a.createElement(m,o(o({ref:n},d),{},{components:t})):a.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[y]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},243539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const l={title:"TPC-H Benchmark",language:"en"},o=void 0,s={unversionedId:"benchmark/tpch",id:"benchmark/tpch",title:"TPC-H Benchmark",description:"\x3c!--",source:"@site/docs/benchmark/tpch.md",sourceDirName:"benchmark",slug:"/benchmark/tpch",permalink:"/docs/dev/benchmark/tpch",draft:!1,tags:[],version:"current",frontMatter:{title:"TPC-H Benchmark",language:"en"},sidebar:"benchmark",previous:{title:"Star Schema Benchmark",permalink:"/docs/dev/benchmark/ssb"},next:{title:"TPC-DS Benchmark",permalink:"/docs/dev/benchmark/tpcds"}},i={},p=[{value:"1. Hardware Environment",id:"1-hardware-environment",level:2},{value:"2. Software Environment",id:"2-software-environment",level:2},{value:"3. Test Data Volume",id:"3-test-data-volume",level:2},{value:"4. Test SQL",id:"4-test-sql",level:2},{value:"5. Test Results",id:"5-test-results",level:2},{value:"6. Environmental Preparation",id:"6-environmental-preparation",level:2},{value:"7. Data Preparation",id:"7-data-preparation",level:2},{value:"7.1 Download and Install TPC-H Data Generation Tool",id:"71-download-and-install-tpc-h-data-generation-tool",level:3},{value:"7.2 Generating the TPC-H Test Set",id:"72-generating-the-tpc-h-test-set",level:3},{value:"7.3 Create Table",id:"73-create-table",level:3},{value:"7.3.1 Prepare the <code>doris-cluster.conf</code> File",id:"731-prepare-the-doris-clusterconf-file",level:4},{value:"Execute the Following Script to Generate and Create TPC-H Table",id:"execute-the-following-script-to-generate-and-create-tpc-h-table",level:4},{value:"7.4 Import Data",id:"74-import-data",level:3},{value:"7.5 Check Imported Data",id:"75-check-imported-data",level:3},{value:"7.6 Query Test",id:"76-query-test",level:3},{value:"7.6.1 Executing Query Scripts",id:"761-executing-query-scripts",level:4},{value:"7.6.2 Single SQL Execution",id:"762-single-sql-execution",level:4}],d={toc:p},y="wrapper";function u(e){let{components:n,...l}=e;return(0,r.yg)(y,(0,a.A)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"tpc-h-benchmark"},"TPC-H Benchmark"),(0,r.yg)("p",null,"TPC-H is a decision support benchmark (Decision Support Benchmark), which consists of a set of business-oriented special query and concurrent data modification. The data that is queried and populates the database has broad industry relevance. This benchmark demonstrates a decision support system that examines large amounts of data, executes highly complex queries, and answers key business questions. The performance index reported by TPC-H is called TPC-H composite query performance index per hour (QphH@Size), which reflects multiple aspects of the system's ability to process queries. These aspects include the database size chosen when executing the query, the query processing capability when the query is submitted by a single stream, and the query throughput when the query is submitted by many concurrent users."),(0,r.yg)("p",null,"This document mainly introduces the performance of Doris on the TPC-H 1000G test set."),(0,r.yg)("p",null,"On 22 queries on the TPC-H standard test data set, we conducted a comparison test based on Apache Doris 2.1.1-rc03 and Apache Doris 2.0.6 versions."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image-20220614114351241",src:t(241293).A,width:"2282",height:"608"})),(0,r.yg)("h2",{id:"1-hardware-environment"},"1. Hardware Environment"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Hardware"),(0,r.yg)("th",{parentName:"tr",align:null},"Configuration Instructions"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Number of mMachines"),(0,r.yg)("td",{parentName:"tr",align:null},"4 Tencent Cloud Virtual Machine\uff081FE\uff0c3BEs\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CPU"),(0,r.yg)("td",{parentName:"tr",align:null},"AMD EPYC\u2122 Milan(2.55GHz/3.5GHz)  48C")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Memory"),(0,r.yg)("td",{parentName:"tr",align:null},"192G")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Network"),(0,r.yg)("td",{parentName:"tr",align:null},"21Gbps")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Disk"),(0,r.yg)("td",{parentName:"tr",align:null},"ESSD Cloud Hard Disk")))),(0,r.yg)("h2",{id:"2-software-environment"},"2. Software Environment"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Doris Deployed 3BEs and 1FE"),(0,r.yg)("li",{parentName:"ul"},"Kernel Version: Linux version 5.4.0-96-generic (buildd@lgw01-amd64-051)"),(0,r.yg)("li",{parentName:"ul"},"OS version: Ubuntu 20.04 LTS (Focal Fossa)"),(0,r.yg)("li",{parentName:"ul"},"Doris software version: Apache Doris 2.1.1-rc03, Apache Doris 2.0.6."),(0,r.yg)("li",{parentName:"ul"},'JDK: openjdk version "1.8.0_131"')),(0,r.yg)("h2",{id:"3-test-data-volume"},"3. Test Data Volume"),(0,r.yg)("p",null,"The TPCH 1000G data generated by the simulation of the entire test are respectively imported into Apache Doris 2.1.1-rc03 and Apache Doris 2.0.6 for testing. The following is the relevant description and data volume of the table."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"TPC-H Table Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Rows"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Annotation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"REGION"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Region")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"NATION"),(0,r.yg)("td",{parentName:"tr",align:"left"},"25"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Nation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SUPPLIER"),(0,r.yg)("td",{parentName:"tr",align:"left"},"10,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Supplier")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"PART"),(0,r.yg)("td",{parentName:"tr",align:"left"},"200,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Parts")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"PARTSUPP"),(0,r.yg)("td",{parentName:"tr",align:"left"},"800,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Parts Supply")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CUSTOMER"),(0,r.yg)("td",{parentName:"tr",align:"left"},"150,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Customer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ORDERS"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1,500,000,000"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Orders")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"LINEITEM"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5,999,989,709"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Order Details")))),(0,r.yg)("h2",{id:"4-test-sql"},"4. Test SQL"),(0,r.yg)("p",null,"TPCH 22 test query statements : ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/tpch-tools/queries/sf1000"},"TPCH-Query-SQL")),(0,r.yg)("h2",{id:"5-test-results"},"5. Test Results"),(0,r.yg)("p",null,"Here we use Apache Doris 2.1.1-rc03 and Apache Doris 2.0.6 for comparative testing. In the test, we use Query Time(ms) as the main performance indicator. The test results are as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query"),(0,r.yg)("th",{parentName:"tr",align:null},"Apache Doris 2.1.1-rc03 (ms)"),(0,r.yg)("th",{parentName:"tr",align:null},"Apache Doris 2.0.6 (ms)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q1"),(0,r.yg)("td",{parentName:"tr",align:null},"7240"),(0,r.yg)("td",{parentName:"tr",align:null},"7638")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q2"),(0,r.yg)("td",{parentName:"tr",align:null},"249"),(0,r.yg)("td",{parentName:"tr",align:null},"377")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q3"),(0,r.yg)("td",{parentName:"tr",align:null},"3528"),(0,r.yg)("td",{parentName:"tr",align:null},"4389")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q4"),(0,r.yg)("td",{parentName:"tr",align:null},"1534"),(0,r.yg)("td",{parentName:"tr",align:null},"1903")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q5"),(0,r.yg)("td",{parentName:"tr",align:null},"5457"),(0,r.yg)("td",{parentName:"tr",align:null},"6425")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q6"),(0,r.yg)("td",{parentName:"tr",align:null},"159"),(0,r.yg)("td",{parentName:"tr",align:null},"150")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q7"),(0,r.yg)("td",{parentName:"tr",align:null},"1598"),(0,r.yg)("td",{parentName:"tr",align:null},"3141")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q8"),(0,r.yg)("td",{parentName:"tr",align:null},"2958"),(0,r.yg)("td",{parentName:"tr",align:null},"2792")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q9"),(0,r.yg)("td",{parentName:"tr",align:null},"14803"),(0,r.yg)("td",{parentName:"tr",align:null},"24732")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q10"),(0,r.yg)("td",{parentName:"tr",align:null},"6743"),(0,r.yg)("td",{parentName:"tr",align:null},"7315")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q11"),(0,r.yg)("td",{parentName:"tr",align:null},"414"),(0,r.yg)("td",{parentName:"tr",align:null},"395")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q12"),(0,r.yg)("td",{parentName:"tr",align:null},"371"),(0,r.yg)("td",{parentName:"tr",align:null},"417")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q13"),(0,r.yg)("td",{parentName:"tr",align:null},"6203"),(0,r.yg)("td",{parentName:"tr",align:null},"8095")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q14"),(0,r.yg)("td",{parentName:"tr",align:null},"485"),(0,r.yg)("td",{parentName:"tr",align:null},"681")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q15"),(0,r.yg)("td",{parentName:"tr",align:null},"2246"),(0,r.yg)("td",{parentName:"tr",align:null},"1459")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q16"),(0,r.yg)("td",{parentName:"tr",align:null},"1252"),(0,r.yg)("td",{parentName:"tr",align:null},"1382")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q17"),(0,r.yg)("td",{parentName:"tr",align:null},"1461"),(0,r.yg)("td",{parentName:"tr",align:null},"1204")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q18"),(0,r.yg)("td",{parentName:"tr",align:null},"10428"),(0,r.yg)("td",{parentName:"tr",align:null},"11386")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q19"),(0,r.yg)("td",{parentName:"tr",align:null},"2329"),(0,r.yg)("td",{parentName:"tr",align:null},"2172")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q20"),(0,r.yg)("td",{parentName:"tr",align:null},"569"),(0,r.yg)("td",{parentName:"tr",align:null},"1455")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q21"),(0,r.yg)("td",{parentName:"tr",align:null},"5574"),(0,r.yg)("td",{parentName:"tr",align:null},"6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Q22"),(0,r.yg)("td",{parentName:"tr",align:null},"1042"),(0,r.yg)("td",{parentName:"tr",align:null},"1517")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Total")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"76643")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"95595"))))),(0,r.yg)("h2",{id:"6-environmental-preparation"},"6. Environmental Preparation"),(0,r.yg)("p",null,"Please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/dev/install/cluster-deployment/standard-deployment"},"official document")," to install and deploy Doris to obtain a normal running Doris cluster (at least 1 FE 1 BE, 1 FE 3 BE is recommended)."),(0,r.yg)("h2",{id:"7-data-preparation"},"7. Data Preparation"),(0,r.yg)("h3",{id:"71-download-and-install-tpc-h-data-generation-tool"},"7.1 Download and Install TPC-H Data Generation Tool"),(0,r.yg)("p",null,"Execute the following script to download and compile the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/tools/tpch-tools"},"tpch-tools")," tool."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/build-tpch-dbgen.sh\n")),(0,r.yg)("p",null,"After successful installation, the ",(0,r.yg)("inlineCode",{parentName:"p"},"dbgen")," binary will be generated under the ",(0,r.yg)("inlineCode",{parentName:"p"},"TPC-H_Tools_v3.0.0/")," directory."),(0,r.yg)("h3",{id:"72-generating-the-tpc-h-test-set"},"7.2 Generating the TPC-H Test Set"),(0,r.yg)("p",null,"Execute the following script to generate the TPC-H dataset:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/gen-tpch-data.sh -s 1000\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note 1: Check the script help via ",(0,r.yg)("inlineCode",{parentName:"p"},"sh gen-tpch-data.sh -h"),"."),(0,r.yg)("p",{parentName:"blockquote"},"Note 2: The data will be generated under the ",(0,r.yg)("inlineCode",{parentName:"p"},"tpch-data/")," directory with the suffix ",(0,r.yg)("inlineCode",{parentName:"p"},".tbl"),". The total file size is about 1000GB and may need a few minutes to an hour to generate."),(0,r.yg)("p",{parentName:"blockquote"},"Note 3: A standard test data set of 100G is generated by default.")),(0,r.yg)("h3",{id:"73-create-table"},"7.3 Create Table"),(0,r.yg)("h4",{id:"731-prepare-the-doris-clusterconf-file"},"7.3.1 Prepare the ",(0,r.yg)("inlineCode",{parentName:"h4"},"doris-cluster.conf")," File"),(0,r.yg)("p",null,"Before import the script, you need to write the FE\u2019s ip port and other information in the ",(0,r.yg)("inlineCode",{parentName:"p"},"doris-cluster.conf")," file."),(0,r.yg)("p",null,"The file is located under ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/tools/tpch-tools/conf/")," ."),(0,r.yg)("p",null,"The content of the file includes FE's ip, HTTP port, user name, password and the DB name of the data to be imported:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Any of FE host\nexport FE_HOST='127.0.0.1'\n# http_port in fe.conf\nexport FE_HTTP_PORT=8030\n# query_port in fe.conf\nexport FE_QUERY_PORT=9030\n# Doris username\nexport USER='root'\n# Doris password\nexport PASSWORD=''\n# The database where TPC-H tables located\nexport DB='tpch'\n")),(0,r.yg)("h4",{id:"execute-the-following-script-to-generate-and-create-tpc-h-table"},"Execute the Following Script to Generate and Create TPC-H Table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/create-tpch-tables.sh -s 1000\n")),(0,r.yg)("p",null,"Or copy the table creation statement in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/tools/tpch-tools/ddl/create-tpch-tables-sf1000.sql"},"create-tpch-tables.sql")," and excute it in Doris."),(0,r.yg)("h3",{id:"74-import-data"},"7.4 Import Data"),(0,r.yg)("p",null,"Please perform data import with the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/load-tpch-data.sh\n")),(0,r.yg)("h3",{id:"75-check-imported-data"},"7.5 Check Imported Data"),(0,r.yg)("p",null,"Execute the following SQL statement to check that the imported data is consistent with the above data."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select count(*)  from  lineitem;\nselect count(*)  from  orders;\nselect count(*)  from  partsupp;\nselect count(*)  from  part;\nselect count(*)  from  customer;\nselect count(*)  from  supplier;\nselect count(*)  from  nation;\nselect count(*)  from  region;\nselect count(*)  from  revenue0;\n")),(0,r.yg)("h3",{id:"76-query-test"},"7.6 Query Test"),(0,r.yg)("h4",{id:"761-executing-query-scripts"},"7.6.1 Executing Query Scripts"),(0,r.yg)("p",null,"Execute the above test SQL or execute the following command"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"sh bin/run-tpch-queries.sh -s 1000\n")),(0,r.yg)("h4",{id:"762-single-sql-execution"},"7.6.2 Single SQL Execution"),(0,r.yg)("p",null,"The following is the SQL statement used in the test, you can also get the latest SQL from the code base."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"--Q1\nselect\n    l_returnflag,\n    l_linestatus,\n    sum(l_quantity) as sum_qty,\n    sum(l_extendedprice) as sum_base_price,\n    sum(l_extendedprice * (1 - l_discount)) as sum_disc_price,\n    sum(l_extendedprice * (1 - l_discount) * (1 + l_tax)) as sum_charge,\n    avg(l_quantity) as avg_qty,\n    avg(l_extendedprice) as avg_price,\n    avg(l_discount) as avg_disc,\n    count(*) as count_order\nfrom\n    lineitem\nwhere\n    l_shipdate <= date '1998-12-01' - interval '90' day\ngroup by\n    l_returnflag,\n    l_linestatus\norder by\n    l_returnflag,\n    l_linestatus;\n\n--Q2\nselect\n    s_acctbal,\n    s_name,\n    n_name,\n    p_partkey,\n    p_mfgr,\n    s_address,\n    s_phone,\n    s_comment\nfrom\n    part,\n    supplier,\n    partsupp,\n    nation,\n    region\nwhere\n    p_partkey = ps_partkey\n    and s_suppkey = ps_suppkey\n    and p_size = 15\n    and p_type like '%BRASS'\n    and s_nationkey = n_nationkey\n    and n_regionkey = r_regionkey\n    and r_name = 'EUROPE'\n    and ps_supplycost = (\n        select\n            min(ps_supplycost)\n        from\n            partsupp,\n            supplier,\n            nation,\n            region\n        where\n        p_partkey = ps_partkey\n        and s_suppkey = ps_suppkey\n        and s_nationkey = n_nationkey\n        and n_regionkey = r_regionkey\n        and r_name = 'EUROPE'\n)\norder by\n    s_acctbal desc,\n    n_name,\n    s_name,\n    p_partkey\nlimit 100;\n\n--Q3\nselect\n    l_orderkey,\n    sum(l_extendedprice * (1 - l_discount)) as revenue,\n    o_orderdate,\n    o_shippriority\nfrom\n    customer,\n    orders,\n    lineitem\nwhere\n    c_mktsegment = 'BUILDING'\n    and c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and o_orderdate < date '1995-03-15'\n    and l_shipdate > date '1995-03-15'\ngroup by\n    l_orderkey,\n    o_orderdate,\n    o_shippriority\norder by\n    revenue desc,\n    o_orderdate\nlimit 10;\n\n--Q4\nselect\n    o_orderpriority,\n    count(*) as order_count\nfrom\n    orders\nwhere\n    o_orderdate >= date '1993-07-01'\n    and o_orderdate < date '1993-07-01' + interval '3' month\n    and exists (\n        select\n            *\n        from\n            lineitem\n        where\n                l_orderkey = o_orderkey\n          and l_commitdate < l_receiptdate\n    )\ngroup by\n    o_orderpriority\norder by\n    o_orderpriority;\n\n--Q5\nselect\n    n_name,\n    sum(l_extendedprice * (1 - l_discount)) as revenue\nfrom\n    customer,\n    orders,\n    lineitem,\n    supplier,\n    nation,\n    region\nwhere\n    c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and l_suppkey = s_suppkey\n    and c_nationkey = s_nationkey\n    and s_nationkey = n_nationkey\n    and n_regionkey = r_regionkey\n    and r_name = 'ASIA'\n    and o_orderdate >= date '1994-01-01'\n    and o_orderdate < date '1994-01-01' + interval '1' year\ngroup by\n    n_name\norder by\n    revenue desc;\n\n--Q6\nselect\n    sum(l_extendedprice * l_discount) as revenue\nfrom\n    lineitem\nwhere\n    l_shipdate >= date '1994-01-01'\n    and l_shipdate < date '1994-01-01' + interval '1' year\n    and l_discount between .06 - 0.01 and .06 + 0.01\n    and l_quantity < 24;\n\n--Q7\nselect\n    supp_nation,\n    cust_nation,\n    l_year,\n    sum(volume) as revenue\nfrom\n    (\n        select\n            n1.n_name as supp_nation,\n            n2.n_name as cust_nation,\n            extract(year from l_shipdate) as l_year,\n            l_extendedprice * (1 - l_discount) as volume\n        from\n            supplier,\n            lineitem,\n            orders,\n            customer,\n            nation n1,\n            nation n2\n        where\n            s_suppkey = l_suppkey\n            and o_orderkey = l_orderkey\n            and c_custkey = o_custkey\n            and s_nationkey = n1.n_nationkey\n            and c_nationkey = n2.n_nationkey\n            and (\n                (n1.n_name = 'FRANCE' and n2.n_name = 'GERMANY')\n                or (n1.n_name = 'GERMANY' and n2.n_name = 'FRANCE')\n            )\n            and l_shipdate between date '1995-01-01' and date '1996-12-31'\n    ) as shipping\ngroup by\n    supp_nation,\n    cust_nation,\n    l_year\norder by\n    supp_nation,\n    cust_nation,\n    l_year;\n\n--Q8\n\nselect\n    o_year,\n    sum(case\n        when nation = 'BRAZIL' then volume\n        else 0\n    end) / sum(volume) as mkt_share\nfrom\n    (\n        select\n            extract(year from o_orderdate) as o_year,\n            l_extendedprice * (1 - l_discount) as volume,\n            n2.n_name as nation\n        from\n            part,\n            supplier,\n            lineitem,\n            orders,\n            customer,\n            nation n1,\n            nation n2,\n            region\n        where\n            p_partkey = l_partkey\n            and s_suppkey = l_suppkey\n            and l_orderkey = o_orderkey\n            and o_custkey = c_custkey\n            and c_nationkey = n1.n_nationkey\n            and n1.n_regionkey = r_regionkey\n            and r_name = 'AMERICA'\n            and s_nationkey = n2.n_nationkey\n            and o_orderdate between date '1995-01-01' and date '1996-12-31'\n            and p_type = 'ECONOMY ANODIZED STEEL'\n    ) as all_nations\ngroup by\n    o_year\norder by\n    o_year;\n\n--Q9\nselect\n    nation,\n    o_year,\n    sum(amount) as sum_profit\nfrom\n    (\n        select\n            n_name as nation,\n            extract(year from o_orderdate) as o_year,\n            l_extendedprice * (1 - l_discount) - ps_supplycost * l_quantity as amount\n        from\n            part,\n            supplier,\n            lineitem,\n            partsupp,\n            orders,\n            nation\n        where\n            s_suppkey = l_suppkey\n            and ps_suppkey = l_suppkey\n            and ps_partkey = l_partkey\n            and p_partkey = l_partkey\n            and o_orderkey = l_orderkey\n            and s_nationkey = n_nationkey\n            and p_name like '%green%'\n    ) as profit\ngroup by\n    nation,\n    o_year\norder by\n    nation,\n    o_year desc;\n\n--Q10\nselect\n    c_custkey,\n    c_name,\n    sum(l_extendedprice * (1 - l_discount)) as revenue,\n    c_acctbal,\n    n_name,\n    c_address,\n    c_phone,\n    c_comment\nfrom\n    customer,\n    orders,\n    lineitem,\n    nation\nwhere\n    c_custkey = o_custkey\n    and l_orderkey = o_orderkey\n    and o_orderdate >= date '1993-10-01'\n    and o_orderdate < date '1993-10-01' + interval '3' month\n    and l_returnflag = 'R'\n    and c_nationkey = n_nationkey\ngroup by\n    c_custkey,\n    c_name,\n    c_acctbal,\n    c_phone,\n    n_name,\n    c_address,\n    c_comment\norder by\n    revenue desc\nlimit 20;\n\n\n--Q11\nselect\n    ps_partkey,\n    sum(ps_supplycost * ps_availqty) as value\nfrom\n    partsupp,\n    supplier,\n    nation\nwhere\n    ps_suppkey = s_suppkey\n    and s_nationkey = n_nationkey\n    and n_name = 'GERMANY'\ngroup by\n    ps_partkey having\n    sum(ps_supplycost * ps_availqty) > (\n        select\n        sum(ps_supplycost * ps_availqty) * 0.000002\n        from\n            partsupp,\n            supplier,\n            nation\n        where\n            ps_suppkey = s_suppkey\n            and s_nationkey = n_nationkey\n            and n_name = 'GERMANY'\n    )\norder by\n    value desc;\n\n--Q12\nselect\n    l_shipmode,\n    sum(case\n        when o_orderpriority = '1-URGENT'\n            or o_orderpriority = '2-HIGH'\n            then 1\n        else 0\n    end) as high_line_count,\n    sum(case\n        when o_orderpriority <> '1-URGENT'\n            and o_orderpriority <> '2-HIGH'\n            then 1\n        else 0\n    end) as low_line_count\nfrom\n    orders,\n    lineitem\nwhere\n    o_orderkey = l_orderkey\n    and l_shipmode in ('MAIL', 'SHIP')\n    and l_commitdate < l_receiptdate\n    and l_shipdate < l_commitdate\n    and l_receiptdate >= date '1994-01-01'\n    and l_receiptdate < date '1994-01-01' + interval '1' year\ngroup by\n    l_shipmode\norder by\n    l_shipmode;\n\n--Q13\nselect\n    c_count,\n    count(*) as custdist\nfrom\n    (\n        select\n            c_custkey,\n            count(o_orderkey) as c_count\n        from\n            customer left outer join orders on\n                c_custkey = o_custkey\n                and o_comment not like '%special%requests%'\n        group by\n            c_custkey\n    ) as c_orders\ngroup by\n    c_count\norder by\n    custdist desc,\n    c_count desc;\n\n--Q14\nselect\n    100.00 * sum(case\n        when p_type like 'PROMO%'\n            then l_extendedprice * (1 - l_discount)\n        else 0\n    end) / sum(l_extendedprice * (1 - l_discount)) as promo_revenue\nfrom\n    lineitem,\n    part\nwhere\n    l_partkey = p_partkey\n    and l_shipdate >= date '1995-09-01'\n    and l_shipdate < date '1995-09-01' + interval '1' month;\n\n--Q15\nselect\n    s_suppkey,\n    s_name,\n    s_address,\n    s_phone,\n    total_revenue\nfrom\n    supplier,\n    revenue0\nwhere\n    s_suppkey = supplier_no\n    and total_revenue = (\n        select\n            max(total_revenue)\n        from\n            revenue0\n    )\norder by\n    s_suppkey;\n\n--Q16\nselect\n    p_brand,\n    p_type,\n    p_size,\n    count(distinct ps_suppkey) as supplier_cnt\nfrom\n    partsupp,\n    part\nwhere\n    p_partkey = ps_partkey\n    and p_brand <> 'Brand#45'\n    and p_type not like 'MEDIUM POLISHED%'\n    and p_size in (49, 14, 23, 45, 19, 3, 36, 9)\n    and ps_suppkey not in (\n        select\n            s_suppkey\n        from\n            supplier\n        where\n            s_comment like '%Customer%Complaints%'\n    )\ngroup by\n    p_brand,\n    p_type,\n    p_size\norder by\n    supplier_cnt desc,\n    p_brand,\n    p_type,\n    p_size;\n\n--Q17\nselect\n    sum(l_extendedprice) / 7.0 as avg_yearly\nfrom\n    lineitem,\n    part\nwhere\n    p_partkey = l_partkey\n    and p_brand = 'Brand#23'\n    and p_container = 'MED BOX'\n    and l_quantity < (\n        select\n            0.2 * avg(l_quantity)\n        from\n            lineitem\n        where\n            l_partkey = p_partkey\n    );\n\n--Q18\nselect\n    c_name,\n    c_custkey,\n    o_orderkey,\n    o_orderdate,\n    o_totalprice,\n    sum(l_quantity)\nfrom\n    customer,\n    orders,\n    lineitem\nwhere\n    o_orderkey  in  (\n        select\n            l_orderkey\n        from\n            lineitem\n        group  by\n            l_orderkey  having\n                sum(l_quantity)  >  300\n    )\n    and  c_custkey  =  o_custkey\n    and  o_orderkey  =  l_orderkey\ngroup  by\n    c_name,\n    c_custkey,\n    o_orderkey,\n    o_orderdate,\n    o_totalprice\norder  by\n    o_totalprice  desc,\n    o_orderdate\nlimit  100;\n\n\n--Q19\nselect\n    sum(l_extendedprice* (1 - l_discount)) as revenue\nfrom\n    lineitem,\n    part\nwhere\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#12'\n        and p_container in ('SM CASE', 'SM BOX', 'SM PACK', 'SM PKG')\n        and l_quantity >= 1 and l_quantity <= 1 + 10\n        and p_size between 1 and 5\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    )\n    or\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#23'\n        and p_container in ('MED BAG', 'MED BOX', 'MED PKG', 'MED PACK')\n        and l_quantity >= 10 and l_quantity <= 10 + 10\n        and p_size between 1 and 10\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    )\n    or\n    (\n        p_partkey = l_partkey\n        and p_brand = 'Brand#34'\n        and p_container in ('LG CASE', 'LG BOX', 'LG PACK', 'LG PKG')\n        and l_quantity >= 20 and l_quantity <= 20 + 10\n        and p_size between 1 and 15\n        and l_shipmode in ('AIR', 'AIR REG')\n        and l_shipinstruct = 'DELIVER IN PERSON'\n    );\n\n--Q20\nselect\n    s_name,\n    s_address\nfrom\n    supplier,\n    nation\nwhere\n    s_suppkey in (\n        select\n            ps_suppkey\n        from\n            partsupp\n        where\n            ps_partkey in (\n                select\n                    p_partkey\n                from\n                    part\n                where\n                        p_name like 'forest%'\n            )\n            and ps_availqty > (\n                select\n                    0.5 * sum(l_quantity)\n                from\n                    lineitem\n                where\n                    l_partkey = ps_partkey\n                    and l_suppkey = ps_suppkey\n                    and l_shipdate >= date '1994-01-01'\n                    and l_shipdate < date '1994-01-01' + interval '1' year\n            )\n    )\n    and s_nationkey = n_nationkey\n    and n_name = 'CANADA'\norder by\n    s_name;\n\n--Q21\nselect\n    s_name,\n    count(*) as numwait\nfrom\n    supplier,\n    lineitem l1,\n    orders,\n    nation\nwhere\n    s_suppkey = l1.l_suppkey\n    and o_orderkey = l1.l_orderkey\n    and o_orderstatus = 'F'\n    and l1.l_receiptdate > l1.l_commitdate\n    and exists (\n        select\n            *\n        from\n            lineitem l2\n        where\n                l2.l_orderkey = l1.l_orderkey\n          and l2.l_suppkey <> l1.l_suppkey\n    )\n    and not exists (\n        select\n            *\n        from\n            lineitem l3\n        where\n                l3.l_orderkey = l1.l_orderkey\n          and l3.l_suppkey <> l1.l_suppkey\n          and l3.l_receiptdate > l3.l_commitdate\n    )\n    and s_nationkey = n_nationkey\n    and n_name = 'SAUDI ARABIA'\ngroup by\n    s_name\norder by\n    numwait desc,\n    s_name\nlimit 100;\n\n--Q22\nselect\n    cntrycode,\n    count(*) as numcust,\n    sum(c_acctbal) as totacctbal\nfrom\n    (\n        select\n            substring(c_phone, 1, 2) as cntrycode,\n            c_acctbal\n        from\n            customer\n        where\n            substring(c_phone, 1, 2) in\n            ('13', '31', '23', '29', '30', '18', '17')\n            and c_acctbal > (\n                select\n                    avg(c_acctbal)\n                from\n                    customer\n                where\n                    c_acctbal > 0.00\n                    and substring(c_phone, 1, 2) in\n                      ('13', '31', '23', '29', '30', '18', '17')\n            )\n            and not exists (\n                select\n                    *\n                from\n                    orders\n                where\n                    o_custkey = c_custkey\n            )\n    ) as custsale\ngroup by\n    cntrycode\norder by\n    cntrycode;\n\n")))}u.isMDXComponent=!0},241293:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/tpch_2.1-4d123469b2b375a1c8ab400438af5b8c.png"}}]);