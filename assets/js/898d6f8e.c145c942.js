"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[306],{3905:function(A,e,t){t.d(e,{Zo:function(){return D},kt:function(){return p}});var n=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function g(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var s=n.createContext({}),i=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):g(g({},e),A)),t},D=function(A){var e=i(A.components);return n.createElement(s.Provider,{value:e},A.children)},l={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},w=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,s=A.parentName,D=o(A,["components","mdxType","originalType","parentName"]),w=i(t),p=a,k=w["".concat(s,".").concat(p)]||w[p]||l[p]||r;return t?n.createElement(k,g(g({ref:e},D),{},{components:t})):n.createElement(k,g({ref:e},D))}));function p(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,g=new Array(r);g[0]=w;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=A,o.mdxType="string"==typeof A?A:a,g[1]=o;for(var i=2;i<r;i++)g[i]=t[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}w.displayName="MDXCreateElement"},8289:function(A,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return g},default:function(){return l},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return i}});var n=t(3117),a=(t(7294),t(3905));const r={title:"Session Data - Three Types",slug:"/Session-Data-Three-Types.html",sidebar_position:9},g=void 0,o={unversionedId:"Write_your_study/Session-Data-Three-Types",id:"version-3.7.1/Write_your_study/Session-Data-Three-Types",title:"Session Data - Three Types",description:"When to use the sessions?",source:"@site/versioned_docs/version-3.7.1/Write_your_study/Session-Data-Three-Types.md",sourceDirName:"Write_your_study",slug:"/Session-Data-Three-Types.html",permalink:"/3.7.x/Session-Data-Three-Types.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.7.1/Write_your_study/Session-Data-Three-Types.md",tags:[],version:"3.7.1",lastUpdatedBy:"kristian",lastUpdatedAt:1687796019,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:9,frontMatter:{title:"Session Data - Three Types",slug:"/Session-Data-Three-Types.html",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Submit and upload data to the server",permalink:"/3.7.x/Submit-and-upload-data-to-the-server.html"},next:{title:"Deploy to a server installation",permalink:"/3.7.x/Deploy-to-a-server-installation.html"}},s={},i=[{value:"When to use the sessions?",id:"when-to-use-the-sessions",level:3},{value:"Comparative Overview",id:"comparative-overview",level:3},{value:"Example Study",id:"example-study",level:3}],D={toc:i};function l(A){let{components:e,...r}=A;return(0,a.kt)("wrapper",(0,n.Z)({},D,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"when-to-use-the-sessions"},"When to use the sessions?"),(0,a.kt)("div",{style:{float:"right"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9502).Z,width:"421",height:"661"}))),(0,a.kt)("p",null,"Often you want to store information during a study run and share it with other components of the same study, or between workers of a group or batch. The three different session types let you transfer data in this way (shown by the curved arrows in the picture on the right). Workers can write into the sessions through ",(0,a.kt)("em",{parentName:"p"},"jatos.js"),"."),(0,a.kt)("p",null,"The data stored in the sessions are ",(0,a.kt)("strong",{parentName:"p"},"volatile")," - do not use the sessions to store data permanently. Instead, store any information that might be useful for data analysis in the ",(0,a.kt)("strong",{parentName:"p"},"Result Data"),". Unlike the data stored in the sessions, the Result Data are stored permanently in the JATOS server, and will never be deleted automatically."),(0,a.kt)("p",null,"The data stored in the sessions are not exported or imported together with a study. If you want data to be exported with a study, use the  ",(0,a.kt)("strong",{parentName:"p"},"JSON Input Data")," instead. "),(0,a.kt)("br",{clear:"right"}),(0,a.kt)("h3",{id:"comparative-overview"},"Comparative Overview"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Batch Session"),(0,a.kt)("th",{parentName:"tr",align:null},"Group Session"),(0,a.kt)("th",{parentName:"tr",align:null},"Study Session"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Scope (accesible by)")),(0,a.kt)("td",{parentName:"tr",align:null},"All workers in a batch"),(0,a.kt)("td",{parentName:"tr",align:null},"All workers in a group"),(0,a.kt)("td",{parentName:"tr",align:null},"All components in a study")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Usage")),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange and store data relevant for all members of a batch"),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange and temporarily store data relevant for all members of a group"),(0,a.kt)("td",{parentName:"tr",align:null},"Exchange and temporarily store data between components of a single study run")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Example use")),(0,a.kt)("td",{parentName:"tr",align:null},"(Pseudo-)randomly assign conditions to different workers; Combine results from different groups working in the same batch"),(0,a.kt)("td",{parentName:"tr",align:null},"Store choices of the two members of a Prisoner's Dilemma game"),(0,a.kt)("td",{parentName:"tr",align:null},"Pass on correct answers between components; Keep track of the number of iterations of a given component that is repeated")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Lifetime")),(0,a.kt)("td",{parentName:"tr",align:null},"Survives after all workers finished their studies"),(0,a.kt)("td",{parentName:"tr",align:null},"Automatically deleted once the group is finished"),(0,a.kt)("td",{parentName:"tr",align:null},"Deleted once the worker finished the study - Hence temporary")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Updated when and via")),(0,a.kt)("td",{parentName:"tr",align:null},"Any time you call one of the ",(0,a.kt)("a",{parentName:"td",href:"jatos.js-Reference.html#functions-to-access-the-batch-session"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.batchSession")," functions")),(0,a.kt)("td",{parentName:"tr",align:null},"Any time you call one of the ",(0,a.kt)("a",{parentName:"td",href:"jatos.js-Reference.html#functions-to-access-the-group-session"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.groupSession")," functions")),(0,a.kt)("td",{parentName:"tr",align:null},"At the end of each component or if you call ",(0,a.kt)("a",{parentName:"td",href:"jatos.js-Reference.html#jatossetstudysessiondata"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.setStudySessionData")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Visible and editable from JATOS' GUI")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"yes",src:t(701).Z,width:"24",height:"24"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"no",src:t(5407).Z,width:"24",height:"24"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"no",src:t(5407).Z,width:"24",height:"24"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Requires WebSockets")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"yes",src:t(701).Z,width:"24",height:"24"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"yes",src:t(701).Z,width:"24",height:"24"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"no",src:t(5407).Z,width:"24",height:"24"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Included in exported studies")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"no",src:t(5407).Z,width:"24",height:"24"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"no",src:t(5407).Z,width:"24",height:"24"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"no",src:t(5407).Z,width:"24",height:"24"}))))),(0,a.kt)("h3",{id:"example-study"},"Example Study"),(0,a.kt)("p",null,"We have an ",(0,a.kt)("a",{parentName:"p",href:"/Example-Studies"},"example study"),", where we show the three different session types in action. Try it yourself:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Download and import the study. You\'ll find that the study contains two components: "First" and "Second". ')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the study once: easiest is as a JATOS worker (just click 'Run' on the study bar, not on any of the component bars).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The first component will prompt you for a name. It will then write the name you enter here into the ",(0,a.kt)("strong",{parentName:"p"},"Study Session"),". Because all components have access to the Study Session, the second component can read it and use your name in a chat window."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"First component screenshot",src:t(5033).Z,width:"1109",height:"756"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When you click on 'Next', the second component will load. Here you will see two chat windows: The left one is called the group chat because it uses the Group Session; the right one is called batch chat because it uses the Batch Session. For now you're alone in these chat rooms. So, without closing this run and from new browser tabs, ",(0,a.kt)("strong",{parentName:"p"},"run the study 2 more times (at least)"),". You can choose any study link type you want."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Second component screenshot",src:t(2577).Z,width:"1109",height:"756"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now you have 3 simultaneous study runs. You will notice while writing into the group chat that two of your workers are in the same group - the third one has their own group. Why 2 per group? Because we ",(0,a.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html#group-settings-in-each-batchs-properties"},"set the groups to a maximum of 2 members each"),". The group chat will use the ",(0,a.kt)("strong",{parentName:"p"},"Group Session")," to allow the 2 members of each group to communicate with each other. Members of other groups will not have access to the chats of this group. However, anything written into the ",(0,a.kt)("strong",{parentName:"p"},"Batch Session")," will be accesssible by all workers that are members of this batch, regardless of the group they're in."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Second component screenshot",src:t(1704).Z,width:"1109",height:"756"}),"\n",(0,a.kt)("img",{alt:"Second component screenshot",src:t(1041).Z,width:"1109",height:"756"})))))}l.isMDXComponent=!0},5033:function(A,e,t){e.Z=t.p+"assets/images/ChatExample_1-7d203606dc1c4573c15f9e10e97eb6a1.png"},2577:function(A,e,t){e.Z=t.p+"assets/images/ChatExample_2-15ea828b3862c64ccaa38bb5e1abbd25.png"},1704:function(A,e,t){e.Z=t.p+"assets/images/ChatExample_3-9411de4c5be80db687b9d60720f3a449.png"},1041:function(A,e,t){e.Z=t.p+"assets/images/ChatExample_4-fec83fc04df3eae1f7d3eae37ca8d198.png"},701:function(A,e){e.Z="data:image/vnd.microsoft.icon;base64,AAABAAEAGBgAAAEAIACICQAAFgAAACgAAAAYAAAAMAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIAAIACAAGgAgACuAIAA2ACAAO4AgADwAIAA3ACAALIAgABwAIAAJgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAACAABwAgACWAIAA7ACAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA7gCAAKIAgAAiAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAATACAAOAAgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgADoAIAAWgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgABmAIAA+ACAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA+gCAAHgAgAAAAAAAAAAAAAAAAAAAAIAAAACAAEoAgAD4AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAPoAgABaAIAAAAAAAAAAAAAAAIAAGgCAAOAAgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA7gCAAOQAgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgADoAIAAJAAAAAAAAAAAAIAAkgCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgADOAIAAIACAAA4AgADaAIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAApgCAAAAAgAAeAIAA6gCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAANAAgAAcAAAAAAAAAAAAgABEAIAA9ACAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA8ACAACoAgABkAIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA0ACAAB4AAAAAAAAAAAAAAAAAgAAAAIAAjgCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAHYAgACoAIAA/wCAAP8AgAD/AIAA/wCAAP8AgADQAIAAHAAAAAAAgAAAAIAAUACAABYAAAAAAIAADgCAAMwAgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAALoAgADUAIAA/wCAAP8AgAD/AIAA/wCAAP8AgAByAIAAAACAAAAAgABoAIAA9ACAAJwAgAAAAAAAAACAADgAgAD4AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAOQAgADiAIAA/wCAAP8AgAD/AIAA/wCAAP8AgADmAIAARACAAGgAgAD6AIAA/wCAAPwAgABKAAAAAAAAAAAAgACIAIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAPIAgADkAIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgADgAIAAGgAAAAAAgAAMAIAAyACAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAPIAgADUAIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAAogCAAAQAAAAAAIAAOACAAPIAgAD/AIAA/wCAAP8AgAD/AIAA/wCAAOQAgACqAIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA+ACAAFYAAAAAAIAAAgCAAIAAgAD/AIAA/wCAAP8AgAD/AIAA/wCAALoAgABkAIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAOoAgAAcAAAAAACAAAYAgADOAIAA/wCAAP8AgAD/AIAA/wCAAHYAgAAeAIAA6gCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgACuAIAACACAABQAgADGAIAA/wCAAP8AgAD/AIAA8ACAACoAAAAAAIAAlACAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD8AIAArACAANgAgAD/AIAA/wCAAP8AgAD/AIAApgCAAAAAAAAAAIAAGgCAAOAAgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgADoAIAAJAAAAAAAAAAAAIAAAACAAEwAgAD4AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAPoAgABcAIAAAAAAAAAAAAAAAAAAAAAAAAAAgABoAIAA+ACAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA+gCAAHgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAATgCAAOIAgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgADoAIAAWgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAACAABwAgACYAIAA7ACAAP8AgAD/AIAA/wCAAP8AgAD/AIAA/wCAAP8AgAD/AIAA8ACAAKIAgAAiAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIAAIgCAAGwAgACyAIAA3gCAAPAAgADsAIAA3gCAALYAgABwAIAAJgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/gf8A/AA/APgAHwDwAA8A4AAHAMAAAwCAMAEAgHgBAID4AQAB/AAAA84AAAGOAAAABwAAAAOAAAADgACAAcEAgADBAIAAAQDAAAMA4AAHAPAADwD4AB8A/AA/AP+B/wA="},9502:function(A,e,t){e.Z=t.p+"assets/images/three_session_types-0673369c0ecd4404e9b95c199c0374bf.png"},5407:function(A,e){e.Z="data:image/vnd.microsoft.icon;base64,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"}}]);