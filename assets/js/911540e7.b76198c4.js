"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4821],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=u(n),h=o,y=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(y,i(i({ref:e},d),{},{components:n})):r.createElement(y,i({ref:e},d))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5158:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={title:"Study Log",slug:"/Study-Log.html",sidebar_position:10},i=void 0,s={unversionedId:"Run_your_study/Study-Log",id:"Run_your_study/Study-Log",title:"Study Log",description:"JATOS stores a log file for each study (not to be confused with JATOS' log which is for the whole application). This file has a line for every relevant event that happened in a study, most importantly when a component result was saved, exported or deleted. Also, it contains a hash - a string that is generated by the contents of the result data itself. This, in principle, would allow any JATOS user to show that the data have not been modified, and that no result was deleted between data collection and publication.",source:"@site/docs/Run_your_study/Study-Log.md",sourceDirName:"Run_your_study",slug:"/Study-Log.html",permalink:"/next/Study-Log.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Run_your_study/Study-Log.md",tags:[],version:"current",lastUpdatedBy:"kristian",lastUpdatedAt:1689006029,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:10,frontMatter:{title:"Study Log",slug:"/Study-Log.html",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"End page - After your study finished",permalink:"/next/End-page-after-your-study-finished.html"},next:{title:"Tips & Tricks",permalink:"/next/Tips-and-Tricks.html"}},l={},u=[],d={toc:u};function c(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JATOS stores a log file for each study (not to be confused with ",(0,o.kt)("a",{parentName:"p",href:"Troubleshooting.html#read-log-file-in-the-browser"},"JATOS' log")," which is for the whole application). This file has a line for every relevant event that happened in a study, most importantly when a component result was saved, exported or deleted. Also, it contains a hash - a string that is generated by the contents of the result data itself. This, in principle, would allow any JATOS user to show that the data have not been modified, and that no result was deleted between data collection and publication. "),(0,o.kt)("p",null,"You can see the log by clicking on ",(0,o.kt)("strong",{parentName:"p"},"More")," in the study toolbar and then ",(0,o.kt)("strong",{parentName:"p"},"Study Log"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Log button",src:n(5909).Z,width:"1919",height:"442"})),(0,o.kt)("p",null,"Then the log looks similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Log pretty",src:n(4807).Z,width:"1901",height:"806"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A few more details:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The study log won't be necessary in most cases. Just nice to have. Just in case."),(0,o.kt)("li",{parentName:"ul"},"In the GUI you will see only the ",(0,o.kt)("strong",{parentName:"li"},"last 100 entries")," of the study log but you can get the whole log by downloading it. In the GUI the log is in ",(0,o.kt)("strong",{parentName:"li"},"reversed")," order - the downloaded one has normal order."),(0,o.kt)("li",{parentName:"ul"},"The following events are logged: ",(0,o.kt)("strong",{parentName:"li"},"create/delete study"),", ",(0,o.kt)("strong",{parentName:"li"},"run/finish study"),", ",(0,o.kt)("strong",{parentName:"li"},"store result data"),", ",(0,o.kt)("strong",{parentName:"li"},"upload result file"),", ",(0,o.kt)("strong",{parentName:"li"},"export result data")),(0,o.kt)("li",{parentName:"ul"},"In case of storing result data or uploading a result file a hash of the data is logged. Since a hash changes if a result is altered or deleted, this can prove ",(0,o.kt)("strong",{parentName:"li"},"data integrity")," should it ever being questioned."),(0,o.kt)("li",{parentName:"ul"},"The study log is only as safe as the server machine on which JATOS is running. Anybody with access to the server can potentially modify the study log file and e.g. hide that data has been deleted. We can't prevent this, so it's important to have a safe server that only admins can access."),(0,o.kt)("li",{parentName:"ul"},"The study log is in JSON format. Choose between ",(0,o.kt)("strong",{parentName:"li"},"pretty")," (like in the screenshot above) or ",(0,o.kt)("strong",{parentName:"li"},"raw"),".")))}c.isMDXComponent=!0},5909:function(t,e,n){e.Z=n.p+"assets/images/study_log_button_371-e9fb2e8f06972dd3e7dc8a4c23f984d4.png"},4807:function(t,e,n){e.Z=n.p+"assets/images/study_log_pretty_371-19bdcb8d2404a21500781d7be7861b83.png"}}]);