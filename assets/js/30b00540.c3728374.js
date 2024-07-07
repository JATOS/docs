"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=u(n),y=r,m=k["".concat(o,".").concat(y)]||k[y]||d[y]||l;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},15267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const l={title:"Worker and study link types",slug:"/Worker-Types.html",sidebar_position:3},s=void 0,i={unversionedId:"Run_your_study/Worker-Types",id:"version-3.9.1/Run_your_study/Worker-Types",title:"Worker and study link types",description:"Overview",source:"@site/versioned_docs/version-3.9.1/Run_your_study/Worker-Types.md",sourceDirName:"Run_your_study",slug:"/Worker-Types.html",permalink:"/Worker-Types.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Run_your_study/Worker-Types.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1720351555,formattedLastUpdatedAt:"Jul 7, 2024",sidebarPosition:3,frontMatter:{title:"Worker and study link types",slug:"/Worker-Types.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run your study with study links",permalink:"/Run-your-Study-with-Study-Links.html"},next:{title:"Restricting study flow - reloading, linear studies, single-use workers and previews",permalink:"/Restricting-study-flow.html"}},o={},u=[{value:"Overview",id:"overview",level:3},{value:"Jatos worker and study link",id:"jatos-worker-and-study-link",level:3},{value:"Personal Single worker and study link",id:"personal-single-worker-and-study-link",level:3},{value:"Personal Multiple worker and study link",id:"personal-multiple-worker-and-study-link",level:3},{value:"General Single worker and study link",id:"general-single-worker-and-study-link",level:3},{value:"General Multiple worker and study link",id:"general-multiple-worker-and-study-link",level:3},{value:"MTurk and MTurk Sandbox",id:"mturk-and-mturk-sandbox",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Following Amazon Mechanical Turk\u2019s terminology, a worker in JATOS is a person who runs a study (also called participant). JATOS has different worker types and different worker types access a study in different ways. For example, some worker types can run the same study multiple times, whereas others can do it only once."),(0,r.kt)("p",null,"A study link is basically the URL that you hand out to a worker. A worker is always assoziated to a study link and share the same type naming. Also read ",(0,r.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html"},"Run your study with study links")," to get more information about study links."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Jatos"),(0,r.kt)("th",{parentName:"tr",align:null},"Personal Single"),(0,r.kt)("th",{parentName:"tr",align:null},"Personal Multiple"),(0,r.kt)("th",{parentName:"tr",align:null},"General Single"),(0,r.kt)("th",{parentName:"tr",align:null},"General Multiple"),(0,r.kt)("th",{parentName:"tr",align:null},"MTurk (Sandbox)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Typical use")),(0,r.kt)("td",{parentName:"tr",align:null},"During study development"),(0,r.kt)("td",{parentName:"tr",align:null},"Small targeted group - each one of them gets their own study link"),(0,r.kt)("td",{parentName:"tr",align:null},"Small targeted group of workers who pilot the study or need to do it multiple times - each one of them gets their own study link"),(0,r.kt)("td",{parentName:"tr",align:null},"Bigger groups but with less control - link is shared e.g. via social media"),(0,r.kt)("td",{parentName:"tr",align:null},"Bigger groups and where the workers need to do the study multiple times - link is shared e.g. via social media"),(0,r.kt)("td",{parentName:"tr",align:null},"For Amazon Mechanical Turk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Repeat the same study with the same study link")),(0,r.kt)("td",{parentName:"tr",align:null},"(has no links)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"}),"(keeps the same worker)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"}),"(creates a new worker each time)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Run different studies with the same worker")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Supports ",(0,r.kt)("a",{parentName:"strong",href:"Worker-Types.html#preview-links"},"preview of studies"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Possible bulk creation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-remove-sign"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Run ",(0,r.kt)("a",{parentName:"strong",href:"Example-Group-Studies"},"group studies"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))))),(0,r.kt)("h3",{id:"jatos-worker-and-study-link"},"Jatos worker and study link"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Jatos workers can run any study as many times as they want.")),(0,r.kt)("p",null,"Jatos workers run a study (or any of its components individually) by clicking on the ",(0,r.kt)("em",{parentName:"p"},"Run")," buttons in the GUI. Jatos workers are usually the ",(0,r.kt)("strong",{parentName:"p"},"researchers trying out their own studies"),". Each JATOS user (i.e., anybody with a JATOS login) has their own Jatos worker. They are not meant to be used by participants."),(0,r.kt)("h3",{id:"personal-single-worker-and-study-link"},"Personal Single worker and study link"),(0,r.kt)("p",null,"With a Personal Single study link ",(0,r.kt)("strong",{parentName:"p"},"a study can be run only once")," (",(0,r.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#allow-preview"},"*But see Allow Preview"),"). You can think of them as ",(0,r.kt)("em",{parentName:"p"},"personalized links with single access"),". Each Personal Single study link corresponds to a Personal Single worker."),(0,r.kt)("p",null,"Usually you would send a Personal Single study link to workers that you contact individually. Personal Single study links are useful in small studies, where it's feasible to contact each worker individually, or (e.g.) you want to be able to pair up several results (either from the same or different studies) in a longitudinal design."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#personal-type-links"},"More about how to generate Personal type study links")),(0,r.kt)("h3",{id:"personal-multiple-worker-and-study-link"},"Personal Multiple worker and study link"),(0,r.kt)("p",null,"With a Personal Multiple study link the worker can ",(0,r.kt)("strong",{parentName:"p"},"run a study as many times as they want"),". Each Personal Multiple study link corresponds to a Personal Multiple worker."),(0,r.kt)("p",null,"You could send Personal Multiple study links to your pilot workers."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#personal-type-links"},"More about how to generate Personal type study links")),(0,r.kt)("h3",{id:"general-single-worker-and-study-link"},"General Single worker and study link"),(0,r.kt)("p",null,"This study link type can be used ",(0,r.kt)("strong",{parentName:"p"},"many times by different participants to run a study but only once per browser")," (*But see: ",(0,r.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#allow-preview"},"Allow Preview"),"). Each time the link is used a new General Single worker is created on-the-fly."),(0,r.kt)("p",null,"You could distribute a General Single study link through social media, like X/Twitter, a mailing list or posting it on a public website. It is essentially useful for cases where you want to collect data from a large number of workers."),(0,r.kt)("p",null,"Keep in mind, however, that JATOS uses the browser's cookies to decide whether a study link was already used. If someone uses a different computer, a new browser, or simply deletes their browser's cookies, then JATOS will assume that it's an unused study link. So the same person could (with some effort) use a General Single link several times."),(0,r.kt)("h3",{id:"general-multiple-worker-and-study-link"},"General Multiple worker and study link"),(0,r.kt)("p",null,"A General Multiple study link is the least restrictive type and can be used ",(0,r.kt)("strong",{parentName:"p"},"many times by different participants to run a study"),". The difference to a General Single is that the General Multiple study link can be used repeatedly ",(0,r.kt)("strong",{parentName:"p"},"even in the same browser"),". Each time a General Multiple study link is used a new General Multiple worker is created on-the-fly."),(0,r.kt)("h3",{id:"mturk-and-mturk-sandbox"},"MTurk and MTurk Sandbox"),(0,r.kt)("p",null,"MTurk and MTurk Sandbox workers access a JATOS study through a study link in Amazon's Mechanical Turk (MTurk)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Connect-to-Mechanical-Turk.html"},"More about MTurk study links")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DATA PRIVACY NOTE:")," If the same worker from MTurk does two of your studies, the two results will be paired with the same MTurk worker in JATOS. This means that you could gather data from different studies, without your workers ever consenting to it. For this reason, we recommend that you delete your data from JATOS as soon as you finish a study. This way, if the same worker from MTurk takes part in a different study, they will get a new MTurk worker, and you will not be able to automatically link their data between different studies. See our ",(0,r.kt)("a",{parentName:"p",href:"Data-Privacy-and-Ethics"},"Data Privacy and Ethics")," page for more details on this."))}d.isMDXComponent=!0}}]);