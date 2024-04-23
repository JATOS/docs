"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,O=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(O,i(i({ref:t},c),{},{components:r})):n.createElement(O,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83842:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(83117),a=(r(67294),r(3905));const o={title:"OSWeb/OpenSesame and JATOS",slug:"/OSWeb-and-JATOS.html",sidebar_position:6},i=void 0,s={unversionedId:"Write_your_study/OSWeb-and-JATOS",id:"version-3.6.1/Write_your_study/OSWeb-and-JATOS",title:"OSWeb/OpenSesame and JATOS",description:"OSWeb lets you run an OpenSesame experiment on a browser. OpenSesame is a pretty neat program to create experiments for psychology, neuroscience, and experimental economics. You can get very far with drag-and-drop, and there's the chance to add code snippets if you need more flexibility.",source:"@site/versioned_docs/version-3.6.1/Write_your_study/OSWeb-and-JATOS.md",sourceDirName:"Write_your_study",slug:"/OSWeb-and-JATOS.html",permalink:"/3.6.x/OSWeb-and-JATOS.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.6.1/Write_your_study/OSWeb-and-JATOS.md",tags:[],version:"3.6.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1713866224,formattedLastUpdatedAt:"Apr 23, 2024",sidebarPosition:6,frontMatter:{title:"OSWeb/OpenSesame and JATOS",slug:"/OSWeb-and-JATOS.html",sidebar_position:6},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"lab.js and JATOS",permalink:"/3.6.x/labjs-and-JATOS.html"},next:{title:"Submit and upload data to the server",permalink:"/3.6.x/Submit-and-upload-data-to-the-server.html"}},p={},l=[],c={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{float:"right",width:"300px"}},(0,a.kt)("p",null,(0,a.kt)("img",{src:r(35226).Z,width:"712",height:"800"}))),(0,a.kt)("p",null,"OSWeb lets you run an ",(0,a.kt)("a",{parentName:"p",href:"https://osdoc.cogsci.nl"},"OpenSesame")," experiment on a browser. OpenSesame is a pretty neat program to create experiments for psychology, neuroscience, and experimental economics. You can get very far with drag-and-drop, and there's the chance to add code snippets if you need more flexibility. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://osdoc.cogsci.nl/manual/osweb/"},"OSWeb's documentation")," is far better than ours could ever be. So, here, we just point out that combining OSWeb with JATOS is pretty easy and straightforward: just export the experiment in OSWeb and import it in JATOS."),(0,a.kt)("p",null,"If you want to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.prolific.co/"},"Prolific")," to recruit participants for your OSWeb experiment running in JATOS then you can put the return link in the 'End Redirect URL' field of your Study Properties (in JATOS GUI, since JATOS v3.5.1)."),(0,a.kt)("p",null,"If you'd like to know more"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sebastiaan Mathot's ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0448NeoUaqU"},"tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLSadj_kFpja_IOBQZrKf56RpjzUl3W6SP"},"Workshop about OpenSesame, Python, and JATOS")," (12 lessons)")))}u.isMDXComponent=!0},35226:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/OSweb_logo-ea39b1818d2fbbdda33d76bc88125e50.png"}}]);