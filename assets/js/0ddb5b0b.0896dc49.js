"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||o;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const o={title:"Run an experiment with JATOS - Workflow",slug:"/Run-an-experiment-with-JATOS-Workflow.html",sidebar_position:6},l=void 0,i={unversionedId:"Overview/Run-an-experiment-with-JATOS-Workflow",id:"version-3.8.1/Overview/Run-an-experiment-with-JATOS-Workflow",title:"Run an experiment with JATOS - Workflow",description:"Workflow: What JATOS does",source:"@site/versioned_docs/version-3.8.1/Overview/Run-an-experiment-with-JATOS-Workflow.md",sourceDirName:"Overview",slug:"/Run-an-experiment-with-JATOS-Workflow.html",permalink:"/Run-an-experiment-with-JATOS-Workflow.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Overview/Run-an-experiment-with-JATOS-Workflow.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1712742130,formattedLastUpdatedAt:"Apr 10, 2024",sidebarPosition:6,frontMatter:{title:"Run an experiment with JATOS - Workflow",slug:"/Run-an-experiment-with-JATOS-Workflow.html",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/Get-started.html"},next:{title:"Data Privacy and Ethics",permalink:"/Data-Privacy-and-Ethics.html"}},s={},p=[{value:"Workflow: What JATOS does",id:"workflow-what-jatos-does",level:2},{value:"Step 1: Create/edit HTML, JS, and CSS files (Prepare your study)",id:"step-1-createedit-html-js-and-css-files-prepare-your-study",level:2},{value:"Step 2: Deploy files to a server (Make your study available in the Internet)",id:"step-2-deploy-files-to-a-server-make-your-study-available-in-the-internet",level:2},{value:"Step 3: Collect data",id:"step-3-collect-data",level:2},{value:"Step 4: Download and analyze data",id:"step-4-download-and-analyze-data",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"workflow-what-jatos-does"},"Workflow: What JATOS does"),(0,n.kt)("p",null,"When you start working with studies online, it can be hard to see what exactly JATOS does. This page, explaining the general workflow, might help to clarify things. Follow the links on each section for more details."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"general workflow",src:a(28580).Z,width:"2381",height:"765"})),(0,n.kt)("h2",{id:"step-1-createedit-html-js-and-css-files-prepare-your-study"},"Step 1: Create/edit HTML, JS, and CSS files (Prepare your study)"),(0,n.kt)("p",null,"We recommend that you always start to work on a new study in a ",(0,n.kt)("em",{parentName:"p"},"local")," installation of JATOS. That means, ",(0,n.kt)("a",{parentName:"p",href:"Installation.html#easy-installation-on-your-local-computer"},"download and run JATOS on your local computer"),".\nThe main advantage of this is that you have easy access to all your HTML files and assets and can move them around, delete, and replace without any fuss. "),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"Create-a-new-study.html"},"creating and editing HTML/JS code")),(0,n.kt)("h2",{id:"step-2-deploy-files-to-a-server-make-your-study-available-in-the-internet"},"Step 2: Deploy files to a server (Make your study available in the Internet)"),(0,n.kt)("p",null,"Once your study scripts are complete and bug-free, you need to make them available through the Internet. For that you will need, of course, ",(0,n.kt)("a",{parentName:"p",href:"Bring-your-JATOS-online.html"},"a server"),"."),(0,n.kt)("p",null,"If you have a server already, you will need to take your ready-to-run study from your local installation and deploy it to the server. In order to do this:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On your ",(0,n.kt)("em",{parentName:"li"},"local")," JATOS installation, where your study is, click on the study you want to export on the left sidebar. "),(0,n.kt)("li",{parentName:"ol"},"On the Study bar, click Export. A pop-up window will appear. Save the ",(0,n.kt)("a",{parentName:"li",href:"JATOS-Study-Archive-JZIP.html"},(0,n.kt)("em",{parentName:"a"},".jzip"))," file wherever you like on your computer.  "),(0,n.kt)("li",{parentName:"ol"},"On your ",(0,n.kt)("em",{parentName:"li"},"server")," installation, simply click Import. ")),(0,n.kt)("p",null,"Done. "),(0,n.kt)("p",null,"There are a few important details in ",(0,n.kt)("a",{parentName:"p",href:"Deploy-to-a-server-installation.html"},"deploying your study to a server")),(0,n.kt)("p",null,"Also have a look at ",(0,n.kt)("a",{parentName:"p",href:"Bring-your-JATOS-online.html"},"Bring your JATOS online"),"."),(0,n.kt)("h2",{id:"step-3-collect-data"},"Step 3: Collect data"),(0,n.kt)("p",null,"Read about ",(0,n.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html"},"Study Links")," to create links that you can distribute to your participants. You can do this in many different ways, decide which kind of ",(0,n.kt)("a",{parentName:"p",href:"Worker-Types.html"},"worker types")," you need. You can (but don't have to) use ",(0,n.kt)("a",{parentName:"p",href:"Connect-to-Mechanical-Turk.html"},"MTurk")," or ",(0,n.kt)("a",{parentName:"p",href:"Use-Prolific.html"},"Prolific")," to get participants."),(0,n.kt)("h2",{id:"step-4-download-and-analyze-data"},"Step 4: Download and analyze data"),(0,n.kt)("p",null,"One of JATOS' features is that you can manage the results stored in the database without having to type SQL commands in a terminal. Instead, just do this ",(0,n.kt)("a",{parentName:"p",href:"Manage-Results.html"},"using the GUI"),"."),(0,n.kt)("p",null,"You'll download a .csv or JSON-formatted text file (depending on how you wrote your JavaScript). We always recommend JSON format because it's more flexible and robust, and use ",(0,n.kt)("a",{parentName:"p",href:"https://de.mathworks.com/matlabcentral/fileexchange/33381-jsonlab-a-toolbox-to-encode-decode-json-files"},"JSONlab")," to read the data into Matlab and the ",(0,n.kt)("a",{parentName:"p",href:"https://cran.r-project.org/web/packages/rjson/index.html"},"rjson")," package for R."),(0,n.kt)("p",null,"With this, you can import your JSON data into Matlab or R; or a .csv into Excel, JAGS or SPSS. From here on, you know the drill."))}d.isMDXComponent=!0},28580:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/generalWorkflow-a1cc6ab11a7c27c5b27c1f42aa7c2840.png"}}]);