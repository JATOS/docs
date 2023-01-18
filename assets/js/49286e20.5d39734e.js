"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4463],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5232:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),i=["components"],l={title:"Install JATOS on a server",slug:"/JATOS-on-a-server.html",sidebar_position:5},s=void 0,p={unversionedId:"Serving_the_Internet/JATOS-on-a-server",id:"version-3.6.1/Serving_the_Internet/JATOS-on-a-server",title:"Install JATOS on a server",description:"There are several ways to bring JATOS to the internet. You can install it",source:"@site/versioned_docs/version-3.6.1/Serving_the_Internet/JATOS-on-a-server.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-on-a-server.html",permalink:"/3.6.1/JATOS-on-a-server.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Serving_the_Internet/JATOS-on-a-server.md",tags:[],version:"3.6.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1674032503,formattedLastUpdatedAt:"1/18/2023",sidebarPosition:5,frontMatter:{title:"Install JATOS on a server",slug:"/JATOS-on-a-server.html",sidebar_position:5},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"JATOS on AWS",permalink:"/3.6.1/JATOS-in-Amazons-Cloud-without-Docker.html"},next:{title:"Configure JATOS on a Server",permalink:"/3.6.1/Configure-JATOS-on-a-Server.html"}},d=[{value:"Installation on a server",id:"installation-on-a-server",children:[{value:"1. Install Java",id:"1-install-java",children:[],level:3},{value:"2. Optional Install MySQL",id:"2-optional-install-mysql",children:[],level:3},{value:"3. Install JATOS",id:"3-install-jatos",children:[],level:3},{value:"4. Configuration",id:"4-configuration",children:[],level:3},{value:"5. Change Admin&#39;s password",id:"5-change-admins-password",children:[],level:3},{value:"6. Check JATOS&#39; test page",id:"6-check-jatos-test-page",children:[],level:3},{value:"7. Optional Proxy and encryption",id:"7-optional-proxy-and-encryption",children:[],level:3},{value:"8. Optional Turn on user session validation",id:"8-optional-turn-on-user-session-validation",children:[],level:3},{value:"9. Optional Auto-start JATOS",id:"9-optional-auto-start-jatos",children:[{value:"1) Via systemd service (JATOS version &gt;= 3.1.6, recommended)",id:"1-via-systemd-service-jatos-version--316-recommended",children:[],level:4},{value:"2) Via /etc/init.d script",id:"2-via-etcinitd-script",children:[],level:4}],level:3},{value:"10. Optional Backup",id:"10-optional-backup",children:[],level:3}],level:2}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are several ways to bring JATOS to the internet. You can install it"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On your own ",(0,o.kt)("strong",{parentName:"li"},"dedicated server")," (discussed here on this page)"),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("strong",{parentName:"li"},"cloud")," - This point is covered by two pages, ",(0,o.kt)("a",{parentName:"li",href:"JATOS-on-DigitalOcean.html"},"one for DigitalOcean")," and ",(0,o.kt)("a",{parentName:"li",href:"JATOS-in-Amazons-Cloud-without-Docker.html"},"one for AWS")," (also there are other cloud provider, like Microsoft Azure, Google Cloud ...)."),(0,o.kt)("li",{parentName:"ul"},"With a ",(0,o.kt)("strong",{parentName:"li"},"Docker")," container: ",(0,o.kt)("a",{parentName:"li",href:"Install-JATOS-via-Docker.html"},"Install JATOS via Docker"))),(0,o.kt)("p",null,"If you don't know much about server administration the DigitalOcean page might be best for you."),(0,o.kt)("h2",{id:"installation-on-a-server"},"Installation on a server"),(0,o.kt)("p",null,"The actual JATOS instance on a server isn't too different from a local one. It basically involves telling JATOS which IP address and port it should use and (optionally) replace the embedded database with a MySQL one. There are other issues however, not directly related to JATOS, that you should consider when setting up a server. These include: setting up automatic, regular backups of your data, an automatic restart of JATOS after a server reboot, encryption, additional HTTP server, etc."),(0,o.kt)("h3",{id:"1-install-java"},"1. Install Java"),(0,o.kt)("p",null,"We've produced multiple versions of JATOS. The simplest version is JATOS alone, but other versions are bundled with Java JRE. On a server, it's best (though not necessary) to install JATOS without a bundled Java. This will make it easier to upgrade to new Java releases. Prior to JATOS v3.4.1 Java 8 is necessary - from v3.4.1 on both Java 8 and 11 are fine. "),(0,o.kt)("h3",{id:"2-optional-install-mysql"},"2. ","[Optional]"," Install MySQL"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"JATOS-with-MySQL.html"},"JATOS with MySQL")),(0,o.kt)("h3",{id:"3-install-jatos"},"3. Install JATOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/releases"},"Download JATOS")),(0,o.kt)("p",{parentName:"li"},"E.g. with ",(0,o.kt)("em",{parentName:"p"},"wget")," for the version 3.5.4:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"wget https://github.com/JATOS/JATOS/releases/download/v3.5.4/jatos.zip"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"JATOS comes zipped. Unpack this file at a location in your server's file system where JATOS should be installed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check that the file ",(0,o.kt)("inlineCode",{parentName:"p"},"loader.sh")," in the JATOS folder is executable.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check that JATOS starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"loader.sh start|restart|stop")))),(0,o.kt)("h3",{id:"4-configuration"},"4. Configuration"),(0,o.kt)("p",null,"If JATOS runs locally it's usually not necessary to change the defaults but on a server you probably want to set up the IP and port or maybe use a different database and change the path of the study assets root folder. These docs have an extra page on how to ",(0,o.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html"},"Configure JATOS on a Server"),"."),(0,o.kt)("h3",{id:"5-change-admins-password"},"5. Change Admin's password"),(0,o.kt)("p",null,"Every JATOS installation comes with an Admin user that has the default password 'admin'. You must change it before the server goes live. This can be done in JATOS' GUI:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start JATOS and in a browser go to JATOS login page ",(0,o.kt)("inlineCode",{parentName:"li"},"http://my-jatos-domain/jatos")," "),(0,o.kt)("li",{parentName:"ol"},"Login as 'admin' with password 'admin'"),(0,o.kt)("li",{parentName:"ol"},"Click on 'Admin (admin) in top-right header"),(0,o.kt)("li",{parentName:"ol"},"Click 'Change Password'")),(0,o.kt)("h3",{id:"6-check-jatos-test-page"},"6. Check JATOS' test page"),(0,o.kt)("p",null,"JATOS comes with a handy test page: in the browser go to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-jatos-domain/jatos/admin"),", then click ",(0,o.kt)("em",{parentName:"p"},"Tests")," and check that all tests are 'OK' (in older version the test page is under ",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-jatos-domain/jatos/test"),")."),(0,o.kt)("h3",{id:"7-optional-proxy-and-encryption"},"7. ","[Optional]"," Proxy and encryption"),(0,o.kt)("p",null,"Most admins tend to use an additional reverse proxy in front of JATOS, mostly for encryption. We provide two example configurations for Nginx and Apache. Both support encryption and WebSockets (keep in mind JATOS relies on WebSockets and it's necessary to support them)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"JATOS-with-Nginx.html"},"JATOS with Nginx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"JATOS-with-Apache.html"},"JATOS with Apache"))),(0,o.kt)("h3",{id:"8-optional-turn-on-user-session-validation"},"8. ","[Optional]"," Turn on user session validation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html#user-session-configuration"},"More here"),"."),(0,o.kt)("h3",{id:"9-optional-auto-start-jatos"},"9. ","[Optional]"," Auto-start JATOS"),(0,o.kt)("p",null,"It's nice to have JATOS starts automatically after a start or a reboot of your machine. Choose between one of the two possibilities: 1) via a systemd service (JATOS version >= 3.1.6, recommended), or 2) via a init.d script."),(0,o.kt)("h4",{id:"1-via-systemd-service-jatos-version--316-recommended"},"1) Via systemd service (JATOS version >= 3.1.6, recommended)"),(0,o.kt)("p",null,"Create a systemd service file for JATOS "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/systemd/system/jatos.service\n")),(0,o.kt)("p",null,"and put the following text inside. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[Unit]\nDescription=JATOS\nAfter=network-online.target\n# If you use JATOS with an MySQL database use\n#After=network-online.target mysql.service\n\n[Service]\nPIDFile=/my/path/to/jatos/RUNNING_PID\nUser=my-jatos-user\nExecStart=/my/path/to/jatos/loader.sh start\nExecStop=/bin/kill $MAINPID\nExecStopPost=/bin/rm -f /my/path/to/jatos/RUNNING_PID\nRestart=on-failure\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Change the paths and the user according to your JATOS path and the user you want to start JATOS with."),(0,o.kt)("p",null,"Secondly, notify systemd of the new service file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,o.kt)("p",null,"and enable it, so it runs on boot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable jatos.service\n")),(0,o.kt)("p",null,"That's it."),(0,o.kt)("p",null,"Additionally you can manually start/stop JATOS now with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemctl start jatos.service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemctl stop jatos.service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemctl restart jatos.service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemctl status jatos.service"))),(0,o.kt)("p",null,"You can disable the service with ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl disable jatos.service"),". If you change the service file you need ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload jatos.service")," to let the system know."),(0,o.kt)("h4",{id:"2-via-etcinitd-script"},"2) Via /etc/init.d script"),(0,o.kt)("p",null,"It's easy to turn the ",(0,o.kt)("inlineCode",{parentName:"p"},"loader.sh")," script into an init script for a daemon."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"loader.sh")," script to ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/init.d/"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change access permission with ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod og+x jatos"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/init.d/jatos")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Comment out the line that defines the JATOS location ",(0,o.kt)("inlineCode",{parentName:"p"},'dir="$( cd "$( dirname "$0" )" && pwd )"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a new locatoin ",(0,o.kt)("inlineCode",{parentName:"p"},"dir=")," with the path to your JATOS installation"),(0,o.kt)("p",{parentName:"li"},"The beginning of your ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/init.d/jatos")," should look like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n# JATOS loader for Linux and MacOS X\n\n# Change IP address and port here\n# Alternatively you can use command-line arguments -Dhttp.address and -Dhttp.port\naddress="127.0.0.1"\nport="9000"\n\n# Don\'t change after here unless you know what you\'re doing\n###########################################################\n\n# Get JATOS directory\n#dir="$( cd "$( dirname "$0" )" && pwd )"\ndir="/path/to/my/JATOS/installation"\n...\n'))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make it auto-start with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo update-rc.d jatos defaults")))),(0,o.kt)("p",null,"Now JATOS starts automatically when you start your server and stops when you shut it down. You can also use the init script yourself like any other init script with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo /etc/init.d/jatos start|stop|restart"),"."),(0,o.kt)("h3",{id:"10-optional-backup"},"10. ","[Optional]"," Backup"),(0,o.kt)("p",null,"The easiest way to backup is to let JATOS users care themselves for their own data. JATOS has an easy to use ",(0,o.kt)("a",{parentName:"p",href:"Manage-results.html"},"export function for result data"),". So you could just tell everyone to export their data regularily."),(0,o.kt)("p",null,"But if you want to set up a regular backup of the data stored in JATOS here are the necessary steps. Those data consists of two parts (1.) the data stored in the database and (2.) your study assets folder that contains all the web files (e.g. HTML, JavaScript, images). Both have to be backed up to be able to restore them later on."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Database")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MySQL")," - If you use a MySQL database you might want to look into the ",(0,o.kt)("inlineCode",{parentName:"li"},"mysqldump")," shell command. E.g., with ",(0,o.kt)("inlineCode",{parentName:"li"},"mysqldump -u myusername -p mydbname > mysql_bkp.out")," you can backup the whole data into a single file. Restore the database with ",(0,o.kt)("inlineCode",{parentName:"li"},"mysql -u myusername -p mydbname < mysql_bkp.out"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"H2")," - There are at least two ways: one easy (but unofficial) and one official:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Copy & paste the db file - It's important to ",(0,o.kt)("strong",{parentName:"li"},"stop JATOS")," before doing a backup or restoring a H2 database this way. If you do not stop JATOS your ",(0,o.kt)("a",{parentName:"li",href:"Troubleshooting.html#database-is-corrupted"},"data might be corrupted"),". You can just backup the folder ",(0,o.kt)("inlineCode",{parentName:"li"},"my-jatos-path/database"),". In case you want to restore an older version from the backup just replace the current version of the folder with the backed-up version."),(0,o.kt)("li",{parentName:"ol"},"Via ",(0,o.kt)("a",{parentName:"li",href:"http://www.h2database.com/html/tutorial.html#upgrade_backup_restore"},"H2's upgrade, backup, and restore tool")))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"study_assets_root folder")," - This is the folder where all your study's assets (e.g. HTML, JS, CSS, images) are stored. You can just make a backup of your study assets folder. If you want to return to a prior version replace the current folder with the backed-up version.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"result_uploads folder")," - This folder contains the files, that were uploaded during a study run. You can just make a backup of your results upload folder. If you want to return to a prior version replace the current folder with the backed-up version.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"study_logs folder")," - Contains the ",(0,o.kt)("a",{parentName:"p",href:"Study-Log.html"},"study logs")))),(0,o.kt)("p",null,"Remember, a backup has to be done of all ",(0,o.kt)("strong",{parentName:"p"},"four")," the folders, ",(0,o.kt)("em",{parentName:"p"},"database")," ",(0,o.kt)("strong",{parentName:"p"},"and")," the ",(0,o.kt)("em",{parentName:"p"},"study_assets_root")," ",(0,o.kt)("strong",{parentName:"p"},"and")," ",(0,o.kt)("em",{parentName:"p"},"result_uploads")," ",(0,o.kt)("strong",{parentName:"p"},"and")," ",(0,o.kt)("em",{parentName:"p"},"study_logs"),"."))}m.isMDXComponent=!0}}]);