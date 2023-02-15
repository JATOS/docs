"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[6045],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6816:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=["components"],l={title:"Updating a JATOS server installation",slug:"/Updating-a-JATOS-server-installation.html",sidebar_position:11},s=void 0,d={unversionedId:"Serving_the_Internet/Updating-a-JATOS-server-installation",id:"version-3.7.1/Serving_the_Internet/Updating-a-JATOS-server-installation",title:"Updating a JATOS server installation",description:"Updating the server instance is equivalent to doing it locally, but make sure that you know what you're doing; especially if you have paired JATOS with a MySQL database.",source:"@site/versioned_docs/version-3.7.1/Serving_the_Internet/Updating-a-JATOS-server-installation.md",sourceDirName:"Serving_the_Internet",slug:"/Updating-a-JATOS-server-installation.html",permalink:"/Updating-a-JATOS-server-installation.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.7.1/Serving_the_Internet/Updating-a-JATOS-server-installation.md",tags:[],version:"3.7.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1676492998,formattedLastUpdatedAt:"2/15/2023",sidebarPosition:11,frontMatter:{title:"Updating a JATOS server installation",slug:"/Updating-a-JATOS-server-installation.html",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"JATOS with Apache",permalink:"/JATOS-with-Apache.html"},next:{title:"Customize JATOS' Home Page",permalink:"/Customize-JATOS-Home-Page.html"}},u=[{value:"Automatic Update (recommended)",id:"automatic-update-recommended",children:[],level:2},{value:"Manual Update (if automatic doesn&#39;t work for you)",id:"manual-update-if-automatic-doesnt-work-for-you",children:[{value:"First option: quick and dirty (discarding result data)",id:"first-option-quick-and-dirty-discarding-result-data",children:[],level:3},{value:"Second option: keeping everything",id:"second-option-keeping-everything",children:[],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Updating the server instance is equivalent to doing it ",(0,r.kt)("a",{parentName:"p",href:"Update-JATOS.html"},"locally"),", but make sure that you know what you're doing; especially if you have paired JATOS with a MySQL database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup your JATOS")),(0,r.kt)("p",null,"The easiest way to backup is to do a snapshot of the whole server. If you use an external MySQL database with your JATOS, make a backup e.g. using ",(0,r.kt)("inlineCode",{parentName:"p"},"mysqldump -u yourUserName -p yourDatabaseName > yourDatabaseName.out")," - or a snapshot of the whole database server."),(0,r.kt)("p",null,"As with ",(0,r.kt)("a",{parentName:"p",href:"Update-JATOS.html"},"updating of a local JATOS installation")," you can do it automatically or manually."),(0,r.kt)("p",null,"After updating you can check the new JATOS installation with the test page: go to ",(0,r.kt)("em",{parentName:"p"},"Administration")," \u21d2 ",(0,r.kt)("em",{parentName:"p"},"Tests")," and check that all tests are 'OK'."),(0,r.kt)("h2",{id:"automatic-update-recommended"},"Automatic Update (recommended)"),(0,r.kt)("p",null,"This is the easiest way. Then it's ",(0,r.kt)("a",{parentName:"p",href:"Update-JATOS.html#automatic-updates"},"the same as in a local installation"),"."),(0,r.kt)("p",null,"If you did a manual backup before you don't need to do the backup offered during the update process."),(0,r.kt)("h2",{id:"manual-update-if-automatic-doesnt-work-for-you"},"Manual Update (if automatic doesn't work for you)"),(0,r.kt)("p",null,"You have two ways to update manually: 1) Keep your studies but discard all your result data and batches. 2) Keep everything, including your studies and result data (might not always be possible)."),(0,r.kt)("h3",{id:"first-option-quick-and-dirty-discarding-result-data"},"First option: quick and dirty (discarding result data)"),(0,r.kt)("p",null,"You can just follow the ",(0,r.kt)("a",{parentName:"p",href:"Update-JATOS.html#first-easy-way-discarding-your-result-data"},"update instructions for the local installation"),". If you use a MySQL database don't forget to ",(0,r.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html"},"configure it with a clean and new one")," (not the one from your old JATOS). Do not use the new JATOS with the old MySQL database unless you choose to keep your data, as described below."),(0,r.kt)("h3",{id:"second-option-keeping-everything"},"Second option: keeping everything"),(0,r.kt)("p",null,"This means that we have to configure the MySQL database or copy the embedded H2 database files."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the old JATOS using ",(0,r.kt)("inlineCode",{parentName:"li"},"./loader.sh stop")," "),(0,r.kt)("li",{parentName:"ol"},"Copy the new JATOS version to your server, e.g. copy it into the same folder where your old JATOS is located. Don't yet remove the old JATOS instance. "),(0,r.kt)("li",{parentName:"ol"},"Unzip the new JATOS (",(0,r.kt)("inlineCode",{parentName:"li"},"unzip jatos.zip"),")"),(0,r.kt)("li",{parentName:"ol"},"From the old JATOS installation copy some folders to the new one",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Your assets root folder to the new JATOS installation (Note: By default your assets root folder is called ",(0,r.kt)("inlineCode",{parentName:"li"},"study_assets_root")," and lays in the JATOS folder but you might have ",(0,r.kt)("a",{parentName:"li",href:"Configure-JATOS-on-a-Server.html"},"changed this"),"."),(0,r.kt)("li",{parentName:"ol"},"If exists, your folder for uploaded result files (Note: By default this folder is called ",(0,r.kt)("inlineCode",{parentName:"li"},"result_uploads")," and lays in the JATOS folder but you might have ",(0,r.kt)("a",{parentName:"li",href:"Configure-JATOS-on-a-Server.html"},"changed this"),". "),(0,r.kt)("li",{parentName:"ol"},"If exists, ",(0,r.kt)("inlineCode",{parentName:"li"},"study_logs")))),(0,r.kt)("li",{parentName:"ol"},"Database",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"H2 - If you are using the default H2 database: From your the folder of your old JATOS installation copy the folder ",(0,r.kt)("inlineCode",{parentName:"li"},"database")," to the new JATOS installation. ",(0,r.kt)("a",{parentName:"li",href:"Troubleshooting.html#database-is-corrupted"},"Remember to stop JATOS before copying the folder"),"."),(0,r.kt)("li",{parentName:"ul"},"MySQL - For MySQL you don't have to change anything on the database side."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"Configure-JATOS-on-a-Server.html"},"Configure the new JATOS like the old one")," - usually it's enough to copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"production.conf")," from the old ",(0,r.kt)("inlineCode",{parentName:"li"},"conf")," folder into the new one"),(0,r.kt)("li",{parentName:"ol"},"Start the new JATOS using ",(0,r.kt)("inlineCode",{parentName:"li"},"./loader.sh start")),(0,r.kt)("li",{parentName:"ol"},"Open JATOS' test page (",(0,r.kt)("em",{parentName:"li"},"Administration")," \u21d2 ",(0,r.kt)("em",{parentName:"li"},"Tests"),") and check that everything is 'OK'")))}c.isMDXComponent=!0}}]);