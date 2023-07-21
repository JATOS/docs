"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[6525],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=r,c=m["".concat(s,".").concat(h)]||m[h]||d[h]||a;return n?o.createElement(c,i(i({ref:t},p),{},{components:n})):o.createElement(c,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5704:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var o=n(3117),r=(n(7294),n(3905));const a={title:"Combine two pre-written studies into one",slug:"/Combine-two-pre-written-studies-into-one.html",sidebar_position:3},i=void 0,l={unversionedId:"Write_your_study/Combine_two_pre_written_studies_into_one",id:"version-3.8.1/Write_your_study/Combine_two_pre_written_studies_into_one",title:"Combine two pre-written studies into one",description:"Take two separate studies and combine them into a single one",source:"@site/versioned_docs/version-3.8.1/Write_your_study/Combine_two_pre_written_studies_into_one.md",sourceDirName:"Write_your_study",slug:"/Combine-two-pre-written-studies-into-one.html",permalink:"/Combine-two-pre-written-studies-into-one.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Write_your_study/Combine_two_pre_written_studies_into_one.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1689931563,formattedLastUpdatedAt:"Jul 21, 2023",sidebarPosition:3,frontMatter:{title:"Combine two pre-written studies into one",slug:"/Combine-two-pre-written-studies-into-one.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Adapt pre written code to run it in JATOS",permalink:"/Adapt-pre-written-code-to-run-it-in-JATOS.html"},next:{title:"jsPsych and JATOS",permalink:"/jsPsych-and-JATOS.html"}},s={},u=[{value:"Ingredients",id:"ingredients",level:3},{value:"Strategy",id:"strategy",level:3},{value:"Steps",id:"steps",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Take two separate studies and combine them into a single one")," "),(0,r.kt)("p",null,"You might have created two parts of a study using different tools. For example, you coded a survey with ",(0,r.kt)("a",{parentName:"p",href:"/labjs-and-JATOS.html"},"labjs")," and a perceptual experiment with ",(0,r.kt)("a",{parentName:"p",href:"OSWeb-and-JATOS.html"},"OSWeb"),". You have two ",(0,r.kt)("em",{parentName:"p"},".jzip")," files from each of these tools, but now you want to combine them into one. Here's how. "),(0,r.kt)("p",null,"Note that this description works for any two halves of a study, coded in whatever way. (But of course, if you were the one writing the scripts instead of using an experiment builder, you'll likely not need this explanation)."),(0,r.kt)("h3",{id:"ingredients"},"Ingredients"),(0,r.kt)("p",null,"To combine two studies into one you'll need:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"Installation.html#easy-installation-on-your-local-computer"},(0,r.kt)("strong",{parentName:"a"},"local instance"))," of JATOS. Make sure this is not the one on the server, but the one you run on your own computer. This will give you easy access to move and rename your files. "),(0,r.kt)("li",{parentName:"ol"},"Information about where your study assets are: Go to ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:9000/jatos"},"http://localhost:9000/jatos"),". On the homepage, find the section \"Where are my files\". (It's big, you can't miss it). Find that folder on your computer. "),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("em",{parentName:"li"},".jzip")," for the first half of your study. "),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("em",{parentName:"li"},".jzip")," for the second half of your study.")),(0,r.kt)("p",null,"Note for 3. and 4.: You should not try to generate a ",(0,r.kt)("em",{parentName:"p"},".jzip")," file by hand at this point. A ",(0,r.kt)("a",{parentName:"p",href:"JATOS-Study-Archive-JZIP.html"},"JZIP study archive")," file is a ZIP archive with a standarized content. They contain information that JATOS needs to understand that something is a study.  "),(0,r.kt)("h3",{id:"strategy"},"Strategy"),(0,r.kt)("p",null,"The idea will be to, first, import one of these halves of a study into your local JATOS instance. Then, add the files from the second half as an additional component to the first half. "),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("p",null,"These steps sound complicated, but it's all really simple clicking around and copy-pasting. Basically a JATOS-study-collage. "),(0,r.kt)("p",null,"Imagine you have ",(0,r.kt)("em",{parentName:"p"},"half-study-1.jzip")," (a survey) and ",(0,r.kt)("em",{parentName:"p"},"half-study-2.jzip")," (a perceptual task).  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import the ",(0,r.kt)("em",{parentName:"li"},"half-study-1.jzip")," into JATOS. You should get one study with a single component. "),(0,r.kt)("li",{parentName:"ol"},"Identify the folder in your local computer where these study assets are. (Ingredient 2, described above.)"),(0,r.kt)("li",{parentName:"ol"},"Import the ",(0,r.kt)("em",{parentName:"li"},"half-study-2.jzip")," into JATOS. You should get one study with a single component."),(0,r.kt)("li",{parentName:"ol"},"Look into the folder you found in Step 2. Navigate to the subfolder that corresponds to ",(0,r.kt)("em",{parentName:"li"},"half-study-2"),". You should find a single ",(0,r.kt)("em",{parentName:"li"},".html")," file (this is what actually displays your study) and probably a lot of other assets, including libraries and CSS stylesheets. "),(0,r.kt)("li",{parentName:"ol"},"In your local JATOS: Go to the component properties of each of your study halves. Find the field with the path to the HTML file that runs your study. If the name of the HTML files is the same for both halves (it often is ",(0,r.kt)("em",{parentName:"li"},"index.html"),"), change the names. Now they are called ",(0,r.kt)("em",{parentName:"li"},"index-half-1.html")," and ",(0,r.kt)("em",{parentName:"li"},"index-half-2.html"),". You can change the names in the component properties. JATOS will change the actual file name on your filesystem for you. (Confirm that you want this when prompted).   "),(0,r.kt)("li",{parentName:"ol"},"In your local filesystem: Copy all of the contents of this subfolder for ",(0,r.kt)("em",{parentName:"li"},"half-study-2")," into the subfolder for ",(0,r.kt)("em",{parentName:"li"},"half-study-1"),". You now combined the information from both studies into a single folder and made sure that the HTML files are uniquely named.  "),(0,r.kt)("li",{parentName:"ol"},"In your local JATOS: Go to the your ",(0,r.kt)("em",{parentName:"li"},"half-study-1"),'. Click on "New component". In the properties of this new component, indicate the path to the HTML file from ',(0,r.kt)("em",{parentName:"li"},"half-study-2"),". Copy any other properties that might exist (e.g. JSON input) from the single component in ",(0,r.kt)("em",{parentName:"li"},"half-study-2")," to this new component in ",(0,r.kt)("em",{parentName:"li"},"half-study-1"),". "),(0,r.kt)("li",{parentName:"ol"},"Now you have a complete, combined study. "),(0,r.kt)("li",{parentName:"ol"},"Export this study from your local instance."),(0,r.kt)("li",{parentName:"ol"},"Import the ",(0,r.kt)("em",{parentName:"li"},".jzip")," you created in step 9 into your online JATOS server.  ")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"Make sure that the study doesn't finish after the first component. In the javascript of the first component you should see something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.startNextComponent(myResultDataObject);\n")),(0,r.kt)("p",null,"and not "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"jatos.endStudy(myResultDataObject);\n")))}d.isMDXComponent=!0}}]);