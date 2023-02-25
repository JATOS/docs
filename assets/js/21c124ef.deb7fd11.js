"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[5435],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5598:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=(r(7294),r(3905));const a={title:"Example Group Studies",slug:"/Example-Group-Studies.html",sidebar_position:1},i=void 0,s={unversionedId:"Group_studies/Example-Group-Studies",id:"version-3.7.1/Group_studies/Example-Group-Studies",title:"Example Group Studies",description:"In group studies, the workers that are part of a group can communicate with each other. JATOS supports different kinds of groups. A group can e.g. have a fixed set of workers like this Prisoner's Dilemma where exactly two workers play with each other. On the other side of the spectrum is this Snake game with an on open, multi-worker approach.",source:"@site/versioned_docs/version-3.7.1/Group_studies/Example-Group-Studies.md",sourceDirName:"Group_studies",slug:"/Example-Group-Studies.html",permalink:"/Example-Group-Studies.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.7.1/Group_studies/Example-Group-Studies.md",tags:[],version:"3.7.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1677356680,formattedLastUpdatedAt:"Feb 25, 2023",sidebarPosition:1,frontMatter:{title:"Example Group Studies",slug:"/Example-Group-Studies.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/Troubleshooting.html"},next:{title:"Write Group Studies I - Setup",permalink:"/Write-Group-Studies-I-Setup.html"}},u={},p=[],l={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In group studies, the workers that are part of a group can communicate with each other. JATOS supports different kinds of groups. A group can e.g. have a fixed set of workers like this ",(0,o.kt)("a",{parentName:"p",href:"/Example-Studies"},"Prisoner's Dilemma")," where exactly two workers play with each other. On the other side of the spectrum is this ",(0,o.kt)("a",{parentName:"p",href:"/Example-Studies"},"Snake game")," with an on open, multi-worker approach."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How can you try-out a group-study if you're alone but want to simulate multiple workers?")),(0,o.kt)("p",null,"JATOS allows ",(0,o.kt)("a",{parentName:"p",href:"Tips-and-Tricks.html#run-up-to-10-studies-in-the-same-browser-at-the-same-time"},"up to 10 study runs")," at the same time in the same browser (JATOS has no limit for different browsers). So you can just start the same (group) study multiple times in your browser and pretend you're multiple workers."),(0,o.kt)("p",null,"As an example of this, let's go through the Snake Game group study in detail:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and import the ",(0,o.kt)("a",{parentName:"li",href:"/Example-Studies"},"Snake game")),(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"Run-your-Study-with-Study-Links.html"},"Study Links")," page"),(0,o.kt)("li",{parentName:"ol"},"Now get a study link to start the first Snake game: Click on the Study Links button in line Personal Multiple (other study link types are fine too). In the opened pop-up window click on the top-left button ",(0,o.kt)("span",{class:"glyphicon glyphicon-plus"}),(0,o.kt)("span",{class:"glyphicon glyphicon-link"})," to get a new link and then on ",(0,o.kt)("span",{class:"glyphicon glyphicon-duplicate"})," in the link's row to copy it to the clipboard."),(0,o.kt)("li",{parentName:"ol"},"Open a new tab in your browser and paste the study link into the address field. Press 'Enter' and the study should start."),(0,o.kt)("li",{parentName:"ol"},"Repeat the last step to start a second Snake game."),(0,o.kt)("li",{parentName:"ol"},"Now, in both tabs: click through the introduction until you arrive in the waiting room. Click ",(0,o.kt)("strong",{parentName:"li"},"Join")," and then ",(0,o.kt)("strong",{parentName:"li"},"Ready"),"."),(0,o.kt)("li",{parentName:"ol"},"Voil\xe0! You'll see two snakes moving around: each tab is running the Snake Game - but they are in the same group."),(0,o.kt)("li",{parentName:"ol"},"Optional: Have a look at your ",(0,o.kt)("a",{parentName:"li",href:"Run-your-Study-with-Study-Links.html#groups"},"Group in the Study Links page")," add see who the member workers are.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Snake example",src:r(235).Z,width:"1074",height:"698"})),(0,o.kt)("p",null,"There's actually a lot going on behind the curtain of a group study. All members of a group are able to communicate in real-time with each other directly or broadcast messages to the whole group."),(0,o.kt)("p",null,"Next step: ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html"},"Write Your Own Group Studies"),"."))}c.isMDXComponent=!0},235:function(e,t,r){t.Z=r.p+"assets/images/Screenshot_snakeGame-f064a7cdba297b54076ed3a9e9138b28.png"}}]);