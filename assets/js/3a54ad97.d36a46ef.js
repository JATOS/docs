"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const i={title:"Manage JATOS users",slug:"/User-Manager.html",sidebar_position:2},o=void 0,s={unversionedId:"Manage_your_JATOS/User-Manager",id:"version-3.8.1/Manage_your_JATOS/User-Manager",title:"Manage JATOS users",description:"Each experimenter with access to the JATOS server (though the GUI) is a JATOS User. Users can create, modify and delete the studies they are members of. They can also export and delete results. Users may also have special roles: Admin or Superusers. Only Admin users have access to the Administration page and control other users' access to JATOS. Superusers exist only since JATOS version 3.7.4 and they can access all studies on this JATOS including their result data.",source:"@site/versioned_docs/version-3.8.1/Manage_your_JATOS/User-Manager.md",sourceDirName:"Manage_your_JATOS",slug:"/User-Manager.html",permalink:"/User-Manager.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Manage_your_JATOS/User-Manager.md",tags:[],version:"3.8.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1716888513,formattedLastUpdatedAt:"May 28, 2024",sidebarPosition:2,frontMatter:{title:"Manage JATOS users",slug:"/User-Manager.html",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Administration",permalink:"/Administration.html"},next:{title:"Update JATOS",permalink:"/Update-JATOS.html"}},c={},u=[{value:"Manage users",id:"manage-users",level:2},{value:"Superusers",id:"superusers",level:2},{value:"Authentication via LDAP",id:"authentication-via-ldap",level:2},{value:"Authentication via Google Sign-In",id:"authentication-via-google-sign-in",level:2},{value:"Authentication via OpenId Connect (OIDC)",id:"authentication-via-openid-connect-oidc",level:2},{value:"Authentication via ORCID (orcid.org)",id:"authentication-via-orcid-orcidorg",level:2}],l={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Each experimenter with access to the JATOS server (though the GUI) is a JATOS User. Users can create, modify and delete the studies they are members of. They can also export and delete results. Users may also have special roles: ",(0,r.kt)("strong",{parentName:"p"},"Admin")," or ",(0,r.kt)("strong",{parentName:"p"},"Superusers"),". Only Admin users have access to the ",(0,r.kt)("a",{parentName:"p",href:"Administration.html"},(0,r.kt)("em",{parentName:"a"},"Administration")," page")," and control other users' access to JATOS. Superusers exist only since JATOS version 3.7.4 and they can access all studies on this JATOS including their result data. "),(0,r.kt)("h2",{id:"manage-users"},"Manage users"),(0,r.kt)("p",null,"Only users with admin rights have access to the ",(0,r.kt)("strong",{parentName:"p"},"User Manager")," (in the ",(0,r.kt)("em",{parentName:"p"},"Administration")," page). From the ",(0,r.kt)("em",{parentName:"p"},"User Manager"),", admins can create new users or delete existing ones, or change passwords. Admins can also deactivate/activate users and see information about the user's studies."),(0,r.kt)("p",null,"JATOS comes with one ",(0,r.kt)("strong",{parentName:"p"},"Admin user")," out-of-box (username: 'admin'). User Admin always has admin rights that cannot be revoked. The initial password for Admin is 'admin' and it should be changed immediately after installation and kept safe!"),(0,r.kt)("p",null,"Every user can be granted Admin rights, by checking the corresponding box in the ",(0,r.kt)("em",{parentName:"p"},"Admin")," column of the table. Only admins can access the ",(0,r.kt)("em",{parentName:"p"},"Administration")," pages (like ",(0,r.kt)("em",{parentName:"p"},"User Manager")," or ",(0,r.kt)("em",{parentName:"p"},"Study Info"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User manager screenshot",src:n(53218).Z,width:"1919",height:"677"})),(0,r.kt)("p",null,"A user can be ",(0,r.kt)("strong",{parentName:"p"},"deactivated")," (and activated again) by clicking the checkbox in the 'Active' column. A deactivated user cannot log in anymore but their studies can still be run by participants (to prevent a study from running, deactivate it in the study ",(0,r.kt)("em",{parentName:"p"},"Administration")," page)."),(0,r.kt)("p",null,"If you're an admin and need to get more information about a user's studies, click on the ",(0,r.kt)("em",{parentName:"p"},"Studies")," column. You'll see ",(0,r.kt)("em",{parentName:"p"},"Result Data Size")," and ",(0,r.kt)("em",{parentName:"p"},"Result File size"),", which can give you an idea of how many of the server's resources this user needs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User manager screenshot",src:n(58836).Z,width:"1550",height:"715"})),(0,r.kt)("p",null,"Clicking on the ",(0,r.kt)("em",{parentName:"p"},"Export")," button on the top of the page, you can export user data in CSV format. This is useful to e.g. get a list of emails if you need to notify all users about a server downtime, JATOS update, etc.   "),(0,r.kt)("h2",{id:"superusers"},"Superusers"),(0,r.kt)("p",null,"By default the ability to turn a user into a Superuser is deactivated and has to be activated in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/jatos.conf")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," in version < 3.8.3) by adding:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jatos.user.role.allowSuperuser = true\n")),(0,r.kt)("p",null,"Then every user can be granted the Superuser role by checking the corresponding box in the ",(0,r.kt)("em",{parentName:"p"},"Superuser")," column of the table."),(0,r.kt)("p",null,"Superusers can access all studies on this JATOS instance regardless if they were added as a member user. This includes changing the study properties, accessing the result data or deleting the study. This is useful for single-lab or training JATOS installations where one user needs fast access to everything to help other researchers or students. However unlike Admin users Superusers cannot access the Administration page or manage other users."),(0,r.kt)("h2",{id:"authentication-via-ldap"},"Authentication via LDAP"),(0,r.kt)("p",null,"JATOS allows password authentication via LDAP (which lets an institution manage their users in a centralized way). LDAP is disabled by default. To enable it ",(0,r.kt)("a",{parentName:"p",href:"JATOS_Configuration.html#ldap-authentication"},"change the JATOS config file"),". "),(0,r.kt)("p",null,"Once LDAP is enabled, there will be an additional checkbox 'LDAP' on the overlay dialog when an admin creates a new user. Check this box to enforce authentication by LDAP. Normal JATOS users (locally authenticated) and LDAP users can co-exist in the same JATOS instance."),(0,r.kt)("p",null,"At the moment it is not possible to let JATOS create LDAP users automatically - they must be created by an JATOS admin manually."),(0,r.kt)("h2",{id:"authentication-via-google-sign-in"},"Authentication via Google Sign-In"),(0,r.kt)("p",null,"Google Sign-In is deactivated by default and can be activated by adding your Google Client-ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/jatos.conf")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," in version < 3.8.3), similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'jatos.user.authentication.oauth.googleClientId = "1234567890-abc123abc123.apps.googleusercontent.com"\n')),(0,r.kt)("p",null,"If a new user authenticates the first time with Google Sign-In the user will be automatically created in JATOS. This means a 'Google' user cannot be created by a JATOS Admin."),(0,r.kt)("h2",{id:"authentication-via-openid-connect-oidc"},"Authentication via OpenId Connect (OIDC)"),(0,r.kt)("p",null,"Since version 3.8.5 JATOS users can be authenticated by ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/developers/how-connect-works/"},"OIDC"),". OIDC is an authentication protocol that offers an easy-to-use sign in button. It needs an OIDC provider that is not part of JATOS (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak"),"). You can find more about ",(0,r.kt)("a",{parentName:"p",href:"/JATOS_Configuration.html#openid-connect-oidc"},"how to configure JATOS to use OIDC")," in the JATOS configuration page."),(0,r.kt)("p",null,"If a new user authenticates the first time with OIDC the user will be automatically created in JATOS. This means an OIDC user cannot be created by a JATOS Admin."),(0,r.kt)("h2",{id:"authentication-via-orcid-orcidorg"},"Authentication via ORCID (orcid.org)"),(0,r.kt)("p",null,"Since version 3.8.5 JATOS users can be authenticated by ",(0,r.kt)("a",{parentName:"p",href:"https://info.orcid.org/documentation/features/public-api/orcid-as-a-sign-in-option-to-your-system/"},"ORCID sign-in"),". ORCID offers an easy way to configure and use a ",(0,r.kt)("em",{parentName:"p"},"Sign in with ORCID")," button."),(0,r.kt)("p",null,"You only need to set two parameters in JATOS' configuration to make your JATOS use ORCID's authentication: your ORCID ",(0,r.kt)("em",{parentName:"p"},"client ID")," and ",(0,r.kt)("em",{parentName:"p"},"client secret"),". Read ",(0,r.kt)("a",{parentName:"p",href:"https://info.orcid.org/documentation/integration-guide/registering-a-public-api-client/"},"here")," more about how to get these (but the short version is: Go to your ORCID user page -> expand your username top right: click ",(0,r.kt)("em",{parentName:"p"},"Developer Tools"),"). Then ",(0,r.kt)("a",{parentName:"p",href:"/JATOS_Configuration.html#orcid-orcidorg-authentication"},"configure your JATOS with your client ID and secret"),"."),(0,r.kt)("p",null,"If a new user authenticates the first time with ORCID the user will be automatically created in JATOS. This means an ORCID user cannot be created by a JATOS Admin."))}d.isMDXComponent=!0},53218:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_User_Manager3-cdbe44efb87af7a62717f4b6431a2bbd.png"},58836:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Screenshot_User_Manager4-b1cc5752a024c60be6634d5bf61412fe.png"}}]);