"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7254],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(o),h=a,c=d["".concat(l,".").concat(h)]||d[h]||m[h]||r;return o?n.createElement(c,i(i({ref:t},u),{},{components:o})):n.createElement(c,i({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},94749:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(83117),a=(o(67294),o(3905));const r={title:"Combine two pre-written studies into one",slug:"/Combine-two-pre-written-studies-into-one.html",sidebar_position:3},i=void 0,s={unversionedId:"Write_your_study/Combine_two_pre_written_studies_into_one",id:"version-3.9.1/Write_your_study/Combine_two_pre_written_studies_into_one",title:"Combine two pre-written studies into one",description:"Take two separate studies and combine them into a single one",source:"@site/versioned_docs/version-3.9.1/Write_your_study/Combine_two_pre_written_studies_into_one.md",sourceDirName:"Write_your_study",slug:"/Combine-two-pre-written-studies-into-one.html",permalink:"/Combine-two-pre-written-studies-into-one.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Write_your_study/Combine_two_pre_written_studies_into_one.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1732281913,formattedLastUpdatedAt:"Nov 22, 2024",sidebarPosition:3,frontMatter:{title:"Combine two pre-written studies into one",slug:"/Combine-two-pre-written-studies-into-one.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Adapt pre written code to run it in JATOS",permalink:"/Adapt-pre-written-code-to-run-it-in-JATOS.html"},next:{title:"jsPsych and JATOS",permalink:"/jsPsych-and-JATOS.html"}},l={},p=[{value:"Ingredients",id:"ingredients",level:3},{value:"Strategy",id:"strategy",level:3},{value:"Steps",id:"steps",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Take two separate studies and combine them into a single one")," "),(0,a.kt)("p",null,"You might have created two parts of a study using different tools. For example, you coded a survey with ",(0,a.kt)("a",{parentName:"p",href:"/labjs-and-JATOS.html"},"labjs")," and a perceptual experiment with ",(0,a.kt)("a",{parentName:"p",href:"OSWeb-and-JATOS.html"},"OSWeb"),". You have two ",(0,a.kt)("em",{parentName:"p"},".jzip")," files from each of these tools, but now you want to combine them into one. Here's how. "),(0,a.kt)("p",null,"Note that this description works for any two halves of a study, coded in whatever way. (But of course, if you were the one writing the scripts instead of using an experiment builder, you'll likely not need this explanation)."),(0,a.kt)("h3",{id:"ingredients"},"Ingredients"),(0,a.kt)("p",null,"To combine two studies into one you'll need:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("a",{parentName:"li",href:"Installation.html#easy-installation-on-your-local-computer"},(0,a.kt)("strong",{parentName:"a"},"local instance"))," of JATOS. Make sure this is not the one on the server, but the one you run on your own computer. This will give you easy access to move and rename your files. "),(0,a.kt)("li",{parentName:"ol"},"Information about where your study assets are: Go to ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:9000/jatos"},"http://localhost:9000/jatos"),". On the homepage, find the section \"Where are my files\". (It's big, you can't miss it). Find that folder on your computer. "),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("em",{parentName:"li"},".jzip")," for the first half of your study. "),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("em",{parentName:"li"},".jzip")," for the second half of your study.")),(0,a.kt)("p",null,"Note for 3. and 4.: You should not try to generate a ",(0,a.kt)("em",{parentName:"p"},".jzip")," file by hand at this point (although it is possible). A ",(0,a.kt)("a",{parentName:"p",href:"JATOS-Study-Archive-JZIP.html"},"JZIP study archive")," file is a ZIP archive with a standardized content. They contain information that JATOS needs to understand that something is a study."),(0,a.kt)("h3",{id:"strategy"},"Strategy"),(0,a.kt)("p",null,"The idea will be to, first, import one of these halves of a study into your local JATOS instance. Then, add the files from the second half as an additional component to the first half. "),(0,a.kt)("h3",{id:"steps"},"Steps"),(0,a.kt)("p",null,"These steps sound complicated, but it's all really simple clicking around and copy-pasting. Basically a JATOS-study-collage. "),(0,a.kt)("p",null,"Imagine you have ",(0,a.kt)("em",{parentName:"p"},"half-study-1.jzip")," (a survey) and ",(0,a.kt)("em",{parentName:"p"},"half-study-2.jzip")," (a perceptual task).  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Import the ",(0,a.kt)("em",{parentName:"li"},"half-study-1.jzip")," into JATOS. You should get one study with a single component. "),(0,a.kt)("li",{parentName:"ol"},"Identify the folder in your local computer where these study assets are. (Ingredient 2, described above.)"),(0,a.kt)("li",{parentName:"ol"},"Import the ",(0,a.kt)("em",{parentName:"li"},"half-study-2.jzip")," into JATOS. You should get one study with a single component."),(0,a.kt)("li",{parentName:"ol"},"Look into the folder you found in Step 2. Navigate to the subfolder that corresponds to ",(0,a.kt)("em",{parentName:"li"},"half-study-2"),". You should find a single ",(0,a.kt)("em",{parentName:"li"},".html")," file (this is what actually displays your study) and probably a lot of other assets, including libraries and CSS stylesheets. "),(0,a.kt)("li",{parentName:"ol"},"In your local JATOS: Go to the component properties of each of your study halves. Find the field with the path to the HTML file that runs your study. If the name of the HTML files is the same for both halves (it often is ",(0,a.kt)("em",{parentName:"li"},"index.html"),"), change the names. Now they are called ",(0,a.kt)("em",{parentName:"li"},"index-half-1.html")," and ",(0,a.kt)("em",{parentName:"li"},"index-half-2.html"),". You can change the names in the component properties. JATOS will change the actual file name on your filesystem for you. (Confirm that you want this when prompted).   "),(0,a.kt)("li",{parentName:"ol"},"In your local filesystem: Copy all of the contents of this subfolder for ",(0,a.kt)("em",{parentName:"li"},"half-study-2")," into the subfolder for ",(0,a.kt)("em",{parentName:"li"},"half-study-1"),". You now combined the information from both studies into a single folder and made sure that the HTML files are uniquely named.  "),(0,a.kt)("li",{parentName:"ol"},"In your local JATOS: Go to the your ",(0,a.kt)("em",{parentName:"li"},"half-study-1"),'. Click on "New component". In the properties of this new component, indicate the path to the HTML file from ',(0,a.kt)("em",{parentName:"li"},"half-study-2"),". Copy any other properties that might exist (e.g. ",(0,a.kt)("em",{parentName:"li"},"study input")," or ",(0,a.kt)("em",{parentName:"li"},"component input"),") from the single component in ",(0,a.kt)("em",{parentName:"li"},"half-study-2")," to this new component in ",(0,a.kt)("em",{parentName:"li"},"half-study-1"),". "),(0,a.kt)("li",{parentName:"ol"},"Now you have a complete, combined study. "),(0,a.kt)("li",{parentName:"ol"},"Export this study from your local instance."),(0,a.kt)("li",{parentName:"ol"},"Import the ",(0,a.kt)("em",{parentName:"li"},".jzip")," you created in step 9 into your online JATOS server.  ")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Make sure that the study doesn't finish after the first component. In the javascript of the first component you should see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.startNextComponent(myResultDataObject);\n")),(0,a.kt)("p",null,"and not "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.endStudy(myResultDataObject);\n")))}m.isMDXComponent=!0}}]);