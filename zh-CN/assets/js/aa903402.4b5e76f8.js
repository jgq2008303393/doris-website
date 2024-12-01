"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[52481],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,g=d["".concat(u,".").concat(c)]||d[c]||b[c]||o;return n?r.createElement(g,p(p({ref:t},i),{},{components:n})):r.createElement(g,p({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},250619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const o={title:"\u90e8\u7f72 FoundationDB",language:"zh-CN"},p=void 0,l={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb",id:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb",title:"\u90e8\u7f72 FoundationDB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-decoupled",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-fdb",draft:!1,tags:[],version:"current",frontMatter:{title:"\u90e8\u7f72 FoundationDB",language:"zh-CN"},sidebar:"docs",previous:{title:"\u5feb\u901f\u90e8\u7f72",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart"},next:{title:"\u914d\u7f6e\u90e8\u7f72 Metaservice",permalink:"/zh-CN/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-ms"}},u={},s=[{value:"\u90e8\u7f72 FDB \u76f8\u5173\u8d44\u6e90\u5b9a\u4e49",id:"\u90e8\u7f72-fdb-\u76f8\u5173\u8d44\u6e90\u5b9a\u4e49",level:2},{value:"\u90e8\u7f72 fdb-kubernetes-operator \u670d\u52a1",id:"\u90e8\u7f72-fdb-kubernetes-operator-\u670d\u52a1",level:2},{value:"\u90e8\u7f72 FDB \u96c6\u7fa4",id:"\u90e8\u7f72-fdb-\u96c6\u7fa4",level:2},{value:"\u786e\u8ba4 FDB \u72b6\u6001",id:"\u786e\u8ba4-fdb-\u72b6\u6001",level:2}],i={toc:s},d="wrapper";function b(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://apple.github.io/foundationdb/#overview"},"FDB")," \u662f Apple \u516c\u53f8\u5f00\u53d1\u7684\u5206\u5e03\u5f0f\u5f3a\u4e00\u81f4\u6027\u5b58\u50a8\u7ed3\u6784\u5316\u6570\u636e\u7684\u6570\u636e\u5e93\u3002Doris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4f7f\u7528 FDB \u4f5c\u4e3a\u5143\u6570\u636e\u5b58\u50a8\uff0c\u901a\u8fc7 meta-service \u7ec4\u4ef6\u6765\u7ba1\u7406 FDB \u4e2d\u7684\u5143\u6570\u636e\u3002Kubernetes \u4e0a\u90e8\u7f72\u5b58\u7b97\u5206\u79bb\u96c6\u7fa4\u9700\u8981\u63d0\u524d\u90e8\u7f72 FDB \u670d\u52a1\uff0c\u63a8\u8350\u4e24\u79cd\u90e8\u7f72\u65b9\u5f0f\uff1a\u5728\u865a\u673a (\u5305\u62ec\u7269\u7406\u673a) \u4e0a\u76f4\u63a5\u90e8\u7f72; \u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/FoundationDB/fdb-kubernetes-operator"},"fdb-kubernetes-operator")," \u90e8\u7f72 FDB\u3002\n\u865a\u673a\u90e8\u7f72\u8bf7\u53c2\u8003 Doris \u5b58\u7b97\u5206\u79bb\u5b98\u65b9\u6587\u6863",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/dev/compute-storage-decoupled/before-deployment"},"\u90e8\u7f72\u524d\u51c6\u5907\u90e8\u5206"),"\u642d\u5efa FDB \u96c6\u7fa4\u3002\u90e8\u7f72\u524d\u8bf7\u786e\u4fdd FDB \u6709\u88ab Doris \u90e8\u7f72\u7684 Kubernetes \u96c6\u7fa4\u8bbf\u95ee\u7684\u80fd\u529b\uff0c\u5373 Kubernetes \u7684 Node \u4e0e FDB \u90e8\u7f72\u7684\u673a\u5668\u5728\u540c\u4e00\u4e2a\u5b50\u7f51\u3002FDB \u5b98\u65b9\u63d0\u4f9b Kubernetes \u4e0a\u90e8\u7f72\u8fd0\u7ef4\u7ba1\u7406\u670d\u52a1 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/FoundationDB/fdb-kubernetes-operator"},"fdb-kubernetes-operator")," \u3002"),(0,a.yg)("p",null,"\u4ee5\u4e0b\u7b80\u8ff0\u4f7f\u7528 fdb-kubernetes-operator \u6700\u65b0\u7248\u672c\u90e8\u7f72 FDB \u4f7f\u7528\u6837\u4f8b\u3002"),(0,a.yg)("h2",{id:"\u90e8\u7f72-fdb-\u76f8\u5173\u8d44\u6e90\u5b9a\u4e49"},"\u90e8\u7f72 FDB \u76f8\u5173\u8d44\u6e90\u5b9a\u4e49"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbclusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbbackups.yaml\nkubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbrestores.yaml\n")),(0,a.yg)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbclusters.yaml\ncustomresourcedefinition.apiextensions.k8s.io/foundationdbclusters.apps.foundationdb.org created\nkubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbbackups.yaml\ncustomresourcedefinition.apiextensions.k8s.io/foundationdbbackups.apps.foundationdb.org created\nkubectl apply -f https://raw.githubusercontent.com/FoundationDB/fdb-kubernetes-operator/main/config/crd/bases/apps.foundationdb.org_foundationdbrestores.yaml\ncustomresourcedefinition.apiextensions.k8s.io/foundationdbrestores.apps.foundationdb.org created\n")),(0,a.yg)("h2",{id:"\u90e8\u7f72-fdb-kubernetes-operator-\u670d\u52a1"},"\u90e8\u7f72 fdb-kubernetes-operator \u670d\u52a1"),(0,a.yg)("p",null,"fdb-kubernetes-operator \u4ed3\u5e93\u63d0\u4f9b\u4e86\u4ee5 IP \u6a21\u5f0f\u90e8\u7f72 FDB \u96c6\u7fa4\u7684\u90e8\u7f72\u6837\u4f8b\u3002\u5728 doris-operator \u4ed3\u5e93\u4e2d\u63d0\u4f9b\u4e86\u4ee5 FQDN \u6a21\u5f0f\u90e8\u7f72\u7684 FDB \u96c6\u7fa4\u6837\u4f8b\uff0c\u53ef\u4ee5\u6309\u9700\u4e0b\u8f7d\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u90e8\u7f72\u6837\u4f8b\uff1a ")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4ece fdb-kubernetes-operator \u5b98\u65b9\u4ed3\u5e93\u4e0b\u8f7d\uff1a "),(0,a.yg)("p",{parentName:"li"},"fdb-kuberentes-operator \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528 IP \u6a21\u5f0f\u90e8\u7f72 FDB Cluster\uff0c\u53ef\u4ee5\u4e0b\u8f7d ",(0,a.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/foundationdb/fdb-kubernetes-operator/main/config/samples/deployment.yaml"},"fdb-kubernetes-operator \u9ed8\u8ba4\u90e8\u7f72")," yaml\u3002\u5982\u679c\u4f7f\u7528 FQDN \u90e8\u7f72\u6a21\u5f0f\uff0c\u8bf7\u6309\u7167\u5b98\u65b9\u6587\u6863",(0,a.yg)("a",{parentName:"p",href:"https://github.com/FoundationDB/fdb-kubernetes-operator/blob/main/docs/manual/customization.md#using-dns"},"\u4f7f\u7528 DNS \u90e8\u5206"),"\u8fdb\u884c\u5b9a\u5236\u5316\u4f7f\u7528\u57df\u540d\u6a21\u5f0f\u3002"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"wget -O fdb-operator.yaml https://raw.githubusercontent.com/foundationdb/fdb-kubernetes-operator/main/config/samples/deployment.yaml\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4ece doris-operator \u4ed3\u5e93\u4e0b\u8f7d\uff1a "),(0,a.yg)("p",{parentName:"li"},"doris-operator \u4ed3\u5e93\u4e2d\u5236\u5b9a\u5316\u4e86\u4ee5 fdb-kuberentes-operator 1.46.0 \u7248\u672c\u4e3a\u57fa\u7840\u7684\u90e8\u7f72\u793a\u4f8b\uff0c\u53ef\u76f4\u63a5\u4f7f\u7528\u90e8\u7f72 FDB cluster\u3002  "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/apache/doris-operator/master/config/operator/fdb-operator.yaml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u90e8\u7f72 fdb-kubernetes-operator \u670d\u52a1\uff1a "),(0,a.yg)("p",{parentName:"li"},"\u5b9a\u5236\u5316 ",(0,a.yg)("inlineCode",{parentName:"p"},"fdb-kubernetes-operator")," \u7684\u90e8\u7f72 yaml \u540e\uff0c\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u90e8\u7f72 fdb-kubernetes-operator\uff1a  "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f fdb-operator.yaml\n")),(0,a.yg)("p",null,"\u9884\u671f\u7ed3\u679c\uff1a "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"serviceaccount/fdb-kubernetes-operator-controller-manager created\nclusterrole.rbac.authorization.k8s.io/fdb-kubernetes-operator-manager-clusterrole created\nclusterrole.rbac.authorization.k8s.io/fdb-kubernetes-operator-manager-role created\nrolebinding.rbac.authorization.k8s.io/fdb-kubernetes-operator-manager-rolebinding created\nclusterrolebinding.rbac.authorization.k8s.io/fdb-kubernetes-operator-manager-clusterrolebinding created\ndeployment.apps/fdb-kubernetes-operator-controller-manager created\n")),(0,a.yg)("h2",{id:"\u90e8\u7f72-fdb-\u96c6\u7fa4"},"\u90e8\u7f72 FDB \u96c6\u7fa4"),(0,a.yg)("p",null,"\u5728 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/FoundationDB/fdb-kubernetes-operator/blob/main/config/samples/cluster.yaml"},"fdb-kubernetes-operator \u4ed3\u5e93"),"\u4e2d\u63d0\u4f9b\u4e86\u90e8\u7f72 FDB \u7684\u90e8\u7f72\u6837\u4f8b\uff0c\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u76f4\u63a5\u4e0b\u8f7d\u4f7f\u7528  "),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u4e0b\u8f7d\u90e8\u7f72\u6837\u4f8b\uff1a  "),(0,a.yg)("p",{parentName:"li"},"\u4ece FDB \u5b98\u65b9\u4e0b\u8f7d IP \u6a21\u5f0f\u90e8\u7f72\u6837\u4f8b\uff1a  "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/foundationdb/fdb-kubernetes-operator/main/config/samples/cluster.yaml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5b9a\u5236\u5316\u90e8\u7f72\u6837\u4f8b\uff1a  ")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u73af\u5883\u53ef\u8bbf\u95ee dockerhub  "),(0,a.yg)("p",{parentName:"li"},"\u6839\u636e\u5b98\u7f51\u63d0\u4f9b\u7684",(0,a.yg)("a",{parentName:"p",href:"https://github.com/FoundationDB/fdb-kubernetes-operator/blob/main/docs/manual/index.md"},"\u7528\u6237\u624b\u518c"),"\u5b9a\u5236\u5316\u90e8\u7f72\u7ec8\u6001\u3002\u5982\u679c\u4f7f\u7528 FQDN \u90e8\u7f72\uff0c\u8bf7\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"routing.useDNSInClusterFile")," \u5b57\u6bb5\u8bbe\u7f6e\u4e3a true ,\u914d\u7f6e\u5982\u4e0b\uff1a",(0,a.yg)("br",{parentName:"p"}),"\n","doris-operator \u7684\u5b98\u65b9\u4ed3\u5e93\u4e2d\u63d0\u4f9b\u4e86\u4f7f\u7528 ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-operator/blob/master/doc/examples/disaggregated/fdb/cluster.yaml"},"FQDN \u90e8\u7f72 FDB \u7684\u90e8\u7f72\u6837\u4f8b"),"\u53ef\u76f4\u63a5\u4e0b\u8f7d\u4f7f\u7528\u3002  "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  routing:\n  useDNSInClusterFile: true\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u79c1\u7f51\u73af\u5883  "),(0,a.yg)("p",{parentName:"li"},"\u5728\u79c1\u7f51\u73af\u5883\u4e0b\uff0c\u5982\u679c\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee dockerhub \u53ef\u4ece FDB \u7684\u5b98\u65b9\u4ed3\u5e93\u4e2d\u5c06\u9700\u8981\u7684\u955c\u50cf\u4e0b\u8f7d\uff0c\u5e76\u63a8\u5230\u79c1\u6709\u4ed3\u5e93\u4e2d\u3002fdb-kubernetes-operator \u4f9d\u8d56 ",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/foundationdb/fdb-kubernetes-operator"},"foundationdb/fdb-kubernetes-operator"),", ",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/foundationdb/foundationdb-kubernetes-sidecar"},"foundationdb/foundationdb-kubernetes-sidecar")," \u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u90e8\u7f72 FDB \u4f9d\u8d56\u7684\u955c\u50cf\u5305\u62ec\uff1a",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/foundationdb/foundationdb"},"foundationdb/foundationdb")," \uff0c ",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/foundationdb/foundationdb-kubernetes-sidecar"},"foundationdb/foundationdb-kubernetes-sidecar"),"\u3002",(0,a.yg)("br",{parentName:"p"}),"\n","\u63a8\u5230\u79c1\u6709\u4ed3\u5e93\u540e\uff0c\u6309\u7167 fdb-kubernetes-operator \u5b98\u65b9\u6587\u6863",(0,a.yg)("a",{parentName:"p",href:"https://github.com/FoundationDB/fdb-kubernetes-operator/blob/main/docs/manual/customization.md#customizing-the-foundationdb-image"},"\u5b9a\u5236\u5316\u955c\u50cf\u914d\u7f6e"),"\u8bf4\u660e\u8fdb\u884c\u914d\u7f6e\u3002    "),(0,a.yg)("p",{parentName:"li"},"\u53ef\u53c2\u8003\u5982\u4e0b\u914d\u7f6e\u6dfb\u52a0\u79c1\u6709\u4ed3\u5e93\u955c\u50cf\u914d\u7f6e\uff1a  "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  mainContainer:\n    imageConfigs:\n    - baseImage: foundationdb/foundationdb\n      tag: 7.1.38\n  sidecarContainer:\n    imageConfigs:\n    - baseImage: foundationdb/foundationdb-kubernetes-sidecar\n      tag: 7.1.36-1\n  version: 7.1.38\n")),(0,a.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"\u79c1\u6709\u73af\u5883\u4e0b\uff0cFDB \u63a8\u5230\u79c1\u6709\u4ed3\u5e93\u65f6\uff0ctag \u5fc5\u987b\u4e0e\u5b98\u65b9\u4fdd\u6301\u4e00\u81f4\uff0c\u6bd4\u5982\uff1a7.1.38\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u90e8\u7f72 FDB \u65f6\uff0cFoundationDBCluster \u8d44\u6e90\uff0c.spec.version \u5fc5\u987b\u914d\u7f6e\u3002"),(0,a.yg)("li",{parentName:"ul"},"FDB \u57fa\u4e8e fdb-kubernetes-operator \u90e8\u7f72\uff0c\u81f3\u5c11\u9700\u8981\u4e09\u4e2a\u5bbf\u4e3b\u673a\u624d\u53ef\u6ee1\u8db3\u751f\u4ea7\u73af\u5883\u9ad8\u53ef\u7528\u8981\u6c42\u3002  "))),(0,a.yg)("h2",{id:"\u786e\u8ba4-fdb-\u72b6\u6001"},"\u786e\u8ba4 FDB \u72b6\u6001"),(0,a.yg)("p",null,"FDB \u57fa\u4e8e fdb-kubernetes-operator \u90e8\u7f72\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b FDB \u96c6\u7fa4\u72b6\u6001\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"kubectl get fdb\n")),(0,a.yg)("p",null,"\u9884\u671f\u7ed3\u679c\u5982\u4e0b\uff0c\u82e5 ",(0,a.yg)("inlineCode",{parentName:"p"},"AVAILABLE")," \u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," \u5219\u4ee3\u8868\u96c6\u7fa4\u53ef\u7528\uff1a "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"NAME           GENERATION   RECONCILED   AVAILABLE   FULLREPLICATION   VERSION   AGE\ntest-cluster   1            1            true        true              7.1.26    13m\n")))}b.isMDXComponent=!0}}]);