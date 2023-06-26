"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[5648],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(a),c=s,m=h["".concat(o,".").concat(c)]||h[c]||d[c]||r;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3800:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return u}});var n=a(3117),s=(a(7294),a(3905));const r={title:"Manage Results",slug:"/Manage-Results.html",sidebar_position:8},l=void 0,i={unversionedId:"Run_your_study/Manage-Results",id:"version-3.8.1/Run_your_study/Manage-Results",title:"Manage Results",description:"Results Pages",source:"@site/versioned_docs/version-3.8.1/Run_your_study/Manage-Results.md",sourceDirName:"Run_your_study",slug:"/Manage-Results.html",permalink:"/Manage-Results.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Run_your_study/Manage-Results.md",tags:[],version:"3.8.1",lastUpdatedBy:"kristian",lastUpdatedAt:1687796019,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:8,frontMatter:{title:"Manage Results",slug:"/Manage-Results.html",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Write cross-sectional and longitudinal studies",permalink:"/Cross-sectional-and-longitudinal-studies.html"},next:{title:"End page - After your study finished",permalink:"/End-page-after-your-study-finished.html"}},o={},u=[{value:"Results Pages",id:"results-pages",level:2},{value:"Interacting With The Results Table",id:"interacting-with-the-results-table",level:2},{value:"View Result Data",id:"view-result-data",level:3},{value:"Selecting Results",id:"selecting-results",level:3},{value:"Filter Results &amp; Filter Builder",id:"filter-results--filter-builder",level:3},{value:"Export Results",id:"export-results",level:2},{value:"Export a JATOS Results Archive (JRZIP)",id:"export-a-jatos-results-archive-jrzip",level:3},{value:"Export Result Metadata",id:"export-result-metadata",level:3},{value:"Export Result Data",id:"export-result-data",level:3},{value:"Export Result Files",id:"export-result-files",level:3},{value:"Delete Results",id:"delete-results",level:2},{value:"Table Columns and Customization",id:"table-columns-and-customization",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"results-pages"},"Results Pages"),(0,s.kt)("p",null,"Once you collected data for a study, you can see and manage the results by clicking on one of the ",(0,s.kt)("em",{parentName:"p"},"Results")," buttons."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results Link",src:a(3183).Z,width:"1919",height:"396"})),(0,s.kt)("p",null,"The image below is an example of a study results page, but there are result pages for components, batches or groups as well. There's quite a lot of information here, so we'll go through each piece."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(5964).Z,width:"1905",height:"956"})),(0,s.kt)("h2",{id:"interacting-with-the-results-table"},"Interacting With The Results Table"),(0,s.kt)("h3",{id:"view-result-data"},"View Result Data"),(0,s.kt)("p",null,"Each study result has an arrow on the left. If you click on it, the result data for this study run will be displayed underneath the row. Since a study can have several components and each component produces its own result data there can be several result data each in its own row (like in the screenshot below). By clicking on ",(0,s.kt)("em",{parentName:"p"},"show all")," one can see the whole data if it doesn't fit all in the box."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(3684).Z,width:"1547",height:"585"})),(0,s.kt)("h3",{id:"selecting-results"},"Selecting Results"),(0,s.kt)("p",null,"There is a checkbox on the left side of each row to select/deselect a specific result. You can also use the buttons on the bar above to select/deselect all results in the table. Additionally you can select only the filtered ones or only the visible ones."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(1466).Z,width:"1554",height:"777"})),(0,s.kt)("h3",{id:"filter-results--filter-builder"},"Filter Results & Filter Builder"),(0,s.kt)("p",null,"The filter lets you search all all fields in the results table (the metadata). "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(7049).Z,width:"1566",height:"116"})),(0,s.kt)("p",null,'If you type, for example, "Personal Single" in the ',(0,s.kt)("em",{parentName:"p"},"Filter")," field, only the results ran by a Personal Single worker will appear on the table. You can then click on ",(0,s.kt)("em",{parentName:"p"},"Filtered")," to select them and export only those results that you're interested in. "),(0,s.kt)("p",null,"For more eloborate filtering you can use Regular Expressions. Click on ",(0,s.kt)("em",{parentName:"p"},"RegEx")," to activate this."),(0,s.kt)("p",null,"By default filtering in case insensitive but you can turn on case sensitive filtering by clicking on ",(0,s.kt)("em",{parentName:"p"},"Aa"),"."),(0,s.kt)("p",null,"Sometimes the simple filter is not precise enough or you want to combine multiple filters: For those cases the ",(0,s.kt)("em",{parentName:"p"},"Filter Builder")," offers complex criteria with logical conjunctions ('and', 'or'). It's also possible to filter for certain dates."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(3290).Z,width:"1570",height:"333"})),(0,s.kt)("h2",{id:"export-results"},"Export Results"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(2944).Z,width:"1551",height:"277"})),(0,s.kt)("p",null,"Once you selected the results you're interested in, click ",(0,s.kt)("em",{parentName:"p"},"Export Results"),". You can choose what you want to export: everything in a JATOS Results Archive, only the result metadata, only the result data, or only the files. If in doubt which one to choose, get the JATOS Result Archive - it contains everything."),(0,s.kt)("h3",{id:"export-a-jatos-results-archive-jrzip"},"Export a JATOS Results Archive (JRZIP)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(1833).Z,width:"1551",height:"277"})),(0,s.kt)("p",null,"Since version 3.8.1 this is the standard export format. It ",(0,s.kt)("strong",{parentName:"p"},"aggregates result data, result files and result metadata")," in one ZIP archive file with a ",(0,s.kt)("em",{parentName:"p"},".jrzip")," file extension (",(0,s.kt)("a",{parentName:"p",href:"JATOS-Results-Archive-JRZIP.html"},"more information about JRZIP"),")."),(0,s.kt)("h3",{id:"export-result-metadata"},"Export Result Metadata"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(6238).Z,width:"1551",height:"277"})),(0,s.kt)("p",null,"The metadata are mostly the data that you see in the result table but that do not belong to the actual result data or files, e.g. worker ID or start time. You can choose between ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"JSON"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"CSV"))," format. "),(0,s.kt)("h3",{id:"export-result-data"},"Export Result Data"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(4533).Z,width:"1551",height:"277"})),(0,s.kt)("p",null,"The result data are the genuine data that got submitted during study runs without any metadata or result files. You can choose between ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"ZIP"))," or ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"Plain Text"))," format. In the ",(0,s.kt)("em",{parentName:"p"},"ZIP")," format the result data are stored in a file system structure with folders for study results and component results, similar to the ",(0,s.kt)("em",{parentName:"p"},"JRZIP")," format. The ",(0,s.kt)("em",{parentName:"p"},"Plain Text")," format is familiar from previous JATOS version: all result data are put together in one text file with one result per line."),(0,s.kt)("h3",{id:"export-result-files"},"Export Result Files"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(7323).Z,width:"1551",height:"277"})),(0,s.kt)("p",null,"The result files are the files that were uploaded during study runs. They are exported as an ZIP archive with a file system structure that represents the study results and their component results. "),(0,s.kt)("h2",{id:"delete-results"},"Delete Results"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(5613).Z,width:"1552",height:"120"})),(0,s.kt)("p",null,"You can click ",(0,s.kt)("em",{parentName:"p"},"Delete")," to remove the selected results. That includes result data, result files and metadata. Keep in mind ",(0,s.kt)("strong",{parentName:"p"},"there's no undo function for this"),". "),(0,s.kt)("h2",{id:"table-columns-and-customization"},"Table Columns and Customization"),(0,s.kt)("p",null,"You can show and hide the columns displayed in the table with the drop-down menu under the ",(0,s.kt)("em",{parentName:"p"},"Customize")," button."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Results View screenshot",src:a(5551).Z,width:"1552",height:"120"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Result ID")," - An identifier assigned by JATOS to each study result. A study result is actually a set of component results, each of them with their own (different) ",(0,s.kt)("em",{parentName:"p"},"Component Result ID"),". ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"UUID")," - universally unique identifier - similar to Result ID but this ID is unique over different JATOS installations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Study Code")," - The study code that was used to start this study run")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Start Time")," - Time at which the first component of the study was started. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"End Time")," - Time at which the last component of the study was finished. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Last Seen"),' - Each component running in a worker\'s browser sends a "heartbeat" regularly back to JATOS. Last Seen is the time of the last heartbeat received. The heartbeat stops either when the study is finished or when the browser tab is closed. The default period of the heartbeat is 2 minutes but you can change it through a ',(0,s.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossetheartbeatperiod"},(0,s.kt)("em",{parentName:"a"},"jatos.js")," function"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Duration")," - Simply the time difference between the start and end time.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Batch")," - Name of the batch the worker belongs to.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Worker ID")," - Assigned by JATOS. Each worker has its own Worker ID. JATOS' admin user will always have Worker ID 1. You can click on a Worker ID to see all the worker's results. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Worker Type")," - Displays the ",(0,s.kt)("a",{parentName:"p",href:"Worker-Types.html"},"Worker type")," that ran the study. ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"MTurk Worker ID")," - Only applies to studies run by MTurk workers. An identifier given by Amazon Mechanical Turk's, not by JATOS.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"MTurk Confirmation Code")," - Only applies to studies run by MTurk workers. The Confirmation Code is generated by JATOS and given to the worker as proof of his work.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Group ID")," - Only available for group studies. It identifies the group.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Files")," - Indicates result file upload")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Data Size")," - (Component Results only) - Size of the result data as it is stored in the database")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Files (Size)")," - (Component Results only) - List of the uploaded result files with their size in brackets")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"State")),(0,s.kt)("p",{parentName:"li"},"Possible states for ",(0,s.kt)("em",{parentName:"p"},"study results")," are: "),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"PRE - ",(0,s.kt)("a",{parentName:"li",href:"Restricting-study-flow.html#preview-links"},"Preview of study")," (exists only in PersonalSingleWorker and GeneralSingleWorker)"),(0,s.kt)("li",{parentName:"ul"},"STARTED - Study started"),(0,s.kt)("li",{parentName:"ul"},"DATA_RETRIEVED - The very beginning of the study. It means the first component of the study was loaded in the worker's browser and started running. (It literally means the browser asked for the initialization data.)"),(0,s.kt)("li",{parentName:"ul"},"FINISHED - Study finished. All result data and files that were sent by the study in the browser were safely stored in JATOS."),(0,s.kt)("li",{parentName:"ul"},"ABORTED - Study aborted by worker and all result data and files were deleted."),(0,s.kt)("li",{parentName:"ul"},"FAIL - Something went wrong, study stopped and cannot continue")),(0,s.kt)("p",{parentName:"li"},"Possible states for ",(0,s.kt)("em",{parentName:"p"},"component results")," are:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"STARTED - Component started"),(0,s.kt)("li",{parentName:"ul"},"DATA_RETRIEVED -  The very beginning of the component. It means the component was loaded in the worker's browser and started running. (It literally means the browser asked for the initialization data.)"),(0,s.kt)("li",{parentName:"ul"},"FINISHED - Component finished. All result data and files that were sent by the study in the browser were safely stored in JATOS."),(0,s.kt)("li",{parentName:"ul"},"RELOADED - Component was reloaded (usually by clicking the browser's reload button)"),(0,s.kt)("li",{parentName:"ul"},"ABORTED - This component's study was aborted by worker and all result data and files were deleted."),(0,s.kt)("li",{parentName:"ul"},"FAIL - Something went wrong, the study stopped and cannot continue"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Messages")," - A message that can be set together with ",(0,s.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudy"},(0,s.kt)("inlineCode",{parentName:"a"},"jatos.endStudy"))," or ",(0,s.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosabortstudy"},(0,s.kt)("inlineCode",{parentName:"a"},"jatos.abortStudy")),"."))))}d.isMDXComponent=!0},3183:function(e,t,a){t.Z=a.p+"assets/images/ResultsLink_371-afa4bcad243175e0c6c9cb068d82daad.png"},3684:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot11-873448e778ebe1e2dcb5a01bb5c510e1.png"},5964:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot12-95b1f9691e08399c8e08c233b209a7e3.png"},1466:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot13-e58968363bbab73ed91902c0c856d62e.png"},7049:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot14-11e1092a66c40af9030f96a1490f2ef7.png"},3290:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot15-f84e1cc4abc9d086367978af41826477.png"},2944:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot16-086d5d1027a405ee6a31682b943e1b6b.png"},1833:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot17-cad6a180ca347d043a0d48d25f3d7b0a.png"},6238:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot18-cb4eea4bc5a29fa7e5dd05497d357124.png"},4533:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot19-23e069f7d74faaaef60dd6c6d542cac1.png"},7323:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot20-41ccd769fee868bd2ed600697c73a5af.png"},5613:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot21-4529129bbff77789762031fbb54dd661.png"},5551:function(e,t,a){t.Z=a.p+"assets/images/ResultsView-Screenshot22-ece6ef04f318e06202c7c232f702de81.png"}}]);