"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9011],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),p=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var o=n(3117),r=(n(7294),n(3905));const a={title:"Customize JATOS' Home Page",slug:"/Customize-JATOS-Home-Page.html",sidebar_position:12},i=void 0,l={unversionedId:"Serving_the_Internet/Customize-JATOS-Home-Page",id:"Serving_the_Internet/Customize-JATOS-Home-Page",title:"Customize JATOS' Home Page",description:"Link to Terms of Use",source:"@site/docs/Serving_the_Internet/Customize-JATOS-Home-Page.md",sourceDirName:"Serving_the_Internet",slug:"/Customize-JATOS-Home-Page.html",permalink:"/next/Customize-JATOS-Home-Page.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Serving_the_Internet/Customize-JATOS-Home-Page.md",tags:[],version:"current",lastUpdatedBy:"kristian",lastUpdatedAt:1683230795,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:12,frontMatter:{title:"Customize JATOS' Home Page",slug:"/Customize-JATOS-Home-Page.html",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Updating a JATOS server installation",permalink:"/next/Updating-a-JATOS-server-installation.html"},next:{title:"jatos.js Reference",permalink:"/next/jatos.js-Reference.html"}},m={},p=[{value:"Link to Terms of Use",id:"link-to-terms-of-use",level:2},{value:"Welcome Block",id:"welcome-block",level:2},{value:"With GitHub",id:"with-github",level:3}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"link-to-terms-of-use"},"Link to Terms of Use"),(0,r.kt)("p",null,"You can configure JATOS to show a link to your 'Terms of Use' that will be shown in a info box on the home page. "),(0,r.kt)("p",null,"In your JATOS installation folder edit ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," and add the URL under ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.termsOfUseUrl"),". If left empty the info box is not shown."),(0,r.kt)("h2",{id:"welcome-block"},"Welcome Block"),(0,r.kt)("p",null,"You can customize JATOS' home page to e.g."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"show your university's logo,"),(0,r.kt)("li",{parentName:"ul"},"add some introduction text, or"),(0,r.kt)("li",{parentName:"ul"},"announce an upcoming event. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template customized home page",src:n(7818).Z,width:"1919",height:"719"})),(0,r.kt)("p",null,"This is done by configuring JATOS with an URL that points to some static HTML that describes your individual welcome block. This HTML block will then be loaded and displayed in every home page."),(0,r.kt)("p",null,"Have a look at this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/customized-home-page-template/blob/main/foobar-university-welcome.html"},"example welcome block"),"."),(0,r.kt)("p",null,"You can update your welcome block at any time to add new information (e.g. anouncement of JATOS maintance work). But since the HMTL is cached it can take ",(0,r.kt)("strong",{parentName:"p"},"up to an hour to be visible to your users"),". If you want to see it right away for testing you can disable caching in your browser."),(0,r.kt)("p",null,"This welcome block can be fetched from ",(0,r.kt)("strong",{parentName:"p"},"any HTTP server")," that is able to serve HTML. One way is to do it via GitHub."),(0,r.kt)("h3",{id:"with-github"},"With GitHub"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/customized-home-page-template"},"https://github.com/JATOS/customized-home-page-template"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click 'Use this template' button to create a copy of this repository")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html")," to your needs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add necessary files (e.g. logo images) to your repository")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure JATOS: In your JATOS installation folder edit ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," - add ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.brandingUrl"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Easy but with rate limit (from GitHub)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'jatos.brandingUrl = "https://raw.githubusercontent.com/my-user/my-repo/main/foobar-university-welcome.html"\n')),(0,r.kt)("p",{parentName:"li"},"Remember to change ",(0,r.kt)("inlineCode",{parentName:"p"},"my-user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my-repo"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Better use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site"},"GitHub pages")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'jatos.brandingUrl = "https://my-user.github.io/my-repo/foobar-university-welcome.html"\n')),(0,r.kt)("p",{parentName:"li"},"Remember to change ",(0,r.kt)("inlineCode",{parentName:"p"},"my-user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"my-repo"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart JATOS"))))}u.isMDXComponent=!0},7818:function(e,t,n){t.Z=n.p+"assets/images/screenshot-branding-6b6e021db43da7b742fbbb7d4775ea52.png"}}]);