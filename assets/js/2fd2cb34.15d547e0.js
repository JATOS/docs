"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const o={title:"Install JATOS via Docker",slug:"/Install-JATOS-via-Docker.html",sidebar_position:8},l=void 0,i={unversionedId:"Serving_the_Internet/Install-JATOS-via-Docker",id:"version-3.7.1/Serving_the_Internet/Install-JATOS-via-Docker",title:"Install JATOS via Docker",description:"JATOS' Docker images are hosted at hub.docker.com/r/jatos/jatos/.",source:"@site/versioned_docs/version-3.7.1/Serving_the_Internet/Install-JATOS-via-Docker.md",sourceDirName:"Serving_the_Internet",slug:"/Install-JATOS-via-Docker.html",permalink:"/3.7.x/Install-JATOS-via-Docker.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.7.1/Serving_the_Internet/Install-JATOS-via-Docker.md",tags:[],version:"3.7.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1696160201,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:8,frontMatter:{title:"Install JATOS via Docker",slug:"/Install-JATOS-via-Docker.html",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"JATOS with MySQL",permalink:"/3.7.x/JATOS-with-MySQL.html"},next:{title:"JATOS with Nginx",permalink:"/3.7.x/JATOS-with-Nginx.html"}},s={},c=[{value:"Install JATOS locally with a Docker container",id:"install-jatos-locally-with-a-docker-container",level:3},{value:"Change port",id:"change-port",level:3},{value:"Configure with environment variables",id:"configure-with-environment-variables",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JATOS' Docker images are hosted at ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/jatos/jatos/"},"hub.docker.com/r/jatos/jatos/"),"."),(0,r.kt)("p",null,"Docker is a great technology, but if you never heard of it you can safely ignore this page (it's not necessary to use it if you want to install JATOS, either locally or on a server). "),(0,r.kt)("p",null,"Since 3.7.4 Docker images for JATOS exist for ",(0,r.kt)("em",{parentName:"p"},"arm64")," and ",(0,r.kt)("em",{parentName:"p"},"amd64")," CPU architectures."),(0,r.kt)("h3",{id:"install-jatos-locally-with-a-docker-container"},"Install JATOS locally with a Docker container"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Docker locally on your computer (not covered here)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to your shell or command line interface")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pull JATOS image"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"either latest:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker pull jatos/jatos:latest\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"or a specific one (exchange ",(0,r.kt)("em",{parentName:"li"},"x.x.x")," with the version):")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull jatos/jatos:x.x.x\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run JATOS (use your image version)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 9000:9000 jatos/jatos:latest\n")),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," argument specifies to run this container in detached mode (in the backgroud) and the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," is responsible for the port mapping.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can check that the new container is running: In your browser go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000"},"localhost:9000")," - it should show the JATOS login screen. Or use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," - in the line with ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos/jatos")," the status should say ",(0,r.kt)("inlineCode",{parentName:"p"},"up"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Troubleshooting"),": By removing the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," argument (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -p 9000:9000 jatos/jatos:latest"),") you get JATOS' logs printed in your shell - although you don't run it in detached mode in the background anymore."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Troubleshooting 2nd"),": Although usually not necessary maybe you want to have a look into the running container and start a Bash terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it running-jatos-container-id /bin/bash\n")),(0,r.kt)("h3",{id:"change-port"},"Change port"),(0,r.kt)("p",null,"With Docker you can easily change JATOS' port (actually we change the port mapping of JATOS' docker container). Just use Docker ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," argument and specify your port. E.g. to run JATOS on standard HTTP port 80 use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 80:9000 jatos/jatos:latest\n")),(0,r.kt)("h3",{id:"configure-with-environment-variables"},"Configure with environment variables"),(0,r.kt)("p",null,"All environment variables that can be used to ",(0,r.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html"},"configure a normal JATOS server installation")," can be used in a docker installation. Just use Docker's ",(0,r.kt)("inlineCode",{parentName:"p"},"-e")," argument to set them."),(0,r.kt)("p",null,"E.g. to run JATOS with a MySQL database running on a host with the IP ",(0,r.kt)("inlineCode",{parentName:"p"},"172.17.0.2")," and with the default port 3306 use the following command (change username and password of your MySQL account):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -e JATOS_DB_URL='jdbc:mysql://172.17.0.2/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC' -e JATOS_DB_USERNAME='root' -e JATOS_DB_PASSWORD='password' -e JATOS_DB_DRIVER=com.mysql.cj.jdbc.Driver -e JATOS_JPA=mysqlPersistenceUnit -p 9000:9000 jatos/jatos:latest\n")))}u.isMDXComponent=!0}}]);