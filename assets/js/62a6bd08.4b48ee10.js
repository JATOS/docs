"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3461],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6489:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return p}});var n=a(3117),i=(a(7294),a(3905));const r={title:"Configure JATOS on a Server",slug:"/Configure-JATOS-on-a-Server.html",sidebar_position:6},l=void 0,o={unversionedId:"Serving_the_Internet/Configure-JATOS-on-a-Server",id:"version-3.8.1/Serving_the_Internet/Configure-JATOS-on-a-Server",title:"Configure JATOS on a Server",description:"Remember to always restart JATOS after making any changes to the configuration (./loader.sh restart)",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/Configure-JATOS-on-a-Server.md",sourceDirName:"Serving_the_Internet",slug:"/Configure-JATOS-on-a-Server.html",permalink:"/Configure-JATOS-on-a-Server.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.8.1/Serving_the_Internet/Configure-JATOS-on-a-Server.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1688814265,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:6,frontMatter:{title:"Configure JATOS on a Server",slug:"/Configure-JATOS-on-a-Server.html",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Install JATOS on a server",permalink:"/JATOS-on-a-server.html"},next:{title:"JATOS with MySQL",permalink:"/JATOS-with-MySQL.html"}},s={},p=[{value:"IP / domain and port",id:"ip--domain-and-port",level:3},{value:"URL base path",id:"url-base-path",level:3},{value:"Study assets root path",id:"study-assets-root-path",level:3},{value:"MySQL Database",id:"mysql-database",level:3},{value:"JVM arguments",id:"jvm-arguments",level:3},{value:"Password restrictions",id:"password-restrictions",level:3},{value:"Study result data",id:"study-result-data",level:3},{value:"Uploading of study result files",id:"uploading-of-study-result-files",level:3},{value:"Study logs",id:"study-logs",level:3},{value:"LDAP authentication",id:"ldap-authentication",level:3},{value:"User session configuration",id:"user-session-configuration",level:3},{value:"Customize JATOS&#39; home page",id:"customize-jatos-home-page",level:3},{value:"Application logs",id:"application-logs",level:3},{value:"More in <em>production.conf</em>",id:"more-in-productionconf",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remember to always restart JATOS after making any changes to the configuration (",(0,i.kt)("inlineCode",{parentName:"strong"},"./loader.sh restart"),")")),(0,i.kt)("h3",{id:"ip--domain-and-port"},"IP / domain and port"),(0,i.kt)("p",null,"By default JATOS binds to all locally available IP addresses including 127.0.0.1 on port 9000. If you don't want to use a proxy in front of JATOS, you have several ways to configure the host name or IP address and the port:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It is possible to set up IP and port via ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"For v3.8.1 and lower)")," Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"play.server.http.address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"play.server.http.port"),". E.g. to run on IP 192.168.0.100 and port 80:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'play.server.http.address = "192.168.0.100"\nplay.server.http.port = 80\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"For v3.8.2 and higher)")," Edit ",(0,i.kt)("inlineCode",{parentName:"p"},"jatos.http.address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"jatos.http.port"),". E.g. to run on IP 192.168.0.100 and port 80:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'jatos.http.address = "192.168.0.100"\njatos.http.port = 80\n'))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via command-line arguments:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"For v3.8.1 and lower)")," ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dhttp.address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dhttp.port"),", e.g. with the following command you'd start JATOS with IP 10.0.0.1 and port 80"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./loader.sh start -Dhttp.address=10.0.0.1 -Dhttp.port=80\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"For v3.8.2 and higher)")," ",(0,i.kt)("inlineCode",{parentName:"p"},"-Djatos.http.address")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"-Djatos.http.port"),", e.g. with the following command you'd start JATOS with IP 10.0.0.1 and port 80"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./loader.sh start -Djatos.http.address=10.0.0.1 -jatos.Dhttp.port=80\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(DEPRECATED) In ",(0,i.kt)("inlineCode",{parentName:"p"},"loader.sh")," change the values of 'address' and 'port' according to your IP address or domain name and port. Restart JATOS after editing."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'address="172.16.0.1"\nport="8080"\n')))),(0,i.kt)("h3",{id:"url-base-path"},"URL base path"),(0,i.kt)("p",null,'JATOS can be configured to use an base path. E.g we have the host "',(0,i.kt)("a",{parentName:"p",href:"http://www.example.org%22"},'www.example.org"'),' and let JATOS run under "mybasepath" so that JATOS\' URL all start with "',(0,i.kt)("a",{parentName:"p",href:"http://www.example.org/mybasepath/%22"},'www.example.org/mybasepath/"'),". This can be achieved in three ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via the command-line argument ",(0,i.kt)("inlineCode",{parentName:"p"},"-DJATOS_URL_BASE_PATH"),", e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'./loader.sh start -DJATOS_URL_BASE_PATH="/mybasepath/"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),":"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For v3.8.1 and lower)")," change ",(0,i.kt)("inlineCode",{parentName:"li"},"play.http.context"),", e.g.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'play.http.context = "/mybasepath/"\n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For v3.8.2 and higher)")," change ",(0,i.kt)("inlineCode",{parentName:"li"},"jatos.urlBasePath"),", e.g.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'jatos.urlBasePath = "/mybasepath/"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"JATOS_URL_BASE_PATH"),", e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export JATOS_URL_BASE_PATH="/mybasepath/"\n')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'The path always has to start and end with a "/".')," And keep in mind that if you add a base path to JATOS' URL you have to adjust all absolute paths to the study assets (in HTML and JavaScript files) too - ",(0,i.kt)("a",{parentName:"p",href:"Adapt-pre-written-code-to-run-it-in-JATOS.html#create-the-study-in-jatos"},"or use relative paths")," (which is recommended anyway)."),(0,i.kt)("h3",{id:"study-assets-root-path"},"Study assets root path"),(0,i.kt)("p",null,"By default the study assets root folder (where all your study's HTML, JavaScript files etc. are stored) is located within JATOS installation's folder in ",(0,i.kt)("inlineCode",{parentName:"p"},"study_assets_root"),". There are three ways to change this path:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via the command-line argument ",(0,i.kt)("inlineCode",{parentName:"p"},"-DJATOS_STUDY_ASSETS_ROOT_PATH"),", e.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'./loader.sh start -DJATOS_STUDY_ASSETS_ROOT_PATH="/path/to/my/assets/root/folder"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),": change ",(0,i.kt)("inlineCode",{parentName:"p"},"jatos.studyAssetsRootPath")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'jatos.studyAssetsRootPath="/path/to/my/jatos_study_assets_root"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"JATOS_STUDY_ASSETS_ROOT_PATH"),", e.g. the following export adds it to the env variables:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'export JATOS_STUDY_ASSETS_ROOT_PATH="/path/to/my/assets/root/folder"\n')))),(0,i.kt)("h3",{id:"mysql-database"},"MySQL Database"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"JATOS-with-MySQL.html"},"JATOS with MySQL")),(0,i.kt)("h3",{id:"jvm-arguments"},"JVM arguments"),(0,i.kt)("p",null,"All JVM arguments can be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"loader.sh")," but all arguments starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"-X")," need an extra suffix ",(0,i.kt)("inlineCode",{parentName:"p"},"-J"),". The most important one is ",(0,i.kt)("inlineCode",{parentName:"p"},"-Xmx"),", the one to limit JATOS memory usage (to change JVM's max heap memory to be precise). It has to be written as ",(0,i.kt)("inlineCode",{parentName:"p"},"-J-Xmx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"./loader.sh start -J-Xmx4G   # Allow max 4 GB (heap) memory\n")),(0,i.kt)("h3",{id:"password-restrictions"},"Password restrictions"),(0,i.kt)("p",null,"By default JATOS' keeps it simple and relies on the users to choose save passwords: it just enforces a length of at least 7 characters. But this can be changed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," with the following two properties."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.password.length")," - Set with an positive integer (default is 7)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.password.strength")," - Set to 0, 1, 2, or 3 (default is 0)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0"),": No restrictions on characters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),": At least one Latin letter and one number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),": At least one Latin letter, one number and one special character (",(0,i.kt)("inlineCode",{parentName:"li"},"#?!@$%^&*-"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3"),": At least one uppercase Latin letter, one lowercase Latin letter, one number and one special character (",(0,i.kt)("inlineCode",{parentName:"li"},"#?!@$%^&*-"),")")))),(0,i.kt)("h3",{id:"study-result-data"},"Study result data"),(0,i.kt)("p",null,"You can change the allowed size of a component's result data. This can be used to reduce the load on the server, especially network and database. Sometimes its necessary to increase the value if certain studies have larger result data needs. The property for this in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"jatos.resultData.maxSize"),". By default it's set to 5 MB per component run."),(0,i.kt)("p",null,"E.g. to reduce the allowed size per component to 1 MB:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"jatos.resultData.maxSize = 1MB\n")),(0,i.kt)("h3",{id:"uploading-of-study-result-files"},"Uploading of study result files"),(0,i.kt)("p",null,"There are three ways to configure the uploads:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.enabled")," - Enables study result files uploads (default is true)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.path")," - Path in the file system where the uploaded result files will be stored (default is './result_uploads')"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.maxFileSize")," - Max file size for one single uploaded result file (default is 30 MB)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.resultUploads.limitPerStudyRun")," - Limit of all uploaded result files of one single study run (default is 50MB)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via environment variables (JATOS_RESULT_UPLOADS_LIMIT_PER_STUDY_RUN and JATOS_RESULT_UPLOADS_MAX_FILE_SIZE)"),(0,i.kt)("p",{parentName:"li"},"E.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export JATOS_RESULT_UPLOADS_PATH="/path/to/my/result/upload/folder"\nexport JATOS_RESULT_UPLOADS_LIMIT_PER_STUDY_RUN=100MB\nexport JATOS_RESULT_UPLOADS_MAX_FILE_SIZE=50MB\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via command-line arguments (JATOS_RESULT_UPLOADS_LIMIT_PER_STUDY_RUN and JATOS_RESULT_UPLOADS_MAX_FILE_SIZE)"),(0,i.kt)("p",{parentName:"li"},"E.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./loader.sh start -DJATOS_RESULT_UPLOADS_PATH="/path/to/my/result/upload/folder" -DJATOS_RESULT_UPLOADS_LIMIT_PER_STUDY_RUN=100MB -DJATOS_RESULT_UPLOADS_MAX_FILE_SIZE=50MB\n')))),(0,i.kt)("h3",{id:"study-logs"},"Study logs"),(0,i.kt)("p",null,"There are three ways to change the configuration of the study logs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Via ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.studyLogs.enabled")," - Enables ",(0,i.kt)("a",{parentName:"li",href:"Study-Log.html"},"Study Logs")," (default is true)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.studyLogs.path")," - Path in the file system where the ",(0,i.kt)("a",{parentName:"li",href:"Study-Log.html"},"Study Logs")," will be stored (default is './study_logs')"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The path can be configured via environment variables"),(0,i.kt)("p",{parentName:"li"},"E.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export JATOS_STUDY_LOGS_PATH="/path/to/my/study/logs/folder"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The path can be configured via command-line arguments"),(0,i.kt)("p",{parentName:"li"},"E.g."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./loader.sh start -DJATOS_STUDY_LOGS_PATH="/path/to/my/study/logs/folder"\n')))),(0,i.kt)("h3",{id:"ldap-authentication"},"LDAP authentication"),(0,i.kt)("p",null,"By default JATOS uses only locally stored users and no LDAP. LDAP configuration is only possible in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),". At the moment LDAP users still have to be created manually in JATOS' ",(0,i.kt)("em",{parentName:"p"},"User manager")," (with the checkbox LDAP turned on).- only authentication is done via LDAP."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.ldap.url")," - Specifies URL of the LDAP server. Not set or an empty string means no authentication via LDAP."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.ldap.basedn")," - LDAP base DN(s) (distinguished name). Can be one DN with a single string (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'"ou=students,dc=example,dc=com"'),") or a list of DNs in squared brackets (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'["ou=students,dc=example,dc=com", "ou=scientists,dc=example,dc=com"]'),"). Not set or an empty string means no authentication via LDAP."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.ldap.admin.dn")," - DN (distinguished name) of an (optional) admin user that has the right to search for other users. Some LDAP servers need this if it is impossible to bind directly to an 'uid'. Not set or an empty string means no admin user needed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.ldap.admin.password")," - Password of the admin user"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.ldap.timeout")," -  Time in milliseconds JATOS waits for a response from your LDAP server. Default is 5000 ms.")),(0,i.kt)("p",null,"If your LDAP uses encryption, you have to add your certificate to JATOS' trusted certificates defined with ",(0,i.kt)("inlineCode",{parentName:"p"},"play.ws.ssl.trustManager.stores"),". E.g. if your certificate's location is in ",(0,i.kt)("inlineCode",{parentName:"p"},"/jatos/conf/certs/ca.pem"),", then use the following to add it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'play.ws.ssl.trustManager.stores = [\n    { type = "PEM", path = "/jatos/conf/certs/ca.pem" }\n    { path: ${java.home}/lib/security/cacerts, password = "changeit" }\n]\n')),(0,i.kt)("p",null,"The first line adds your certificate ('type' can be PKCS12, JKS or PEM). The second line adds Java's default key store."),(0,i.kt)("h3",{id:"user-session-configuration"},"User session configuration"),(0,i.kt)("p",null,"The user session is part of JATOS secuity measurments and can be configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),". "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.userSession.timeout")," - time in minutes a user stays logged in (default is 1440 = 1 day)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.userSession.inactivity")," - defines the time in minutes a user is automatically logged out after inactivity (default is 60)")),(0,i.kt)("h3",{id:"customize-jatos-home-page"},"Customize JATOS' home page"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"Customize-JATOS-Home-Page.html"},"More here"),"."),(0,i.kt)("h3",{id:"application-logs"},"Application logs"),(0,i.kt)("p",null,"Don't confuse the application logs with the ",(0,i.kt)("a",{parentName:"p",href:"#study-logs"},"study logs"),". The application log records messages from the JATOS application."),(0,i.kt)("p",null,"The application logs is by default is in JATOS installation folder under './logs' and uses daily log rotation with a history of maximal 30 days."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change the path (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"./logs"),")"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Via ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/production.conf"),": Change ",(0,i.kt)("inlineCode",{parentName:"li"},"jatos.logs.path")),(0,i.kt)("li",{parentName:"ol"},"Via environment variable: Use ",(0,i.kt)("inlineCode",{parentName:"li"},"JATOS_LOGS_PATH")),(0,i.kt)("li",{parentName:"ol"},"Via command-line arguments: Use ",(0,i.kt)("inlineCode",{parentName:"li"},"-DJATOS_LOGS_PATH")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change the filename (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"application"),"):"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Via ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/production.conf"),": Change ",(0,i.kt)("inlineCode",{parentName:"li"},"jatos.logs.filename")),(0,i.kt)("li",{parentName:"ol"},"Via environment variable: Use ",(0,i.kt)("inlineCode",{parentName:"li"},"JATOS_LOGS_FILENAME")),(0,i.kt)("li",{parentName:"ol"},"Via command-line arguments: Use ",(0,i.kt)("inlineCode",{parentName:"li"},"-DJATOS_LOGS_FILENAME")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change the appender: If you don't want to log to a file but to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," change the value to ",(0,i.kt)("inlineCode",{parentName:"p"},"ASYNCSTDOUT"),"."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Via ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/production.conf"),": Change ",(0,i.kt)("inlineCode",{parentName:"li"},"jatos.logs.appender")),(0,i.kt)("li",{parentName:"ol"},"Via environment variable: Use ",(0,i.kt)("inlineCode",{parentName:"li"},"JATOS_LOGS_APPENDER")),(0,i.kt)("li",{parentName:"ol"},"Via command-line arguments: Use ",(0,i.kt)("inlineCode",{parentName:"li"},"-DJATOS_LOGS_APPENDER"))))),(0,i.kt)("h3",{id:"more-in-productionconf"},"More in ",(0,i.kt)("em",{parentName:"h3"},"production.conf")),(0,i.kt)("p",null,"Some other properties can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"play.http.session.secure")," - secure session cookie: set true to restrict user access to HTTPS (default is false)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.idCookies.secure")," - secure ID cookies: set true to restrict worker access to HTTPS (default is false)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.idCookies.sameSite")," - defines the ID cookies' 'SameSite' attribute: allowed values are ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Lax"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"Strict"),". Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.studyMembers.allowAddAllUsers")," - Allow to add all users that exist on a JATOS to be added at once as members of a study. Default is false. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.resultData.export.useTmpFile")," - If true, result data that are fetched from the database are first stored in a temporary file and only when they are all gathered the file is sent to the browser. If false the result data are streamed directly from the database to the browser. Default is false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.maxResultsDbQuerySize")," - Maximal number of results to be fetched from the DB at once (default is 10)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.authentication.oauth.googleClientId"),' - Activate Google Sign-In by putting your Google Client ID here (looks similar to this one "1234567890-abc123abc123.apps.googleusercontent.com")'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.user.role.allowSuperuser")," - Activate ",(0,i.kt)("a",{parentName:"li",href:"User-Manager.html#superusers"},"Superuser role")," by putting 'true' (default is 'false')"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.studyAdmin.showStudyAssetsSize")," - If set to 'false' it the 'Study Assets Size' column will be shown in the Study Admin page. Since calculating the study assets size can take some time on larger JATOS installations with slow disks, it can make sense to turn it off. Default is 'true'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.studyAdmin.showResultDataSize")," - If set to 'false' it the 'Result Data Size' column will be shown in the Study Admin page. Since calculating the result data can take some time on larger JATOS installations with a slow database, it can make sense to turn it off. Default is 'true'."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jatos.studyAdmin.showResultFileSize")," - If set to 'false' it the 'Result File Size' column will be shown in the Study Admin page. Since calculating the result file size can take some time on larger JATOS installations with slow disks, it can make sense to turn it off. Default is 'true'.")),(0,i.kt)("p",null,"Apart from those all ",(0,i.kt)("a",{parentName:"p",href:"https://www.playframework.com/documentation/latest/Configuration"},"configuration properties possible in the Play Framework")," are possible in JATOS' ",(0,i.kt)("em",{parentName:"p"},"production.conf")," too, e.g. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"play.pidfile.path")," - Path to the file that contains the process id of the started JATOS application (default is ",(0,i.kt)("inlineCode",{parentName:"li"},"./RUNNING_PID"),")")))}u.isMDXComponent=!0}}]);