"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1969],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,s(s({ref:e},p),{},{components:n})):a.createElement(m,s({ref:e},p))}));function h(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53975:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(83117),o=(n(67294),n(3905));const r={title:"Write your own study - Basics and beyond",slug:"/Write-your-own-Study-Basics-and-Beyond.html",sidebar_position:2},s=void 0,i={unversionedId:"Write_your_study/Write-your-own-Study-Basics-and-Beyond",id:"version-3.9.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond",title:"Write your own study - Basics and beyond",description:"After you added a new study ... what comes next?",source:"@site/versioned_docs/version-3.9.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond.md",sourceDirName:"Write_your_study",slug:"/Write-your-own-Study-Basics-and-Beyond.html",permalink:"/Write-your-own-Study-Basics-and-Beyond.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1731093692,formattedLastUpdatedAt:"Nov 8, 2024",sidebarPosition:2,frontMatter:{title:"Write your own study - Basics and beyond",slug:"/Write-your-own-Study-Basics-and-Beyond.html",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a new study",permalink:"/Create-a-new-study.html"},next:{title:"Adapt pre written code to run it in JATOS",permalink:"/Adapt-pre-written-code-to-run-it-in-JATOS.html"}},l={},u=[{value:"Add a component",id:"add-a-component",level:2},{value:"Study assets",id:"study-assets",level:2},{value:"Mandatory lines in your components&#39; HTML",id:"mandatory-lines-in-your-components-html",level:2},{value:"Save your result data",id:"save-your-result-data",level:2},{value:"<em>jatos.js</em> Reference",id:"jatosjs-reference",level:2},{value:"Study/component/batch input",id:"studycomponentbatch-input",level:2},{value:"Study / batch / group session",id:"study--batch--group-session",level:2},{value:"Group studies",id:"group-studies",level:2}],p={toc:u};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you ",(0,o.kt)("a",{parentName:"p",href:"Create-a-new-study.html"},"added a new study")," ... what comes next?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Developement of a JATOS study usually happens on your local JATOS: ",(0,o.kt)("a",{parentName:"strong",href:"Run-an-experiment-with-JATOS-Workflow.html"},"Run an experiment with JATOS - Workflow"))),(0,o.kt)("h2",{id:"add-a-component"},"Add a component"),(0,o.kt)("p",null,"If you have an empty study you want to add a component. A component corresponds to a webpage defined by an HTML file. A study can have more than one component - this is actually a strength of JATOS: e.g. one can combine different experiments into one, or easily add an survey to an existing experiment."),(0,o.kt)("p",null,"To add a component go to your study page and click on ",(0,o.kt)("strong",{parentName:"p"},"New Component"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Component",src:n(27874).Z,width:"1918",height:"419"})),(0,o.kt)("p",null,"Then in the following form you define the component's 'Title' and most importantly its 'HTML file path' (This is the path to the HTML file that starts this component)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Component",src:n(14549).Z,width:"1920",height:"431"})),(0,o.kt)("p",null,"Click on ",(0,o.kt)("strong",{parentName:"p"},"Add")," and you are done. You can change the component's properties by clicking on 'Properties' in the component's row. If you add more than one component you can change the order in which they run by drag-and-drop on the position button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Position Component",src:n(16449).Z,width:"1918",height:"419"})),(0,o.kt)("h2",{id:"study-assets"},"Study assets"),(0,o.kt)("p",null,"All your files (e.g. HTML, CSS, JavaScript and media files) go into your study assets directory. That includes all component's HTML files. You can find the study assets directory in a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"study_assets_root")," in your JATOS installation directory. You can change the study assets directory's name in the study properties, but it's usually not necessary."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Position Component",src:n(68626).Z,width:"1918",height:"419"})),(0,o.kt)("h2",{id:"mandatory-lines-in-your-components-html"},"Mandatory lines in your components' HTML"),(0,o.kt)("p",null,"A study can have one or multiple components and each component has an HTML file associated that is defined in the component's properties."),(0,o.kt)("p",null,"Here is the absolute minimum that any component HTML file must have to run with JATOS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A link to the ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," library in the head section"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="jatos.js"><\/script>\n  </head>\n</html>   \n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The second bit is not really necessary but without defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.onLoad")," callback function you won't be able to use most of ",(0,o.kt)("em",{parentName:"p"},"jatos.js"),"' features. Of course you could start right away with any JavaScript but if you want to use ",(0,o.kt)("em",{parentName:"p"},"jatos.js"),"' variables and functions you have to wait until ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," is finished initializing."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  jatos.onLoad(function() {\n    // Start here with your code that uses jatos.js' variables and functions\n  });\n<\/script>   \n")))),(0,o.kt)("h2",{id:"save-your-result-data"},"Save your result data"),(0,o.kt)("p",null,"You probably want to save the data that is collected during your experiments. There are generally two ways to do this: 1) result data or 2) result files - and there is a ",(0,o.kt)("a",{parentName:"p",href:"Submit-and-upload-data-to-the-server.html"},"documentation page about it"),"."),(0,o.kt)("h2",{id:"jatosjs-reference"},(0,o.kt)("em",{parentName:"h2"},"jatos.js")," Reference"),(0,o.kt)("p",null,"In your JavaScript you will use ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," to handle everything JATOS related and in its ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html"},"reference")," every function and field is described in detail."),(0,o.kt)("h2",{id:"studycomponentbatch-input"},"Study/component/batch input"),(0,o.kt)("p",null,"Your experiment is defined by its source code, its HTML, JavaScript and CSS. There you specify all text or parameters. But sometimes you want to be able to quickly change your experiment without touching the source code."),(0,o.kt)("p",null,"E.g. you want to be able to quickly change"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an introductory text"),(0,o.kt)("li",{parentName:"ul"},"the number of trials"),(0,o.kt)("li",{parentName:"ul"},"some parameter needed in the experiment")),(0,o.kt)("p",null,'This you can achieve with the "study input", "component input", or "batch input" (in older JATOS versions they are called "Study JSON Input", "Component JSON Input", or "Batch JSON Input") because both can be easily edited in the study/component/batch properties.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study properties / study input",src:n(28721).Z,width:"1920",height:"964"})),(0,o.kt)("p",null,"The input fields take ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/whatis/whatis_json.asp"},"JSON")," and the data you put in there is then available in your study's JavaScript via ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.componentJsonInput"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.batchJsonInput"),"."),(0,o.kt)("p",null,"The difference between study input, component input and batch input is where they are available in the code of your study. The study input data are available everywhere in your study code, the component input only in the code of this component, and the batch input in all study runs that belong to this batch. There is also a difference in what gets exported with the study: only the study and component input data get exported - not the batch input data."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Study input"),(0,o.kt)("th",{parentName:"tr",align:null},"Component input"),(0,o.kt)("th",{parentName:"tr",align:null},"Batch input"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Availability"),(0,o.kt)("td",{parentName:"tr",align:null},"in the whole study (all components, all batches)"),(0,o.kt)("td",{parentName:"tr",align:null},"only in the component where it was defined (but in all batches)"),(0,o.kt)("td",{parentName:"tr",align:null},"only in the batch that belongs to the study run (but there in all components)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Exported with the study"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"no")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"If you put the following in the study input of your study properties"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "numberOfTrials": 12,\n  "retries": 5,\n  "order": [\n    4,\n    3,\n    0,\n    1\n  ]\n}\n')),(0,o.kt)("p",null,"you can access those fields in your JavaScript with ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput.numberOfTrials"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput.retries")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput.order"),"."),(0,o.kt)("h2",{id:"study--batch--group-session"},"Study / batch / group session"),(0,o.kt)("p",null,"The sessions are there to help you exchange data within a study, batch or group. The study session allows to pass on data within the same study run, from one component to the next. With the batch session one can transfer data between study runs that belong to the same batch. There is a whole page dedicated to those sessions: ",(0,o.kt)("a",{parentName:"p",href:"/Session-Data-Three-Types.html"},"Session Data - Three Types"),"."),(0,o.kt)("h2",{id:"group-studies"},"Group studies"),(0,o.kt)("p",null,"JATOS allows group studies in which several participants can work together on the same experiment and exchange data in real-time.\nTo get an idea it's best to start with ",(0,o.kt)("a",{parentName:"p",href:"Example-Group-Studies.html"},"examples"),", then one can go on to write them: ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html"},"Write Group Studies I - Setup")," and ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-II-JavaScript-and-Messaging.html"},"Write Group Studies II - JavaScript and Messaging"),"."))}d.isMDXComponent=!0},16449:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/component-position-dragndrop-9c0ad15f16e79c2fc3779ff19c694fc6.png"},14549:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/new-component-properites-89f6ed72249580fc34258bdc4792bc5b.png"},27874:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/new-component-1dedae9daf71697764ffd791ec21763f.png"},68626:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/study-assets-name-80f91251737f329dad2a2cb5d8f5a292.png"},28721:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/study-input-f095c9bef10dc2c4f159bd2b37e14c04.png"}}]);