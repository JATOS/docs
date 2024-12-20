"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,y=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(83117),o=(n(67294),n(3905));const a={title:"Study log",slug:"/Study-Log.html",sidebar_position:10},s=void 0,i={unversionedId:"Run_your_study/Study-Log",id:"version-3.9.1/Run_your_study/Study-Log",title:"Study log",description:"JATOS stores a log file for each study (not to be confused with JATOS' log which is for the whole application). This file has a line for every relevant event that happened in a study, most importantly when a component result was saved, exported or deleted. Also, it contains a hash - a string that is generated by the contents of the result data itself. This, in principle, would allow any JATOS user to show that the data have not been modified, and that no result was deleted between data collection and publication.",source:"@site/versioned_docs/version-3.9.1/Run_your_study/Study-Log.md",sourceDirName:"Run_your_study",slug:"/Study-Log.html",permalink:"/Study-Log.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Run_your_study/Study-Log.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1734681997,formattedLastUpdatedAt:"Dec 20, 2024",sidebarPosition:10,frontMatter:{title:"Study log",slug:"/Study-Log.html",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"End page - After your study finished",permalink:"/End-page-after-your-study-finished.html"},next:{title:"Tips & tricks",permalink:"/Tips-and-Tricks.html"}},l={},d=[],u={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JATOS stores a log file for each study (not to be confused with ",(0,o.kt)("a",{parentName:"p",href:"Troubleshooting.html#read-log-file-in-the-browser"},"JATOS' log")," which is for the whole application). This file has a line for every relevant event that happened in a study, most importantly when a component result was saved, exported or deleted. Also, it contains a hash - a string that is generated by the contents of the result data itself. This, in principle, would allow any JATOS user to show that the data have not been modified, and that no result was deleted between data collection and publication. "),(0,o.kt)("p",null,"You can see the log by clicking on ",(0,o.kt)("strong",{parentName:"p"},"More")," in the study toolbar and then ",(0,o.kt)("strong",{parentName:"p"},"Study log"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Log button",src:n(38059).Z,width:"1920",height:"366"})),(0,o.kt)("p",null,"Then the log looks similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Log pretty",src:n(80810).Z,width:"1920",height:"1066"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A few more details:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The study log won't be necessary in most cases. Just nice to have. Just in case."),(0,o.kt)("li",{parentName:"ul"},"In the GUI you will see only the ",(0,o.kt)("strong",{parentName:"li"},"last 100 entries")," of the study log but you can get the whole log by downloading it. In the GUI the log is in ",(0,o.kt)("strong",{parentName:"li"},"reversed")," order - the downloaded one has normal order."),(0,o.kt)("li",{parentName:"ul"},"The following events are logged: ",(0,o.kt)("strong",{parentName:"li"},"create/delete study"),", ",(0,o.kt)("strong",{parentName:"li"},"run/finish study"),", ",(0,o.kt)("strong",{parentName:"li"},"store result data"),", ",(0,o.kt)("strong",{parentName:"li"},"upload result file"),", ",(0,o.kt)("strong",{parentName:"li"},"export result data")),(0,o.kt)("li",{parentName:"ul"},"In case of storing result data or uploading a result file a hash of the data is logged. Since a hash changes if a result is altered or deleted, this can prove ",(0,o.kt)("strong",{parentName:"li"},"data integrity")," should it ever being questioned."),(0,o.kt)("li",{parentName:"ul"},"The study log is only as safe as the server machine on which JATOS is running. Anybody with access to the server can potentially modify the study log file and e.g. hide that data has been deleted. We can't prevent this, so it's important to have a safe server that only admins can access."),(0,o.kt)("li",{parentName:"ul"},"The study log is in JSON format. Choose between ",(0,o.kt)("strong",{parentName:"li"},"pretty")," (like in the screenshot above) or ",(0,o.kt)("strong",{parentName:"li"},"raw"),".")))}p.isMDXComponent=!0},38059:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/study_log_button-2307d00f61438669525c47bce2e798a7.png"},80810:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/study_log_pretty-bc2af7435513e7207e404965959f3080.png"}}]);