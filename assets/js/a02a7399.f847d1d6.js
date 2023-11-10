"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),y=n,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91963:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const o={title:"jsPsych and JATOS",slug:"/jsPsych-and-JATOS.html",hide_table_of_contents:!0,sidebar_position:4},s=void 0,i={unversionedId:"Write_your_study/jsPsych-and-JATOS",id:"version-3.7.1/Write_your_study/jsPsych-and-JATOS",title:"jsPsych and JATOS",description:"JATOS basically cares for the server side: it stores result data, does worker management etc. JATOS doesn't care so much for what happens in the browser itself - your HTML, JavaScript and CSS. Of course you can write this all yourself, but you could also use a framework for this. A very good one is jsPsych.",source:"@site/versioned_docs/version-3.7.1/Write_your_study/jsPsych-and-JATOS.md",sourceDirName:"Write_your_study",slug:"/jsPsych-and-JATOS.html",permalink:"/3.7.x/jsPsych-and-JATOS.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.7.1/Write_your_study/jsPsych-and-JATOS.md",tags:[],version:"3.7.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1699603302,formattedLastUpdatedAt:"Nov 10, 2023",sidebarPosition:4,frontMatter:{title:"jsPsych and JATOS",slug:"/jsPsych-and-JATOS.html",hide_table_of_contents:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Adapt pre written code to run it in JATOS",permalink:"/3.7.x/Adapt-pre-written-code-to-run-it-in-JATOS.html"},next:{title:"lab.js and JATOS",permalink:"/3.7.x/labjs-and-JATOS.html"}},l={},p=[{value:"How to turn your jsPsych 7 experiment into a JATOS study",id:"how-to-turn-your-jspsych-7-experiment-into-a-jatos-study",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{style:{float:"right",width:"300px"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:r(86256).Z,width:"795",height:"630"}))),(0,n.kt)("p",null,"JATOS basically cares for the server side: it stores result data, does worker management etc. JATOS doesn't care so much for what happens in the browser itself - your HTML, JavaScript and CSS. Of course you can write this all yourself, but you could also use a framework for this. A very good one is ",(0,n.kt)("a",{parentName:"p",href:"http://www.jspsych.org/"},"jsPsych"),"."),(0,n.kt)("p",null,"In ",(0,n.kt)("a",{parentName:"p",href:"/Example-Studies"},"our example studies")," are a couple of jsPsych ones."),(0,n.kt)("p",null,"Here are the necessary changes if you want to adapt your jsPsych experiment so that it runs within (and sends the result data to) JATOS. Additionally you can have a look at ",(0,n.kt)("a",{parentName:"p",href:"Adapt-pre-written-code-to-run-it-in-JATOS.html"},"Adapt Pre written Code to run it in JATOS"),"."),(0,n.kt)("p",null,"Every jsPsych version works slightly different. Here we explain the steps for jsPsych 7 (for older versions have a look ",(0,n.kt)("a",{parentName:"p",href:"/3.6.1/jsPsych-and-JATOS.html"},"here"),")."),(0,n.kt)("h3",{id:"how-to-turn-your-jspsych-7-experiment-into-a-jatos-study"},"How to turn your jsPsych 7 experiment into a JATOS study"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Include the ",(0,n.kt)("em",{parentName:"p"},"jatos.js")," library in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="jatos.js"><\/script>\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Tell jsPsych to send your result data to JATOS"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"var jsPsych = initJsPsych({\n  on_finish: () => jatos.endStudy(jsPsych.data.get().json())\n});\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wrap jsPsych's run in ",(0,n.kt)("inlineCode",{parentName:"p"},"jatos.onLoad")," and if you want add a 'Cancel' button with ",(0,n.kt)("inlineCode",{parentName:"p"},"jatos.addAbortButton"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.onLoad(() => {\n  jatos.addAbortButton();\n  jsPsych.run(timeline);\n});\n")))),(0,n.kt)("p",null,"That's all. Have a look at the 'Simple Reaction Time Task' in our ",(0,n.kt)("a",{parentName:"p",href:"/Example-Studies"},"example studies")," to see a full example with jsPsych 7."))}d.isMDXComponent=!0},86256:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/jspsych-logo-a9d6ad3909046e3e55943bf5141d30ed.png"}}]);