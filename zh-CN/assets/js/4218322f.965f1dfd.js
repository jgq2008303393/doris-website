"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[118933],{15680:(t,e,a)=>{a.d(e,{xA:()=>m,yg:()=>N});var n=a(296540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),i=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},m=function(t){var e=i(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=y(t,["components","mdxType","originalType","parentName"]),d=i(a),o=r,N=d["".concat(p,".").concat(o)]||d[o]||u[o]||l;return a?n.createElement(N,g(g({ref:e},m),{},{components:a})):n.createElement(N,g({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=o;var y={};for(var p in e)hasOwnProperty.call(e,p)&&(y[p]=e[p]);y.originalType=t,y[d]="string"==typeof t?t:r,g[1]=y;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},72994:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>y,toc:()=>i});var n=a(58168),r=(a(296540),a(15680));const l={title:"\u6570\u636e\u5bfc\u51fa\u6982\u8ff0",language:"zh-CN"},g=void 0,y={unversionedId:"data-operate/export/export-overview",id:"data-operate/export/export-overview",title:"\u6570\u636e\u5bfc\u51fa\u6982\u8ff0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/export/export-overview.md",sourceDirName:"data-operate/export",slug:"/data-operate/export/export-overview",permalink:"/zh-CN/docs/dev/data-operate/export/export-overview",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u5bfc\u51fa\u6982\u8ff0",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4e34\u65f6\u5206\u533a",permalink:"/zh-CN/docs/dev/data-operate/delete/table-temp-partition"},next:{title:"Export",permalink:"/zh-CN/docs/dev/data-operate/export/export-manual"}},p={},i=[{value:"\u9009\u62e9\u5bfc\u51fa\u65b9\u5f0f",id:"\u9009\u62e9\u5bfc\u51fa\u65b9\u5f0f",level:2},{value:"SELECT INTO OUTFILE",id:"select-into-outfile",level:3},{value:"EXPORT",id:"export",level:3},{value:"MySQL Dump",id:"mysql-dump",level:3},{value:"\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04",level:2}],m={toc:i},d="wrapper";function u(t){let{components:e,...a}=t;return(0,r.yg)(d,(0,n.A)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u6570\u636e\u5bfc\u51fa\u529f\u80fd\uff0c\u7528\u4e8e\u5c06\u67e5\u8be2\u7ed3\u679c\u96c6\u6216\u8005 Apache Doris \u7684\u8868\u6570\u636e\uff0c\u4f7f\u7528\u6307\u5b9a\u7684\u6587\u4ef6\u683c\u5f0f\uff0c\u5199\u5165\u6307\u5b9a\u7684\u5b58\u50a8\u7cfb\u7edf\u4e2d\u7684\u3002"),(0,r.yg)("p",null,"\u5bfc\u51fa\u529f\u80fd\u548c\u6570\u636e\u5907\u4efd\u529f\u80fd\u6709\u4ee5\u4e0b\u533a\u522b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u2003"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u5bfc\u51fa"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u5907\u4efd"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u6700\u7ec8\u5b58\u50a8\u4f4d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null},"HDFS\u3001\u5bf9\u8c61\u5b58\u50a8\u3001\u672c\u5730\u6587\u4ef6\u7cfb\u7edf"),(0,r.yg)("td",{parentName:"tr",align:null},"HDFS\u3001\u5bf9\u8c61\u5b58\u50a8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u683c\u5f0f"),(0,r.yg)("td",{parentName:"tr",align:null},"Parquet\u3001ORC\u3001CSV \u7b49\u5f00\u653e\u683c\u5f0f"),(0,r.yg)("td",{parentName:"tr",align:null},"Apache Doris \u5185\u90e8\u5b58\u50a8\u683c\u5f0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6267\u884c\u901f\u5ea6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e2d\u7b49\uff08\u9700\u8981\u8bfb\u53d6\u6570\u636e\u5e76\u8f6c\u6362\u6210\u76ee\u6807\u6570\u636e\u683c\u5f0f\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5feb\u901f\uff08\u65e0\u9700\u89e3\u6790\u548c\u8f6c\u6362\uff0c\u76f4\u63a5\u4e0a\u4f20 Apache Doris \u6570\u636e\u6587\u4ef6\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7075\u6d3b\u5ea6"),(0,r.yg)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u901a\u8fc7 SQL \u8bed\u53e5\u7075\u6d3b\u5b9a\u4e49\u8981\u5bfc\u51fa\u7684\u6570\u636e"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ec5\u652f\u6301\u8868\u7ea7\u522b\u5168\u91cf\u5907\u4efd")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u573a\u666f"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u96c6\u4e0b\u8f7d\u3001\u4e0d\u540c\u7cfb\u7edf\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6362"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5907\u4efd\u3001Apache Doris \u96c6\u7fa4\u95f4\u7684\u6570\u636e\u8fc1\u79fb")))),(0,r.yg)("h2",{id:"\u9009\u62e9\u5bfc\u51fa\u65b9\u5f0f"},"\u9009\u62e9\u5bfc\u51fa\u65b9\u5f0f"),(0,r.yg)("p",null,"Apache Doris \u63d0\u4f9b\u4ee5\u4e0b\u4e09\u79cd\u4e0d\u540c\u7684\u6570\u636e\u5bfc\u51fa\u65b9\u5f0f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"SELECT INTO OUTFILE\uff1a\u652f\u6301\u4efb\u610f SQL \u7ed3\u679c\u96c6\u7684\u5bfc\u51fa\u3002"),(0,r.yg)("li",{parentName:"ul"},"EXPORT\uff1a\u652f\u6301\u8868\u7ea7\u522b\u7684\u90e8\u5206\u6216\u5168\u90e8\u6570\u636e\u5bfc\u51fa\u3002"),(0,r.yg)("li",{parentName:"ul"},"MySQL DUMP\uff1a\u517c\u5bb9 MySQL Dump \u6307\u4ee4\u7684\u6570\u636e\u5bfc\u51fa\u3002")),(0,r.yg)("p",null,"\u4e09\u79cd\u5bfc\u51fa\u65b9\u5f0f\u7684\u5f02\u540c\u70b9\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u2003"),(0,r.yg)("th",{parentName:"tr",align:null},"SELECT INTO OUTFILE"),(0,r.yg)("th",{parentName:"tr",align:null},"EXPORT"),(0,r.yg)("th",{parentName:"tr",align:null},"MySQL DUMP"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u540c\u6b65/\u5f02\u6b65"),(0,r.yg)("td",{parentName:"tr",align:null},"\u540c\u6b65"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5f02\u6b65\uff08\u63d0\u4ea4 EXPORT \u4efb\u52a1\u540e\u901a\u8fc7 SHOW EXPORT \u547d\u4ee4\u67e5\u770b\u4efb\u52a1\u8fdb\u5ea6\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"\u540c\u6b65")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u4efb\u610f SQL"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u6307\u5b9a\u5206\u533a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bfc\u51fa\u6307\u5b9a Tablets"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5e76\u53d1\u5bfc\u51fa"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u4e14\u5e76\u53d1\u9ad8\uff08\u4f46\u53d6\u51b3\u4e8e SQL \u8bed\u53e5\u662f\u5426\u6709 ORDER BY \u7b49\u9700\u8981\u5355\u673a\u5904\u7406\u7684\u7b97\u5b50\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u4e14\u5e76\u53d1\u9ad8\uff08\u652f\u6301 Tablet \u7c92\u5ea6\u7684\u5e76\u53d1\u5bfc\u51fa\uff09"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301\uff0c\u53ea\u80fd\u5355\u7ebf\u7a0b\u5bfc\u51fa")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u5bfc\u51fa\u7684\u6570\u636e\u683c\u5f0f"),(0,r.yg)("td",{parentName:"tr",align:null},"Parquet\u3001ORC\u3001CSV"),(0,r.yg)("td",{parentName:"tr",align:null},"Parquet\u3001ORC\u3001CSV"),(0,r.yg)("td",{parentName:"tr",align:null},"MySQL Dump \u4e13\u6709\u683c\u5f0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u5bfc\u51fa\u5916\u8868"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u90e8\u5206\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301\u5bfc\u51fa View"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301\u7684\u5bfc\u51fa\u4f4d\u7f6e"),(0,r.yg)("td",{parentName:"tr",align:null},"S3\u3001HDFS\u3001LOCAL"),(0,r.yg)("td",{parentName:"tr",align:null},"S3\u3001HDFS\u3001LOCAL"),(0,r.yg)("td",{parentName:"tr",align:null},"LOCAL")))),(0,r.yg)("h3",{id:"select-into-outfile"},"SELECT INTO OUTFILE"),(0,r.yg)("p",null,"\u9002\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5bfc\u51fa\u6570\u636e\u9700\u8981\u7ecf\u8fc7\u590d\u6742\u8ba1\u7b97\u903b\u8f91\u7684\uff0c\u5982\u8fc7\u6ee4\u3001\u805a\u5408\u3001\u5173\u8054\u7b49\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u9002\u5408\u6267\u884c\u540c\u6b65\u4efb\u52a1\u7684\u573a\u666f\u3002")),(0,r.yg)("h3",{id:"export"},"EXPORT"),(0,r.yg)("p",null,"\u9002\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5927\u6570\u636e\u91cf\u7684\u5355\u8868\u5bfc\u51fa\u3001\u4ec5\u9700\u7b80\u5355\u7684\u8fc7\u6ee4\u6761\u4ef6\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u9700\u8981\u5f02\u6b65\u63d0\u4ea4\u4efb\u52a1\u7684\u573a\u666f\u3002")),(0,r.yg)("h3",{id:"mysql-dump"},"MySQL Dump"),(0,r.yg)("p",null,"\u9002\u7528\u4e8e\u4ee5\u4e0b\u573a\u666f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u517c\u5bb9 MySQL \u751f\u6001\uff0c\u9700\u8981\u540c\u65f6\u5bfc\u51fa\u8868\u7ed3\u6784\u548c\u6570\u636e\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u4ec5\u7528\u4e8e\u5f00\u53d1\u6d4b\u8bd5\u6216\u8005\u6570\u636e\u91cf\u5f88\u5c0f\u7684\u60c5\u51b5\u3002")),(0,r.yg)("h2",{id:"\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04"},"\u5bfc\u51fa\u6587\u4ef6\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("p",null,"Parquet\u3001ORC \u6587\u4ef6\u683c\u5f0f\u62e5\u6709\u81ea\u5df1\u7684\u6570\u636e\u7c7b\u578b\u3002Apache Doris \u7684\u5bfc\u51fa\u529f\u80fd\u80fd\u591f\u81ea\u52a8\u5c06 Apache Doris \u7684\u6570\u636e\u7c7b\u578b\u5bfc\u51fa\u4e3a Parquet\u3001ORC \u6587\u4ef6\u683c\u5f0f\u7684\u5bf9\u5e94\u6570\u636e\u7c7b\u578b\u3002CSV \u683c\u5f0f\u6ca1\u6709\u7c7b\u578b\uff0c\u6240\u6709\u6570\u636e\u90fd\u4ee5\u6587\u672c\u5f62\u5f0f\u8f93\u51fa\u3002"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u662f Apache Doris \u6570\u636e\u7c7b\u578b\u548c Parquet\u3001ORC \u6587\u4ef6\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\u6620\u5c04\u5173\u7cfb\u8868\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Doris \u5bfc\u51fa\u5230 Orc \u6587\u4ef6\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\u6620\u5c04\u8868\uff1a"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Orc Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datev2"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2"),(0,r.yg)("td",{parentName:"tr",align:null},"timestamp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char / varchar / string"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"array")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")))))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Apache Doris \u5bfc\u51fa\u5230 Parquet \u6587\u4ef6\u683c\u5f0f\u65f6\uff0c\u4f1a\u5148\u5c06 Apache Doris \u5185\u5b58\u6570\u636e\u8f6c\u6362\u4e3a Arrow \u5185\u5b58\u6570\u636e\u683c\u5f0f\uff0c\u7136\u540e\u7531 Arrow \u5199\u51fa\u5230 Parquet \u6587\u4ef6\u683c\u5f0f\u3002Apache Doris \u6570\u636e\u7c7b\u578b\u5230 Arrow \u6570\u636e\u7c7b\u7684\u6620\u5c04\u5173\u7cfb\u4e3a\uff1a"),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Arrow Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"int8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"int16")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"int64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datev2"),(0,r.yg)("td",{parentName:"tr",align:null},"Date32Type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2"),(0,r.yg)("td",{parentName:"tr",align:null},"TimestampType")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"float64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char / varchar / string"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal128")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"list")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")))))))}u.isMDXComponent=!0}}]);