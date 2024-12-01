"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[118842],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,d=p["".concat(o,".").concat(f)]||p[f]||g[f]||s;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=f;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<s;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},938533:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const s={title:"SKEW,SKEW_POP,SKEWNESS",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/skew",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/skew",title:"SKEW,SKEW_POP,SKEWNESS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/skew.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/skew",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/skew",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SKEW,SKEW_POP,SKEWNESS",language:"en"},sidebar:"docs",previous:{title:"KURT,KURT_POP,KURTOSIS",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/kurt"},next:{title:"TO_BITMAP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/bitmap-functions/to-bitmap"}},o={},u=[{value:"skewness,skew,skew_pop",id:"skewnessskewskew_pop",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:3},{value:"\u4e3e\u4f8b",id:"\u4e3e\u4f8b",level:3},{value:"\u76f8\u5173\u547d\u4ee4",id:"\u76f8\u5173\u547d\u4ee4",level:3}],c={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"skewnessskewskew_pop"},"skewness,skew,skew_pop"),(0,a.yg)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"\u8fd4\u56de\u8868\u8fbe\u5f0f\u7684 ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Skewness"},"\u659c\u5ea6"),"\u3002\n\u7528\u6765\u8ba1\u7b97\u659c\u5ea6\u7684\u516c\u5f0f\u662f ",(0,a.yg)("inlineCode",{parentName:"p"},"3\u9636\u4e2d\u5fc3\u77e9 / ((\u65b9\u5dee)^{1.5})"),", \u5f53\u65b9\u5dee\u4e3a\u96f6\u65f6, ",(0,a.yg)("inlineCode",{parentName:"p"},"skewness")," \u4f1a\u8fd4\u56de ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.yg)("h3",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"skewness(expr)")),(0,a.yg)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.yg)("p",null,"TinyInt/SmallInt/Integer/BigInt/Float/Double, Decimal \u4f1a\u88ab cast \u6210\u6d6e\u70b9\u6570\u53c2\u4e0e\u8fd0\u7b97\u3002"),(0,a.yg)("h3",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Double")),(0,a.yg)("h3",{id:"\u4e3e\u4f8b"},"\u4e3e\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'create table statistic_test (tag int, val1 double not null, val2 double null)\n                distributed by hash(tag) properties("replication_num"="1")\n\ninsert into statistic_test values (1, -10, -10),\n                                  (2, -20, NULL),\n                                  (3, 100, NULL),\n                                  (4, 100, NULL),\n                                  (5, 1000,1000);\n\n// NULL is ignored\nselect skew(val1), skew(val2) from statistic_test\n--------------\n\n+--------------------+--------------------+\n| skew(val1)         | skew(val2)         |\n+--------------------+--------------------+\n| 1.4337199628825619 | 1.1543940205711711 |\n+--------------------+--------------------+\n1 row in set (0.01 sec)\n\n// Each group just has one row, result is NULL\nselect skew(val1), skew(val2) from statistic_test group by tag\n--------------\n\n+------------+------------+\n| skew(val1) | skew(val2) |\n+------------+------------+\n|       NULL |       NULL |\n|       NULL |       NULL |\n|       NULL |       NULL |\n|       NULL |       NULL |\n|       NULL |       NULL |\n+------------+------------+\n5 rows in set (0.04 sec)\n')),(0,a.yg)("h3",{id:"\u76f8\u5173\u547d\u4ee4"},"\u76f8\u5173\u547d\u4ee4"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/kurt"},"kurt")))}g.isMDXComponent=!0}}]);