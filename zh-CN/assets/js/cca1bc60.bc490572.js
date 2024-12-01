"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[777020],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),g=r,d=p["".concat(m,".").concat(g)]||p[g]||y[g]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},734078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(58168),r=(a(296540),a(15680));const l={title:"collations",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/collations",id:"version-3.0/admin-manual/system-tables/information_schema/collations",title:"collations",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/system-tables/information_schema/collations.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/collations",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/collations",draft:!1,tags:[],version:"3.0",frontMatter:{title:"collations",language:"zh-CN"},sidebar:"docs",previous:{title:"character_sets",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/character_sets"},next:{title:"column_privileges",permalink:"/zh-CN/docs/3.0/admin-manual/system-tables/information_schema/column_privileges"}},m={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6240\u5c5e\u6570\u636e\u5e93",id:"\u6240\u5c5e\u6570\u636e\u5e93",level:2},{value:"\u8868\u4fe1\u606f",id:"\u8868\u4fe1\u606f",level:2}],c={toc:s},p="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.yg)("p",null,"\u67e5\u770b\u6240\u6709\u5b57\u7b26\u96c6\u7684\u6392\u5e8f\u65b9\u6cd5\u3002\u6b64\u8868\u4ec5\u7528\u4e8e\u517c\u5bb9 MySQL \u884c\u4e3a\u3002\u6ca1\u6709\u5b9e\u9645\u7684\u610f\u4e49\u3002\u4e0d\u80fd\u771f\u5b9e\u53cd\u6620 Doris \u6240\u4f7f\u7528\u7684\u5b57\u7b26\u6392\u5e8f\u65b9\u6cd5\u3002"),(0,r.yg)("h2",{id:"\u6240\u5c5e\u6570\u636e\u5e93"},"\u6240\u5c5e\u6570\u636e\u5e93"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,r.yg)("h2",{id:"\u8868\u4fe1\u606f"},"\u8868\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"COLLATION_NAME"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(512)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5b57\u7b26\u96c6\u6392\u5e8f\u65b9\u6cd5\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CHARACTER_SET_NAME"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u6240\u5c5e\u7684\u5b57\u7b26\u96c6\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ID"),(0,r.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u6392\u5e8f\u65b9\u6cd5 ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"IS_DEFAULT"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u4e3a\u5f53\u524d\u9ed8\u8ba4\u7684\u6392\u5e8f\u65b9\u6cd5\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"IS_COMPILED"),(0,r.yg)("td",{parentName:"tr",align:"left"},"varchar(64)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u7f16\u8bd1\u5230\u670d\u52a1\u4e2d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SORTLEN"),(0,r.yg)("td",{parentName:"tr",align:"left"},"bigint"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4e0e\u4f7f\u7528\u6b64\u79cd\u6392\u5e8f\u7b97\u6cd5\u4f7f\u7528\u7684\u5185\u5b58\u76f8\u5173")))))}y.isMDXComponent=!0}}]);