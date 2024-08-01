"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7467],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var s=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=s.createContext({}),u=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return s.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(a),m=r,c=h["".concat(o,".").concat(m)]||h[m]||d[m]||n;return a?s.createElement(c,l(l({ref:t},p),{},{components:a})):s.createElement(c,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<n;u++)l[u]=a[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},57451:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var s=a(83117),r=(a(67294),a(3905));const n={title:"Manage results",slug:"/Manage-Results.html",sidebar_position:8},l=void 0,i={unversionedId:"Run_your_study/Manage-Results",id:"version-3.9.1/Run_your_study/Manage-Results",title:"Manage results",description:"Results pages",source:"@site/versioned_docs/version-3.9.1/Run_your_study/Manage-Results.md",sourceDirName:"Run_your_study",slug:"/Manage-Results.html",permalink:"/Manage-Results.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Run_your_study/Manage-Results.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1722508647,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:8,frontMatter:{title:"Manage results",slug:"/Manage-Results.html",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Write cross-sectional and longitudinal studies",permalink:"/Cross-sectional-and-longitudinal-studies.html"},next:{title:"End page - After your study finished",permalink:"/End-page-after-your-study-finished.html"}},o={},u=[{value:"Results pages",id:"results-pages",level:2},{value:"Interacting with the results table",id:"interacting-with-the-results-table",level:2},{value:"View result data",id:"view-result-data",level:3},{value:"Selecting results",id:"selecting-results",level:3},{value:"Filter results &amp; filter builder",id:"filter-results--filter-builder",level:3},{value:"Export results",id:"export-results",level:2},{value:"Export a JATOS Results Archive (JRZIP)",id:"export-a-jatos-results-archive-jrzip",level:3},{value:"Export result data",id:"export-result-data",level:3},{value:"Export result files",id:"export-result-files",level:3},{value:"Export result metadata",id:"export-result-metadata",level:3},{value:"Delete results",id:"delete-results",level:2},{value:"Table columns and customization",id:"table-columns-and-customization",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"results-pages"},"Results pages"),(0,r.kt)("p",null,"Once you collected data for a study, you can see and manage the results by clicking on one of the ",(0,r.kt)("em",{parentName:"p"},"Results")," buttons."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results Link",src:a(48715).Z,width:"1917",height:"424"})),(0,r.kt)("p",null,"The image below is an example of a study results page, but there are result pages for components, batches or groups as well. There's quite a lot of information here, so we'll go through each piece."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(96546).Z,width:"1918",height:"936"})),(0,r.kt)("h2",{id:"interacting-with-the-results-table"},"Interacting with the results table"),(0,r.kt)("h3",{id:"view-result-data"},"View result data"),(0,r.kt)("p",null,"Each study result has an arrow on the left. If you click on it, the result data for this study run will be displayed underneath the row. Since a study can have several components and each component produces its own result data there can be several result data each in its own row (like in the screenshot below). By clicking on ",(0,r.kt)("em",{parentName:"p"},"show all")," one can see the whole data if it doesn't fit all in the box."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(86555).Z,width:"1920",height:"835"})),(0,r.kt)("h3",{id:"selecting-results"},"Selecting results"),(0,r.kt)("p",null,"There is a checkbox on the left side of each row to select/deselect a specific result. You can also use the buttons on the bar above to select/deselect all results in the table. Additionally you can select only the filtered ones or only the visible ones."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(37418).Z,width:"1920",height:"928"})),(0,r.kt)("h3",{id:"filter-results--filter-builder"},"Filter results & filter builder"),(0,r.kt)("p",null,"The filter lets you search all all fields in the results table (the metadata). "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(96401).Z,width:"1920",height:"197"})),(0,r.kt)("p",null,'If you type, for example, "Personal Single" in the ',(0,r.kt)("em",{parentName:"p"},"Filter")," field, only the results ran by a Personal Single worker will appear on the table. You can then click on ",(0,r.kt)("em",{parentName:"p"},"Filtered")," to select them and export only those results that you're interested in. "),(0,r.kt)("p",null,"For more elaborate filtering you can use Regular Expressions. Click on ",(0,r.kt)("em",{parentName:"p"},"RegEx")," to activate this."),(0,r.kt)("p",null,"By default filtering in case insensitive but you can turn on case sensitive filtering by clicking on ",(0,r.kt)("em",{parentName:"p"},"Aa"),"."),(0,r.kt)("p",null,"Sometimes the simple filter is not precise enough or you want to combine multiple filters: For those cases the ",(0,r.kt)("em",{parentName:"p"},"Filter Builder")," offers complex criteria with logical conjunctions ('and', 'or'). It's also possible to filter for certain dates."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(58614).Z,width:"1920",height:"442"})),(0,r.kt)("h2",{id:"export-results"},"Export results"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(32649).Z,width:"1920",height:"297"})),(0,r.kt)("p",null,"Once you selected the results you're interested in, click ",(0,r.kt)("em",{parentName:"p"},"Export Results"),". You can choose what you want to export: everything in a JATOS Results Archive, only the result metadata, only the result data, or only the files. If in doubt which one to choose, get the JATOS Result Archive - it contains everything."),(0,r.kt)("h3",{id:"export-a-jatos-results-archive-jrzip"},"Export a JATOS Results Archive (JRZIP)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(76405).Z,width:"1920",height:"297"})),(0,r.kt)("p",null,"Since version 3.8.1 this is the standard export format. It ",(0,r.kt)("strong",{parentName:"p"},"aggregates result data, result files and result metadata")," in one ZIP archive file with a ",(0,r.kt)("em",{parentName:"p"},".jrzip")," file extension (",(0,r.kt)("a",{parentName:"p",href:"JATOS-Results-Archive-JRZIP.html"},"more information about JRZIP"),")."),(0,r.kt)("h3",{id:"export-result-data"},"Export result data"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(31930).Z,width:"1920",height:"297"})),(0,r.kt)("p",null,"The result data are the genuine data that got submitted during study runs without any metadata or result files. You can choose between ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ZIP"))," or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Plain Text"))," format. In the ",(0,r.kt)("em",{parentName:"p"},"ZIP")," format the result data are stored in a file system structure with folders for study results and component results, similar to the ",(0,r.kt)("em",{parentName:"p"},"JRZIP")," format. The ",(0,r.kt)("em",{parentName:"p"},"Plain Text")," format is familiar from previous JATOS version: all result data are put together in one text file with one result per line."),(0,r.kt)("h3",{id:"export-result-files"},"Export result files"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(11645).Z,width:"1920",height:"297"})),(0,r.kt)("p",null,"The result files are the files that were uploaded during study runs. They are exported as an ZIP archive with a file system structure that represents the study results and their component results. "),(0,r.kt)("h3",{id:"export-result-metadata"},"Export result metadata"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(97764).Z,width:"1920",height:"297"})),(0,r.kt)("p",null,"The metadata are mostly the data that you see in the result table but that do not belong to the actual result data or files, e.g. worker ID or start time. You can choose between ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"JSON"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"CSV"))," format. "),(0,r.kt)("h2",{id:"delete-results"},"Delete results"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(19261).Z,width:"1920",height:"197"})),(0,r.kt)("p",null,"You can click ",(0,r.kt)("em",{parentName:"p"},"Delete")," to remove the selected results. That includes result data, result files and metadata. Keep in mind ",(0,r.kt)("strong",{parentName:"p"},"there's no undo function for this"),". "),(0,r.kt)("h2",{id:"table-columns-and-customization"},"Table columns and customization"),(0,r.kt)("p",null,"You can show and hide the columns displayed in the table with the drop-down menu under the ",(0,r.kt)("em",{parentName:"p"},"Customize")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Results View screenshot",src:a(33351).Z,width:"1920",height:"197"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Result ID")," - An identifier assigned by JATOS to each study result. A study result is actually a set of component results, each of them with their own (different) ",(0,r.kt)("em",{parentName:"p"},"Component Result ID"),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UUID")," - universally unique identifier - similar to Result ID but this ID is unique over different JATOS installations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Study code")," - The study code that was used to start this study run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start time")," - Time at which the first component of the study was started. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"End time")," - Time at which the last component of the study was finished. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Last seen"),' - Each component running in a worker\'s browser sends a "heartbeat" regularly back to JATOS. Last Seen is the time of the last heartbeat received. The heartbeat stops either when the study is finished or when the browser tab is closed. The default period of the heartbeat is 2 minutes but you can change it through a ',(0,r.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossetheartbeatperiod"},(0,r.kt)("em",{parentName:"a"},"jatos.js")," function"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Duration")," - Simply the time difference between the start and end time.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Batch")," - Name of the batch the worker belongs to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Worker ID")," - Assigned by JATOS. Each worker has its own Worker ID. JATOS' admin user will always have Worker ID 1. You can click on a Worker ID to see all the worker's results. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Worker type")," - Displays the ",(0,r.kt)("a",{parentName:"p",href:"Worker-Types.html"},"Worker type")," that ran the study. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MTurk worker ID")," - Only applies to studies run by MTurk workers. An identifier given by Amazon Mechanical Turk's, not by JATOS.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MTurk confirmation code")," - Only applies to studies run by MTurk workers. The Confirmation Code is generated by JATOS and given to the worker as proof of his work.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Group ID")," - Only available for group studies. It identifies the group.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Files")," - Indicates result file upload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data size")," - (Component Results only) - Size of the result data as it is stored in the database")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Files (size)")," - (Component Results only) - List of the uploaded result files with their size in brackets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"State")),(0,r.kt)("p",{parentName:"li"},"Possible states for ",(0,r.kt)("em",{parentName:"p"},"study results")," are: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PRE - ",(0,r.kt)("a",{parentName:"li",href:"Restricting-study-flow.html#preview-links"},"Preview of study")," (exists only in PersonalSingleWorker and GeneralSingleWorker)"),(0,r.kt)("li",{parentName:"ul"},"STARTED - Study started"),(0,r.kt)("li",{parentName:"ul"},"DATA_RETRIEVED - The very beginning of the study. It means the first component of the study was loaded in the worker's browser and started running. (It literally means the browser asked for the initialization data.)"),(0,r.kt)("li",{parentName:"ul"},"FINISHED - Study finished. All result data and files that were sent by the study in the browser were safely stored in JATOS."),(0,r.kt)("li",{parentName:"ul"},"ABORTED - Study aborted by worker and all result data and files were deleted."),(0,r.kt)("li",{parentName:"ul"},"FAIL - Something went wrong, study stopped and cannot continue")),(0,r.kt)("p",{parentName:"li"},"Possible states for ",(0,r.kt)("em",{parentName:"p"},"component results")," are:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"STARTED - Component started"),(0,r.kt)("li",{parentName:"ul"},"DATA_RETRIEVED -  The very beginning of the component. It means the component was loaded in the worker's browser and started running. (It literally means the browser asked for the initialization data.)"),(0,r.kt)("li",{parentName:"ul"},"FINISHED - Component finished. All result data and files that were sent by the study in the browser were safely stored in JATOS."),(0,r.kt)("li",{parentName:"ul"},"RELOADED - Component was reloaded (usually by clicking the browser's reload button)"),(0,r.kt)("li",{parentName:"ul"},"ABORTED - This component's study was aborted by worker and all result data and files were deleted."),(0,r.kt)("li",{parentName:"ul"},"FAIL - Something went wrong, the study stopped and cannot continue"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Messages")," - A message that can be set together with ",(0,r.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudy"},(0,r.kt)("inlineCode",{parentName:"a"},"jatos.endStudy"))," or ",(0,r.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosabortstudy"},(0,r.kt)("inlineCode",{parentName:"a"},"jatos.abortStudy")),"."))))}d.isMDXComponent=!0},48715:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_link-673a80299dd827dde099af7eaaf2128b.png"},86555:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_11-3f11b9f4583bf1fc7c4e6aa0ad4e3e57.png"},96546:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_12-f408b531ba1609fcfca10d3a92a5bffb.png"},37418:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_13-7ffaf3ca2d363f39e5ad20b84a444cde.png"},96401:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_14-5c24004b0d839a15db64939ac7e8e2c4.png"},58614:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_15-ccf74f8d24a8bb5ae1ef9163513f339a.png"},32649:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_16-198b515f2c618c0de250391a2f1266d0.png"},76405:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_17-ddcb64f29a06c3b469dbc97494841df7.png"},31930:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_18-230b8bf81a86f0eafc4fadd5b406d1ba.png"},11645:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_19-043de52eb1081124cc243527217baa72.png"},97764:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_20-58579b2f45c9266f28e5dcc1bb653ff8.png"},19261:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_21-7b506924716610e1d4f301f8fef73845.png"},33351:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/results_view_22-02a2638221af57c3424cf1ded5005e4a.png"}}]);