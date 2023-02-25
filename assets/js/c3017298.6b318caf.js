"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3959],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||a;return r?o.createElement(d,i(i({ref:t},p),{},{components:r})):o.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6360:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var o=r(3117),n=(r(7294),r(3905));const a={title:"Example Group Studies",slug:"/Example-Group-Studies.html",sidebar_position:1},i=void 0,s={unversionedId:"Group_studies/Example-Group-Studies",id:"version-3.6.1/Group_studies/Example-Group-Studies",title:"Example Group Studies",description:"In group studies, the workers that are part of a group can communicate with each other. JATOS supports different kinds of groups. A group can e.g. have a fixed set of workers like this Prisoner's Dilemma where exactly two workers play with each other. On the other side of the spectrum is this Snake game with an on open, multi-worker approach.",source:"@site/versioned_docs/version-3.6.1/Group_studies/Example-Group-Studies.md",sourceDirName:"Group_studies",slug:"/Example-Group-Studies.html",permalink:"/3.6.1/Example-Group-Studies.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Group_studies/Example-Group-Studies.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1677356680,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:1,frontMatter:{title:"Example Group Studies",slug:"/Example-Group-Studies.html",sidebar_position:1},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/3.6.1/Troubleshooting.html"},next:{title:"Write Group Studies I - Setup",permalink:"/3.6.1/Write-Group-Studies-I-Setup.html"}},u={},l=[],p={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In group studies, the workers that are part of a group can communicate with each other. JATOS supports different kinds of groups. A group can e.g. have a fixed set of workers like this ",(0,n.kt)("a",{parentName:"p",href:"Example-Studies.html#prisoners-dilemma"},"Prisoner's Dilemma")," where exactly two workers play with each other. On the other side of the spectrum is this ",(0,n.kt)("a",{parentName:"p",href:"Example-Studies.html#snake"},"Snake game")," with an on open, multi-worker approach."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How can you try-out a group-study if you're alone but want to simulate multiple workers?")),(0,n.kt)("p",null,"JATOS allows ",(0,n.kt)("a",{parentName:"p",href:"Tips-and-Tricks.html#run-up-to-10-studies-in-the-same-browser-at-the-same-time"},"up to 10 study runs")," at the same time in the same browser (JATOS has no limit for different browsers). So you can just start the same (group) study multiple times in your browser and pretend you're multiple workers."),(0,n.kt)("p",null,"As an example of this, let's go through the Snake Game group study in detail:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download and import the ",(0,n.kt)("a",{parentName:"li",href:"Example-Studies.html#snake"},"Snake game")),(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("a",{parentName:"li",href:"Run-your-Study-with-Worker-and-Batch-Manager.html"},"Worker & Batch Manager")),(0,n.kt)("li",{parentName:"ol"},'Expand the "Default Batch" ("',(0,n.kt)("span",{class:"glyphicon glyphicon-chevron-right"}),'" button in the left) to see the worker setup'),(0,n.kt)("li",{parentName:"ol"},'Now get your first worker: Expand (again with "',(0,n.kt)("span",{class:"glyphicon glyphicon-chevron-right"}),'") the Jatos Worker and click the ',(0,n.kt)("strong",{parentName:"li"},"Run")," button - and the study will start in a new browser tab"),(0,n.kt)("li",{parentName:"ol"},"Repeat for the second worker"),(0,n.kt)("li",{parentName:"ol"},"In both tabs: click through the introduction until you arrive in the waiting room. Click ",(0,n.kt)("strong",{parentName:"li"},"Join")," and then ",(0,n.kt)("strong",{parentName:"li"},"Ready"),"."),(0,n.kt)("li",{parentName:"ol"},"Voil\xe0! You'll see two snakes moving around: each tab represents one worker who is running the Snake Game - but they are in the same group"),(0,n.kt)("li",{parentName:"ol"},"Optional: Add more snakes by adding more workers. You can try every worker type you want - it's of course not limited to Jatos Workers."),(0,n.kt)("li",{parentName:"ol"},"Optional: Have a look at your ",(0,n.kt)("a",{parentName:"li",href:"Run-your-Study-with-Worker-and-Batch-Manager.html#groups-since-v331"},"Group in the Worker & and Batch Manager"),' add see who the member workers are.\n{% include image.html file="example-studies/Screenshot_snakeGame.png" alt="Snake Game" caption="" max-width="500" %}')),(0,n.kt)("p",null,"There's actually a lot going on behind the curtain of a group study. All members of a group are able to communicate in real-time with each other directly or broadcast messages to the whole group."),(0,n.kt)("p",null,"Next step: ",(0,n.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html"},"Write Your Own Group Studies"),"."))}c.isMDXComponent=!0}}]);