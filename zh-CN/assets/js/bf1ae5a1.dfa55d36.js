"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[456445],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>m});var l=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=u(a),c=r,m=g["".concat(o,".").concat(c)]||g[c]||h[c]||i;return a?l.createElement(m,n(n({ref:t},s),{},{components:a})):l.createElement(m,n({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[g]="string"==typeof e?e:r,n[1]=p;for(var u=2;u<i;u++)n[u]=a[u];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},400589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var l=a(58168),r=(a(296540),a(15680));const i={title:"Release 2.1.2",language:"zh-CN"},n=void 0,p={unversionedId:"releasenotes/v2.1/release-2.1.2",id:"version-2.0/releasenotes/v2.1/release-2.1.2",title:"Release 2.1.2",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/v2.1/release-2.1.2.md",sourceDirName:"releasenotes/v2.1",slug:"/releasenotes/v2.1/release-2.1.2",permalink:"/zh-CN/docs/2.0/releasenotes/v2.1/release-2.1.2",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.1.2",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 2.1.3",permalink:"/zh-CN/docs/2.0/releasenotes/v2.1/release-2.1.3"},next:{title:"Release 2.1.1",permalink:"/zh-CN/docs/2.0/releasenotes/v2.1/release-2.1.1"}},o={},u=[{value:"1 \u884c\u4e3a\u53d8\u66f4",id:"1-\u884c\u4e3a\u53d8\u66f4",level:2},{value:"2 \u5347\u7ea7\u95ee\u9898",id:"2-\u5347\u7ea7\u95ee\u9898",level:2},{value:"3 \u65b0\u529f\u80fd",id:"3-\u65b0\u529f\u80fd",level:2},{value:"4 \u6539\u8fdb\u4e0e\u4f18\u5316",id:"4-\u6539\u8fdb\u4e0e\u4f18\u5316",level:2},{value:"5 Bug \u4fee\u590d",id:"5-bug-\u4fee\u590d",level:2}],s={toc:u},g="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,l.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0c",(0,r.yg)("strong",{parentName:"p"},"Apache Doris 2.1.2 \u7248\u672c\u5df2\u4e8e 2024 \u5e74 4 \u6708 12 \u65e5\u6b63\u5f0f\u53d1\u5e03"),"\u3002\u8be5\u7248\u672c\u63d0\u4ea4\u4e86\u82e5\u5e72\u6539\u8fdb\u9879\u4ee5\u53ca\u95ee\u9898\u4fee\u590d\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u6027\u80fd\u53ca\u7a33\u5b9a\u6027\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u5b98\u7f51\u4e0b\u8f7d\uff1a")," ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"GitHub \u4e0b\u8f7d\uff1a")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")),(0,r.yg)("h2",{id:"1-\u884c\u4e3a\u53d8\u66f4"},"1 \u884c\u4e3a\u53d8\u66f4"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5c06 EXPORT \u547d\u4ee4\u4e2d ",(0,r.yg)("inlineCode",{parentName:"li"},"data_consistence")," \u5c5e\u6027\u7684\u9ed8\u8ba4\u503c\u8c03\u6574\u4e3a Partition\uff0c\u8fd9\u53ef\u4ee5\u4f7f\u5f97\u5e76\u53d1\u5bfc\u5165\u7684\u540c\u65f6\u505a EXPORT \u64cd\u4f5c\u66f4\u5bb9\u6613\u6210\u529f\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32830"},"https://github.com/apache/doris/pull/32830"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u517c\u5bb9\u90e8\u5206 MySQL Connector\uff08\u5982 MySQL.Data for .NET\uff09\u5c06 SELECT ",(0,r.yg)("inlineCode",{parentName:"li"},"@``@autocommit")," \u7684\u8fd4\u56de\u503c\u7c7b\u578b\u53d8\u66f4\u4e3a BIGINT\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33282"},"https://github.com/apache/doris/pull/33282")," ")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Auto Partition \u8bed\u6cd5\u53d8\u5316\uff0c\u8be6\u89c1 ",(0,r.yg)("a",{parentName:"li",href:"https://doris.apache.org/zh-CN/docs/table-design/data-partition#%E8%87%AA%E5%8A%A8%E5%88%86%E5%8C%BA"},"https://doris.apache.org/zh-CN/docs/table-design/data-partition#%E8%87%AA%E5%8A%A8%E5%88%86%E5%8C%BA"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32737"},"https://github.com/apache/doris/pull/32737"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Auto Partition \u7981\u6b62\u548c Dynamic Partition \u540c\u65f6\u4f5c\u7528\u5728\u4e00\u5f20\u8868\u4e0a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33736"},"https://github.com/apache/doris/pull/33736"))),(0,r.yg)("h2",{id:"2-\u5347\u7ea7\u95ee\u9898"},"2 \u5347\u7ea7\u95ee\u9898"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u6b63\u5e38 Workload Group \u4ece 2.0 \u6216\u8005\u66f4\u65e9\u7248\u672c\u5347\u7ea7\u5230 2.1 \u65f6\u6ca1\u6709\u9ed8\u8ba4\u521b\u5efa\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33197"},"https://github.com/apache/doris/pull/33197"))),(0,r.yg)("h2",{id:"3-\u65b0\u529f\u80fd"},"3 \u65b0\u529f\u80fd"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u589e\u52a0 processlist \u7cfb\u7edf\u8868\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u7cfb\u7edf\u8868\u83b7\u5f97\u6d3b\u8dc3\u7684\u94fe\u63a5\u4fe1\u606f\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32511"},"https://github.com/apache/doris/pull/32511"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u589e\u52a0\u65b0\u7684\u8868\u51fd\u6570 ",(0,r.yg)("inlineCode",{parentName:"li"},"LOCAL")," \u4ee5\u8bbf\u95ee\u90e8\u5206\u5171\u4eab\u5b58\u50a8\u4e0a\u7684\u6587\u4ef6\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris-website/pull/494"},"https://github.com/apache/doris-website/pull/494"))),(0,r.yg)("h2",{id:"4-\u6539\u8fdb\u4e0e\u4f18\u5316"},"4 \u6539\u8fdb\u4e0e\u4f18\u5316"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u8df3\u8fc7\u90e8\u5206\u4e0d\u5fc5\u8981\u68c0\u67e5\uff0c\u52a0\u901f\u5728 K8s \u73af\u5883\u4e0b\u4f18\u96c5\u9000\u51fa\u7684\u901f\u5ea6\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33212"},"https://github.com/apache/doris/pull/33212"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"\u5728 Profile \u4e2d\u589e\u52a0\u5df2\u547d\u4e2d\u7684\u7269\u5316\u89c6\u56fe\u4fe1\u606f\uff0c\u80fd\u591f\u65b9\u4fbf\u5730\u5b9a\u4f4d\u7269\u5316\u89c6\u56fe\u662f\u5426\u547d\u4e2d\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33137"},"https://github.com/apache/doris/pull/33137"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u9488\u5bf9 DB2 Catalog\uff0c\u589e\u52a0\u6d4b\u8bd5\u94fe\u63a5\u662f\u5426\u901a\u7545\u7684\u529f\u80fd\uff0c\u80fd\u591f\u5728\u5efa\u7acb Catalog \u65f6\u505a\u90e8\u5206\u94fe\u63a5\u68c0\u67e5\u3002 ")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33335"},"https://github.com/apache/doris/pull/33335"))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u589e\u52a0 DNS Cache\uff0c\u89e3\u51b3 K8s \u73af\u5883\u4e0b\u57df\u540d\u89e3\u6790\u8f83\u6162\uff0c\u4ece\u800c\u5f71\u54cd\u67e5\u8be2\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32869"},"https://github.com/apache/doris/pull/32869")," ")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"\u589e\u52a0\u5f02\u6b65\u5237\u65b0 Catalog \u4e2d\u8868\u7684\u884c\u6570\u4fe1\u606f\uff0c\u907f\u514d\u67e5\u8be2\u6296\u52a8\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32997"},"https://github.com/apache/doris/pull/32997"))),(0,r.yg)("h2",{id:"5-bug-\u4fee\u590d"},"5 Bug \u4fee\u590d"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'\u4fee\u590d Iceberg Catalog \u4e2d\uff0c\u4e0d\u652f\u6301 Iceberg \u81ea\u5b9a\u4e49\u5c5e\u6027\u7684\u95ee\u9898\uff0c\u4f8b\u5982 "io.manifest.cache-enabled"\u3002 ')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33113"},"https://github.com/apache/doris/pull/33113"))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"LEAD"),"/",(0,r.yg)("inlineCode",{parentName:"li"},"LAG")," \u51fd\u6570\u7684 Offset \u8d77\u59cb\u4f4d\u7f6e\u53ef\u4ee5\u8bbe\u7f6e\u4e3a 0\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33174"},"https://github.com/apache/doris/pull/33174"))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u90e8\u5206\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684 Timeout \u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33077"},"https://github.com/apache/doris/pull/33077")," ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/33260"},"https://github.com/apache/doris/pull/33260")))),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u90e8\u5206 ",(0,r.yg)("inlineCode",{parentName:"li"},"ARRAY")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"MAP")," / ",(0,r.yg)("inlineCode",{parentName:"li"},"STRUCT")," \u7c7b\u578b\u5728 Compaction \u4e2d\u5f15\u8d77 Core \u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33130"},"https://github.com/apache/doris/pull/33130")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33295"},"https://github.com/apache/doris/pull/33295"))),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d\u67e5\u8be2\u8fc7\u7a0b\u4e2d Runtime Filter \u90e8\u5206\u7b49\u5f85\u8d85\u65f6\u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/33369"},"https://github.com/apache/doris/pull/33369"))),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"\u4fee\u590d ",(0,r.yg)("inlineCode",{parentName:"li"},"unix_timestamp")," \u51fd\u6570\u5728 Auto Partition \u4e2d\u53ef\u80fd\u5bfc\u81f4 Core \u7684\u95ee\u9898\u3002")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32871"},"https://github.com/apache/doris/pull/32871"))))}h.isMDXComponent=!0}}]);