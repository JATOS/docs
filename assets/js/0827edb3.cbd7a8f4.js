"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const i={title:"Use Prolific",slug:"/Use-Prolific.html",sidebar_position:7},o=void 0,s={unversionedId:"Run_your_study/Use-Prolific",id:"version-3.6.1/Run_your_study/Use-Prolific",title:"Use Prolific",description:"It is very easy to use JATOS together with Prolific to recruit participants.",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Use-Prolific.md",sourceDirName:"Run_your_study",slug:"/Use-Prolific.html",permalink:"/3.6.x/Use-Prolific.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.6.1/Run_your_study/Use-Prolific.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1694072427,formattedLastUpdatedAt:"Sep 7, 2023",sidebarPosition:7,frontMatter:{title:"Use Prolific",slug:"/Use-Prolific.html",sidebar_position:7},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Use MTurk",permalink:"/3.6.x/Connect-to-Mechanical-Turk.html"},next:{title:"Write cross-sectional and longitudinal studies",permalink:"/3.6.x/Cross-sectional-and-longitudinal-studies.html"}},l={},p=[{value:"1. Enter your JATOS study link",id:"1-enter-your-jatos-study-link",level:2},{value:"2. (Optional) Consider passing Prolific URL parameters to your study",id:"2-optional-consider-passing-prolific-url-parameters-to-your-study",level:2},{value:"3. Redirect to Prolific&#39;s end page after the study is done",id:"3-redirect-to-prolifics-end-page-after-the-study-is-done",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is very easy to use JATOS together with ",(0,n.kt)("a",{parentName:"p",href:"https://www.prolific.co/"},"Prolific")," to recruit participants. "),(0,n.kt)("p",null,"This is what the ",(0,n.kt)("em",{parentName:"p"},"New Study")," page in Prolific looks like:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prolific screenshot",src:r(33478).Z,width:"1366",height:"751"})),(0,n.kt)("h2",{id:"1-enter-your-jatos-study-link"},"1. Enter your JATOS study link"),(0,n.kt)("p",null,"In the field under ",(0,n.kt)("em",{parentName:"p"},"What is the URL of your study?")," (first red box in the screenshot), enter a link to your JATOS study.You probably want a link to either a ",(0,n.kt)("em",{parentName:"p"},"General Single")," or a ",(0,n.kt)("em",{parentName:"p"},"General Multiple")," worker type (see ",(0,n.kt)("a",{parentName:"p",href:"Worker-Types.html"},"JATOS' worker types")," and ",(0,n.kt)("a",{parentName:"p",href:"Run-your-Study-with-Worker-and-Batch-Manager.html"},"Run your Study with Worker & Batch Manager"),")."),(0,n.kt)("h2",{id:"2-optional-consider-passing-prolific-url-parameters-to-your-study"},"2. (Optional) Consider passing Prolific URL parameters to your study"),(0,n.kt)("p",null,"Prolific allows you to pass the parameters PROLIFIC PID, STUDY ID, and SESSION ID as URL parameters. Click on 'Show advanced' and then 'Add parameters' like in the screenshot."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Prolific screenshot",src:r(28095).Z,width:"3774",height:"2526"})),(0,n.kt)("p",null,"Then you can access those URL parameters in your study's JavaScript via ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#original-url-query-parameters"},"jatos.urlQueryParameters"),"."),(0,n.kt)("h2",{id:"3-redirect-to-prolifics-end-page-after-the-study-is-done"},"3. Redirect to Prolific's end page after the study is done"),(0,n.kt)("p",null,"The second red box contains a link that will (re)direct the participant to a Prolific page, with information on how to claim their payment."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Choose one of the three ways")," (differ in JATOS version and your preferences)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Include ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyajax"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAjax"))," in the JavaScript of your ",(0,n.kt)("strong",{parentName:"p"},"last")," component (works with ",(0,n.kt)("strong",{parentName:"p"},"all JATOS versions"),")"),(0,n.kt)("p",{parentName:"li"},"All you need to do is call ",(0,n.kt)("inlineCode",{parentName:"p"},"jatos.endStudyAjax"),", and add a callback that will replace ",(0,n.kt)("inlineCode",{parentName:"p"},"window.location.href")," with the Prolific end page once the ajax call is ",(0,n.kt)("inlineCode",{parentName:"p"},"done"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},"jatos.endStudyAjax().then(() => {\n  // Change this URL to the one you see in Prolific\n  window.location.href = 'https://app.prolific.co/submissions/complete?cc=1234ABCD'\n});\n")),(0,n.kt)("p",{parentName:"li"},"Of course, this can also be done together with ",(0,n.kt)("inlineCode",{parentName:"p"},"jatos.submitResultData")," if you want to store result data in JATOS:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-JavaScript"},"var result = { test: \"some results\" };\njatos.submitResultData(result)\n  .then(jatos.endStudyAjax)\n  .then(() => {\n    window.location.href = 'https://app.prolific.co/submissions/complete?cc=1234ABCD'\n});\n")),(0,n.kt)("p",{parentName:"li"},"We provide a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_examples/raw/main/examples/prolific_example.zip"},"Prolific example study")," that you can use as a template.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Setup ",(0,n.kt)("strong",{parentName:"p"},"End Redirect URL")," in the Study Properties (easiest - but only ",(0,n.kt)("strong",{parentName:"p"},"since JATOS v3.5.1"),")"),(0,n.kt)("p",{parentName:"li"},"In JATOS GUI you can put the in Prolific link in the ",(0,n.kt)("strong",{parentName:"p"},"End Redirect URL")," field of your Study Properties"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"screenshot",src:r(87043).Z,width:"1906",height:"879"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Include ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect"))," in the JavaScript of your ",(0,n.kt)("strong",{parentName:"p"},"last")," component (",(0,n.kt)("strong",{parentName:"p"},"since JATOS v3.5.1"),")"),(0,n.kt)("p",{parentName:"li"},"E.g. but change this URL to the one you see in Prolific"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'// Change this URL the one you see in Prolific\njatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD");\n')),(0,n.kt)("p",{parentName:"li"},"You can even combine it with sending result data"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'var resultData = {id: 123, data: "my important result data"};\njatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD", resultData);\n')))))}d.isMDXComponent=!0},33478:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Screenshot_Prolific_create_study-97d069e806f37550f7c0c771a958fa22.png"},28095:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Screenshot_Prolific_query_parameter-3d35afd80565777bb63f2df155cdef8e.png"},87043:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Screenshot_end-redirect-url-c3520fefdf5d82a83a5a68b0138c8ad9.png"}}]);