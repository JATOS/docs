"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1630],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67707:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const i={title:"Administration",slug:"/Administration.html",sidebar_position:1},s=void 0,o={unversionedId:"Manage_your_JATOS/Administration",id:"version-3.9.1/Manage_your_JATOS/Administration",title:"Administration",description:"On the Administration page users with admin rights can get an overview of the studies and users of a JATOS installation. You can see the logs, system info, or go to the test page to check if JATOS runs correctly. It is also the place where update notifications appear when a new JATOS version is available and where admins can trigger an update.",source:"@site/versioned_docs/version-3.9.1/Manage_your_JATOS/Administration.md",sourceDirName:"Manage_your_JATOS",slug:"/Administration.html",permalink:"/Administration.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Manage_your_JATOS/Administration.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1720351555,formattedLastUpdatedAt:"Jul 7, 2024",sidebarPosition:1,frontMatter:{title:"Administration",slug:"/Administration.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tips & tricks",permalink:"/Tips-and-Tricks.html"},next:{title:"Manage JATOS users",permalink:"/User-Manager.html"}},l={},u=[{value:"User Manager",id:"user-manager",level:3},{value:"Study Manager",id:"study-manager",level:3}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On the Administration page ",(0,r.kt)("a",{parentName:"p",href:"/User-Manager.html"},"users with admin rights")," can get an overview of the studies and users of a JATOS installation. You can see the ",(0,r.kt)("strong",{parentName:"p"},"logs"),", ",(0,r.kt)("strong",{parentName:"p"},"system info"),", or go to the ",(0,r.kt)("strong",{parentName:"p"},"test page")," to check if JATOS runs correctly. It is also the place where ",(0,r.kt)("strong",{parentName:"p"},"update notifications")," appear when a new JATOS version is available and where ",(0,r.kt)("a",{parentName:"p",href:"/Update-JATOS.html#automatic-updates"},"admins can trigger an update"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Administration screenshot",src:a(17394).Z,width:"1920",height:"926"})),(0,r.kt)("h3",{id:"user-manager"},"User Manager"),(0,r.kt)("p",null,"Manage users, passwords, and rights from here. Find more details on ",(0,r.kt)("a",{parentName:"p",href:"/User-Manager.html"},"its documentation page")),(0,r.kt)("h3",{id:"study-manager"},"Study Manager"),(0,r.kt)("p",null,"By clicking the ",(0,r.kt)("strong",{parentName:"p"},"Study Manager")," button you'll get to an overview about all studies that are on the JATOS instance. You'll also see, for each study: whom it belongs to (the study members), how much disk space it takes, and when it was active last."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In larger JATOS installations it can take up to a couple minutes to gather all data for this page")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Study Manager",src:a(14098).Z,width:"1920",height:"759"})),(0,r.kt)("p",null,"The information is displayed in a table with the columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Active")," - In cases where e.g. a study uses to many server resources, an admin can ",(0,r.kt)("strong",{parentName:"li"},"deactivate")," (or activate again) it by clicking the switch in the 'Active' column. A deactivated study cannot be started by participants (workers) anymore, but an already started study run can be continued. That means, an admin will not interrupt a participant if they already started doing a study, but no new participants will be able to start it. The study members can still see and edit the study, as well as export its result data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID")," - The study ID"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Title")," - The study title"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Members")," - The users who are members of this study"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Study assets size")," - The disk size of all asset files associated to this study (HTML, JS, CSS, images, videos, etc.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Result count")," - The number of study results collected so far on this JATOS instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Result data size")," - The size of all result data that are stored in the database. In brackets is the average size per result count."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Result file size")," - The size of all result files that are stored in the server's file system. In brackets is the average size per result count."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last started")," - When was this study last started by a participant.")))}p.isMDXComponent=!0},17394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/administration-25304b0246e70e52c8b58524aae3f05f.png"},14098:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/study_manager-8afadd19d1757550e2dd34e84b5d8c34.png"}}]);