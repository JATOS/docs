"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7758],{89164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(83117),o=(a(67294),a(3905)),r=a(22004);const i={title:"JATOS on DigitalOcean",slug:"/JATOS-on-DigitalOcean.html",sidebar_position:5},s=void 0,l={unversionedId:"Serving_the_Internet/JATOS-on-DigitalOcean",id:"version-3.9.1/Serving_the_Internet/JATOS-on-DigitalOcean",title:"JATOS on DigitalOcean",description:"Here we explain how to install JATOS in the cloud by using DigitalOcean. DigitalOcean is a cloud provider (like AWS, Google Cloud, Azure etc.). We provide this example because DigitalOcean is comparatively easy to use and has good documentation - but we have no connection to DigitalOcean whatsoever.",source:"@site/versioned_docs/version-3.9.1/Serving_the_Internet/JATOS-on-DigitalOcean.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-on-DigitalOcean.html",permalink:"/JATOS-on-DigitalOcean.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/Serving_the_Internet/JATOS-on-DigitalOcean.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1720351555,formattedLastUpdatedAt:"Jul 7, 2024",sidebarPosition:5,frontMatter:{title:"JATOS on DigitalOcean",slug:"/JATOS-on-DigitalOcean.html",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Install JATOS on a server",permalink:"/JATOS-on-a-server.html"},next:{title:"JATOS on AWS",permalink:"/JATOS-in-Amazons-Cloud-without-Docker.html"}},p={},m=[{value:"Set up a simple JATOS server on DigitalOcean",id:"set-up-a-simple-jatos-server-on-digitalocean",level:2},{value:"Destroy your JATOS server",id:"destroy-your-jatos-server",level:2},{value:"Set up JATOS with HTTPS and a domain",id:"set-up-jatos-with-https-and-a-domain",level:2},{value:"Create Droplet",id:"create-droplet",level:3},{value:"Set up your DNS",id:"set-up-your-dns",level:3},{value:"Restart",id:"restart",level:3},{value:"Misc",id:"misc",level:3}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here we explain how to install JATOS in the cloud by using ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com"},"DigitalOcean"),". DigitalOcean is a cloud provider (like ",(0,o.kt)("em",{parentName:"p"},"AWS"),", ",(0,o.kt)("em",{parentName:"p"},"Google Cloud"),", ",(0,o.kt)("em",{parentName:"p"},"Azure")," etc.). We provide this example because DigitalOcean is comparatively easy to use and has good documentation - but we have no connection to DigitalOcean whatsoever."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keep in mind: A server in the cloud will cost money (depending on the size $5 to $50 / month (and more)) and to open an account with DigitalOcean you will need a credit card.")),(0,o.kt)("h2",{id:"set-up-a-simple-jatos-server-on-digitalocean"},"Set up a simple JATOS server on DigitalOcean"),(0,o.kt)("p",null,"First we want to set up a simple JATOS server without encryption (HTTPS) or a domain name. "),(0,o.kt)("p",null,"DigitalOcean offers something called ",(0,o.kt)("em",{parentName:"p"},"Droplet"),", that is basically a virtual machine, and we want to use it as a server for JATOS. If everything runs smoothly you don't have to use the terminal at all. You can watch the video here or follow the instructions further down."),(0,o.kt)(r.Z,{controls:!0,width:"100%",height:"100%",url:"/deploy_to_digitalocean_wo_domain_and_encryption.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up an account with ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"DigitalOcean")," - you'll have to provide billing information.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ",(0,o.kt)("em",{parentName:"p"},"Droplet")," (this is what DigitalOcean calls a virtual machine that we want to use as a server).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the ",(0,o.kt)("em",{parentName:"p"},"Region")," that is nearest to your users. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose an image from ",(0,o.kt)("em",{parentName:"p"},"Marketplace"),": select one with ",(0,o.kt)("em",{parentName:"p"},"Docker")," on ",(0,o.kt)("em",{parentName:"p"},"Ubuntu")," pre-installed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a ",(0,o.kt)("em",{parentName:"p"},"Size"),": For ",(0,o.kt)("em",{parentName:"p"},"Droplet type")," often ",(0,o.kt)("em",{parentName:"p"},"Basic")," is enough and for ",(0,o.kt)("em",{parentName:"p"},"CPU options"),": ",(0,o.kt)("em",{parentName:"p"},"Regular"),". Choose memory 1 to 4 GB according to your expected server load. Don't spend to much time on this, choose the smaller one - you can increase the size later on. If you just want to try it out: a ",(0,o.kt)("em",{parentName:"p"},"Regular")," with 1GB for will do it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose an ",(0,o.kt)("em",{parentName:"p"},"authentication method"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("em",{parentName:"p"},"Advanced Options")," and activate ",(0,o.kt)("em",{parentName:"p"},"Add Initialization scripts"),". Then copy+paste the following script in the text field:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\ndocker run -d --restart=always -p 80:9000 jatos/jatos:latest\n")),(0,o.kt)("p",{parentName:"li"},"You can change 'latest' to the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/jatos/jatos/tags"},"specific version")," you need.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally click the ",(0,o.kt)("em",{parentName:"p"},"Create Droplet")," button")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Try out your JATOS: Now the server is being created which can take a couple minutes. Copy the server's (aka Droplet) IP address into your browser's address bar and if everything went well, you will see a JATOS login screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in with the default credentials 'admin' and 'admin'."))),(0,o.kt)("p",null,"Done! Now you have a basic JATOS server accessible from the Internet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't forget to change your admin user's password.")," Go to the admin user page (top-right corner) and and press button ",(0,o.kt)("em",{parentName:"p"},"Change Password"),"."),(0,o.kt)("p",null,"DigitalOcean charges you by the second. So if you want to create a new JATOS server because something went wrong, just destroy the current one and start over again."),(0,o.kt)("h2",{id:"destroy-your-jatos-server"},"Destroy your JATOS server"),(0,o.kt)("p",null,"If you want to destroy your server, go to your Droplet's page in DigitalOcean and click on ",(0,o.kt)("em",{parentName:"p"},"More")," -> ",(0,o.kt)("em",{parentName:"p"},"Destroy"),". This will completely remove your JATOS server and delete all data that was collected with it. It will also delete any studies you uploaded. "),(0,o.kt)("h2",{id:"set-up-jatos-with-https-and-a-domain"},"Set up JATOS with HTTPS and a domain"),(0,o.kt)("p",null,"This part is ",(0,o.kt)("strong",{parentName:"p"},"optional")," and is only necessary if you want to have your own domain name instead of an IP and use encryption (HTTPS)."),(0,o.kt)("p",null,"We will use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik"},"Traefik")," as a proxy. Traefik adds encryption out-of-the-box (by using ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let\u2019s Encrypt"),") and is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/traefik/traefik"},"open source")," and free to use. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Get your own domain name"),': Sorry, we can\'t give you a domain name - you have to get your own. But there are plenty domain name registrars that help you with this business (just search for "domain registrars"). Another option is to talk to your IT department and convince them to give you a subdomain for free.'),(0,o.kt)("p",null,"Now with a domain name you can encrypt your server's communication with HTTPS."),(0,o.kt)("p",null,"But first a ",(0,o.kt)("strong",{parentName:"p"},"summary of the work flow"),": "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create droplet"),(0,o.kt)("li",{parentName:"ol"},"Set up your DNS"),(0,o.kt)("li",{parentName:"ol"},"Restart droplet"),(0,o.kt)("li",{parentName:"ol"},"Wait until you can reach the webpage")),(0,o.kt)("h3",{id:"create-droplet"},"Create Droplet"),(0,o.kt)("p",null,"To create a JATOS server with Traefik follow the instructions of the first section (",(0,o.kt)("a",{parentName:"p",href:"/JATOS-on-DigitalOcean.html#set-up-a-simple-jatos-server-on-digitalocean"},"Set up a simple JATOS server on DigitalOcean"),") but in the field for the ",(0,o.kt)("em",{parentName:"p"},"Add Initialization scripts")," put the following script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\n# Change to your email and domain (for Let\'s Encrypt)\nemail=myemail@example.org\ndomain=my.domain.org\n\ncat >/root/compose.yaml <<EOL\nversion: "3.8"\n\nservices:\n\n  traefik:\n    image: "traefik:v2.10"\n    container_name: "traefik"\n    command:\n      #- "--log.level=DEBUG"\n      - "--api.insecure=true"\n      - "--providers.docker=true"\n      - "--providers.docker.exposedbydefault=false"\n      - "--entrypoints.web.address=:80"\n      - "--entrypoints.web.http.redirections.entrypoint.to=websecure"\n      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"\n      - "--entrypoints.websecure.address=:443"\n      - "--certificatesresolvers.jatosresolver.acme.tlschallenge=true"\n      #- "--certificatesresolvers.jatosresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"\n      - "--certificatesresolvers.jatosresolver.acme.email=${email}"\n      - "--certificatesresolvers.jatosresolver.acme.storage=/letsencrypt/acme.json"\n    ports:\n      - "80:80"\n      - "443:443"\n    volumes:\n      - "./letsencrypt:/letsencrypt"\n      - "/var/run/docker.sock:/var/run/docker.sock:ro"\n\n  jatos:\n    image: "jatos/jatos:latest"\n    container_name: "jatos"\n    ports:\n      - "9000:9000"\n    volumes:\n      - "jatos-logs:/opt/jatos/logs"\n      - "jatos-data:/opt/jatos_data"\n    labels:\n      - "traefik.enable=true"\n      - "traefik.http.routers.jatos.rule=Host(\\`${domain}\\`)"\n      - "traefik.http.services.jatos.loadbalancer.server.port=9000"\n      - "traefik.http.routers.jatos.entrypoints=websecure"\n      - "traefik.http.routers.jatos.tls.certresolver=jatosresolver"\n\nvolumes:\n  jatos-data:\n  jatos-logs:\nEOL\n\ndocker compose -f /root/compose.yaml up -d\n')),(0,o.kt)("p",null,"This script will use ",(0,o.kt)("a",{parentName:"p",href:"/JATOS-with-Docker-Compose.html"},"Docker Compose")," to set up Traefik and JATOS. It creates a Docker Compose config file under ",(0,o.kt)("em",{parentName:"p"},"/root/compose.yaml")," and then runs it with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before you can click the ",(0,o.kt)("em",{parentName:"strong"},"Create Droplet")," button"),", change ",(0,o.kt)("inlineCode",{parentName:"p"},"my.domain.org")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"myemail@example.org")," (in the top of the script) with your own domain name and email address. Your email is needed to get a certificate from ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," for encryption. Also, you might want to set JATOS version to a ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/jatos/jatos/tags"},"specific release"),": change ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," in the line ",(0,o.kt)("inlineCode",{parentName:"p"},'image: "jatos/jatos:latest"'),"."),(0,o.kt)("h3",{id:"set-up-your-dns"},"Set up your DNS"),(0,o.kt)("p",null,"After you've created your Droplet, you still have to ",(0,o.kt)("strong",{parentName:"p"},"point your domain name to your server's IP address"),". This is what a DNS (Domain Name Service) does and it involves dealing with things like ",(0,o.kt)("em",{parentName:"p"},"DNS records"),", especially ",(0,o.kt)("em",{parentName:"p"},"A records")," or ",(0,o.kt)("em",{parentName:"p"},"AAAA records"),", and simply can be quite annoying. You can ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/docs/networking/dns/how-to/manage-records/"},"manage your DNS settings with Digital Ocean")," or the registrar where you got your domain name (they will have some online help). The important thing is to put the ",(0,o.kt)("em",{parentName:"p"},"IPv4")," address of your server into the ",(0,o.kt)("em",{parentName:"p"},"A record")," of your DNS settings (or if you have an ",(0,o.kt)("em",{parentName:"p"},"IPv6")," address the ",(0,o.kt)("em",{parentName:"p"},"AAAA record"),"). And remember, DNS changes can take from some minutes to a day to propagate throughout the Internet - So your domain name might take some time to work (you can use ",(0,o.kt)("a",{parentName:"p",href:"http://www.kloth.net/services/nslookup.php"},"nslookup")," to check)."),(0,o.kt)("h3",{id:"restart"},"Restart"),(0,o.kt)("p",null,"Then as a last step, after your domain name points to your server's IP, you have to ",(0,o.kt)("strong",{parentName:"p"},"restart your server")," (switch off the Droplet and back on). Now Traefik requests a certificate for your domain and uses HTTPS from now on. Sometimes it's necessary to restart a second time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Done"),". You have a JATOS server with encryption and your domain name."),(0,o.kt)("h3",{id:"misc"},"Misc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Let's Encrypt has a ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/rate-limits/"},"rate limit")," for the number of certificates. If you are not sure and just want to try it out, uncomment the following line in the ",(0,o.kt)("em",{parentName:"p"},"Initialization script"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'- "--certificatesresolvers.jatosresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"\n')),(0,o.kt)("p",{parentName:"li"},"This will let you use their staging server that does not have such rate limit - but you won't get a proper certificate either. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Docker Compose config file that is created during the Droplet initialization has the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/compose.yaml")," and the certificate is stored under ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/letsencrypt/"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can configure JATOS by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/compose.yaml"),". You can add all ",(0,o.kt)("a",{parentName:"p",href:"/JATOS_Configuration.html"},"command-line arguments of JATOS")," in the ",(0,o.kt)("em",{parentName:"p"},"command")," section of the ",(0,o.kt)("em",{parentName:"p"},"jatos")," service_."),(0,o.kt)("p",{parentName:"li"},"E.g. to add a ",(0,o.kt)("a",{parentName:"p",href:"/JATOS_Configuration.html#welcome-message"},"welcome message on the home page")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"-Djatos.brandingUrl"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'  jatos:\n    image: "jatos/jatos:latest"\n    container_name: "jatos"\n    command:\n      - \'-Djatos.brandingUrl=https://mydomain.com/foobar-university-welcome-page.html\'\n    ...\n')),(0,o.kt)("p",{parentName:"li"},"E.g. to let JATOS use an ",(0,o.kt)("a",{parentName:"p",href:"/JATOS_Configuration.html#database"},"external MySQL database")," use ",(0,o.kt)("inlineCode",{parentName:"p"},"-Djatos.db.url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Djatos.db.username"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Djatos.db.password"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"-Djatos.db.driver")," (change IP, port, username and password to the ones of your database)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"  jatos:\n    image: \"jatos/jatos:latest\"\n    container_name: \"jatos\"\n    command:\n      - '-Djatos.db.url=jdbc:mysql://1.2.3.4:3306/jatos?characterEncoding=UTF-8&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC'\n      - '-Djatos.db.username=jatosuser'\n      - '-Djatos.db.password=mypassword'\n      - '-Djatos.db.driver=com.mysql.cj.jdbc.Driver'\n    ...\n")))))}d.isMDXComponent=!0}}]);