"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[9002],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},687:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=a(3117),r=(a(7294),a(3905));const o={title:"Install JATOS via Docker",slug:"/Install-JATOS-via-Docker.html",sidebar_position:8},l=void 0,i={unversionedId:"Serving_the_Internet/Install-JATOS-via-Docker",id:"version-3.8.1/Serving_the_Internet/Install-JATOS-via-Docker",title:"Install JATOS via Docker",description:"JATOS' Docker images are hosted at hub.docker.com/r/jatos/jatos/.",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/Install-JATOS-via-Docker.md",sourceDirName:"Serving_the_Internet",slug:"/Install-JATOS-via-Docker.html",permalink:"/Install-JATOS-via-Docker.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Serving_the_Internet/Install-JATOS-via-Docker.md",tags:[],version:"3.8.1",lastUpdatedBy:"kristian",lastUpdatedAt:1689279919,formattedLastUpdatedAt:"Jul 13, 2023",sidebarPosition:8,frontMatter:{title:"Install JATOS via Docker",slug:"/Install-JATOS-via-Docker.html",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"JATOS with MySQL",permalink:"/JATOS-with-MySQL.html"},next:{title:"JATOS with Docker Compose",permalink:"/JATOS-with-Docker-Compose.html"}},s={},c=[{value:"Installation with Docker",id:"installation-with-docker",level:2},{value:"Debugging and Troubleshooting",id:"debugging-and-troubleshooting",level:2},{value:"Change port",id:"change-port",level:2},{value:"Configuration with Docker",id:"configuration-with-docker",level:2},{value:"Via arguments",id:"via-arguments",level:3},{value:"Via environment variables",id:"via-environment-variables",level:3},{value:"Via configuration file",id:"via-configuration-file",level:3},{value:"Persist data with <em>volumes</em>",id:"persist-data-with-volumes",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JATOS' Docker images are hosted at ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/jatos/jatos/"},"hub.docker.com/r/jatos/jatos/"),"."),(0,r.kt)("p",null,"Docker is a great technology, but if you never heard of it you can safely ignore this page (it's not necessary to use it if you want to install JATOS, either locally or on a server). "),(0,r.kt)("p",null,"Also have a look at ",(0,r.kt)("a",{parentName:"p",href:"/JATOS-with-Docker-Compose.html"},"JATOS with Docker Compose")," for some advanced Docker setup."),(0,r.kt)("h2",{id:"installation-with-docker"},"Installation with Docker"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your terminal:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Get the latest release:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull jatos/jatos:latest\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or a specific ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JATOS/JATOS/releases"},"release")," (exchange ",(0,r.kt)("em",{parentName:"li"},"x.x.x")," with the version):")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull jatos/jatos:x.x.x\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run JATOS (change ",(0,r.kt)("em",{parentName:"p"},"latest")," to your version)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 9000:9000 jatos/jatos:latest\n")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," argument specifies to run this container in detached mode (in the background) and the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," is responsible for the port mapping.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can check that the new container is running correctly:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"docker ps")," in the terminal: in the line with ",(0,r.kt)("inlineCode",{parentName:"li"},"jatos/jatos")," the status should say ",(0,r.kt)("inlineCode",{parentName:"li"},"up")),(0,r.kt)("li",{parentName:"ul"},"Use curl: ",(0,r.kt)("inlineCode",{parentName:"li"},"curl http://localhost:9000/ping")," should give you ",(0,r.kt)("inlineCode",{parentName:"li"},"pong")," back"),(0,r.kt)("li",{parentName:"ul"},"In a browser go to ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:9000"},"localhost:9000")," - it should show the JATOS login screen"),(0,r.kt)("li",{parentName:"ul"},"Check JATOS' admin page: ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:9000/jatos/admin"},"localhost:9000/jatos/admin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run the ",(0,r.kt)("em",{parentName:"li"},"Tests"),": all should show an 'OK'"),(0,r.kt)("li",{parentName:"ul"},"Check the ",(0,r.kt)("em",{parentName:"li"},"System Info")," that it is all like you configured it")))))),(0,r.kt)("h2",{id:"debugging-and-troubleshooting"},"Debugging and Troubleshooting"),(0,r.kt)("p",null,"To get the logs add the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djatos.logs.appender=ASYNCSTDOUT")," and run the container not detached:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 9000:9000 jatos/jatos:latest -Djatos.logs.appender=ASYNCSTDOUT\n")),(0,r.kt)("h2",{id:"change-port"},"Change port"),(0,r.kt)("p",null,"With Docker you can easily change JATOS' port (actually we change the port mapping of JATOS' Docker container). Just use ",(0,r.kt)("em",{parentName:"p"},"docker"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," argument and specify your port. E.g. to run JATOS on standard HTTP port 80 use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 80:9000 jatos/jatos:latest\n")),(0,r.kt)("h2",{id:"configuration-with-docker"},"Configuration with Docker"),(0,r.kt)("p",null,"JATOS running in a Docker container can be configured the same way as running it the normal way: via a configuration file, via environment variables, or command line arguments. Have a look at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/Configure-JATOS-on-a-Server.html"},"Configure JATOS on a Server")," for the possibilities."),(0,r.kt)("h3",{id:"via-arguments"},"Via arguments"),(0,r.kt)("p",null,"Add as many arguments to the end of the ",(0,r.kt)("em",{parentName:"p"},"docker")," command as you wish."),(0,r.kt)("p",null,"E.g. to run JATOS with a MySQL database running on localhost (not in a container), with the default port 3306, use the following command (change username and password to your MySQL user):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --network=\"host\" jatos/jatos:latest \\\n    -Djatos.db.url='jdbc:mysql://localhost/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC' \\\n    -Djatos.db.username='jatosuser' \\\n    -Djatos.db.password='my-password' \\\n    -Djatos.db.driver='com.mysql.cj.jdbc.Driver'    \n")),(0,r.kt)("h3",{id:"via-environment-variables"},"Via environment variables"),(0,r.kt)("p",null,"All environment variables that can be used to ",(0,r.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html"},"configure a normal JATOS server installation")," can be used in a Docker installation. Just use ",(0,r.kt)("em",{parentName:"p"},"docker"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," argument to set them."),(0,r.kt)("p",null,"E.g. to run JATOS with a MySQL database running on localhost (not in a container), with the default port 3306, use the following command (change username and password to your MySQL user):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --network=\"host\" \\\n    -e JATOS_DB_URL='jdbc:mysql://localhost/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC' \\\n    -e JATOS_DB_USERNAME='jatosuser' \\\n    -e JATOS_DB_PASSWORD='my-password' \\\n    -e JATOS_DB_DRIVER='com.mysql.cj.jdbc.Driver' \\\n    jatos/jatos:latest\n")),(0,r.kt)("h3",{id:"via-configuration-file"},"Via configuration file"),(0,r.kt)("p",null,"You can mount a configuration file (",(0,r.kt)("em",{parentName:"p"},"jatos.conf"),") as a Docker volume in the container. This way you can comfortably edit the ",(0,r.kt)("em",{parentName:"p"},"jatos.conf")," in your local file system."),(0,r.kt)("p",null,"E.g. with a ",(0,r.kt)("em",{parentName:"p"},"jatos.conf")," in the current working directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 9000:9000 --volume ./jatos.conf:/opt/jatos/conf/jatos.conf:ro jatos/jatos:latest\n")),(0,r.kt)("h2",{id:"persist-data-with-volumes"},"Persist data with ",(0,r.kt)("em",{parentName:"h2"},"volumes")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Volumes")," are the preferred way to persist data with Docker containers. This can be useful if one wants to exchange data between containers or do backups."),(0,r.kt)("p",null,"Before using a ",(0,r.kt)("em",{parentName:"p"},"volume")," one has to create it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker volume create --name jatos_data\n")),(0,r.kt)("p",null,"In JATOS' Docker container all data are stored, by default, in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/jatos_data")," (although this can be configured). Now you can mount the newly created ",(0,r.kt)("em",{parentName:"p"},"volume")," ",(0,r.kt)("em",{parentName:"p"},"jatos_data")," at this location:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 9000:9000 --volume jatos_data:/opt/jatos_data jatos/jatos:latest\n")))}p.isMDXComponent=!0}}]);