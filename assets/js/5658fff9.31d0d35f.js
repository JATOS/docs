"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[626],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,h=d["".concat(l,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8916:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const o={title:"jsPsych and JATOS",slug:"/jsPsych-and-JATOS.html",hide_table_of_contents:!0,sidebar_position:4},s=void 0,i={unversionedId:"Write_your_study/jsPsych-and-JATOS",id:"version-3.8.1/Write_your_study/jsPsych-and-JATOS",title:"jsPsych and JATOS",description:"JATOS basically cares for the server side: it stores result data, does worker management etc. JATOS doesn't care so much for what happens in the browser itself - your HTML, JavaScript and CSS. Of course you can write this all yourself, but you could also use a framework for this. A very good one is jsPsych.",source:"@site/versioned_docs/version-3.8.1/Write_your_study/jsPsych-and-JATOS.md",sourceDirName:"Write_your_study",slug:"/jsPsych-and-JATOS.html",permalink:"/jsPsych-and-JATOS.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.8.1/Write_your_study/jsPsych-and-JATOS.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1680550539,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:4,frontMatter:{title:"jsPsych and JATOS",slug:"/jsPsych-and-JATOS.html",hide_table_of_contents:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Combine two pre-written studies into one",permalink:"/Combine-two-pre-written-studies-into-one.html"},next:{title:"lab.js and JATOS",permalink:"/labjs-and-JATOS.html"}},l={},u=[{value:"How to turn your jsPsych 7 experiment into a JATOS study",id:"how-to-turn-your-jspsych-7-experiment-into-a-jatos-study",level:3}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{float:"right",width:"300px"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6256).Z,width:"795",height:"630"}))),(0,a.kt)("p",null,"JATOS basically cares for the server side: it stores result data, does worker management etc. JATOS doesn't care so much for what happens in the browser itself - your HTML, JavaScript and CSS. Of course you can write this all yourself, but you could also use a framework for this. A very good one is ",(0,a.kt)("a",{parentName:"p",href:"http://www.jspsych.org/"},"jsPsych"),"."),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/Example-Studies"},"our example studies")," are a couple of jsPsych ones."),(0,a.kt)("p",null,"Here are the necessary changes if you want to adapt your jsPsych experiment so that it runs within (and sends the result data to) JATOS. Additionally you can have a look at ",(0,a.kt)("a",{parentName:"p",href:"Adapt-pre-written-code-to-run-it-in-JATOS.html"},"Adapt Pre written Code to run it in JATOS"),"."),(0,a.kt)("p",null,"Every jsPsych version works slightly different. Here we explain the steps for jsPsych 7 (for older versions have a look ",(0,a.kt)("a",{parentName:"p",href:"/3.6.1/jsPsych-and-JATOS.html"},"here"),")."),(0,a.kt)("h3",{id:"how-to-turn-your-jspsych-7-experiment-into-a-jatos-study"},"How to turn your jsPsych 7 experiment into a JATOS study"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Include the ",(0,a.kt)("em",{parentName:"p"},"jatos.js")," library in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<head>")," of your HTML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="jatos.js"><\/script>\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Tell jsPsych to send your result data to JATOS.  If you want add a 'Cancel' button with ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.addAbortButton"),", add the line included below (omit if you don't want the automatic abort button)."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var jsPsych = initJsPsych({\n  on_trial_start: jatos.addAbortButton,\n  on_finish: () => jatos.endStudy(jsPsych.data.get().json())\n});\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wrap jsPsych's run in ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.onLoad"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.onLoad(() => {\n  jsPsych.run(timeline);\n});\n")))),(0,a.kt)("p",null,"That's all. Have a look at the 'Simple Reaction Time Task' in our ",(0,a.kt)("a",{parentName:"p",href:"/Example-Studies"},"example studies")," to see a full example with jsPsych 7."))}p.isMDXComponent=!0},6256:function(e,t,r){t.Z=r.p+"assets/images/jspsych-logo-a9d6ad3909046e3e55943bf5141d30ed.png"}}]);