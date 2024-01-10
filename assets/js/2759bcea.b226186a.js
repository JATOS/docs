"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1094],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=u(r),c=a,h=y["".concat(d,".").concat(c)]||y[c]||l[c]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},83392:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const o={title:"End page - After your study finished",slug:"/End-page-after-your-study-finished.html",sidebar_position:9},i=void 0,s={unversionedId:"Run_your_study/End-page-after-your-study-finished",id:"Run_your_study/End-page-after-your-study-finished",title:"End page - After your study finished",description:'By default JATOS just shows the text "This study is finished. Thank you for your participation." in English language, with no special formatting, after a study finshed. Maybe you want a different language or add a logo and different text or styling, then read on.',source:"@site/docs/Run_your_study/End-page-after-your-study-finished.md",sourceDirName:"Run_your_study",slug:"/End-page-after-your-study-finished.html",permalink:"/next/End-page-after-your-study-finished.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Run_your_study/End-page-after-your-study-finished.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1704877007,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:9,frontMatter:{title:"End page - After your study finished",slug:"/End-page-after-your-study-finished.html",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Manage Results",permalink:"/next/Manage-Results.html"},next:{title:"Study Log",permalink:"/next/Study-Log.html"}},d={},u=[{value:"1. endPage.html",id:"1-endpagehtml",level:3},{value:"2. Study Properties&#39; End Redirect URL",id:"2-study-properties-end-redirect-url",level:3},{value:"3. In JavaScript with <code>jatos.endStudyAndRedirect</code> or <code>jatos.endStudyAjax</code>",id:"3-in-javascript-with-jatosendstudyandredirect-or-jatosendstudyajax",level:3}],p={toc:u};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'By default JATOS just shows the text "',(0,a.kt)("strong",{parentName:"p"},"This study is finished. Thank you for your participation."),'" in English language, with no special formatting, after a study finshed. Maybe you want a different language or add a logo and different text or styling, then read on.'),(0,a.kt)("h3",{id:"1-endpagehtml"},"1. endPage.html"),(0,a.kt)("p",null,"If you include a file named '",(0,a.kt)("em",{parentName:"p"},"endPage.html"),"' in your study assets folder along with your other study's files, JATOS will automatically redirect to this page after the study finished."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint 1:")," Be aware that in the '",(0,a.kt)("em",{parentName:"p"},"endPage.html"),"' you cannot load or use any other files from the study assets folder. Because the study is already finished, JATOS won't allow you to access any other file from this folder, or from any of the JATOS sessions (study, batch and group) out of security reasons. Of course this doesn't prevent you from loading images or libraries (or any other resource) directly from the internet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint 2:")," If you run the study with an ",(0,a.kt)("strong",{parentName:"p"},"MTurk Worker")," then you probably want to show the confirmation code to your worker. This is passed on to the ",(0,a.kt)("em",{parentName:"p"},"endPage.html")," in a cookie with the name ",(0,a.kt)("em",{parentName:"p"},"JATOS_CONFIRMATION_CODE"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint 3:")," If you run your study with the ",(0,a.kt)("strong",{parentName:"p"},"JATOS GUI (Run button)")," it won't show you the ",(0,a.kt)("em",{parentName:"p"},"endPage.html")," but redirect you back to JATOS' GUI instead."),(0,a.kt)("h3",{id:"2-study-properties-end-redirect-url"},"2. Study Properties' End Redirect URL"),(0,a.kt)("p",null,"Maybe you want to redirect to a different page, e.g. a Prolific's end page or your department's webpage. This you can do by putting the URL of that page into the study properties in JATOS' GUI. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot",src:r(87043).Z,width:"1906",height:"879"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hint:")," If you run the study with an ",(0,a.kt)("strong",{parentName:"p"},"MTurk Worker")," then you probably want to show the confirmation code to your worker. This is passed on as an URL query parameter ",(0,a.kt)("em",{parentName:"p"},"confirmationCode"),"."),(0,a.kt)("p",null,"You can pass on arguments from the original study link URL to redirect URL. Squared brackets in the ",(0,a.kt)("em",{parentName:"p"},"End Redirect URL")," indicate that the string between those brackets is a parameter from the original study run link URL and let JATOS replace the the whole ",(0,a.kt)("em",{parentName:"p"},"[string]")," by the value of the parameter."),(0,a.kt)("p",null,"E.g."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If your study link is:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"http://myjatosdomain/publix/v6UkpHR8Sfu?SONA_ID=123abc\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"And your ",(0,a.kt)("em",{parentName:"p"},"End Redirect URL")," (in study properties):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"https://rug.sona-systems.com/webstudy_credit.aspx?experiment_id=123&credit_token=1234567&survey_code=[SONA_ID]\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then JATOS will after a study finished automatically replace ","[SONA_ID]"," with ",(0,a.kt)("em",{parentName:"p"},"123abc")," and redirect to:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"https://rug.sona-systems.com/webstudy_credit.aspx?experiment_id=123&credit_token=1234567&survey_code=123abc\n")))),(0,a.kt)("h3",{id:"3-in-javascript-with-jatosendstudyandredirect-or-jatosendstudyajax"},"3. In JavaScript with ",(0,a.kt)("inlineCode",{parentName:"h3"},"jatos.endStudyAndRedirect")," or ",(0,a.kt)("inlineCode",{parentName:"h3"},"jatos.endStudyAjax")),(0,a.kt)("p",null,"If you want to determine dynamically (i.e. in JavaScript) the address of the webpage that your participants see after finishing a study, you can use one of the two ",(0,a.kt)("em",{parentName:"p"},"jatos.js")," functions ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect"))," or ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyajax"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAjax"))," in the JavaScript of your study's ",(0,a.kt)("strong",{parentName:"p"},"last component"),". This is the most versatile way."))}l.isMDXComponent=!0},87043:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Screenshot_end-redirect-url-c3520fefdf5d82a83a5a68b0138c8ad9.png"}}]);