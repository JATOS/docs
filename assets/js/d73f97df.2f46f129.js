"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7535],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={title:"Get started",slug:"/Get-started.html",sidebar_position:5},i=void 0,s={unversionedId:"Overview/Get-started",id:"version-3.8.1/Overview/Get-started",title:"Get started",description:"Get started in 4 steps",source:"@site/versioned_docs/version-3.8.1/Overview/Get-started.md",sourceDirName:"Overview",slug:"/Get-started.html",permalink:"/Get-started.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.8.1/Overview/Get-started.md",tags:[],version:"3.8.1",lastUpdatedBy:"kristian",lastUpdatedAt:1679002097,formattedLastUpdatedAt:"Mar 16, 2023",sidebarPosition:5,frontMatter:{title:"Get started",slug:"/Get-started.html",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/Installation.html"},next:{title:"Run an experiment with JATOS - Workflow",permalink:"/Run-an-experiment-with-JATOS-Workflow.html"}},l={},p=[{value:"Get started in 4 steps",id:"get-started-in-4-steps",level:3},{value:"Explore",id:"explore",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"get-started-in-4-steps"},"Get started in 4 steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Download JATOS and ",(0,a.kt)("a",{parentName:"strong",href:"Installation.html"},"install a local instance")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Open JATOS' GUI by going to ",(0,a.kt)("a",{parentName:"strong",href:"http://localhost:9000"},"localhost:9000")," in your browser window"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Download and import an example study")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download one of the ",(0,a.kt)("a",{parentName:"p",href:"/Example-Studies"},"Example Studies"),", e.g. the 'Go- / No-Go Task' with jsPsych. Do not unzip the downloaded file. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the study into JATOS: Go to JATOS' GUI in your browser and click on ",(0,a.kt)("strong",{parentName:"p"},"Import Study")," in the header. Choose the ",(0,a.kt)("a",{parentName:"p",href:"JATOS-Study-Archive-JZIP.html"},(0,a.kt)("em",{parentName:"a"},".jzip"))," file you just downloaded. The imported study should appear in the sidebar on the left.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Explore the GUI")),(0,a.kt)("p",{parentName:"li"},"In the sidebar click the study to get into the study's page. "),(0,a.kt)("p",{parentName:"li"},"To do a test run of the entire study, click on ",(0,a.kt)("strong",{parentName:"p"},"Run")," in the toolbar on top of the page."),(0,a.kt)("p",{parentName:"li"},"If you finished running through the study, you can check the results."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To see whole-study results, click on the ",(0,a.kt)("strong",{parentName:"li"},"Results")," button on the top of the page."),(0,a.kt)("li",{parentName:"ul"},"To see results from individual components, click on the ",(0,a.kt)("strong",{parentName:"li"},"Results")," buttons on each component's row.")),(0,a.kt)("p",{parentName:"li"},"For example, you can see each result's details by clicking on the little arrow to the left of its row (",(0,a.kt)("a",{parentName:"p",href:"Manage-results.html"},"more information on how to mangage results"),")."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Here's a screenshot of a study's results view:"),"\n",(0,a.kt)("img",{alt:"Results View screenshot",src:n(3684).Z,width:"1547",height:"585"})))),(0,a.kt)("h3",{id:"explore"},"Explore"),(0,a.kt)("p",null,"Now it's time to explore a little bit more."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can click on any component's position button and drag it to a new position within the study. "),(0,a.kt)("li",{parentName:"ul"},"Each component has a ",(0,a.kt)("strong",{parentName:"li"},"Properties")," button. The component's HTML file may read the data in the field 'JSON data'. This is a way to make changes in the details of the code (wording of instructions, stimuli, timing, number of trials, etc) without having to hard-code them into JavaScript. "),(0,a.kt)("li",{parentName:"ul"},'Where are the actual HTML, JavaScript, and CSS files? They are the files that actually run your study, so make sure you can locate them. All these files, together with any images, sound files, etc. you might have, are called "Study assets". They will be in ',(0,a.kt)("inlineCode",{parentName:"li"},"/path_to_my_JATOS/study_assets_root/name_of_my_study/"),".")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Here's a screenshot of a component's properties view:"),"\n",(0,a.kt)("img",{alt:"GUI screenshot",src:n(937).Z,width:"1920",height:"1053"})))}c.isMDXComponent=!0},937:function(e,t,n){t.Z=n.p+"assets/images/Component_properties_screenshot_2-909ab98c7144f56abe4e0257428e4f4b.png"},3684:function(e,t,n){t.Z=n.p+"assets/images/ResultsView-Screenshot11-873448e778ebe1e2dcb5a01bb5c510e1.png"}}]);