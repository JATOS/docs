"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7112],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2731:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905));const i={title:"Use Prolific",slug:"/Use-Prolific.html",sidebar_position:7},o=void 0,s={unversionedId:"Run_your_study/Use-Prolific",id:"version-3.6.1/Run_your_study/Use-Prolific",title:"Use Prolific",description:"It is very easy to use JATOS together with Prolific to recruit participants.",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Use-Prolific.md",sourceDirName:"Run_your_study",slug:"/Use-Prolific.html",permalink:"/3.6.x/Use-Prolific.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Run_your_study/Use-Prolific.md",tags:[],version:"3.6.1",lastUpdatedBy:"kristian",lastUpdatedAt:1683230795,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:7,frontMatter:{title:"Use Prolific",slug:"/Use-Prolific.html",sidebar_position:7},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Use MTurk",permalink:"/3.6.x/Connect-to-Mechanical-Turk.html"},next:{title:"Write cross-sectional and longitudinal studies",permalink:"/3.6.x/Cross-sectional-and-longitudinal-studies.html"}},l={},p=[{value:"1. Enter your JATOS study link",id:"1-enter-your-jatos-study-link",level:2},{value:"2. (Optional) Consider passing Prolific URL parameters to your study",id:"2-optional-consider-passing-prolific-url-parameters-to-your-study",level:2},{value:"3. Redirect to Prolific&#39;s end page after the study is done",id:"3-redirect-to-prolifics-end-page-after-the-study-is-done",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is very easy to use JATOS together with ",(0,a.kt)("a",{parentName:"p",href:"https://www.prolific.co/"},"Prolific")," to recruit participants. "),(0,a.kt)("p",null,"This is what the ",(0,a.kt)("em",{parentName:"p"},"New Study")," page in Prolific looks like:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Prolific screenshot",src:r(3478).Z,width:"1366",height:"751"})),(0,a.kt)("h2",{id:"1-enter-your-jatos-study-link"},"1. Enter your JATOS study link"),(0,a.kt)("p",null,"In the field under ",(0,a.kt)("em",{parentName:"p"},"What is the URL of your study?")," (first red box in the screenshot), enter a link to your JATOS study.You probably want a link to either a ",(0,a.kt)("em",{parentName:"p"},"General Single")," or a ",(0,a.kt)("em",{parentName:"p"},"General Multiple")," worker type (see ",(0,a.kt)("a",{parentName:"p",href:"Worker-Types.html"},"JATOS' worker types")," and ",(0,a.kt)("a",{parentName:"p",href:"Run-your-Study-with-Worker-and-Batch-Manager.html"},"Run your Study with Worker & Batch Manager"),")."),(0,a.kt)("h2",{id:"2-optional-consider-passing-prolific-url-parameters-to-your-study"},"2. (Optional) Consider passing Prolific URL parameters to your study"),(0,a.kt)("p",null,"Prolific allows you to pass the parameters PROLIFIC PID, STUDY ID, and SESSION ID as URL parameters. Click on 'Show advanced' and then 'Add parameters' like in the screenshot."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Prolific screenshot",src:r(8095).Z,width:"3774",height:"2526"})),(0,a.kt)("p",null,"Then you can access those URL parameters in your study's JavaScript via ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#original-url-query-parameters"},"jatos.urlQueryParameters"),"."),(0,a.kt)("h2",{id:"3-redirect-to-prolifics-end-page-after-the-study-is-done"},"3. Redirect to Prolific's end page after the study is done"),(0,a.kt)("p",null,"The second red box contains a link that will (re)direct the participant to a Prolific page, with information on how to claim their payment."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Choose one of the three ways")," (differ in JATOS version and your preferences)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Include ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyajax"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAjax"))," in the JavaScript of your ",(0,a.kt)("strong",{parentName:"p"},"last")," component (works with ",(0,a.kt)("strong",{parentName:"p"},"all JATOS versions"),")"),(0,a.kt)("p",{parentName:"li"},"All you need to do is call ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.endStudyAjax"),", and add a callback that will replace ",(0,a.kt)("inlineCode",{parentName:"p"},"window.location.href")," with the Prolific end page once the ajax call is ",(0,a.kt)("inlineCode",{parentName:"p"},"done"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"jatos.endStudyAjax().then(() => {\n  // Change this URL to the one you see in Prolific\n  window.location.href = 'https://app.prolific.co/submissions/complete?cc=1234ABCD'\n});\n")),(0,a.kt)("p",{parentName:"li"},"Of course, this can also be done together with ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.submitResultData")," if you want to store result data in JATOS:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"var result = { test: \"some results\" };\njatos.submitResultData(result)\n  .then(jatos.endStudyAjax)\n  .then(() => {\n    window.location.href = 'https://app.prolific.co/submissions/complete?cc=1234ABCD'\n});\n")),(0,a.kt)("p",{parentName:"li"},"We provide a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_examples/raw/master/examples/prolific_example.zip"},"Prolific example study")," that you can use as a template.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setup ",(0,a.kt)("strong",{parentName:"p"},"End Redirect URL")," in the Study Properties (easiest - but only ",(0,a.kt)("strong",{parentName:"p"},"since JATOS v3.5.1"),")"),(0,a.kt)("p",{parentName:"li"},"In JATOS GUI you can put the in Prolific link in the ",(0,a.kt)("strong",{parentName:"p"},"End Redirect URL")," field of your Study Properties"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"screenshot",src:r(7043).Z,width:"1906",height:"879"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Include ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect"))," in the JavaScript of your ",(0,a.kt)("strong",{parentName:"p"},"last")," component (",(0,a.kt)("strong",{parentName:"p"},"since JATOS v3.5.1"),")"),(0,a.kt)("p",{parentName:"li"},"E.g. but change this URL to the one you see in Prolific"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Change this URL the one you see in Prolific\njatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD");\n')),(0,a.kt)("p",{parentName:"li"},"You can even combine it with sending result data"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var resultData = {id: 123, data: "my important result data"};\njatos.endStudyAndRedirect("https://app.prolific.co/submissions/complete?cc=1234ABCD", resultData);\n')))))}u.isMDXComponent=!0},3478:function(e,t,r){t.Z=r.p+"assets/images/Screenshot_Prolific_create_study-97d069e806f37550f7c0c771a958fa22.png"},8095:function(e,t,r){t.Z=r.p+"assets/images/Screenshot_Prolific_query_parameter-3d35afd80565777bb63f2df155cdef8e.png"},7043:function(e,t,r){t.Z=r.p+"assets/images/Screenshot_end-redirect-url-c3520fefdf5d82a83a5a68b0138c8ad9.png"}}]);