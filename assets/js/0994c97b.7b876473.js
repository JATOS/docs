"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[5145],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),p=o,h=c["".concat(u,".").concat(p)]||c[p]||y[p]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},363:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return l},default:function(){return c}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],s={title:"Create a new study",slug:"/Create-a-new-study.html",sidebar_position:1},u=void 0,d={unversionedId:"Write_your_study/Create-a-new-study",id:"Write_your_study/Create-a-new-study",title:"Create a new study",description:"There are different ways to create a new study for JATOS: use a builder, with jsPsych, from scratch or by modifying an existing study. Then afterwards continue with Write your own Study - Basics and Beyond or Adapt Pre written Code to run it in JATOS.",source:"@site/docs/Write_your_study/Create-a-new-study.md",sourceDirName:"Write_your_study",slug:"/Create-a-new-study.html",permalink:"/next/Create-a-new-study.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Write_your_study/Create-a-new-study.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1662838606,formattedLastUpdatedAt:"9/10/2022",sidebarPosition:1,frontMatter:{title:"Create a new study",slug:"/Create-a-new-study.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JATOS Tryout Server",permalink:"/next/JATOS-Tryout-Server.html"},next:{title:"Write your own Study - Basics and Beyond",permalink:"/next/Write-your-own-Study-Basics-and-Beyond.html"}},l=[{value:"Use a builder - OpenSesame/OSWeb and lab.js",id:"use-a-builder---opensesameosweb-and-labjs",children:[],level:3},{value:"Use jsPsych",id:"use-jspsych",children:[],level:3},{value:"Write your own study from scratch",id:"write-your-own-study-from-scratch",children:[],level:3},{value:"Modify an existing study",id:"modify-an-existing-study",children:[],level:3}],y={toc:l};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are different ways to create a new study for JATOS: use a builder, with jsPsych, from scratch or by modifying an existing study. Then afterwards continue with ",(0,a.kt)("a",{parentName:"p",href:"Write-your-own-Study-Basics-and-Beyond.html"},"Write your own Study - Basics and Beyond")," or ",(0,a.kt)("a",{parentName:"p",href:"Adapt-pre-written-code-to-run-it-in-JATOS.html"},"Adapt Pre written Code to run it in JATOS"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Developement of a JATOS study usually happens on your local JATOS: ",(0,a.kt)("a",{parentName:"strong",href:"Run-an-experiment-with-JATOS-Workflow.html"},"Run an experiment with JATOS - Workflow"))),(0,a.kt)("h3",{id:"use-a-builder---opensesameosweb-and-labjs"},"Use a builder - OpenSesame/OSWeb and lab.js"),(0,a.kt)("p",null,"Experiment builders like ",(0,a.kt)("a",{parentName:"p",href:"OSWeb-and-JATOS.html"},"OpenSesame/OSWeb")," and ",(0,a.kt)("a",{parentName:"p",href:"labjs-and-JATOS.html"},"lab.js")," have a point-and-click UI. They are easy to use and you don't have to care for the programming part. But they come with the limitation that they only allow you to do what is possible in the UI. If you want more freedom consider jsPsych or write your own study."),(0,a.kt)("h3",{id:"use-jspsych"},"Use jsPsych"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.jspsych.org/"},"jsPsych")," is a popular library for running behavioral experiments in a web browser. We have an own web page describing using ",(0,a.kt)("a",{parentName:"p",href:"jsPsych-and-JATOS.html"},"jsPsych with JATOS"),"."),(0,a.kt)("h3",{id:"write-your-own-study-from-scratch"},"Write your own study from scratch"),(0,a.kt)("p",null,"Writing your own study gives your the most freedom since it allows you to do whatever is possible in a modern browser. But you will have to program your own code in JavaScript, HTML and CSS."),(0,a.kt)("p",null,"Press the ",(0,a.kt)("strong",{parentName:"p"},"New Study")," button in the header of your local JATOS. Then edit the study properties and add new components manually. All source code for your study has to got into the study assets folder you defined in the the study properties. The study assets folder is usually located in your JATOS installation folder."),(0,a.kt)("h3",{id:"modify-an-existing-study"},"Modify an existing study"),(0,a.kt)("p",null,"Take an existing study (e.g. from ",(0,a.kt)("a",{parentName:"p",href:"/Example-Studies"},"Example Studies"),") as a prototype and modify it bit by bit. Press on the ",(0,a.kt)("strong",{parentName:"p"},"Import")," button in the header and select the file of the study. Then see the source code in your study assets folder, which is usually in your JATOS installation folder."))}c.isMDXComponent=!0}}]);