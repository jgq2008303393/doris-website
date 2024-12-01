"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[73182],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>m});var r=n(296540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),p=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(n),u=t,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||l;return n?r.createElement(m,i(i({ref:a},d),{},{components:n})):r.createElement(m,i({ref:a},d))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:t,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},162186:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),t=(n(296540),n(15680));const l={title:"\u5feb\u901f\u4f53\u9a8c",language:"zh-CN"},i=void 0,o={unversionedId:"gettingStarted/quick-start",id:"version-3.0/gettingStarted/quick-start",title:"\u5feb\u901f\u4f53\u9a8c",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/gettingStarted/quick-start.md",sourceDirName:"gettingStarted",slug:"/gettingStarted/quick-start",permalink:"/zh-CN/docs/3.0/gettingStarted/quick-start",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u5feb\u901f\u4f53\u9a8c",language:"zh-CN"},sidebar:"get-starting",previous:{title:"Apache Doris \u7b80\u4ecb",permalink:"/zh-CN/docs/3.0/gettingStarted/what-is-apache-doris"},next:{title:"\u4f7f\u7528 Doris \u548c Hudi",permalink:"/zh-CN/docs/3.0/gettingStarted/tutorials/building-lakehouse/doris-hudi"}},s={},p=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305",id:"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305",level:2},{value:"\u5b89\u88c5 Doris",id:"\u5b89\u88c5-doris",level:2},{value:"\u914d\u7f6e FE",id:"\u914d\u7f6e-fe",level:3},{value:"\u542f\u52a8 FE",id:"\u542f\u52a8-fe",level:3},{value:"\u914d\u7f6e BE",id:"\u914d\u7f6e-be",level:3},{value:"\u542f\u52a8 BE",id:"\u542f\u52a8-be",level:3},{value:"\u8fde\u63a5 Apache Doris FE",id:"\u8fde\u63a5-apache-doris-fe",level:3},{value:"\u5c06 BE \u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4",id:"\u5c06-be-\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4",level:3},{value:"\u4fee\u6539 Root \u7528\u6237\u548c Admin \u7528\u6237\u7684\u5bc6\u7801",id:"\u4fee\u6539-root-\u7528\u6237\u548c-admin-\u7528\u6237\u7684\u5bc6\u7801",level:3},{value:"\u5efa\u5e93\u5efa\u8868",id:"\u5efa\u5e93\u5efa\u8868",level:2},{value:"\u8fde\u63a5 Apache Doris",id:"\u8fde\u63a5-apache-doris",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93\u548c\u6570\u636e\u8868",id:"\u521b\u5efa\u6570\u636e\u5e93\u548c\u6570\u636e\u8868",level:3},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:3},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:3},{value:"\u505c\u6b62 Apache Doris",id:"\u505c\u6b62-apache-doris",level:2},{value:"\u505c\u6b62 FE",id:"\u505c\u6b62-fe",level:3},{value:"\u505c\u6b62 BE",id:"\u505c\u6b62-be",level:3}],d={toc:p},g="wrapper";function c(e){let{components:a,...n}=e;return(0,t.yg)(g,(0,r.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u8fd9\u4e2a\u7b80\u77ed\u7684\u6307\u5357\u5c06\u544a\u8bc9\u4f60\u5982\u4f55\u4e0b\u8f7d Apache Doris \u6700\u65b0\u7a33\u5b9a\u7248\u672c\uff0c\u5728\u5355\u8282\u70b9\u4e0a\u5b89\u88c5\u5e76\u8fd0\u884c\u5b83\uff0c\u5305\u62ec\u521b\u5efa\u6570\u636e\u5e93\u3001\u6570\u636e\u8868\u3001\u5bfc\u5165\u6570\u636e\u53ca\u67e5\u8be2\u7b49\u3002"),(0,t.yg)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u9009\u62e9\u4e00\u4e2a x86-64 \u4e0a\u7684\u4e3b\u6d41 Linux \u73af\u5883\uff0c\u63a8\u8350 CentOS 7.1 \u6216\u8005 Ubuntu 16.04 \u4ee5\u4e0a\u7248\u672c\u3002\u66f4\u591a\u8fd0\u884c\u73af\u5883\u8bf7\u53c2\u8003\u5b89\u88c5\u90e8\u7f72\u90e8\u5206\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Java 8 \u8fd0\u884c\u73af\u5883\uff08\u975e Oracle JDK \u5546\u4e1a\u6388\u6743\u7528\u6237\uff0c\u5efa\u8bae\u4f7f\u7528\u514d\u8d39\u7684 Oracle JDK 8u202\uff0c",(0,t.yg)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html#license-lightbox"},"\u7acb\u5373\u4e0b\u8f7d"),"\uff09\u3002")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"\u5efa\u8bae\u5728 Linux \u4e0a\u65b0\u5efa\u4e00\u4e2a Doris \u7528\u6237\u3002\u8bf7\u907f\u514d\u4f7f\u7528 Root \u7528\u6237\uff0c\u4ee5\u9632\u5bf9\u64cd\u4f5c\u7cfb\u7edf\u8bef\u64cd\u4f5c\u3002"))),(0,t.yg)("h2",{id:"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305"},"\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305"),(0,t.yg)("p",null,"\u4ece doris.apache.org \u4e0b\u8f7d\u76f8\u5e94\u7684 Apache Doris \u5b89\u88c5\u5305\uff0c\u5e76\u4e14\u89e3\u538b\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u8f7d Apache Doris \u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\nserver1:~ doris$ wget https://apache-doris-releases.oss-accelerate.aliyuncs.com/apache-doris-2.0.12-bin-x64.tar.gz\n\n# \u89e3\u538b\u5b89\u88c5\u5305\nserver1:~ doris$ tar zxf apache-doris-2.0.12-bin-x64.tar.gz\n\n# \u76ee\u5f55\u91cd\u547d\u540d\u4e3a\u66f4\u4e3a\u7b80\u5355\u7684 apache-doris \nserver1:~ doris$ mv apache-doris-2.0.12-bin-x64 apache-doris\n")),(0,t.yg)("h2",{id:"\u5b89\u88c5-doris"},"\u5b89\u88c5 Doris"),(0,t.yg)("h3",{id:"\u914d\u7f6e-fe"},"\u914d\u7f6e FE"),(0,t.yg)("p",null,"FE \u7684\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"apache-doris/fe/conf/fe.conf"),"\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u9700\u8981\u5173\u6ce8\u7684\u6838\u5fc3\u914d\u7f6e\u3002\u9664\u4e86 JAVA_HOME, \u9700\u8981\u624b\u52a8\u589e\u52a0\uff0c\u5e76\u4e14\u6307\u5411\u4f60\u7684 JDK8 \u8fd0\u884c\u73af\u5883\u3002\u5176\u5b83\u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u503c\uff0c\u5373\u53ef\u652f\u6301\u5355\u673a\u5feb\u901f\u4f53\u9a8c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Plain"},"# \u589e\u52a0 JAVA_HOME \u914d\u7f6e\uff0c\u6307\u5411 JDK8 \u7684\u8fd0\u884c\u73af\u5883\u3002\u5047\u5982\u6211\u4eec JDK8 \u4f4d\u4e8e /home/doris/jdk8, \u5219\u8bbe\u7f6e\u5982\u4e0b\nJAVA_HOME=/home/doris/jdk8\n\n# FE \u76d1\u542c IP \u7684 CIDR \u7f51\u6bb5\u3002\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u7a7a\uff0c\u6709 Apache Doris \u542f\u52a8\u65f6\u81ea\u52a8\u9009\u62e9\u4e00\u4e2a\u53ef\u7528\u7f51\u6bb5\u3002\u5982\u6709\u591a\u4e2a\u7f51\u6bb5\uff0c\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u7f51\u6bb5\uff0c\u53ef\u4ee5\u7c7b\u4f3c\u8bbe\u7f6e priority_networks=192.168.0.0/24\n# priority_networks =\n\n# FE \u5143\u6570\u636e\u5b58\u653e\u7684\u76ee\u5f55\uff0c\u9ed8\u8ba4\u662f\u5728 DORIS_HOME \u4e0b\u7684 doris-meta \u76ee\u5f55\u3002\u5df2\u7ecf\u521b\u5efa\uff0c\u53ef\u4ee5\u66f4\u6539\u4e3a\u4f60\u7684\u5143\u6570\u636e\u5b58\u50a8\u8def\u5f84\u3002\n# meta_dir = ${DORIS_HOME}/doris-meta\n")),(0,t.yg)("h3",{id:"\u542f\u52a8-fe"},"\u542f\u52a8 FE"),(0,t.yg)("p",null,"\u5728 apache-doris/fe \u4e0b\uff0c\u8fd0\u884c\u4e0b\u9762\u547d\u4ee4\u542f\u52a8 FE\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06 FE \u542f\u52a8\u6210\u540e\u53f0\u8fd0\u884c\u6a21\u5f0f\uff0c\u8fd9\u6837\u786e\u4fdd\u9000\u51fa\u7ec8\u7aef\u540e\uff0c\u8fdb\u7a0b\u4f9d\u65e7\u8fd0\u884c\u3002\nserver1:apache-doris/fe doris$ ./bin/start_fe.sh --daemon\n")),(0,t.yg)("h3",{id:"\u914d\u7f6e-be"},"\u914d\u7f6e BE"),(0,t.yg)("p",null,"BE \u7684\u914d\u7f6e\u6587\u4ef6\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"apache-doris/be/conf/be.conf"),"\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u9700\u8981\u5173\u6ce8\u7684\u6838\u5fc3\u914d\u7f6e\u3002\u9664\u4e86 JAVA_HOME, \u9700\u8981\u624b\u52a8\u589e\u52a0\uff0c\u5e76\u4e14\u6307\u5411\u4f60\u7684 JDK8 \u8fd0\u884c\u73af\u5883\u3002\u5176\u5b83\u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u503c\uff0c\u5373\u53ef\u652f\u6301\u6211\u4eec\u7684\u5feb\u901f\u4f53\u9a8c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Plain"},"# \u589e\u52a0 JAVA_HOME \u914d\u7f6e\uff0c\u6307\u5411 JDK8 \u7684\u8fd0\u884c\u73af\u5883\u3002\u5047\u5982\u6211\u4eec JDK8 \u4f4d\u4e8e /home/doris/jdk8, \u5219\u8bbe\u7f6e\u5982\u4e0b\nJAVA_HOME=/home/doris/jdk8\n\n# BE \u76d1\u542c IP \u7684 CIDR \u7f51\u6bb5\u3002\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u7a7a\uff0c\u6709 Apache Doris \u542f\u52a8\u65f6\u81ea\u52a8\u9009\u62e9\u4e00\u4e2a\u53ef\u7528\u7f51\u6bb5\u3002\u5982\u6709\u591a\u4e2a\u7f51\u6bb5\uff0c\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u7f51\u6bb5\uff0c\u53ef\u4ee5\u7c7b\u4f3c\u8bbe\u7f6e priority_networks=192.168.0.0/24\n# priority_networks =\n\n# BE \u6570\u636e\u5b58\u653e\u7684\u76ee\u5f55\uff0c\u9ed8\u8ba4\u662f\u5728 DORIS_HOME \u4e0b\u7684 storage \u4e0b\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u521b\u5efa\uff0c\u53ef\u4ee5\u66f4\u6539\u4e3a\u4f60\u7684\u6570\u636e\u5b58\u50a8\u8def\u5f84\n# storage_root_path = ${DORIS_HOME}/storage\n")),(0,t.yg)("h3",{id:"\u542f\u52a8-be"},"\u542f\u52a8 BE"),(0,t.yg)("p",null,"\u5728 apache-doris/be \u4e0b\uff0c\u8fd0\u884c\u4e0b\u9762\u547d\u4ee4\u542f\u52a8 BE\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"# \u5c06 BE \u542f\u52a8\u6210\u540e\u53f0\u8fd0\u884c\u6a21\u5f0f\uff0c\u8fd9\u6837\u786e\u4fdd\u9000\u51fa\u7ec8\u7aef\u540e\uff0c\u8fdb\u7a0b\u4f9d\u65e7\u8fd0\u884c\u3002\nserver1:apache-doris/be doris$ ./bin/start_be.sh --daemon\n")),(0,t.yg)("h3",{id:"\u8fde\u63a5-apache-doris-fe"},"\u8fde\u63a5 Apache Doris FE"),(0,t.yg)("p",null,"\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u6765\u8fde\u63a5 Apache Doris FE\uff0c\u4e0b\u8f7d\u514d\u5b89\u88c5\u7684 ",(0,t.yg)("a",{parentName:"p",href:"https://dev.mysql.com/downloads/mysql/"},"MySQL \u5ba2\u6237\u7aef"),"\u3002"),(0,t.yg)("p",null,"\u89e3\u538b\u521a\u624d\u4e0b\u8f7d\u7684 MySQL \u5ba2\u6237\u7aef\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"bin/")," \u76ee\u5f55\u4e0b\u53ef\u4ee5\u627e\u5230 ",(0,t.yg)("inlineCode",{parentName:"p"},"mysql")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\u7136\u540e\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u8fde\u63a5 Apache Doris\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mysql -uroot -P9030 -h127.0.0.1\n")),(0,t.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,t.yg)("ul",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ul"},"\u8fd9\u91cc\u4f7f\u7528\u7684 Root \u7528\u6237\u662f Apache Doris \u5185\u7f6e\u7684\u8d85\u7ea7\u7ba1\u7406\u5458\u7528\u6237\uff0c\u5177\u4f53\u7684\u7528\u6237\u6743\u9650\u67e5\u770b ",(0,t.yg)("a",{parentName:"li",href:"../../i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/auth/authentication-and-authorization.md"},"\u8ba4\u8bc1\u548c\u9274\u6743")),(0,t.yg)("li",{parentName:"ul"},"-P\uff1a\u8fd9\u91cc\u662f\u6211\u4eec\u8fde\u63a5 Apache Doris \u7684\u67e5\u8be2\u7aef\u53e3\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f 9030\uff0c\u5bf9\u5e94\u7684\u662f fe.conf \u91cc\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"query_port")),(0,t.yg)("li",{parentName:"ul"},"-h\uff1a\u8fd9\u91cc\u662f\u6211\u4eec\u8fde\u63a5\u7684 FE IP \u5730\u5740\uff0c\u5982\u679c\u4f60\u7684\u5ba2\u6237\u7aef\u548c FE \u5b89\u88c5\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u4f7f\u7528 127.0.0.1\u3002"))),(0,t.yg)("h3",{id:"\u5c06-be-\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4"},"\u5c06 BE \u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4"),(0,t.yg)("p",null,"\u5728 MySQL \u5ba2\u6237\u7aef\u6267\u884c\u7c7b\u4f3c\u4e0b\u9762\u7684 SQL\uff0c\u5c06 BE \u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},' ALTER SYSTEM ADD BACKEND "be_host_ip:heartbeat_service_port";\n')),(0,t.yg)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,t.yg)("ol",{parentName:"admonition"},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"be_host_ip\uff1a\u8981\u6dfb\u52a0 BE \u7684 IP \u5730\u5740")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"heartbeat_service_port\uff1a\u8981\u6dfb\u52a0 BE \u7684\u5fc3\u8df3\u4e0a\u62a5\u7aef\u53e3\uff0c\u53ef\u4ee5\u67e5\u770b ",(0,t.yg)("inlineCode",{parentName:"p"},"be.conf")," \u91cc\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"heartbeat_service_port"),"\uff0c\u9ed8\u8ba4\u662f ",(0,t.yg)("inlineCode",{parentName:"p"},"9050"),"\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u901a\u8fc7 show backends \u8bed\u53e5\u53ef\u4ee5\u67e5\u770b\u65b0\u6dfb\u52a0\u7684 BE \u8282\u70b9\u3002")))),(0,t.yg)("h3",{id:"\u4fee\u6539-root-\u7528\u6237\u548c-admin-\u7528\u6237\u7684\u5bc6\u7801"},"\u4fee\u6539 Root \u7528\u6237\u548c Admin \u7528\u6237\u7684\u5bc6\u7801"),(0,t.yg)("p",null,"\u5728 MySQL \u5ba2\u6237\u7aef\uff0c\u6267\u884c\u7c7b\u4f3c\u4e0b\u9762\u7684 SQL\uff0c\u4e3a Root \u7528\u6237\u548c Admin \u7528\u6237\u8bbe\u7f6e\u65b0\u5bc6\u7801"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SET PASSWORD FOR 'root' = PASSWORD('doris-root-password');                                                                                                                                                                                   \nQuery OK, 0 rows affected (0.01 sec)                                                                                                                                                                                                       \n                                                                                                                                                                                                                                           \nmysql> SET PASSWORD FOR 'admin' = PASSWORD('doris-admin-password');                                                                                                                                                                                 \nQuery OK, 0 rows affected (0.00 sec)        \n")),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"Root \u7528\u6237\u548c Admin \u7528\u6237\u7684\u533a\u522b"),(0,t.yg)("p",{parentName:"admonition"},"Root \u7528\u6237\u548c Admin \u7528\u6237\u90fd\u5c5e\u4e8e Apache Doris \u5b89\u88c5\u5b8c\u9ed8\u8ba4\u5b58\u5728\u7684 2 \u4e2a\u8d26\u6237\u3002\u5176\u4e2d Root \u7528\u6237\u62e5\u6709\u6574\u4e2a\u96c6\u7fa4\u7684\u8d85\u7ea7\u6743\u9650\uff0c\u53ef\u4ee5\u5bf9\u96c6\u7fa4\u5b8c\u6210\u5404\u79cd\u7ba1\u7406\u64cd\u4f5c\uff0c\u6bd4\u5982\u6dfb\u52a0\u8282\u70b9\uff0c\u53bb\u9664\u8282\u70b9\u3002Admin \u7528\u6237\u6ca1\u6709\u7ba1\u7406\u6743\u9650\uff0c\u662f\u96c6\u7fa4\u4e2d\u7684 Superuser\uff0c\u62e5\u6709\u9664\u96c6\u7fa4\u7ba1\u7406\u76f8\u5173\u4ee5\u5916\u7684\u6240\u6709\u6743\u9650\u3002\u5efa\u8bae\u53ea\u6709\u5728\u9700\u8981\u5bf9\u96c6\u7fa4\u8fdb\u884c\u8fd0\u7ef4\u7ba1\u7406\u8d85\u7ea7\u6743\u9650\u65f6\u624d\u4f7f\u7528 Root \u6743\u9650\u3002")),(0,t.yg)("h2",{id:"\u5efa\u5e93\u5efa\u8868"},"\u5efa\u5e93\u5efa\u8868"),(0,t.yg)("h3",{id:"\u8fde\u63a5-apache-doris"},"\u8fde\u63a5 Apache Doris"),(0,t.yg)("p",null,"\u4f7f\u7528 Admin \u8d26\u6237\u8fde\u63a5 Apache Doris FE\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"mysql -uadmin -P9030 -h127.0.0.1\n")),(0,t.yg)("admonition",{type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u5728 FE \u7684\u540c\u4e00\u53f0\u673a\u5668\u4e0a\u7684 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5 127.0.0.1, \u4e0d\u9700\u8981\u8f93\u5165\u5bc6\u7801\u3002")),(0,t.yg)("h3",{id:"\u521b\u5efa\u6570\u636e\u5e93\u548c\u6570\u636e\u8868"},"\u521b\u5efa\u6570\u636e\u5e93\u548c\u6570\u636e\u8868"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'create database demo;\n\nuse demo; \ncreate table mytable\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.05",    \n    k3 CHAR(10) COMMENT "string column",    \n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n) \nCOMMENT "my first table"\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\'replication_num\' = \'1\');\n')),(0,t.yg)("h3",{id:"\u5bfc\u5165\u6570\u636e"},"\u5bfc\u5165\u6570\u636e"),(0,t.yg)("p",null,"\u5c06\u4ee5\u4e0b\u793a\u4f8b\u6570\u636e\uff0c\u4fdd\u5b58\u5728\u672c\u5730\u7684 data.csv\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Plaintext"},"1,0.14,a1,20\n2,1.04,b2,21\n3,3.14,c3,22\n4,4.35,d4,23\n")),(0,t.yg)("p",null,"\u901a\u8fc7 Stream Load \u65b9\u5f0f\u5c06\u4e0a\u9762\u4fdd\u5b58\u5230\u6587\u4ef6\u4e2d\u7684\u6570\u636e\u5bfc\u5165\u5230\u521a\u624d\u521b\u5efa\u7684\u8868\u91cc\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'curl  --location-trusted -u admin:admin_password -T data.csv -H "column_separator:," http://127.0.0.1:8030/api/demo/mytable/_stream_load\n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"-T data.csv : \u8981\u5bfc\u5165\u7684\u6570\u636e\u6587\u4ef6\u540d")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"-u admin:admin_password : Admin \u8d26\u6237\u4e0e\u5bc6\u7801")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"127.0.0.1:8030 : \u5206\u522b\u662f FE \u7684 IP \u548c http_port"))),(0,t.yg)("p",null,"\u6267\u884c\u6210\u529f\u4e4b\u540e\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u4e0b\u9762\u7684\u8fd4\u56de\u4fe1\u606f\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},'{                                                     \n    "TxnId": 30,                                  \n    "Label": "a56d2861-303a-4b50-9907-238fea904363",        \n    "Comment": "",                                       \n    "TwoPhaseCommit": "false",                           \n    "Status": "Success",                                 \n    "Message": "OK",                                    \n    "NumberTotalRows": 4,                                \n    "NumberLoadedRows": 4,                               \n    "NumberFilteredRows": 0,                             \n    "NumberUnselectedRows": 0,                          \n    "LoadBytes": 52,                                     \n    "LoadTimeMs": 206,                                    \n    "BeginTxnTimeMs": 13,                                \n    "StreamLoadPutTimeMs": 141,                           \n    "ReadDataTimeMs": 0,                                 \n    "WriteDataTimeMs": 7,                                \n    "CommitAndPublishTimeMs": 42                         \n} \n')),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"NumberLoadedRows"),": \u8868\u793a\u5df2\u7ecf\u5bfc\u5165\u7684\u6570\u636e\u8bb0\u5f55\u6570")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"NumberTotalRows"),": \u8868\u793a\u8981\u5bfc\u5165\u7684\u603b\u6570\u636e\u91cf")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"Status"),": Success \u8868\u793a\u5bfc\u5165\u6210\u529f"))),(0,t.yg)("h3",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),(0,t.yg)("p",null,"\u5728 MySQL \u5ba2\u6237\u7aef\u4e2d\uff0c\u6267\u884c\u5982\u4e0b SQL\uff0c\u53ef\u4ee5\u67e5\u8be2\u5230\u521a\u624d\u5bfc\u5165\u7684\u6570\u636e\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from mytable;                                                                                                                                                                                                              \n+------+------+------+------+                                                                                                                                                                                                              \n| k1   | k2   | k3   | k4   |                                                                                                                                                                                                              \n+------+------+------+------+                                                                                                                                                                                                              \n|    1 | 0.14 | a1   |   20 |                                                                                                                                                                                                              \n|    2 | 1.04 | b2   |   21 |                                                                                                                                                                                                              \n|    3 | 3.14 | c3   |   22 |                                                                                                                                                                                                              \n|    4 | 4.35 | d4   |   23 |                                                                                                                                                                                                              \n+------+------+------+------+                                                                                                                                                                                                              \n4 rows in set (0.01 sec)       \n")),(0,t.yg)("h2",{id:"\u505c\u6b62-apache-doris"},"\u505c\u6b62 Apache Doris"),(0,t.yg)("h3",{id:"\u505c\u6b62-fe"},"\u505c\u6b62 FE"),(0,t.yg)("p",null,"\u5728 apache-doris/fe \u4e0b\uff0c\u8fd0\u884c\u4e0b\u9762\u547d\u4ee4\u505c\u6b62 FE\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"server1:apache-doris/fe doris$ ./bin/stop_fe.sh\n")),(0,t.yg)("h3",{id:"\u505c\u6b62-be"},"\u505c\u6b62 BE"),(0,t.yg)("p",null,"\u5728 apache-doris/be \u4e0b\uff0c\u8fd0\u884c\u4e0b\u9762\u547d\u4ee4\u505c\u6b62 BE\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"server1:apache-doris/be doris$ ./bin/stop_be.sh\n")))}c.isMDXComponent=!0}}]);