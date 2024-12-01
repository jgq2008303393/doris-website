"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[376796],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>m});var l=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,l,r=function(e,n){if(null==e)return{};var a,l,r={},t=Object.keys(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)a=t[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),s=function(e){var n=l.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=s(e.components);return l.createElement(d.Provider,{value:n},e.children)},c="mdxType",N={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),p=r,m=c["".concat(d,".").concat(p)]||c[p]||N[p]||t;return a?l.createElement(m,i(i({ref:n},u),{},{components:a})):l.createElement(m,i({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,i=new Array(t);i[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<t;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},491229:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>t,metadata:()=>o,toc:()=>s});var l=a(58168),r=(a(296540),a(15680));const t={title:"\u81ea\u589e\u5217",language:"zh-CN"},i=void 0,o={unversionedId:"table-design/auto-increment",id:"version-3.0/table-design/auto-increment",title:"\u81ea\u589e\u5217",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/table-design/auto-increment.md",sourceDirName:"table-design",slug:"/table-design/auto-increment",permalink:"/zh-CN/docs/3.0/table-design/auto-increment",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u81ea\u589e\u5217",language:"zh-CN"},sidebar:"docs",previous:{title:"Schema \u53d8\u66f4",permalink:"/zh-CN/docs/3.0/table-design/schema-change"},next:{title:"\u6570\u636e\u5e93\u5efa\u8868\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/3.0/table-design/best-practice"}},d={},s=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u552f\u4e00\u6027",id:"\u552f\u4e00\u6027",level:3},{value:"\u805a\u96c6\u6027",id:"\u805a\u96c6\u6027",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u7ea6\u675f\u548c\u9650\u5236",id:"\u7ea6\u675f\u548c\u9650\u5236",level:3},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u666e\u901a\u5bfc\u5165",id:"\u666e\u901a\u5bfc\u5165",level:3},{value:"\u90e8\u5206\u5217\u66f4\u65b0",id:"\u90e8\u5206\u5217\u66f4\u65b0",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5b57\u5178\u7f16\u7801",id:"\u5b57\u5178\u7f16\u7801",level:3},{value:"\u9ad8\u6548\u5206\u9875",id:"\u9ad8\u6548\u5206\u9875",level:3}],u={toc:s},c="wrapper";function N(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,l.A)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u5728\u5bfc\u5165\u6570\u636e\u65f6\uff0cDoris \u4f1a\u4e3a\u5728\u81ea\u589e\u5217\u4e0a\u6ca1\u6709\u6307\u5b9a\u503c\u7684\u6570\u636e\u884c\u5206\u914d\u4e00\u4e2a\u8868\u5185\u552f\u4e00\u7684\u503c\u3002"),(0,r.yg)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.yg)("p",null,"\u5bf9\u4e8e\u542b\u6709\u81ea\u589e\u5217\u7684\u8868\uff0c\u7528\u6237\u5728\u5728\u5bfc\u5165\u6570\u636e\u65f6\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u5bfc\u5165\u7684\u76ee\u6807\u5217\u4e2d\u4e0d\u5305\u542b\u81ea\u589e\u5217\uff0c\u5219\u81ea\u589e\u5217\u5c06\u4f1a\u88ab Doris \u81ea\u52a8\u751f\u6210\u7684\u503c\u586b\u5145\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u5bfc\u5165\u7684\u76ee\u6807\u5217\u4e2d\u5305\u542b\u81ea\u589e\u5217\uff0c\u5219\u5bfc\u5165\u6570\u636e\u4e2d\u8be5\u5217\u4e2d\u7684 null \u503c\u5c06\u4f1a\u88ab Doris \u81ea\u52a8\u751f\u6210\u7684\u503c\u66ff\u6362\uff0c\u975e null \u503c\u5219\u4fdd\u6301\u4e0d\u53d8\u3002\u9700\u8981\u6ce8\u610f",(0,r.yg)("strong",{parentName:"li"},"\u975e null \u503c\u4f1a\u7834\u574f\u81ea\u589e\u5217\u503c\u7684\u552f\u4e00\u6027"),"\u3002")),(0,r.yg)("h3",{id:"\u552f\u4e00\u6027"},"\u552f\u4e00\u6027"),(0,r.yg)("p",null,"Doris \u4fdd\u8bc1\u4e86\u81ea\u589e\u5217\u4e0a\u751f\u6210\u7684\u503c\u5177\u6709",(0,r.yg)("strong",{parentName:"p"},"\u8868\u5185\u552f\u4e00\u6027"),"\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u81ea\u589e\u5217\u7684\u552f\u4e00\u6027\u4ec5\u4fdd\u8bc1\u7531 Doris \u81ea\u52a8\u586b\u5145\u7684\u503c\u5177\u6709\u552f\u4e00\u6027\uff0c\u800c\u4e0d\u8003\u8651\u7531\u7528\u6237\u63d0\u4f9b\u7684\u503c"),"\uff0c\u5982\u679c\u7528\u6237\u540c\u65f6\u5bf9\u8be5\u8868\u901a\u8fc7\u663e\u793a\u6307\u5b9a\u81ea\u589e\u5217\u7684\u65b9\u5f0f\u63d2\u5165\u4e86\u7528\u6237\u63d0\u4f9b\u7684\u503c\uff0c\u5219\u4e0d\u80fd\u4fdd\u8bc1\u8fd9\u4e2a\u552f\u4e00\u6027\u3002"),(0,r.yg)("h3",{id:"\u805a\u96c6\u6027"},"\u805a\u96c6\u6027"),(0,r.yg)("p",null,"Doris \u4fdd\u8bc1\u81ea\u589e\u5217\u4e0a\u81ea\u52a8\u751f\u6210\u7684\u503c\u662f\u7a20\u5bc6\u7684\uff0c\u4f46",(0,r.yg)("strong",{parentName:"p"},"\u4e0d\u80fd\u4fdd\u8bc1"),"\u5728\u4e00\u6b21\u5bfc\u5165\u4e2d\u81ea\u52a8\u586b\u5145\u7684\u81ea\u589e\u5217\u7684\u503c\u662f\u5b8c\u5168\u8fde\u7eed\u7684\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e00\u6b21\u5bfc\u5165\u4e2d\u81ea\u589e\u5217\u81ea\u52a8\u586b\u5145\u7684\u503c\u5177\u6709\u4e00\u5b9a\u7684\u8df3\u8dc3\u6027\u7684\u73b0\u8c61\u3002\u8fd9\u662f\u56e0\u4e3a\u51fa\u4e8e\u6027\u80fd\u8003\u8651\uff0c\u6bcf\u4e2a BE \u4e0a\u90fd\u4f1a\u7f13\u5b58\u4e00\u90e8\u5206\u9884\u5148\u5206\u914d\u7684\u81ea\u589e\u5217\u7684\u503c\uff0c\u6bcf\u4e2a BE \u4e0a\u7f13\u5b58\u7684\u503c\u4e92\u4e0d\u76f8\u4ea4\u3002\u6b64\u5916\uff0c\u7531\u4e8e\u7f13\u5b58\u7684\u5b58\u5728\uff0cDoris \u4e0d\u80fd\u4fdd\u8bc1\u5728\u7269\u7406\u65f6\u95f4\u4e0a\u540e\u4e00\u6b21\u5bfc\u5165\u7684\u6570\u636e\u5728\u81ea\u589e\u5217\u4e0a\u81ea\u52a8\u751f\u6210\u7684\u503c\u6bd4\u524d\u4e00\u6b21\u66f4\u5927\u3002\u56e0\u6b64\uff0c\u4e0d\u80fd\u6839\u636e\u81ea\u589e\u5217\u5206\u914d\u51fa\u7684\u503c\u7684\u5927\u5c0f\u6765\u5224\u65ad\u5bfc\u5165\u65f6\u95f4\u4e0a\u7684\u5148\u540e\u987a\u5e8f\u3002"),(0,r.yg)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.yg)("p",null,"\u8981\u4f7f\u7528\u81ea\u589e\u5217\uff0c\u9700\u8981\u5728\u5efa\u8868",(0,r.yg)("a",{parentName:"p",href:"../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE-TABLE"),"\u65f6\u4e3a\u5bf9\u5e94\u7684\u5217\u6dfb\u52a0",(0,r.yg)("inlineCode",{parentName:"p"},"AUTO_INCREMENT"),"\u5c5e\u6027\u3002\u82e5\u8981\u624b\u52a8\u6307\u5b9a\u81ea\u589e\u5217\u8d77\u59cb\u503c\uff0c\u53ef\u4ee5\u901a\u8fc7\u5efa\u8868\u65f6",(0,r.yg)("inlineCode",{parentName:"p"},"AUTO_INCREMENT(start_value)"),"\u8bed\u53e5\u6307\u5b9a\uff0c\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u8d77\u59cb\u503c\u4e3a 1\u3002"),(0,r.yg)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a Dupliciate \u6a21\u578b\u8868\uff0c\u5176\u4e2d\u4e00\u4e2a key \u5217\u662f\u81ea\u589e\u5217"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a Dupliciate \u6a21\u578b\u8868\uff0c\u5176\u4e2d\u4e00\u4e2a key \u5217\u662f\u81ea\u589e\u5217\uff0c\u5e76\u8bbe\u7f6e\u8d77\u59cb\u503c\u4e3a 100"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT(100),\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a Dupliciate \u6a21\u578b\u8868\uff0c\u5176\u4e2d\u4e00\u4e2a value \u5217\u662f\u81ea\u589e\u5217"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `uid` BIGINT NOT NULL,\n      `name` BIGINT NOT NULL,\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`uid`, `name`)\nDISTRIBUTED BY HASH(`uid`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a Unique \u6a21\u578b\u8868\uff0c\u5176\u4e2d\u4e00\u4e2a key \u5217\u662f\u81ea\u589e\u5217"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `name` varchar(65533) NOT NULL,\n      `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a Unique \u6a21\u578b\u8868\uff0c\u5176\u4e2d\u4e00\u4e2a value \u5217\u662f\u81ea\u589e\u5217"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n      `text` varchar(65533) NOT NULL,\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n) ENGINE=OLAP\nUNIQUE KEY(`text`)\nDISTRIBUTED BY HASH(`text`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')))),(0,r.yg)("h3",{id:"\u7ea6\u675f\u548c\u9650\u5236"},"\u7ea6\u675f\u548c\u9650\u5236"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4ec5 Duplicate \u6a21\u578b\u8868\u548c Unique \u6a21\u578b\u8868\u53ef\u4ee5\u5305\u542b\u81ea\u589e\u5217\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4e00\u5f20\u8868\u6700\u591a\u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u81ea\u589e\u5217\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u81ea\u589e\u5217\u7684\u7c7b\u578b\u5fc5\u987b\u662f BIGINT \u7c7b\u578b\uff0c\u4e14\u5fc5\u987b\u4e3a NOT NULL\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u81ea\u589e\u5217\u624b\u52a8\u6307\u5b9a\u7684\u8d77\u59cb\u503c\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e 0\u3002")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.yg)("h3",{id:"\u666e\u901a\u5bfc\u5165"},"\u666e\u901a\u5bfc\u5165"),(0,r.yg)("p",null,"\u4ee5\u4e0b\u8868\u4e3a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`tbl` (\n    `id` BIGINT NOT NULL AUTO_INCREMENT,\n    `name` varchar(65533) NOT NULL,\n    `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,r.yg)("p",null,"\u4f7f\u7528 insert into \u8bed\u53e5\u5bfc\u5165\u5e76\u4e14\u4e0d\u6307\u5b9a\u81ea\u589e\u5217",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"\u65f6\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"\u5217\u4f1a\u88ab\u81ea\u52a8\u586b\u5145\u751f\u6210\u7684\u503c\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl(name, value) values(\"Bob\", 10), (\"Alice\", 20), (\"Jack\", 30);\nQuery OK, 3 rows affected (0.09 sec)\n{'label':'label_183babcb84ad4023_a2d6266ab73fb5aa', 'status':'VISIBLE', 'txnId':'7'}\n\nmysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.05 sec)\n")),(0,r.yg)("p",null,"\u7c7b\u4f3c\u5730\uff0c\u4f7f\u7528 stream load \u5bfc\u5165\u6587\u4ef6 test.csv \u4e14\u4e0d\u6307\u5b9a\u81ea\u589e\u5217",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"\u5217\u4f1a\u88ab\u81ea\u52a8\u586b\u5145\u751f\u6210\u7684\u503c\u3002"),(0,r.yg)("p",null,"test.csv:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Tom,40\nJohn,50\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'curl --location-trusted -u user:passwd -H "columns:name,value" -H "column_separator:," -T ./test.csv http://{host}:{port}/api/{db}/tbl/_stream_load\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n|    4 | Tom   |    40 |\n|    5 | John  |    50 |\n+------+-------+-------+\n5 rows in set (0.04 sec)\n")),(0,r.yg)("p",null,"\u4f7f\u7528 insert into \u5bfc\u5165\u65f6\u6307\u5b9a\u81ea\u589e\u5217",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"\uff0c\u5219\u8be5\u5217\u6570\u636e\u4e2d\u7684 null \u503c\u4f1a\u88ab\u751f\u6210\u7684\u503c\u66ff\u6362\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> insert into tbl(id, name, value) values(null, \"Doris\", 60), (null, \"Nereids\", 70);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_9cb0c01db1a0402c_a2b8b44c11ce4703', 'status':'VISIBLE', 'txnId':'10'}\n\nmysql> select * from tbl order by id;\n+------+---------+-------+\n| id   | name    | value |\n+------+---------+-------+\n|    1 | Bob     |    10 |\n|    2 | Alice   |    20 |\n|    3 | Jack    |    30 |\n|    4 | Tom     |    40 |\n|    5 | John    |    50 |\n|    6 | Doris   |    60 |\n|    7 | Nereids |    70 |\n+------+---------+-------+\n7 rows in set (0.04 sec)\n")),(0,r.yg)("h3",{id:"\u90e8\u5206\u5217\u66f4\u65b0"},"\u90e8\u5206\u5217\u66f4\u65b0"),(0,r.yg)("p",null,"\u5728\u5bf9\u4e00\u5f20\u5305\u542b\u81ea\u589e\u5217\u7684 merge-on-write Unique \u8868\u8fdb\u884c\u90e8\u5206\u5217\u66f4\u65b0\u65f6\uff0c\u5982\u679c\u81ea\u589e\u5217\u662f key \u5217\uff0c\u7531\u4e8e\u90e8\u5206\u5217\u66f4\u65b0\u65f6\u7528\u6237\u5fc5\u987b\u663e\u793a\u6307\u5b9a key \u5217\uff0c\u90e8\u5206\u5217\u66f4\u65b0\u7684\u76ee\u6807\u5217\u5fc5\u987b\u5305\u542b\u81ea\u589e\u5217\u3002\u6b64\u65f6\u7684\u5bfc\u5165\u884c\u4e3a\u548c\u666e\u901a\u7684\u90e8\u5206\u5217\u66f4\u65b0\u76f8\u540c\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE `demo`.`tbl2` (\n    ->     `id` BIGINT NOT NULL AUTO_INCREMENT,\n    ->     `name` varchar(65533) NOT NULL,\n    ->     `value` int(11) NOT NULL DEFAULT \"0\"\n    -> ) ENGINE=OLAP\n    -> UNIQUE KEY(`id`)\n    -> DISTRIBUTED BY HASH(`id`) BUCKETS 10\n    -> PROPERTIES (\n    -> \"replication_allocation\" = \"tag.location.default: 3\",\n    -> \"enable_unique_key_merge_on_write\" = \"true\"\n    -> );\nQuery OK, 0 rows affected (0.03 sec)\n\nmysql> insert into tbl2(id, name, value) values(1, \"Bob\", 10), (2, \"Alice\", 20), (3, \"Jack\", 30);\nQuery OK, 3 rows affected (0.14 sec)\n{'label':'label_5538549c866240b6_bce75ef323ac22a0', 'status':'VISIBLE', 'txnId':'1004'}\n\nmysql> select * from tbl2 order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.08 sec)\n\nmysql> set enable_unique_key_partial_update=true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> set enable_insert_strict=false;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into tbl2(id, name) values(1, \"modified\"), (4, \"added\");\nQuery OK, 2 rows affected (0.06 sec)\n{'label':'label_3e68324cfd87457d_a6166cc0a878cfdc', 'status':'VISIBLE', 'txnId':'1005'}\n\nmysql> select * from tbl2 order by id;\n+------+----------+-------+\n| id   | name     | value |\n+------+----------+-------+\n|    1 | modified |    10 |\n|    2 | Alice    |    20 |\n|    3 | Jack     |    30 |\n|    4 | added    |     0 |\n+------+----------+-------+\n4 rows in set (0.04 sec)\n")),(0,r.yg)("p",null,"\u5f53\u81ea\u589e\u5217\u662f\u975e key \u5217\u65f6\uff0c\u5982\u679c\u7528\u6237\u6ca1\u6709\u6307\u5b9a\u81ea\u589e\u5217\u7684\u503c\uff0c\u5176\u503c\u4f1a\u4ece\u8868\u4e2d\u539f\u6709\u7684\u6570\u636e\u884c\u4e2d\u8fdb\u884c\u8865\u9f50\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u4e86\u81ea\u589e\u5217\uff0c\u5219\u8be5\u5217\u6570\u636e\u4e2d\u7684 null \u503c\u4f1a\u88ab\u66ff\u6362\u4e3a\u751f\u6210\u51fa\u7684\u503c\uff0c\u975e null \u503c\u5219\u4fdd\u6301\u4e0d\u53d8\uff0c\u7136\u540e\u4ee5\u90e8\u5206\u5217\u66f4\u65b0\u7684\u8bed\u4e49\u63d2\u5165\u8be5\u8868\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE TABLE `demo`.`tbl3` (\n    ->     `id` BIGINT NOT NULL,\n    ->     `name` varchar(100) NOT NULL,\n    ->     `score` BIGINT NOT NULL,\n    ->     `aid` BIGINT NOT NULL AUTO_INCREMENT\n    -> ) ENGINE=OLAP\n    -> UNIQUE KEY(`id`)\n    -> DISTRIBUTED BY HASH(`id`) BUCKETS 1\n    -> PROPERTIES (\n    -> \"replication_allocation\" = \"tag.location.default: 3\",\n    -> \"enable_unique_key_merge_on_write\" = \"true\"\n    -> );\nQuery OK, 0 rows affected (0.16 sec)\n\nmysql> insert into tbl3(id, name, score) values(1, \"Doris\", 100), (2, \"Nereids\", 200), (3, \"Bob\", 300);\nQuery OK, 3 rows affected (0.28 sec)\n{'label':'label_c52b2c246e244dda_9b91ee5e27a31f9b', 'status':'VISIBLE', 'txnId':'2003'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   100 |    0 |\n|    2 | Nereids |   200 |    1 |\n|    3 | Bob     |   300 |    2 |\n+------+---------+-------+------+\n3 rows in set (0.13 sec)\n\nmysql> set enable_unique_key_partial_update=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> set enable_insert_strict=false;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into tbl3(id, score) values(1, 999), (2, 888);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_dfec927d7a4343ca_9f9ade581391de97', 'status':'VISIBLE', 'txnId':'2004'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   999 |    0 |\n|    2 | Nereids |   888 |    1 |\n|    3 | Bob     |   300 |    2 |\n+------+---------+-------+------+\n3 rows in set (0.06 sec)\n\nmysql> insert into tbl3(id, aid) values(1, 1000), (3, 500);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_b26012959f714f60_abe23c87a06aa0bf', 'status':'VISIBLE', 'txnId':'2005'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   999 | 1000 |\n|    2 | Nereids |   888 |    1 |\n|    3 | Bob     |   300 |  500 |\n+------+---------+-------+------+\n3 rows in set (0.06 sec)\n")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,r.yg)("h3",{id:"\u5b57\u5178\u7f16\u7801"},"\u5b57\u5178\u7f16\u7801"),(0,r.yg)("p",null,"\u5728\u7528\u6237\u753b\u50cf\u573a\u666f\u4e2d\u4f7f\u7528 bitmap \u505a\u4eba\u7fa4\u5206\u6790\u65f6\u9700\u8981\u6784\u5efa\u7528\u6237\u5b57\u5178\uff0c\u6bcf\u4e2a\u7528\u6237\u5bf9\u5e94\u4e00\u4e2a\u552f\u4e00\u7684\u6574\u6570\u5b57\u5178\u503c\uff0c\u805a\u96c6\u7684\u5b57\u5178\u503c\u53ef\u4ee5\u83b7\u5f97\u66f4\u597d\u7684 bitmap \u6027\u80fd\u3002"),(0,r.yg)("p",null,"\u4ee5\u79bb\u7ebf uv\uff0cpv \u5206\u6790\u573a\u666f\u4e3a\u4f8b\uff0c\u5047\u8bbe\u6709\u5982\u4e0b\u7528\u6237\u884c\u4e3a\u8868\u5b58\u653e\u660e\u7ec6\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dwd_dup_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `dim1` varchar(50) NOT NULL,\n    `dim2` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim4` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `visit_time` DATE NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,r.yg)("p",null,"\u5229\u7528\u81ea\u589e\u5217\u521b\u5efa\u5982\u4e0b\u5b57\u5178\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dictionary_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `aid` BIGINT NOT NULL AUTO_INCREMENT\n) ENGINE=OLAP\nUNIQUE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n')),(0,r.yg)("p",null,"\u5c06\u5b58\u91cf\u6570\u636e\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"user_id"),"\u5bfc\u5165\u5b57\u5178\u8868\uff0c\u5efa\u7acb",(0,r.yg)("inlineCode",{parentName:"p"},"user_id"),"\u5230\u6574\u6570\u503c\u7684\u7f16\u7801\u6620\u5c04"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dictionary_tbl(user_id)\nselect user_id from dwd_dup_tbl group by user_id;\n")),(0,r.yg)("p",null,"\u6216\u8005\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u4ec5\u5c06\u589e\u91cf\u6570\u636e\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"user_id"),"\u5bfc\u5165\u5230\u5b57\u5178\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dictionary_tbl(user_id)\nselect dwd_dup_tbl.user_id from dwd_dup_tbl left join dictionary_tbl\non dwd_dup_tbl.user_id = dictionary_tbl.user_id where dwd_dup_tbl.visit_time > '2023-12-10' and dictionary_tbl.user_id is NULL;\n")),(0,r.yg)("p",null,"\u5b9e\u9645\u573a\u666f\u4e2d\u4e5f\u53ef\u4ee5\u4f7f\u7528 flink connector \u628a\u6570\u636e\u5199\u5165\u5230 doris\u3002"),(0,r.yg)("p",null,"\u5047\u8bbe",(0,r.yg)("inlineCode",{parentName:"p"},"dim1"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dim3"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"dim5"),"\u662f\u6211\u4eec\u5173\u5fc3\u7684\u7edf\u8ba1\u7ef4\u5ea6\uff0c\u5efa\u7acb\u5982\u4e0b\u805a\u5408\u8868\u5b58\u653e\u805a\u5408\u7ed3\u679c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`dws_agg_tbl` (\n    `dim1` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `user_id_bitmap` BITMAP BITMAP_UNION NOT NULL,\n    `pv` BIGINT SUM NOT NULL \n) ENGINE=OLAP\nAGGREGATE KEY(`dim1`,`dim3`,`dim5`)\nDISTRIBUTED BY HASH(`dim1`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,r.yg)("p",null,"\u5c06\u6570\u636e\u805a\u5408\u8fd0\u7b97\u540e\u5b58\u653e\u81f3\u805a\u5408\u7ed3\u679c\u8868"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"insert into dws_agg_tbl\nselect dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5, BITMAP_UNION(TO_BITMAP(dictionary_tbl.aid)), COUNT(1)\nfrom dwd_dup_tbl INNER JOIN dictionary_tbl on dwd_dup_tbl.user_id = dictionary_tbl.user_id\ngroup by dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5;\n")),(0,r.yg)("p",null,"\u7528\u5982\u4e0b\u8bed\u53e5\u8fdb\u884c uv, pv \u67e5\u8be2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select dim1, dim3, dim5, bitmap_count(user_id_bitmap) as uv, pv from dws_agg_tbl;\n")),(0,r.yg)("h3",{id:"\u9ad8\u6548\u5206\u9875"},"\u9ad8\u6548\u5206\u9875"),(0,r.yg)("p",null,"\u5728\u9875\u9762\u5c55\u793a\u6570\u636e\u65f6\uff0c\u5f80\u5f80\u9700\u8981\u505a\u5206\u9875\u5c55\u793a\u3002\u4f20\u7edf\u7684\u5206\u9875\u901a\u5e38\u4f7f\u7528 SQL \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"limit"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"offset")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"order by")," \u8fdb\u884c\u67e5\u8be2\u3002\u4f8b\u5982\u6709\u5982\u4e0b\u4e1a\u52a1\u8868\u9700\u8981\u8fdb\u884c\u5c55\u793a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`records_tbl` (\n    `user_id` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT ""\n) DUPLICATE KEY (`user_id`, `name`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,r.yg)("p",null,"\u5047\u8bbe\u5728\u5206\u9875\u5c55\u793a\u4e2d\uff0c\u6bcf\u9875\u5c55\u793a 100 \u6761\u6570\u636e\u3002\u90a3\u4e48\u83b7\u53d6\u7b2c 1 \u9875\u7684\u6570\u636e\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b sql \u8fdb\u884c\u67e5\u8be2\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl order by user_id, name limit 100;\n")),(0,r.yg)("p",null,"\u83b7\u53d6\u7b2c 2 \u9875\u7684\u6570\u636e\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b sql \u8fdb\u884c\u67e5\u8be2\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl order by user_id, name limit 100 offset 100;\n")),(0,r.yg)("p",null,"\u7136\u800c\uff0c\u5f53\u8fdb\u884c\u6df1\u5206\u9875\u67e5\u8be2\u65f6 (offset \u5f88\u5927\u65f6)\uff0c\u5373\u4f7f\u5b9e\u9645\u9700\u8981\u9700\u8981\u7684\u6570\u636e\u884c\u5f88\u5c11\uff0c\u8be5\u65b9\u6cd5\u4f9d\u7136\u4f1a\u5c06\u5168\u90e8\u6570\u636e\u8bfb\u53d6\u5230\u5185\u5b58\u4e2d\u8fdb\u884c\u5168\u91cf\u6392\u5e8f\u540e\u518d\u8fdb\u884c\u540e\u7eed\u5904\u7406\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6bd4\u8f83\u4f4e\u6548\u3002\u53ef\u4ee5\u901a\u8fc7\u81ea\u589e\u5217\u7ed9\u6bcf\u884c\u6570\u636e\u4e00\u4e2a\u552f\u4e00\u503c\uff0c\u5728\u67e5\u8be2\u65f6\u5c31\u53ef\u4ee5\u901a\u8fc7\u8bb0\u5f55\u4e4b\u524d\u9875\u9762",(0,r.yg)("inlineCode",{parentName:"p"},"unique_value"),"\u5217\u7684\u6700\u5927\u503c",(0,r.yg)("inlineCode",{parentName:"p"},"max_value"),"\uff0c\u7136\u540e\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"where unique_value > max_value limit rows_per_page")," \u7684\u65b9\u5f0f\u901a\u8fc7\u63d0\u4e0b\u63a8\u8c13\u8bcd\u63d0\u524d\u8fc7\u6ee4\u5927\u91cf\u6570\u636e\uff0c\u4ece\u800c\u66f4\u9ad8\u6548\u5730\u5b9e\u73b0\u5206\u9875\u3002"),(0,r.yg)("p",null,"\u4ecd\u7136\u4ee5\u4e0a\u8ff0\u4e1a\u52a1\u8868\u4e3a\u4f8b\uff0c\u901a\u8fc7\u5728\u8868\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u81ea\u589e\u5217\u4ece\u800c\u8d4b\u4e88\u6bcf\u4e00\u884c\u4e00\u4e2a\u552f\u4e00\u6807\u8bc6\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `demo`.`records_tbl2` (\n    `user_id` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT "",\n    `unique_value` BIGINT NOT NULL AUTO_INCREMENT\n) DUPLICATE KEY (`user_id`, `name`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,r.yg)("p",null,"\u5728\u5206\u9875\u5c55\u793a\u4e2d\uff0c\u6bcf\u9875\u5c55\u793a 100 \u6761\u6570\u636e\uff0c\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u83b7\u53d6\u7b2c\u4e00\u9875\u7684\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl2 order by unique_value limit 100;\n")),(0,r.yg)("p",null,"\u901a\u8fc7\u7a0b\u5e8f\u8bb0\u5f55\u4e0b\u8fd4\u56de\u7ed3\u679c\u4e2d",(0,r.yg)("inlineCode",{parentName:"p"},"unique_value"),"\u4e2d\u7684\u6700\u5927\u503c\uff0c\u5047\u8bbe\u4e3a 99\uff0c\u5219\u53ef\u7528\u5982\u4e0b\u65b9\u5f0f\u67e5\u8be2\u7b2c 2 \u9875\u7684\u6570\u636e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select * from records_tbl2 where unique_value > 99 order by unique_value limit 100;\n")),(0,r.yg)("p",null,"\u5982\u679c\u8981\u76f4\u63a5\u67e5\u8be2\u4e00\u4e2a\u9760\u540e\u9875\u9762\u7684\u5185\u5bb9\uff0c\u6b64\u65f6\u4e0d\u65b9\u4fbf\u76f4\u63a5\u83b7\u53d6\u4e4b\u524d\u9875\u9762\u6570\u636e\u4e2d",(0,r.yg)("inlineCode",{parentName:"p"},"unique_value"),"\u7684\u6700\u5927\u503c\u65f6\uff0c\u4f8b\u5982\u8981\u76f4\u63a5\u83b7\u53d6\u7b2c 101 \u9875\u7684\u5185\u5bb9\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u8fdb\u884c\u67e5\u8be2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select user_id, name, address, city, nation, region, phone, mktsegment\nfrom records_tbl2, (select unique_value as max_value from records_tbl2 order by unique_value limit 1 offset 9999) as previous_data\nwhere records_tbl2.unique_value > previous_data.max_value\norder by unique_value limit 100;\n")))}N.isMDXComponent=!0}}]);