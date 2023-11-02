"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),h=o,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(83117),o=(r(67294),r(3905));const a={title:"Expose your local JATOS",slug:"/Expose-your-local-JATOS.html",sidebar_position:2},l=void 0,i={unversionedId:"Serving_the_Internet/Expose-your-local-JATOS",id:"version-3.7.1/Serving_the_Internet/Expose-your-local-JATOS",title:"Expose your local JATOS",description:"Introduction",source:"@site/versioned_docs/version-3.7.1/Serving_the_Internet/Expose-your-local-JATOS.md",sourceDirName:"Serving_the_Internet",slug:"/Expose-your-local-JATOS.html",permalink:"/3.7.x/Expose-your-local-JATOS.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.7.1/Serving_the_Internet/Expose-your-local-JATOS.md",tags:[],version:"3.7.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1698934216,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:2,frontMatter:{title:"Expose your local JATOS",slug:"/Expose-your-local-JATOS.html",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bring your JATOS online",permalink:"/3.7.x/Bring-your-JATOS-online.html"},next:{title:"JATOS on DigitalOcean",permalink:"/3.7.x/JATOS-on-DigitalOcean.html"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"ngrok",id:"ngrok",level:2},{value:"localhost.run",id:"localhostrun",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This page is about how to expose your locally installed JATOS to the Internet. That means using your personal computer as a server. If you want to know a bit more about the background, I recommend reading ",(0,o.kt)("a",{parentName:"p",href:"https://www.chenhuijing.com/blog/tunnelling-services-for-exposing-localhost-to-the-web"},"Tunnelling services for exposing localhost to the web"),". There are several tunneling services and some of those are free or have at least a free offer. Here we concentrate on ",(0,o.kt)("em",{parentName:"p"},"ngrok")," and ",(0,o.kt)("em",{parentName:"p"},"localhost.run"),". Both are working fine. Just pick one. If you have ",(0,o.kt)("strong",{parentName:"p"},"Windows")," and don't know SSH, ",(0,o.kt)("em",{parentName:"p"},"ngrok")," will suit you best since it has an installer."),(0,o.kt)("p",null,"But first some general advice:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This way to bring JATOS online is the easiest to use - but also the ",(0,o.kt)("strong",{parentName:"li"},"least reliable")," one. Your local computer is prone to accidents (e.g. unplugged power cable, interrupted Internet). If you need a more dependable JATOS look at ",(0,o.kt)("a",{parentName:"li",href:"Bring-your-JATOS-online.html"},"Bring your JATOS online"),"."),(0,o.kt)("li",{parentName:"ul"},"You have to ",(0,o.kt)("strong",{parentName:"li"},"leave your computer running")," you want your participants to access your JATOS with your study. Potentially you can use your computer in the mean time, but be aware that everything might interfere with JATOS, e.g. a crashed OS stops JATOS too. Better let your computer run in peace for the duration of your study."),(0,o.kt)("li",{parentName:"ul"},"Find more reliable ",(0,o.kt)("a",{parentName:"li",href:"Bring-your-JATOS-online.html"},"ways to bring your JATOS online"))),(0,o.kt)("h2",{id:"ngrok"},"ngrok"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download & setup ngrok: ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"https://ngrok.com/download"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"I recommend creating an account with ngrok. It's free and ngrok gives you better connection compared to without.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your local JATOS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your terminal move to the directory where you installed ngrok and start it with:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./ngrok http 9000\n")),(0,o.kt)("p",{parentName:"li"},"The output should look similar to this:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"ngrok screenshot",src:r(70893).Z,width:"777",height:"294"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy & Paste the URL with ",(0,o.kt)("em",{parentName:"p"},"https")," to your browser and check that JATOS is running properly with JATOS' build-in ",(0,o.kt)("a",{parentName:"p",href:"/Troubleshooting.html#jatos-test-page"},"tests"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"That's all. Now you can ",(0,o.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html"},"create study links")," and send them to your participents. Remember to use JATOS under the ",(0,o.kt)("em",{parentName:"p"},"ngrog.io")," address when you create study links (and not your localhost one)."))),(0,o.kt)("p",null,"More information on ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"https://ngrok.com"),"."),(0,o.kt)("h2",{id:"localhostrun"},"localhost.run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start your local JATOS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Execute in your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -R 80:localhost:9000 ssh.localhost.run\n")),(0,o.kt)("p",{parentName:"li"},"E.g. the output could look like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh -R 80:localhost:9000 ssh.localhost.run\nConnect to http://kristian-44bs.localhost.run or https://kristian-44bs.localhost.run\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy & Paste the URL with ",(0,o.kt)("em",{parentName:"p"},"https")," to your browser and check that JATOS is running properly with JATOS' build-in ",(0,o.kt)("a",{parentName:"p",href:"/Troubleshooting.html#jatos-test-page"},"tests"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"That's all. Now you can ",(0,o.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html"},"create study links")," and send them to your participents. Remember to use JATOS under the ",(0,o.kt)("em",{parentName:"p"},"localhost.run")," address when you create study links (and not your localhost one)."))),(0,o.kt)("p",null,"More information on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost.run/"},"http://localhost.run/"),"."))}c.isMDXComponent=!0},70893:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/screenshot_ngrok-3c5e220b051d99d286d24f1d9113e503.png"}}]);