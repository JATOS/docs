"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3812],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},328:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var a=n(3117),o=(n(7294),n(3905));const r={title:"Write your own Study - Basics and Beyond",slug:"/Write-your-own-Study-Basics-and-Beyond.html",sidebar_position:2},i=void 0,s={unversionedId:"Write_your_study/Write-your-own-Study-Basics-and-Beyond",id:"version-3.6.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond",title:"Write your own Study - Basics and Beyond",description:"After you created a new study ... what comes next?",source:"@site/versioned_docs/version-3.6.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond.md",sourceDirName:"Write_your_study",slug:"/Write-your-own-Study-Basics-and-Beyond.html",permalink:"/3.6.1/Write-your-own-Study-Basics-and-Beyond.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Write_your_study/Write-your-own-Study-Basics-and-Beyond.md",tags:[],version:"3.6.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1678028740,formattedLastUpdatedAt:"Mar 5, 2023",sidebarPosition:2,frontMatter:{title:"Write your own Study - Basics and Beyond",slug:"/Write-your-own-Study-Basics-and-Beyond.html",sidebar_position:2},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Create a new study",permalink:"/3.6.1/Create-a-new-study.html"},next:{title:"Adapt pre written code to run it in JATOS",permalink:"/3.6.1/Adapt-pre-written-code-to-run-it-in-JATOS.html"}},u={},p=[{value:"Add a component",id:"add-a-component",level:2},{value:"Mandatory lines in your components&#39; HTML",id:"mandatory-lines-in-your-components-html",level:2},{value:"Save your result data",id:"save-your-result-data",level:2},{value:"jatos.js Reference",id:"jatosjs-reference",level:2},{value:"Study JSON Input and Component JSON Input",id:"study-json-input-and-component-json-input",level:2},{value:"Study / Batch / Group Session",id:"study--batch--group-session",level:2},{value:"Group Studies",id:"group-studies",level:2}],l={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you ",(0,o.kt)("a",{parentName:"p",href:"Create-a-new-study.html"},"created a new study")," ... what comes next?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Developement of a JATOS study usually happens on your local JATOS: ",(0,o.kt)("a",{parentName:"strong",href:"Run-an-experiment-with-JATOS-Workflow.html"},"Run an experiment with JATOS - Workflow"))),(0,o.kt)("h2",{id:"add-a-component"},"Add a component"),(0,o.kt)("p",null,"If you have an empty study you want to add a component. A component corresponds to a webpage defined by an HTML file. A study can have more than one component - this is actually a strength of JATOS: e.g. one can combine different experiments into one, or easily add an survey to an existing experiment."),(0,o.kt)("p",null,"To add a component go to your study and click on Components -> New."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Component",src:n(3965).Z,width:"913",height:"128"})),(0,o.kt)("p",null,"Then In the following form you define the component's properties: enter the component's title and most importantly its 'HTML file path'. This is the path to the HTML file that starts this component."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Component",src:n(3269).Z,width:"925",height:"576"})),(0,o.kt)("p",null,"Click on 'Create' and you are done. If you add more than one component you can change the order in which they run by drag-and-drop on the position button."),(0,o.kt)("h2",{id:"mandatory-lines-in-your-components-html"},"Mandatory lines in your components' HTML"),(0,o.kt)("p",null,"A study can have one or multiple components and each component has an HTML file associated that is defined in the component's properties."),(0,o.kt)("p",null,"Here is the absolute minimum that any component HTML file must have to run with JATOS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A link to the jatos.js library in the head section"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="/assets/javascripts/jatos.js"><\/script>\n  </head>\n</html>   \n')),(0,o.kt)("p",{parentName:"li"},"Since JATOS v3.3.1 it can be simply:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="jatos.js"><\/script>\n  </head>\n</html>   \n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The second bit is not really necessary but without defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.onLoad")," callback function you won't be able to use most jatos.js' features. Of course you could start right away with any JavaScript but if you want to use jatos.js' variables and functions you have to wait untill jatos.js is finished initializing."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  jatos.onLoad(function() {\n    // Start here with your code that uses jatos.js' variables and functions\n  });\n<\/script>   \n")))),(0,o.kt)("h2",{id:"save-your-result-data"},"Save your result data"),(0,o.kt)("p",null,"You probably want to save the data that is collected during your experiments. There are generally two ways to do this: 1) result data or 2) result files - and there is a ",(0,o.kt)("a",{parentName:"p",href:"Submit-and-upload-data-to-the-server.html"},"documentation page about it"),"."),(0,o.kt)("h2",{id:"jatosjs-reference"},"jatos.js Reference"),(0,o.kt)("p",null,"In your JavaScript you will use jatos.js to handle everything JATOS related and in its ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html"},"reference")," every function and field is described in detail."),(0,o.kt)("h2",{id:"study-json-input-and-component-json-input"},"Study JSON Input and Component JSON Input"),(0,o.kt)("p",null,"Your experiment is defined by its source code, its HTML, JavaScript and CSS. There you specify all text or parameters. But sometimes you want to be able to quickly change your experiment without touching the source code."),(0,o.kt)("p",null,"E.g. you want to be able to quickly change"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an introductory text"),(0,o.kt)("li",{parentName:"ul"},"the number of trials"),(0,o.kt)("li",{parentName:"ul"},"some parameter needed in the experiment")),(0,o.kt)("p",null,"This you can achieve with the Study JSON Input or Component JSON Input because both can be easily edited in the Study Properties or Component Properties."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Properties / JSON input",src:n(9151).Z,width:"928",height:"907"})),(0,o.kt)("p",null,"Both input fields take ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/whatis/whatis_json.asp"},"JSON")," and the data you put in there is then available in your study's JavaScript via ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.componentJsonInput"),"."),(0,o.kt)("p",null,"The difference between the Study JSON Input and Component JSON Input is that the first one is available during the whole study run, in all components, and the latter one only in the component for which it is specified."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("p",null,"If you put the following in the Study JSON Input"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n   "introduction": "this is a text",\n   "order": [3, 1, 2]\n}\n')),(0,o.kt)("p",null,"you can access those fields in your JavaScript with ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput.introduction")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.studyJsonInput.order"),"."),(0,o.kt)("h2",{id:"study--batch--group-session"},"Study / Batch / Group Session"),(0,o.kt)("p",null,"The sessions are there to help you exchange data within a study, batch or group. The Study Session allows to pass on data within the same study run, from one component to the next. With the Batch Session one can transfer data between study runs that belong to the same batch. There is a whole page dedicated to those sessions: ",(0,o.kt)("a",{parentName:"p",href:"/Session-Data-Three-Types.html"},"Session Data - Three Types"),"."),(0,o.kt)("h2",{id:"group-studies"},"Group Studies"),(0,o.kt)("p",null,"JATOS allows group studies in which several participants can work together on the same experiment and exchange data in real-time.\nTo get an idea it's best to start with ",(0,o.kt)("a",{parentName:"p",href:"Example-Group-Studies.html"},"examples"),", then one can go on to write them: ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html"},"Write Group Studies I - Setup")," and ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-II-JavaScript-and-Messaging.html"},"Write Group Studies II - JavaScript and Messaging"),"."))}d.isMDXComponent=!0},3269:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_new-component-properites-cc162c638be4fb2d5d10b0d3c4150907.png"},3965:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_new-component-8cccfc14558082f166515ee4c0c0c7be.png"},9151:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_studyJsonInput-815d4d359b56c073c64daecfc10851b5.png"}}]);