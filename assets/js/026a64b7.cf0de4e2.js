"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9750],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(3117),o=(n(7294),n(3905));const a={title:"Use MTurk",slug:"/Connect-to-Mechanical-Turk.html",sidebar_position:5},i=void 0,s={unversionedId:"Run_your_study/Connect-to-Mechanical-Turk",id:"version-3.7.1/Run_your_study/Connect-to-Mechanical-Turk",title:"Use MTurk",description:"Use your JATOS study with Mturk is easy, although a fair amount of clicking is required.",source:"@site/versioned_docs/version-3.7.1/Run_your_study/Connect-to-Mechanical-Turk.md",sourceDirName:"Run_your_study",slug:"/Connect-to-Mechanical-Turk.html",permalink:"/3.7.x/Connect-to-Mechanical-Turk.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.7.1/Run_your_study/Connect-to-Mechanical-Turk.md",tags:[],version:"3.7.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1683452710,formattedLastUpdatedAt:"May 7, 2023",sidebarPosition:5,frontMatter:{title:"Use MTurk",slug:"/Connect-to-Mechanical-Turk.html",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Restricting study flow - reloading, linear studies, single-use workers and previews",permalink:"/3.7.x/Restricting-study-flow.html"},next:{title:"Use Prolific",permalink:"/3.7.x/Use-Prolific.html"}},u={},l=[{value:"You will need",id:"you-will-need",level:3},{value:"On JATOS&#39; side",id:"on-jatos-side",level:3},{value:"On MTurk&#39;s page",id:"on-mturks-page",level:3},{value:"What should happen",id:"what-should-happen",level:3},{value:"How to check the confirmation codes",id:"how-to-check-the-confirmation-codes",level:3}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use your JATOS study with Mturk is easy, although a fair amount of clicking is required."),(0,o.kt)("p",null,"A good idea is always to try it yourself first in ",(0,o.kt)("a",{parentName:"p",href:"https://requester.mturk.com/developer/sandbox"},"MTurk Sandbox")," before you let real workers do it."),(0,o.kt)("h3",{id:"you-will-need"},"You will need"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A requester Mturk account"),(0,o.kt)("li",{parentName:"ul"},"Your study running on a ",(0,o.kt)("a",{parentName:"li",href:"Bring-your-JATOS-online.html"},"JATOS server")),(0,o.kt)("li",{parentName:"ul"},"A description of the study (this can be the same as the one you included in the study description within JATOS)")),(0,o.kt)("h3",{id:"on-jatos-side"},"On JATOS' side"),(0,o.kt)("p",null,"In JATOS, go to your study's page and click on the Study Links button and open the batch you want to run."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JATOS GUI screenshot",src:n(2223).Z,width:"1919",height:"625"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Don't forget to enable the MTurk type")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("em",{parentName:"p"},"Source Code"),". You'll see a box with HTML code, similar to the one shown here. You will have to copy and paste the code from here to the MTurk interface."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"JATOS GUI screenshot",src:n(6560).Z,width:"1902",height:"605"})),(0,o.kt)("h3",{id:"on-mturks-page"},"On MTurk's page"),(0,o.kt)("p",null,"You first have to create a project in the MTurk interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign into your ",(0,o.kt)("a",{parentName:"p",href:"https://requester.mturk.com/signin_options"},"MTurk requester account")," (or ",(0,o.kt)("a",{parentName:"p",href:"https://requestersandbox.mturk.com/signin_options"},"requester sandbox account"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create \u27f6 New Project \u27f6 Survey Link \u27f6 Create Project - or just click this ",(0,o.kt)("a",{parentName:"p",href:"https://requester.mturk.com/create/projects/new"},"link for requester")," (or this ",(0,o.kt)("a",{parentName:"p",href:"https://requestersandbox.mturk.com/create/projects/new"},"link for requester sandbox"),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Complete the ",(0,o.kt)("em",{parentName:"p"},"Enter Properties")," tab")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("em",{parentName:"p"},"Design layout")," button in the bottom of the page. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("em",{parentName:"p"},"Source")," button. You'll see some text in an editable window, corresponding to an HTML file. Delete the entire text in this field."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"MTurk Schreenshot",src:n(3190).Z,width:"2656",height:"1112"}),"   ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now paste the source code that you got from JATOS into this text field. This HTML code works out-of-the-box and you don't have to change anything (but you can if you want).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To exit the editing mode, click on the \u2018Source\u2019 button again and continue setting up your study in MTurk."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"MTurk Schreenshot",src:n(5882).Z,width:"2688",height:"810"})))),(0,o.kt)("h3",{id:"what-should-happen"},"What should happen"),(0,o.kt)("p",null,"When an MTurk worker finishes a study they'll see a confirmation code like this one."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Confirmation code",src:n(8424).Z,width:"1919",height:"251"})),(0,o.kt)("h3",{id:"how-to-check-the-confirmation-codes"},"How to check the confirmation codes"),(0,o.kt)("p",null,"To assign payment to individual workers, just compare the confirmation codes stored in JATOS' results page to those stored in MTurk. To see the confirmation codes in your results page you might have to add the column to your table: Like in the image, go to Customize and choose MTurk Confirmation Code. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Results of Mturk workers",src:n(9083).Z,width:"1919",height:"657"})))}p.isMDXComponent=!0},8424:function(e,t,n){t.Z=n.p+"assets/images/MTurk-confirmation-code_371-2d571d88a347b5e2a675e6f2a2f299f7.png"},5882:function(e,t,n){t.Z=n.p+"assets/images/MTurk-source-editor-done-5e6c5c618f8f72c07d7ee05bfd8fabea.png"},3190:function(e,t,n){t.Z=n.p+"assets/images/MTurk-source-editor-e13233189d2b43732d59913807341303.png"},9083:function(e,t,n){t.Z=n.p+"assets/images/mturk-results-a07adbabc7ad19b5baf368cde4a8398c.png"},2223:function(e,t,n){t.Z=n.p+"assets/images/study_links_mturk-38e9ff32fd88b71f2c97fb14c6cb25f9.png"},6560:function(e,t,n){t.Z=n.p+"assets/images/study_links_mturk_source_code-cbc30940425e9a29f7a78e58ef5e1bb0.png"}}]);