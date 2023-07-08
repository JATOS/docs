"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1671],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3874:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var n=a(3117),o=(a(7294),a(3905));const r={title:"Update JATOS",slug:"/Update-JATOS.html",sidebar_position:3},i=void 0,l={unversionedId:"Manage_your_JATOS/Update-JATOS",id:"Manage_your_JATOS/Update-JATOS",title:"Update JATOS",description:"If you want to update a JATOS server please read this page first.",source:"@site/docs/Manage_your_JATOS/Update-JATOS.md",sourceDirName:"Manage_your_JATOS",slug:"/Update-JATOS.html",permalink:"/next/Update-JATOS.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Manage_your_JATOS/Update-JATOS.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1688814265,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:3,frontMatter:{title:"Update JATOS",slug:"/Update-JATOS.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manage JATOS users",permalink:"/next/User-Manager.html"},next:{title:"Troubleshooting",permalink:"/next/Troubleshooting.html"}},s={},d=[{value:"Automatic Update (recommended)",id:"automatic-update-recommended",level:2},{value:"Normal process",id:"normal-process",level:3},{value:"Specify a version",id:"specify-a-version",level:3},{value:"Manual Update",id:"manual-update",level:2},{value:"First, easy way: discarding your result data",id:"first-easy-way-discarding-your-result-data",level:3},{value:"Second way: keeping everything (including your result data)",id:"second-way-keeping-everything-including-your-result-data",level:3}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you want to update a JATOS server please read ",(0,o.kt)("a",{parentName:"strong",href:"/Updating-a-JATOS-server-installation.html"},"this page")," first.")),(0,o.kt)("p",null,"We'll periodically update JATOS with new features and bug fixes. We recommend you stay up to date with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/releases"},"latest release"),". However if you are currently running a study it's always safest to keep the same JATOS version throughout the whole experiment."),(0,o.kt)("h2",{id:"automatic-update-recommended"},"Automatic Update (recommended)"),(0,o.kt)("p",null,"You can update your JATOS automatically (if you have ",(0,o.kt)("strong",{parentName:"p"},"admin rights")," and running on ",(0,o.kt)("strong",{parentName:"p"},"Mac OS")," or ",(0,o.kt)("strong",{parentName:"p"},"Linux")," (including ",(0,o.kt)("strong",{parentName:"p"},"Docker"),"), that is). ",(0,o.kt)("strong",{parentName:"p"},"Windows is not yet supported"),"."),(0,o.kt)("h3",{id:"normal-process"},"Normal process"),(0,o.kt)("p",null,"The process is pretty self-explanatory, but anyway, we'll explain it here in detail:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will get a notification on your JATOS' ",(0,o.kt)("em",{parentName:"p"},"Administration")," page."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Update notification Schreenshot",src:a(7641).Z,width:"1919",height:"392"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We expect no problems, but we recommend that you ",(0,o.kt)("strong",{parentName:"p"},"back up your result data, result files, study assets folder and study logs")," before continuing.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("em",{parentName:"p"},"Update"),", confirm that you want to continue and the latest JATOS version will be downloaded from GitHub and saved in your system's temporary folder. The download might take a while depending on your internet connection.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After download is complete, you will be asked again for confirmation. Optionally you can do a ",(0,o.kt)("strong",{parentName:"p"},"backup"),": JATOS will copy the content of its own installation folder into a folder with the name ",(0,o.kt)("em",{parentName:"p"},"backup_x.x.x")," (x.x.x is the version before the update). This will usually include your embedded H2 database, your study assets and logs - ",(0,o.kt)("strong",{parentName:"p"},"but not your MySQL database")," (should you have one). If anything goes wrong in the auto-update, you have everything in this backup folder to start the old JATOS again. This backup will use up disk space (that is why it is not selected by default)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Update notification Schreenshot",src:a(2401).Z,width:"1919",height:"392"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After clicking the ",(0,o.kt)("em",{parentName:"p"},"Go on")," button, JATOS will stop itself, replace its program files and re-start itself again. This might take up to a minute.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refresh your JATOS home page every now and then until you see your updated JATOS' login screen again.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the new JATOS with the build-in tests: go to ",(0,o.kt)("em",{parentName:"p"},"Administration")," \u21d2 ",(0,o.kt)("em",{parentName:"p"},"Tests")," and check that all tests are 'OK'."))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"JATOS uses Java 11 - older versions use Java 8. Future versions will likely require newer Java versions. If you're updating from a JATOS version using Java 8 to (say) another version using Java 11, the auto-update process will automatically download JATOS bundled with the new Java, regardless of wich variant you are currently using. If you do not like the bundled Java and use your own version you can always remove the folder ",(0,o.kt)("em",{parentName:"p"},"jre")," later on after the update."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"specify-a-version"},"Specify a version"),(0,o.kt)("p",null,"Sometimes, for whatever reasons, JATOS doesn't autmatically detect new versions then you can still start the update by specifying the version."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"It is usually destructive to update JATOS to a lower version than is currently installed. It's highly recommended to use a higher version (or the same). Use at your own risk.")),(0,o.kt)("p",null,"The parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," can be added to the JATOS administration page's URL. It takes the version tag as specified in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/releases"},"GitHub")," and enforces an update to this version. E.g. if your domain is ",(0,o.kt)("inlineCode",{parentName:"p"},"my.jatos.org")," and the version you want to update to is ",(0,o.kt)("inlineCode",{parentName:"p"},"v3.7.4")," (don't forget the 'v'), than the URL for your browser is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://my.jatos.org/jatos/admin?version=v3.7.4"),". The rest of the update procedure is like the ",(0,o.kt)("a",{parentName:"p",href:"#normal-process"},"Normal Process"),": you will be ask for conirmation twice."),(0,o.kt)("h2",{id:"manual-update"},"Manual Update"),(0,o.kt)("p",null,"To be absolutely safe you can install the new JATOS version and keep the old one untouched. This way you can switch back if something fails. Just remember that only one JATOS can run at the same time. Always stop your old JATOS instance before starting another one."),(0,o.kt)("p",null,"You can update your local JATOS instance in two main ways (The procedure is a little different if you want to ",(0,o.kt)("a",{parentName:"p",href:"Updating-a-JATOS-server-installation.html"},"update JATOS on a server installation"),"):"),(0,o.kt)("h3",{id:"first-easy-way-discarding-your-result-data"},"First, easy way: discarding your result data"),(0,o.kt)("p",null,"If you don't care about result data stored in JATOS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Export any studies you wish to keep from the old JATOS installation."),(0,o.kt)("li",{parentName:"ol"},"Download and install the new version as if it were a new fresh download. Don't start it yet."),(0,o.kt)("li",{parentName:"ol"},"Stop the old JATOS and start the new JATOS."),(0,o.kt)("li",{parentName:"ol"},"Import all the studies your previously exported. This will transfer the files and subfolders in your study's asset folder (HTML, JavaScript, CSS files). ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What will be transferred:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Files and subfolders in study's assets folder"),(0,o.kt)("li",{parentName:"ol"},"All your studies' and components' properties"),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"properties")," of the first (Default) batch")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What will be lost:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"All result data will be lost")),(0,o.kt)("li",{parentName:"ol"},"All workers in all batches (including Default batch)"),(0,o.kt)("li",{parentName:"ol"},"All batches other than the Default batch"),(0,o.kt)("li",{parentName:"ol"},"All study logs")),(0,o.kt)("h3",{id:"second-way-keeping-everything-including-your-result-data"},"Second way: keeping everything (including your result data)"),(0,o.kt)("p",null,"If you do want to keep your studies, batches, and your result data you'll have to move them to the new JATOS. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop JATOS (on Unix systems, type ",(0,o.kt)("inlineCode",{parentName:"li"},"./loader.sh stop")," on the terminal. On Windows MS, close your command window)"),(0,o.kt)("li",{parentName:"ol"},"Go to the folder of your old JATOS installation. From there copy your assets root folder to the new JATOS installation (Note: By default your assets root folder is called ",(0,o.kt)("inlineCode",{parentName:"li"},"study_assets_root")," and lays in the JATOS folder but you might have changed this. You can find the location and name in ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/production.conf"),". It is specified in the line beginning with ",(0,o.kt)("inlineCode",{parentName:"li"},"jatos.studyAssetsRootPath="),".)"),(0,o.kt)("li",{parentName:"ol"},"Go to the folder of your old JATOS installation. From there copy your folder of your uploaded result files to the new JATOS installation (Note: By default this folder is called ",(0,o.kt)("inlineCode",{parentName:"li"},"result_uploads")," and lays in the JATOS folder but you might have changed this. You can find the location and name in ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/production.conf"),". It is specified in the line beginning with ",(0,o.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.path="),".)"),(0,o.kt)("li",{parentName:"ol"},"From the folder of your old JATOS installation copy the folders ",(0,o.kt)("inlineCode",{parentName:"li"},"database")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"study_logs")," to the folder of the new JATOS installation."),(0,o.kt)("li",{parentName:"ol"},"If you had changed the ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/production.conf")," file in your old JATOS instance (for example to set a custom location for your ",(0,o.kt)("inlineCode",{parentName:"li"},"study_assets_root")," folder) you'll have to do this again in the new JATOS version. We recommend re-editing the new version of the file, rather than just overwriting the new with the old version, in case anything in the ",(0,o.kt)("inlineCode",{parentName:"li"},"production.conf")," file has changed."),(0,o.kt)("li",{parentName:"ol"},"Start the new JATOS (on Unix systems, type ",(0,o.kt)("inlineCode",{parentName:"li"},"./loader.sh start")," on the terminal. On Windows double click the ",(0,o.kt)("inlineCode",{parentName:"li"},"loader.bat"),")"),(0,o.kt)("li",{parentName:"ol"},"Check the build-in tests: go to ",(0,o.kt)("em",{parentName:"li"},"Administration")," \u21d2 ",(0,o.kt)("em",{parentName:"li"},"Tests")," and check that all tests are 'OK'.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What will be transferred:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Files and subfolders in study assets folder"),(0,o.kt)("li",{parentName:"ol"},"All your study and components properties"),(0,o.kt)("li",{parentName:"ol"},"All batches, together with their workers, generated links, and results"),(0,o.kt)("li",{parentName:"ol"},"All study logs")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What will be lost:"),"\nnothing"))}p.isMDXComponent=!0},7641:function(e,t,a){t.Z=a.p+"assets/images/autoupdate-notification-e546098dd7a70760b83422e5aec024e2.png"},2401:function(e,t,a){t.Z=a.p+"assets/images/autoupdate-update-and-restart-d6774dff9330eeee8cc5d9e8c504059a.png"}}]);