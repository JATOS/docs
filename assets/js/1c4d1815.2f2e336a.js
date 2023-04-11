"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2859],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),y=u(r),d=o,m=y["".concat(s,".").concat(d)]||y[d]||c[d]||a;return r?n.createElement(m,l(l({ref:e},p),{},{components:r})):n.createElement(m,l({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=y;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3100:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const a={title:"Deploy to a server installation",slug:"/Deploy-to-a-server-installation.html",sidebar_position:1},l=void 0,i={unversionedId:"Run_your_study/Deploy-to-a-server-installation",id:"Run_your_study/Deploy-to-a-server-installation",title:"Deploy to a server installation",description:"Usually you conveniently develop your study on your local computer where you have a local installation of JATOS. Then just use the export and import buttons in your installations to transfer the study to your JATOS server.",source:"@site/docs/Run_your_study/Deploy-to-a-server-installation.md",sourceDirName:"Run_your_study",slug:"/Deploy-to-a-server-installation.html",permalink:"/next/Deploy-to-a-server-installation.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Run_your_study/Deploy-to-a-server-installation.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1681205782,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:1,frontMatter:{title:"Deploy to a server installation",slug:"/Deploy-to-a-server-installation.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Session Data - Three Types",permalink:"/next/Session-Data-Three-Types.html"},next:{title:"Run your Study with Study Links",permalink:"/next/Run-your-Study-with-Study-Links.html"}},s={},u=[],p={toc:u};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Usually you conveniently develop your study on your local computer where you have a ",(0,o.kt)("a",{parentName:"p",href:"Installation.html"},"local installation of JATOS"),". Then just use the export and import buttons in your installations to transfer the study to your ",(0,o.kt)("a",{parentName:"p",href:"Bring-your-JATOS-online.html"},"JATOS server"),"."),(0,o.kt)("p",null,"If you have a server already, you will need to take your ready-to-run study from your local installation and deploy it to the server. In order to do this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On your ",(0,o.kt)("em",{parentName:"li"},"local")," JATOS installation, where your study is, click on the study you want to export on the left sidebar. "),(0,o.kt)("li",{parentName:"ol"},"On the Study bar, click Export. A pop-up window will appear. Save the ",(0,o.kt)("a",{parentName:"li",href:"JATOS-Study-Archive-JZIP.html"},(0,o.kt)("em",{parentName:"a"},".jzip"))," file wherever you like on your computer.  "),(0,o.kt)("li",{parentName:"ol"},"On your ",(0,o.kt)("em",{parentName:"li"},"server")," installation, simply click Import. ")),(0,o.kt)("p",null,"Here's a little sketch of the same three steps above\n",(0,o.kt)("img",{alt:"jzip workflow",src:r(4811).Z,width:"1606",height:"680"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note that:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The two JATOS look almost identical, and you will (basically) only distinguish them on the basis of the URL in the browser. To prevent confusion, we've made it easier: A local JATOS installation has a ",(0,o.kt)("strong",{parentName:"li"},"black bar")," on top. A server installation has a ",(0,o.kt)("strong",{parentName:"li"},"light-grey bar"),". "),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},".jzip"))," file is a ",(0,o.kt)("a",{parentName:"li",href:"JATOS-Study-Archive-JZIP.html"},"JATOS Study Archive"),". It is using the ZIP archive file format. It contains everything to describe a study like study properties and study assets. Do not unzip it - Always import the ",(0,o.kt)("em",{parentName:"li"},".jzip")," to JATOS. "),(0,o.kt)("li",{parentName:"ul"},"In the process of exporting/importing you'll transfer all assets of your study (HTML/JS/CSS files, images, audio, etc) contained in the local study folder. You will ",(0,o.kt)("strong",{parentName:"li"},"not")," transfer result data. "),(0,o.kt)("li",{parentName:"ul"},"If you want to make changes to a study, we also recommend that you so in the local JATOS. There you have full access to the study assets and can change and edit them easily. Then again you can Export \u2192 Import to the JATOS server.")))}c.isMDXComponent=!0},4811:function(t,e,r){e.Z=r.p+"assets/images/jzipWorkflow-47650464ad30958453e7bef3a52dd94a.png"}}]);