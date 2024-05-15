"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(83117),o=(a(67294),a(3905));const l={title:"Installation",slug:"/Installation.html",sidebar_position:3},r=void 0,i={unversionedId:"Overview/Installation",id:"version-3.7.1/Overview/Installation",title:"Installation",description:"Easy installation on your local computer",source:"@site/versioned_docs/version-3.7.1/Overview/Installation.md",sourceDirName:"Overview",slug:"/Installation.html",permalink:"/3.7.x/Installation.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.7.1/Overview/Installation.md",tags:[],version:"3.7.1",lastUpdatedBy:"kristian",lastUpdatedAt:1715770465,formattedLastUpdatedAt:"May 15, 2024",sidebarPosition:3,frontMatter:{title:"Installation",slug:"/Installation.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Contact us",permalink:"/3.7.x/Contact-us.html"},next:{title:"Get started",permalink:"/3.7.x/Get-started.html"}},s={},p=[{value:"Easy installation on your local computer",id:"easy-installation-on-your-local-computer",level:3},{value:"Installation Windows",id:"installation-windows",level:3},{value:"Installation MacOS and Linux",id:"installation-macos-and-linux",level:3},{value:"How to go on from here",id:"how-to-go-on-from-here",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"easy-installation-on-your-local-computer"},"Easy installation on your local computer"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JATOS runs on MacOS, Windows and Linux")),(0,o.kt)("p",null,"A local installation is straightforward."),(0,o.kt)("p",null,"Usually you first develop your study with JATOS on a local computer. Then in a second step you bring it to a server installation of JATOS."),(0,o.kt)("p",null,"With a local installation only you have access to JATOS - with a ",(0,o.kt)("a",{parentName:"p",href:"Bring-your-JATOS-online.html"},"server installation")," others can run your study via the internet too. This is especially true if you want to publish your study on Mechanical Turk."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For convenience JATOS is available as a bundle with Java.")),(0,o.kt)("p",null,"To run JATOS, you need Java 11 installed on your computer (to be precise, you need a Java Runtime Environment, aka JRE). Chances are, you already have Java installed. To check whether Java is installed on your system, type ",(0,o.kt)("inlineCode",{parentName:"p"},"java -version")," in your terminal (MacOS / Linux) or command window (Windows).\nIf you don't have Java installed, you can either download and install it (e.g. from ",(0,o.kt)("a",{parentName:"p",href:"https://adoptium.net/"},"adoptium.net"),") or download and install JATOS bundled with Java for your operating system. "),(0,o.kt)("h3",{id:"installation-windows"},"Installation Windows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/JATOS/JATOS/releases/latest"},"latest JATOS release"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Without Java: ",(0,o.kt)("em",{parentName:"li"},"jatos.zip")),(0,o.kt)("li",{parentName:"ul"},"Bundled with Java: ",(0,o.kt)("em",{parentName:"li"},"jatos_win_java.zip")))),(0,o.kt)("li",{parentName:"ol"},"Unzip the downloaded file. You can place the unzipped folder pretty much anywhere, ",(0,o.kt)("strong",{parentName:"li"},"except")," in a folder that synchs across devices, like Dropbox or Google Drive. ",(0,o.kt)("a",{parentName:"li",href:"Troubleshooting.html#database-is-corrupted.html"},"Find out")," more about why not."),(0,o.kt)("li",{parentName:"ol"},"In the File Explorer move to the unzipped JATOS folder and double-click on ",(0,o.kt)("inlineCode",{parentName:"li"},"loader.bat"),". (Or ",(0,o.kt)("inlineCode",{parentName:"li"},"loader")," alone, if your filename extensions are hidden). A command window will open and run your local JATOS installation. Simply close this window if you want to stop JATOS."),(0,o.kt)("li",{parentName:"ol"},"All set! Now go to the browser of your choice and open ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9000"},"localhost:9000"),". You should see the login screen (wait a moment and reload the page if you don't). Login with username 'admin' and password 'admin'.")),(0,o.kt)("h3",{id:"installation-macos-and-linux"},"Installation MacOS and Linux"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/JATOS/JATOS/releases/latest"},"latest JATOS release"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Without Java: ",(0,o.kt)("em",{parentName:"li"},"jatos.zip")),(0,o.kt)("li",{parentName:"ul"},"For MacOS bundled with Java: ",(0,o.kt)("em",{parentName:"li"},"jatos_mac_java.zip")),(0,o.kt)("li",{parentName:"ul"},"For Linux bundled with Java: ",(0,o.kt)("em",{parentName:"li"},"jatos_linux_java.zip")))),(0,o.kt)("li",{parentName:"ol"},"Unzip the downloaded file. You can place the unzipped folder pretty much anywhere, ",(0,o.kt)("strong",{parentName:"li"},"except")," in a folder that synchs across devices, like Dropbox or Google Drive. ",(0,o.kt)("a",{parentName:"li",href:"Troubleshooting.html#database-is-corrupted.html"},"Find out")," more about why not."),(0,o.kt)("li",{parentName:"ol"},"In your terminal window, ",(0,o.kt)("inlineCode",{parentName:"li"},"cd")," into the unzipped JATOS folder"),(0,o.kt)("li",{parentName:"ol"},"Run the loader shell script with the command ",(0,o.kt)("inlineCode",{parentName:"li"},"./loader.sh start")," (You might have to change the file's permissions with the command ",(0,o.kt)("inlineCode",{parentName:"li"},"chmod u+x loader.sh")," to make it executable). Ignore pop-ups like '",(0,o.kt)("em",{parentName:"li"},"To use the java command-line tool you need to install a JDK"),"' - just press 'OK'."),(0,o.kt)("li",{parentName:"ol"},"All set! Now go to the browser of your choice and open ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:9000"},"localhost:9000"),". You should see the login screen (wait a moment and reload the page if you don't). Login with username 'admin' and password 'admin'.")),(0,o.kt)("p",null,"Your local JATOS installation will run in the background. If you want to stop it, just type ",(0,o.kt)("inlineCode",{parentName:"p"},"./loader.sh stop")," in your terminal window."),(0,o.kt)("h3",{id:"how-to-go-on-from-here"},"How to go on from here"),(0,o.kt)("p",null,"The easiest way to start with JATOS is to download and import one of the ",(0,o.kt)("a",{parentName:"p",href:"/Example-Studies"},"example studies")," and ",(0,o.kt)("a",{parentName:"p",href:"Get-started.html"},"play around with it"),"."))}d.isMDXComponent=!0}}]);