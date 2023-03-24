"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[5562],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,y=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=(n(7294),n(3905));const a={title:"Restricting study flow - reloading, linear studies, single-use workers and previews",slug:"/Restricting-study-flow.html",sidebar_position:4},i=void 0,s={unversionedId:"Run_your_study/Restricting-study-flow",id:"version-3.8.1/Run_your_study/Restricting-study-flow",title:"Restricting study flow - reloading, linear studies, single-use workers and previews",description:"Intro: Restricting study flow",source:"@site/versioned_docs/version-3.8.1/Run_your_study/Restricting-study-flow.md",sourceDirName:"Run_your_study",slug:"/Restricting-study-flow.html",permalink:"/Restricting-study-flow.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.8.1/Run_your_study/Restricting-study-flow.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1679654426,formattedLastUpdatedAt:"Mar 24, 2023",sidebarPosition:4,frontMatter:{title:"Restricting study flow - reloading, linear studies, single-use workers and previews",slug:"/Restricting-study-flow.html",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Worker Types",permalink:"/Worker-Types.html"},next:{title:"Use MTurk",permalink:"/Connect-to-Mechanical-Turk.html"}},l={},u=[{value:"Intro: Restricting study flow",id:"intro-restricting-study-flow",level:2},{value:"Allow reload or prevent a reload of the same component",id:"allow-reload-or-prevent-a-reload-of-the-same-component",level:2},{value:"Ensure a linear study flow",id:"ensure-a-linear-study-flow",level:2},{value:"Single-use study links - prevent workers running the study twice",id:"single-use-study-links---prevent-workers-running-the-study-twice",level:2},{value:"Allow preview",id:"allow-preview",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intro-restricting-study-flow"},"Intro: Restricting study flow"),(0,o.kt)("p",null,"Let's first say what we understand under the ",(0,o.kt)("em",{parentName:"p"},"study flow"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Study flow")," - the intended order of a study's componenents as they are done by the participants running the study. This doesn't necessarily has to be the order of components like they are defined in the study page, meaning going forward one-by-one - instead the study flow can go backwards to a previous component, go in a loop over several components, or reload the current component. It is even possible to decide on-the-fly in your JavaScripts what the next component will be. In general and by default a component can go to any other component including itself. The ",(0,o.kt)("em",{parentName:"p"},"jatos.js")," functions to determine the study flow are ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.startNextComponent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.startComponentByPos"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.startLastComponent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.startComponent"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Common restrictions")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You want to prevent a participant from reloading the same component (by using the browser's reload button)."),(0,o.kt)("li",{parentName:"ul"},"You want to ensure a linear study flow and prevent participants from going backwards (by using the browser's back button)."),(0,o.kt)("li",{parentName:"ul"},"You want to prevent a participant from running a study twice."),(0,o.kt)("li",{parentName:"ul"},"You want to allow participants to first have a peek into a study and preview it without actually starting the study and fully committing to it.")),(0,o.kt)("p",null,"... and how to do it:"),(0,o.kt)("h2",{id:"allow-reload-or-prevent-a-reload-of-the-same-component"},"Allow reload or prevent a reload of the same component"),(0,o.kt)("p",null,"A worker can press their browser's reload button and by default JATOS will respond with the same component again: by default, the worker can do a component multiple times. To prevent this each ",(0,o.kt)("strong",{parentName:"p"},"component properties")," has a checkbox ",(0,o.kt)("em",{parentName:"p"},"Allow reload"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GUI Screenshot",src:n(6364).Z,width:"972",height:"313"})),(0,o.kt)("p",null,"If you want to prevent this behaviour uncheck the box. If a participant reloads the page, they will see an error message. Then the study run will be finished and put to state FAIL. Since each component properties has their own ",(0,o.kt)("em",{parentName:"p"},"Allow reload")," checkbox it can be defined differently for each component, e.g. reloading is allowed in the introduction but is prohibited in the actual experiment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hint"),": You should tell your workers in your study description if you disable reloads, in order to prevent them from accidentally pressing the reload button and failing your study. Consider also adding a warning (e.g. a pop-up) informing participants that they will not be able to continue with the study.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Another hint"),": The (unchecked) ",(0,o.kt)("em",{parentName:"p"},"Allow reload")," and the (checked) ",(0,o.kt)("em",{parentName:"p"},"Linear study flow")," properties can be combined to achieve a strictly increasing study flow."),(0,o.kt)("h2",{id:"ensure-a-linear-study-flow"},"Ensure a linear study flow"),(0,o.kt)("p",null,"A worker can press their browsers back button and by default JATOS will response with the previous component, the one that was done before by the worker. This might allow a worker to divert from the intended study flow. To prevent this each ",(0,o.kt)("strong",{parentName:"p"},"study properties")," has a checkbox ",(0,o.kt)("em",{parentName:"p"},"Linear study flow"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Study Properties Screenshot",src:n(8199).Z,width:"886",height:"321"})),(0,o.kt)("p",null,"If you want to enforce a linear study flow check the box. Then, if a participant tries to go backwards in their browser, they will see an error message instead. The study run will be finished and put to state FAIL."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hint"),": You should tell your participants in your study's description if you enforce a linear study flow to prevent them from accidentally pressing the back button and failing your study. Consider also adding a warning (e.g. a pop-up) informing participants that they will not be able to continue with the study.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Another hint"),": If you want to loop over components, un-check this box. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Yet another hint"),": The (unchecked) ",(0,o.kt)("em",{parentName:"p"},"Allow reload")," and the (checked) ",(0,o.kt)("em",{parentName:"p"},"Linear study flow")," properties can be combined to achieve a strictly increasing study flow."),(0,o.kt)("h2",{id:"single-use-study-links---prevent-workers-running-the-study-twice"},"Single-use study links - prevent workers running the study twice"),(0,o.kt)("p",null,"Often you want to prevent a participant from running the same study twice. To achieve this use the ",(0,o.kt)("em",{parentName:"p"},"single-use")," study link types: ",(0,o.kt)("em",{parentName:"p"},"Personal Single")," and ",(0,o.kt)("em",{parentName:"p"},"General Single"),"."),(0,o.kt)("p",null,"Read more on the ",(0,o.kt)("a",{parentName:"p",href:"Worker-Types.html"},"different worker types available in JATOS")," and ",(0,o.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html"},"about study links"),"."),(0,o.kt)("h2",{id:"allow-preview"},"Allow preview"),(0,o.kt)("p",null,"Sometimes, when you hand out study links, your participants mindlessly click on the link right away and are not aware that they have already started the study. If they do not intend to run the study right away this is a problem with ",(0,o.kt)("em",{parentName:"p"},"single-use")," study links (",(0,o.kt)("strong",{parentName:"p"},"General Single")," or ",(0,o.kt)("strong",{parentName:"p"},"Personal Single"),")."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GUI Screenshot",src:n(8154).Z,width:"886",height:"321"})),(0,o.kt)("p",null,"With allowing previews in the ",(0,o.kt)("strong",{parentName:"p"},"study properties")," you can let your workers peek into a study without devaluing the study link. They can run the ",(0,o.kt)("strong",{parentName:"p"},"first component")," of your study as often as they wish and the study link gets devalued only after starting the second component. This only makes sense if you don't put your actual experiment in the first component, but some kind of description and/or consent form. Then your workers can click the study link, see the description and decide to do the study later."))}d.isMDXComponent=!0},6364:function(e,t,n){t.Z=n.p+"assets/images/component-properties-reload-1e8059fb543f918f96bd4cb18c912f1b.png"},8154:function(e,t,n){t.Z=n.p+"assets/images/study-properties-allow-preview-371-e81ad8bfc318acb6eb14420fd5618199.png"},8199:function(e,t,n){t.Z=n.p+"assets/images/study-properties-linear-flow_371-e11bdc6c7fce655f3bba5e076b2af106.png"}}]);