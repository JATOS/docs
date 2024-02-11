"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(n),y=o,h=c["".concat(u,".").concat(y)]||c[y]||p[y]||r;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(83117),o=(n(67294),n(3905));const r={title:"Write your own Study - Basics and Beyond",slug:"/Write-your-own-Study-Basics-and-Beyond.html",sidebar_position:2},s=void 0,i={unversionedId:"Write_your_study/Write-your-own-Study-Basics-and-Beyond",id:"version-3.8.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond",title:"Write your own Study - Basics and Beyond",description:"After you created a new study ... what comes next?",source:"@site/versioned_docs/version-3.8.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond.md",sourceDirName:"Write_your_study",slug:"/Write-your-own-Study-Basics-and-Beyond.html",permalink:"/Write-your-own-Study-Basics-and-Beyond.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1707685257,formattedLastUpdatedAt:"Feb 11, 2024",sidebarPosition:2,frontMatter:{title:"Write your own Study - Basics and Beyond",slug:"/Write-your-own-Study-Basics-and-Beyond.html",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a new study",permalink:"/Create-a-new-study.html"},next:{title:"Adapt pre written code to run it in JATOS",permalink:"/Adapt-pre-written-code-to-run-it-in-JATOS.html"}},u={},d=[{value:"Add a component",id:"add-a-component",level:2},{value:"Study assets",id:"study-assets",level:2},{value:"Mandatory lines in your components&#39; HTML",id:"mandatory-lines-in-your-components-html",level:2},{value:"Save your result data",id:"save-your-result-data",level:2},{value:"<em>jatos.js</em> Reference",id:"jatosjs-reference",level:2},{value:"Study JSON Input and Component JSON Input",id:"study-json-input-and-component-json-input",level:2},{value:"Study / Batch / Group Session",id:"study--batch--group-session",level:2},{value:"Group Studies",id:"group-studies",level:2}],l={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you ",(0,o.kt)("a",{parentName:"p",href:"Create-a-new-study.html"},"created a new study")," ... what comes next?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Developement of a JATOS study usually happens on your local JATOS: ",(0,o.kt)("a",{parentName:"strong",href:"Run-an-experiment-with-JATOS-Workflow.html"},"Run an experiment with JATOS - Workflow"))),(0,o.kt)("h2",{id:"add-a-component"},"Add a component"),(0,o.kt)("p",null,"If you have an empty study you want to add a component. A component corresponds to a webpage defined by an HTML file. A study can have more than one component - this is actually a strength of JATOS: e.g. one can combine different experiments into one, or easily add an survey to an existing experiment."),(0,o.kt)("p",null,"To add a component go to your study and click on Components -> New."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Component",src:n(57927).Z,width:"1432",height:"287"})),(0,o.kt)("p",null,"Then in the following form you define the component's properties: enter the component's title and most importantly its 'HTML file path'. This is the path to the HTML file that starts this component."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Component",src:n(73269).Z,width:"925",height:"576"})),(0,o.kt)("p",null,"Click on 'Create' and you are done. If you add more than one component you can change the order in which they run by drag-and-drop on the position button."),(0,o.kt)("h2",{id:"study-assets"},"Study assets"),(0,o.kt)("p",null,"All your files (e.g. HTML, CSS, JavaScript and media files) go into your study assets directory. That includes all component's HTML files. You can find the study assets directory in a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"study_assets_root")," in your JATOS installation directory. The study assets directory's name is defined in your study properties."),(0,o.kt)("h2",{id:"mandatory-lines-in-your-components-html"},"Mandatory lines in your components' HTML"),(0,o.kt)("p",null,"A study can have one or multiple components and each component has an HTML file associated that is defined in the component's properties."),(0,o.kt)("p",null,"Here is the absolute minimum that any component HTML file must have to run with JATOS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A link to the ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," library in the head section"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="jatos.js"><\/script>\n  </head>\n</html>   \n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The second bit is not really necessary but without defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.onLoad")," callback function you won't be able to use most of ",(0,o.kt)("em",{parentName:"p"},"jatos.js"),"' features. Of course you could start right away with any JavaScript but if you want to use ",(0,o.kt)("em",{parentName:"p"},"jatos.js"),"' variables and functions you have to wait untill ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," is finished initializing."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  jatos.onLoad(function() {\n    // Start here with your code that uses jatos.js' variables and functions\n  });\n<\/script>   \n")))),(0,o.kt)("h2",{id:"save-your-result-data"},"Save your result data"),(0,o.kt)("p",null,"You probably want to save the data that is collected during your experiments. There are generally two ways to do this: 1) result data or 2) result files - and there is a ",(0,o.kt)("a",{parentName:"p",href:"Submit-and-upload-data-to-the-server.html"},"documentation page about it"),"."),(0,o.kt)("h2",{id:"jatosjs-reference"},(0,o.kt)("em",{parentName:"h2"},"jatos.js")," Reference"),(0,o.kt)("p",null,"In your JavaScript you will use ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," to handle everything JATOS related and in its ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html"},"reference")," every function and field is described in detail."),(0,o.kt)("h2",{id:"study-json-input-and-component-json-input"},"Study JSON Input and Component JSON Input"),(0,o.kt)("p",null,"Your experiment is defined by its source code, its HTML, JavaScript and CSS. There you specify all text or parameters. But sometimes you want to be able to quickly change your experiment without touching the source code."),(0,o.kt)("p",null,"E.g. you want to be able to quickly change"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an introductory text"),(0,o.kt)("li",{parentName:"ul"},"the number of trials"),(0,o.kt)("li",{parentName:"ul"},"some parameter needed in the experiment")),(0,o.kt)("p",null,"This you can achieve with the Study JSON Input or Component JSON Input because both can be easily edited in the Study Properties or Component Properties."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Properties / JSON input",src:n(80542).Z,width:"913",height:"972"})),(0,o.kt)("p",null,"Both input fields take ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/whatis/whatis_json.asp"},"JSON")," and the data you put in there is then available in your study's JavaScript via ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.componentJsonInput"),"."),(0,o.kt)("p",null,"The difference between the Study JSON Input and Component JSON Input is that the first one is available during the whole study run, in all components, and the latter one only in the component for which it is specified."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"If you put the following in the Study JSON Input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n   "introduction": "this is a text",\n   "order": [3, 1, 2]\n}\n')),(0,o.kt)("p",null,"you can access those fields in your JavaScript with ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput.introduction")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput.order"),"."),(0,o.kt)("h2",{id:"study--batch--group-session"},"Study / Batch / Group Session"),(0,o.kt)("p",null,"The sessions are there to help you exchange data within a study, batch or group. The Study Session allows to pass on data within the same study run, from one component to the next. With the Batch Session one can transfer data between study runs that belong to the same batch. There is a whole page dedicated to those sessions: ",(0,o.kt)("a",{parentName:"p",href:"/Session-Data-Three-Types.html"},"Session Data - Three Types"),"."),(0,o.kt)("h2",{id:"group-studies"},"Group Studies"),(0,o.kt)("p",null,"JATOS allows group studies in which several participants can work together on the same experiment and exchange data in real-time.\nTo get an idea it's best to start with ",(0,o.kt)("a",{parentName:"p",href:"Example-Group-Studies.html"},"examples"),", then one can go on to write them: ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html"},"Write Group Studies I - Setup")," and ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-II-JavaScript-and-Messaging.html"},"Write Group Studies II - JavaScript and Messaging"),"."))}p.isMDXComponent=!0},73269:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_new-component-properites-cc162c638be4fb2d5d10b0d3c4150907.png"},57927:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_new-component_371-90acdb10470ea2f1af0df5f5805638c7.png"},80542:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_studyJsonInput_371-16679f81571801f86a7c3a87fc0acb0a.png"}}]);