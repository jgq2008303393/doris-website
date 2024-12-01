"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[165901],{15680:(e,n,a)=>{a.d(n,{xA:()=>o,yg:()=>c});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function g(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),i=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},o=function(e){var n=i(e.components);return t.createElement(d.Provider,{value:n},e.children)},p="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),p=i(a),y=r,c=p["".concat(d,".").concat(y)]||p[y]||N[y]||l;return a?t.createElement(c,s(s({ref:n},o),{},{components:a})):t.createElement(c,s({ref:n},o))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=y;var g={};for(var d in n)hasOwnProperty.call(n,d)&&(g[d]=n[d]);g.originalType=e,g[p]="string"==typeof e?e:r,s[1]=g;for(var i=2;i<l;i++)s[i]=a[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},133303:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>N,frontMatter:()=>l,metadata:()=>g,toc:()=>i});var t=a(58168),r=(a(296540),a(15680));const l={title:"\u805a\u5408\u591a\u7ef4\u5206\u6790",language:"zh-CN"},s=void 0,g={unversionedId:"query-data/multi-dimensional-analytics",id:"query-data/multi-dimensional-analytics",title:"\u805a\u5408\u591a\u7ef4\u5206\u6790",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-data/multi-dimensional-analytics.md",sourceDirName:"query-data",slug:"/query-data/multi-dimensional-analytics",permalink:"/zh-CN/docs/dev/query-data/multi-dimensional-analytics",draft:!1,tags:[],version:"current",frontMatter:{title:"\u805a\u5408\u591a\u7ef4\u5206\u6790",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5b50\u67e5\u8be2",permalink:"/zh-CN/docs/dev/query-data/subquery"},next:{title:"\u5206\u6790\u51fd\u6570 (\u7a97\u53e3\u51fd\u6570\uff09",permalink:"/zh-CN/docs/dev/query-data/window-function"}},d={},i=[{value:"ROLLUP",id:"rollup",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u8bed\u6cd5\u548c\u793a\u4f8b",id:"\u8bed\u6cd5\u548c\u793a\u4f8b",level:3},{value:"CUBE",id:"cube",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f-1",level:3},{value:"\u8bed\u6cd5\u548c\u793a\u4f8b",id:"\u8bed\u6cd5\u548c\u793a\u4f8b-1",level:3},{value:"GROUPING FUNCTION",id:"grouping-function",level:2},{value:"GROUPING",id:"grouping",level:3},{value:"GROUPING_ID",id:"grouping_id",level:3},{value:"GROUPING SETS",id:"grouping-sets",level:3},{value:"\u8bbe\u8ba1\u6587\u6863",id:"\u8bbe\u8ba1\u6587\u6863",level:2}],o={toc:i},p="wrapper";function N(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u5728\u6570\u636e\u5e93\u4e2d\uff0cROLLUP\u3001CUBE \u548c GROUPING SETS \u662f\u7528\u4e8e\u591a\u7ef4\u6570\u636e\u805a\u5408\u7684\u9ad8\u7ea7 SQL \u8bed\u53e5\u3002\u8fd9\u4e9b\u529f\u80fd\u663e\u8457\u589e\u5f3a\u4e86 GROUP BY \u5b50\u53e5\u7684\u80fd\u529b\uff0c\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u5728\u5355\u4e00\u67e5\u8be2\u4e2d\u83b7\u5f97\u591a\u79cd\u5c42\u6b21\u7684\u6c47\u603b\u7ed3\u679c\uff0c\u8fd9\u5728\u8bed\u4e49\u4e0a\u7b49\u4ef7\u4e8e\u4f7f\u7528 UNION ALL \u8fde\u63a5\u591a\u4e2a\u805a\u5408\u8bed\u53e5\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"ROLLUP"),"\uff1aROLLUP \u662f\u4e00\u79cd\u7528\u4e8e\u751f\u6210\u5c42\u6b21\u5316\u6c47\u603b\u7684\u64cd\u4f5c\u3002\u5b83\u6309\u7167\u6307\u5b9a\u7684\u5217\u987a\u5e8f\u8fdb\u884c\u6c47\u603b\uff0c\u4ece\u6700\u7ec6\u7c92\u5ea6\u7684\u6570\u636e\u9010\u6b65\u6c47\u603b\u5230\u6700\u9ad8\u5c42\u6b21\u3002\u4f8b\u5982\uff0c\u5728\u9500\u552e\u6570\u636e\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ROLLUP \u6309\u5730\u533a\u3001\u65f6\u95f4\u8fdb\u884c\u6c47\u603b\uff0c\u5f97\u5230\u6bcf\u4e2a\u5730\u533a\u6bcf\u4e2a\u6708\u7684\u9500\u552e\u989d\u3001\u6bcf\u4e2a\u5730\u533a\u7684\u603b\u9500\u552e\u989d\u4ee5\u53ca\u6574\u4f53\u603b\u9500\u552e\u989d\u3002ROLLUP \u9002\u7528\u4e8e\u9700\u8981\u9010\u7ea7\u6c47\u603b\u7684\u573a\u666f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"CUBE"),"\uff1aCUBE \u662f\u4e00\u79cd\u66f4\u4e3a\u5f3a\u5927\u7684\u805a\u5408\u64cd\u4f5c\uff0c\u5b83\u751f\u6210\u6240\u6709\u53ef\u80fd\u7684\u6c47\u603b\u7ec4\u5408\u3002\u4e0e ROLLUP \u4e0d\u540c\uff0cCUBE \u4f1a\u8ba1\u7b97\u6240\u6709\u7ef4\u5ea6\u7684\u5b50\u96c6\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u6309\u4ea7\u54c1\u548c\u5730\u533a\u8fdb\u884c\u7edf\u8ba1\u7684\u9500\u552e\u6570\u636e\uff0cCUBE \u4f1a\u8ba1\u7b97\u6bcf\u4e2a\u4ea7\u54c1\u5728\u6bcf\u4e2a\u5730\u533a\u7684\u9500\u552e\u989d\u3001\u6bcf\u4e2a\u4ea7\u54c1\u7684\u603b\u9500\u552e\u989d\u3001\u6bcf\u4e2a\u5730\u533a\u7684\u603b\u9500\u552e\u989d\u4ee5\u53ca\u6574\u4f53\u603b\u9500\u552e\u989d\u3002CUBE \u9002\u7528\u4e8e\u9700\u8981\u5168\u9762\u591a\u7ef4\u5206\u6790\u7684\u573a\u666f\uff0c\u5982\u4e1a\u52a1\u5206\u6790\u548c\u5e02\u573a\u8c03\u67e5\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GROUPING SETS"),"\uff1aGROUPING SETS \u63d0\u4f9b\u4e86\u5bf9\u7279\u5b9a\u5206\u7ec4\u96c6\u8fdb\u884c\u805a\u5408\u7684\u7075\u6d3b\u6027\u3002\u5b83\u5141\u8bb8\u7528\u6237\u6307\u5b9a\u4e00\u7ec4\u5217\u7684\u7ec4\u5408\u8fdb\u884c\u72ec\u7acb\u805a\u5408\uff0c\u800c\u4e0d\u662f\u50cf ROLLUP \u548c CUBE \u90a3\u6837\u751f\u6210\u6240\u6709\u53ef\u80fd\u7684\u7ec4\u5408\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u5b9a\u4e49\u6309\u5730\u533a\u548c\u65f6\u95f4\u7684\u7279\u5b9a\u7ec4\u5408\u8fdb\u884c\u6c47\u603b\uff0c\u800c\u4e0d\u9700\u8981\u6bcf\u4e2a\u7ef4\u5ea6\u7684\u6240\u6709\u7ec4\u5408\u3002GROUPING SETS \u9002\u7528\u4e8e\u9700\u8981\u5b9a\u5236\u5316\u6c47\u603b\u7684\u573a\u666f\uff0c\u63d0\u4f9b\u4e86\u7075\u6d3b\u7684\u805a\u5408\u63a7\u5236\u3002"))),(0,r.yg)("p",null,"ROLLUP\u3001CUBE \u548c GROUPING SETS \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u591a\u7ef4\u6570\u636e\u6c47\u603b\u529f\u80fd\uff0c\u9002\u7528\u4e8e\u5404\u79cd\u6570\u636e\u5206\u6790\u548c\u62a5\u544a\u9700\u6c42\uff0c\u4f7f\u5f97\u590d\u6742\u7684\u805a\u5408\u8ba1\u7b97\u53d8\u5f97\u66f4\u52a0\u7b80\u4fbf\u548c\u9ad8\u6548\u3002\u63a5\u4e0b\u6765\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u4ee5\u4e0a\u529f\u80fd\u4f7f\u7528\u573a\u666f\u3001\u8bed\u6cd5\u4e0e\u793a\u4f8b\u3002"),(0,r.yg)("h2",{id:"rollup"},"ROLLUP"),(0,r.yg)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.yg)("p",null,"ROLLUP \u5bf9\u4e8e\u6309\u7167\u65f6\u95f4\u3001\u5730\u7406\u3001\u7c7b\u522b\u7b49\u5c42\u6b21\u7ef4\u5ea6\u8fdb\u884c\u6c47\u603b\u65f6\u975e\u5e38\u6709\u7528\u3002\u4f8b\u5982\uff0c\u67e5\u8be2\u53ef\u4ee5\u6307\u5b9a ",(0,r.yg)("inlineCode",{parentName:"p"},"ROLLUP(year, month, day)")," \u6216\u8005 ",(0,r.yg)("inlineCode",{parentName:"p"},"(country, Province, city)"),"\u3002"),(0,r.yg)("h3",{id:"\u8bed\u6cd5\u548c\u793a\u4f8b"},"\u8bed\u6cd5\u548c\u793a\u4f8b"),(0,r.yg)("p",null,"ROLLUP \u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT \u2026 GROUP BY ROLLUP(grouping_column_reference_list)\n")),(0,r.yg)("p",null,"\u4e0b\u9762\u8fd9\u4e2a\u67e5\u8be2\u5bf9\u9500\u552e\u989d\u6309\u7167\u5e74\u6708\u8fdb\u884c\u6c47\u603b\u5206\u6790\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT  \n        YEAR(d_date),  \n        MONTH(d_date),  \n        SUM(ss_net_paid) AS total_sum  \nFROM  \n        store_sales,  \n        date_dim d1  \nWHERE  \n        d1.d_date_sk = ss_sold_date_sk  \n        AND YEAR(d_date) IN (2001, 2002)  \n        AND MONTH(d_date) IN (1, 2, 3)  \nGROUP BY  \n        ROLLUP(YEAR(d_date), MONTH(d_date))  \nORDER BY  \n        YEAR(d_date), MONTH(d_date);\n")),(0,r.yg)("p",null,"\u8fd9\u4e2a\u67e5\u8be2\u6309\u7167\u65f6\u95f4\u8fdb\u884c\u6c47\u603b\uff0c\u5206\u522b\u8ba1\u7b97\u4e86\u6bcf\u5e74\u7684\u9500\u552e\u989d\u5c0f\u8ba1\u3001\u6bcf\u5e74\u4e2d\u6bcf\u6708\u7684\u9500\u552e\u989d\u5c0f\u8ba1\uff0c\u4ee5\u53ca\u603b\u4f53\u7684\u9500\u552e\u989d\u603b\u8ba1\u3002\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+--------------+---------------+-------------+  \n| YEAR(d_date) | MONTH(d_date) | total_sum   |  \n+--------------+---------------+-------------+  \n|         NULL |          NULL | 54262669.17 |  \n|         2001 |          NULL | 26640320.46 |  \n|         2001 |             1 |  9982165.83 |  \n|         2001 |             2 |  8454915.34 |  \n|         2001 |             3 |  8203239.29 |  \n|         2002 |          NULL | 27622348.71 |  \n|         2002 |             1 | 11260654.35 |  \n|         2002 |             2 |  7722750.61 |  \n|         2002 |             3 |  8638943.75 |  \n+--------------+---------------+-------------+  \n9 rows in set (0.08 sec)\n")),(0,r.yg)("h2",{id:"cube"},"CUBE"),(0,r.yg)("h3",{id:"\u4f7f\u7528\u573a\u666f-1"},"\u4f7f\u7528\u573a\u666f"),(0,r.yg)("p",null,"CUBE \u6700\u9002\u5408\u7528\u4e8e\u67e5\u8be2\u6d89\u53ca\u591a\u4e2a\u72ec\u7acb\u7ef4\u5ea6\u7684\u5217\uff0c\u800c\u4e0d\u662f\u8868\u793a\u5355\u4e2a\u7ef4\u5ea6\u7684\u4e0d\u540c\u7ea7\u522b\u7684\u5217\u3002\u4f8b\u5982\uff0c\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u662f\u5bf9\u6708\u4efd\u3001\u5730\u533a\u548c\u4ea7\u54c1\u7684\u6240\u6709\u7ec4\u5408\u8fdb\u884c\u6c47\u603b\u3002\u8fd9\u662f\u4e09\u4e2a\u72ec\u7acb\u7684\u7ef4\u5ea6\uff0c\u5206\u6790\u6240\u6709\u53ef\u80fd\u7684\u5c0f\u8ba1\u7ec4\u5408\u662f\u5f88\u5e38\u89c1\u7684\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u663e\u793a\u5e74\u3001\u6708\u3001\u65e5\u6240\u6709\u53ef\u80fd\u7ec4\u5408\u7684\u4ea4\u53c9\u5236\u8868\u5c06\u5305\u542b\u51e0\u4e2a\u4e0d\u5fc5\u8981\u7684\u503c\uff0c\u56e0\u4e3a\u65f6\u95f4\u7ef4\u5ea6\u4e2d\u5b58\u5728\u81ea\u7136\u7684\u5c42\u6b21\u7ed3\u6784\u3002\u5728\u5927\u591a\u6570\u5206\u6790\u4e2d\uff0c\u8bf8\u5982\u6309\u6708\u65e5\u8ba1\u7b97\u7684\u5229\u6da6\u4e4b\u7c7b\u7684\u5c0f\u8ba1\u90fd\u662f\u4e0d\u5fc5\u8981\u7684\u3002\u76f8\u5bf9\u8f83\u5c11\u7684\u7528\u6237\u9700\u8981\u8be2\u95ee\u201c\u5168\u5e74\u6bcf\u6708 16 \u65e5\u7684\u603b\u9500\u552e\u989d\u662f\u591a\u5c11\u201d\u3002"),(0,r.yg)("h3",{id:"\u8bed\u6cd5\u548c\u793a\u4f8b-1"},"\u8bed\u6cd5\u548c\u793a\u4f8b"),(0,r.yg)("p",null,"CUBE \u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT \u2026 GROUP BY CUBE(grouping_column_reference_list)\n")),(0,r.yg)("p",null,"\u4f7f\u7528\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT  \n        YEAR(d_date),  \n        i_category,  \n        ca_state,  \n        SUM(ss_net_paid) AS total_sum  \nFROM  \n        store_sales,  \n        date_dim d1,  \n        item,  \n        customer_address ca   \nWHERE  \n        d1.d_date_sk = ss_sold_date_sk  \n        AND i_item_sk = ss_item_sk  \n        AND ss_addr_sk = ca_address_sk  \n        AND i_category IN ("Books", "Electronics")  \n        AND YEAR(d_date) IN (1998, 1999)  \n        AND ca_state IN ("LA", "AK")  \nGROUP BY CUBE(YEAR(d_date), i_category, ca_state)  \nORDER BY YEAR(d_date), i_category, ca_state;\n')),(0,r.yg)("p",null,"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff0c\u5b83\u5206\u522b\u8ba1\u7b97\u4e86\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u603b\u8ba1\u7684\u9500\u552e\u989d\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5404\u5e74\u5ea6\u7684\u9500\u552e\u989d\u5c0f\u8ba1\u3001\u5404\u7c7b\u522b\u4e0b\u5546\u54c1\u7684\u9500\u552e\u989d\u5c0f\u8ba1\u3001\u5404\u5dde\u7684\u9500\u552e\u989d\u5c0f\u8ba1\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6bcf\u5e74\u6bcf\u7c7b\u4ea7\u54c1\u7684\u9500\u552e\u989d\u5c0f\u8ba1\u3001\u6bcf\u4e2a\u5dde\u6bcf\u4e2a\u4ea7\u54c1\u7684\u9500\u552e\u989d\u5c0f\u8ba1\u3001\u6bcf\u5e74\u6bcf\u4e2a\u5dde\u7684\u9500\u552e\u989d\u5c0f\u8ba1\u548c\u6bcf\u5e74\u6bcf\u4e2a\u5dde\u5404\u7c7b\u522b\u7684\u4ea7\u54c1\u7684\u9500\u552e\u989d\u5c0f\u8ba1\u3002"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+--------------+-------------+----------+------------+  \n| YEAR(d_date) | i_category  | ca_state | total_sum  |  \n+--------------+-------------+----------+------------+  \n|         NULL | NULL        | NULL     | 8690374.60 |  \n|         NULL | NULL        | AK       | 2675198.33 |  \n|         NULL | NULL        | LA       | 6015176.27 |  \n|         NULL | Books       | NULL     | 4238177.69 |  \n|         NULL | Books       | AK       | 1310791.36 |  \n|         NULL | Books       | LA       | 2927386.33 |  \n|         NULL | Electronics | NULL     | 4452196.91 |  \n|         NULL | Electronics | AK       | 1364406.97 |  \n|         NULL | Electronics | LA       | 3087789.94 |  \n|         1998 | NULL        | NULL     | 4369656.14 |  \n|         1998 | NULL        | AK       | 1402539.19 |  \n|         1998 | NULL        | LA       | 2967116.95 |  \n|         1998 | Books       | NULL     | 2213703.82 |  \n|         1998 | Books       | AK       |  719911.29 |  \n|         1998 | Books       | LA       | 1493792.53 |  \n|         1998 | Electronics | NULL     | 2155952.32 |  \n|         1998 | Electronics | AK       |  682627.90 |  \n|         1998 | Electronics | LA       | 1473324.42 |  \n|         1999 | NULL        | NULL     | 4320718.46 |  \n|         1999 | NULL        | AK       | 1272659.14 |  \n|         1999 | NULL        | LA       | 3048059.32 |  \n|         1999 | Books       | NULL     | 2024473.87 |  \n|         1999 | Books       | AK       |  590880.07 |  \n|         1999 | Books       | LA       | 1433593.80 |  \n|         1999 | Electronics | NULL     | 2296244.59 |  \n|         1999 | Electronics | AK       |  681779.07 |  \n|         1999 | Electronics | LA       | 1614465.52 |  \n+--------------+-------------+----------+------------+  \n27 rows in set (0.21 sec)\n")),(0,r.yg)("h2",{id:"grouping-function"},"GROUPING FUNCTION"),(0,r.yg)("p",null,"\u672c\u8282\u5c06\u5bf9\u4ecb\u7ecd\u901a\u8fc7\u5982\u4f55\u89e3\u51b3\u4f7f\u7528 ROLLUP \u548c CUBE \u65f6\u51fa\u73b0\u7684\u4e24\u4e2a\u6311\u6218\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u4f55\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u8bc6\u522b\u51fa\u54ea\u4e9b\u7ed3\u679c\u96c6\u884c\u4ee3\u8868\u5c0f\u8ba1\uff0c\u4ee5\u53ca\u5982\u4f55\u51c6\u786e\u627e\u5230\u7ed9\u5b9a\u5c0f\u8ba1\u5bf9\u5e94\u7684\u805a\u5408\u5c42\u7ea7\u3002\u7531\u4e8e\u5728\u8ba1\u7b97\uff08\u5982\u603b\u8ba1\u767e\u5206\u6bd4\uff09\u65f6\u7ecf\u5e38\u9700\u8981\u4f7f\u7528\u5c0f\u8ba1\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u7b80\u4fbf\u7684\u65b9\u6cd5\u6765\u8bc6\u522b\u8fd9\u4e9b\u5c0f\u8ba1\u884c\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5f53\u67e5\u8be2\u7ed3\u679c\u540c\u65f6\u5305\u542b\u5b9e\u9645\u5b58\u50a8\u7684 NULL \u503c\u548c\u7531 ROLLUP \u6216 CUBE \u64cd\u4f5c\u751f\u6210\u7684\u201cNULL\u201d\u503c\u65f6\uff0c\u4f1a\u5f15\u53d1\u53e6\u4e00\u4e2a\u95ee\u9898\uff1a\u5982\u4f55\u533a\u5206\u8fd9\u4e24\u79cd NULL \u503c\uff1f"))),(0,r.yg)("p",null,"\u901a\u8fc7 GROUPING\u3001GROUPING_ID\u3001GROUPING SETS \u80fd\u591f\u6709\u6548\u89e3\u51b3\u4e0a\u8ff0\u7684\u4e24\u4e2a\u6311\u6218\u3002"),(0,r.yg)("h3",{id:"grouping"},"GROUPING"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u539f\u7406\u4ecb\u7ecd")),(0,r.yg)("p",null,"GROUPING \u4f7f\u7528\u5355\u4e2a\u5217\u4f5c\u4e3a\u53c2\u6570\uff0c\u5728\u9047\u5230\u7531 ROLLUP \u6216 CUBE \u64cd\u4f5c\u521b\u5efa\u7684 NULL \u503c\u65f6\u8fd4\u56de 1\uff0c\u5373 NULL \u8868\u793a\u8be5\u884c\u662f\u5c0f\u8ba1\uff0c\u5219 GROUPING \u8fd4\u56de 1\u3002\u4efb\u4f55\u5176\u4ed6\u7c7b\u578b\u7684\u503c\uff08\u5305\u62ec\u8868\u6570\u636e\u4e2d\u672c\u8eab\u7684 NULL\uff09\u90fd\u8fd4\u56de 0\u3002"),(0,r.yg)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select  \n        year(d_date),  \n        month(d_date),  \n        sum(ss_net_paid) as total_sum,  \n        grouping(year(d_date)),  \n        grouping(month(d_date))  \nfrom  \n        store_sales,  \n        date_dim d1  \nwhere  \n        d1.d_date_sk = ss_sold_date_sk  \n        and year(d_date) in (2001, 2002)  \n        and month(d_date) in (1, 2, 3)  \ngroup by  \n        rollup(year(d_date), month(d_date))  \norder by  \n        year(d_date), month(d_date);\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"(year(d_date), month(d_date)) \u7ec4\u7684 GROUPING \u51fd\u6570\u7ed3\u679c\u4e3a (0,0) \u4e3a\u6309\u7167\u5e74\u6708\u805a\u5408\u7684\u7ed3\u679c")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"(year(d_date)) \u7ec4\u7684 GROUPING \u51fd\u6570\u7ed3\u679c\u4e3a (0,1)\uff0c\u4e3a\u6309\u5e74\u805a\u5408\u7684\u7ed3\u679c\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"() \u7ec4\u7684 GROUPING \u51fd\u6570\u7ed3\u679c\u4e3a (1,1)\uff0c\u4e3a\u603b\u8ba1\u7ed3\u679c\u3002"))),(0,r.yg)("p",null,"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+--------------+---------------+-------------+------------------------+-------------------------+  \n| year(d_date) | month(d_date) | total_sum   | Grouping(year(d_date)) | Grouping(month(d_date)) |  \n+--------------+---------------+-------------+------------------------+-------------------------+  \n|         NULL |          NULL | 54262669.17 |                      1 |                       1 |  \n|         2001 |          NULL | 26640320.46 |                      0 |                       1 |  \n|         2001 |             1 |  9982165.83 |                      0 |                       0 |  \n|         2001 |             2 |  8454915.34 |                      0 |                       0 |  \n|         2001 |             3 |  8203239.29 |                      0 |                       0 |  \n|         2002 |          NULL | 27622348.71 |                      0 |                       1 |  \n|         2002 |             1 | 11260654.35 |                      0 |                       0 |  \n|         2002 |             2 |  7722750.61 |                      0 |                       0 |  \n|         2002 |             3 |  8638943.75 |                      0 |                       0 |  \n+--------------+---------------+-------------+------------------------+-------------------------+  \n9 rows in set (0.06 sec)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. \u4f7f\u7528\u573a\u666f\u3001\u8bed\u6cd5\u4e0e\u793a\u4f8b")),(0,r.yg)("p",null,"GROUPING \u51fd\u6570\u53ef\u4ee5\u7528\u6765\u8fc7\u6ee4\u7ed3\u679c\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select\n        year(d_date),\n        i_category,\n        ca_state,\n        sum(ss_net_paid) as total_sum\nfrom\n        store_sales,\n        date_dim d1,\n        item,\n        customer_address ca \nwhere\n        d1.d_date_sk = ss_sold_date_sk\n        and i_item_sk = ss_item_sk\n        and ss_addr_sk=ca_address_sk\n        and i_category in ("Books", "Electronics")\n        and year(d_date) in(1998, 1999)\n        and ca_state in ("LA", "AK")\ngroup by cube(year(d_date), i_category, ca_state)\nhaving grouping(year(d_date))=1 and grouping(i_category)=1 and grouping(ca_state)=1\nor grouping(year(d_date))=0 and grouping(i_category)=1 and grouping(ca_state)=1\nor grouping(year(d_date))=1 and grouping(i_category)=1 and grouping(ca_state)=0\norder by year(d_date), i_category, ca_state;   \n')),(0,r.yg)("p",null,"\u5728 HAVING \u8fc7\u6ee4\u6761\u4ef6\u4e2d\u4f7f\u7528 GROUPING \u51fd\u6570\uff0c\u4ec5\u4fdd\u7559\u603b\u8ba1\u9500\u552e\u989d\uff0c\u6309\u5e74\u5ea6\u6c47\u603b\u7684\u9500\u552e\u989d\u548c\u6309\u5730\u533a\u6c47\u603b\u7684\u9500\u552e\u989d\u3002\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+---------------------+------------+----------+------------+  \n| year(`d1`.`d_date`) | i_category | ca_state | total_sum  |  \n+---------------------+------------+----------+------------+  \n|                NULL | NULL       | NULL     | 8690374.60 |  \n|                NULL | NULL       | AK       | 2675198.33 |  \n|                NULL | NULL       | LA       | 6015176.27 |  \n|                1998 | NULL       | NULL     | 4369656.14 |  \n|                1999 | NULL       | NULL     | 4320718.46 |  \n+---------------------+------------+----------+------------+  \n5 rows in set (0.13 sec)\n")),(0,r.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 GROUPING \u51fd\u6570\u548c IF \u51fd\u6570\u63d0\u9ad8\u67e5\u8be2\u7684\u53ef\u8bfb\u6027\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select  \n        if(grouping(year(d_date)) = 1, "Multi-year sum", year(d_date)) as year,  \n        if(grouping(i_category) = 1, "Multi-category sum", i_category) as category,  \n        sum(ss_net_paid) as total_sum  \nfrom  \n        store_sales,  \n        date_dim d1,  \n        item,  \n        customer_address ca  \nwhere  \n        d1.d_date_sk = ss_sold_date_sk  \n        and i_item_sk = ss_item_sk  \n        and ss_addr_sk = ca_address_sk  \n        and i_category in ("Books", "Electronics")  \n        and year(d_date) in (1998, 1999)  \n        and ca_state in ("LA", "AK")  \ngroup by cube(year(d_date), i_category)\n')),(0,r.yg)("p",null,"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+----------------+--------------------+------------+  \n| year           | category           | total_sum  |  \n+----------------+--------------------+------------+  \n| 1998           | Books              | 2213703.82 |  \n| 1998           | Electronics        | 2155952.32 |  \n| 1999           | Electronics        | 2296244.59 |  \n| 1999           | Books              | 2024473.87 |  \n| 1998           | Multi-category sum | 4369656.14 |  \n| 1999           | Multi-category sum | 4320718.46 |  \n| Multi-year sum | Books              | 4238177.69 |  \n| Multi-year sum | Electronics        | 4452196.91 |  \n| Multi-year sum | Multi-category sum | 8690374.60 |  \n+----------------+--------------------+------------+  \n9 rows in set (0.09 sec)\n")),(0,r.yg)("h3",{id:"grouping_id"},"GROUPING_ID"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u4f7f\u7528\u573a\u666f")),(0,r.yg)("p",null,"\u5728\u6570\u636e\u5e93\u4e2d\uff0cGROUPING_ID \u548c GROUPING \u51fd\u6570\u90fd\u662f\u7528\u4e8e\u5904\u7406\u591a\u7ef4\u6570\u636e\u805a\u5408\u67e5\u8be2\uff08\u5982 ROLLUP \u548c CUBE\uff09\u65f6\u7684\u8f85\u52a9\u51fd\u6570\uff0c\u5b83\u4eec\u5e2e\u52a9\u7528\u6237\u533a\u5206\u4e0d\u540c\u5c42\u7ea7\u7684\u805a\u5408\u7ed3\u679c\u3002\u5982\u679c\u4f60\u60f3\u786e\u5b9a\u67d0\u4e00\u884c\u7684\u805a\u5408\u5c42\u7ea7\uff0c\u4f60\u9700\u8981\u4f7f\u7528 GROUPING \u51fd\u6570\u5bf9\u6240\u6709\u7684 GROUP BY \u5217\u8fdb\u884c\u8ba1\u7b97\uff0c\u56e0\u4e3a\u5355\u5217\u7684\u8ba1\u7b97\u7ed3\u679c\u65e0\u6cd5\u6ee1\u8db3\u9700\u6c42\u3002"),(0,r.yg)("p",null,"GROUPING_ID \u51fd\u6570\u6bd4 GROUPING \u66f4\u5f3a\u5927\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u540c\u65f6\u5bf9\u591a\u5217\u8fdb\u884c\u68c0\u6d4b\u3002GROUPING_ID \u51fd\u6570\u63a5\u53d7\u591a\u4e2a\u5217\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\uff0c\u8be5\u6574\u6570\u901a\u8fc7\u4e8c\u8fdb\u5236\u4f4d\u8868\u793a\u591a\u4e2a\u5217\u7684\u805a\u5408\u72b6\u6001\u3002\u5f53\u4f7f\u7528\u8868\u6216\u7269\u5316\u89c6\u56fe\u4fdd\u5b58\u8ba1\u7b97\u7ed3\u679c\u65f6\uff0c\u4f7f\u7528 GROUPING \u8868\u793a\u805a\u5408\u7684\u4e0d\u540c\u5c42\u7ea7\u4f1a\u5360\u7528\u8f83\u591a\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u4f7f\u7528 GROUPING_ID \u66f4\u52a0\u5408\u9002\u3002"),(0,r.yg)("p",null,"\u4ee5 CUBE(a, b) \u4e3a\u4f8b\uff0c\u5176 GROUPING_ID \u53ef\u4ee5\u8868\u793a\u4e3a\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u805a\u5408\u5c42\u7ea7"),(0,r.yg)("th",{parentName:"tr",align:null},"Bit Vector"),(0,r.yg)("th",{parentName:"tr",align:null},"GROUPING_ID"),(0,r.yg)("th",{parentName:"tr",align:null},"GROUPING(a)"),(0,r.yg)("th",{parentName:"tr",align:null},"GROUPING(b)"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"a,b"),(0,r.yg)("td",{parentName:"tr",align:null},"0 0"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"a"),(0,r.yg)("td",{parentName:"tr",align:null},"0 1"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"0"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"b"),(0,r.yg)("td",{parentName:"tr",align:null},"1 0"),(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Grand Total"),(0,r.yg)("td",{parentName:"tr",align:null},"1 1"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"1")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. \u8bed\u6cd5\u548c\u793a\u4f8b")),(0,r.yg)("p",null,"\u793a\u4f8b SQL \u67e5\u8be2\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT  \n    year(d_date),  \n    i_category,  \n    SUM(ss_net_paid) AS total_sum,  \n    GROUPING(year(d_date)),  \n    GROUPING(i_category),  \n    GROUPING_ID(year(d_date), i_category)  \nFROM  \n    store_sales,  \n    date_dim d1,  \n    item,  \n    customer_address ca   \nWHERE  \n    d1.d_date_sk = ss_sold_date_sk  \n    AND i_item_sk = ss_item_sk  \n    AND ss_addr_sk = ca_address_sk  \n    AND i_category IN ('Books', 'Electronics')  \n    AND year(d_date) IN (1998, 1999)  \n    AND ca_state IN ('LA', 'AK')  \nGROUP BY CUBE(year(d_date), i_category);\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+--------------+-------------+------------+------------------------+----------------------+---------------------------------------+  \n| year(d_date) | i_category  | total_sum  | GROUPING(year(d_date)) | GROUPING(i_category) | GROUPING_ID(year(d_date), i_category) |  \n+--------------+-------------+------------+------------------------+----------------------+---------------------------------------+  \n| 1998         | Electronics | 2155952.32 | 0                      | 0                    | 0                                     |  \n| 1998         | Books       | 2213703.82 | 0                      | 0                    | 0                                     |  \n| 1999         | Electronics | 2296244.59 | 0                      | 0                    | 0                                     |  \n| 1999         | Books       | 2024473.87 | 0                      | 0                    | 0                                     |  \n| 1998         | NULL        | 4369656.14 | 0                      | 1                    | 1                                     |  \n| 1999         | NULL        | 4320718.46 | 0                      | 1                    | 1                                     |  \n| NULL         | Electronics | 4452196.91 | 1                      | 0                    | 2                                     |  \n| NULL         | Books       | 4238177.69 | 1                      | 0                    | 2                                     |  \n| NULL         | NULL        | 8690374.60 | 1                      | 1                    | 3                                     |  \n+--------------+-------------+------------+------------------------+----------------------+---------------------------------------+  \n9 rows in set (0.12 sec)\n")),(0,r.yg)("h3",{id:"grouping-sets"},"GROUPING SETS"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u4f7f\u7528\u573a\u666f")),(0,r.yg)("p",null,"\u5f53\u9700\u8981\u6709\u9009\u62e9\u5730\u6307\u5b9a\u8981\u521b\u5efa\u7684\u7ec4\u96c6\uff0c\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u4e2d\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING SETS")," \u8868\u8fbe\u5f0f\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u6cd5\uff0c\u5141\u8bb8\u7528\u6237\u8de8\u591a\u4e2a\u7ef4\u5ea6\u8fdb\u884c\u7cbe\u786e\u6307\u5b9a\uff0c\u800c\u65e0\u9700\u8ba1\u7b97\u6574\u4e2a CUBE\u3002"),(0,r.yg)("p",null,"\u7531\u4e8e CUBE \u67e5\u8be2\u901a\u5e38\u6d88\u8017\u8f83\u591a\u8d44\u6e90\uff0c\u5f53\u4ec5\u5bf9\u5c11\u6570\u51e0\u4e2a\u7ef4\u5ea6\u611f\u5174\u8da3\u65f6\uff0c\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING SETS")," \u53ef\u4ee5\u63d0\u5347\u67e5\u8be2\u7684\u6267\u884c\u6548\u7387\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. \u8bed\u6cd5\u548c\u793a\u4f8b")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING SETS")," \u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT \u2026 GROUP BY GROUPING SETS(grouping_column_reference_list)\n")),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u9700\u8981\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6bcf\u5e74\u5ea6\u6bcf\u7c7b\u4ea7\u54c1\u7684\u9500\u552e\u989d\u5c0f\u8ba1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6bcf\u5e74\u5ea6\u5728\u6bcf\u4e2a\u5dde\u7684\u9500\u552e\u989d\u5c0f\u8ba1")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6bcf\u5e74\u5ea6\u6bcf\u4e2a\u5dde\u6bcf\u4e2a\u4ea7\u54c1\u7684\u9500\u552e\u989d\u5c0f\u8ba1"))),(0,r.yg)("p",null,"\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING SETS")," \u6765\u6307\u5b9a\u8fd9\u4e9b\u7ef4\u5ea6\u5e76\u8fdb\u884c\u6c47\u603b\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT  \n    YEAR(d_date),  \n    i_category,  \n    ca_state,  \n    SUM(ss_net_paid) AS total_sum  \nFROM  \n    store_sales,  \n    date_dim d1,  \n    item,  \n    customer_address ca   \nWHERE  \n    d1.d_date_sk = ss_sold_date_sk  \n    AND i_item_sk = ss_item_sk  \n    AND ss_addr_sk = ca_address_sk  \n    AND i_category IN ('Books', 'Electronics')  \n    AND YEAR(d_date) IN (1998, 1999)  \n    AND ca_state IN ('LA', 'AK')  \nGROUP BY GROUPING SETS(  \n    (YEAR(d_date), i_category),   \n    (YEAR(d_date), ca_state),   \n    (YEAR(d_date), ca_state, i_category)  \n)  \nORDER BY YEAR(d_date), i_category, ca_state;\n")),(0,r.yg)("p",null,"\u67e5\u8be2\u7ed3\u679c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"+--------------+-------------+----------+------------+  \n| YEAR(d_date) | i_category  | ca_state | total_sum  |  \n+--------------+-------------+----------+------------+  \n| 1998         | NULL        | AK       | 1402539.19 |  \n| 1998         | NULL        | LA       | 2967116.95 |  \n| 1998         | Books       | NULL     | 2213703.82 |  \n| 1998         | Books       | AK       |  719911.29 |  \n| 1998         | Books       | LA       | 1493792.53 |  \n| 1998         | Electronics | NULL     | 2155952.32 |  \n| 1998         | Electronics | AK       |  682627.90 |  \n| 1998         | Electronics | LA       | 1473324.42 |  \n| 1999         | NULL        | AK       | 1272659.14 |  \n| 1999         | NULL        | LA       | 3048059.32 |  \n| 1999         | Books       | NULL     | 2024473.87 |  \n| 1999         | Books       | AK       |  590880.07 |  \n| 1999         | Books       | LA       | 1433593.80 |  \n| 1999         | Electronics | NULL     | 2296244.59 |  \n| 1999         | Electronics | AK       |  681779.07 |  \n| 1999         | Electronics | LA       | 1614465.52 |  \n+--------------+-------------+----------+------------+  \n16 rows in set (0.11 sec)\n")),(0,r.yg)("p",null,"\u4e0a\u9762\u7684\u5199\u6cd5\u7b49\u4ef7\u4e8e\u4f7f\u7528 CUBE\uff0c\u4f46\u6307\u5b9a\u4e86\u5177\u4f53\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"grouping_id"),"\uff0c\u4ece\u800c\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT  \n    SUM(ss_net_paid) AS total_sum,  \n    YEAR(d_date),  \n    i_category,  \n    ca_state  \nFROM  \n    store_sales,  \n    date_dim d1,  \n    item,  \n    customer_address ca   \nWHERE  \n    d1.d_date_sk = ss_sold_date_sk  \n    AND i_item_sk = ss_item_sk  \n    AND ss_addr_sk = ca_address_sk  \n    AND i_category IN ('Books', 'Electronics')  \n    AND YEAR(d_date) IN (1998, 1999)  \n    AND ca_state IN ('LA', 'AK')  \nGROUP BY CUBE(YEAR(d_date), ca_state, i_category)  \nHAVING grouping_id(YEAR(d_date), ca_state, i_category) = 0  \n    OR grouping_id(YEAR(d_date), ca_state, i_category) = 2   \n    OR grouping_id(YEAR(d_date), ca_state, i_category) = 1;\n")),(0,r.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"CUBE")," \u4f1a\u8ba1\u7b97\u6240\u6709\u53ef\u80fd\u7684\u805a\u5408\u5c42\u7ea7\uff08\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u662f\u516b\u79cd\uff09\uff0c\u4f46\u5b9e\u9645\u4e0a\u4f60\u53ef\u80fd\u53ea\u5bf9\u5176\u4e2d\u7684\u51e0\u79cd\u611f\u5174\u8da3\u3002")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. \u8bed\u4e49\u7b49\u4ef7")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GROUPING SETS \u4e0e GROUP BY UNION ALL")),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING SETS")," \u8bed\u53e5\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n")),(0,r.yg)("p",{parentName:"li"},"  \u5176\u67e5\u8be2\u7ed3\u679c\u7b49\u4ef7\u4e8e\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"UNION ALL")," \u8fde\u63a5\u7684\u591a\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY")," \u67e5\u8be2\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT k1, k2, SUM(k3) FROM t GROUP BY k1, k2  \nUNION ALL  \nSELECT k1, NULL, SUM(k3) FROM t GROUP BY k1  \nUNION ALL  \nSELECT NULL, k2, SUM(k3) FROM t GROUP BY k2  \nUNION ALL  \nSELECT NULL, NULL, SUM(k3) FROM t;\n")),(0,r.yg)("p",{parentName:"li"},"  \u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"UNION ALL")," \u8fde\u63a5\u7684\u67e5\u8be2\u8f83\u957f\uff0c\u540c\u65f6\u9700\u8981\u591a\u6b21\u626b\u63cf\u57fa\u8868\uff0c\u56e0\u6b64\u5728\u4e66\u5199\u548c\u6267\u884c\u4e0a\u7684\u6548\u7387\u90fd\u8f83\u4f4e\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GROUPING SETS \u4e0e ROLLUP")),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"ROLLUP")," \u662f\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING SETS")," \u7684\u6269\u5c55\u3002\u4f8b\u5982\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT a, b, c, SUM(d) FROM tab1 GROUP BY ROLLUP(a, b, c);\n")),(0,r.yg)("p",{parentName:"li"},"  \u8fd9\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"ROLLUP")," \u7b49\u4ef7\u4e8e\u4e0b\u9762\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING SETS"),"\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GROUPING SETS (  \n    (a, b, c),  \n    (a, b),  \n    (a),  \n    ()  \n);\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"GROUPING SETS \u4e0e CUBE")),(0,r.yg)("p",{parentName:"li"},"  ",(0,r.yg)("inlineCode",{parentName:"p"},"CUBE(a, b, c)")," \u7b49\u4ef7\u4e8e\u4e0b\u9762\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUPING SETS"),"\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GROUPING SETS (  \n    (a, b, c),  \n    (a, b),  \n    (a, c),  \n    (a),  \n    (b, c),  \n    (b),  \n    (c),  \n    ()  \n);\n")))),(0,r.yg)("h2",{id:"\u8bbe\u8ba1\u6587\u6863"},"\u8bbe\u8ba1\u6587\u6863"),(0,r.yg)("p",null,"\u8be6\u7ec6\u5185\u5bb9\uff0c\u53ef\u524d\u5f80 Oracle \u5b98\u7f51\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/23/dwhsg/sql-aggregation-data-warehouses.html#GUID-C70DDA78-57D4-480A-AFDD-33EDFC1C15AE"}," SQL for Aggregation in Data Warehouses")))}N.isMDXComponent=!0}}]);