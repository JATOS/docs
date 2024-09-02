"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66807:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(83117),o=(a(67294),a(3905));const r={title:"Install JATOS on a server",slug:"/JATOS-on-a-server.html",sidebar_position:3},l=void 0,i={unversionedId:"Serving_the_Internet/JATOS-on-a-server",id:"version-3.8.1/Serving_the_Internet/JATOS-on-a-server",title:"Install JATOS on a server",description:"There are several ways to bring JATOS to the internet. If you don't know much about server administration the DigitalOcean page might be best for you.",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-on-a-server.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-on-a-server.html",permalink:"/3.8.x/JATOS-on-a-server.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-on-a-server.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1725261939,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:3,frontMatter:{title:"Install JATOS on a server",slug:"/JATOS-on-a-server.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Expose your local JATOS",permalink:"/3.8.x/Expose-your-local-JATOS.html"},next:{title:"JATOS on DigitalOcean",permalink:"/3.8.x/JATOS-on-DigitalOcean.html"}},s={},p=[{value:"Install Java",id:"install-java",level:2},{value:"Install JATOS",id:"install-jatos",level:2},{value:"Optional Install MySQL/MariaDB",id:"optional-install-mysqlmariadb",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Optional Proxy and encryption",id:"optional-proxy-and-encryption",level:2},{value:"Optional Auto-start JATOS via <em>systemd</em>",id:"optional-auto-start-jatos-via-systemd",level:2},{value:"Optional Specify the location of JATOS&#39; data folders",id:"optional-specify-the-location-of-jatos-data-folders",level:2},{value:"Optional Backup",id:"optional-backup",level:2},{value:"Simple",id:"simple",level:3},{value:"Detailed",id:"detailed",level:3},{value:"Update JATOS",id:"update-jatos",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are ",(0,o.kt)("a",{parentName:"p",href:"Bring-your-JATOS-online.html"},"several ways to bring JATOS to the internet"),". If you don't know much about server administration the ",(0,o.kt)("a",{parentName:"p",href:"JATOS-on-DigitalOcean.html"},"DigitalOcean")," page might be best for you."),(0,o.kt)("p",null,"And there are dedicated pages for ",(0,o.kt)("a",{parentName:"p",href:"/Install-JATOS-via-Docker.html"},"installation with Docker")," and ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-with-Docker-Compose.html"},"Docker Compose"),"."),(0,o.kt)("p",null,"Installing JATOS as a Internet server usually involves exchanging the embedded database with a MySQL/MariaDB one and setting up a reverse proxy (mostly for HTTPS). You should also consider automatic and regular backups of the data stored in your JATOS."),(0,o.kt)("h2",{id:"install-java"},"Install Java"),(0,o.kt)("p",null,"JATOS needs Java 8 or 11 to run (17 is not yet supported). You can install your own Java or get a JATOS that is already bundled with Java. "),(0,o.kt)("h2",{id:"install-jatos"},"Install JATOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/releases"},"Download JATOS")),(0,o.kt)("p",{parentName:"li"},"E.g. the latest release:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/JATOS/JATOS/releases/latest/download/jatos.zip\n")),(0,o.kt)("p",{parentName:"li"},"E.g. or a certain version (exchange x.x.x with the version you want):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/JATOS/JATOS/releases/download/vx.x.x/jatos.zip\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"JATOS comes zipped. Unpack this file at a location in your server's file system where JATOS should be installed:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"unzip jatos.zip\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check that the file ",(0,o.kt)("inlineCode",{parentName:"p"},"loader.sh")," in the JATOS folder is executable. If not:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"chmod u+x loader.sh\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run JATOS:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./loader.sh start\n")),(0,o.kt)("p",{parentName:"li"},"And to stop it:"),(0,o.kt)("p",{parentName:"li"},"Usually ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctr+C")," does the job, but if your JATOS runs in the background:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./loader.sh stop\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check JATOS is running correctly:"),(0,o.kt)("p",{parentName:"li"},"Use curl: ",(0,o.kt)("inlineCode",{parentName:"p"},"curl http://localhost:9000/ping")," should give you ",(0,o.kt)("inlineCode",{parentName:"p"},"pong")," back"),(0,o.kt)("p",{parentName:"li"},"If you can already access your server from the outside, open JATOS in a browser (the default port is 9000): ",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-IP-or-domain:9000"),". It should show the JATOS login screen. You can log in with username ",(0,o.kt)("em",{parentName:"p"},"admin")," and password ",(0,o.kt)("em",{parentName:"p"},"admin"),"."),(0,o.kt)("p",{parentName:"li"},"Check JATOS' ",(0,o.kt)("em",{parentName:"p"},"Administration")," page: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://my-IP-or-domain/jatos/admin"),". Click the ",(0,o.kt)("em",{parentName:"p"},"Tests")," button: all tests should show an 'OK'. Click on  ",(0,o.kt)("em",{parentName:"p"},"System Info")," and check that all is like you configured it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Always change ",(0,o.kt)("em",{parentName:"strong"},"admin"),"'s password")),(0,o.kt)("p",{parentName:"li"},"This can be done in JATOS' GUI:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"In a browser go to JATOS' login page ",(0,o.kt)("inlineCode",{parentName:"li"},"http://my-IP-or-domain/jatos")," "),(0,o.kt)("li",{parentName:"ol"},"Log in as 'admin' with password 'admin'"),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("em",{parentName:"li"},"Admin (admin)")," in top-right header"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("em",{parentName:"li"},"Change Password"))))),(0,o.kt)("h2",{id:"optional-install-mysqlmariadb"},"[Optional]"," Install MySQL/MariaDB"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"JATOS-with-MySQL.html"},"JATOS with MySQL")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"These docs have an extra page on ",(0,o.kt)("a",{parentName:"p",href:"JATOS_Configuration.html"},"JATOS Configuration"),". E.g. you can add user authentication with ORCID (orcid.org), OpenID Connect (OIDC), LDAP, or Google Sign-in."),(0,o.kt)("h2",{id:"optional-proxy-and-encryption"},"[Optional]"," Proxy and encryption"),(0,o.kt)("p",null,"Most admins tend to use an additional reverse proxy in front of JATOS, mostly for encryption. We provide two example configurations for Nginx and Apache. Both support encryption and WebSockets (keep in mind JATOS relies on WebSockets and it's necessary to support them)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"JATOS-with-Nginx.html"},"JATOS with Nginx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"JATOS-with-Apache.html"},"JATOS with Apache"))),(0,o.kt)("h2",{id:"optional-auto-start-jatos-via-systemd"},"[Optional]"," Auto-start JATOS via ",(0,o.kt)("em",{parentName:"h2"},"systemd")),(0,o.kt)("p",null,"It's nice to have JATOS start automatically after a start or a reboot of your machine."),(0,o.kt)("p",null,"Create a ",(0,o.kt)("em",{parentName:"p"},"systemd")," service file for JATOS. E.g. with ",(0,o.kt)("em",{parentName:"p"},"vim"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vim /etc/systemd/system/jatos.service\n")),(0,o.kt)("p",null,"and put the following text inside (but change the JATOS path and the user under which you want to start JATOS):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"[Unit]\nDescription=JATOS\nAfter=network-online.target\n# If you use JATOS with an MySQL database use\n#After=network-online.target mysql.service\n\n[Service]\nPIDFile=/my/path/to/jatos/RUNNING_PID\nUser=my-jatos-user\nExecStart=/my/path/to/jatos/loader.sh start\nExecStop=/bin/kill $MAINPID\nExecStopPost=/bin/rm -f /my/path/to/jatos/RUNNING_PID\nRestart=on-failure\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Secondly, notify ",(0,o.kt)("em",{parentName:"p"},"systemd")," of the new service file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,o.kt)("p",null,"and enable it, so it runs on boot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable jatos.service\n")),(0,o.kt)("p",null,"That's it."),(0,o.kt)("p",null,"Additionally you can manually start/stop JATOS now with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemctl start jatos.service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemctl stop jatos.service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemctl restart jatos.service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"systemctl status jatos.service"))),(0,o.kt)("p",null,"You can disable the service with ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl disable jatos.service"),". If you change the service file you need to do ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl daemon-reload jatos.service")," again to let the system know."),(0,o.kt)("h2",{id:"optional-specify-the-location-of-jatos-data-folders"},"[Optional]"," Specify the location of JATOS' data folders"),(0,o.kt)("p",null,"By default all data folders are located in JATOS installation folder. But sometimes it is better to change the location to better suit your needs, e.g. for easier backups or updates.  "),(0,o.kt)("p",null,"JATOS' data folders (and their path configuration):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/JATOS_Configuration.html#study-assets-root-path"},(0,o.kt)("em",{parentName:"a"},"study assets root")," folder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/JATOS_Configuration.html#result-file-uploading"},(0,o.kt)("em",{parentName:"a"},"result uploads")," folder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/JATOS_Configuration.html#study-logs"},(0,o.kt)("em",{parentName:"a"},"study logs")," folder"))),(0,o.kt)("p",null,"One might want to move all data folders in one extra 'data' folder. E.g. in JATOS' ",(0,o.kt)("strong",{parentName:"p"},"config file")," the following properties have to be set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'jatos.studyAssetsRootPath = "/path/to/my/jatos-data-folder/study_assets_root"\njatos.resultUploads.path =  "/path/to/my/jatos-data-folder/result_uploads"\njatos.studyLogs.path =      "/path/to/my/jatos-data-folder/study_logs"\n')),(0,o.kt)("p",null,"Or with ",(0,o.kt)("strong",{parentName:"p"},"command-line")," arguments this would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'-Djatos.studyAssetsRootPath="/path/to/my/jatos-data-folder/study_assets_root" -Djatos.resultUploads.path="/path/to/my/jatos-data-folder/result_uploads" -Djatos.studyLogs.path="/path/to/my/jatos-data-folder/study_logs"\n')),(0,o.kt)("h2",{id:"optional-backup"},"[Optional]"," Backup"),(0,o.kt)("p",null,"The easiest way to backup is to let JATOS users care themselves for their own data. JATOS has an easy to use ",(0,o.kt)("a",{parentName:"p",href:"Manage-results.html"},"export function for result data"),". So you could just tell everyone to export their data regularly."),(0,o.kt)("p",null,"But if you want to set up a regular backup of the data stored in JATOS here are the necessary steps. Those data consists of several parts and all have to be backed up to be able to fully restore JATOS later."),(0,o.kt)("h3",{id:"simple"},"Simple"),(0,o.kt)("p",null,"If you want to keep it simple and you didn't change any of the ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-on-a-server.html#optional-specify-the-location-of-jatos-data-folders"},"data folder paths")," then you can just back up the whole JATOS folder. But remember, if you use the embedded H2 database, to stop JATOS before doing the backup. And if you use MySQL you have to care for the MySQL backup extra."),(0,o.kt)("h3",{id:"detailed"},"Detailed"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"JATOS data folders"),(0,o.kt)("p",{parentName:"li"},"JATOS has a couple of ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-on-a-server.html#optional-specify-the-location-of-jatos-data-folders"},(0,o.kt)("em",{parentName:"a"},"data")," folders"),". For easier backups it makes sense to have them all in one extra 'data' folder. Then you can just backup this 'data' folder with whatever file backup mechanism suits you best.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Backup MySQL/MariaDB"),(0,o.kt)("p",{parentName:"li"},"If you use a MySQL or MariaDB database you might want to look into the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysqldump")," shell command. E.g., with ",(0,o.kt)("inlineCode",{parentName:"p"},"mysqldump -u myusername -p mydbname > mysql_bkp.out")," you can backup the whole data into a single file. Restore the database with ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql -u myusername -p mydbname < mysql_bkp.out"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Backup H2 database"),(0,o.kt)("p",{parentName:"li"},"There are at least two ways to backup an embedded H2 database: one easy (but unofficial) and one official:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Easy way: Just backup the ",(0,o.kt)("em",{parentName:"p"},"database")," folder in your JATOS installation folder. ",(0,o.kt)("strong",{parentName:"p"},"But it is important to stop JATOS before doing a backup or restoring a H2 database")," this way. If you do not stop JATOS your data might get corrupted.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Official way: Use ",(0,o.kt)("a",{parentName:"p",href:"http://www.h2database.com/html/tutorial.html#upgrade_backup_restore"},"H2's upgrade, backup, and restore tool")))))),(0,o.kt)("h2",{id:"update-jatos"},"Update JATOS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Be aware"),": JATOS is only allowed to update to higher version numbers - downgrading will likely break your installation. Please do backups before updating."),(0,o.kt)("p",null,"There are two possibilities to update JATOS running on a server:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can simply use the ",(0,o.kt)("a",{parentName:"p",href:"/Update-JATOS.html#automatic-update"},"auto-update feature"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you specified an extra ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-on-a-server.html#optional-specify-the-location-of-jatos-data-folders"},"'data' folder")," you can install a new JATOS without starting it yet, stop the current JATOS, configure the new one to use your extra 'data' folder and start it."))))}u.isMDXComponent=!0}}]);