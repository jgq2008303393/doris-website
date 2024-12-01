"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[270419],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var i=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),y=r,f=c["".concat(l,".").concat(y)]||c[y]||m[y]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},936073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(58168),r=(n(296540),n(15680));const a={title:"ST_AZIMUTH",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-functions/spatial-functions/st-azimuth",id:"version-3.0/sql-manual/sql-functions/spatial-functions/st-azimuth",title:"ST_AZIMUTH",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/spatial-functions/st-azimuth.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-azimuth",permalink:"/docs/3.0/sql-manual/sql-functions/spatial-functions/st-azimuth",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ST_AZIMUTH",language:"en"},sidebar:"docs",previous:{title:"ST_ANGLE",permalink:"/docs/3.0/sql-manual/sql-functions/spatial-functions/st-angle"},next:{title:"ST_ANGLE_SPHERE",permalink:"/docs/3.0/sql-manual/sql-functions/spatial-functions/st-angle-sphere"}},l={},u=[{value:"ST_Azimuth",id:"st_azimuth",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"st_azimuth"},"ST_Azimuth"),(0,r.yg)("h3",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"DOUBLE ST_Azimuth(GEOPOINT point1, GEOPOINT point2)")),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"Enter two point, and returns the azimuth of the line segment formed by points 1 and 2. The azimuth is the angle in radians measured between the line from point 1 facing true North to the line segment from point 1 to point 2."),(0,r.yg)("p",null,"The positive angle is measured clockwise on the surface of a sphere. For example, the azimuth for a line segment:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pointing North is 0"),(0,r.yg)("li",{parentName:"ul"},"Pointing East is PI/2"),(0,r.yg)("li",{parentName:"ul"},"Pointing South is PI"),(0,r.yg)("li",{parentName:"ul"},"Pointing West is 3PI/2")),(0,r.yg)("p",null,"ST_Azimuth has the following edge cases:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the two input points are the same, returns NULL."),(0,r.yg)("li",{parentName:"ul"},"If the two input points are exactly antipodal, returns NULL."),(0,r.yg)("li",{parentName:"ul"},"If either of the input geographies are not single points or are the empty geography, throws an error.")),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> SELECT st_azimuth(ST_Point(1, 0),ST_Point(0, 0));\n+----------------------------------------------------+\n| st_azimuth(st_point(1.0, 0.0), st_point(0.0, 0.0)) |\n+----------------------------------------------------+\n|                                   4.71238898038469 |\n+----------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT st_azimuth(ST_Point(0, 0),ST_Point(1, 0));\n+----------------------------------------------------+\n| st_azimuth(st_point(0.0, 0.0), st_point(1.0, 0.0)) |\n+----------------------------------------------------+\n|                                 1.5707963267948966 |\n+----------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT st_azimuth(ST_Point(0, 0),ST_Point(0, 1));\n+----------------------------------------------------+\n| st_azimuth(st_point(0.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------+\n|                                                  0 |\n+----------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT st_azimuth(ST_Point(0, 1),ST_Point(0, 1));\n+----------------------------------------------------+\n| st_azimuth(st_point(0.0, 1.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------+\n|                                               NULL |\n+----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT st_azimuth(ST_Point(-30, 0),ST_Point(150, 0));\n+--------------------------------------------------------+\n| st_azimuth(st_point(-30.0, 0.0), st_point(150.0, 0.0)) |\n+--------------------------------------------------------+\n|                                                   NULL |\n+--------------------------------------------------------+\n1 row in set (0.02 sec)\n\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"ST_AZIMUTH,ST,AZIMUTH"))}m.isMDXComponent=!0}}]);