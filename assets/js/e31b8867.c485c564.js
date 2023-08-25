"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const i={title:"Use Prolific",slug:"/Use-Prolific.html",sidebar_position:6},o=void 0,s={unversionedId:"Run_your_study/Use-Prolific",id:"Run_your_study/Use-Prolific",title:"Use Prolific",description:"It is very easy to use JATOS together with Prolific to recruit participants.",source:"@site/docs/Run_your_study/Use-Prolific.md",sourceDirName:"Run_your_study",slug:"/Use-Prolific.html",permalink:"/next/Use-Prolific.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Run_your_study/Use-Prolific.md",tags:[],version:"current",lastUpdatedBy:"kristian",lastUpdatedAt:1692977229,formattedLastUpdatedAt:"Aug 25, 2023",sidebarPosition:6,frontMatter:{title:"Use Prolific",slug:"/Use-Prolific.html",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Use MTurk",permalink:"/next/Connect-to-Mechanical-Turk.html"},next:{title:"Write cross-sectional and longitudinal studies",permalink:"/next/Cross-sectional-and-longitudinal-studies.html"}},l={},c=[{value:"1. Enter your JATOS study link",id:"1-enter-your-jatos-study-link",level:3},{value:"2. (Optional) Consider passing Prolific URL parameters to your study",id:"2-optional-consider-passing-prolific-url-parameters-to-your-study",level:3},{value:"3. Redirect to Prolific&#39;s end page after the study is done",id:"3-redirect-to-prolifics-end-page-after-the-study-is-done",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is very easy to use JATOS together with ",(0,a.kt)("a",{parentName:"p",href:"https://www.prolific.co/"},"Prolific")," to recruit participants. "),(0,a.kt)("p",null,"This is what the ",(0,a.kt)("em",{parentName:"p"},"New Study")," page in Prolific looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Prolific screenshot",src:r(33478).Z,width:"1366",height:"751"})),(0,a.kt)("h3",{id:"1-enter-your-jatos-study-link"},"1. Enter your JATOS study link"),(0,a.kt)("p",null,"In the field under ",(0,a.kt)("em",{parentName:"p"},"What is the URL of your study?")," (first red box in the screenshot), enter a link to your JATOS study.You probably want a study link of either ",(0,a.kt)("em",{parentName:"p"},"General Single")," or a ",(0,a.kt)("em",{parentName:"p"},"General Multiple")," type (see ",(0,a.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html"},"Run your Study with Study Links"),")."),(0,a.kt)("h3",{id:"2-optional-consider-passing-prolific-url-parameters-to-your-study"},"2. (Optional) Consider passing Prolific URL parameters to your study"),(0,a.kt)("p",null,"Prolific allows you to pass the parameters PROLIFIC PID, STUDY ID, and SESSION ID as URL parameters. Click on 'Show advanced' and then 'Add parameters' like in the screenshot."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Prolific screenshot",src:r(28095).Z,width:"3774",height:"2526"})),(0,a.kt)("p",null,"Then you can access those URL parameters in your study's JavaScript via ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosurlqueryparameters"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.urlQueryParameters")),"."),(0,a.kt)("h3",{id:"3-redirect-to-prolifics-end-page-after-the-study-is-done"},"3. Redirect to Prolific's end page after the study is done"),(0,a.kt)("p",null,"The second red box contains a link that will (re)direct the participant to a Prolific page, with information on how to claim their payment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Choose one of the two ways")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"With JATOS' UI (easiest and recommended): Put the Prolific link in the ",(0,a.kt)("strong",{parentName:"p"},"End Redirect URL")," field of your Study Properties"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"screenshot",src:r(87043).Z,width:"1906",height:"879"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"With ",(0,a.kt)("em",{parentName:"p"},"jatos.js"),": Include ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect"))," in the JavaScript of your ",(0,a.kt)("strong",{parentName:"p"},"last")," component"),(0,a.kt)("p",{parentName:"li"},"E.g. but change this URL to the one you see in Prolific"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'jatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD");\n')),(0,a.kt)("p",{parentName:"li"},"You can combine it with sending result data"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var resultData = {id: 123, data: "my important result data"};\njatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD", resultData);\n')))))}u.isMDXComponent=!0},33478:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Screenshot_Prolific_create_study-97d069e806f37550f7c0c771a958fa22.png"},28095:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Screenshot_Prolific_query_parameter-3d35afd80565777bb63f2df155cdef8e.png"},87043:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Screenshot_end-redirect-url-c3520fefdf5d82a83a5a68b0138c8ad9.png"}}]);