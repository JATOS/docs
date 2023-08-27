"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(83117),o=(n(67294),n(3905));const r={title:"JATOS with Docker Compose",slug:"/JATOS-with-Docker-Compose.html",sidebar_position:9},i=void 0,s={unversionedId:"Serving_the_Internet/JATOS-with-Docker-Compose",id:"version-3.8.1/Serving_the_Internet/JATOS-with-Docker-Compose",title:"JATOS with Docker Compose",description:"Docker Compose offers an easy way to set up a JATOS installation with a MySQL database and Nginx as an reverse proxy for, among other things, HTTPS encryption.",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-with-Docker-Compose.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-with-Docker-Compose.html",permalink:"/JATOS-with-Docker-Compose.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-with-Docker-Compose.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1693166021,formattedLastUpdatedAt:"Aug 27, 2023",sidebarPosition:9,frontMatter:{title:"JATOS with Docker Compose",slug:"/JATOS-with-Docker-Compose.html",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Install JATOS via Docker",permalink:"/Install-JATOS-via-Docker.html"},next:{title:"JATOS in a cluster",permalink:"/JATOS-in-a-cluster.html"}},l={},p=[{value:"Get started",id:"get-started",level:2},{value:"Example repository",id:"example-repository",level:3},{value:"Up",id:"up",level:3},{value:"Check that it runs",id:"check-that-it-runs",level:3},{value:"Nginx configuration",id:"nginx-configuration",level:2},{value:"Use your own certificate (for HTTPS)",id:"use-your-own-certificate-for-https",level:3},{value:"MySQL configuration",id:"mysql-configuration",level:2},{value:"JATOS configuration",id:"jatos-configuration",level:2},{value:"Debugging and logging",id:"debugging-and-logging",level:3},{value:"Using <em>jatos.conf</em>",id:"using-jatosconf",level:3},{value:"Updating JATOS with Docker Compose",id:"updating-jatos-with-docker-compose",level:2},{value:"Running JATOS on multiple nodes",id:"running-jatos-on-multiple-nodes",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},(0,o.kt)("em",{parentName:"a"},"Docker Compose"))," offers an easy way to set up a JATOS installation with a MySQL database and Nginx as an reverse proxy for, among other things, HTTPS encryption. "),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("h3",{id:"example-repository"},"Example repository"),(0,o.kt)("p",null,"We assembled all necessary files in a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_docker_compose"},"git repository")," that you can clone and then change them to your needs to get a JATOS installation running with ",(0,o.kt)("em",{parentName:"p"},"docker compose"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/JATOS/JATOS_with_docker_compose.git\n")),(0,o.kt)("p",null,"The important files in the repo are ",(0,o.kt)("em",{parentName:"p"},"compose.yaml")," to set up ",(0,o.kt)("em",{parentName:"p"},"docker compose"),", nginx.conf for Nginx, and jatos.conf for JATOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"JATOS_with_docker_compose\n\u251c\u2500\u2500 compose.yaml\n\u251c\u2500\u2500 nginx.conf\n\u251c\u2500\u2500 jatos.conf\n\u2514\u2500\u2500 ...\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"docker compose")," file ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_docker_compose/blob/main/compose.yaml"},(0,o.kt)("em",{parentName:"a"},"compose.yaml"))," starts three services:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Nginx as a reverse proxy that does encryption (HTTPS)"),(0,o.kt)("li",{parentName:"ol"},"JATOS"),(0,o.kt)("li",{parentName:"ol"},"A MySQL database")),(0,o.kt)("p",null,"Additionally it creates three shared ",(0,o.kt)("em",{parentName:"p"},"volumes"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"jatos-data")," - stores JATOS' data folders: ",(0,o.kt)("em",{parentName:"li"},"study assets"),", ",(0,o.kt)("em",{parentName:"li"},"result uploads"),", ",(0,o.kt)("em",{parentName:"li"},"study logs")," and JATOS' ",(0,o.kt)("em",{parentName:"li"},"tmp")," folder"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"jatos-logs")," - for JATOS logs (not necessary if you log to ",(0,o.kt)("em",{parentName:"li"},"stdout"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"jatos-db")," - where MySQL stores its data")),(0,o.kt)("h3",{id:"up"},"Up"),(0,o.kt)("p",null,"Go into the cloned folder and start the services with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose -f compose.yaml up\n")),(0,o.kt)("p",null,"If everything went smoothly, you will now see the JATOS login page under: ",(0,o.kt)("a",{parentName:"p",href:"https://localhost/"},"https://localhost/")),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," you can stop the services. Removing the stopped containers can be achieved with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose -f compose.yaml down")," and additionally removing all the ",(0,o.kt)("em",{parentName:"p"},"volumes")," by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," flag: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose -f compose.yaml down -v"),"."),(0,o.kt)("h3",{id:"check-that-it-runs"},"Check that it runs"),(0,o.kt)("p",null,"First visit the JATOS admin page: ",(0,o.kt)("a",{parentName:"p",href:"https://localhost/jatos/admin"},"https://localhost/jatos/admin"),". There, check that all ",(0,o.kt)("em",{parentName:"p"},"Tests")," are OK. Also check that the ",(0,o.kt)("em",{parentName:"p"},"System Info")," contains the configuration you intended."),(0,o.kt)("p",null,"Next, you can import a study (e.g. one from the ",(0,o.kt)("a",{parentName:"p",href:"/Example-Studies"},"Example Studies"),") and check if it runs well. Check, for example, that the result data appear in the results page."),(0,o.kt)("p",null,"Last but not least: Check that all data are persisted: First, stop and remove the containers (but not the ",(0,o.kt)("em",{parentName:"p"},"volumes"),"!) with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose -f compose.yaml down"),". Then, restart the services with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose -f compose.yaml up"),". Now check that all studies and their result data are still there."),(0,o.kt)("h2",{id:"nginx-configuration"},"Nginx configuration"),(0,o.kt)("p",null,"Have a look at ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-with-Nginx.html"},(0,o.kt)("em",{parentName:"a"},"JATOS with Nginx"))," and configure Nginx to your needs. The file ",(0,o.kt)("em",{parentName:"p"},"nginx.conf")," in our repo is mounted in Nginx' container and will be used by Nginx."),(0,o.kt)("h3",{id:"use-your-own-certificate-for-https"},"Use your own certificate (for HTTPS)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The certificate used here in this example setup is self-signed and utterly insecure"),". The certificate files are mounted as ",(0,o.kt)("em",{parentName:"p"},"volumes")," in the ",(0,o.kt)("em",{parentName:"p"},"proxy")," service. You might have to change the file names (and paths) in ",(0,o.kt)("em",{parentName:"p"},"nginx.conf")," too. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"volumes:\n    - ./nginx-selfsigned.crt:/etc/ssl/certs/nginx-selfsigned.crt:ro\n    - ./nginx-selfsigned.key:/etc/ssl/private/nginx-selfsigned.key:ro\n")),(0,o.kt)("h2",{id:"mysql-configuration"},"MySQL configuration"),(0,o.kt)("p",null,"The following changes should be done in the ",(0,o.kt)("em",{parentName:"p"},"compose.yaml"),":"),(0,o.kt)("p",null,"Search and set ",(0,o.kt)("inlineCode",{parentName:"p"},"JATOS_DB_PASSWORD")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MYSQL_PASSWORD")," to the ",(0,o.kt)("strong",{parentName:"p"},"same")," password of your choice."),(0,o.kt)("p",null,"Search and set ",(0,o.kt)("inlineCode",{parentName:"p"},"MYSQL_ROOT_PASSWORD"),", MySQL's root password to one chosen by you."),(0,o.kt)("p",null,"Consider to ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-with-MySQL.html#optional---deactivate-the-binary-log-of-your-mysqlmariadb"},"turn off MySQL's binary log")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-log-bin")," in ",(0,o.kt)("em",{parentName:"p"},"db"),"'s ",(0,o.kt)("em",{parentName:"p"},"command")," section."),(0,o.kt)("p",null,"Check ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-with-MySQL.html"},(0,o.kt)("em",{parentName:"a"},"JATOS with MySQL"))," for more information."),(0,o.kt)("h2",{id:"jatos-configuration"},"JATOS configuration"),(0,o.kt)("p",null,"Have a look at ",(0,o.kt)("a",{parentName:"p",href:"/JATOS_Configuration.html"},(0,o.kt)("em",{parentName:"a"},"JATOS Configuration")),"."),(0,o.kt)("p",null,"Change the image version in the ",(0,o.kt)("em",{parentName:"p"},"compose.yaml")," to the one you need (e.g. the latest one)."),(0,o.kt)("p",null,"Always change the admin's password after first installation: Go to ",(0,o.kt)("a",{parentName:"p",href:"https://localhost/jatos/user/admin"},"https://localhost/jatos/user/admin")," and and press button ",(0,o.kt)("em",{parentName:"p"},"Change Password"),"."),(0,o.kt)("h3",{id:"debugging-and-logging"},"Debugging and logging"),(0,o.kt)("p",null,"You can redirect JATOS logs to ",(0,o.kt)("em",{parentName:"p"},"stdout")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"-Djatos.logs.appender=ASYNCSTDOUT")," in the ",(0,o.kt)("em",{parentName:"p"},"command")," section of the ",(0,o.kt)("em",{parentName:"p"},"jatos")," service - or write the logs to a file with ",(0,o.kt)("inlineCode",{parentName:"p"},"-Djatos.logs.appender=ASYNCFILE")," (which is actually the default and you can just leave it out). Logging to ",(0,o.kt)("em",{parentName:"p"},"stdout")," is useful for debugging and is also used in advanced logging solutions. If you log to ",(0,o.kt)("em",{parentName:"p"},"stdout")," you don't need an extra log ",(0,o.kt)("em",{parentName:"p"},"volume")," and you can remove ",(0,o.kt)("em",{parentName:"p"},"jatos-logs"),"."),(0,o.kt)("h3",{id:"using-jatosconf"},"Using ",(0,o.kt)("em",{parentName:"h3"},"jatos.conf")),(0,o.kt)("p",null,"JATOS can be configured either by ",(0,o.kt)("em",{parentName:"p"},"command")," parameters (the ones with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-D")," prefix) in the ",(0,o.kt)("em",{parentName:"p"},"compose.yaml")," or with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_docker_compose/blob/main/jatos.conf"},(0,o.kt)("em",{parentName:"a"},"jatos.conf"))," configuration file. You can also set up some environment variables (like the ",(0,o.kt)("inlineCode",{parentName:"p"},"JATOS_DB_PASSWORD"),"). In the end it's up to you which way you prefer."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"jatos.conf")," file is mounted as a ",(0,o.kt)("em",{parentName:"p"},"volume")," in the JATOS container. This way you can comfortably edit your ",(0,o.kt)("em",{parentName:"p"},"jatos.conf")," outside of the container."),(0,o.kt)("p",null,"More about ",(0,o.kt)("a",{parentName:"p",href:"JATOS_Configuration.html"},"JATOS' Configuration with all possible parameters"),"."),(0,o.kt)("h2",{id:"updating-jatos-with-docker-compose"},"Updating JATOS with Docker Compose"),(0,o.kt)("p",null,"The easiest way to update a JATOS instance running with this setup ",(0,o.kt)("strong",{parentName:"p"},"with external data volumes")," is to ",(0,o.kt)("strong",{parentName:"p"},"just change the JATOS' Docker image tag to a higher version and restart the services"),". No need to use ",(0,o.kt)("a",{parentName:"p",href:"/Update-JATOS.html#automatic-update"},"JATOS' auto-updater"),". JATOS is only allowed to update to higher version numbers - downgrading will likely break your installation. And please do backups before updating."),(0,o.kt)("h2",{id:"running-jatos-on-multiple-nodes"},"Running JATOS on multiple nodes"),(0,o.kt)("p",null,"Have a look at ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-in-a-cluster.html"},"JATOS in a cluster"),"."))}c.isMDXComponent=!0}}]);