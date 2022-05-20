"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9480],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8443:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),l=["components"],i={title:"Installation",slug:"/Installation.html",sidebar_position:3},s=void 0,u={unversionedId:"Overview/Installation",id:"version-3.6.1/Overview/Installation",title:"Installation",description:"Easy installation on your local computer - JATOS runs on MacOS, Windows and Linux",source:"@site/versioned_docs/version-3.6.1/Overview/Installation.md",sourceDirName:"Overview",slug:"/Installation.html",permalink:"/3.6.1/Installation.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Overview/Installation.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1653036660,formattedLastUpdatedAt:"5/20/2022",sidebarPosition:3,frontMatter:{title:"Installation",slug:"/Installation.html",sidebar_position:3},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Contact us",permalink:"/3.6.1/Contact-us.html"},next:{title:"Get started",permalink:"/3.6.1/Get-started.html"}},d=[{value:"Installation MS Windows",id:"installation-ms-windows",children:[],level:2},{value:"Installation MacOS X and Linux",id:"installation-macos-x-and-linux",children:[],level:2},{value:"How to go on from here",id:"how-to-go-on-from-here",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Easy installation on your local computer - JATOS runs on MacOS, Windows and Linux")),(0,r.kt)("p",null,"Usually you first develop your study with JATOS on a local computer. Then in a second step you bring it to a server installation of JATOS."),(0,r.kt)("p",null,"With a local installation only you have access to JATOS - with a ",(0,r.kt)("a",{parentName:"p",href:"JATOS-on-a-server.html"},"server installation")," others can run your study via the internet too. This is especially true if you want to publish your study on Mechanical Turk."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For convenience JATOS is available in a variant bundled with Java.")),(0,r.kt)("p",null,"To run JATOS, you need Java installed on your computer (to be precise, you need a Java Runtime Environment, aka JRE). Chances are, you already have Java installed. To check whether Java is installed on your system, type ",(0,r.kt)("inlineCode",{parentName:"p"},"java -version")," in your terminal (MacOS X / Linux) or command window (MS Windows).\nIf you don't have Java installed, you can either ",(0,r.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"download and install it directly")," or download and install JATOS bundled with Java, according to your operating system. "),(0,r.kt)("h2",{id:"installation-ms-windows"},"Installation MS Windows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JATOS/JATOS/releases/latest"},"latest JATOS release")," (exchange 'xxx' with the current version)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without Java: ",(0,r.kt)("em",{parentName:"li"},"jatos-xxx.zip")),(0,r.kt)("li",{parentName:"ul"},"Bundled with Java: ",(0,r.kt)("em",{parentName:"li"},"jatos-xxx_win_java.zip"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unzip the downloaded file. You can place the unzipped folder pretty much anywhere, ",(0,r.kt)("strong",{parentName:"li"},"except")," in a folder that synchs across devices, like Dropbox or Google Drive. ",(0,r.kt)("a",{parentName:"li",href:"Troubleshooting.html#database-is-corrupted.html"},"Find out")," more about why not."),(0,r.kt)("li",{parentName:"ol"},"In the File Explorer move to the unzipped JATOS folder and double-click on ",(0,r.kt)("inlineCode",{parentName:"li"},"loader.bat"),". (Or ",(0,r.kt)("inlineCode",{parentName:"li"},"loader")," alone, if your filename extensions are hidden). A command window will open and run your local JATOS installation. Simply close this window if you want to stop JATOS."),(0,r.kt)("li",{parentName:"ol"},"All set! Now go to the browser of your choice and open ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:9000/jatos/login"},"http://localhost:9000/jatos/login"),". You should see the login screen (wait a moment and reload the page if you don't). Login with username 'admin' and password 'admin'.")),(0,r.kt)("h2",{id:"installation-macos-x-and-linux"},"Installation MacOS X and Linux"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JATOS/JATOS/releases/latest"},"latest JATOS release")," (exchange 'xxx' with the current version)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Without Java: ",(0,r.kt)("em",{parentName:"li"},"jatos-xxx.zip")),(0,r.kt)("li",{parentName:"ul"},"For MacOS bundled with Java: ",(0,r.kt)("em",{parentName:"li"},"jatos-xxx_mac_java.zip")),(0,r.kt)("li",{parentName:"ul"},"For Linux bundled with Java: ",(0,r.kt)("em",{parentName:"li"},"jatos-xxx_linux_java.zip")))),(0,r.kt)("li",{parentName:"ol"},"Unzip the downloaded file. You can place the unzipped folder pretty much anywhere, ",(0,r.kt)("strong",{parentName:"li"},"except")," in a folder that synchs across devices, like Dropbox or Google Drive. ",(0,r.kt)("a",{parentName:"li",href:"Troubleshooting.html#database-is-corrupted.html"},"Find out")," more about why not."),(0,r.kt)("li",{parentName:"ol"},"In your terminal window, cd into the unzipped JATOS folder"),(0,r.kt)("li",{parentName:"ol"},"Run the loader shell script with the command ",(0,r.kt)("inlineCode",{parentName:"li"},"./loader.sh start")," (You might have to change the file's permissions with the command ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod u+x loader.sh")," to make it executable). Ignore pop-ups like 'To use the java command-line tool you need to install a JDK' - just press 'OK'."),(0,r.kt)("li",{parentName:"ol"},"All set! Now go to the browser of your choice and open ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:9000/jatos/login"},"http://localhost:9000/jatos/login"),". You should see the login screen (wait a moment and reload the page if you don't). Login with username 'admin' and password 'admin'.")),(0,r.kt)("p",null,"Your local JATOS installation will run in the background. If you want to stop it, just type ",(0,r.kt)("inlineCode",{parentName:"p"},"./loader.sh stop")," in your terminal window."),(0,r.kt)("h2",{id:"how-to-go-on-from-here"},"How to go on from here"),(0,r.kt)("p",null,"The easiest way to start with JATOS is to download and import one of the ",(0,r.kt)("a",{parentName:"p",href:"Example-Studies.html"},"example studies")," and ",(0,r.kt)("a",{parentName:"p",href:"Get-started.html"},"play around with it"),"."))}c.isMDXComponent=!0}}]);