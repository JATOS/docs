"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4783],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},811:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var n=a(3117),o=(a(7294),a(3905));const r={title:"Updating a JATOS server installation",slug:"/Updating-a-JATOS-server-installation.html",sidebar_position:10},i=void 0,l={unversionedId:"Serving_the_Internet/Updating-a-JATOS-server-installation",id:"version-3.6.1/Serving_the_Internet/Updating-a-JATOS-server-installation",title:"Updating a JATOS server installation",description:"Updating the server instance is equivalent to doing it locally, but make sure that you know what you're doing; especially if you have paired JATOS with a MySQL database.",source:"@site/versioned_docs/version-3.6.1/Serving_the_Internet/Updating-a-JATOS-server-installation.md",sourceDirName:"Serving_the_Internet",slug:"/Updating-a-JATOS-server-installation.html",permalink:"/3.6.x/Updating-a-JATOS-server-installation.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.6.1/Serving_the_Internet/Updating-a-JATOS-server-installation.md",tags:[],version:"3.6.1",lastUpdatedBy:"kristian",lastUpdatedAt:1692650189,formattedLastUpdatedAt:"Aug 21, 2023",sidebarPosition:10,frontMatter:{title:"Updating a JATOS server installation",slug:"/Updating-a-JATOS-server-installation.html",sidebar_position:10},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"JATOS with Apache",permalink:"/3.6.x/JATOS-with-Apache.html"},next:{title:"Customize JATOS' Home Page",permalink:"/3.6.x/Customize-JATOS-Home-Page.html"}},s={},u=[{value:"Automatic Update (recommended)",id:"automatic-update-recommended",level:2},{value:"Manual Update (if automatic doesn&#39;t work for you)",id:"manual-update-if-automatic-doesnt-work-for-you",level:2},{value:"First option: quick and dirty (discarding result data)",id:"first-option-quick-and-dirty-discarding-result-data",level:3},{value:"Second option: keeping everything",id:"second-option-keeping-everything",level:3}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Updating the server instance is equivalent to doing it ",(0,o.kt)("a",{parentName:"p",href:"Update-JATOS.html"},"locally"),", but make sure that you know what you're doing; especially if you have paired JATOS with a MySQL database."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Backup your JATOS")),(0,o.kt)("p",null,"The easiest way to backup is to do a snapshot of the whole server. If you use an external MySQL database with your JATOS, make a backup e.g. using ",(0,o.kt)("inlineCode",{parentName:"p"},"mysqldump -u yourUserName -p yourDatabaseName > yourDatabaseName.out")," - or a snapshot of the whole database server."),(0,o.kt)("p",null,"As with ",(0,o.kt)("a",{parentName:"p",href:"Update-JATOS.html"},"updating of a local JATOS installation")," you can do it automatically or manually."),(0,o.kt)("p",null,"After updating you can check the new JATOS installation with the test page: go to ",(0,o.kt)("em",{parentName:"p"},"Administration")," \u21d2 ",(0,o.kt)("em",{parentName:"p"},"Tests")," and check that all tests are 'OK' (in older version the test page is under '/jatos/test', e.g. for a local installation: ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9000/jatos/test"},"localhost:9000/jatos/test"),")."),(0,o.kt)("h2",{id:"automatic-update-recommended"},"Automatic Update (recommended)"),(0,o.kt)("p",null,"This is the easiest way but is only available since JATOS 3.3.5. Then it's ",(0,o.kt)("a",{parentName:"p",href:"Update-JATOS.html#automatic-updates"},"the same as in a local installation"),"."),(0,o.kt)("p",null,"If you did a manual backup before you don't need to do the backup offered during the update process."),(0,o.kt)("h2",{id:"manual-update-if-automatic-doesnt-work-for-you"},"Manual Update (if automatic doesn't work for you)"),(0,o.kt)("p",null,"You have two ways to update manually: 1) Keep your studies but discard all your result data and batches. 2) Keep everything, including your studies and result data (might not always be possible)."),(0,o.kt)("h3",{id:"first-option-quick-and-dirty-discarding-result-data"},"First option: quick and dirty (discarding result data)"),(0,o.kt)("p",null,"You can just follow the ",(0,o.kt)("a",{parentName:"p",href:"Update-JATOS.html#first-easy-way-discarding-your-result-data"},"update instructions for the local installation"),". If you use a MySQL database don't forget to ",(0,o.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html"},"configure it with a clean and new one")," (not the one from your old JATOS). Do not use the new JATOS with the old MySQL database unless you choose to keep your data, as described below."),(0,o.kt)("h3",{id:"second-option-keeping-everything"},"Second option: keeping everything"),(0,o.kt)("p",null,"This means that we have to configure the MySQL database or copy the embedded H2 database files."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the old JATOS using ",(0,o.kt)("inlineCode",{parentName:"li"},"./loader.sh stop")," "),(0,o.kt)("li",{parentName:"ol"},"Copy the new JATOS version to your server, e.g. copy it into the same folder where your old JATOS is located. Don't yet remove the old JATOS instance. "),(0,o.kt)("li",{parentName:"ol"},"Unzip the new JATOS (",(0,o.kt)("inlineCode",{parentName:"li"},"unzip jatos-x.x.x-beta.zip"),")"),(0,o.kt)("li",{parentName:"ol"},"From the old JATOS installation copy some folders to the new one",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Your assets root folder to the new JATOS installation (Note: By default your assets root folder is called ",(0,o.kt)("inlineCode",{parentName:"li"},"study_assets_root")," and lays in the JATOS folder but you might have ",(0,o.kt)("a",{parentName:"li",href:"Configure-JATOS-on-a-Server.html"},"changed this"),"."),(0,o.kt)("li",{parentName:"ol"},"If exists, your folder for uploaded result files (Note: By default this folder is called ",(0,o.kt)("inlineCode",{parentName:"li"},"result_uploads")," and lays in the JATOS folder but you might have ",(0,o.kt)("a",{parentName:"li",href:"Configure-JATOS-on-a-Server.html"},"changed this"),". This folder exists since version 3.5.1."),(0,o.kt)("li",{parentName:"ol"},"If exists, ",(0,o.kt)("inlineCode",{parentName:"li"},"study_logs")))),(0,o.kt)("li",{parentName:"ol"},"Database",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"H2 - If you are using the default H2 database: From your the folder of your old JATOS installation copy the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"database")," to the new JATOS installation. ",(0,o.kt)("a",{parentName:"li",href:"Troubleshooting.html#database-is-corrupted"},"Remember to stop JATOS before copying the folder"),"."),(0,o.kt)("li",{parentName:"ul"},"MySQL - For MySQL you don't have to change anything on the database side."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"Configure-JATOS-on-a-Server.html"},"Configure the new JATOS like the old one")," - usually it's enough to copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"production.conf")," from the old ",(0,o.kt)("inlineCode",{parentName:"li"},"conf")," folder into the new one"),(0,o.kt)("li",{parentName:"ol"},"Start the new JATOS using ",(0,o.kt)("inlineCode",{parentName:"li"},"./loader.sh start")),(0,o.kt)("li",{parentName:"ol"},"Open JATOS' test page (",(0,o.kt)("em",{parentName:"li"},"Administration")," \u21d2 ",(0,o.kt)("em",{parentName:"li"},"Tests"),") and check that everything is 'OK'")))}p.isMDXComponent=!0}}]);