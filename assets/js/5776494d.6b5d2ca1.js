"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4991],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(n),c=r,m=h["".concat(l,".").concat(c)]||h[c]||p[c]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7074:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var o=n(3117),r=(n(7294),n(3905));const a={title:"Tips & Tricks",slug:"/Tips-and-Tricks.html",sidebar_position:11},i=void 0,s={unversionedId:"Run_your_study/Tips-and-Tricks",id:"version-3.8.1/Run_your_study/Tips-and-Tricks",title:"Tips & Tricks",description:"Batch and Group Session do not work on Windows without HTTPS",source:"@site/versioned_docs/version-3.8.1/Run_your_study/Tips-and-Tricks.md",sourceDirName:"Run_your_study",slug:"/Tips-and-Tricks.html",permalink:"/3.8.x/Tips-and-Tricks.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.8.1/Run_your_study/Tips-and-Tricks.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1677752677,formattedLastUpdatedAt:"Mar 2, 2023",sidebarPosition:11,frontMatter:{title:"Tips & Tricks",slug:"/Tips-and-Tricks.html",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Study Log",permalink:"/3.8.x/Study-Log.html"},next:{title:"Administration",permalink:"/3.8.x/Administration.html"}},l={},u=[{value:"Batch and Group Session do not work on Windows without HTTPS",id:"batch-and-group-session-do-not-work-on-windows-without-https",level:3},{value:"Run up to 10 studies in the same browser at the same time",id:"run-up-to-10-studies-in-the-same-browser-at-the-same-time",level:3},{value:"Imitate a run from Mechanical Turk",id:"imitate-a-run-from-mechanical-turk",level:3},{value:"Examples",id:"examples",level:4},{value:"Lock your studies before running them",id:"lock-your-studies-before-running-them",level:3},{value:"Do a General Single Run more than once in the same browser",id:"do-a-general-single-run-more-than-once-in-the-same-browser",level:3},{value:"Abort study and keep some data",id:"abort-study-and-keep-some-data",level:3},{value:"How to let a Personal Single Worker redo his study?",id:"how-to-let-a-personal-single-worker-redo-his-study",level:3},{value:"Simulate slow network",id:"simulate-slow-network",level:3},{value:"Personal/General Single links seem not to work when distributed via social networks",id:"personalgeneral-single-links-seem-not-to-work-when-distributed-via-social-networks",level:3}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"batch-and-group-session-do-not-work-on-windows-without-https"},"Batch and Group Session do not work on Windows without HTTPS"),(0,r.kt)("p",null,"The Batch and Group Session rely on WebSockets. Sometimes (rarely) a virus scanner prohibits unencryped WebSockets. This is only a problem on Windows, but not on Mac OS or Linux and only with certain virus scanner programs. If this happens you will see an error message in your brower's console: ",(0,r.kt)("em",{parentName:"p"},"Batch channel closed unexpectedly"),". To solve this you can either turn on HTTPS on your JATOS server (recommended) or turn off the virus scranner on (all) your participants computers."),(0,r.kt)("h3",{id:"run-up-to-10-studies-in-the-same-browser-at-the-same-time"},"Run up to 10 studies in the same browser at the same time"),(0,r.kt)("p",null,'When a participant runs a study they usually run only one at any given time. For them it\'s not necessary to run more than one study in parallel in the same browser. But during development of a study it can be an immensely useful feature especially if you are using the Batch Session or develop a group study. You can run the study in up to 10 tabs in the same browser with any worker that pleases you and all these 10 "different" workers can interact with each other. If more than 10 studies run in the same browser in parallel the oldest study is finished automatically. If you want to even more worker in parallel you can always use a different browsers: each other browser adds 10 new possible parallel-running workers.'),(0,r.kt)("h3",{id:"imitate-a-run-from-mechanical-turk"},"Imitate a run from Mechanical Turk"),(0,r.kt)("p",null,"Testing studies posted in MTurk is especially cumbersome, because you should make sure that the confirmation codes are correctly displayed when the study is over. The standard way to test this is to create a study in MTurk's ",(0,r.kt)("a",{parentName:"p",href:"https://requester.mturk.com/developer/sandbox"},"Sandbox"),". There is a way to imitate MTurk, without having to set up anything in the sandbox. Here's how."),(0,r.kt)("p",null,"If you think about it, MTurk simply calls a JATOS ",(0,r.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html"},"study link"),", which is just an URL, something like ",(0,r.kt)("inlineCode",{parentName:"p"},"http://my-jatos-server/publix/tmJ4Ls83sV0")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"tmJ4Ls83sV0")," is the study code and you should change it). Two additional query parameters in the URL tell JATOS that this request comes from MTurk: ",(0,r.kt)("inlineCode",{parentName:"p"},"workerId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"assignmentId"),". Both pieces of information are normally generated by MTurk; but they can be any arbitrary string."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To run the study with ID 4 and batch with ID 2 with an ",(0,r.kt)("strong",{parentName:"p"},"MTurk")," worker on a local JATOS use"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://localhost:9000/publix/myStudyCode?workerId=123456&assignmentId=abcdef\n")),(0,r.kt)("p",{parentName:"li"},"You can use any arbitrary value in the query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"workerId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"assignmentId")," (in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"workerId = 12345")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"assignmentId = abcdef"),"). And you have to change the study code ",(0,r.kt)("inlineCode",{parentName:"p"},"myStudyCode")," to one of your study.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To imitate a run from ",(0,r.kt)("strong",{parentName:"p"},"MTurk's Sandbox")," additionally set ",(0,r.kt)("inlineCode",{parentName:"p"},"turkSubmitTo")," to the value 'sandbox':"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"http://localhost:9000/publix/myStudyCode?workerId=123456&assignmentId=abcdef&turkSubmitTo=sandbox\n")))),(0,r.kt)("h3",{id:"lock-your-studies-before-running-them"},"Lock your studies before running them"),(0,r.kt)("p",null,"Each Study bar has a button that toggles between the  'Unlocked' and 'Locked' states. Locking a study prevents changes to its (or any of its components') properties, change the order of components, etc. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4561).Z,width:"1916",height:"386"})),(0,r.kt)("h3",{id:"do-a-general-single-run-more-than-once-in-the-same-browser"},"Do a General Single Run more than once in the same browser"),(0,r.kt)("p",null,"The problem here is that a General Single Run is intended to work only once in the same browser. Although this is a feature to limit participants doing the same study twice, it can be a hassle for you as a study developer who just want to try out the General Single Run a second time. Luckily there is an easy way around: Since for a General Single Run all studies that the worker already participated in are stored in a browser cookie, it can be easily removed. Just ",(0,r.kt)("strong",{parentName:"p"},"remove the cookie with the name JATOS_GENERALSINGLE_UUIDS")," in your browser. You can find this cookie in every webpage hosted by a JATOS server. If it doesn't exist you probably never did a General Single run yet."),(0,r.kt)("h3",{id:"abort-study-and-keep-some-data"},"Abort study and keep some data"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.abortStudy")," function is called (usually after the worker clicks a \"Cancel\" button) all result data that had been sent to JATOS during this study run will be deleted. This includes result data from prior components of the study run. But sometimes you'll want to save a bit of information that should not be deleted: you might need the worker's email address to pay them. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"By using the build-in abort button with ",(0,r.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosaddabortbutton"},(0,r.kt)("inlineCode",{parentName:"a"},"jatos.addAbortButton"))," and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," parameter. This message won't be deleted together with the other result data. This message can then be seen in every Study Result page in the 'Message' column."),(0,r.kt)("p",{parentName:"li"},"E.g."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'jatos.addAbortButton({\n  msg: "participants ID is 12345678",\n});\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"By using ",(0,r.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosabortstudy"},(0,r.kt)("inlineCode",{parentName:"a"},"jatos.abortStudy"))," and its message parameter. This message won't be deleted together with the other result data. This message can then be seen in every Study Result page in the 'Message' column."),(0,r.kt)("p",{parentName:"li"},"E.g."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'jatos.abortStudy("participants ID is 12345678");\n')))),(0,r.kt)("h3",{id:"how-to-let-a-personal-single-worker-redo-his-study"},"How to let a Personal Single Worker redo his study?"),(0,r.kt)("p",null,"A Personal Single Worker is only allowed to run their study once. But sometimes you want to allow them to do it a second time (maybe they accidentally clicked the 'Cancel' button). One way would be to just create another Personal Single Link and hand it to the worker. But there is another way without creating a second Link: you can simply delete the worker's result from one of the result pages. This will allow this Personal Single worker to redo this study."),(0,r.kt)("h3",{id:"simulate-slow-network"},"Simulate slow network"),(0,r.kt)("p",null,"Usually one develops a study on a local JATOS or a remote JATOS with a good internet - but your participants might live at a place where internet connections are slower or run your study via mobile network. All studies should take this into account, but especially those with big files like images, audio or video. There is a way to artifically throttle the network speed in ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor"},"Firefox's")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/network#throttle"},"Chrome's")," Developer Tools. Choose a slower connection, e.g. '3G', and try out your study again. This works on every JATOS, local or a remote."),(0,r.kt)("h3",{id:"personalgeneral-single-links-seem-not-to-work-when-distributed-via-social-networks"},"Personal/General Single links seem not to work when distributed via social networks"),(0,r.kt)("p",null,"Problem: The study runs fine, but as soon as one distributes links for Personal Single or General Single runs via social networks like Twitter, Facebook and Reddit or chat tools like Slack and Google Hangout it stops working. The participants only get the message 'A problem occurred: Study can be done only once.' and in the results the study run appears as started but never finished (State DATA_RETRIEVED)."),(0,r.kt)("p",null,"The reason for this behaviour is that some of those tools open links that are posted in them before your participant can click on them. They do this to provide more information about the link, like a title and an image. Usually this is fine but Personal/General Single links work exactly once (if preview is not allowed) and a second request with the same link just responses with the forementioned error message."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#study-links---how-to-let-participants-run-your-study"},"study links with confirmation")," - Choose the study link version with the button 'Confirm First'. This link shows a 'study entry' page before the actual study starts. This page can be opened many times.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#allow-preview"},"Allow preview")," - You can keep using Personal/General Single links and use a ",(0,r.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#preview-links"},"preview link")," to allow opening the first component of your study as many times as one wishes. All following components can be opened only once again."))))}p.isMDXComponent=!0},4561:function(e,t,n){t.Z=n.p+"assets/images/study_locked-480def26e67b19253ed6f2386f58a5b5.png"}}]);