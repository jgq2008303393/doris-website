"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[520765],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},527885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const i={title:"TRUNCATE",language:"zh-CN"},l=void 0,o={unversionedId:"sql-manual/sql-functions/numeric-functions/truncate",id:"version-2.1/sql-manual/sql-functions/numeric-functions/truncate",title:"TRUNCATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/numeric-functions/truncate.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/truncate",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/truncate",draft:!1,tags:[],version:"2.1",frontMatter:{title:"TRUNCATE",language:"zh-CN"},sidebar:"docs",previous:{title:"ROUND_BANKERS",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/round-bankers"},next:{title:"ABS",permalink:"/zh-CN/docs/sql-manual/sql-functions/numeric-functions/abs"}},c={},u=[{value:"truncate",id:"truncate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"truncate"},"truncate"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE truncate(DOUBLE x, INT d)"),(0,a.yg)("br",{parentName:"p"}),"\n","\u6309\u7167\u4fdd\u7559\u5c0f\u6570\u7684\u4f4d\u6570",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u5bf9",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u8fdb\u884c\u6570\u503c\u622a\u53d6\u3002  "),(0,a.yg)("p",null,"\u89c4\u5219\u5982\u4e0b\uff1a  "),(0,a.yg)("p",null,"\u5982\u679c ",(0,a.yg)("inlineCode",{parentName:"p"},"d")," \u4e3a\u5b57\u9762\u91cf\uff1a",(0,a.yg)("br",{parentName:"p"}),"\n","\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d > 0"),"\u65f6\uff1a\u4fdd\u7559",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u4f4d\u5c0f\u6570",(0,a.yg)("br",{parentName:"p"}),"\n","\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d = 0"),"\u65f6\uff1a\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5c0f\u6570\u90e8\u5206\u53bb\u9664\uff0c\u53ea\u4fdd\u7559\u6574\u6570\u90e8\u5206",(0,a.yg)("br",{parentName:"p"}),"\n","\u5f53",(0,a.yg)("inlineCode",{parentName:"p"},"d < 0"),"\u65f6\uff1a\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"\u7684\u5c0f\u6570\u90e8\u5206\u53bb\u9664\uff0c\u6574\u6570\u90e8\u5206\u6309\u7167 ",(0,a.yg)("inlineCode",{parentName:"p"},"d"),"\u6240\u6307\u5b9a\u7684\u4f4d\u6570\uff0c\u91c7\u7528\u6570\u5b57",(0,a.yg)("inlineCode",{parentName:"p"},"0"),"\u8fdb\u884c\u66ff\u6362  "),(0,a.yg)("p",null,"\u5982\u679c ",(0,a.yg)("inlineCode",{parentName:"p"},"d")," \u4e3a\u4e00\u4e2a\u5217\uff0c\u5e76\u4e14\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a Decimal \u7c7b\u578b\uff0c\u90a3\u4e48\u7ed3\u679c Decimal \u4f1a\u8ddf\u5165\u53c2 Decimal \u5177\u6709\u76f8\u540c\u7684\u5c0f\u6570\u90e8\u5206\u957f\u5ea6\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'mysql> select truncate(124.3867, 2);\n+-----------------------+\n| truncate(124.3867, 2) |\n+-----------------------+\n|                124.38 |\n+-----------------------+\nmysql> select truncate(124.3867, 0);\n+-----------------------+\n| truncate(124.3867, 0) |\n+-----------------------+\n|                   124 |\n+-----------------------+\nmysql> select truncate(-124.3867, -2);\n+-------------------------+\n| truncate(-124.3867, -2) |\n+-------------------------+\n|                    -100 |\n+-------------------------+\nmysql> select cast("123.123456" as Decimal(9,6)), number, truncate(cast ("123.123456" as Decimal(9,6)), number) from numbers("number"="5");\n--------------\n+---------------------------------------+--------+----------------------------------------------------------------------+\n| cast(\'123.123456\' as DECIMALV3(9, 6)) | number | truncate(cast(\'123.123456\' as DECIMALV3(9, 6)), cast(number as INT)) |\n+---------------------------------------+--------+----------------------------------------------------------------------+\n|                            123.123456 |      0 |                                                           123.000000 |\n|                            123.123456 |      1 |                                                           123.100000 |\n|                            123.123456 |      2 |                                                           123.120000 |\n|                            123.123456 |      3 |                                                           123.123000 |\n|                            123.123456 |      4 |                                                           123.123400 |\n+---------------------------------------+--------+----------------------------------------------------------------------+\n')),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"TRUNCATE\n")))}m.isMDXComponent=!0}}]);