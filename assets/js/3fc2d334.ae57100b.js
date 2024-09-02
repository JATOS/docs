"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1140],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>c});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return t?n.createElement(h,i(i({ref:a},m),{},{components:t})):n.createElement(h,i({ref:a},m))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11407:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(83117),r=(t(67294),t(3905));const o={title:"JATOS with MySQL",slug:"/JATOS-with-MySQL.html",sidebar_position:7},i=void 0,l={unversionedId:"Serving_the_Internet/JATOS-with-MySQL",id:"version-3.8.1/Serving_the_Internet/JATOS-with-MySQL",title:"JATOS with MySQL",description:"By default JATOS uses an embedded H2 database and no further setup is necessary but it can be easily configured to work with a MySQL or MariaDB database.",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-with-MySQL.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-with-MySQL.html",permalink:"/3.8.x/JATOS-with-MySQL.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-with-MySQL.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1725261939,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:7,frontMatter:{title:"JATOS with MySQL",slug:"/JATOS-with-MySQL.html",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"JATOS on AWS",permalink:"/3.8.x/JATOS-in-Amazons-Cloud-without-Docker.html"},next:{title:"Install JATOS via Docker",permalink:"/3.8.x/Install-JATOS-via-Docker.html"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Configure JATOS",id:"configure-jatos",level:2},{value:"Optional - Deactivate the binary log of your MySQL/MariaDB",id:"optional---deactivate-the-binary-log-of-your-mysqlmariadb",level:2},{value:"Optional - Increase <em>max_allowed_packet</em> size in older MySQL/MariaDB databases",id:"optional---increase-max_allowed_packet-size-in-older-mysqlmariadb-databases",level:2}],m={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default JATOS uses an embedded H2 database and no further setup is necessary but it can be easily configured to work with a MySQL or MariaDB database."),(0,r.kt)("p",null,"Possible scenarios why one would use an external database are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"your JATOS will be used by more than a few users (e.g. several research groups or an institute-wide installation)"),(0,r.kt)("li",{parentName:"ul"},"your JATOS will run studies with many participants"),(0,r.kt)("li",{parentName:"ul"},"the expected traffic is rather high (the studies produce a lot of result data)"),(0,r.kt)("li",{parentName:"ul"},"you want to be able to do a regular database backup (with the embedded H2 database this would involve stopping JATOS)"),(0,r.kt)("li",{parentName:"ul"},"higher trust in the reliability of MySQL/MariaDB")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"One could install the external database on the same machine as JATOS is running or on an extra machine depending on ones need."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JATOS requires MySQL >= 5.7 (8.x is fine). JATOS was tested with MariaDB 10.9.7 (other versions likely work too).")),(0,r.kt)("p",null,"There are many manuals out there, e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04"},"this one"),". One way to set up MySQL:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install MySQL"),(0,r.kt)("p",{parentName:"li"},"E.g. on Ubuntu"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install mysql-server\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to MySQL's command line terminal:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a database for JATOS:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Character set and collation are important - otherwise you won't have full UTF-8 support")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE DATABASE jatos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user for JATOS: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE USER 'jatosuser'@'localhost' IDENTIFIED BY 'myPassword';\n")),(0,r.kt)("p",{parentName:"li"},"Remember your username and password. You need them when configuring JATOS later on."),(0,r.kt)("p",{parentName:"li"},"Leave out the ",(0,r.kt)("inlineCode",{parentName:"p"},"@'localhost'")," part if the database is not on the same host.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant privileges to the new user:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GRANT ALL PRIVILEGES ON jatos.* TO 'jatosuser'@'localhost';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can test the new user: log out of MySQL with ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," and back in with the newly created user:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u jatosuser -p\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Appart from giving JATOS access to the database it is not necessary to create any tables - JATOS is doing this automatically.")),(0,r.kt)("p",null,"Now you have to configure JATOS to use your MySQL/MariaDB."),(0,r.kt)("h2",{id:"configure-jatos"},"Configure JATOS"),(0,r.kt)("p",null,"There are three ways to set up JATOS to work with a MySQL/MariaDB database."),(0,r.kt)("p",null,"The properties starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"db.default")," are ",(0,r.kt)("strong",{parentName:"p"},"deprecated")," and shouldn't be used anymore. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.db.*")," instead."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Change IP, port, username and password")," to the ones from your database. The ",(0,r.kt)("em",{parentName:"p"},"driver")," is always ",(0,r.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver")," for MySQL or MariaDB."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Always restart JATOS after making any changes to the configuration (e.g. with ",(0,r.kt)("inlineCode",{parentName:"strong"},"./loader.sh restart"),")")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via ",(0,r.kt)("strong",{parentName:"p"},"config file")," properties"),(0,r.kt)("p",{parentName:"li"},"The config file, named ",(0,r.kt)("em",{parentName:"p"},"jatos.conf")," or ",(0,r.kt)("em",{parentName:"p"},"production.conf"),", is located in the JATOS folder, in ",(0,r.kt)("em",{parentName:"p"},"./conf")," folder:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"in ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.conf")," (JATOS version >= 3.8.3) change the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.db.url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.db.username"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.db.password"),". The property ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.db.driver")," is always ",(0,r.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),"."),(0,r.kt)("p",{parentName:"li"}," Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'jatos.db.url = "jdbc:mysql://127.0.0.1:3306/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC"\njatos.db.username = "jatosuser"\njatos.db.password = "mypassword"\njatos.db.driver = "com.mysql.cj.jdbc.Driver"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"in ",(0,r.kt)("inlineCode",{parentName:"p"},"production.conf")," (JATOS version < 3.8.3) change the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"db.default.url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db.default.username"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"db.default.password"),". The property ",(0,r.kt)("inlineCode",{parentName:"p"},"db.default.driver")," is always ",(0,r.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via ",(0,r.kt)("strong",{parentName:"p"},"command-line")," arguments"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JATOS version >= 3.8.3) set the arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djatos.db.url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djatos.db.username"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djatos.db.password")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djatos.db.driver")," (always ",(0,r.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),")."),(0,r.kt)("p",{parentName:"li"}," Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'-Djatos.db.url = "jdbc:mysql://127.0.0.1:3306/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC"\n-Djatos.db.username = "jatosuser"\n-Djatos.db.password = "mypassword"\n-Djatos.db.driver = "com.mysql.cj.jdbc.Driver"\n')),(0,r.kt)("p",{parentName:"li"}," and use them together with JATOS start command ",(0,r.kt)("inlineCode",{parentName:"p"},"./loader start"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./loader.sh start \\\n   -Djatos.db.url = "jdbc:mysql://127.0.0.1:3306/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC" \\\n   -Djatos.db.username = "jatosuser" \\\n   -Djatos.db.password = "mypassword" \\\n   -Djatos.db.driver = "com.mysql.cj.jdbc.Driver"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JATOS version < 3.8.3) set the arguments ",(0,r.kt)("inlineCode",{parentName:"p"},"-Ddb.default.url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-Ddb.default.username"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Ddb.default.password")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-Ddb.default.driver")," (always ",(0,r.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),").")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via ",(0,r.kt)("strong",{parentName:"p"},"environment")," variables"),(0,r.kt)("p",{parentName:"li"},"Set the variables ",(0,r.kt)("inlineCode",{parentName:"p"},"JATOS_DB_URL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JATOS_DB_USERNAME"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JATOS_DB_PASSWORD"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"JATOS_DB_DRIVER")," (always ",(0,r.kt)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),")."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"JATOS_DB_URL=\"jdbc:mysql://127.0.0.1:3306/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC\"\nJATOS_DB_USERNAME='jatosuser'\nJATOS_DB_PASSWORD='mypassword'\nJATOS_DB_DRIVER='com.mysql.cj.jdbc.Driver'\n")))),(0,r.kt)("p",null,"You can confirm that JATOS is accessing the correct database by opening JATOS' ",(0,r.kt)("em",{parentName:"p"},"Administration")," page in a browser and then click on ",(0,r.kt)("em",{parentName:"p"},"System Info"),": The field ",(0,r.kt)("em",{parentName:"p"},"DB URL")," should resemble the one from your config. Another way is by looking in the logs: you should see a line after JATOS started similar to this (with your database URI):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"14:06:01.760 [info] - p.a.d.DefaultDBApi - Database [default] initialized at jdbc:mysql://localhost/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC\n")),(0,r.kt)("p",null,"Done. Your JATOS uses your MySQL/MariaDB now."),(0,r.kt)("h2",{id:"optional---deactivate-the-binary-log-of-your-mysqlmariadb"},"Optional - Deactivate the binary log of your MySQL/MariaDB"),(0,r.kt)("p",null,"The binary log (also called binlog) serves two purposes: replication and data recovery. More can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://mariadb.com/kb/en/binary-log/"},"MariaDB's documentation"),"."),(0,r.kt)("p",null,"The problem with binary logs is that they can take up quite some disk space depending on the experiments you run on your JATOS. The location of those log files is specified in MySQL/MariaDB's config but on many systems they are under ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/mysql"),". If you have a single database instance (and therefore do not use replication) and you do not need data recovery (e.g. have a different backup mechanism) than it is safe to deactivate the binary logs. "),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"skip-log-bin")," to the end of your MySQL/MariaDB config (",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#option_mysqld_log-bin"},"details"),"). On many Linux systems the config is in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mysql/mysql.conf.d/mysqld.cnf"),"."),(0,r.kt)("p",null,"The part of your ",(0,r.kt)("em",{parentName:"p"},"mysqld.cnf")," that configures the binary logs could then look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# The following can be used as easy to replay backup logs or for replication.\n# note: if you are setting up a replication slave, see README.Debian about\n#       other settings you may need to change.\n# server-id             = 1\n# log_bin                       = /var/log/mysql/mysql-bin.log\n# binlog_expire_logs_seconds    = 2592000\n# max_binlog_size   = 100M\n# binlog_do_db          = include_database_name\n# binlog_ignore_db      = include_database_name\nskip-log-bin\n")),(0,r.kt)("p",null,"You have to restart MySQL/MariaDB for the changes to take effect."),(0,r.kt)("h2",{id:"optional---increase-max_allowed_packet-size-in-older-mysqlmariadb-databases"},"Optional - Increase ",(0,r.kt)("em",{parentName:"h2"},"max_allowed_packet")," size in older MySQL/MariaDB databases"),(0,r.kt)("p",null,"If you have an older MySQL (< 8.x.x) and your experiments will have large result data you might want to increase the ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_allowed_packet"},"max_allowed_packet"))," size. If your result data is larger than the ",(0,r.kt)("em",{parentName:"p"},"max_allowed_packet")," JATOS will just return an 'internal server error'. In JATOS' log in will look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ERROR] - g.ErrorHandler - Internal JATOS error\n[ERROR] - o.h.e.j.s.SqlExceptionHelper - Packet for query is too large (5,920,824 > 4,194,304). You can change this value on the server by setting the 'max_allowed_packet' variable.\n[WARN] - o.h.e.j.s.SqlExceptionHelper - SQL Error: 0, SQLState: S1000\n")),(0,r.kt)("p",null,"In MySQL, from 8.x.x on, the ",(0,r.kt)("em",{parentName:"p"},"max_allowed_packet")," is by default 64MB and this is usually more than enough. But in MySQL versions before 8 it is just 4MB by default and before 5.6.6 it's just 1MB.  "),(0,r.kt)("p",null,"To increase the ",(0,r.kt)("em",{parentName:"p"},"max_allowed_packet")," size just add it to the end of your MySQL/MariaDB config. On many Linux systems the config is in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mysql/mysql.conf.d/mysqld.cnf"),". E.g. to set it to 64MB:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"max_allowed_packet=64M\n")),(0,r.kt)("p",null,"You have to restart the database for the changes to take effect."))}d.isMDXComponent=!0}}]);