"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[598],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,y=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={title:"Study Log",slug:"/Study-Log.html",sidebar_position:10},i=void 0,s={unversionedId:"Run_your_study/Study-Log",id:"version-3.8.1/Run_your_study/Study-Log",title:"Study Log",description:"JATOS stores a log file for each study (not to be confused with JATOS' log which is for the whole application). This file has a line for every relevant event that happened in a study, most importantly when a component result was saved, exported or deleted. Also, it contains a hash - a string that is generated by the contents of the result data itself. This, in principle, would allow any JATOS user to show that the data have not been modified, and that no result was deleted between data collection and publication.",source:"@site/versioned_docs/version-3.8.1/Run_your_study/Study-Log.md",sourceDirName:"Run_your_study",slug:"/Study-Log.html",permalink:"/Study-Log.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Run_your_study/Study-Log.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1689240936,formattedLastUpdatedAt:"Jul 13, 2023",sidebarPosition:10,frontMatter:{title:"Study Log",slug:"/Study-Log.html",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"End page - After your study finished",permalink:"/End-page-after-your-study-finished.html"},next:{title:"Tips & Tricks",permalink:"/Tips-and-Tricks.html"}},l={},u=[],d={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JATOS stores a log file for each study (not to be confused with ",(0,o.kt)("a",{parentName:"p",href:"Troubleshooting.html#read-log-file-in-the-browser"},"JATOS' log")," which is for the whole application). This file has a line for every relevant event that happened in a study, most importantly when a component result was saved, exported or deleted. Also, it contains a hash - a string that is generated by the contents of the result data itself. This, in principle, would allow any JATOS user to show that the data have not been modified, and that no result was deleted between data collection and publication. "),(0,o.kt)("p",null,"You can see the log by clicking on ",(0,o.kt)("strong",{parentName:"p"},"More")," in the study toolbar and then ",(0,o.kt)("strong",{parentName:"p"},"Study Log"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Log button",src:n(5909).Z,width:"1919",height:"442"})),(0,o.kt)("p",null,"Then the log looks similar to this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Log pretty",src:n(4807).Z,width:"1901",height:"806"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A few more details:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The study log won't be necessary in most cases. Just nice to have. Just in case."),(0,o.kt)("li",{parentName:"ul"},"In the GUI you will see only the ",(0,o.kt)("strong",{parentName:"li"},"last 100 entries")," of the study log but you can get the whole log by downloading it. In the GUI the log is in ",(0,o.kt)("strong",{parentName:"li"},"reversed")," order - the downloaded one has normal order."),(0,o.kt)("li",{parentName:"ul"},"The following events are logged: ",(0,o.kt)("strong",{parentName:"li"},"create/delete study"),", ",(0,o.kt)("strong",{parentName:"li"},"run/finish study"),", ",(0,o.kt)("strong",{parentName:"li"},"store result data"),", ",(0,o.kt)("strong",{parentName:"li"},"upload result file"),", ",(0,o.kt)("strong",{parentName:"li"},"export result data")),(0,o.kt)("li",{parentName:"ul"},"In case of storing result data or uploading a result file a hash of the data is logged. Since a hash changes if a result is altered or deleted, this can prove ",(0,o.kt)("strong",{parentName:"li"},"data integrity")," should it ever being questioned."),(0,o.kt)("li",{parentName:"ul"},"The study log is only as safe as the server machine on which JATOS is running. Anybody with access to the server can potentially modify the study log file and e.g. hide that data has been deleted. We can't prevent this, so it's important to have a safe server that only admins can access."),(0,o.kt)("li",{parentName:"ul"},"The study log is in JSON format. Choose between ",(0,o.kt)("strong",{parentName:"li"},"pretty")," (like in the screenshot above) or ",(0,o.kt)("strong",{parentName:"li"},"raw"),".")))}c.isMDXComponent=!0},5909:function(e,t,n){t.Z=n.p+"assets/images/study_log_button_371-e9fb2e8f06972dd3e7dc8a4c23f984d4.png"},4807:function(e,t,n){t.Z=n.p+"assets/images/study_log_pretty_371-19bdcb8d2404a21500781d7be7861b83.png"}}]);