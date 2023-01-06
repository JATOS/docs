"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1962],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(o,".").concat(g)]||c[g]||k[g]||l;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9009:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],s={title:"Worker Types",slug:"/Worker-Types.html",sidebar_position:3},o=void 0,p={unversionedId:"Run_your_study/Worker-Types",id:"version-3.7.1/Run_your_study/Worker-Types",title:"Worker Types",description:"Overview",source:"@site/versioned_docs/version-3.7.1/Run_your_study/Worker-Types.md",sourceDirName:"Run_your_study",slug:"/Worker-Types.html",permalink:"/Worker-Types.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.7.1/Run_your_study/Worker-Types.md",tags:[],version:"3.7.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1673041912,formattedLastUpdatedAt:"1/6/2023",sidebarPosition:3,frontMatter:{title:"Worker Types",slug:"/Worker-Types.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Run your Study with Study Links",permalink:"/Run-your-Study-with-Study-Links.html"},next:{title:"Restricting study flow - reloading, linear studies, single-use workers and previews",permalink:"/Restricting-study-flow.html"}},u=[{value:"Overview",id:"overview",children:[],level:3},{value:'<span className="glyphicon glyphicon-jatos"></span> Jatos Worker',id:"-jatos-worker",children:[],level:3},{value:'<span className="glyphicon glyphicon-personal-single"></span> Personal Single Worker',id:"-personal-single-worker",children:[],level:3},{value:'<span className="glyphicon glyphicon-personal-multiple"></span> Personal Multiple Worker',id:"-personal-multiple-worker",children:[],level:3},{value:'<span className="glyphicon glyphicon-general-single"></span> General Single Worker',id:"-general-single-worker",children:[],level:3},{value:'<span className="glyphicon glyphicon-general-multiple"></span> General Multiple Worker',id:"-general-multiple-worker",children:[],level:3},{value:'<span className="glyphicon glyphicon-mturk"></span> MTurk (Sandbox) Worker',id:"-mturk-sandbox-worker",children:[],level:3}],k={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Following Amazon Mechanical Turk\u2019s terminology, a worker in JATOS is a person who runs a study. Different worker types access a study in different ways. For example, some workers can run the same study multiple times, whereas others can do it only once."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Jatos"),(0,l.kt)("th",{parentName:"tr",align:null},"Personal Single"),(0,l.kt)("th",{parentName:"tr",align:null},"Personal Multiple"),(0,l.kt)("th",{parentName:"tr",align:null},"General Single"),(0,l.kt)("th",{parentName:"tr",align:null},"General Multiple"),(0,l.kt)("th",{parentName:"tr",align:null},"MTurk (Sandbox)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-jatos"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-personal-single"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-personal-multiple"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-general-single"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-general-multiple"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-mturk"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Typical use")),(0,l.kt)("td",{parentName:"tr",align:null},"During study development"),(0,l.kt)("td",{parentName:"tr",align:null},"Small targeted group, each one of them gets a link"),(0,l.kt)("td",{parentName:"tr",align:null},"Small targeted group of workers who pilot the study or need to do it multiple times"),(0,l.kt)("td",{parentName:"tr",align:null},"Bigger groups but with less control; link shared e.g. via social media"),(0,l.kt)("td",{parentName:"tr",align:null},"Bigger groups and where the workers need to do it multiple times"),(0,l.kt)("td",{parentName:"tr",align:null},"For Amazon Mechanical Turk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Created when?")),(0,l.kt)("td",{parentName:"tr",align:null},"Together with the JATOS user"),(0,l.kt)("td",{parentName:"tr",align:null},"When you create the link"),(0,l.kt)("td",{parentName:"tr",align:null},"When you create the link"),(0,l.kt)("td",{parentName:"tr",align:null},"On-the-fly whenever someone uses the link"),(0,l.kt)("td",{parentName:"tr",align:null},"On-the-fly whenever someone uses the link"),(0,l.kt)("td",{parentName:"tr",align:null},"On-the-fly after a MTurk worker clicked on the HIT link")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Repeat the same study with the same link")),(0,l.kt)("td",{parentName:"tr",align:null},"(has no links)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"}),"(keeps the same worker)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"}),"(creates a new worker each time)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Run different studies with the same worker")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Supports ",(0,l.kt)("a",{parentName:"strong",href:"Worker-Types.html#preview-links"},"preview of studies"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Possible bulk creation")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-remove-sign"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Run ",(0,l.kt)("a",{parentName:"strong",href:"Example-Group-Studies"},"group studies"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{className:"glyphicon glyphicon-ok-sign"}))))),(0,l.kt)("h3",{id:"-jatos-worker"},(0,l.kt)("span",{className:"glyphicon glyphicon-jatos"})," Jatos Worker"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Jatos workers can run any study as many times as they want.")),(0,l.kt)("p",null,"Jatos workers run a study (or any of its components individually) by clicking on the ",(0,l.kt)("em",{parentName:"p"},"Run")," buttons in the GUI. Jatos workers are usually the ",(0,l.kt)("strong",{parentName:"p"},"researchers trying out their own studies"),". Each JATOS user (i.e., anybody with a JATOS login) has their own Jatos worker. They are not meant to be used by participants."),(0,l.kt)("h3",{id:"-personal-single-worker"},(0,l.kt)("span",{className:"glyphicon glyphicon-personal-single"})," Personal Single Worker"),(0,l.kt)("p",null,"With a Personal Single study link ",(0,l.kt)("strong",{parentName:"p"},"a study can be run only once")," (",(0,l.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#allow-preview"},"*But see Allow Preview"),"). You can think of them as ",(0,l.kt)("em",{parentName:"p"},"personalized links with single access"),". Each Personal Single study link corresponds to a Personal Single worker."),(0,l.kt)("p",null,"Usually you would send a Personal Single study link to workers that you contact individually. Personal Single study links are useful in small studies, where it's feasible to contact each worker individually, or (e.g.) you want to be able to pair up several results (either from the same or different studies) in a longitudinal design."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#personal-type-links"},"More about how to generate Personal type study links")),(0,l.kt)("h3",{id:"-personal-multiple-worker"},(0,l.kt)("span",{className:"glyphicon glyphicon-personal-multiple"})," Personal Multiple Worker"),(0,l.kt)("p",null,"With a Personal Multiple study link the worker can ",(0,l.kt)("strong",{parentName:"p"},"run a study as many times as they want"),". Each Personal Multiple study link corresponds to a Personal Multiple worker."),(0,l.kt)("p",null,"You could send Personal Multiple study links to your pilot workers."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#personal-type-links"},"More about how to generate Personal type study links")),(0,l.kt)("h3",{id:"-general-single-worker"},(0,l.kt)("span",{className:"glyphicon glyphicon-general-single"})," General Single Worker"),(0,l.kt)("p",null,"This study link type can be used ",(0,l.kt)("strong",{parentName:"p"},"many times by different participants to run a study but only once per browser")," (",(0,l.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#allow-preview"},"*But see Allow Preview"),"). Each time the link is used a new General Single worker is created on-the-fly."),(0,l.kt)("p",null,"You could distribute a General Single study link through social media, like twitter, a mailing list or posting it on a public website. It is essentially useful for cases where you want to collect data from a large number of workers."),(0,l.kt)("p",null,"Keep in mind, however, that JATOS uses the browser's cookies to decide whether a study link was already used. If someone uses a different computer, a new browser, or simply deletes their browser's cookies, then JATOS will assume that it's an unused study link. So the same person could (with some effort) use a General Single link several times."),(0,l.kt)("h3",{id:"-general-multiple-worker"},(0,l.kt)("span",{className:"glyphicon glyphicon-general-multiple"})," General Multiple Worker"),(0,l.kt)("p",null,"A General Multiple study link is the least restrictive type and can be used ",(0,l.kt)("strong",{parentName:"p"},"many times by different participants to run a study"),". The difference to a General Single is that the General Multiple study link can be used repeatedly ",(0,l.kt)("strong",{parentName:"p"},"even in the same browser"),". Each time a General Multiple study link is used a new General Multiple worker is created on-the-fly."),(0,l.kt)("h3",{id:"-mturk-sandbox-worker"},(0,l.kt)("span",{className:"glyphicon glyphicon-mturk"})," MTurk (Sandbox) Worker"),(0,l.kt)("p",null,"MTurk and MTurk Sandbox workers access a JATOS study through a study link in Amazon's Mechanical Turk (MTurk)."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Connect-to-Mechanical-Turk.html"},"More about MTurk study links")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DATA PRIVACY NOTE:")," If the same worker from MTurk does two of your studies, the two results will be paired with the same MTurk worker in JATOS. This means that you could gather data from different studies, without your workers ever consenting to it. For this reason, we recommend that you delete your data from JATOS as soon as you finish a study. This way, if the same worker from MTurk takes part in a different study, they will get a new MTurk worker, and you will not be able to automatically link their data between different studies. See our ",(0,l.kt)("a",{parentName:"p",href:"Data-Privacy-and-Ethics"},"Data Privacy and Ethics")," page for more details on this."))}c.isMDXComponent=!0}}]);