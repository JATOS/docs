"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1379],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,s(s({ref:e},c),{},{components:n})):a.createElement(h,s({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3177:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={title:"Administration",slug:"/Administration.html",sidebar_position:1},l=void 0,u={unversionedId:"Manage_your_JATOS/Administration",id:"Manage_your_JATOS/Administration",title:"Administration",description:"On the Administration page users with admin rights can get an overview of the studies and users of a JATOS installation. You can see the logs, system info, or go to the test page to check if JATOS runs correctly. It is also the place where update notifications appear when a new JATOS version is available and where admins can trigger an update.",source:"@site/docs/Manage_your_JATOS/Administration.md",sourceDirName:"Manage_your_JATOS",slug:"/Administration.html",permalink:"/next/Administration.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Manage_your_JATOS/Administration.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1662838606,formattedLastUpdatedAt:"9/10/2022",sidebarPosition:1,frontMatter:{title:"Administration",slug:"/Administration.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/next/Tips-and-Tricks.html"},next:{title:"Manage JATOS users",permalink:"/next/User-Manager.html"}},c=[{value:"User Manager",id:"user-manager",children:[],level:3},{value:"Study Administration",id:"study-administration",children:[],level:3}],d={toc:c};function p(t){var e=t.components,o=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"On the Administration page ",(0,i.kt)("a",{parentName:"p",href:"/User-Manager.html"},"users with admin rights")," can get an overview of the studies and users of a JATOS installation. You can see the ",(0,i.kt)("strong",{parentName:"p"},"logs"),", ",(0,i.kt)("strong",{parentName:"p"},"system info"),", or go to the ",(0,i.kt)("strong",{parentName:"p"},"test page")," to check if JATOS runs correctly. It is also the place where ",(0,i.kt)("strong",{parentName:"p"},"update notifications")," appear when a new JATOS version is available and where ",(0,i.kt)("a",{parentName:"p",href:"/Update-JATOS.html#automatic-updates"},"admins can trigger an update"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Administration screenshot",src:n(249).Z})),(0,i.kt)("p",null,"On the menu you will find links to two additional administration pages: "),(0,i.kt)("h3",{id:"user-manager"},"User Manager"),(0,i.kt)("p",null,"Manage users, passwords, and rights from here. Find more details on ",(0,i.kt)("a",{parentName:"p",href:"/User-Manager.html"},"its documentation page")),(0,i.kt)("h3",{id:"study-administration"},"Study Administration"),(0,i.kt)("p",null,"By clicking the ",(0,i.kt)("em",{parentName:"p"},"Studies")," button you'll get to an overview about all studies that are on the JATOS instance. You'll also see, for each study: whom it belongs to (the study members), how much disk space it takes, and when it was active last."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For larger JATOS installation it can take up to a couple minutes to gather all data for this page")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studies Administration",src:n(5083).Z})),(0,i.kt)("p",null,"The information is displayed in a table with the columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," - In cases where e.g. a study uses to many server resources, an admin can ",(0,i.kt)("strong",{parentName:"li"},"deactivate")," (or activate again) it by clicking the checkbox in the 'Active' column. A deactivated study cannot be started by participants (workers) anymore, but an already started study run can be continued. That means, an admin will not interrupt a participant if they already started doing a study, but no new participants will be able to start it. The study members can still see and edit the study, as well as export its result data. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Study Assets Size")," - The disk size of all asset files associated to this study (HTML, JS, CSS, images, videos, etc.)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result Count")," - The number of study results collected so far on this JATOS instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result Data Size")," - The size of all result data that are stored in the database. In brackets is the average size per result count."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result File Size")," - The size of all result files that are stored in the server's file system. In brackets is the average size per result count."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Last Started")," - When was this study last started by a participant.")))}p.isMDXComponent=!0},249:function(t,e,n){e.Z=n.p+"assets/images/Screenshot_Administration_371-99987ea450031d29a88b6703d6bf3f2b.png"},5083:function(t,e,n){e.Z=n.p+"assets/images/Screenshot_Study_Admin_371-ae78a7b0beb1149a09a394e82475265d.png"}}]);