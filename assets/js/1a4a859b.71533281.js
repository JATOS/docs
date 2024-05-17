"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[8118],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),h=r,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||o;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(83117),r=(a(67294),a(3905));const o={title:"Update JATOS",slug:"/Update-JATOS.html",sidebar_position:3},l=void 0,i={unversionedId:"Manage_your_JATOS/Update-JATOS",id:"version-3.8.1/Manage_your_JATOS/Update-JATOS",title:"Update JATOS",description:"We'll periodically update JATOS with new features and bug fixes. We recommend you stay up to date with the latest release. However if you are currently running a study it's always safest to keep the same JATOS version throughout the whole experiment.",source:"@site/versioned_docs/version-3.8.1/Manage_your_JATOS/Update-JATOS.md",sourceDirName:"Manage_your_JATOS",slug:"/Update-JATOS.html",permalink:"/Update-JATOS.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Manage_your_JATOS/Update-JATOS.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1715949639,formattedLastUpdatedAt:"May 17, 2024",sidebarPosition:3,frontMatter:{title:"Update JATOS",slug:"/Update-JATOS.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manage JATOS users",permalink:"/User-Manager.html"},next:{title:"Troubleshooting",permalink:"/Troubleshooting.html"}},s={},u=[{value:"Automatic Update",id:"automatic-update",level:2},{value:"(Auto-)Update to a specific version",id:"auto-update-to-a-specific-version",level:3},{value:"Manual Update",id:"manual-update",level:2},{value:"Easy, but discard results",id:"easy-but-discard-results",level:3},{value:"Not so easy, but keep everything",id:"not-so-easy-but-keep-everything",level:3}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We'll periodically update JATOS with new features and bug fixes. We recommend you stay up to date with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/releases"},"latest release"),". However if you are currently running a study it's always safest to keep the same JATOS version throughout the whole experiment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please do backups before updating.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Be aware: JATOS is only allowed to update to higher version numbers - downgrading will likely break your installation.")),(0,r.kt)("p",null,"There are more details about updating in their respective pages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/JATOS-on-a-server.html#update-jatos"},"Update JATOS running on a server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Install-JATOS-via-Docker.html#updating-jatos-with-docker"},"Update JATOS running in a Docker container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/JATOS-with-Docker-Compose.html#updating-jatos-with-docker-compose"},"Update JATOS running with Docker Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/JATOS-in-a-cluster.html#updating-jatos-with-kubernetes"},"Update JATOS running with Kubernetes"))),(0,r.kt)("h2",{id:"automatic-update"},"Automatic Update"),(0,r.kt)("p",null,"This is the recommended update method for JATOS running locally or on a simple server (but not in a cluster)."),(0,r.kt)("p",null,"You can update your JATOS automatically if you have ",(0,r.kt)("strong",{parentName:"p"},"admin rights")," on JATOS and running on ",(0,r.kt)("strong",{parentName:"p"},"Mac OS")," or ",(0,r.kt)("strong",{parentName:"p"},"Linux"),". ",(0,r.kt)("strong",{parentName:"p"},"Windows is not yet supported"),"."),(0,r.kt)("p",null,"The process is pretty self-explanatory, but anyway, we'll explain it here in detail:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will get a notification on your JATOS' ",(0,r.kt)("em",{parentName:"p"},"Administration")," page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Update notification Schreenshot",src:a(57641).Z,width:"1919",height:"392"})),(0,r.kt)("p",{parentName:"li"},"Sometimes your JATOS is not able to receive data about new releases. If this is the case and you know there is a new release that you would like to update to, you can still ",(0,r.kt)("a",{parentName:"p",href:"/Update-JATOS.html#auto-update-to-a-specific-version"},"start the update by specifying the version"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("em",{parentName:"p"},"Update"),", confirm that you want to continue and the latest JATOS version will be downloaded from GitHub and saved in your system's temporary folder. The download might take a while depending on your internet connection.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After download is complete, you will be asked again for confirmation. Optionally you can do a ",(0,r.kt)("strong",{parentName:"p"},"backup"),": JATOS will copy the content of its own installation folder into a folder with the name ",(0,r.kt)("em",{parentName:"p"},"backup_x.x.x")," (x.x.x is the version before the update). This will usually include your embedded H2 database, your study assets and logs - ",(0,r.kt)("strong",{parentName:"p"},"but not your MySQL database")," (should you have one). If anything goes wrong in the auto-update, you have everything in this backup folder to start the old JATOS again. ",(0,r.kt)("strong",{parentName:"p"},"This backup will use up disk space")," (that is why it is not selected by default)."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Update notification Schreenshot",src:a(82401).Z,width:"1919",height:"392"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After clicking the ",(0,r.kt)("em",{parentName:"p"},"Go on")," button, JATOS will stop itself, replace its program files and re-start itself again. This might take some time depending on the new version and your machine resources, but usually it's done within 2 minutes. Refresh your JATOS home page every now and then until you see your updated JATOS' login screen again.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the new JATOS with the build-in tests: go to ",(0,r.kt)("em",{parentName:"p"},"Administration")," \u21d2 ",(0,r.kt)("em",{parentName:"p"},"Tests")," and check that all tests are 'OK'."))),(0,r.kt)("h3",{id:"auto-update-to-a-specific-version"},"(Auto-)Update to a specific version"),(0,r.kt)("p",null,"Sometimes, for whatever reasons, JATOS doesn't automatically detect new versions. Then you can still start the update by specifying the version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"It is usually destructive to update JATOS to a lower version than is currently installed. It's highly recommended to use a higher version (or the same). Use at your own risk.")),(0,r.kt)("p",null,"The URL of JATOS administration page accepts the query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"version"),". This parameter takes the JATOS version as specified in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/releases"},"GitHub")," and enforces an update to this version."),(0,r.kt)("p",null,"E.g. if the version you want to update to is ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.7.4")," (don't forget the 'v') and your domain is ",(0,r.kt)("inlineCode",{parentName:"p"},"my.jatos.org"),", than the URL for your browser is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://my.jatos.org/jatos/admin?version=v3.7.4\n")),(0,r.kt)("p",null,"The rest of the update procedure is the same as in the normal automatic update: you will be asked for confirmation twice."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"JATOS uses Java 11 - older versions use Java 8. Future versions will likely require newer Java versions. If you're updating from a JATOS version using Java 8 to (say) another version using Java 11, the auto-update process will automatically download JATOS bundled with the new Java, regardless of which variant you are currently using. If you do not like the bundled Java and use your own version you can always remove the folder ",(0,r.kt)("em",{parentName:"p"},"jre")," later on after the update."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"manual-update"},"Manual Update"),(0,r.kt)("p",null,"The automatic update is the preferred way but if, for whatever reason, you do not trust JATOS' automatic update or it does not work for you (e.g. you run a server on Windows), you can still update JATOS manually."),(0,r.kt)("p",null,"You can update your JATOS manually in two main ways: 1) Easy, but discarding all results, and 2) Not so easy, but keep everything."),(0,r.kt)("h3",{id:"easy-but-discard-results"},"Easy, but discard results"),(0,r.kt)("p",null,"If you don't care about result data stored in JATOS:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Export any studies you wish to keep from the old JATOS installation."),(0,r.kt)("li",{parentName:"ol"},"Download and install the new version as if it were a new fresh installation. Don't start it yet."),(0,r.kt)("li",{parentName:"ol"},"Stop the old JATOS and start the new JATOS."),(0,r.kt)("li",{parentName:"ol"},"Import all the studies your previously exported. This will transfer the files and subfolders in your study's asset folder (HTML, JavaScript, CSS files). ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What will be transferred:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Files and subfolders in study's assets folder"),(0,r.kt)("li",{parentName:"ol"},"All your studies' and components' properties"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"properties")," of the first (Default) batch")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What will be lost:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"All result data and files will be lost")),(0,r.kt)("li",{parentName:"ol"},"All workers in all batches (including Default batch)"),(0,r.kt)("li",{parentName:"ol"},"All batches other than the Default batch"),(0,r.kt)("li",{parentName:"ol"},"Any configuration you did in ",(0,r.kt)("em",{parentName:"li"},"jatos.conf")),(0,r.kt)("li",{parentName:"ol"},"All study logs")),(0,r.kt)("h3",{id:"not-so-easy-but-keep-everything"},"Not so easy, but keep everything"),(0,r.kt)("p",null,"JATOS stores its state in several folders in the file system and a database and you will have to transfer everything to the new, updated JATOS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"study assets root")," folder")," stores all your study's files (e.g. HTML, JS, CSS, images). By default it's in your JATOS folder and has the name ",(0,r.kt)("em",{parentName:"li"},"study_assets_root"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"result uploads")," folder")," stores all your study result files. By default it is in your JATOS folder and has the name ",(0,r.kt)("em",{parentName:"li"},"result_uploads"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"study logs")," folder")," stores all your study logs. By default it is in your JATOS folder and has the name ",(0,r.kt)("em",{parentName:"li"},"study_logs"),"."),(0,r.kt)("li",{parentName:"ul"},"JATOS' ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"application logs"))," are stored by default in your JATOS folder under a folder with the name ",(0,r.kt)("em",{parentName:"li"},"logs"),"."),(0,r.kt)("li",{parentName:"ul"},"If you use the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"embedded database"))," then all its data is, by default, stored in a folder called ",(0,r.kt)("em",{parentName:"li"},"database")," within your JATOS folder."),(0,r.kt)("li",{parentName:"ul"},"If you use a ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"MySQL/MariaDB database"))," your data are stored there and you only have to configure the updated JATOS to use this database."),(0,r.kt)("li",{parentName:"ul"},"You might have configured JATOS by changing it's ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"jatos.conf")," file"),". By default it is in the JATOS installation folder in the folder ",(0,r.kt)("em",{parentName:"li"},"conf"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Then the update procedure is:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop JATOS."),(0,r.kt)("li",{parentName:"ol"},"Download and install the new version as if it were a new fresh installation. Don't start it yet."),(0,r.kt)("li",{parentName:"ol"},"From the folder of your old JATOS installation copy the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"study assets root")," folder"),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"result uploads")," folder"),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"study logs")," folder"),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"application logs")," folder"),", the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"database")," folder")," (if you do not use MySQL/MariaDB), and the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"jatos.conf"))," into the folder of your new, updated JATOS."),(0,r.kt)("li",{parentName:"ol"},"Start the new JATOS.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What will be transferred:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"All study assets"),(0,r.kt)("li",{parentName:"ol"},"All your study and component properties"),(0,r.kt)("li",{parentName:"ol"},"All batches, together with their workers, and generated study links"),(0,r.kt)("li",{parentName:"ol"},"All result data and files"),(0,r.kt)("li",{parentName:"ol"},"All study logs"),(0,r.kt)("li",{parentName:"ol"},"All logs"),(0,r.kt)("li",{parentName:"ol"},"JATOS' configuration (as long as it is done in the configuration file)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What will be lost:"),"\nnothing"))}d.isMDXComponent=!0},57641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/autoupdate-notification-e546098dd7a70760b83422e5aec024e2.png"},82401:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/autoupdate-update-and-restart-d6774dff9330eeee8cc5d9e8c504059a.png"}}]);