"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1379],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(h,s(s({ref:e},u),{},{components:a})):n.createElement(h,s({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3177:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));const i={title:"Administration",slug:"/Administration.html",sidebar_position:1},s=void 0,o={unversionedId:"Manage_your_JATOS/Administration",id:"Manage_your_JATOS/Administration",title:"Administration",description:"On the Administration page users with admin rights can get an overview of the studies and users of a JATOS installation. You can see the logs, system info, or go to the test page to check if JATOS runs correctly. It is also the place where update notifications appear when a new JATOS version is available and where admins can trigger an update.",source:"@site/docs/Manage_your_JATOS/Administration.md",sourceDirName:"Manage_your_JATOS",slug:"/Administration.html",permalink:"/next/Administration.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Manage_your_JATOS/Administration.md",tags:[],version:"current",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1699998256,formattedLastUpdatedAt:"Nov 14, 2023",sidebarPosition:1,frontMatter:{title:"Administration",slug:"/Administration.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/next/Tips-and-Tricks.html"},next:{title:"Manage JATOS users",permalink:"/next/User-Manager.html"}},l={},d=[{value:"User Manager",id:"user-manager",level:3},{value:"Study Administration",id:"study-administration",level:3}],u={toc:d};function p(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On the Administration page ",(0,r.kt)("a",{parentName:"p",href:"/User-Manager.html"},"users with admin rights")," can get an overview of the studies and users of a JATOS installation. You can see the ",(0,r.kt)("strong",{parentName:"p"},"logs"),", ",(0,r.kt)("strong",{parentName:"p"},"system info"),", or go to the ",(0,r.kt)("strong",{parentName:"p"},"test page")," to check if JATOS runs correctly. It is also the place where ",(0,r.kt)("strong",{parentName:"p"},"update notifications")," appear when a new JATOS version is available and where ",(0,r.kt)("a",{parentName:"p",href:"/Update-JATOS.html#automatic-updates"},"admins can trigger an update"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Administration screenshot",src:a(33412).Z,width:"1919",height:"884"})),(0,r.kt)("p",null,"On the menu you will find links to two additional administration pages: "),(0,r.kt)("h3",{id:"user-manager"},"User Manager"),(0,r.kt)("p",null,"Manage users, passwords, and rights from here. Find more details on ",(0,r.kt)("a",{parentName:"p",href:"/User-Manager.html"},"its documentation page")),(0,r.kt)("h3",{id:"study-administration"},"Study Administration"),(0,r.kt)("p",null,"By clicking the ",(0,r.kt)("em",{parentName:"p"},"Studies")," button you'll get to an overview about all studies that are on the JATOS instance. You'll also see, for each study: whom it belongs to (the study members), how much disk space it takes, and when it was active last."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For larger JATOS installation it can take up to a couple minutes to gather all data for this page")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Studies Administration",src:a(27556).Z,width:"1919",height:"937"})),(0,r.kt)("p",null,"The information is displayed in a table with the columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Active")," - In cases where e.g. a study uses to many server resources, an admin can ",(0,r.kt)("strong",{parentName:"li"},"deactivate")," (or activate again) it by clicking the checkbox in the 'Active' column. A deactivated study cannot be started by participants (workers) anymore, but an already started study run can be continued. That means, an admin will not interrupt a participant if they already started doing a study, but no new participants will be able to start it. The study members can still see and edit the study, as well as export its result data. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Study Assets Size")," - The disk size of all asset files associated to this study (HTML, JS, CSS, images, videos, etc.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Result Count")," - The number of study results collected so far on this JATOS instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Result Data Size")," - The size of all result data that are stored in the database. In brackets is the average size per result count."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Result File Size")," - The size of all result files that are stored in the server's file system. In brackets is the average size per result count."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Started")," - When was this study last started by a participant.")))}p.isMDXComponent=!0},33412:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Screenshot_Administration_371-99987ea450031d29a88b6703d6bf3f2b.png"},27556:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Screenshot_Study_Admin_371-ae78a7b0beb1149a09a394e82475265d.png"}}]);