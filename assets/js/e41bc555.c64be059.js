"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7504],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(o),d=a,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return o?n.createElement(h,i(i({ref:t},s),{},{components:o})):n.createElement(h,i({ref:t},s))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<r;m++)i[m]=o[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},51511:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=o(83117),a=(o(67294),o(3905));const r={title:"Customize JATOS' Home Page",slug:"/Customize-JATOS-Home-Page.html",sidebar_position:5},i=void 0,l={unversionedId:"Manage_your_JATOS/Customize-JATOS-Home-Page",id:"version-3.8.1/Manage_your_JATOS/Customize-JATOS-Home-Page",title:"Customize JATOS' Home Page",description:"Link to Terms of Use",source:"@site/versioned_docs/version-3.8.1/Manage_your_JATOS/Customize-JATOS-Home-Page.md",sourceDirName:"Manage_your_JATOS",slug:"/Customize-JATOS-Home-Page.html",permalink:"/Customize-JATOS-Home-Page.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Manage_your_JATOS/Customize-JATOS-Home-Page.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1715949639,formattedLastUpdatedAt:"May 17, 2024",sidebarPosition:5,frontMatter:{title:"Customize JATOS' Home Page",slug:"/Customize-JATOS-Home-Page.html",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/Troubleshooting.html"},next:{title:"Example Group Studies",permalink:"/Example-Group-Studies.html"}},p={},m=[{value:"Link to Terms of Use",id:"link-to-terms-of-use",level:2},{value:"Welcome Block",id:"welcome-block",level:2},{value:"With GitHub",id:"with-github",level:3}],s={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"link-to-terms-of-use"},"Link to Terms of Use"),(0,a.kt)("p",null,"You can configure JATOS to show a link to your 'Terms of Use' that will be shown in a info box on the home page. "),(0,a.kt)("p",null,"In your JATOS installation folder edit ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/jatos.conf")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," in version < 3.8.3) and add the URL under ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.termsOfUseUrl"),". If left empty the info box is not shown."),(0,a.kt)("h2",{id:"welcome-block"},"Welcome Block"),(0,a.kt)("p",null,"You can customize JATOS' home page to e.g."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"show your university's logo,"),(0,a.kt)("li",{parentName:"ul"},"add some introduction text, or"),(0,a.kt)("li",{parentName:"ul"},"announce an upcoming event. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"template customized home page",src:o(7818).Z,width:"1919",height:"719"})),(0,a.kt)("p",null,"This is done by configuring JATOS with an URL that points to some static HTML that describes your individual welcome block. This HTML block will then be loaded and displayed in every home page."),(0,a.kt)("p",null,"Have a look at this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JATOS/customized-home-page-template/blob/main/foobar-university-welcome.html"},"example welcome block"),"."),(0,a.kt)("p",null,"You can update your welcome block at any time to add new information (e.g. anouncement of JATOS maintance work). But since the HMTL is cached it can take ",(0,a.kt)("strong",{parentName:"p"},"up to an hour to be visible to your users"),". If you want to see it right away for testing you can disable caching in your browser."),(0,a.kt)("p",null,"This welcome block can be fetched from ",(0,a.kt)("strong",{parentName:"p"},"any HTTP server")," that is able to serve HTML. One way is to do it via GitHub."),(0,a.kt)("h3",{id:"with-github"},"With GitHub"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JATOS/customized-home-page-template"},"https://github.com/JATOS/customized-home-page-template"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Use this template' button to create a copy of this repository")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html")," to your needs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add necessary files (e.g. logo images) to your repository")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure JATOS: In your JATOS installation folder edit ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/jatos.conf")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," in version < 3.8.3) - add ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.brandingUrl"),":"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Easy but with rate limit (from GitHub)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'jatos.brandingUrl = "https://raw.githubusercontent.com/my-user/my-repo/main/foobar-university-welcome.html"\n')),(0,a.kt)("p",{parentName:"li"},"Remember to change ",(0,a.kt)("inlineCode",{parentName:"p"},"my-user"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"my-repo"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Better use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site"},"GitHub pages")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'jatos.brandingUrl = "https://my-user.github.io/my-repo/foobar-university-welcome.html"\n')),(0,a.kt)("p",{parentName:"li"},"Remember to change ",(0,a.kt)("inlineCode",{parentName:"p"},"my-user"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"my-repo"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart JATOS"))))}u.isMDXComponent=!0},7818:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/screenshot-branding-6b6e021db43da7b742fbbb7d4775ea52.png"}}]);