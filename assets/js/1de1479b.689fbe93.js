"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(r),k=n,d=h["".concat(l,".").concat(k)]||h[k]||c[k]||o;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13210:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(83117),n=(r(67294),r(3905));const o={title:"Run your Study with Worker & Batch Manager",slug:"/Run-your-Study-with-Worker-and-Batch-Manager.html",sidebar_position:2},s=void 0,i={unversionedId:"Run_your_study/Run-your-Study-with-Worker-and-Batch-Manager",id:"version-3.6.1/Run_your_study/Run-your-Study-with-Worker-and-Batch-Manager",title:"Run your Study with Worker & Batch Manager",description:"Worker & Batch Manager",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Run-your-Study-with-Worker-and-Batch-Manager.md",sourceDirName:"Run_your_study",slug:"/Run-your-Study-with-Worker-and-Batch-Manager.html",permalink:"/3.6.x/Run-your-Study-with-Worker-and-Batch-Manager.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.6.1/Run_your_study/Run-your-Study-with-Worker-and-Batch-Manager.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1732281913,formattedLastUpdatedAt:"Nov 22, 2024",sidebarPosition:2,frontMatter:{title:"Run your Study with Worker & Batch Manager",slug:"/Run-your-Study-with-Worker-and-Batch-Manager.html",sidebar_position:2},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Deploy to a server installation",permalink:"/3.6.x/Deploy-to-a-server-installation.html"},next:{title:"Restricting study flow - reloading, linear studies, single-use workers and previews",permalink:"/3.6.x/Restricting-study-flow.html"}},l={},u=[{value:"Worker &amp; Batch Manager",id:"worker--batch-manager",level:2},{value:"How to let participants run your study: Workers",id:"how-to-let-participants-run-your-study-workers",level:2},{value:"Worker Setup",id:"worker-setup",level:3},{value:"Get Links",id:"get-links",level:4},{value:"See Workers",id:"see-workers",level:4},{value:"How to organize your workers: Batches",id:"how-to-organize-your-workers-batches",level:2},{value:"Batch Properties",id:"batch-properties",level:3},{value:"Groups (since v3.3.1)",id:"groups-since-v331",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"worker--batch-manager"},"Worker & Batch Manager"),(0,n.kt)("p",null,"The Worker & Batch Manager is the place where you generate links for your particpants to run the your study, organize them into Batches and handle their results."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Worker &amp; Batch manager screenshot",src:r(96330).Z,width:"1366",height:"744"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"This is a screenshot of JATOS v3.3.1. In earlier versions it was called Batch Manager and looked a bit simpler. Each row represents a batch which in turn is a collection of workers.")),(0,n.kt)("h2",{id:"how-to-let-participants-run-your-study-workers"},"How to let participants run your study: Workers"),(0,n.kt)("p",null,'During development of your study you would usually run it with the "Run" button in the study page. But then, when you are done developing you want to let others run your study - you want participants (or workers as they are called in JATOS) do it. For this JATOS lets you create links that you can hand out to your workers (e.g. via email or social media).'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Generate links and hand them to your workers")),(0,n.kt)("p",null,"JATOS has different worker types (each with different properties). That's well explained in a dedicated page: ",(0,n.kt)("a",{parentName:"p",href:"Worker-Types.html"},"Worker Types"),"."),(0,n.kt)("p",null,'Click on the "',(0,n.kt)("span",{class:"glyphicon glyphicon-chevron-right"}),'" button in the left in each batch row to expand the Worker Setup.'),(0,n.kt)("h3",{id:"worker-setup"},"Worker Setup"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Worker Setup",src:r(73365).Z,width:"1366",height:"744"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'Screenshot of a Worker & Batch Mangager with an open Worker Setup for the second batch. In JATOS version < 3.3.1 it is reachable via the "Worker Setup" button.')),(0,n.kt)("p",null,"The Worker Setup is the place where you generate or view (for Jatos and MTurk workers) the links for all workers types."),(0,n.kt)("h4",{id:"get-links"},"Get Links"),(0,n.kt)("p",null,"For ",(0,n.kt)("strong",{parentName:"p"},"Personal Single Workers")," and ",(0,n.kt)("strong",{parentName:"p"},"Personal Multiple Workers"),' click "',(0,n.kt)("strong",{parentName:"p"},"Get Links ",(0,n.kt)("span",{class:"glyphicon glyphicon-link"})),'" ("Add" in older versions). You can enter a description or identification for the worker in the \'Comments\' box. You can also create several at once.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"General Single Workers"),' only have one link. Each time somebody clicks on the link, JATOS will create a new separate worker. Get this link by clicking on "',(0,n.kt)("strong",{parentName:"p"},"Get Link ",(0,n.kt)("span",{class:"glyphicon glyphicon-link"})),'" in its row.'),(0,n.kt)("p",null,"How to connect to MTurk and create links to run with ",(0,n.kt)("strong",{parentName:"p"},"MTurk Workers")," is described in its own page: ",(0,n.kt)("a",{parentName:"p",href:"Connect-to-Mechanical-Turk.html"},"Connect to Mechanical Turk"),"."),(0,n.kt)("p",null,'Alternatively there is a "',(0,n.kt)("strong",{parentName:"p"},"Get Worker Links ",(0,n.kt)("span",{class:"glyphicon glyphicon-link"})),'" button in the top of the Worker & Batch Manger page that is a shortcut to create those links.'),(0,n.kt)("h4",{id:"see-workers"},"See Workers"),(0,n.kt)("p",null,'Click on the "',(0,n.kt)("span",{class:"glyphicon glyphicon-chevron-right"}),'" button in the left in each worker type row to expand it and see all generated workers. The column "Study State" indicates in which ',(0,n.kt)("a",{parentName:"p",href:"Manage-Results.html#state"},"state")," this study run currently is."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Worker Table",src:r(82116).Z,width:"1366",height:"744"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Screenshot with expanded Personal Single Worker")),(0,n.kt)("p",null,'Another way to see your workers is the button "',(0,n.kt)("strong",{parentName:"p"},"All Workers"),'" in the top of the Worker & Batch Manager page.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"All Workers Table",src:r(93203).Z,width:"1366",height:"744"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Screenshot of All Workers table: Here one can search and filter through all workers of all batches and all types that belong to this study.")),(0,n.kt)("h2",{id:"how-to-organize-your-workers-batches"},"How to organize your workers: Batches"),(0,n.kt)("p",null,'A batch is a collection of workers together with some properties. Using different batches is useful to organize your study runs, separate their results and vary their setup. E.g. you could separate a pilot run from the "proper" experiment, or you could use different batches for different worker types.'),(0,n.kt)("p",null,"Batches are organized in the Worker & Batch Manager. Here you can create and delete batches, access each batch's properties and edit its ",(0,n.kt)("strong",{parentName:"p"},"Batch Session Data")," or look through their results."),(0,n.kt)("p",null,'Each study comes with a "Default" batch.'),(0,n.kt)("p",null,"You can ",(0,n.kt)("strong",{parentName:"p"},"deactivate")," or ",(0,n.kt)("strong",{parentName:"p"},"activate")," a batch by clicking on the checkbox button in each batch row. A deactivated batch doesn't allow any study runs."),(0,n.kt)("h3",{id:"batch-properties"},"Batch Properties"),(0,n.kt)("p",null,"For each batch, you can limit the maximum number of workers that will ever be able to run a study in this batch by setting the ",(0,n.kt)("strong",{parentName:"p"},"Maximum Total Workers"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Worker &amp; Batch manager screenshot",src:r(88962).Z,width:"1692",height:"1462"})),(0,n.kt)("p",null,"Additionally you can switch on or off worker types in the ",(0,n.kt)("strong",{parentName:"p"},"Allowed Worker Types"),". Unchecked worker types are not allowed to run a study. Always check before you send out links to study runs that the corresponding worker types are switched on."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Group Properties")," relate to ",(0,n.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html#group-settings-in-each-batchs-properties"},"group studies"),"."),(0,n.kt)("h3",{id:"groups-since-v331"},"Groups (since v3.3.1)"),(0,n.kt)("p",null,"A batch is also the place where ",(0,n.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html"},"JATOS groups")," are handled. Here you can an get an overview of the Groups that belong to this batch: see what their member workers are or edit the ",(0,n.kt)("strong",{parentName:"p"},"Group Session Data"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Groups table",src:r(33741).Z,width:"1554",height:"889"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'Screenshot of a Groups table (available JATOS >= 3.3.1): "Active Workers" are the workers that are currently members in the group, "Past Workers" the ones that were members at one point in the past. "Results" shows only the study results that belong to this group. "Group State" can be START, FINISHED, or FIXED.')))}c.isMDXComponent=!0},88962:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/batch_properties-2bf165e3876623c64a91738865eb46a5.png"},33741:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/groups_view-7f280e8797158976488fe7a90e0bb59a.png"},96330:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/worker_and_batch_manager1-2bf985fa54f1d320141f4ae80c30d2fb.png"},73365:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/worker_and_batch_manager2-32e0c2740defc5d392116623c77c1667.png"},82116:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/worker_and_batch_manager4-ba2bb837340a259b934bd92821424cdb.png"},93203:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/worker_and_batch_manager6-2005455a339781f7d7e62be47d877625.png"}}]);