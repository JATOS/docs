"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2859],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,m=c["".concat(s,".").concat(d)]||c[d]||y[d]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},83100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(83117),o=(r(67294),r(3905));const a={title:"Deploy to a server installation",slug:"/Deploy-to-a-server-installation.html",sidebar_position:1},l=void 0,i={unversionedId:"Run_your_study/Deploy-to-a-server-installation",id:"Run_your_study/Deploy-to-a-server-installation",title:"Deploy to a server installation",description:"Usually you conveniently develop your study on your local computer where you have a local installation of JATOS. Then just use the export and import buttons in your installations to transfer the study to your JATOS server.",source:"@site/docs/Run_your_study/Deploy-to-a-server-installation.md",sourceDirName:"Run_your_study",slug:"/Deploy-to-a-server-installation.html",permalink:"/next/Deploy-to-a-server-installation.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Run_your_study/Deploy-to-a-server-installation.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1715949639,formattedLastUpdatedAt:"May 17, 2024",sidebarPosition:1,frontMatter:{title:"Deploy to a server installation",slug:"/Deploy-to-a-server-installation.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Session Data - Three Types",permalink:"/next/Session-Data-Three-Types.html"},next:{title:"Run your Study with Study Links",permalink:"/next/Run-your-Study-with-Study-Links.html"}},s={},u=[],p={toc:u};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Usually you conveniently develop your study on your local computer where you have a ",(0,o.kt)("a",{parentName:"p",href:"Installation.html"},"local installation of JATOS"),". Then just use the export and import buttons in your installations to transfer the study to your ",(0,o.kt)("a",{parentName:"p",href:"Bring-your-JATOS-online.html"},"JATOS server"),"."),(0,o.kt)("p",null,"If you have a server already, you will need to take your ready-to-run study from your local installation and deploy it to the server. In order to do this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On your ",(0,o.kt)("em",{parentName:"li"},"local")," JATOS installation, where your study is, click on the study you want to export on the left sidebar. "),(0,o.kt)("li",{parentName:"ol"},"On the Study bar, click Export. A pop-up window will appear. Save the ",(0,o.kt)("a",{parentName:"li",href:"JATOS-Study-Archive-JZIP.html"},(0,o.kt)("em",{parentName:"a"},".jzip"))," file wherever you like on your computer.  "),(0,o.kt)("li",{parentName:"ol"},"On your ",(0,o.kt)("em",{parentName:"li"},"server")," installation, simply click Import. ")),(0,o.kt)("p",null,"Here's a little sketch of the same three steps above\n",(0,o.kt)("img",{alt:"jzip workflow",src:r(56922).Z,width:"1606",height:"680"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please note that:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The two JATOS look almost identical, and you will (basically) only distinguish them on the basis of the URL in the browser. To prevent confusion, we've made it easier: A local JATOS installation has a ",(0,o.kt)("strong",{parentName:"li"},"black bar")," on top. A server installation has a ",(0,o.kt)("strong",{parentName:"li"},"light-grey bar"),". "),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},".jzip"))," file is a ",(0,o.kt)("a",{parentName:"li",href:"JATOS-Study-Archive-JZIP.html"},"JATOS Study Archive"),". It is using the ZIP archive file format. It contains everything to describe a study like study properties and study assets. Do not unzip it - Always import the ",(0,o.kt)("em",{parentName:"li"},".jzip")," to JATOS. "),(0,o.kt)("li",{parentName:"ul"},"In the process of exporting/importing you'll transfer all assets of your study (HTML/JS/CSS files, images, audio, etc) contained in the local study folder. You will ",(0,o.kt)("strong",{parentName:"li"},"not")," transfer result data. "),(0,o.kt)("li",{parentName:"ul"},"If you want to make changes to a study, we also recommend that you so in the local JATOS. There you have full access to the study assets and can change and edit them easily. Then again you can Export \u2192 Import to the JATOS server.")))}y.isMDXComponent=!0},56922:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jzipWorkflow-47650464ad30958453e7bef3a52dd94a.png"}}]);