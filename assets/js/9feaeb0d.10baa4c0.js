"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[32],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>c});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=u(o),c=a,h=y["".concat(s,".").concat(c)]||y[c]||d[c]||n;return o?r.createElement(h,l(l({ref:t},p),{},{components:o})):r.createElement(h,l({ref:t},p))}));function c(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<n;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},88899:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=o(83117),a=(o(67294),o(3905));const n={title:"Deploy to a server installation",slug:"/Deploy-to-a-server-installation.html",sidebar_position:1},l=void 0,i={unversionedId:"Run_your_study/Deploy-to-a-server-installation",id:"version-3.6.1/Run_your_study/Deploy-to-a-server-installation",title:"Deploy to a server installation",description:"Usually you conveniently develop your study on your local computer where you have a local installation of JATOS. Then just use the export and import buttons in your installations to transfer the study to your JATOS server.",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Deploy-to-a-server-installation.md",sourceDirName:"Run_your_study",slug:"/Deploy-to-a-server-installation.html",permalink:"/3.6.x/Deploy-to-a-server-installation.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.6.1/Run_your_study/Deploy-to-a-server-installation.md",tags:[],version:"3.6.1",lastUpdatedBy:"kristian",lastUpdatedAt:1692977229,formattedLastUpdatedAt:"Aug 25, 2023",sidebarPosition:1,frontMatter:{title:"Deploy to a server installation",slug:"/Deploy-to-a-server-installation.html",sidebar_position:1},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Session Data - Three Types",permalink:"/3.6.x/Session-Data-Three-Types.html"},next:{title:"Run your Study with Worker & Batch Manager",permalink:"/3.6.x/Run-your-Study-with-Worker-and-Batch-Manager.html"}},s={},u=[{value:"Please note that:",id:"please-note-that",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Usually you conveniently develop your study on your local computer where you have a ",(0,a.kt)("a",{parentName:"p",href:"Installation.html"},"local installation of JATOS"),". Then just use the export and import buttons in your installations to transfer the study to your ",(0,a.kt)("a",{parentName:"p",href:"JATOS-on-a-server.html"},"JATOS server"),"."),(0,a.kt)("p",null,"If you have a server already, you will need to take your ready-to-run study from your local installation and deploy it to the server. In order to do this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On your ",(0,a.kt)("em",{parentName:"li"},"local")," JATOS installation, where your study is, click on the study you want to export on the left sidebar. "),(0,a.kt)("li",{parentName:"ol"},"On the Study bar, click Export. A pop-up window will appear. Save the .jzip file wherever you like on your computer.  "),(0,a.kt)("li",{parentName:"ol"},"On your ",(0,a.kt)("em",{parentName:"li"},"server")," installation, simply click Import. ")),(0,a.kt)("p",null,"Here's a little sketch of the same three steps above\n",(0,a.kt)("img",{alt:"jzip workflow",src:o(56922).Z,width:"1606",height:"680"})),(0,a.kt)("p",null,"If you have trouble with the export and you are using a Safari browser have a look into ",(0,a.kt)("a",{parentName:"p",href:"Troubleshooting.html#downloading-a-study--exporting-a-study-fails-eg-in-safari-browsers"},"this issue in our Troubleshooting section"),"."),(0,a.kt)("h2",{id:"please-note-that"},"Please note that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The two JATOS look almost identical, and you will (basically) only distinguish them on the basis of the URL in the browser. To prevent confusion, we've made it easier: A local JATOS installation has a ",(0,a.kt)("strong",{parentName:"li"},"black bar")," on top. A server installation has a ",(0,a.kt)("strong",{parentName:"li"},"light-grey bar"),". "),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},".jzip")," file is a normal .zip file. We just changed the name to make this process clearer. (JATOS users got confused and often tried to unzip the file they had downloaded, add HTML files in it, and re-zip it. This will lead to all sorts of problems. Don't do this.\nYou should do all modifications of files and study properties from the JATOS GUI.)"),(0,a.kt)("li",{parentName:"ul"},"In the process of exporting/importing you'll transfer all assets of your study (HTML/JS/CSS files, images, audio, etc) contained in the local study folder. You will ",(0,a.kt)("strong",{parentName:"li"},"not")," transfer result data. "),(0,a.kt)("li",{parentName:"ul"},"If you want to make changes to a study, we also recommend that you so in the local JATOS. There you have full access to the study assets and can change and edit them easily. Then again you can Export \u2192 Import to the JATOS server.")))}d.isMDXComponent=!0},56922:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/jzipWorkflow-47650464ad30958453e7bef3a52dd94a.png"}}]);