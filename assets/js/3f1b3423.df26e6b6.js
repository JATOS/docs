"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(83117),r=(n(67294),n(3905));const a={title:"Tips & Tricks",slug:"/Tips-and-Tricks.html",sidebar_position:12},i=void 0,s={unversionedId:"Run_your_study/Tips-and-Tricks",id:"version-3.6.1/Run_your_study/Tips-and-Tricks",title:"Tips & Tricks",description:"Batch and Group Session do not work on Windows without HTTPS",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Tips-and-Tricks.md",sourceDirName:"Run_your_study",slug:"/Tips-and-Tricks.html",permalink:"/3.6.x/Tips-and-Tricks.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.6.1/Run_your_study/Tips-and-Tricks.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1698233992,formattedLastUpdatedAt:"Oct 25, 2023",sidebarPosition:12,frontMatter:{title:"Tips & Tricks",slug:"/Tips-and-Tricks.html",sidebar_position:12},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Study Log",permalink:"/3.6.x/Study-Log.html"},next:{title:"Administration",permalink:"/3.6.x/Administration.html"}},l={},d=[{value:"Batch and Group Session do not work on Windows without HTTPS",id:"batch-and-group-session-do-not-work-on-windows-without-https",level:2},{value:"Run up to 10 studies in the same browser at the same time",id:"run-up-to-10-studies-in-the-same-browser-at-the-same-time",level:2},{value:"Imitate a run from Mechanical Turk",id:"imitate-a-run-from-mechanical-turk",level:2},{value:"Lock your studies before running them",id:"lock-your-studies-before-running-them",level:2},{value:"Do a General Single Run more than once in the same browser",id:"do-a-general-single-run-more-than-once-in-the-same-browser",level:2},{value:"Continue an abandoned study",id:"continue-an-abandoned-study",level:2},{value:"Abort study and keep a message",id:"abort-study-and-keep-a-message",level:2},{value:"How to let a Personal Single Worker redo his study?",id:"how-to-let-a-personal-single-worker-redo-his-study",level:2},{value:"Simulate slow network",id:"simulate-slow-network",level:2},{value:"Personal/General Single links seem not to work when distributed via social networks",id:"personalgeneral-single-links-seem-not-to-work-when-distributed-via-social-networks",level:2}],u={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"batch-and-group-session-do-not-work-on-windows-without-https"},"Batch and Group Session do not work on Windows without HTTPS"),(0,r.kt)("p",null,"The Batch and Group Session rely on WebSockets. Sometimes (rarely) a virus scanner prohibits unencryped WebSockets. This is only a problem on Windows,but not on Mac OS or Linux and only with certain virus scanner programs. If this happens you will see an error message in your brower's console: ",(0,r.kt)("em",{parentName:"p"},"Batch channel closed unexpectedly"),". To solve this you can either turn on HTTPS on your JATOS server (recommended) or turn off the virus scranner on (all) your participants computers."),(0,r.kt)("h2",{id:"run-up-to-10-studies-in-the-same-browser-at-the-same-time"},"Run up to 10 studies in the same browser at the same time"),(0,r.kt)("p",null,'When a participant runs a study they usually run only one at any given time. For them it\'s not necessary to run more than one study in parallel in the same browser. But during development of a study it can be an immensely useful feature especially if you are using the Batch Session or develop a group study. You can run the study in up to 10 tabs in the same browser with any worker that pleases you and all these 10 "different" workers can interact with each other. If more than 10 studies run in the same browser in parallel the oldest study is finished automatically. If you want to even more worker in parallel you can always use a different browsers: each other browser adds 10 new possible parallel-running workers.'),(0,r.kt)("h2",{id:"imitate-a-run-from-mechanical-turk"},"Imitate a run from Mechanical Turk"),(0,r.kt)("p",null,"You should always test your study before posting it anywhere. Testing that your study runs via a simple link is easy: just generate the link, start the study and run once through it.\nTesting studies posted in MTurk is especially cumbersome, because you should make sure that the confirmation codes are correctly displayed when the study is over. The standard way to test this is to create a study in MTurk's ",(0,r.kt)("a",{parentName:"p",href:"https://requester.mturk.com/developer/sandbox"},"Sandbox"),". JATOS offers a way to emulate MTurk, without having to set up anything in the sandbox. Here's how."),(0,r.kt)("p",null,"If you think about it, MTurk simply calls a JATOS URL. The URL to start a study is normally ",(0,r.kt)("inlineCode",{parentName:"p"},"http://your-jatos-server/publix/study-id/start")," (where ",(0,r.kt)("inlineCode",{parentName:"p"},"study-id")," is a placeholder for the ID of the study you want to run). Two additional variables in the URL's query string tell JATOS that this request comes from MTurk (and that it should display the confirmation code when the study is over): ",(0,r.kt)("inlineCode",{parentName:"p"},"workerId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"assignmentId"),". Both pieces of information are normally generated by MTurk; but they can be any arbitrary string. The only constraint is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"workerId")," does not already exist within JATOS. (Think of it this way: Because a MTurk worker can run a study only once, the same ",(0,r.kt)("inlineCode",{parentName:"p"},"workerId")," can be used only once in JATOS.)"),(0,r.kt)("p",null,"Here are some concrete examples:"),(0,r.kt)("p",null,"To run the study with ID 4 and batch with ID 2 with an ",(0,r.kt)("strong",{parentName:"p"},"MTurk")," worker on a local JATOS use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://localhost:9000/publix/4/start?batchId=2&workerId=123456&assignmentId=abcdef\n")),(0,r.kt)("p",null,"You can use any arbitrary value in the query strings ",(0,r.kt)("inlineCode",{parentName:"p"},"workerId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"assignmentId")," (in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"workerId = 12345")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"assignmentId = abcdef"),")."),(0,r.kt)("p",null,"To imitate a run from ",(0,r.kt)("strong",{parentName:"p"},"MTurk's Sandbox")," additionally set ",(0,r.kt)("inlineCode",{parentName:"p"},"turkSubmitTo")," to the value 'sandbox':"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://localhost:9000/publix/4/start?batchId=2&workerId=123456&assignmentId=abcdef&turkSubmitTo=sandbox\n")),(0,r.kt)("h2",{id:"lock-your-studies-before-running-them"},"Lock your studies before running them"),(0,r.kt)("p",null,"Each Study bar has a button that toggles between the  'Unlocked' and 'Locked' states. Locking a study prevents changes to its (or any of its components') properties, change the order of components, etc. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(56159).Z,width:"506",height:"140"})),(0,r.kt)("h2",{id:"do-a-general-single-run-more-than-once-in-the-same-browser"},"Do a General Single Run more than once in the same browser"),(0,r.kt)("p",null,"The problem here is that a General Single Run is intended to work only once in the same browser. Although this is a feature to limit participants doing the same study twice, it can be a hassle for you as a study developer who just want to try out the General Single Run a second time. Luckily there is an easy way around: Since for a General Single Run all studies that the worker already participated in are stored in a browser cookie, it can be easily removed. Just ",(0,r.kt)("strong",{parentName:"p"},"remove the cookie with the name JATOS_GENERALSINGLE_UUIDS")," in your browser. You can find this cookie in every webpage hosted by a JATOS server. If it doesn't exist you probably never did a General Single run yet."),(0,r.kt)("h2",{id:"continue-an-abandoned-study"},"Continue an abandoned study"),(0,r.kt)("p",null,"Sometimes workers leave in the middle of a study. Maybe their internet connection was down, maybe they just left for the next pub and closed the browser tab. Suppose they now want to continue from where they left it. Using the initial run link will not do what they want: it will either start a new study run, or give an error message, depending on the worker type. "),(0,r.kt)("p",null,"But there is a way (you'll need to send the worker a new link). "),(0,r.kt)("p",null,"You'll need three IDs: 1) ",(0,r.kt)("em",{parentName:"p"},"study ID"),", 2) ",(0,r.kt)("em",{parentName:"p"},"component ID")," of the component from where to restart, and 3) the ",(0,r.kt)("em",{parentName:"p"},"study result ID"),". All three IDs are quite easy to get from JATOS' GUI. The component ID can be found in the component table of the study. The study result ID is shown in the study result table. The study ID is part of the URL of every study view, e.g. if the URL of the study view is ",(0,r.kt)("a",{parentName:"p",href:"https://cortex.jatos.org/jatos/19"},"https://cortex.jatos.org/jatos/19")," then the study ID is 19."),(0,r.kt)("p",null,"Then the worker who abandoned the study can continue it with the link: ht",(0,r.kt)("span",null,"tps://"),"my-domain-name/publix/<",(0,r.kt)("em",{parentName:"p"},"study ID"),">","/\\<",(0,r.kt)("em",{parentName:"p"},"component ID"),">","/start?srid=\\<",(0,r.kt)("em",{parentName:"p"},"study result ID"),">","."),(0,r.kt)("p",null,"E.g. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"study ID: ",(0,r.kt)("inlineCode",{parentName:"p"},"31"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"component ID: ",(0,r.kt)("inlineCode",{parentName:"p"},"167"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"study result ID: ",(0,r.kt)("inlineCode",{parentName:"p"},"816"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"domain name and protocol is ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cortex.jatos.org")),(0,r.kt)("p",{parentName:"li"},"Then the URL is: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://cortex.jatos.org/publix/31/167/start?srid=816")))),(0,r.kt)("p",null,"But there is a catch! This works only under three conditions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the component is set to 'reloadable'"),(0,r.kt)("li",{parentName:"ol"},"the worker uses the same browser on the same computer and didn't delete JATOS' cookies"),(0,r.kt)("li",{parentName:"ol"},"the worker didn't start more than 10 JATOS studies at the same time in parallel after running the abandoned study")),(0,r.kt)("p",null,"Condition 3 is very unlikely a problem and for 1 you can just check the 'reloadable' checkbox in the component's settings. Condition 2 is more difficult, it demands the worker to return to the computer and browser they run the study before."),(0,r.kt)("h2",{id:"abort-study-and-keep-a-message"},"Abort study and keep a message"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.abortStudy")," function is called (usually after the worker clicks a \"Cancel\" button) all result data that had been sent to JATOS during this study run will be deleted. This includes result data from prior components of the study run. But sometimes you'll want to save a bit of information that should not be deleted: you might need the worker's email address to pay them -even if they cancelled the study-. So you need a way to delete the result data but keep their email. "),(0,r.kt)("p",null,"To do this, you can send a message together with ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.abortStudy")," as a parameter. This message won't be deleted together with the other result data. E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'jatos.abortStudy("participants ID is 12345678");'),". This message can then be seen in every Study Result page in the 'Message' column."),(0,r.kt)("h2",{id:"how-to-let-a-personal-single-worker-redo-his-study"},"How to let a Personal Single Worker redo his study?"),(0,r.kt)("p",null,"A Personal Single Worker is only allowed to run their study once. But sometimes you want to allow them to do it a second time (maybe they accidentally clicked the 'Cancel' button). One way would be to just create another Personal Single Link and hand it to the worker. But there is another way without creating a second Link: you can simply delete the worker's result from one of the result pages. This will allow this Personal Single worker to redo this study."),(0,r.kt)("h2",{id:"simulate-slow-network"},"Simulate slow network"),(0,r.kt)("p",null,"Usually one develops a study on a local JATOS or a remote JATOS with a good internet - but your participants might live at a place where internet connections are slower or run your study via mobile network. All studies should take this into account, but especially those with big files like images, audio or video. There is a way to artifically throttle the network speed in ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor"},"Firefox's")," and ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/network#throttle"},"Chrome's")," Developer Tools. Choose a slower connection, e.g. '3G', and try out your study again. This works on every JATOS, local or a remote."),(0,r.kt)("h2",{id:"personalgeneral-single-links-seem-not-to-work-when-distributed-via-social-networks"},"Personal/General Single links seem not to work when distributed via social networks"),(0,r.kt)("p",null,"Problem: The study runs fine, but as soon as one distributes links for Personal Single or General Single runs via social networks like Twitter, Facebook and Reddit or chat tools like Slack and Google Hangout it stops working. The participants only get the message 'A problem occurred: Study can be done only once.' and in the results the study run appears as started but never finished (State DATA_RETRIEVED)."),(0,r.kt)("p",null,"The reason for this behaviour is that some of those tools open links that are posted in them before your participant can click on them. They do this to provide more information about the link, like a title and an image. Usually this is fine but Personal/General Single links work exactly once (if preview is not allowed) and a second request with the same link just responses with the forementioned error message."),(0,r.kt)("p",null,"Solution: You can keep using Personal/General Single links and use a ",(0,r.kt)("a",{parentName:"p",href:"Restricting-study-flow.html#preview-links"},"preview link")," to allow opening the first component of your study as many times as one wishes. All following components can be opened only once again."),(0,r.kt)("p",null,"If your study has only one component (like it is common with OpenSesame/OSWeb or lab.js studies) then you can add an additional component in front of the actual experiment. This component would be a preview component in which you can give an intro to your experiment and most importantly tell your participants that by going on (e.g. clicking on the 'continue' button) they would start the experiment and this can be done only once. One can combine this with a consent form."))}h.isMDXComponent=!0},56159:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);