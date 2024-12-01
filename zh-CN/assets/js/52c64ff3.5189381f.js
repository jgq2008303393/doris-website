"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[9894],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>s});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),m=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},g=function(e){var a=m(e.components);return r.createElement(i.Provider,{value:a},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},N=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),y=m(t),N=n,s=y["".concat(i,".").concat(N)]||y[N]||d[N]||o;return t?r.createElement(s,l(l({ref:a},g),{},{components:t})):r.createElement(s,l({ref:a},g))}));function s(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=N;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[y]="string"==typeof e?e:n,l[1]=p;for(var m=2;m<o;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}N.displayName="MDXCreateElement"},70241:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var r=t(58168),n=(t(296540),t(15680));const o={title:"\u5bfc\u5165\u6982\u89c8",language:"zh-CN"},l=void 0,p={unversionedId:"data-operate/import/load-manual",id:"version-2.1/data-operate/import/load-manual",title:"\u5bfc\u5165\u6982\u89c8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/load-manual.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-manual",permalink:"/zh-CN/docs/data-operate/import/load-manual",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u5bfc\u5165\u6982\u89c8",language:"zh-CN"},sidebar:"docs",previous:{title:"\u6570\u636e\u5e93\u5efa\u8868\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/table-design/best-practice"},next:{title:"Stream Load",permalink:"/zh-CN/docs/data-operate/import/import-way/stream-load-manual"}},i={},m=[{value:"\u5bfc\u5165\u65b9\u5f0f\u5feb\u901f\u6d4f\u89c8",id:"\u5bfc\u5165\u65b9\u5f0f\u5feb\u901f\u6d4f\u89c8",level:2}],g={toc:m},y="wrapper";function d(e){let{components:a,...t}=e;return(0,n.yg)(y,(0,r.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Apache Doris \u63d0\u4f9b\u4e86\u591a\u79cd\u5bfc\u5165\u548c\u96c6\u6210\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5408\u9002\u7684\u5bfc\u5165\u65b9\u5f0f\u4ece\u5404\u79cd\u6e90\u5c06\u6570\u636e\u5bfc\u5165\u5230\u6570\u636e\u5e93\u4e2d\u3002Apache Doris \u63d0\u4f9b\u7684\u6570\u636e\u5bfc\u5165\u65b9\u5f0f\u53ef\u4ee5\u5206\u4e3a\u56db\u7c7b\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u5b9e\u65f6\u5199\u5165"),"\uff1a\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7 HTTP \u6216\u8005 JDBC \u5b9e\u65f6\u5199\u5165\u6570\u636e\u5230 Doris \u8868\u4e2d\uff0c\u9002\u7528\u4e8e\u9700\u8981\u5b9e\u65f6\u5206\u6790\u548c\u67e5\u8be2\u7684\u573a\u666f\u3002"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u6781\u5c11\u91cf\u6570\u636e\uff085 \u5206\u949f\u4e00\u6b21\uff09\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual"},"JDBC INSERT")," \u5199\u5165\u6570\u636e\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5e76\u53d1\u8f83\u9ad8\u6216\u8005\u9891\u6b21\u8f83\u9ad8\uff08\u5927\u4e8e 20 \u5e76\u53d1\u6216\u8005 1 \u5206\u949f\u5199\u5165\u591a\u6b21\uff09\u65f6\u5efa\u8bae\u6253\u5f00 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/group-commit-manual"},"Group Commit"),"\uff0c\u4f7f\u7528 JDBC INSERT \u6216\u8005 Stream Load \u5199\u5165\u6570\u636e\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u541e\u5410\u8f83\u9ad8\u65f6\u63a8\u8350\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"./import-way/stream-load-manual"},"Stream Load")," \u901a\u8fc7 HTTP \u5199\u5165\u6570\u636e\u3002")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u6d41\u5f0f\u540c\u6b65"),"\uff1a\u901a\u8fc7\u5b9e\u65f6\u6570\u636e\u6d41\uff08\u5982 Flink\u3001Kafka\u3001\u4e8b\u52a1\u6570\u636e\u5e93\uff09\u5c06\u6570\u636e\u5b9e\u65f6\u5bfc\u5165\u5230 Doris \u8868\u4e2d\uff0c\u9002\u7528\u4e8e\u9700\u8981\u5b9e\u65f6\u5206\u6790\u548c\u67e5\u8be2\u7684\u573a\u666f\u3002"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/ecosystem/flink-doris-connector"},"Flink Doris Connector")," \u5c06 Flink \u7684\u5b9e\u65f6\u6570\u636e\u6d41\u5199\u5165\u5230 Doris \u8868\u4e2d\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/routine-load-manual"},"Routine Load")," \u6216\u8005 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/ecosystem/doris-kafka-connector"},"Doris Kafka Connector")," \u5c06 Kafka \u7684\u5b9e\u65f6\u6570\u636e\u6d41\u5199\u5165\u5230 Doris \u8868\u4e2d\u3002Routine Load \u65b9\u5f0f\u4e0b\uff0cDoris \u4f1a\u8c03\u5ea6\u4efb\u52a1\u5c06 Kafka \u4e2d\u7684\u6570\u636e\u62c9\u53d6\u5e76\u5199\u5165 Doris \u4e2d\uff0c\u76ee\u524d\u652f\u6301 csv \u548c json \u683c\u5f0f\u7684\u6570\u636e\u3002Kafka Connector \u65b9\u5f0f\u4e0b\uff0c\u7531 Kafka \u5c06\u6570\u636e\u5199\u5165\u5230 Doris \u4e2d\uff0c\u652f\u6301 avro\u3001json\u3001csv\u3001protobuf \u683c\u5f0f\u7684\u6570\u636e\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/ecosystem/flink-doris-connector"},"Flink CDC")," \u6216 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/ecosystem/datax"}," Datax")," \u5c06\u4e8b\u52a1\u6570\u636e\u5e93\u7684 CDC \u6570\u636e\u6d41\u5199\u5165\u5230 Doris \u4e2d\u3002")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u6279\u91cf\u5bfc\u5165"),"\uff1a\u5c06\u6570\u636e\u4ece\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\uff08\u5982 S3\u3001HDFS\u3001\u672c\u5730\u6587\u4ef6\u3001NAS\uff09\u6279\u91cf\u52a0\u8f7d\u5230 Doris \u8868\u4e2d\uff0c\u9002\u7528\u4e8e\u975e\u5b9e\u65f6\u6570\u636e\u5bfc\u5165\u7684\u9700\u6c42\u3002"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load")," \u5c06 S3 \u548c HDFS \u4e2d\u7684\u6587\u4ef6\u5199\u5165\u5230 Doris \u4e2d\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual"},"INSERT INTO SELECT")," \u5c06 S3\u3001HDFS \u548c NAS \u4e2d\u7684\u6587\u4ef6\u540c\u6b65\u5199\u5165\u5230 Doris \u4e2d\uff0c\u914d\u5408 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/scheduler/job-scheduler"},"JOB")," \u53ef\u4ee5\u5f02\u6b65\u5199\u5165\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"./import-way/stream-load-manual"},"Stream Load")," \u6216\u8005 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/ecosystem/doris-streamloader"},"Doris Streamloader")," \u5c06\u672c\u5730\u6587\u4ef6\u5199\u5165 Doris \u4e2d\u3002")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"\u5916\u90e8\u6570\u636e\u6e90\u96c6\u6210"),"\uff1a\u901a\u8fc7\u4e0e\u5916\u90e8\u6570\u636e\u6e90\uff08\u5982 Hive\u3001JDBC\u3001Iceberg \u7b49\uff09\u7684\u96c6\u6210\uff0c\u5b9e\u73b0\u5bf9\u5916\u90e8\u6570\u636e\u7684\u67e5\u8be2\u548c\u90e8\u5206\u6570\u636e\u5bfc\u5165\u5230 Doris \u8868\u4e2d\u3002"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u521b\u5efa ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/lakehouse-overview"},"Catalog")," \u8bfb\u53d6\u5916\u90e8\u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\uff0c\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual"},"INSERT INTO SELECT")," \u5c06\u5916\u90e8\u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\u540c\u6b65\u5199\u5165\u5230 Doris \u4e2d\uff0c\u914d\u5408 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/scheduler/job-scheduler"},"JOB")," \u53ef\u4ee5\u5f02\u6b65\u5199\u5165\u3002")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/import/migrate-data-from-other-olap"},"X2Doris")," \u5c06\u5176\u4ed6 AP \u7cfb\u7edf\u7684\u6570\u636e\u8fc1\u79fb\u5230 Doris \u4e2d\u3002"))))),(0,n.yg)("p",null,"Doris \u7684\u6bcf\u4e2a\u5bfc\u5165\u9ed8\u8ba4\u90fd\u662f\u4e00\u4e2a\u9690\u5f0f\u4e8b\u52a1\uff0c\u4e8b\u52a1\u76f8\u5173\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003",(0,n.yg)("a",{parentName:"p",href:"/zh-CN/docs/data-operate/transaction"},"\u4e8b\u52a1"),"\u3002"),(0,n.yg)("h2",{id:"\u5bfc\u5165\u65b9\u5f0f\u5feb\u901f\u6d4f\u89c8"},"\u5bfc\u5165\u65b9\u5f0f\u5feb\u901f\u6d4f\u89c8"),(0,n.yg)("p",null,"Doris \u7684\u5bfc\u5165\u4e3b\u8981\u6d89\u53ca\u6570\u636e\u6e90\u3001\u6570\u636e\u683c\u5f0f\u3001\u5bfc\u5165\u65b9\u5f0f\u3001\u9519\u8bef\u6570\u636e\u5904\u7406\u3001\u6570\u636e\u8f6c\u6362\u3001\u4e8b\u52a1\u591a\u4e2a\u65b9\u9762\u3002\u60a8\u53ef\u4ee5\u5728\u5982\u4e0b\u8868\u683c\u4e2d\u5feb\u901f\u6d4f\u89c8\u5404\u5bfc\u5165\u65b9\u5f0f\u9002\u5408\u7684\u573a\u666f\u548c\u652f\u6301\u7684\u6587\u4ef6\u683c\u5f0f\u3002"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u5bfc\u5165\u65b9\u5f0f"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u4f7f\u7528\u573a\u666f"),(0,n.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u6587\u4ef6\u683c\u5f0f"),(0,n.yg)("th",{parentName:"tr",align:null},"\u5355\u6b21\u5bfc\u5165\u6570\u636e\u91cf"),(0,n.yg)("th",{parentName:"tr",align:null},"\u5bfc\u5165\u6a21\u5f0f"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"./import-way/stream-load-manual"},"Stream Load")),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u5bfc\u5165\u672c\u5730\u6587\u4ef6\u6216\u8005\u5e94\u7528\u7a0b\u5e8f\u5199\u5165"),(0,n.yg)("td",{parentName:"tr",align:null},"csv\u3001json\u3001parquet\u3001orc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5c0f\u4e8e10GB"),(0,n.yg)("td",{parentName:"tr",align:null},"\u540c\u6b65")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/data-operate/import/import-way/broker-load-manual"},"Broker Load")),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4ece\u5bf9\u8c61\u5b58\u50a8\u3001HDFS\u7b49\u5bfc\u5165"),(0,n.yg)("td",{parentName:"tr",align:null},"csv\u3001json\u3001parquet\u3001orc"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6570\u5341GB\u5230\u6570\u767e GB"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f02\u6b65")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual"},"INSERT INTO VALUES")),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u901a\u8fc7JDBC\u7b49\u63a5\u53e3\u5bfc\u5165"),(0,n.yg)("td",{parentName:"tr",align:null},"SQL"),(0,n.yg)("td",{parentName:"tr",align:null},"\u7b80\u5355\u6d4b\u8bd5\u7528"),(0,n.yg)("td",{parentName:"tr",align:null},"\u540c\u6b65")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual"},"INSERT INTO SELECT")),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u53ef\u4ee5\u5bfc\u5165\u5916\u90e8\u8868\u6216\u8005\u5bf9\u8c61\u5b58\u50a8\u3001HDFS\u4e2d\u7684\u6587\u4ef6"),(0,n.yg)("td",{parentName:"tr",align:null},"SQL"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6839\u636e\u5185\u5b58\u5927\u5c0f\u800c\u5b9a"),(0,n.yg)("td",{parentName:"tr",align:null},"\u540c\u6b65")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/data-operate/import/import-way/routine-load-manual"},"Routine Load")),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4ecekakfa\u5b9e\u65f6\u5bfc\u5165"),(0,n.yg)("td",{parentName:"tr",align:null},"csv\u3001json"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5fae\u6279\u5bfc\u5165 MB \u5230 GB"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5f02\u6b65")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/data-operate/import/import-way/mysql-load-manual"},"MySQL Load")),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u4ece\u672c\u5730\u6570\u636e\u5bfc\u5165"),(0,n.yg)("td",{parentName:"tr",align:null},"csv"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5c0f\u4e8e10GB"),(0,n.yg)("td",{parentName:"tr",align:null},"\u540c\u6b65")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/zh-CN/docs/data-operate/import/import-way/group-commit-manual"},"Group Commit")),(0,n.yg)("td",{parentName:"tr",align:"left"},"\u9ad8\u9891\u5c0f\u6279\u91cf\u5bfc\u5165"),(0,n.yg)("td",{parentName:"tr",align:null},"\u6839\u636e\u4f7f\u7528\u7684\u5bfc\u5165\u65b9\u5f0f\u800c\u5b9a"),(0,n.yg)("td",{parentName:"tr",align:null},"\u5fae\u6279\u5bfc\u5165KB"),(0,n.yg)("td",{parentName:"tr",align:null},"-")))))}d.isMDXComponent=!0}}]);