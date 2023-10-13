"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[8735],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},27819:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const o={title:"Adapt pre written code to run it in JATOS",slug:"/Adapt-pre-written-code-to-run-it-in-JATOS.html",sidebar_position:3},i=void 0,s={unversionedId:"Write_your_study/Adapt-pre-written-code-to-run-it-in-JATOS",id:"Write_your_study/Adapt-pre-written-code-to-run-it-in-JATOS",title:"Adapt pre written code to run it in JATOS",description:"Make Your Existing Code Run in JATOS - or How To Jatosify a Study",source:"@site/docs/Write_your_study/Adapt-pre-written-code-to-run-it-in-JATOS.md",sourceDirName:"Write_your_study",slug:"/Adapt-pre-written-code-to-run-it-in-JATOS.html",permalink:"/next/Adapt-pre-written-code-to-run-it-in-JATOS.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Write_your_study/Adapt-pre-written-code-to-run-it-in-JATOS.md",tags:[],version:"current",lastUpdatedBy:"kristian",lastUpdatedAt:1697227461,formattedLastUpdatedAt:"Oct 13, 2023",sidebarPosition:3,frontMatter:{title:"Adapt pre written code to run it in JATOS",slug:"/Adapt-pre-written-code-to-run-it-in-JATOS.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Write your own Study - Basics and Beyond",permalink:"/next/Write-your-own-Study-Basics-and-Beyond.html"},next:{title:"jsPsych and JATOS",permalink:"/next/jsPsych-and-JATOS.html"}},l={},p=[{value:"Create the study in your local JATOS",id:"create-the-study-in-your-local-jatos",level:3},{value:"Edit your HTML and JavaScript",id:"edit-your-html-and-javascript",level:3},{value:"Beyond the basics",id:"beyond-the-basics",level:3}],u={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Make Your Existing Code Run in JATOS - or How To Jatosify a Study")," "),(0,r.kt)("p",null,"You might have a task, experiment, survey, or study running in a browser. You might have all its files like HTML, JavaScripts, images, etc. And now you want to run it with JATOS? Then follow this page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Developement of a JATOS study usually happens on your local JATOS: ",(0,r.kt)("a",{parentName:"strong",href:"Run-an-experiment-with-JATOS-Workflow.html"},"Run an experiment with JATOS - Workflow"))),(0,r.kt)("h3",{id:"create-the-study-in-your-local-jatos"},"Create the study in your local JATOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new study with the '",(0,r.kt)("strong",{parentName:"p"},"New Study"),"' button in JATOS' header. Choose a study title and a folder name. Leave the other fields empty for now and click 'Create'. JATOS will have created a new folder within your assets root folder (default is ",(0,r.kt)("inlineCode",{parentName:"p"},"/path_to_your_JATOS/study_assets_root/"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy all your files (HTML, JavaScripts, images, audio, ...) into your new study folder. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Back in the JATOS GUI, and within the newly created study, create a ",(0,r.kt)("strong",{parentName:"p"},"new component")," by clicking 'Components' and then 'New'. Choose a component title and set the HTML file name, to the name of the HTML file you just copied into the study folder.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your HTML, CSS and JavaScripts, for your paths you can choose between 1) relative paths or 2) absolute paths. ",(0,r.kt)("strong",{parentName:"p"},"Relative paths are recommended")," since they are shorter and do not change after an export-import of a study."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Relative paths)")," Just use the relative path within your study's folder."),(0,r.kt)("p",{parentName:"li"},"E.g. if a file named 'survey.js' is in the root of the study's assets folder"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="survey.js"><\/script>\n')),(0,r.kt)("p",{parentName:"li"},"E.g. or if the file is in a subfolder 'lib'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="lib/survey.js"><\/script>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Absolute paths (deprecated))")," Always use the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"/study_assets/")," and then the study assets name you specified in your study's properties when you created it."),(0,r.kt)("p",{parentName:"li"},"E.g. if you want to load the file 'survey.js' and the study's assets folder is 'my-exp'"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/study_assets/my-exp/survey.js"><\/script>\n')),(0,r.kt)("p",{parentName:"li"},"\u2730  For absolute paths make sure you understand the difference between the ",(0,r.kt)("inlineCode",{parentName:"p"},"study_assets_root")," folder and the placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"study_assets")," in your path names. ",(0,r.kt)("inlineCode",{parentName:"p"},"study_assets_root")," is the folder in your system (or in the server) where the assets (HTML, JS, CSS, images, etc) of ",(0,r.kt)("strong",{parentName:"p"},"all")," your JATOS studies will be stored. You can ",(0,r.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html#study-assets-root-path"},"configure")," the location of this folder. ",(0,r.kt)("inlineCode",{parentName:"p"},"study_assets"),", on the other hand, is just a placeholder that will go in your HTML files. JATOS will interpret this and replace the placeholder with the path, (specific to the study) that you entered in the field 'Study assets directory name' in your Study's Properties. The advantage of this is that you can change the location or name of the assets for any study, or export-import a study into a different computer, and the study will still run without having to make any changes in the HTML code.  "))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Now it's time for a first glimpse: Click the '",(0,r.kt)("strong",{parentName:"li"},"Run"),"' button in either the study's or the component's toolbar. Your experiment should run like it did before without JATOS. Use the browser's developer tools to check for eventually missing files and other occurring errors.")),(0,r.kt)("h3",{id:"edit-your-html-and-javascript"},"Edit your HTML and JavaScript"),(0,r.kt)("p",null,"Up to this point JATOS served as a mere provider of your files. Now we want to use a feature of JATOS: We want to store your result data in JATOS' safe database. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Include the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"jatos.js"))," library in your HTML. In your ",(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," add the line "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="jatos.js"><\/script>`\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"jatos.onLoad"))),(0,r.kt)("p",{parentName:"li"},"Most studies with JATOS start with this call. So whatever you want to do in your study it should start there."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.onLoad(function() {\n  // start your code here \n});\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now to actually ",(0,r.kt)("strong",{parentName:"p"},"send your result data")," to JATOS we use ",(0,r.kt)("em",{parentName:"p"},"jatos.js"),"' function ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.submitResultData"),". We can pass this function any data in text format including JSON, CSV or XML. If you pass a JavaScript object it will be turned into JSON (stringified)."),(0,r.kt)("p",{parentName:"li"},"E.g. if we want to send a JavaScript object as JSON"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.submitResultData(myResultDataObject);\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jatos.submitResultData")," puts the data into JATOS database - old data that were submitted before will be overwritten. If you don't want to overwrite data you should rather use ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.appendResultData"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Instead of submitting text you can also upload files with ",(0,r.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosuploadresultfile"},"jatos.uploadResultFile"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the end of your component you will want to jump to another component or end the study."),(0,r.kt)("p",{parentName:"li"},"To jump to the next component:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.startNextComponent();\n")),(0,r.kt)("p",{parentName:"li"},"Or to just finish the study:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.endStudy();\n")),(0,r.kt)("p",{parentName:"li"},"You can combine this with sending result data:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.startNextComponent(myResultDataObject);\n")),(0,r.kt)("p",{parentName:"li"},"or"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.endStudy(myResultDataObject);\n")))),(0,r.kt)("p",null,"That's about it. Infos about other ",(0,r.kt)("em",{parentName:"p"},"jatos.js")," functions and variables you can find in the ",(0,r.kt)("a",{parentName:"p",href:"jatos.js-Reference.html"},"reference"),". "),(0,r.kt)("h3",{id:"beyond-the-basics"},"Beyond the basics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Think about dividing your study into ",(0,r.kt)("strong",{parentName:"li"},"several components"),". You could have separate components e.g. for introduction, training, experiment and feedback. You could even consider splitting the experiment into several parts. One advantage is that if your participant stops in the middle of your study you still have the result data of the first components. Also, you can re-use components in different studies."),(0,r.kt)("li",{parentName:"ul"},"Use the study's and component's '",(0,r.kt)("strong",{parentName:"li"},"JSON input data"),"'. With them you can change variables of your code directly through JATOS' GUI, which might come handy if someone isn't good in JavaScript."),(0,r.kt)("li",{parentName:"ul"},"You can add a ",(0,r.kt)("strong",{parentName:"li"},"quit button")," to your study to allow the participant to ",(0,r.kt)("a",{parentName:"li",href:"Data-Privacy-and-Ethics.html#things-you-should-consider-in-your-studies"},"abort at any time"),".")))}d.isMDXComponent=!0}}]);