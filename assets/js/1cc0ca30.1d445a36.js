"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4271],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const a={title:"OSWeb/OpenSesame and JATOS",slug:"/OSWeb-and-JATOS.html",hide_table_of_contents:!0,sidebar_position:6},i=void 0,s={unversionedId:"Write_your_study/OSWeb-and-JATOS",id:"version-3.7.1/Write_your_study/OSWeb-and-JATOS",title:"OSWeb/OpenSesame and JATOS",description:"OSWeb lets you run an OpenSesame experiment on a browser. OpenSesame is a pretty neat program to create experiments for psychology, neuroscience, and experimental economics. You can get very far with drag-and-drop, and there's the chance to add code snippets if you need more flexibility.",source:"@site/versioned_docs/version-3.7.1/Write_your_study/OSWeb-and-JATOS.md",sourceDirName:"Write_your_study",slug:"/OSWeb-and-JATOS.html",permalink:"/OSWeb-and-JATOS.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.7.1/Write_your_study/OSWeb-and-JATOS.md",tags:[],version:"3.7.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1676627242,formattedLastUpdatedAt:"Feb 17, 2023",sidebarPosition:6,frontMatter:{title:"OSWeb/OpenSesame and JATOS",slug:"/OSWeb-and-JATOS.html",hide_table_of_contents:!0,sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"lab.js and JATOS",permalink:"/labjs-and-JATOS.html"},next:{title:"Change study's members",permalink:"/Change-studys-members.html"}},u={},c=[],p={toc:c};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{float:"right",width:"300px"}},(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5226).Z,width:"712",height:"800"}))),(0,o.kt)("p",null,"OSWeb lets you run an ",(0,o.kt)("a",{parentName:"p",href:"https://osdoc.cogsci.nl"},"OpenSesame")," experiment on a browser. OpenSesame is a pretty neat program to create experiments for psychology, neuroscience, and experimental economics. You can get very far with drag-and-drop, and there's the chance to add code snippets if you need more flexibility. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://osdoc.cogsci.nl/manual/osweb/workflow/"},"OSWeb's documentation")," is far better than ours could ever be. So, here, we just point out that combining OSWeb with JATOS is pretty easy and straightforward: just export the experiment in OSWeb and import it in JATOS."),(0,o.kt)("p",null,"If you want to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.prolific.co/"},"Prolific")," to recruit participants for your OSWeb experiment running in JATOS then you can put the return link in the 'End Redirect URL' field of your Study Properties (in JATOS GUI)."),(0,o.kt)("p",null,"If you'd like to know more"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sebastiaan Mathot's ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0448NeoUaqU"},"tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLSadj_kFpja_IOBQZrKf56RpjzUl3W6SP"},"Workshop about OpenSesame, Python, and JATOS")," (12 lessons)")))}l.isMDXComponent=!0},5226:function(e,t,n){t.Z=n.p+"assets/images/OSweb_logo-ea39b1818d2fbbdda33d76bc88125e50.png"}}]);