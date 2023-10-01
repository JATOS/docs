"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4474],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const o={title:"Write Group Studies II - JavaScript and Messaging",slug:"/Write-Group-Studies-II-JavaScript-and-Messaging.html",sidebar_position:3},i=void 0,s={unversionedId:"Group_studies/Write-Group-Studies-II-JavaScript-and-Messaging",id:"Group_studies/Write-Group-Studies-II-JavaScript-and-Messaging",title:"Write Group Studies II - JavaScript and Messaging",description:"Writing JavaScripts for group studies",source:"@site/docs/Group_studies/Write-Group-Studies-II-JavaScript-and-Messaging.md",sourceDirName:"Group_studies",slug:"/Write-Group-Studies-II-JavaScript-and-Messaging.html",permalink:"/next/Write-Group-Studies-II-JavaScript-and-Messaging.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/docs/Group_studies/Write-Group-Studies-II-JavaScript-and-Messaging.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1696160201,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:3,frontMatter:{title:"Write Group Studies II - JavaScript and Messaging",slug:"/Write-Group-Studies-II-JavaScript-and-Messaging.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Write Group Studies I - Setup",permalink:"/next/Write-Group-Studies-I-Setup.html"},next:{title:"Bring your JATOS online",permalink:"/next/Bring-your-JATOS-online.html"}},p={},u=[{value:"Writing JavaScripts for group studies",id:"writing-javascripts-for-group-studies",level:2},{value:"Joining a group and opening group channels",id:"joining-a-group-and-opening-group-channels",level:3},{value:"Reassigning to a different group",id:"reassigning-to-a-different-group",level:3},{value:"Fixing a group",id:"fixing-a-group",level:3},{value:"Communication between group members",id:"communication-between-group-members",level:2},{value:"Direct messaging",id:"direct-messaging",level:3},{value:"Broadcast messaging",id:"broadcast-messaging",level:3},{value:"Group session",id:"group-session",level:3}],l={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"writing-javascripts-for-group-studies"},"Writing JavaScripts for group studies"),(0,a.kt)("p",null,"Group studies differ from single-worker studies simply in that the JavaScript needs to handle groups and communications between members. The ",(0,a.kt)("em",{parentName:"p"},"jatos.js")," library provides some useful functions for this."),(0,a.kt)("p",null,"If you like to dive right into ",(0,a.kt)("em",{parentName:"p"},"jatos.js'"),"   reference:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"jatos.js-Reference.html#group-functions"},(0,a.kt)("em",{parentName:"a"},"jatos.js")," functions for group studies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"jatos.js-Reference.html#group-variables"},(0,a.kt)("em",{parentName:"a"},"jatos.js")," group variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"jatos.js-Reference.html#functions-to-access-the-group-session"},(0,a.kt)("em",{parentName:"a"},"jatos.js")," Group Session functions"))),(0,a.kt)("h3",{id:"joining-a-group-and-opening-group-channels"},"Joining a group and opening group channels"),(0,a.kt)("p",null,"Workers can only communicate with members of their own group. So, interacting workers must all join the same group.\n",(0,a.kt)("strong",{parentName:"p"},"A worker will remain in a group until ",(0,a.kt)("em",{parentName:"strong"},"jatos.js")," is explicitly told to leave the group (or the study run is finished). This means that if a worker moves between components or reloads a page they will still remain in the same group.")," This feature makes groups much more robust. "),(0,a.kt)("p",null,"So here's how a typical JATOS group study run would look like. This study has three components."),(0,a.kt)("p",null,"Component 1"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jatos.joinGroup")," -> joins group and opens group channel"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jatos.nextComponent")," -> closes group channel and jumps to next component")),(0,a.kt)("p",null,"Component 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jatos.joinGroup")," -> opens group channel in the ",(0,a.kt)("strong",{parentName:"li"},"same group")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jatos.nextComponent")," -> closes group channel and jumps to next component")),(0,a.kt)("p",null,"Component 3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jatos.joinGroup")," -> opens group channel ",(0,a.kt)("strong",{parentName:"li"},"same group")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jatos.endStudy")," -> closes group channel, leaves group, ends component, and ends study")),(0,a.kt)("p",null,"Notice that by calling ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosjoingroup"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.joinGroup"))," in the second and third component JATOS does not let workers join a new group but just  opens a group channel in the already joined group. To make a worker leave a group,  use the function ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosleavegroup"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.leaveGroup")),"."),(0,a.kt)("p",null,"Every know and then you probably would like to know who the members of your groups are. This and other stats you can get by clicking on your batch's ",(0,a.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#groups"},"Groups button in the Study Links page"),"."),(0,a.kt)("h3",{id:"reassigning-to-a-different-group"},"Reassigning to a different group"),(0,a.kt)("p",null,"To move a worker from one group to a different one, use ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatosreassigngroup"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.reassignGroup")),". This function will make a worker leave their group and join a different one. JATOS can only reassign to a different group if there is another group available. If there is no other group JATOS will not start a new one but put the worker into the same old group again.  "),(0,a.kt)("h3",{id:"fixing-a-group"},"Fixing a group"),(0,a.kt)("p",null,"Sometimes you want to stay with the group like it is in this moment and don't let new members join - although it would be allowed according to the group properties. For example in the ",(0,a.kt)("a",{parentName:"p",href:"/Example-Studies"},"Prisoner's Example study")," after the group is assembled in the waiting room component it is necessary to keep the two members as it is. Even if one of the members leaves in the middle of the game, JATOS shouldn't just assign a new member. To do this you can call ",(0,a.kt)("em",{parentName:"p"},"jatos.js"),"' function ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossetgroupfixed"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.setGroupFixed")),". Alternatively you can fix a group in JATOS' GUI, in the\n",(0,a.kt)("a",{parentName:"p",href:"Run-your-Study-with-Study-Links.html#groups"},"Groups table in the Study Links page"),"."),(0,a.kt)("h2",{id:"communication-between-group-members"},"Communication between group members"),(0,a.kt)("p",null,"JATOS provides three ways for communicating within the group: direct messaging, broadcast messaging and with the Group Session."),(0,a.kt)("h3",{id:"direct-messaging"},"Direct messaging"),(0,a.kt)("p",null,"Members can send direct messages to a single other member of the same group with the ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossendgroupmsgto"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.sendGroupMsgTo"))," function. Like broadcast messaging this way of group communication is fast but can be unreliable in case of an unstable network connection. We use direct messaging in the ",(0,a.kt)("a",{parentName:"p",href:"/Example-Studies"},"Snake example")," to send the coordinates of the snakes on every step. Here, speed is more critical than reliability in the messages, because a few dropped frames will probably go unnoticed. "),(0,a.kt)("h3",{id:"broadcast-messaging"},"Broadcast messaging"),(0,a.kt)("p",null,"Members can send messages to all other members of the same group with the ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#jatossendgroupmsg"},(0,a.kt)("inlineCode",{parentName:"a"},"jatos.sendGroupMsg"))," function. Like direct messaging this way of group communication is fast but can be unreliable in case of an unstable network connection."),(0,a.kt)("h3",{id:"group-session"},"Group session"),(0,a.kt)("p",null,"The Group Session is one of the ",(0,a.kt)("a",{parentName:"p",href:"Session-Data-Three-Types.html"},"three types of session that JATOS provides"),". Members can access the Group Session data with the ",(0,a.kt)("a",{parentName:"p",href:"jatos.js-Reference.html#functions-to-access-the-group-session"},"Group Session functions"),". The Group Session data are stored in JATOS' database ",(0,a.kt)("strong",{parentName:"p"},"only while the group is active. It is deleted when the group is finished.")," Communication via Group Session is slower, but more reliable than group messaging. If one member has an unstable internet connection or does a page reload, the Group Session will be automatically restored after the member reopens the group channel. Workers communicate via the Group Session data in the ",(0,a.kt)("a",{parentName:"p",href:"/Example-Studies"},"Prisoner's Example study"),", because here one dropped message would lead to important information loss."))}m.isMDXComponent=!0}}]);