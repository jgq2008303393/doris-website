"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[137865],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},524695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>g});var a=n(58168),o=n(296540),r=n(15680);function i(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/gettingStarted/tutorials/building-lakehouse/doris-hudi`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Tutorials")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Building lakehouse using Doris and Hudi")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"How to quickly set up a test & demo environment for Apache Doris and Hudi and how to use.")),o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/gettingStarted/tutorials/building-lakehouse/doris-paimon`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Tutorials")),o.createElement("div",{style:{marginBottom:10}},"Building lakehouse using Doris and Paimon")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"How to quickly set up a test & demo environment for Apache Doris and Paimon and how to use.")))))}function l(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/gettingStarted/tutorials/log-storage-analysis`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Tutorials")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Building log analysis platform")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"To build an open, high-performance, cost-effective and unified log storage and analysis platform.")),o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/admin-manual/resource-admin/workload-group`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Managing Resource")),o.createElement("div",{style:{marginBottom:10}},"Workload Group")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"Using Workload Groups to manage the CPU, memory and I/O resources used by queries and load in the Doris cluster.")))))}function s(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/query-acceleration/tuning/overview`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Query Acceleration")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Best Practice of Tuning ")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"Query performance tuning is systematic engineering that requires optimization of the database system from multiple levels and dimensions.")),o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/table-design/index/inverted-index`},o.createElement("div",{className:"latest-button-title"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Data Table Design")),o.createElement("div",{style:{marginBottom:10}},"Inverted Index")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"Imporving performance in query process and reduce latency to avoid delays in accessing object storage.")))))}function c(){const[e,t]=(0,o.useState)("");return(0,o.useEffect)((()=>{if("undefined"!=typeof window){const e=location.pathname.includes("zh-CN/docs")?location.pathname.split("/")[3]:location.pathname.split("/")[2];location.pathname.includes("docs")&&["dev","2.1","2.0","1.2"].includes(e)?t(e):t("")}}),["undefined"!=typeof window&&location.pathname]),o.createElement(o.Fragment,null,o.createElement("div",{className:"home-page-hero"},o.createElement("div",{className:"home-page-hero-right"},o.createElement("a",{className:"latest-button",href:"https://github.com/apache/doris/discussions"},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Discussion")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Ask Question on Discussion")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"Fostering connects within the Doris community, specially for addressing technical inquiries and providing support."),o.createElement("div",{style:{fontSize:14,marginBottom:10}},"Join Discussion")),o.createElement("a",{className:"latest-button",href:`/docs${""===e?"":`/${e}`}/releasenotes/v3.0/release-3.0.2`},o.createElement("div",{className:"home-page-hero-button-label"},o.createElement("div",null,"Release")),o.createElement("div",{className:"latest-button-title"},o.createElement("div",{style:{marginBottom:10}},"Apache Doris 3.0.2 just released")),o.createElement("div",{style:{fontSize:12,marginBottom:20}},"Apache Doris 3.0.2 version featured updates and improvements in compute-storage decoupling, data storage, lakehouse, query optimizer, query execution and more."),o.createElement("div",{style:{fontSize:14,marginBottom:10}},"Learn more")))))}const m={title:"What's New",language:"en"},d=void 0,u={unversionedId:"gettingStarted/what-is-new",id:"version-1.2/gettingStarted/what-is-new",title:"What's New",description:"Recent update",source:"@site/versioned_docs/version-1.2/gettingStarted/what-is-new.mdx",sourceDirName:"gettingStarted",slug:"/gettingStarted/what-is-new",permalink:"/docs/1.2/gettingStarted/what-is-new",draft:!1,tags:[],version:"1.2",frontMatter:{title:"What's New",language:"en"},sidebar:"get-starting",next:{title:"What's Apache Doris",permalink:"/docs/1.2/gettingStarted/what-is-apache-doris"}},p={},g=[{value:"Recent update",id:"recent-update",level:3}],h={toc:g},f="wrapper";function v(e){let{components:t,...n}=e;return(0,r.yg)(f,(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(c,{mdxType:"Latest"}),(0,r.yg)("h3",{id:"recent-update"},"Recent update"),(0,r.yg)(i,{mdxType:"PageHero"}),(0,r.yg)(l,{mdxType:"PageHero1"}),(0,r.yg)(s,{mdxType:"PageHero2"}))}v.isMDXComponent=!0}}]);