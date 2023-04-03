"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[474],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(i,".").concat(h)]||c[h]||p[h]||r;return n?s.createElement(m,l(l({ref:t},d),{},{components:n})):s.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var s=n(3117),a=(n(7294),n(3905));const r={title:"Manage Results",slug:"/Manage-Results.html",sidebar_position:9},l=void 0,o={unversionedId:"Run_your_study/Manage-Results",id:"version-3.6.1/Run_your_study/Manage-Results",title:"Manage Results",description:"Results Pages",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Manage-Results.md",sourceDirName:"Run_your_study",slug:"/Manage-Results.html",permalink:"/3.6.x/Manage-Results.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Run_your_study/Manage-Results.md",tags:[],version:"3.6.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1680533392,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:9,frontMatter:{title:"Manage Results",slug:"/Manage-Results.html",sidebar_position:9},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Write cross-sectional and longitudinal studies",permalink:"/3.6.x/Cross-sectional-and-longitudinal-studies.html"},next:{title:"End page - After your study finished",permalink:"/3.6.x/End-page-after-your-study-finished.html"}},i={},u=[{value:"Results Pages",id:"results-pages",level:2},{value:"Interacting With The Results Table",id:"interacting-with-the-results-table",level:2},{value:"View Result Data",id:"view-result-data",level:3},{value:"Selecting Results",id:"selecting-results",level:3},{value:"Filter Results &amp; Filter Builder",id:"filter-results--filter-builder",level:3},{value:"Export",id:"export",level:2},{value:"Export Result Data",id:"export-result-data",level:3},{value:"Export Result Files (JATOS version &gt;= 3.5.1)",id:"export-result-files-jatos-version--351",level:3},{value:"Export Metadata (JATOS version &gt;= 3.3.1)",id:"export-metadata-jatos-version--331",level:3},{value:"Delete Results",id:"delete-results",level:2},{value:"Table Columns",id:"table-columns",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"results-pages"},"Results Pages"),(0,a.kt)("p",null,"Once you collected data for a study, you can see and manage the results by clicking on one of the ",(0,a.kt)("em",{parentName:"p"},"Results")," buttons."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results Link",src:n(725).Z,width:"992",height:"250"})),(0,a.kt)("p",null,"The image below is an example of a study results page, but there are result pages for components, batches or groups as well. There's quite a lot of information here, so we'll go through each piece."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(4255).Z,width:"1917",height:"932"})),(0,a.kt)("h2",{id:"interacting-with-the-results-table"},"Interacting With The Results Table"),(0,a.kt)("h3",{id:"view-result-data"},"View Result Data"),(0,a.kt)("p",null,"Each study result has an arrow on the left. If you click on it, the result data for this study run will be displayed underneath the row. Since a study can have several components and each component produces its own result data there can be several result data each in its own row (like in the screenshot below). By clicking on ",(0,a.kt)("em",{parentName:"p"},"show all")," one can see the whole data if it doesn't fit all in the box."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(4955).Z,width:"1563",height:"662"})),(0,a.kt)("h3",{id:"selecting-results"},"Selecting Results"),(0,a.kt)("p",null,"Prior to JATOS version 3.3.1 you could select/deselect a specific result by clicking anywhere on the row. Selected results change color to gray. "),(0,a.kt)("p",null,"From version 3.3.1 on there is a checkbox on the left side of each row."),(0,a.kt)("p",null,"You can also use the buttons on the bar above to select/deselect all results in the table. Additionally you can select only the filtered ones or only the visible ones."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(4631).Z,width:"1555",height:"753"})),(0,a.kt)("h3",{id:"filter-results--filter-builder"},"Filter Results & Filter Builder"),(0,a.kt)("p",null,"The filter lets you search all all fields in the results table (the metadata). "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(7419).Z,width:"1553",height:"87"})),(0,a.kt)("p",null,'If you type, for example, "Personal Single" in the ',(0,a.kt)("em",{parentName:"p"},"Filter")," field, only the results ran by a Personal Single worker will appear on the table. You can then click on ",(0,a.kt)("em",{parentName:"p"},"Filtered")," to select them and export only those results that you're interested in. "),(0,a.kt)("p",null,"For more eloborate filtering you can use Regular Expressions. Click on ",(0,a.kt)("em",{parentName:"p"},"RegEx")," to activate this."),(0,a.kt)("p",null,"By default filtering in case insensitive but you can turn on case sensitive filtering by clicking on ",(0,a.kt)("em",{parentName:"p"},"Aa"),"."),(0,a.kt)("p",null,"Sometimes the simple filter is not precise enough or you want to combine multiple filters: For those cases the ",(0,a.kt)("em",{parentName:"p"},"Filter Builder")," offers complex criteria with logical conjunctions ('and', 'or'). It's also possible to filter for certain dates."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(2442).Z,width:"1539",height:"291"})),(0,a.kt)("h2",{id:"export"},"Export"),(0,a.kt)("h3",{id:"export-result-data"},"Export Result Data"),(0,a.kt)("p",null,"Once you selected the results you're interested in, click ",(0,a.kt)("em",{parentName:"p"},"Export Results")," and ",(0,a.kt)("em",{parentName:"p"},"Selected")," and you will download a text file that contains your results. Each line in this text file represents result data from one component. Alternatively you can also select ",(0,a.kt)("em",{parentName:"p"},"All")," to get all result data."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(2605).Z,width:"1553",height:"87"})),(0,a.kt)("h3",{id:"export-result-files-jatos-version--351"},"Export Result Files (JATOS version >= 3.5.1)"),(0,a.kt)("p",null,"Here you can download the result files that were uploaded during study runs. You can download single files by just clicking on them. Or similar to exporting result data select the lines you are interested in and download them with ",(0,a.kt)("em",{parentName:"p"},"Export Files")," and ",(0,a.kt)("em",{parentName:"p"},"Selected"),". Alternatively you can also select ",(0,a.kt)("em",{parentName:"p"},"All")," to get all files."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(8787).Z,width:"1553",height:"87"})),(0,a.kt)("h3",{id:"export-metadata-jatos-version--331"},"Export Metadata (JATOS version >= 3.3.1)"),(0,a.kt)("p",null,'Sometimes one is also interested in the metadata, that is what\'s in the actual table fields ("Result ID", "Start Time" , "Last Seen", ...). For this click on ',(0,a.kt)("em",{parentName:"p"},"Export Metadata")," and the metadata of the selected results will be downloaded in CSV format."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(1344).Z,width:"1553",height:"87"})),(0,a.kt)("h2",{id:"delete-results"},"Delete Results"),(0,a.kt)("p",null,"You can click ",(0,a.kt)("em",{parentName:"p"},"Delete")," to remove all or only some selected results (result data + result files + metadata). Keep in mind ",(0,a.kt)("strong",{parentName:"p"},"there's no undo function for this"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(3366).Z,width:"1553",height:"87"})),(0,a.kt)("h2",{id:"table-columns"},"Table Columns"),(0,a.kt)("p",null,"You can show and hide the columns displayed in the table with the drop-down menu under the ",(0,a.kt)("em",{parentName:"p"},"Customize")," button (in older versions ",(0,a.kt)("em",{parentName:"p"},"Display Columns"),")."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Results View screenshot",src:n(9204).Z,width:"1553",height:"87"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result ID")," - An identifier assigned by JATOS to each study result. A study result is actually a set of component results, each of them with their own (different) ",(0,a.kt)("em",{parentName:"p"},"Component Result ID"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Time")," - Time (set at the server's time zone) at which the first component of the study was started. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"End Time")," - Time (set at the server's time zone) at which the last component of the study was finished. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Last Seen"),' - Each component running in a worker\'s browser sends a "heartbeat" regularly back to JATOS. Last Seen is the time of the last heartbeat received. The heartbeat stops either when the study is finished or when the browser tab is closed. The default period of the heartbeat is 2 minutes but you can change it through a ',(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossetheartbeatperiod"},"jatos.js function"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Duration")," - Simply the time difference between the start and end time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Batch")," - Name of the batch the worker belongs to."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Worker ID")," - Assigned by JATOS. Each worker has its own Worker ID. JATOS' admin user will always have Worker ID 1. You can click on a Worker ID to see all the worker's results. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Worker Type")," - Displays the ",(0,a.kt)("a",{parentName:"p",href:"Worker-Types.html"},"Worker type")," that ran the study. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MTurk Worker ID (Confirmation Code)")," - Only applies to studies run by MTurk workers. An identifier given by Amazon Mechanical Turk's, not by JATOS. The Confirmation Code is generated by JATOS and given to the worker as proof of his work."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Group ID")," - Only available for group studies. It identifies the group."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Files")," - Indicates result file upload"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data Size")," - (Components only) Size of the result data as it is stored in the database"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Files (Size)")," - (Components only) List of the uploaded result files with their size in brackets"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"State")),(0,a.kt)("p",null,"Possible states for ",(0,a.kt)("em",{parentName:"p"},"study results")," are: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"PRE - ",(0,a.kt)("a",{parentName:"li",href:"Restricting-study-flow.html#preview-links"},"Preview of study")," (exists only in PersonalSingleWorker and GeneralSingleWorker)"),(0,a.kt)("li",{parentName:"ul"},"STARTED - Study started"),(0,a.kt)("li",{parentName:"ul"},"DATA_RETRIEVED - The very beginning of the study. It means the first component of the study was loaded in the worker's browser and started running. (It literally means the browser asked for the initialization data.)"),(0,a.kt)("li",{parentName:"ul"},"FINISHED - Study finished. All result data and files that were sent by the study in the browser were safely stored in JATOS."),(0,a.kt)("li",{parentName:"ul"},"ABORTED - Study aborted by worker and all result data and files were deleted."),(0,a.kt)("li",{parentName:"ul"},"FAIL - Something went wrong, study stopped and cannot continue")),(0,a.kt)("p",null,"Possible states for ",(0,a.kt)("em",{parentName:"p"},"component results")," are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"STARTED - Component started"),(0,a.kt)("li",{parentName:"ul"},"DATA_RETRIEVED -  The very beginning of the component. It means the component was loaded in the worker's browser and started running. (It literally means the browser asked for the initialization data.)"),(0,a.kt)("li",{parentName:"ul"},"RESULTDATA_POSTED - The first time this component sent result data or files."),(0,a.kt)("li",{parentName:"ul"},"FINISHED - Component finished. All result data and files that were sent by the study in the browser were safely stored in JATOS."),(0,a.kt)("li",{parentName:"ul"},"RELOADED - Component was reloaded (usually by clicking the browser's reload button)"),(0,a.kt)("li",{parentName:"ul"},"ABORTED - This component's study was aborted by worker and all result data and files were deleted."),(0,a.kt)("li",{parentName:"ul"},"FAIL - Something went wrong, the study stopped and cannot continue")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Messages")," - A message that can be set together with ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudy"},"jatos.endStudy")," or ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosabortstudy"},"jatos.abortStudy"),"."))}p.isMDXComponent=!0},725:function(e,t,n){t.Z=n.p+"assets/images/ResultsLink-99dc140de440f2ac33d954feec1e0097.png"},4255:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot1-8fb162d087ac93aac8f8ec1eebeb87a5.png"},2442:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot10-2d963315e77dc34818d80364efbc8b39.png"},4631:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot2-65c30e05b52948ab5265d5c40e2f0eff.png"},4955:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot3-5874ccb0645da1e0fa6cc5e80ca2fda3.png"},7419:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot4-f14e4591370d33ccf9ec25c70e53f556.png"},8787:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot5-a274e4050e80a83bc5edabf1916c6a20.png"},2605:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot6-56e7a749a4eddb5d84866c4c1bced613.png"},1344:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot7-d902ba8ddb42fe467b84917a1ec76319.png"},3366:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot8-8b858d12866983337d74621266edd54a.png"},9204:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot9-4d3b7ea7e4a31f2cc0081afc6100a187.png"}}]);