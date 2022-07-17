"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9011],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),p=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(m,".").concat(d)]||c[d]||u[d]||a;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],l={title:"Customize JATOS' Home Page",slug:"/Customize-JATOS-Home-Page.html",sidebar_position:12},m=void 0,p={unversionedId:"Serving_the_Internet/Customize-JATOS-Home-Page",id:"Serving_the_Internet/Customize-JATOS-Home-Page",title:"Customize JATOS' Home Page",description:"Link to Terms of Use",source:"@site/docs/Serving_the_Internet/Customize-JATOS-Home-Page.md",sourceDirName:"Serving_the_Internet",slug:"/Customize-JATOS-Home-Page.html",permalink:"/next/Customize-JATOS-Home-Page.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Serving_the_Internet/Customize-JATOS-Home-Page.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1658087096,formattedLastUpdatedAt:"7/17/2022",sidebarPosition:12,frontMatter:{title:"Customize JATOS' Home Page",slug:"/Customize-JATOS-Home-Page.html",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Updating a JATOS server installation",permalink:"/next/Updating-a-JATOS-server-installation.html"},next:{title:"jatos.js Reference",permalink:"/next/jatos.js-Reference.html"}},s=[{value:"Link to Terms of Use",id:"link-to-terms-of-use",children:[],level:2},{value:"Welcome Block",id:"welcome-block",children:[{value:"With GitHub",id:"with-github",children:[],level:3}],level:2}],u={toc:s};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"link-to-terms-of-use"},"Link to Terms of Use"),(0,a.kt)("p",null,"You can configure JATOS to show a link to your 'Terms of Use' that will be shown in a info box on the home page. "),(0,a.kt)("p",null,"In your JATOS installation folder edit ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," and add the URL under ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.termsOfUseUrl"),". If left empty the info box is not shown."),(0,a.kt)("h2",{id:"welcome-block"},"Welcome Block"),(0,a.kt)("p",null,"You can customize JATOS' home page to e.g."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"show your university's logo,"),(0,a.kt)("li",{parentName:"ul"},"add some introduction text, or"),(0,a.kt)("li",{parentName:"ul"},"announce an upcoming event. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"template customized home page",src:n(9035).Z})),(0,a.kt)("p",null,"This is done by configuring JATOS with an URL that points to some static HTML that describes your individual welcome block. This HTML block will then be loaded and displayed in every home page."),(0,a.kt)("p",null,"Have a look at this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JATOS/customized-home-page-template/blob/main/foobar-university-welcome.html"},"example welcome block"),"."),(0,a.kt)("p",null,"You can update your welcome block at any time to add new information (e.g. anouncement of JATOS maintance work). But since the HMTL is cached it can take ",(0,a.kt)("strong",{parentName:"p"},"up to an hour to be visible to your users"),". If you want to see it right away for testing you can disable caching in your browser."),(0,a.kt)("p",null,"This welcome block can be fetched from ",(0,a.kt)("strong",{parentName:"p"},"any HTTP server")," that is able to serve HTML. One way is to do it via GitHub."),(0,a.kt)("h3",{id:"with-github"},"With GitHub"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JATOS/customized-home-page-template"},"https://github.com/JATOS/customized-home-page-template"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click 'Use this template' button to create a copy of this repository")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Change the content of ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html")," to your needs")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add necessary files (e.g. logo images) to your repository")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure JATOS: In your JATOS installation folder edit ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," - add ",(0,a.kt)("inlineCode",{parentName:"p"},"jatos.brandingUrl"),":"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Easy but with rate limit (from GitHub)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'jatos.brandingUrl = "https://raw.githubusercontent.com/my-user/my-repo/main/foobar-university-welcome.html"\n')),(0,a.kt)("p",{parentName:"li"},"Remember to change ",(0,a.kt)("inlineCode",{parentName:"p"},"my-user"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"my-repo"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Better use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site"},"GitHub pages")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'jatos.brandingUrl = "https://my-user.github.io/my-repo/foobar-university-welcome.html"\n')),(0,a.kt)("p",{parentName:"li"},"Remember to change ",(0,a.kt)("inlineCode",{parentName:"p"},"my-user"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"my-repo"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart JATOS"))))}c.isMDXComponent=!0},9035:function(e,t,n){t.Z=n.p+"assets/images/screenshot-branding-6b6e021db43da7b742fbbb7d4775ea52.png"}}]);