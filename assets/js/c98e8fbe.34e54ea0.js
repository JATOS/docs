"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7083],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(r),p=o,f=c["".concat(u,".").concat(p)]||c[p]||y[p]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8918:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return d}});var n=r(3117),o=(r(7294),r(3905));const a={title:"Create a new study",slug:"/Create-a-new-study.html",sidebar_position:1},s=void 0,i={unversionedId:"Write_your_study/Create-a-new-study",id:"version-3.6.1/Write_your_study/Create-a-new-study",title:"Create a new study",description:"There are different ways to create a new study for JATOS: use a builder, with jsPsych, from scratch or by modifying an existing study. Then afterwards continue with Write your own Study - Basics and Beyond or Adapt Pre written Code to run it in JATOS (Jatosify).",source:"@site/versioned_docs/version-3.6.1/Write_your_study/Create-a-new-study.md",sourceDirName:"Write_your_study",slug:"/Create-a-new-study.html",permalink:"/3.6.x/Create-a-new-study.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Write_your_study/Create-a-new-study.md",tags:[],version:"3.6.1",lastUpdatedBy:"kristian",lastUpdatedAt:1678397553,formattedLastUpdatedAt:"Mar 9, 2023",sidebarPosition:1,frontMatter:{title:"Create a new study",slug:"/Create-a-new-study.html",sidebar_position:1},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"JATOS Tryout Server",permalink:"/3.6.x/JATOS-Tryout-Server.html"},next:{title:"Write your own Study - Basics and Beyond",permalink:"/3.6.x/Write-your-own-Study-Basics-and-Beyond.html"}},u={},d=[{value:"Use a builder - OpenSesame/OSWeb and lab.js",id:"use-a-builder---opensesameosweb-and-labjs",level:2},{value:"Use jsPsych",id:"use-jspsych",level:2},{value:"Write your own study from scratch",id:"write-your-own-study-from-scratch",level:2},{value:"Modify an existing study",id:"modify-an-existing-study",level:2}],l={toc:d};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are different ways to create a new study for JATOS: use a builder, with jsPsych, from scratch or by modifying an existing study. Then afterwards continue with ",(0,o.kt)("a",{parentName:"p",href:"Write-your-own-Study-Basics-and-Beyond.html"},"Write your own Study - Basics and Beyond")," or ",(0,o.kt)("a",{parentName:"p",href:"Adapt-pre-written-code-to-run-it-in-JATOS.html"},"Adapt Pre written Code to run it in JATOS (Jatosify)"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Developement of a JATOS study usually happens on your local JATOS: ",(0,o.kt)("a",{parentName:"strong",href:"Run-an-experiment-with-JATOS-Workflow.html"},"Run an experiment with JATOS - Workflow"))),(0,o.kt)("h2",{id:"use-a-builder---opensesameosweb-and-labjs"},"Use a builder - OpenSesame/OSWeb and lab.js"),(0,o.kt)("p",null,"Experiment builders like ",(0,o.kt)("a",{parentName:"p",href:"OSWeb-and-JATOS.html"},"OpenSesame/OSWeb")," and ",(0,o.kt)("a",{parentName:"p",href:"labjs-and-JATOS.html"},"lab.js")," have a point-and-click UI. They are easy to use and you don't have to care for the programming part. But they come with the limitation that they only allow you to do what is possible in the UI. If you want more freedom consider jsPsych or write your own study."),(0,o.kt)("h2",{id:"use-jspsych"},"Use jsPsych"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.jspsych.org/"},"jsPsych")," is a popular library for running behavioral experiments in a web browser. We have an own web page describing using ",(0,o.kt)("a",{parentName:"p",href:"jsPsych-and-JATOS.html"},"jsPsych with JATOS"),"."),(0,o.kt)("h2",{id:"write-your-own-study-from-scratch"},"Write your own study from scratch"),(0,o.kt)("p",null,"Writing your own study gives your the most freedom since it allows you to do whatever is possible in a modern browser. But you will have to program your own code in JavaScript, HTML and CSS."),(0,o.kt)("p",null,"Press the ",(0,o.kt)("strong",{parentName:"p"},"New Study")," button in the header of your local JATOS. Then edit the study properties and add new components manually. All source code for your study has to got into the study assets folder you defined in the the study properties. The study assets folder is usually located in your JATOS installation folder."),(0,o.kt)("h2",{id:"modify-an-existing-study"},"Modify an existing study"),(0,o.kt)("p",null,"Take an existing study (e.g. from ",(0,o.kt)("a",{parentName:"p",href:"Example-Studies.html"},"Example Studies"),") as a prototype and modify it bit by bit. Press on the ",(0,o.kt)("strong",{parentName:"p"},"Import")," button in the header and select the file of the study. Then see the source code in your study assets folder, which is usually in your JATOS installation folder."))}y.isMDXComponent=!0}}]);