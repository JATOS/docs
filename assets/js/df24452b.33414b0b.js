"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,c=d["".concat(s,".").concat(m)]||d[m]||k[m]||l;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const l={title:"Worker Types",slug:"/Worker-Types.html",sidebar_position:3},o=void 0,i={unversionedId:"Run_your_study/Worker-Types",id:"Run_your_study/Worker-Types",title:"Worker Types",description:"Overview",source:"@site/docs/Run_your_study/Worker-Types.md",sourceDirName:"Run_your_study",slug:"/Worker-Types.html",permalink:"/next/Worker-Types.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Run_your_study/Worker-Types.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1731093692,formattedLastUpdatedAt:"Nov 8, 2024",sidebarPosition:3,frontMatter:{title:"Worker Types",slug:"/Worker-Types.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run your Study with Study Links",permalink:"/next/Run-your-Study-with-Study-Links.html"},next:{title:"Restricting study flow - reloading, linear studies, single-use workers and previews",permalink:"/next/Restricting-study-flow.html"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"Jatos Worker",id:"jatos-worker",level:3},{value:"Personal Single Worker",id:"personal-single-worker",level:3},{value:"Personal Multiple Worker",id:"personal-multiple-worker",level:3},{value:"General Single Worker",id:"general-single-worker",level:3},{value:"General Multiple Worker",id:"general-multiple-worker",level:3},{value:"MTurk (Sandbox) Worker",id:"mturk-sandbox-worker",level:3}],u={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Following Amazon Mechanical Turk\u2019s terminology, a worker in JATOS is a person who runs a study. Different worker types access a study in different ways. For example, some workers can run the same study multiple times, whereas others can do it only once."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Jatos"),(0,a.kt)("th",{parentName:"tr",align:null},"Personal Single"),(0,a.kt)("th",{parentName:"tr",align:null},"Personal Multiple"),(0,a.kt)("th",{parentName:"tr",align:null},"General Single"),(0,a.kt)("th",{parentName:"tr",align:null},"General Multiple"),(0,a.kt)("th",{parentName:"tr",align:null},"MTurk (Sandbox)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Typical use")),(0,a.kt)("td",{parentName:"tr",align:null},"During study development"),(0,a.kt)("td",{parentName:"tr",align:null},"Small targeted group, each one of them gets a link"),(0,a.kt)("td",{parentName:"tr",align:null},"Small targeted group of workers who pilot the study or need to do it multiple times"),(0,a.kt)("td",{parentName:"tr",align:null},"Bigger groups but with less control; link shared e.g. via social media"),(0,a.kt)("td",{parentName:"tr",align:null},"Bigger groups and where the workers need to do it multiple times"),(0,a.kt)("td",{parentName:"tr",align:null},"For Amazon Mechanical Turk")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Created when?")),(0,a.kt)("td",{parentName:"tr",align:null},"Together with the JATOS user"),(0,a.kt)("td",{parentName:"tr",align:null},"When you create the link"),(0,a.kt)("td",{parentName:"tr",align:null},"When you create the link"),(0,a.kt)("td",{parentName:"tr",align:null},"On-the-fly whenever someone uses the link"),(0,a.kt)("td",{parentName:"tr",align:null},"On-the-fly whenever someone uses the link"),(0,a.kt)("td",{parentName:"tr",align:null},"On-the-fly after a MTurk worker clicked on the HIT link")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Repeat the same study with the same link")),(0,a.kt)("td",{parentName:"tr",align:null},"(has no links)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"}),"(keeps the same worker)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"}),"(creates a new worker each time)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Run different studies with the same worker")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Supports ",(0,a.kt)("a",{parentName:"strong",href:"Worker-Types.html#preview-links"},"preview of studies"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Possible bulk creation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-remove-sign"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Run ",(0,a.kt)("a",{parentName:"strong",href:"Example-Group-Studies"},"group studies"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))))),(0,a.kt)("h3",{id:"jatos-worker"},"Jatos Worker"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Jatos workers can run any study as many times as they want.")),(0,a.kt)("p",null,"Jatos workers run a study (or any of its components individually) by clicking on the ",(0,a.kt)("em",{parentName:"p"},"Run")," buttons in the GUI. Jatos workers are usually the ",(0,a.kt)("strong",{parentName:"p"},"researchers trying out their own studies"),". Each JATOS user (i.e., anybody with a JATOS login) has their own Jatos worker. They are not meant to be used by participants."),(0,a.kt)("h3",{id:"personal-single-worker"},"Personal Single Worker"),(0,a.kt)("p",null,"With a Personal Single study link ",(0,a.kt)("strong",{parentName:"p"},"a study can be run only once")," (",(0,a.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#allow-preview"},"*But see Allow Preview"),"). You can think of them as ",(0,a.kt)("em",{parentName:"p"},"personalized links with single access"),". Each Personal Single study link corresponds to a Personal Single worker."),(0,a.kt)("p",null,"Usually you would send a Personal Single study link to workers that you contact individually. Personal Single study links are useful in small studies, where it's feasible to contact each worker individually, or (e.g.) you want to be able to pair up several results (either from the same or different studies) in a longitudinal design."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#personal-type-links"},"More about how to generate Personal type study links")),(0,a.kt)("h3",{id:"personal-multiple-worker"},"Personal Multiple Worker"),(0,a.kt)("p",null,"With a Personal Multiple study link the worker can ",(0,a.kt)("strong",{parentName:"p"},"run a study as many times as they want"),". Each Personal Multiple study link corresponds to a Personal Multiple worker."),(0,a.kt)("p",null,"You could send Personal Multiple study links to your pilot workers."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#personal-type-links"},"More about how to generate Personal type study links")),(0,a.kt)("h3",{id:"general-single-worker"},"General Single Worker"),(0,a.kt)("p",null,"This study link type can be used ",(0,a.kt)("strong",{parentName:"p"},"many times by different participants to run a study but only once per browser")," (",(0,a.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#allow-preview"},"*But see Allow Preview"),"). Each time the link is used a new General Single worker is created on-the-fly."),(0,a.kt)("p",null,"You could distribute a General Single study link through social media, like twitter, a mailing list or posting it on a public website. It is essentially useful for cases where you want to collect data from a large number of workers."),(0,a.kt)("p",null,"Keep in mind, however, that JATOS uses the browser's cookies to decide whether a study link was already used. If someone uses a different computer, a new browser, or simply deletes their browser's cookies, then JATOS will assume that it's an unused study link. So the same person could (with some effort) use a General Single link several times."),(0,a.kt)("h3",{id:"general-multiple-worker"},"General Multiple Worker"),(0,a.kt)("p",null,"A General Multiple study link is the least restrictive type and can be used ",(0,a.kt)("strong",{parentName:"p"},"many times by different participants to run a study"),". The difference to a General Single is that the General Multiple study link can be used repeatedly ",(0,a.kt)("strong",{parentName:"p"},"even in the same browser"),". Each time a General Multiple study link is used a new General Multiple worker is created on-the-fly."),(0,a.kt)("h3",{id:"mturk-sandbox-worker"},"MTurk (Sandbox) Worker"),(0,a.kt)("p",null,"MTurk and MTurk Sandbox workers access a JATOS study through a study link in Amazon's Mechanical Turk (MTurk)."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Connect-to-Mechanical-Turk.html"},"More about MTurk study links")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DATA PRIVACY NOTE:")," If the same worker from MTurk does two of your studies, the two results will be paired with the same MTurk worker in JATOS. This means that you could gather data from different studies, without your workers ever consenting to it. For this reason, we recommend that you delete your data from JATOS as soon as you finish a study. This way, if the same worker from MTurk takes part in a different study, they will get a new MTurk worker, and you will not be able to automatically link their data between different studies. See our ",(0,a.kt)("a",{parentName:"p",href:"Data-Privacy-and-Ethics"},"Data Privacy and Ethics")," page for more details on this."))}k.isMDXComponent=!0}}]);