"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1803],{34447:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(83117),o=(a(67294),a(3905)),i=a(22004);const l={title:"JATOS on DigitalOcean",slug:"/JATOS-on-DigitalOcean.html",sidebar_position:5},r=void 0,p={unversionedId:"Serving_the_Internet/JATOS-on-DigitalOcean",id:"version-3.8.1/Serving_the_Internet/JATOS-on-DigitalOcean",title:"JATOS on DigitalOcean",description:"On this page we want to explain how to install JATOS in the cloud by using DigitalOcean. DigitalOcean is a cloud provider (like AWS, Google Cloud, Azure etc.) that is comparatively easy to use and has good documentation. And btw. we have no connections to DigitalOcean whatsoever.",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-on-DigitalOcean.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-on-DigitalOcean.html",permalink:"/JATOS-on-DigitalOcean.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-on-DigitalOcean.md",tags:[],version:"3.8.1",lastUpdatedBy:"kristian",lastUpdatedAt:1692977229,formattedLastUpdatedAt:"Aug 25, 2023",sidebarPosition:5,frontMatter:{title:"JATOS on DigitalOcean",slug:"/JATOS-on-DigitalOcean.html",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Install JATOS on a server",permalink:"/JATOS-on-a-server.html"},next:{title:"JATOS on AWS",permalink:"/JATOS-in-Amazons-Cloud-without-Docker.html"}},s={},c=[{value:"Deploy JATOS with DigitalOcean Apps",id:"deploy-jatos-with-digitalocean-apps",level:2},{value:"Destroy your JATOS server",id:"destroy-your-jatos-server",level:2},{value:"Next steps",id:"next-steps",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"On this page we want to explain how to install JATOS in the cloud by using ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com"},"DigitalOcean"),". DigitalOcean is a cloud provider (like ",(0,o.kt)("em",{parentName:"p"},"AWS"),", ",(0,o.kt)("em",{parentName:"p"},"Google Cloud"),", ",(0,o.kt)("em",{parentName:"p"},"Azure")," etc.) that is comparatively easy to use and has good documentation. And btw. we have no connections to DigitalOcean whatsoever."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keep in mind: A server in the cloud will cost money (depending on the size $5 to $50 / month (and more)) and to open an account with DigitalOcean you will need a credit card.")),(0,o.kt)("h2",{id:"deploy-jatos-with-digitalocean-apps"},"Deploy JATOS with DigitalOcean Apps"),(0,o.kt)("p",null,"DigitalOcean offers something called ",(0,o.kt)("em",{parentName:"p"},"Apps")," (",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/app-platform/how-to/create-apps/"},"more info"),") that makes it pretty easy to install JATOS in the Internet: if everything runs smoothly you don't have to use the terminal at all. You can watch the video here or follow the instructions further down."),(0,o.kt)(i.Z,{controls:!0,width:"100%",height:"100%",url:"/deploy_as_app_on_digitalocean.webm",mdxType:"ReactPlayer"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign in to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com"},"DigitalOcean"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("em",{parentName:"p"},"Deploy to DigitalOcean")," button. This will open DigitalOcean's App page and prefill some settings for you. By default the latest version of JATOS is set up to be installed."),(0,o.kt)("a",{href:"https://cloud.digitalocean.com/apps/new?repo=https://github.com/JATOS/JATOS_docs/tree/main"},(0,o.kt)("img",{src:"https://www.deploytodo.com/do-btn-blue-ghost.svg",alt:"Deploy to DO"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can check the setup or go right to ",(0,o.kt)("em",{parentName:"p"},"Review"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("em",{parentName:"p"},"Review")," click on ",(0,o.kt)("em",{parentName:"p"},"Edit Plan")," and select ",(0,o.kt)("em",{parentName:"p"},"Instance Size"),". E.g. for a simple JATOS server for testing purpose you might want to select ",(0,o.kt)("em",{parentName:"p"},"1 GB RAM | 1 vCPU"),". Leave ",(0,o.kt)("em",{parentName:"p"},"Container")," at ",(0,o.kt)("em",{parentName:"p"},"     1"),". Then click ",(0,o.kt)("em",{parentName:"p"},"Back"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Finally click ",(0,o.kt)("em",{parentName:"p"},"Create Resources")," and wait until JATOS is deployed (this will take a minute or two).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"As soon as you see the button ",(0,o.kt)("em",{parentName:"p"},"Live App")," click on it. The JATOS login page will appear.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in with 'admin' and 'admin'."))),(0,o.kt)("p",null,"Done. Now you have a JATOS server accessible from the Internet, including encryption and a free domain name (something like ",(0,o.kt)("em",{parentName:"p"},"jatos-abc.ondigitalocean.app"),")."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Don't forget to change your admin user's password.")," Go to admin's user page (top-right corner) and and press button ",(0,o.kt)("em",{parentName:"p"},"Change Password"),"."),(0,o.kt)("p",null,"DigitalOcean charges you by the second. So if you want to create a new JATOS server because something went wrong, just destroy the current one and start over again."),(0,o.kt)("h2",{id:"destroy-your-jatos-server"},"Destroy your JATOS server"),(0,o.kt)("p",null,"If you want to destroy your server again, go to your App's page in DigitalOcean and click on ",(0,o.kt)("em",{parentName:"p"},"Actions")," (top right) -> ",(0,o.kt)("em",{parentName:"p"},"Destroy App"),". This will completely remove your JATOS server and delete all data that was collected with it."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://localhost:3000/JATOS_Configuration.html"},"Configure JATOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/JATOS-with-MySQL.html"},"Attach JATOS to a MySQL or MariaDB database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/"},"Change the domain name"))))}d.isMDXComponent=!0}}]);