"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[8505],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=n,h=m["".concat(i,".").concat(c)]||m[c]||p[c]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15637:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(83117),n=(a(67294),a(3905));const o={title:"Submit and upload data to the server",slug:"/Submit-and-upload-data-to-the-server.html",sidebar_position:8},s=void 0,l={unversionedId:"Write_your_study/Submit-and-upload-data-to-the-server",id:"version-3.8.1/Write_your_study/Submit-and-upload-data-to-the-server",title:"Submit and upload data to the server",description:"If you wrote your study with HTML/JavaScript/CSS, you'll need to know how to send to the JATOS server for safe storage and easy later retrieval. Here we describe how to submit data. See Manage Results to know how to retrieve it.",source:"@site/versioned_docs/version-3.8.1/Write_your_study/Submit-and-upload-data-to-the-server.md",sourceDirName:"Write_your_study",slug:"/Submit-and-upload-data-to-the-server.html",permalink:"/Submit-and-upload-data-to-the-server.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Write_your_study/Submit-and-upload-data-to-the-server.md",tags:[],version:"3.8.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1716888513,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:8,frontMatter:{title:"Submit and upload data to the server",slug:"/Submit-and-upload-data-to-the-server.html",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Change study's members",permalink:"/Change-studys-members.html"},next:{title:"Session Data - Three Types",permalink:"/Session-Data-Three-Types.html"}},i={},d=[{value:"Submit result data",id:"submit-result-data",level:3},{value:"Upload and download result files",id:"upload-and-download-result-files",level:3}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you wrote your study with HTML/JavaScript/CSS, you'll need to know how to send to the JATOS server for safe storage and easy later retrieval. Here we describe how to submit data. See ",(0,n.kt)("a",{parentName:"p",href:"Manage-Results.html"},"Manage Results")," to know how to retrieve it."),(0,n.kt)("h3",{id:"submit-result-data"},"Submit result data"),(0,n.kt)("p",null,"There are a couple of ",(0,n.kt)("em",{parentName:"p"},"jatos.js")," functions that allow you to send data to the JATOS server. The result data can be anything that can be put into text, which includes formats like JSON or CSV. Images, audio or video data can only be sent via Upload (explained below)."),(0,n.kt)("p",null,"The two functions ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossubmitresultdata"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.submitResultData"))," and ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosappendresultdata"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.appendResultData"))," let you submit text data to the server. They are similar to each other. The only difference is that the first overwrites the data and therefore deletes previously sent data, while the latter appends new data to old data. "),(0,n.kt)("p",null,"Then there are a couple of functions that do something else (primarily) but allow you to send result data out of convenience, since they usually go together anyway. These are all functions that start a new component (e.g. ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosstartnextcomponent"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.startNextComponent")),", ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosstartcomponentbypos"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.startComponentByPos")),") and all functions that end a study (",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudy"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.endStudy"))," and ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosendstudyandredirect"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.endStudyAndRedirect")),")."),(0,n.kt)("p",null,"Sending data to a server can take some time, depending on the internet connection and the size of the result data. The convenience functions have the advantage that they will execute their primary function (e.g. start next component) only ",(0,n.kt)("em",{parentName:"p"},"after")," the result data have been submitted. Therefore these are generally safer ways to submit your result data. "),(0,n.kt)("h3",{id:"upload-and-download-result-files"},"Upload and download result files"),(0,n.kt)("p",null,"If you want to upload audio, video, images or any other data that is not in text format, then uploading a result file is what you need: ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosuploadresultfile"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.uploadResultFile")),". "),(0,n.kt)("p",null,"And if you want to, in a later component, access the uploaded files again you can download them with ",(0,n.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosdownloadresultfile"},(0,n.kt)("inlineCode",{parentName:"a"},"jatos.downloadResultFile")),"."),(0,n.kt)("p",null,"For more real-world examples have a look at the ",(0,n.kt)("a",{parentName:"p",href:"/Example-Studies"},"'Drawing' and the 'Video Recording' examples"),"."))}p.isMDXComponent=!0}}]);