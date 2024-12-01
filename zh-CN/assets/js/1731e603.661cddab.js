"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[563053],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var i=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),y=n,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||a;return r?i.createElement(g,c(c({ref:t},p),{},{components:r})):i.createElement(g,c({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}y.displayName="MDXCreateElement"},707186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=r(58168),n=(r(296540),r(15680));const a={title:"Quick BI",language:"zh-CN"},c=void 0,o={unversionedId:"ecosystem/bi/quickbi",id:"version-2.0/ecosystem/bi/quickbi",title:"Quick BI",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/ecosystem/bi/quickbi.md",sourceDirName:"ecosystem/bi",slug:"/ecosystem/bi/quickbi",permalink:"/zh-CN/docs/2.0/ecosystem/bi/quickbi",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Quick BI",language:"zh-CN"},sidebar:"ecosystem",previous:{title:"QuickSight",permalink:"/zh-CN/docs/2.0/ecosystem/bi/quicksight"},next:{title:"Smartbi",permalink:"/zh-CN/docs/2.0/ecosystem/bi/smartbi"}},s={},l=[{value:"Quick BI\u4ecb\u7ecd",id:"quick-bi\u4ecb\u7ecd",level:2},{value:"\u6570\u636e\u8fde\u63a5\u4e0e\u5e94\u7528",id:"\u6570\u636e\u8fde\u63a5\u4e0e\u5e94\u7528",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,i.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"quick-bi\u4ecb\u7ecd"},"Quick BI\u4ecb\u7ecd"),(0,n.yg)("p",null,"Quick BI \u662f\u4e00\u6b3e\u57fa\u4e8e\u6570\u636e\u4ed3\u5e93\u7684\u5546\u4e1a\u667a\u80fd\u5de5\u5177\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f01\u4e1a\u5feb\u901f\u642d\u5efa\u8d77\u9177\u70ab\u7684\u53ef\u89c6\u5316\u5206\u6790\u7f57\u76d8\u3002Quick BI \u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u5305\u62ec MySQL\u3001Oracle\u3001SQL Server\u3001Apache Doris \u7b49\u6570\u636e\u5e93\uff0c\u4ee5\u53ca Excel\u3001CSV\u3001JSON \u7b49\u6587\u4ef6\u683c\u5f0f\u3002\u5b83\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u53ef\u89c6\u5316\u7ec4\u4ef6\uff0c\u5982\u8868\u683c\u3001\u56fe\u8868\u3001\u5730\u56fe\u7b49\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u62d6\u62fd\u64cd\u4f5c\uff0c\u8f7b\u677e\u5b9e\u73b0\u6570\u636e\u7684\u53ef\u89c6\u5316\u5206\u6790\u3002"),(0,n.yg)("h2",{id:"\u6570\u636e\u8fde\u63a5\u4e0e\u5e94\u7528"},"\u6570\u636e\u8fde\u63a5\u4e0e\u5e94\u7528"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u767b\u5f55 Quick BI \u5e76\u5efa\u7acb\u4e00\u4e2a\u5de5\u4f5c\u533a\u3002")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728\u5f53\u524d\u7684\u5de5\u4f5c\u533a\u4e0b\u70b9\u51fb\u65b0\u5efa\u6570\u636e\u6e90"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"create workspace",src:r(986486).A,width:"1104",height:"416"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728\u65b0\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u9009\u62e9 Apache Doris \uff0c\u5e76\u586b\u5199\u5bf9\u5e94 Doris \u7684\u8fde\u63a5\u4fe1\u606f\u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Doris information",src:r(418253).A,width:"1280",height:"609"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u8fde\u63a5\u6210\u529f\u540e\uff0c\u53ef\u5728\u6570\u636e\u6e90\u5217\u8868\u4e2d\u770b\u5230\u6211\u4eec\u521b\u5efa\u7684\u6570\u636e\u6e90\u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"data source",src:r(238660).A,width:"1104",height:"224"}))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"\u5728\u521b\u5efa\u7684\u6570\u636e\u6e90\u4e2d\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u96c6\uff0c\u6b64\u5904\u4ee5 TPC-H \u6570\u636e\u96c6\u4e3a\u4f8b\u3002\u521b\u5efa\u6570\u636e\u96c6\u540e\u5373\u53ef\u8bbe\u7f6e\u5bf9\u5e94\u7684\u62a5\u8868\u3002"),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("img",{alt:"Doris table",src:r(893467).A,width:"994",height:"986"})))))}m.isMDXComponent=!0},986486:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/bi-quickbi-en-1-0aff7985cda7a5ade2f9e63980a3489b.png"},418253:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/bi-quickbi-en-2-f89f0585066ae995ffaeb570c1924d4e.png"},238660:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/bi-quickbi-en-3-d4fbe71c92bb56810cf798cf283fad4f.png"},893467:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/bi-quickbi-en-4-e21f84c898164ef5ff3491f42296a82f.png"}}]);