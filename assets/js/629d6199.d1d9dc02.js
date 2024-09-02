"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[8234],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||n;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},31048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var o=r(83117),a=(r(67294),r(3905));const n={title:"Troubleshooting",slug:"/Troubleshooting.html",sidebar_position:4},i=void 0,s={unversionedId:"Manage_your_JATOS/Troubleshooting",id:"version-3.9.1/Manage_your_JATOS/Troubleshooting",title:"Troubleshooting",description:"JATOS test page",source:"@site/versioned_docs/version-3.9.1/Manage_your_JATOS/Troubleshooting.md",sourceDirName:"Manage_your_JATOS",slug:"/Troubleshooting.html",permalink:"/Troubleshooting.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Manage_your_JATOS/Troubleshooting.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1725261939,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:4,frontMatter:{title:"Troubleshooting",slug:"/Troubleshooting.html",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Update JATOS",permalink:"/Update-JATOS.html"},next:{title:"Customize JATOS' Home Page",permalink:"/Customize-JATOS-Home-Page.html"}},l={},d=[{value:"JATOS test page",id:"jatos-test-page",level:3},{value:"Downloading a study / exporting a study fails (e.g. in Safari browsers)",id:"downloading-a-study--exporting-a-study-fails-eg-in-safari-browsers",level:3},{value:"Read log files in the browser",id:"read-log-files-in-the-browser",level:3},{value:"A file (library, image, ...) included in the HTML fails to load?",id:"a-file-library-image--included-in-the-html-fails-to-load",level:3},{value:"Database is corrupted?",id:"database-is-corrupted",level:3}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"jatos-test-page"},"JATOS test page"),(0,a.kt)("p",null,"JATOS comes with build in tests (e.g. WebSockets connections and database connection), but they are only accessible for users with admin rights: go to ",(0,a.kt)("em",{parentName:"p"},"Administration")," \u21d2 ",(0,a.kt)("em",{parentName:"p"},"Tests")," and check that all tests are 'OK'."),(0,a.kt)("h3",{id:"downloading-a-study--exporting-a-study-fails-eg-in-safari-browsers"},"Downloading a study / exporting a study fails (e.g. in Safari browsers)"),(0,a.kt)("p",null,"As a default, Safari (and some other browsers) automatically unzips every archive file after downloading it. When you export a study, JATOS zips your study together (study properties, all components, and all files like HTML, JavaScripts, images) and delivers it to your browser, who should save it in your local computer. Safari's default unzipping interferes with this. Follow ",(0,a.kt)("a",{parentName:"p",href:"https://discussions.apple.com/thread/1958374?start=0&tstart=0"},"these instructions")," to prevent Safari's automatic unzip."),(0,a.kt)("h3",{id:"read-log-files-in-the-browser"},"Read log files in the browser"),(0,a.kt)("p",null,"In a perfect world, JATOS always works smoothly and, when it doesn't, it describes the problem in an error message. Unfortunately we aren't in a perfect world: every now and then something will go wrong and you might not get any clear error messages, or no message at all. In these (rare) cases, you can look into JATOS' log files (not to be confused with the ",(0,a.kt)("a",{parentName:"p",href:"Study-Log.html"},"study log"),") to try to find what the problem might be. You can see and download all log files in the ",(0,a.kt)("em",{parentName:"p"},"Administration")," page => ",(0,a.kt)("em",{parentName:"p"},"Logs")," (for security reasons, you must be logged in as a user with admin rights). "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"application.log")," - all JATOS logging"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"loader.log")," - logging during startup with loader"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"update.log")," - logging during updates")),(0,a.kt)("p",null,"Alternatively you can read the log files directly on the server. You'll find your logs in ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos_directory/logs/"),"."),(0,a.kt)("h3",{id:"a-file-library-image--included-in-the-html-fails-to-load"},"A file (library, image, ...) included in the HTML fails to load?"),(0,a.kt)("p",null,"There is a common mistake Windows users make that might prevent files from loading: Any URL or file path in a HTML or JS file should only use '/' as a file path separator - even on Windows systems. So it should always be e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'<script src="subfolder/myscript.js"><\/script>')," and ",(0,a.kt)("strong",{parentName:"p"},"not")," ",(0,a.kt)("inlineCode",{parentName:"p"},'<script src="subfolder\\myscript.js"><\/script>'),"."),(0,a.kt)("h3",{id:"database-is-corrupted"},"Database is corrupted?"),(0,a.kt)("p",null,"If you get an error that reads something like: ",(0,a.kt)("inlineCode",{parentName:"p"},"Error in custom provider, Configuration error: Configuration error[Cannot connect to database [default]]"),", your database might be corrupted. By default JATOS comes with an H2 database and the H2 database doesn't handle ",(0,a.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/2036117/how-to-back-up-the-embedded-h2-database-engine-while-it-is-running"},"copying its files while running")," too well. "),(0,a.kt)("p",null,"There are two reasons why this might be the case: you moved your JATOS folder while it was running or you installed JATOS in a synced folder. To prevent this, be sure to always be careful with the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Don't copy or move while JATOS is running")," - Always ",(0,a.kt)("strong",{parentName:"li"},"stop JATOS")," (type ",(0,a.kt)("inlineCode",{parentName:"li"},"./loader.sh stop")," in your Linux / Mac OS terminal or close the window on Windows) before moving it.  "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Don't sync while JATOS is running")," - As we mentioned in the ",(0,a.kt)("a",{parentName:"li",href:"Installation.html"},"Installation page"),", you can run JATOS from pretty much anywhere ",(0,a.kt)("strong",{parentName:"li"},"except")," from a folder that syncs across devices, like Dropbox or Google Drive. Doing so might lead to database corruption, because while the files might be synced between computers, the running processes aren't. This will lead to havoc and destruction and, in extreme cases, to the implosion of the known Universe. You can find in our ",(0,a.kt)("a",{parentName:"li",href:"http://blog.jatos.org/Database_Recovery/"},"blog post")," a description of an attempt to recover a corrupted database. Didn't work.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Of course, this brings us to an important point: back up your result data (i.e., simply download and save your text files) regularly if you're running a study!")))}p.isMDXComponent=!0}}]);