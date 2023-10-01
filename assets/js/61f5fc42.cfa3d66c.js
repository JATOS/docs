"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[5530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const o={title:"Configure JATOS on a Server",slug:"/Configure-JATOS-on-a-Server.html",sidebar_position:6},i=void 0,s={unversionedId:"Serving_the_Internet/Configure-JATOS-on-a-Server",id:"version-3.6.1/Serving_the_Internet/Configure-JATOS-on-a-Server",title:"Configure JATOS on a Server",description:"Restart JATOS after making any changes to the configuration (loader.sh restart)",source:"@site/versioned_docs/version-3.6.1/Serving_the_Internet/Configure-JATOS-on-a-Server.md",sourceDirName:"Serving_the_Internet",slug:"/Configure-JATOS-on-a-Server.html",permalink:"/3.6.x/Configure-JATOS-on-a-Server.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.6.1/Serving_the_Internet/Configure-JATOS-on-a-Server.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1696160201,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:6,frontMatter:{title:"Configure JATOS on a Server",slug:"/Configure-JATOS-on-a-Server.html",sidebar_position:6},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Install JATOS on a server",permalink:"/3.6.x/JATOS-on-a-server.html"},next:{title:"JATOS with MySQL",permalink:"/3.6.x/JATOS-with-MySQL.html"}},l={},p=[{value:"IP / domain and port",id:"ip--domain-and-port",level:2},{value:"URL base path (JATOS &gt;= v3.3.1)",id:"url-base-path-jatos--v331",level:2},{value:"Study assets root path",id:"study-assets-root-path",level:2},{value:"MySQL Database",id:"mysql-database",level:2},{value:"JVM arguments",id:"jvm-arguments",level:2},{value:"Password restrictions",id:"password-restrictions",level:2},{value:"Study result data (JATOS &gt;= v3.5.9)",id:"study-result-data-jatos--v359",level:2},{value:"Uploading of study result files (JATOS &gt;= v3.5.1)",id:"uploading-of-study-result-files-jatos--v351",level:2},{value:"Study logs (since JATOS &gt;= 3.2.1)",id:"study-logs-since-jatos--321",level:2},{value:"LDAP authentication (since JATOS &gt;= 3.5.4)",id:"ldap-authentication-since-jatos--354",level:2},{value:"User session configuration",id:"user-session-configuration",level:2},{value:"Customize JATOS&#39; home page",id:"customize-jatos-home-page",level:2},{value:"Other configuration in <em>production.conf</em>",id:"other-configuration-in-productionconf",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Restart JATOS after making any changes to the configuration (",(0,r.kt)("inlineCode",{parentName:"strong"},"loader.sh restart"),")")),(0,r.kt)("h2",{id:"ip--domain-and-port"},"IP / domain and port"),(0,r.kt)("p",null,"By default JATOS binds to all locally available IP addresses including 127.0.0.1 on port 9000. If you don't want to use a proxy in front of JATOS, you have several ways to configure the host name or IP address and the port:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Since JATOS 3.3.5")," it is possible to set up IP and port via ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),": Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"play.server.http.address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"play.server.http.port")," and restart JATOS. E.g. to run on IP 192.168.0.100 and port 80:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'play.server.http.address = "192.168.0.100"\nplay.server.http.port = 80\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via command-line arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dhttp.address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dhttp.port"),", e.g. with the following command you'd start JATOS with IP 10.0.0.1 and port 80"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"loader.sh start -Dhttp.address=10.0.0.1 -Dhttp.port=80\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(DEPRECATED) In ",(0,r.kt)("inlineCode",{parentName:"p"},"loader.sh")," change the values of 'address' and 'port' according to your IP address or domain name and port. Restart JATOS after editing."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'address="172.16.0.1"\nport="8080"\n')))),(0,r.kt)("h2",{id:"url-base-path-jatos--v331"},"URL base path (JATOS >= v3.3.1)"),(0,r.kt)("p",null,'JATOS can be configured to use an base path. E.g we have the host "',(0,r.kt)("a",{parentName:"p",href:"http://www.example.org%22"},'www.example.org"'),' and let JATOS run under "mybasepath" so that JATOS\' URL all start with "',(0,r.kt)("a",{parentName:"p",href:"http://www.example.org/mybasepath/%22"},'www.example.org/mybasepath/"'),". This can be achieved in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via the command-line argument ",(0,r.kt)("inlineCode",{parentName:"p"},"-DJATOS_URL_BASE_PATH"),", e.g."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'loader.sh start -DJATOS_URL_BASE_PATH="/mybasepath/"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),": change ",(0,r.kt)("inlineCode",{parentName:"p"},"play.http.context")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'play.http.context = "/mybasepath/"\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'The path always has to start and end with a "/".')," And keep in mind that if you add a base path to JATOS' URL you have to adjust all absolute paths to the study assets (in HTML and JavaScript files) too - ",(0,r.kt)("a",{parentName:"p",href:"Adapt-pre-written-code-to-run-it-in-JATOS.html#create-the-study-in-jatos"},"or use relative paths"),"."),(0,r.kt)("h2",{id:"study-assets-root-path"},"Study assets root path"),(0,r.kt)("p",null,"By default the study assets root folder (where all your study's HTML, JavaScript files etc. are stored) is located within JATOS installation's folder in ",(0,r.kt)("inlineCode",{parentName:"p"},"study_assets_root"),". There are three ways to change this path:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via the command-line argument ",(0,r.kt)("inlineCode",{parentName:"p"},"-DJATOS_STUDY_ASSETS_ROOT_PATH"),", e.g."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'loader.sh start -DJATOS_STUDY_ASSETS_ROOT_PATH="/path/to/my/assets/root/folder"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),": change ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.studyAssetsRootPath")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'jatos.studyAssetsRootPath="/path/to/my/jatos_study_assets_root"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"JATOS_STUDY_ASSETS_ROOT_PATH"),", e.g. the following export adds it to the env variables:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export JATOS_STUDY_ASSETS_ROOT_PATH="/path/to/my/assets/root/folder"\n')))),(0,r.kt)("h2",{id:"mysql-database"},"MySQL Database"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"JATOS-with-MySQL.html"},"JATOS with MySQL")),(0,r.kt)("h2",{id:"jvm-arguments"},"JVM arguments"),(0,r.kt)("p",null,"All JVM arguments can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"loader.sh")," but all arguments starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"-X")," need an extra suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"-J"),". E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"-Xmx")," (to change JVM's max heap memory) has to be written as ",(0,r.kt)("inlineCode",{parentName:"p"},"-J-Xmx"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"loader.sh start -J-Xmx4G   # Allow max 4 GB (heap) memory\n")),(0,r.kt)("h2",{id:"password-restrictions"},"Password restrictions"),(0,r.kt)("p",null,"By default JATOS' keeps it simple and relies on the users to choose save passwords: it just enforces a length of at least 7 characters. But this can be changed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," with the following two properties."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.user.password.length")," - Set with an positive integer (default is 7)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.user.password.strength")," - Set to 0, 1, 2, or 3 (default is 0)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),": No restrictions on characters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),": At least one Latin letter and one number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2"),": At least one Latin letter, one number and one special character (",(0,r.kt)("inlineCode",{parentName:"li"},"#?!@$%^&*-"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3"),": At least one uppercase Latin letter, one lowercase Latin letter, one number and one special character (",(0,r.kt)("inlineCode",{parentName:"li"},"#?!@$%^&*-"),")")))),(0,r.kt)("h2",{id:"study-result-data-jatos--v359"},"Study result data (JATOS >= v3.5.9)"),(0,r.kt)("p",null,"You can change the allowed size of a component's result data. This can be used to reduce the load on the server, especially network and database. Sometimes its necessary to increase the value if certain studies have larger result data needs. The property for this in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.resultData.maxSize"),". By default it's set to 5 MB per component run."),(0,r.kt)("p",null,"E.g. to reduce the allowed size per component to 1 MB:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"jatos.resultData.maxSize = 1MB\n")),(0,r.kt)("h2",{id:"uploading-of-study-result-files-jatos--v351"},"Uploading of study result files (JATOS >= v3.5.1)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.enabled")," - Enables study result files uploads (default is true)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.path")," - Path in the file system where the uploaded result files will be stored (default is './result_uploads')"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.maxFileSize")," - Max file size for one single uploaded result file (default is 30 MB)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.limitPerStudyRun")," - Limit of all uploaded result files of one single study run (default is 50MB)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via environment variables (JATOS_RESULT_UPLOADS_LIMIT_PER_STUDY_RUN and JATOS_RESULT_UPLOADS_MAX_FILE_SIZE only since 3.5.6)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export JATOS_RESULT_UPLOADS_PATH="/path/to/my/result/upload/folder"\nexport JATOS_RESULT_UPLOADS_LIMIT_PER_STUDY_RUN=100MB\nexport JATOS_RESULT_UPLOADS_MAX_FILE_SIZE=50MB\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via command-line arguments (JATOS_RESULT_UPLOADS_LIMIT_PER_STUDY_RUN and JATOS_RESULT_UPLOADS_MAX_FILE_SIZE only since 3.5.6)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'loader.sh start -DJATOS_RESULT_UPLOADS_PATH="/path/to/my/result/upload/folder" -DJATOS_RESULT_UPLOADS_LIMIT_PER_STUDY_RUN=100MB -DJATOS_RESULT_UPLOADS_MAX_FILE_SIZE=50MB\n')))),(0,r.kt)("h2",{id:"study-logs-since-jatos--321"},"Study logs (since JATOS >= 3.2.1)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.studyLogs.enabled")," - (since JATOS >= 3.5.1) - Enables ",(0,r.kt)("a",{parentName:"li",href:"Study-Log.html"},"Study Logs")," (default is true)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.studyLogs.path")," - (since JATOS >= 3.2.1) - Path in the file system where the ",(0,r.kt)("a",{parentName:"li",href:"Study-Log.html"},"Study Logs")," will be stored (default is './study_logs')"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The path can be configured via environment variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export JATOS_STUDY_LOGS_PATH="/path/to/my/study/logs/folder"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The path can be configured via command-line arguments"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'loader.sh start -DJATOS_STUDY_LOGS_PATH="/path/to/my/study/logs/folder"\n')))),(0,r.kt)("h2",{id:"ldap-authentication-since-jatos--354"},"LDAP authentication (since JATOS >= 3.5.4)"),(0,r.kt)("p",null,"By default JATOS uses only locally stored users and no LDAP. LDAP configuration is only possible in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),". At the moment LDAP users still have to be created manually in JATOS' ",(0,r.kt)("em",{parentName:"p"},"User manager")," (with the checkbox LDAP turned on).- only authentication is done via LDAP."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.ldap.url")," - Specifies URL of the LDAP server. Not set or an empty string means no authentication via LDAP."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.ldap.basedn"),' - LDAP base domain name (e.g. "dc=example,dc=com"). Not set or an empty string means no authentication via LDAP.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.ldap.timeout")," -  Time in milliseconds JATOS waits for a response from your LDAP server. Default is 5000 ms.")),(0,r.kt)("p",null,"If your LDAP uses encryption, you have to add your certificate to JATOS' trusted certificates defined with ",(0,r.kt)("inlineCode",{parentName:"p"},"play.ws.ssl.trustManager.stores"),". E.g. if your certificate's location is in ",(0,r.kt)("inlineCode",{parentName:"p"},"/jatos/conf/certs/ca.pem"),", then use the following to add it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'play.ws.ssl.trustManager.stores = [\n    { type = "PEM", path = "/jatos/conf/certs/ca.pem" }\n    { path: ${java.home}/lib/security/cacerts, password = "changeit" }\n]\n')),(0,r.kt)("p",null,"The first line adds your certificate ('type' can be PKCS12, JKS or PEM). The second line adds Java's default key store."),(0,r.kt)("h2",{id:"user-session-configuration"},"User session configuration"),(0,r.kt)("p",null,"The user session is part of JATOS secuity measurments (",(0,r.kt)("a",{parentName:"p",href:"http://blog.jatos.org/Hardening-JATOS-Security/"},"more about security"),") and can be configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.userSession.validation")," - (since JATOS >= 3.1.10) - toggles user session validation. If turned on (true) only the IP which was used at login time is allowed to be used for subsequent requests by this user. This helps preventing session hijacking and adds an addional layer of security. But on the downside it also prevents using the same user in JATOS from different browsers at the same time. By default it is set to false to allow an easy use of a local JATOS. On a server installation it should be set to true, although sometimes this not possible, e.g. if your users have an often changing, dynamic IP address. WARNING: Turning off the user session validation reduces JATOS security!")),(0,r.kt)("p",null,"Other configs are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.userSession.timeout")," - time in minutes a user stays logged in (default is 1440 = 1 day)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.userSession.inactivity")," - defines the time in minutes a user is automatically logged out after inactivity (default is 60)")),(0,r.kt)("h2",{id:"customize-jatos-home-page"},"Customize JATOS' home page"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Customize-JATOS-Home-Page.html"},"More here"),"."),(0,r.kt)("h2",{id:"other-configuration-in-productionconf"},"Other configuration in ",(0,r.kt)("em",{parentName:"h2"},"production.conf")),(0,r.kt)("p",null,"Some other properties can be configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"play.http.session.secure")," - secure session cookie: set true to restrict user access to HTTPS (default is false)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.idCookies.secure")," - secure ID cookies: set true to restrict worker access to HTTPS (default is false)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.idCookies.sameSite")," - defines the ID cookies' 'SameSite' attribute: allowed values are ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Lax"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"Strict"),". Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.studyMembers.allowAddAllUsers")," - Allow to add all users that exist on a JATOS to be added at once as members of a study. Default is true. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.resultData.export.useTmpFile")," - If true, result data that are fetched from the database are first stored in a temporary file and only when they are all gathered the file is sent to the browser. If false the result data are streamed directly from the database to the browser. Default is false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jatos.maxResultsDbQuerySize")," - Maximal number of results to be fetched from the DB at once (default is 10)")),(0,r.kt)("p",null,"Apart from those all ",(0,r.kt)("a",{parentName:"p",href:"https://www.playframework.com/documentation/latest/Configuration"},"configuration properties possible in the Play Framework")," are possible in JATOS' ",(0,r.kt)("em",{parentName:"p"},"production.conf")," too, e.g. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"play.pidfile.path")," - Path to the file that contains the process id of the started JATOS application (default is ",(0,r.kt)("inlineCode",{parentName:"li"},"./RUNNING_PID"),")")))}u.isMDXComponent=!0}}]);