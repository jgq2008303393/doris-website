"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[403101],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},695785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const a={title:"SECONDS_ADD",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/seconds-add",id:"version-3.0/sql-manual/sql-functions/date-time-functions/seconds-add",title:"SECONDS_ADD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/seconds-add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/seconds-add",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/seconds-add",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SECONDS_ADD",language:"zh-CN"},sidebar:"docs",previous:{title:"MINUTES_SUB",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/minutes-sub"},next:{title:"SECONDS_DIFF",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/seconds-diff"}},l={},c=[{value:"seconds_add",id:"seconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"seconds_add"},"seconds_add"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME SECONDS_ADD(DATETIME date, INT seconds)")),(0,o.yg)("p",null,"\u4ece\u65e5\u671f\u65f6\u95f4\u6216\u65e5\u671f\u52a0\u4e0a\u6307\u5b9a\u79d2\u6570"),(0,o.yg)("p",null,"\u53c2\u6570 date \u53ef\u4ee5\u662f DATETIME \u6216\u8005 DATE \u7c7b\u578b\uff0c\u8fd4\u56de\u7c7b\u578b\u4e3a DATETIME\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select seconds_add(\"2020-02-02 02:02:02\", 1);\n+---------------------------------------+\n| seconds_add('2020-02-02 02:02:02', 1) |\n+---------------------------------------+\n| 2020-02-02 02:02:03                   |\n+---------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"SECONDS_ADD\n")))}p.isMDXComponent=!0}}]);