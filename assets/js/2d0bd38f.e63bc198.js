"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[6988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),c=n,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(83117),n=(r(67294),r(3905));const a={title:"Example Group Studies",slug:"/Example-Group-Studies.html",sidebar_position:1},i=void 0,s={unversionedId:"Group_studies/Example-Group-Studies",id:"version-3.9.1/Group_studies/Example-Group-Studies",title:"Example Group Studies",description:"In group studies, the workers that are part of a group can communicate with each other. JATOS supports different kinds of groups. A group can e.g. have a fixed set of workers like this Prisoner's Dilemma where exactly two workers play with each other. On the other side of the spectrum is this Snake game with an on open, multi-worker approach.",source:"@site/versioned_docs/version-3.9.1/Group_studies/Example-Group-Studies.md",sourceDirName:"Group_studies",slug:"/Example-Group-Studies.html",permalink:"/Example-Group-Studies.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Group_studies/Example-Group-Studies.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1727984580,formattedLastUpdatedAt:"Oct 3, 2024",sidebarPosition:1,frontMatter:{title:"Example Group Studies",slug:"/Example-Group-Studies.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Customize JATOS' Home Page",permalink:"/Customize-JATOS-Home-Page.html"},next:{title:"Write Group Studies I - Setup",permalink:"/Write-Group-Studies-I-Setup.html"}},p={},l=[],u=(d="FAIcon",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const m={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In group studies, the workers that are part of a group can communicate with each other. JATOS supports different kinds of groups. A group can e.g. have a fixed set of workers like this ",(0,n.kt)("a",{parentName:"p",href:"/Example-Studies"},"Prisoner's Dilemma")," where exactly two workers play with each other. On the other side of the spectrum is this ",(0,n.kt)("a",{parentName:"p",href:"/Example-Studies"},"Snake game")," with an on open, multi-worker approach."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How can you try-out a group-study if you're alone but want to simulate multiple workers?")),(0,n.kt)("p",null,"JATOS allows ",(0,n.kt)("a",{parentName:"p",href:"Tips-and-Tricks.html#run-up-to-10-studies-in-the-same-browser-at-the-same-time"},"up to 10 study runs")," at the same time in the same browser (JATOS has no limit for different browsers). So you can just start the same (group) study multiple times in your browser and pretend you're multiple workers."),(0,n.kt)("p",null,"As an example of this, let's go through the Snake Game group study in detail:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download and import the ",(0,n.kt)("a",{parentName:"li",href:"/Example-Studies"},"Snake game")),(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("a",{parentName:"li",href:"Run-your-Study-with-Study-Links.html"},"Study Links")," page"),(0,n.kt)("li",{parentName:"ol"},"Now get a study link to start the first Snake game: Click on the Study Links button in line Personal Multiple (other study link types are fine too). In the opened pop-up window click on the top-left button ",(0,n.kt)("span",{class:"glyphicon glyphicon-plus"}),(0,n.kt)("span",{class:"glyphicon glyphicon-link"})," to get a new link and then on ",(0,n.kt)(u,{icon:"fa-regular fa-clipboard",mdxType:"FAIcon"})," in the link's row to copy it to the clipboard."),(0,n.kt)("li",{parentName:"ol"},"Open a new tab in your browser and paste the study link into the address field. Press 'Enter' and the study should start."),(0,n.kt)("li",{parentName:"ol"},"Repeat the last step to start a second Snake game."),(0,n.kt)("li",{parentName:"ol"},"Now, in both tabs: click through the introduction until you arrive in the waiting room. Click ",(0,n.kt)("strong",{parentName:"li"},"Join")," and then ",(0,n.kt)("strong",{parentName:"li"},"Ready"),"."),(0,n.kt)("li",{parentName:"ol"},"Voil\xe0! You'll see two snakes moving around: each tab is running the Snake Game - but they are in the same group."),(0,n.kt)("li",{parentName:"ol"},"Optional: Have a look at your ",(0,n.kt)("a",{parentName:"li",href:"Run-your-Study-with-Study-Links.html#groups"},"Group in the Study Links page")," add see who the member workers are.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Snake example",src:r(20235).Z,width:"1074",height:"698"})),(0,n.kt)("p",null,"There's actually a lot going on behind the curtain of a group study. All members of a group are able to communicate in real-time with each other directly or broadcast messages to the whole group."),(0,n.kt)("p",null,"Next step: ",(0,n.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html"},"Write Your Own Group Studies"),"."))}c.isMDXComponent=!0},20235:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/Screenshot_snakeGame-f064a7cdba297b54076ed3a9e9138b28.png"}}]);