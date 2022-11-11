"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1671],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3874:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],l={title:"Update JATOS",slug:"/Update-JATOS.html",sidebar_position:3},s=void 0,d={unversionedId:"Manage_your_JATOS/Update-JATOS",id:"Manage_your_JATOS/Update-JATOS",title:"Update JATOS",description:"If you want to update a JATOS server please read this page first.",source:"@site/docs/Manage_your_JATOS/Update-JATOS.md",sourceDirName:"Manage_your_JATOS",slug:"/Update-JATOS.html",permalink:"/next/Update-JATOS.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Manage_your_JATOS/Update-JATOS.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1668156641,formattedLastUpdatedAt:"11/11/2022",sidebarPosition:3,frontMatter:{title:"Update JATOS",slug:"/Update-JATOS.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manage JATOS users",permalink:"/next/User-Manager.html"},next:{title:"Troubleshooting",permalink:"/next/Troubleshooting.html"}},u=[{value:"Automatic Update (recommended)",id:"automatic-update-recommended",children:[{value:"Normal process",id:"normal-process",children:[],level:3},{value:"Special cases",id:"special-cases",children:[{value:"Pre-releases (experimental)",id:"pre-releases-experimental",children:[],level:4},{value:"Enforce an update to a specified version (experimental)",id:"enforce-an-update-to-a-specified-version-experimental",children:[],level:4},{value:"Major updates",id:"major-updates",children:[],level:4},{value:"Versions with newer Java required",id:"versions-with-newer-java-required",children:[],level:4}],level:3}],level:2},{value:"Manual Update",id:"manual-update",children:[{value:"First, easy way: discarding your result data",id:"first-easy-way-discarding-your-result-data",children:[],level:3},{value:"Second way: keeping everything (including your result data)",id:"second-way-keeping-everything-including-your-result-data",children:[],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you want to update a JATOS server please read ",(0,r.kt)("a",{parentName:"strong",href:"/Updating-a-JATOS-server-installation.html"},"this page")," first.")),(0,r.kt)("p",null,"We'll periodically update JATOS with new features and bug fixes. We recommend you stay up to date with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/releases"},"latest release"),". However if you are currently running a study it's always safest to keep the same JATOS version throughout the whole experiment."),(0,r.kt)("h2",{id:"automatic-update-recommended"},"Automatic Update (recommended)"),(0,r.kt)("p",null,"You can update your JATOS automatically (if you have ",(0,r.kt)("strong",{parentName:"p"},"admin rights")," and running on ",(0,r.kt)("strong",{parentName:"p"},"Mac OS")," or ",(0,r.kt)("strong",{parentName:"p"},"Linux")," (including ",(0,r.kt)("strong",{parentName:"p"},"Docker"),"), that is). ",(0,r.kt)("strong",{parentName:"p"},"Windows is not yet supported"),"."),(0,r.kt)("h3",{id:"normal-process"},"Normal process"),(0,r.kt)("p",null,"The process is pretty self-explanatory, but anyway, we'll explain it here in detail:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will get a notification on your JATOS' ",(0,r.kt)("em",{parentName:"p"},"Administration")," page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Update notification Schreenshot",src:a(1114).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We expect no problems, but sh&t happens. We recommend that you ",(0,r.kt)("strong",{parentName:"p"},"back up your result data, result files, study assets folder and study logs")," before continuing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("em",{parentName:"p"},"Update"),", confirm that you want to continue and the latest JATOS version will be downloaded from GitHub and saved in your system's temporary folder. Usually the variant downloaded will be the one without bundled Java. Only in cases where JATOS switches to a newer version of Java a bundled version is required ",(0,r.kt)("a",{parentName:"p",href:"#Versions-with-newer-Java-required"},"(see below)"),". The download might take a while depending on your internet connection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After download is complete, you will be asked again for confirmation. By default, JATOS will ",(0,r.kt)("strong",{parentName:"p"},"back up"),": it will copy the content of its own installation folder into a folder with the name ",(0,r.kt)("em",{parentName:"p"},"backup_x.x.x")," (x.x.x is the version before the update). This will usually include your embedded H2 database, your study assets and logs - ",(0,r.kt)("strong",{parentName:"p"},"but not your MySQL database")," (should you have one). If anything goes wrong in the auto-update, you have everything in this backup folder to start the old JATOS again. This backup will use up disk space (therefore you can opt out)."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Update notification Schreenshot",src:a(8578).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After clicking the ",(0,r.kt)("em",{parentName:"p"},"Go on")," button, JATOS will stop itself, replace its program files and re-start itself again. This might take up to a minute.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refresh your JATOS home page every now and then until you see your updated JATOS' login screen again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the new JATOS with the build-in tests: go to ",(0,r.kt)("em",{parentName:"p"},"Administration")," \u21d2 ",(0,r.kt)("em",{parentName:"p"},"Tests")," and check that all tests are 'OK'."))),(0,r.kt)("h3",{id:"special-cases"},"Special cases"),(0,r.kt)("h4",{id:"pre-releases-experimental"},"Pre-releases (experimental)"),(0,r.kt)("p",null,"Pre-releases will not be available as auto-updates by default. If you want to force this to be the case (and you know what you're doing), append the parameter ",(0,r.kt)("em",{parentName:"p"},"allowPreReleases")," to your JATOS home page URL (e.g. ",(0,r.kt)("em",{parentName:"p"},"localhost/jatos?allowPreReleases"),")."),(0,r.kt)("h4",{id:"enforce-an-update-to-a-specified-version-experimental"},"Enforce an update to a specified version (experimental)"),(0,r.kt)("p",null,"The parameter ",(0,r.kt)("em",{parentName:"p"},"version")," can be added to your JATOS home page URL (e.g. ",(0,r.kt)("em",{parentName:"p"},"localhost/jatos?version=v3.6.1"),") and takes the version tag as specified in GitHub and enforces an update to this version. This should never be used on a JATOS server that stores any valuable data."),(0,r.kt)("h4",{id:"major-updates"},"Major updates"),(0,r.kt)("p",null,"Auto-updating might not always be possible. JATOS versions will be flagged so that they are not available for auto-update. You'll have to do a ",(0,r.kt)("a",{parentName:"p",href:"#Manual-Updates"},"manual update"),"."),(0,r.kt)("h4",{id:"versions-with-newer-java-required"},"Versions with newer Java required"),(0,r.kt)("p",null,"JATOS uses Java 11 - older versions use Java 8. Future versions will likely require newer Java versions. If you're updating from a JATOS version using Java 8 to (say) another version using Java 11, the auto-update process will automatically download JATOS bundled with the new Java, regardless of wich variant you are currently using. If you do not like the bundled Java and use your own version you can always remove the folder ",(0,r.kt)("em",{parentName:"p"},"jre")," later on after the update."),(0,r.kt)("h2",{id:"manual-update"},"Manual Update"),(0,r.kt)("p",null,"To be absolutely safe you can install the new JATOS version and keep the old one untouched. This way you can switch back if something fails. Just remember that only one JATOS can run at the same time. Always stop your old JATOS instance before starting another one."),(0,r.kt)("p",null,"You can update your local JATOS instance in two main ways (The procedure is a little different if you want to ",(0,r.kt)("a",{parentName:"p",href:"Updating-a-JATOS-server-installation.html"},"update JATOS on a server installation"),"):"),(0,r.kt)("h3",{id:"first-easy-way-discarding-your-result-data"},"First, easy way: discarding your result data"),(0,r.kt)("p",null,"If you don't care about result data stored in JATOS:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Export any studies you wish to keep from the old JATOS installation."),(0,r.kt)("li",{parentName:"ol"},"Download and install the new version as if it were a new fresh download. Don't start it yet."),(0,r.kt)("li",{parentName:"ol"},"Stop the old JATOS and start the new JATOS."),(0,r.kt)("li",{parentName:"ol"},"Import all the studies your previously exported. This will transfer the files and subfolders in your study's asset folder (HTML, JavaScript, CSS files). ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What will be transferred:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Files and subfolders in study's assets folder"),(0,r.kt)("li",{parentName:"ol"},"All your studies' and components' properties"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"properties")," of the first (Default) batch")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What will be lost:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"All result data will be lost")),(0,r.kt)("li",{parentName:"ol"},"All workers in all batches (including Default batch)"),(0,r.kt)("li",{parentName:"ol"},"All batches other than the Default batch"),(0,r.kt)("li",{parentName:"ol"},"All study logs")),(0,r.kt)("h3",{id:"second-way-keeping-everything-including-your-result-data"},"Second way: keeping everything (including your result data)"),(0,r.kt)("p",null,"If you do want to keep your studies, batches, and your result data you'll have to move them to the new JATOS. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop JATOS (on Unix systems, type ",(0,r.kt)("inlineCode",{parentName:"li"},"./loader.sh stop")," on the terminal. On Windows MS, close your command window)"),(0,r.kt)("li",{parentName:"ol"},"Go to the folder of your old JATOS installation. From there copy your assets root folder to the new JATOS installation (Note: By default your assets root folder is called ",(0,r.kt)("inlineCode",{parentName:"li"},"study_assets_root")," and lays in the JATOS folder but you might have changed this. You can find the location and name in ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/production.conf"),". It is specified in the line beginning with ",(0,r.kt)("inlineCode",{parentName:"li"},"jatos.studyAssetsRootPath="),".)"),(0,r.kt)("li",{parentName:"ol"},"Go to the folder of your old JATOS installation. From there copy your folder of your uploaded result files to the new JATOS installation (Note: By default this folder is called ",(0,r.kt)("inlineCode",{parentName:"li"},"result_uploads")," and lays in the JATOS folder but you might have changed this. You can find the location and name in ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/production.conf"),". It is specified in the line beginning with ",(0,r.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.path="),".)"),(0,r.kt)("li",{parentName:"ol"},"From the folder of your old JATOS installation copy the folders ",(0,r.kt)("inlineCode",{parentName:"li"},"database")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"study_logs")," to the folder of the new JATOS installation."),(0,r.kt)("li",{parentName:"ol"},"If you had changed the ",(0,r.kt)("inlineCode",{parentName:"li"},"conf/production.conf")," file in your old JATOS instance (for example to set a custom location for your ",(0,r.kt)("inlineCode",{parentName:"li"},"study_assets_root")," folder) you'll have to do this again in the new JATOS version. We recommend re-editing the new version of the file, rather than just overwriting the new with the old version, in case anything in the ",(0,r.kt)("inlineCode",{parentName:"li"},"production.conf")," file has changed."),(0,r.kt)("li",{parentName:"ol"},"Start the new JATOS (on Unix systems, type ",(0,r.kt)("inlineCode",{parentName:"li"},"./loader.sh start")," on the terminal. On Windows double click the ",(0,r.kt)("inlineCode",{parentName:"li"},"loader.bat"),")"),(0,r.kt)("li",{parentName:"ol"},"Check the build-in tests: go to ",(0,r.kt)("em",{parentName:"li"},"Administration")," \u21d2 ",(0,r.kt)("em",{parentName:"li"},"Tests")," and check that all tests are 'OK'.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What will be transferred:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Files and subfolders in study assets folder"),(0,r.kt)("li",{parentName:"ol"},"All your study and components properties"),(0,r.kt)("li",{parentName:"ol"},"All batches, together with their workers, generated links, and results"),(0,r.kt)("li",{parentName:"ol"},"All study logs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What will be lost:"),"\nnothing"))}c.isMDXComponent=!0},1114:function(e,t,a){t.Z=a.p+"assets/images/autoupdate-notification-e546098dd7a70760b83422e5aec024e2.png"},8578:function(e,t,a){t.Z=a.p+"assets/images/autoupdate-update-and-restart-d6774dff9330eeee8cc5d9e8c504059a.png"}}]);