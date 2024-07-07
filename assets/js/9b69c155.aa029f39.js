"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3719],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const o={title:"JATOS with MySQL",slug:"/JATOS-with-MySQL.html",sidebar_position:7},i=void 0,l={unversionedId:"Serving_the_Internet/JATOS-with-MySQL",id:"version-3.6.1/Serving_the_Internet/JATOS-with-MySQL",title:"JATOS with MySQL",description:"By default JATOS uses an embedded H2 database and no further setup is necessary but it can be easily configured to work with a MySQL database.",source:"@site/versioned_docs/version-3.6.1/Serving_the_Internet/JATOS-with-MySQL.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-with-MySQL.html",permalink:"/3.6.x/JATOS-with-MySQL.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.6.1/Serving_the_Internet/JATOS-with-MySQL.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1720351555,formattedLastUpdatedAt:"Jul 7, 2024",sidebarPosition:7,frontMatter:{title:"JATOS with MySQL",slug:"/JATOS-with-MySQL.html",sidebar_position:7},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Configure JATOS on a Server",permalink:"/3.6.x/Configure-JATOS-on-a-Server.html"},next:{title:"JATOS with Nginx",permalink:"/3.6.x/JATOS-with-Nginx.html"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Configure JATOS",id:"configure-jatos",level:2},{value:"Optional Deactivate MySQL&#39;s binary log",id:"optional-deactivate-mysqls-binary-log",level:2},{value:"Optional Increase &#39;max_allowed_packet&#39; size in older MySQLs",id:"optional-increase-max_allowed_packet-size-in-older-mysqls",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default JATOS uses an embedded H2 database and no further setup is necessary but it can be easily configured to work with a MySQL database."),(0,r.kt)("p",null,"Possible scenarios why one would use an external database are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"your JATOS will be used by more than a few users (e.g. several research groups or an institute-wide installation)"),(0,r.kt)("li",{parentName:"ul"},"your JATOS will run studies with many participants"),(0,r.kt)("li",{parentName:"ul"},"the expected traffic is rather high (the studies produce a lot of result data)"),(0,r.kt)("li",{parentName:"ul"},"you want to be able to do a regular database backup (with the embedded H2 database this would involve stopping JATOS)"),(0,r.kt)("li",{parentName:"ul"},"higher trust in the reliability of MySQL (although we had no problems with H2 so far)")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"One could install the external database on the same server as JATOS is running or on an extra server depending on ones need."),(0,r.kt)("p",null,"There are many manuals out there, e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04"},"this one"),". One way to set up MySQL:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install MySQL, e.g. on Ubuntu"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"JATOS requires MySQL >= 5.7 (8.x is fine)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install mysql-server\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to MySQL's command line terminal:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a database for JATOS:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Character set and collation are important - otherwise you won't have full UTF-8 support")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE DATABASE jatos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user for JATOS: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CREATE USER 'jatosuser'@'localhost' IDENTIFIED BY 'myPassword';\n")),(0,r.kt)("p",{parentName:"li"},"Remember your username and password. You need them when configuring JATOS later on.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant privileges to the new user:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GRANT ALL PRIVILEGES ON jatos.* TO 'jatosuser'@'localhost';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can test the new user: log out of MySQL with ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," and back in with the newly created user:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u jatosuser -p\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Appart from giving JATOS access to the database it is not necessary to create any tables - JATOS is doing this automatically.")),(0,r.kt)("p",null,"Now you have to configure JATOS to use your MySQL."),(0,r.kt)("h2",{id:"configure-jatos"},"Configure JATOS"),(0,r.kt)("p",null,"There are three ways to set up JATOS to work with a MySQL database. If you are in doubt use 'production.conf'."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via JATOS config file which is in your JATOS folder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf")," folder: ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")),(0,r.kt)("p",{parentName:"li"},"Change IP, port, username and password to your needs."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'db.default.url="jdbc:mysql://127.0.0.1:3306/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC"\ndb.default.user="jatosuser"\ndb.default.password="mypassword"\ndb.default.driver=com.mysql.cj.jdbc.Driver\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Always restart JATOS after making any changes to the configuration (e.g. with ",(0,r.kt)("inlineCode",{parentName:"strong"},"./loader.sh restart"),")"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via command-line arguments:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-DJATOS_DB_URL")," - specifies the URL to the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-DJATOS_DB_USERNAME")," - set your username"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-DJATOS_DB_PASSWORD")," - set your password"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-DJATOS_DB_DRIVER")," - always ",(0,r.kt)("inlineCode",{parentName:"li"},"com.mysql.cj.jdbc.Driver")," for MySQL")),(0,r.kt)("p",{parentName:"li"},"E.g. to connect to a MySQL running on 127.0.0.1 and port 3306 use (but change username and password):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"loader.sh start -DJATOS_DB_URL='jdbc:mysql://127.0.0.1:3306/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC' -DJATOS_DB_USERNAME=sa -DJATOS_DB_PASSWORD=sa -DJATOS_DB_DRIVER=com.mysql.cj.jdbc.Driver\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via environment variables (change IP, port, username and password)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export JATOS_DB_URL=\"jdbc:mysql://127.0.0.1:3306/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC\"\nexport JATOS_DB_USERNAME=jatosuser\nexport JATOS_DB_PASSWORD='mypassword'\nexport JATOS_DB_DRIVER=com.mysql.cj.jdbc.Driver\n")))),(0,r.kt)("p",null,"You can confirm that JATOS is accessing the correct database by opening JATOS' ",(0,r.kt)("em",{parentName:"p"},"Administration")," page in a browser and then click on ",(0,r.kt)("em",{parentName:"p"},"System Info"),": The field ",(0,r.kt)("em",{parentName:"p"},"DB URL")," should resemble the one from your config. In older JATOS versions you can find this ",(0,r.kt)("em",{parentName:"p"},"DB URL")," field under '/jatos/test'. Another way is by looking in the logs: you should see a line after JATOS started similar to this (with your database URI):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"14:06:01.760 [info] - p.a.d.DefaultDBApi - Database [default] initialized at jdbc:mysql://localhost/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC\n")),(0,r.kt)("p",null,"Done. Your JATOS uses your MySQL now."),(0,r.kt)("h2",{id:"optional-deactivate-mysqls-binary-log"},"[Optional]"," Deactivate MySQL's binary log"),(0,r.kt)("p",null,"MySQL's binary logs (also called binlogs) serve two purposes: replication and data recovery. More can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/internals/en/binary-log-overview.html#:~:text=The%20binary%20log%20is%20a,14."},"MySQLs documentation"),"."),(0,r.kt)("p",null,"The problem with binary logs is that they can take up quite some disk space depending on the experiments you run on your JATOS. The location of those log files is specified in MySQL's config but on many systems they are under ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/lib/mysql"),". If you have a single MySQL instance (and therefore do not use replication) and you do not need MySQL's data recovery (e.g. have a different backup mechanism) than it is safe to deactivate the binary logs. "),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"skip-log-bin")," to the end of your MySQL config (",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-options-binary-log.html#option_mysqld_log-bin"},"details"),"). On many Linux systems the config is in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mysql/mysql.conf.d/mysqld.cnf"),"."),(0,r.kt)("p",null,"The part of your 'mysqld.cnf' that configures the binary logs could then look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# The following can be used as easy to replay backup logs or for replication.\n# note: if you are setting up a replication slave, see README.Debian about\n#       other settings you may need to change.\n# server-id             = 1\n# log_bin                       = /var/log/mysql/mysql-bin.log\n# binlog_expire_logs_seconds    = 2592000\n# max_binlog_size   = 100M\n# binlog_do_db          = include_database_name\n# binlog_ignore_db      = include_database_name\nskip-log-bin\n")),(0,r.kt)("p",null,"You have to restart MySQL for the changes to take effect."),(0,r.kt)("h2",{id:"optional-increase-max_allowed_packet-size-in-older-mysqls"},"[Optional]"," Increase 'max_allowed_packet' size in older MySQLs"),(0,r.kt)("p",null,"If you have an older MySQL (< 8.x.x) and your experiments will have large resut data you might want to increase the '",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_max_allowed_packet"},"max_allowed_packet"),"' size. If your result data is larger than the 'max_allowed_packet' JATOS will just return an 'internal server error'. In JATOS' log in will look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ERROR] - g.ErrorHandler - Internal JATOS error\n[ERROR] - o.h.e.j.s.SqlExceptionHelper - Packet for query is too large (5,920,824 > 4,194,304). You can change this value on the server by setting the 'max_allowed_packet' variable.\n[WARN] - o.h.e.j.s.SqlExceptionHelper - SQL Error: 0, SQLState: S1000\n")),(0,r.kt)("p",null,"From 8.x.x the 'max_allowed_packet' is by default 64MB and this is usually more than enough. But in version smaller than 8.x.x it is just 4MB by default and before 5.6.6 it's just 1MB.  "),(0,r.kt)("p",null,"To increase the 'max_allowed_packet' size just add it to the end of your MySQL config. On many Linux systems the config is in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mysql/mysql.conf.d/mysqld.cnf"),". E.g. to set it to 64MB:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"max_allowed_packet=64M\n")),(0,r.kt)("p",null,"You have to restart MySQL for the changes to take effect."))}m.isMDXComponent=!0}}]);