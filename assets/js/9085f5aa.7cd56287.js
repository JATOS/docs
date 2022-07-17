"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9530],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8116:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],s={title:"Adapt pre written code to run it in JATOS",slug:"/Adapt-pre-written-code-to-run-it-in-JATOS.html",sidebar_position:3},l=void 0,p={unversionedId:"Write_your_study/Adapt-pre-written-code-to-run-it-in-JATOS",id:"version-3.6.1/Write_your_study/Adapt-pre-written-code-to-run-it-in-JATOS",title:"Adapt pre written code to run it in JATOS",description:"Make Your Existing Code Run in JATOS - or How To Jatosify a Study",source:"@site/versioned_docs/version-3.6.1/Write_your_study/Adapt-pre-written-code-to-run-it-in-JATOS.md",sourceDirName:"Write_your_study",slug:"/Adapt-pre-written-code-to-run-it-in-JATOS.html",permalink:"/3.6.1/Adapt-pre-written-code-to-run-it-in-JATOS.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Write_your_study/Adapt-pre-written-code-to-run-it-in-JATOS.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1658087096,formattedLastUpdatedAt:"7/17/2022",sidebarPosition:3,frontMatter:{title:"Adapt pre written code to run it in JATOS",slug:"/Adapt-pre-written-code-to-run-it-in-JATOS.html",sidebar_position:3},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Write your own Study - Basics and Beyond",permalink:"/3.6.1/Write-your-own-Study-Basics-and-Beyond.html"},next:{title:"jsPsych and JATOS",permalink:"/3.6.1/jsPsych-and-JATOS.html"}},u=[{value:"Create the study in your local JATOS",id:"create-the-study-in-your-local-jatos",children:[],level:2},{value:"Edit your HTML and JavaScript",id:"edit-your-html-and-javascript",children:[],level:2},{value:"Beyond the basics",id:"beyond-the-basics",children:[],level:2}],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make Your Existing Code Run in JATOS - or How To Jatosify a Study")," "),(0,o.kt)("p",null,"You might have a  task, experiment, survey, or study running in a browser. You might have all its files like HTML, JavaScripts, images, etc. Maybe you wrote it with ",(0,o.kt)("a",{parentName:"p",href:"http://www.jspsych.org"},"jsPsych")," or got it from ",(0,o.kt)("a",{parentName:"p",href:"http://expfactory.github.io"},"The Experiment Factory"),". And now you want to run it with JATOS? Then follow this page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Developement of a JATOS study usually happens on your local JATOS: ",(0,o.kt)("a",{parentName:"strong",href:"Run-an-experiment-with-JATOS-Workflow.html"},"Run an experiment with JATOS - Workflow"))),(0,o.kt)("h2",{id:"create-the-study-in-your-local-jatos"},"Create the study in your local JATOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new study with the '",(0,o.kt)("strong",{parentName:"p"},"New Study"),"' button in JATOS' header. Choose a study title and a folder name. Leave the other fields empty for now and click 'Create'. JATOS will have created a new folder within your assets root folder (default is ",(0,o.kt)("inlineCode",{parentName:"p"},"/path_to_your_JATOS/study_assets_root/"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy all your files (HTML, JavaScripts, images, audio, ...) into your new study folder. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Back in the JATOS GUI, and within the newly created study, create a ",(0,o.kt)("strong",{parentName:"p"},"new component")," by clicking 'Components' and then 'New'. Choose a component title and set the HTML file name, to the name of the HTML file you just copied into the study folder.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your HTML, CSS and JavaScripts, for your paths you can choose between 1) relative paths or 2) absolute paths. Relative paths are usually shorter and easier to handle but are only available since JATOS version 3.2.3."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Relative paths (since v3.2.3 and recommended way))")," Just use the relative path within your study's folder."),(0,o.kt)("p",{parentName:"li"},"E.g. if a file named 'survey.js' is in the root of the study's assets folder"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="survey.js"><\/script>\n')),(0,o.kt)("p",{parentName:"li"},"E.g. or if the file is in a subfolder 'lib'"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="lib/survey.js"><\/script>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Absolute paths)")," Always use the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"/study_assets/")," and then the study assets name you specified in your study's properties when you created it."),(0,o.kt)("p",{parentName:"li"},"E.g. if you want to load the file 'survey.js' and the study's assets folder is 'my-exp'"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/study_assets/my-exp/survey.js"><\/script>\n')),(0,o.kt)("p",{parentName:"li"},"\u2730  For absolute paths make sure you understand the difference between the ",(0,o.kt)("inlineCode",{parentName:"p"},"study_assets_root")," folder and the placeholder ",(0,o.kt)("inlineCode",{parentName:"p"},"study_assets")," in your path names. ",(0,o.kt)("inlineCode",{parentName:"p"},"study_assets_root")," is the folder in your system (or in the server) where the assets (HTML, JS, CSS, images, etc) of ",(0,o.kt)("strong",{parentName:"p"},"all")," your JATOS studies will be stored. You can ",(0,o.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html#study-assets-root-path"},"configure")," the location of this folder. ",(0,o.kt)("inlineCode",{parentName:"p"},"study_assets"),", on the other hand, is just a placeholder that will go in your HTML files. JATOS will interpret this and replace the placeholder with the path, (specific to the study) that you entered in the field 'Study assets directory name' in your Study's Properties. The advantage of this is that you can change the location or name of the assets for any study, or export-import a study into a different computer, and the study will still run without having to make any changes in the HTML code.  "))))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Now it's time for a first glimpse: Click the '",(0,o.kt)("strong",{parentName:"li"},"Run"),"' button in either the study's or the component's toolbar. Your experiment should run like it did before without JATOS. Use the browser's developer tools to check for eventually missing files and other occurring errors.")),(0,o.kt)("h2",{id:"edit-your-html-and-javascript"},"Edit your HTML and JavaScript"),(0,o.kt)("p",null,"Up to this point JATOS served as a mere provider of your files. Now we want to use a feature of JATOS: We want to store your result data in JATOS' safe database. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Include the ",(0,o.kt)("strong",{parentName:"p"},"jatos.js")," library in your HTML ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"JATOS < v3.3.1) Add the line ")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/assets/javascripts/jatos.js"><\/script>\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"JATOS >= v3.3.1) Add the line ")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="jatos.js"><\/script>`\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("strong",{parentName:"p"},"jatos.onLoad")),(0,o.kt)("p",{parentName:"li"},"Most studies with JATOS start with this call. So whatever you want to do in your study it should start there."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.onLoad(function() {\n  // initialize and start your JavaScript here \n});\n")),(0,o.kt)("p",{parentName:"li"},"E.g. if you want to initialize a jsPsych experiment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.onLoad(function() {\n  jsPsych.init( {\n    ...\n  });\n});\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now to actually send our result data to JATOS we use jatos.js' function ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"jatos.submitResultData")),". We can pass this function any data in text format including JSON, CSV or XML."),(0,o.kt)("p",{parentName:"li"},"E.g. if we want to send a JavaScript object as JSON"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var resultJson = JSON.stringify(myObject);\njatos.submitResultData(resultJson, jatos.startNextComponent);\n")),(0,o.kt)("p",{parentName:"li"},"Conveniently but optionally ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.submitResultData")," takes a second parameter which specifies what should be done after the result data got sent. Usually one want to jump to the next component (",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.startNextComponent"),") or finish the study (",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.endStudy"),")."),(0,o.kt)("p",{parentName:"li"},"Another example where we use jsPsych: We have to put ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.submitResultData")," into jsPsych's ",(0,o.kt)("inlineCode",{parentName:"p"},"on_finish"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"jsPsych.init( {\n  ...\n  on_finish: function(data) {\n    // Submit results to JATOS\n    var resultJson = JSON.stringify(jsPsych.data.getData());\n    jatos.submitResultData(resultJson, jatos.startNextComponent);\n  }\n});\n")))),(0,o.kt)("p",null,"That's about it. Infos about other jatos.js functions and variables you can find in the ",(0,o.kt)("a",{parentName:"p",href:"jatos.js-Reference.html"},"reference"),". "),(0,o.kt)("h2",{id:"beyond-the-basics"},"Beyond the basics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Think about dividing your study into ",(0,o.kt)("strong",{parentName:"li"},"several components"),". You could have separate components e.g. for introduction, training, experiment and feedback. You could even consider splitting the experiment into several parts. One advantage is that if your participant stops in the middle of your study you still have the result data of the first components. Also, you can re-use components in different studies."),(0,o.kt)("li",{parentName:"ul"},"Use the study's and component's '",(0,o.kt)("strong",{parentName:"li"},"JSON input data"),"'. With them you can change variables of your code directly through JATOS' GUI, which might come handy if someone isn't good in JavaScript."),(0,o.kt)("li",{parentName:"ul"},"You can add a ",(0,o.kt)("strong",{parentName:"li"},"quit button")," to your study to allow the participant to ",(0,o.kt)("a",{parentName:"li",href:"Data-Privacy-and-Ethics.html#things-you-should-consider-in-your-studies"},"abort at any time"),".")))}c.isMDXComponent=!0}}]);