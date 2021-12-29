"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1094],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),y=a,f=c["".concat(d,".").concat(y)]||c[y]||l[y]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3392:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={title:"End page - After your study finished",slug:"/End-page-after-your-study-finished.html",sidebar_position:10},d=void 0,u={unversionedId:"Run_your_study/End-page-after-your-study-finished",id:"Run_your_study/End-page-after-your-study-finished",title:"End page - After your study finished",description:"1. Default",source:"@site/docs/Run_your_study/End-page-after-your-study-finished.md",sourceDirName:"Run_your_study",slug:"/End-page-after-your-study-finished.html",permalink:"/3.7.1/End-page-after-your-study-finished.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Run_your_study/End-page-after-your-study-finished.md",tags:[],version:"current",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1640814672,formattedLastUpdatedAt:"12/29/2021",sidebarPosition:10,frontMatter:{title:"End page - After your study finished",slug:"/End-page-after-your-study-finished.html",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Manage Results",permalink:"/3.7.1/Manage-Results.html"},next:{title:"Study Log",permalink:"/3.7.1/Study-Log.html"}},p=[{value:"1. Default",id:"1-default",children:[],level:3},{value:"2. endPage.html",id:"2-endpagehtml",children:[],level:3},{value:"3. Study Properties&#39; End Redirect URL",id:"3-study-properties-end-redirect-url",children:[],level:3},{value:"4. <code>jatos.endStudyAndRedirect</code> or <code>jatos.endStudyAjax</code>",id:"4-jatosendstudyandredirect-or-jatosendstudyajax",children:[],level:3}],l={toc:p};function c(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-default"},"1. Default"),(0,o.kt)("p",null,'By default JATOS just shows the text "',(0,o.kt)("strong",{parentName:"p"},"This study is finished. Thank you for your participation."),'" in English language, with no special formatting, after a study finshed. Maybe you want a different language or add a logo and different text or styling, then read on.'),(0,o.kt)("h3",{id:"2-endpagehtml"},"2. endPage.html"),(0,o.kt)("p",null,"If you include a file named '",(0,o.kt)("em",{parentName:"p"},"endPage.html"),"' in your study assets folder along with your other study's files, JATOS will automatically redirect to this page after the study finished."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hint 1:")," Be aware that in the '",(0,o.kt)("em",{parentName:"p"},"endPage.html"),"' you cannot load or use any other files from the study assets folder. Because the study is already finished, JATOS won't allow you to access any other file from this folder, or from any of the JATOS sessions (study, batch and group) out of security reasons. Of course this doesn't prevent you from loading images or libraries (or any other resource) directly from the internet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hint 2:")," If you run the study with an ",(0,o.kt)("strong",{parentName:"p"},"MTurk Worker")," then you probably want to show the confirmation code to your worker. This is passed on to the ",(0,o.kt)("em",{parentName:"p"},"endPage.html")," in a cookie with the name ",(0,o.kt)("em",{parentName:"p"},"JATOS_CONFIRMATION_CODE"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hint 3:")," If you run your study with the ",(0,o.kt)("strong",{parentName:"p"},"JATOS GUI")," it won't show you the ",(0,o.kt)("em",{parentName:"p"},"endPage.html")," but redirect you back to JATOS' GUI instead."),(0,o.kt)("h3",{id:"3-study-properties-end-redirect-url"},"3. Study Properties' End Redirect URL"),(0,o.kt)("p",null,"Maybe you want to redirect to a different page, e.g. a Prolific's end page or your department's webpage. This you can do by putting the URL of that page into the study properties in JATOS' GUI. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot",src:r(5757).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hint:")," If you run the study with an ",(0,o.kt)("strong",{parentName:"p"},"MTurk Worker")," then you probably want to show the confirmation code to your worker. This is passed on as an URL query parameter ",(0,o.kt)("em",{parentName:"p"},"confirmationCode"),"."),(0,o.kt)("p",null,"You can pass on arguments from the original study link URL to redirect URL. Squared brackets in the ",(0,o.kt)("em",{parentName:"p"},"End Redirect URL")," indicate that the string between those brackets is a parameter from the original study run link URL and let JATOS replace the the whole ",(0,o.kt)("em",{parentName:"p"},"[string]")," by the value of the parameter."),(0,o.kt)("p",null,"E.g."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Study run link URL:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"http://myjatosdomain/publix/1/start?batchId=1&personalSingleWorkerId=1234&SONA_ID=123abc\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"End Redirect URL")," put in JATOS, in study properties:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"https://rug.sona-systems.com/webstudy_credit.aspx?experiment_id=123&credit_token=1234567&survey_code=[SONA_ID]\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then JATOS will after a study finished automatically replace ","[SONA_ID]"," with ",(0,o.kt)("em",{parentName:"p"},"123abc")," and redirect to:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"https://rug.sona-systems.com/webstudy_credit.aspx?experiment_id=123&credit_token=1234567&survey_code=123abc\n")))),(0,o.kt)("h3",{id:"4-jatosendstudyandredirect-or-jatosendstudyajax"},"4. ",(0,o.kt)("inlineCode",{parentName:"h3"},"jatos.endStudyAndRedirect")," or ",(0,o.kt)("inlineCode",{parentName:"h3"},"jatos.endStudyAjax")),(0,o.kt)("p",null,"If you want to determine dynamically (i.e. in the JavaScript) the address of the webpage that your participants see after finishing a study, you can use one of the two ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," functions ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect"))," or ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyajax"},(0,o.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAjax"))," in the JavaScript of your study's ",(0,o.kt)("strong",{parentName:"p"},"last component"),". This is the most versatile way."))}c.isMDXComponent=!0},5757:function(e,t,r){t.Z=r.p+"assets/images/Screenshot_end-redirect-url-c3520fefdf5d82a83a5a68b0138c8ad9.png"}}]);