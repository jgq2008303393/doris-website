"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[149582],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>d});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,d=u["".concat(p,".").concat(y)]||u[y]||g[y]||o;return r?t.createElement(d,l(l({ref:n},s),{},{components:r})):t.createElement(d,l({ref:n},s))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},960388:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const o={title:"\u884c\u5217\u6df7\u5b58",language:"zh-CN"},l=void 0,i={unversionedId:"table-design/row-store",id:"version-2.1/table-design/row-store",title:"\u884c\u5217\u6df7\u5b58",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/row-store.md",sourceDirName:"table-design",slug:"/table-design/row-store",permalink:"/zh-CN/docs/table-design/row-store",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u884c\u5217\u6df7\u5b58",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u6ce8\u610f",permalink:"/zh-CN/docs/table-design/data-model/tips"},next:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh-CN/docs/table-design/data-partitioning/basic-concepts"}},p={},c=[{value:"\u884c\u5217\u6df7\u5b58\u4ecb\u7ecd",id:"\u884c\u5217\u6df7\u5b58\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u8bed\u6cd5",id:"\u4f7f\u7528\u8bed\u6cd5",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],s={toc:c},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u884c\u5217\u6df7\u5b58\u4ecb\u7ecd"},"\u884c\u5217\u6df7\u5b58\u4ecb\u7ecd"),(0,a.yg)("p",null,"Doris \u9ed8\u8ba4\u91c7\u7528\u5217\u5f0f\u5b58\u50a8\uff0c\u6bcf\u4e2a\u5217\u8fde\u7eed\u5b58\u50a8\uff0c\u5728\u5206\u6790\u573a\u666f\uff08\u5982\u805a\u5408\uff0c\u8fc7\u6ee4\uff0c\u6392\u5e8f\u7b49\uff09\u6709\u5f88\u597d\u7684\u6027\u80fd\uff0c\u56e0\u4e3a\u53ea\u9700\u8981\u8bfb\u53d6\u6240\u9700\u8981\u7684\u5217\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684 IO\u3002\u4f46\u662f\u5728\u70b9\u67e5\u573a\u666f\uff08\u6bd4\u5982 ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT *"),"\uff09\uff0c\u9700\u8981\u8bfb\u53d6\u6240\u6709\u5217\uff0c\u6bcf\u4e2a\u5217\u90fd\u9700\u8981\u4e00\u6b21 IO \u5bfc\u81f4 IOPS \u6210\u4e3a\u74f6\u9888\uff0c\u7279\u522b\u5bf9\u5217\u591a\u7684\u5bbd\u8868\uff08\u6bd4\u5982\u4e0a\u767e\u5217\uff09\u5c24\u4e3a\u660e\u663e\u3002"),(0,a.yg)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u70b9\u67e5\u573a\u666f IOPS \u7684\u74f6\u9888\u95ee\u9898\uff0cDoris 2.0.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u884c\u5217\u6df7\u5b58\uff0c\u7528\u6237\u5efa\u8868\u65f6\u6307\u5b9a\u5f00\u542f\u884c\u5b58\u540e\uff0c\u70b9\u67e5\uff08\u6bd4\u5982 ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT *"),"\uff09\u6bcf\u4e00\u884c\u53ea\u9700\u8981\u4e00\u6b21 IO\uff0c\u5728\u5bbd\u8868\u5217\u5f88\u591a\u7684\u60c5\u51b5\u4e0b\u6027\u80fd\u6709\u6570\u91cf\u7ea7\u63d0\u5347\u3002"),(0,a.yg)("p",null,"\u884c\u5b58\u7684\u539f\u7406\u662f\u5728\u5b58\u50a8\u65f6\u589e\u52a0\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u5217\uff0c\u8fd9\u4e2a\u5217\u5c06\u5bf9\u5e94\u884c\u7684\u6240\u6709\u5217\u62fc\u63a5\u8d77\u6765\u91c7\u7528\u7279\u6b8a\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f\u5b58\u50a8\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u8bed\u6cd5"},"\u4f7f\u7528\u8bed\u6cd5"),(0,a.yg)("p",null,"\u5efa\u8868\u65f6\u5728\u8868\u7684 PROPERTIES \u4e2d\u6307\u5b9a\u662f\u5426\u5f00\u542f\u884c\u5b58\uff0c\u884c\u5b58\u7684\u5b58\u50a8\u538b\u7f29\u5355\u5143\u5927\u5c0f page_size\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u662f\u5426\u5f00\u542f\u884c\u5b58\uff1a\u9ed8\u8ba4\u4e3a false \u4e0d\u5f00\u542f")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"store_row_column" = "true"\n')),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u884c\u5b58 page_size\uff1a\u9ed8\u8ba4\u4e3a 16KB\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"row_store_page_size" = "16384"\n')),(0,a.yg)("p",null,"page \u662f\u5b58\u50a8\u8bfb\u5199\u7684\u6700\u5c0f\u5355\u5143\uff0cpage_size \u662f\u884c\u5b58 page \u7684\u5927\u5c0f\uff0c\u4e5f\u5c31\u662f\u8bf4\u8bfb\u4e00\u884c\u4e5f\u9700\u8981\u4ea7\u751f\u4e00\u4e2a page \u7684 IO\u3002\u8fd9\u4e2a\u503c\u8d8a\u5927\u538b\u7f29\u6548\u679c\u8d8a\u597d\u5b58\u50a8\u7a7a\u95f4\u5360\u7528\u8d8a\u4f4e\uff0c\u4f46\u662f\u70b9\u67e5\u65f6 IO \u5f00\u9500\u8d8a\u5927\u6027\u80fd\u8d8a\u4f4e\uff08\u56e0\u4e3a\u4e00\u6b21 IO \u81f3\u5c11\u8bfb\u4e00\u4e2a page\uff09\uff0c\u53cd\u8fc7\u6765\u503c\u8d8a\u5c0f\u5b58\u50a8\u7a7a\u95f4\u7ea6\u9ad8\uff0c\u70b9\u67e5\u6027\u80fd\u8d8a\u597d\u3002\u9ed8\u8ba4\u503c 16KB \u662f\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6bd4\u8f83\u5747\u8861\u7684\u9009\u62e9\uff0c\u5982\u679c\u66f4\u504f\u5411\u67e5\u8be2\u6027\u80fd\u53ef\u4ee5\u914d\u7f6e\u8f83\u5c0f\u7684\u503c\u6bd4\u5982 4KB \u751a\u81f3\u66f4\u4f4e\uff0c\u5982\u679c\u66f4\u504f\u5411\u5b58\u50a8\u7a7a\u95f4\u53ef\u4ee5\u914d\u7f6e\u8f83\u5927\u7684\u503c\u6bd4\u5982 64KB \u751a\u81f3\u66f4\u9ad8\u3002"),(0,a.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.yg)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u521b\u5efa\u4e00\u4e2a 8 \u5217\u7684\u8868\uff0c\u5f00\u542f\u884c\u5b58\uff0c\u4e3a\u4e86\u9ad8\u5e76\u53d1\u70b9\u67e5\u6027\u80fd\u914d\u7f6e page_size \u4e3a 4KB\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE `tbl_point_query` (\n    `key` int(11) NULL,\n    `v1` decimal(27, 9) NULL,\n    `v2` varchar(30) NULL,\n    `v3` varchar(30) NULL,\n    `v4` date NULL,\n    `v5` datetime NULL,\n    `v6` float NULL,\n    `v7` datev2 NULL\n) ENGINE=OLAP\nUNIQUE KEY(`key`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`key`) BUCKETS 1\nPROPERTIES (\n    "enable_unique_key_merge_on_write" = "true",\n    "light_schema_change" = "true",\n    "store_row_column" = "true",\n    "row_store_page_size" = "4096"\n);\n')),(0,a.yg)("p",null,"\u67e5\u8be2"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SELECT * FROM tbl_point_query WHERE key = 100\uff1b\n")),(0,a.yg)("p",null,"\u66f4\u591a\u70b9\u67e5\u7684\u4f7f\u7528\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"p",href:"../query-acceleration/high-concurrent-point-query"},"\u9ad8\u5e76\u53d1\u70b9\u67e5")," \u3002"),(0,a.yg)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5f00\u542f\u884c\u5b58\u540e\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u4f1a\u589e\u52a0\uff0c\u5b58\u50a8\u7a7a\u95f4\u7684\u589e\u52a0\u548c\u6570\u636e\u7279\u70b9\u6709\u5173\uff0c\u4e00\u822c\u662f\u539f\u6765\u8868\u7684 2 \u5230 10 \u500d\uff0c\u5177\u4f53\u7a7a\u95f4\u5360\u7528\u9700\u8981\u4f7f\u7528\u5b9e\u9645\u6570\u636e\u6d4b\u8bd5\u3002"),(0,a.yg)("li",{parentName:"ol"},"\u884c\u5b58\u7684 page_size \u5bf9\u5b58\u50a8\u7a7a\u95f4\u7684\u4e5f\u6709\u5f71\u54cd\uff0c\u53ef\u4ee5\u6839\u636e\u524d\u9762\u7684\u8868\u5c5e\u6027\u53c2\u6570 ",(0,a.yg)("inlineCode",{parentName:"li"},"row_store_page_size")," \u8bf4\u660e\u8fdb\u884c\u8c03\u6574\u3002")))}g.isMDXComponent=!0}}]);