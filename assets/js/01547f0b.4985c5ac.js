"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[654944],{15680:(e,a,r)=>{r.d(a,{xA:()=>c,yg:()=>u});var t=r(296540);function s(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){s(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,t,s=function(e,a){if(null==e)return{};var r,t,s={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=t.createContext({}),p=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):l(l({},a),e)),r},c=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=s,u=m["".concat(i,".").concat(d)]||m[d]||y[d]||n;return r?t.createElement(u,l(l({ref:a},c),{},{components:r})):t.createElement(u,l({ref:a},c))}));function u(e,a){var r=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var n=r.length,l=new Array(n);l[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[m]="string"==typeof e?e:s,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},688530:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var t=r(58168),s=(r(296540),r(15680));const n={title:"What's New",language:"en"},l=void 0,o={unversionedId:"releasenotes/all-release",id:"version-2.0/releasenotes/all-release",title:"What's New",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/releasenotes/all-release.md",sourceDirName:"releasenotes",slug:"/releasenotes/all-release",permalink:"/docs/2.0/releasenotes/all-release",draft:!1,tags:[],version:"2.0",frontMatter:{title:"What's New",language:"en"},sidebar:"releasenotes",next:{title:"Release 3.0.0",permalink:"/docs/2.0/releasenotes/v3.0/release-3.0.0"}},i={},p=[],c={toc:p},m="wrapper";function y(e){let{components:a,...r}=e;return(0,s.yg)(m,(0,t.A)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"This document presents a summary of Apache Doris versions released within one year, listed in reverse chronological order."),(0,s.yg)("admonition",{title:"Latest Release",type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"\ud83c\udf89 Version 3.0.2 released now. Check out the \ud83d\udd17",(0,s.yg)("a",{parentName:"p",href:"../releasenotes/v3.0/release-3.0.2"},"Release Notes")," here. Starting from version 3.X, Apache Doris supports a compute-storage decoupled mode in addition to the compute-storage coupled mode for cluster deployment. With the cloud-native architecture that decouples the computation and storage layers, users can achieve physical isolation between query loads across multiple compute clusters, as well as isolation between read and write loads. "),(0,s.yg)("p",{parentName:"admonition"},"\ud83c\udf89 Version 2.1.7 released now. Check out the \ud83d\udd17",(0,s.yg)("a",{parentName:"p",href:"../releasenotes/v2.1/release-2.1.6"},"Release Notes")," here. The 2.1 version delivers exceptional performance with 100% higher out-of-the-box queries proven by TPC-DS 1TB tests, enhanced data lake analytics that are 4-6 times speedier than Trino and Spark, solid support for semi-structured data analysis with new Variant types and suite of analytical functions, asynchronous materialized views for query acceleration, optimized real-time writing at scale, and better workload management with stability and runtime SQL resource tracking.")),(0,s.yg)("br",null),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.1/release-2.1.7"},"2024-11-10, Apache Doris 2.1.7 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v3.0/release-3.0.2"},"2024-10-15, Apache Doris 3.0.2 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.15"},"2024-09-30, Apache Doris 2.0.15 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.1/release-2.1.6"},"2024-09-10, Apache Doris 2.1.6 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v3.0/release-3.0.1"},"2024-08-23, Apache Doris 3.0.1 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.1/release-2.1.5"},"2024-07-24, Apache Doris 2.1.5 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.13"},"2024-07-17, Apache Doris 2.0.13 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.12"},"2024-06-27, Apache Doris 2.0.12 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.1/release-2.1.4"},"2024-06-26, Apache Doris 2.1.4 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.11"},"2024-06-05, Apache DOris 2.0.11 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.1/release-2.1.3"},"2024-05-21, Apache Doris 2.1.3 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.10"},"2024-05-16, Apache Doris 2.0.10 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.9"},"2024-04-23, Apache Doris 2.0.9 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.1/release-2.1.2"},"2024-04-12, Apache Doris 2.1.2 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.8"},"2024-04-09, Apache Doris 2.0.8 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.1/release-2.1.1"},"2024-04-03, Apache Doris 2.1.1 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.7"},"2024-03-26, Apache Doris 2.0.7 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.1/release-2.1.0"},"2024-03-12, Apache Doris 2.1.0 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.6"},"2024-03-11, Apache Doris 2.0.6 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.5"},"2024-02-28, Apache Doris 2.0.5 is released"))),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/2.0/releasenotes/v2.0/release-2.0.4"},"2024-01-26, Apache Doris 2.0.4 is released")))))}y.isMDXComponent=!0}}]);