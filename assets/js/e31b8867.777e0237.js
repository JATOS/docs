"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?i.createElement(y,a(a({ref:t},u),{},{components:r})):i.createElement(y,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(83117),n=(r(67294),r(3905));const o={title:"Use Prolific",slug:"/Use-Prolific.html",sidebar_position:6},a=void 0,s={unversionedId:"Run_your_study/Use-Prolific",id:"Run_your_study/Use-Prolific",title:"Use Prolific",description:"It is very easy to use JATOS together with Prolific to recruit participants.",source:"@site/docs/Run_your_study/Use-Prolific.md",sourceDirName:"Run_your_study",slug:"/Use-Prolific.html",permalink:"/next/Use-Prolific.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Run_your_study/Use-Prolific.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1731093692,formattedLastUpdatedAt:"Nov 8, 2024",sidebarPosition:6,frontMatter:{title:"Use Prolific",slug:"/Use-Prolific.html",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Use MTurk",permalink:"/next/Connect-to-Mechanical-Turk.html"},next:{title:"Write cross-sectional and longitudinal studies",permalink:"/next/Cross-sectional-and-longitudinal-studies.html"}},l={},c=[{value:"1. In Prolific: Enter your JATOS study link",id:"1-in-prolific-enter-your-jatos-study-link",level:3},{value:"2. In JATOS: Redirect to Prolific&#39;s end page after the study is done",id:"2-in-jatos-redirect-to-prolifics-end-page-after-the-study-is-done",level:3},{value:"Bonus (Optional)",id:"bonus-optional",level:2},{value:"1. Consider passing Prolific URL parameters to your study",id:"1-consider-passing-prolific-url-parameters-to-your-study",level:3},{value:"2. Consider redirecting participants from within JS",id:"2-consider-redirecting-participants-from-within-js",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is very easy to use JATOS together with ",(0,n.kt)("a",{parentName:"p",href:"https://www.prolific.co/"},"Prolific")," to recruit participants. "),(0,n.kt)("p",null,"It's pretty simple: To connect JATOS with Prolific, you have to (1) tell Prolific where to send participants to run the JATOS study and (2) tell JATOS  where to send people back to Prolific, so they get paid when they finish the study. "),(0,n.kt)("p",null,"First, find your ",(0,n.kt)("em",{parentName:"p"},"Project")," page in Prolific. "),(0,n.kt)("h3",{id:"1-in-prolific-enter-your-jatos-study-link"},"1. In Prolific: Enter your JATOS study link"),(0,n.kt)("p",null,"Here is a screenshot of how it looks in Prolific:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prolific screenshot",src:r(76863).Z,width:"2224",height:"1026"})),(0,n.kt)("p",null,"In the field under ",(0,n.kt)("em",{parentName:"p"},"What is the URL of your study?")," (in the screenshot above), enter a link to your JATOS study. You probably want a study link of either ",(0,n.kt)("em",{parentName:"p"},"General Single")," or a ",(0,n.kt)("em",{parentName:"p"},"General Multiple")," type (see ",(0,n.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html"},"Run your Study with Study Links"),")."),(0,n.kt)("p",null,"Also, we recommend you click the option that you'll use URL parameters. This will modify the JATOS study link you entered -- that's fine. "),(0,n.kt)("h3",{id:"2-in-jatos-redirect-to-prolifics-end-page-after-the-study-is-done"},"2. In JATOS: Redirect to Prolific's end page after the study is done"),(0,n.kt)("p",null,"Get the redirect link from your ",(0,n.kt)("em",{parentName:"p"},"Project")," page in Prolific\u2026: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prolific screenshot",src:r(27758).Z,width:"2196",height:"750"})),(0,n.kt)("p",null,"And copy it into the ",(0,n.kt)("strong",{parentName:"p"},"End Redirect URL")," field of your Study Properties in JATOS: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"screenshot",src:r(32956).Z,width:"1920",height:"964"})),(0,n.kt)("h2",{id:"bonus-optional"},"Bonus (Optional)"),(0,n.kt)("p",null,"You can connect JATOS and Prolific programmatically through query parameters and JS. "),(0,n.kt)("h3",{id:"1-consider-passing-prolific-url-parameters-to-your-study"},"1. Consider passing Prolific URL parameters to your study"),(0,n.kt)("p",null,'Prolific allows you to pass the parameters PROLIFIC PID, STUDY ID, and SESSION ID as URL parameters. You just need to make sure you cliked the radio button "I\'ll use URL parameters on Prolific" (see the screenshot from point 1). '),(0,n.kt)("p",null,"You will then be able to access those URL parameters in your study's JavaScript via ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosurlqueryparameters"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.urlQueryParameters")),"."),(0,n.kt)("h3",{id:"2-consider-redirecting-participants-from-within-js"},"2. Consider redirecting participants from within JS"),(0,n.kt)("p",null,"Step 2 above, where you use the JATOS GUI to tell JATOS about the redirect link to Prolific, is the easiest and recommended. In some cases you might want to do with within your JS. "),(0,n.kt)("p",null,"With ",(0,n.kt)("em",{parentName:"p"},"jatos.js"),": Include ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect"))," in the JavaScript of your ",(0,n.kt)("strong",{parentName:"p"},"last")," component"),(0,n.kt)("p",null,"   E.g. but change this URL to the one you see in Prolific"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'jatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD");\n')),(0,n.kt)("p",null,"   You can combine it with sending result data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var resultData = {id: 123, data: "my important result data"};\njatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD", resultData);\n')))}p.isMDXComponent=!0},76863:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/prolific_1_studyurl-3928c6768352f3a4e0b7dd1f51f22634.png"},27758:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/prolific_2_redirectlink-836de04447219496c7bee0335e7117a0.png"},32956:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/end-redirect-url-c900c77b5f28391c72e9ff0f3ea2052e.png"}}]);