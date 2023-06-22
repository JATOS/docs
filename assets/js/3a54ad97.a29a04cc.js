"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2197],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l}});var a=n(3117),r=(n(7294),n(3905));const s={title:"Manage JATOS users",slug:"/User-Manager.html",sidebar_position:2},i=void 0,o={unversionedId:"Manage_your_JATOS/User-Manager",id:"version-3.8.1/Manage_your_JATOS/User-Manager",title:"Manage JATOS users",description:"Each experimenter with access to the JATOS server (though the GUI) is a JATOS User. Users can create, modify and delete the studies they are members of. They can also export and delete results. Users may also have special roles: Admin or Superusers. Only Admin users have access to the Administration page and control other users' access to JATOS. Superusers exist only since JATOS version 3.7.4 and they can access all studies on this JATOS including their result data.",source:"@site/versioned_docs/version-3.8.1/Manage_your_JATOS/User-Manager.md",sourceDirName:"Manage_your_JATOS",slug:"/User-Manager.html",permalink:"/User-Manager.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.8.1/Manage_your_JATOS/User-Manager.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1687430648,formattedLastUpdatedAt:"Jun 22, 2023",sidebarPosition:2,frontMatter:{title:"Manage JATOS users",slug:"/User-Manager.html",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Administration",permalink:"/Administration.html"},next:{title:"Update JATOS",permalink:"/Update-JATOS.html"}},u={},l=[{value:"Manage users",id:"manage-users",level:2},{value:"Superusers",id:"superusers",level:2},{value:"Authentication via LDAP",id:"authentication-via-ldap",level:2},{value:"Authentication via Google Sign-In",id:"authentication-via-google-sign-in",level:2}],c={toc:l};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Each experimenter with access to the JATOS server (though the GUI) is a JATOS User. Users can create, modify and delete the studies they are members of. They can also export and delete results. Users may also have special roles: ",(0,r.kt)("strong",{parentName:"p"},"Admin")," or ",(0,r.kt)("strong",{parentName:"p"},"Superusers"),". Only Admin users have access to the ",(0,r.kt)("a",{parentName:"p",href:"Administration.html"},(0,r.kt)("em",{parentName:"a"},"Administration")," page")," and control other users' access to JATOS. Superusers exist only since JATOS version 3.7.4 and they can access all studies on this JATOS including their result data. "),(0,r.kt)("h2",{id:"manage-users"},"Manage users"),(0,r.kt)("p",null,"Only users with admin rights have access to the ",(0,r.kt)("strong",{parentName:"p"},"User Manager")," (in the ",(0,r.kt)("em",{parentName:"p"},"Administration")," page). From the ",(0,r.kt)("em",{parentName:"p"},"User Manager"),", admins can create new users or delete existing ones, or change passwords. Admins can also deactivate/activate users and see information about the user's studies."),(0,r.kt)("p",null,"JATOS comes with one ",(0,r.kt)("strong",{parentName:"p"},"Admin user")," out-of-box (username: 'admin'). User Admin always has admin rights that cannot be revoked. The initial password for Admin is 'admin' and it should be changed immediately after installation and kept safe!"),(0,r.kt)("p",null,"Every user can be granted Admin rights, by checking the corresponding box in the ",(0,r.kt)("em",{parentName:"p"},"Admin")," column of the table. Only admins can access the ",(0,r.kt)("em",{parentName:"p"},"Administration")," pages (like ",(0,r.kt)("em",{parentName:"p"},"User Manager")," or ",(0,r.kt)("em",{parentName:"p"},"Study Info"),")."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User manager screenshot",src:n(3218).Z,width:"1919",height:"677"})),(0,r.kt)("p",null,"A user can be ",(0,r.kt)("strong",{parentName:"p"},"deactivated")," (and activated again) by clicking the checkbox in the 'Active' column. A deactivated user cannot log in anymore but their studies can still be run by participants (to prevent a study from running, deactivate it in the study ",(0,r.kt)("em",{parentName:"p"},"Administration")," page)."),(0,r.kt)("p",null,"If you're an admin and need to get more information about a user's studies, click on the ",(0,r.kt)("em",{parentName:"p"},"Studies")," column. You'll see ",(0,r.kt)("em",{parentName:"p"},"Result Data Size")," and ",(0,r.kt)("em",{parentName:"p"},"Result File size"),", which can give you an idea of how many of the server's resources this user needs."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"User manager screenshot",src:n(8836).Z,width:"1550",height:"715"})),(0,r.kt)("p",null,"Clicking on the ",(0,r.kt)("em",{parentName:"p"},"Export")," button on the top of the page, you can export user data in CSV format. This is useful to e.g. get a list of emails if you need to notify all users about a server downtime, JATOS update, etc.   "),(0,r.kt)("h2",{id:"superusers"},"Superusers"),(0,r.kt)("p",null,"Superusers exist in JATOS only since version 3.7.4. By default the ability to turn a user into a Superuser is deactivated and has to be activated in the ",(0,r.kt)("em",{parentName:"p"},"production.conf")," by adding:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jatos.user.role.allowSuperuser = true\n")),(0,r.kt)("p",null,"Then every user can be granted the Superuser role by checking the corresponding box in the ",(0,r.kt)("em",{parentName:"p"},"Superuser")," column of the table."),(0,r.kt)("p",null,"Superusers can access all studies on this JATOS instance regardless if they were added as a member user. This includes changing the study properties, accessing the result data or deleting the study. This is useful for single-lab or training JATOS installations where one user needs fast access to everything to help other researchers or students. However unlike Admin users Superusers cannot access the Administration page or manage other users."),(0,r.kt)("h2",{id:"authentication-via-ldap"},"Authentication via LDAP"),(0,r.kt)("p",null,"JATOS allows password authentication via LDAP (which lets an institution manage their users in a centralized way). LDAP is disabled by default. To enable it ",(0,r.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html#ldap-authentication"},"change the JATOS config file"),". "),(0,r.kt)("p",null,"Once LDAP is enabled, there will be an additional checkbox 'LDAP' on the overlay dialog when an admin creates a new user. Check this box to enforce authentication by LDAP. Normal JATOS users (locally authenticated) and LDAP users can co-exist in the same JATOS instance."),(0,r.kt)("p",null,"At the moment it is not possible to let JATOS create LDAP users automatically - they must be created by an JATOS admin manually."),(0,r.kt)("h2",{id:"authentication-via-google-sign-in"},"Authentication via Google Sign-In"),(0,r.kt)("p",null,"Google Sign-In is deactivated by default and can be activated by adding your Google Client-ID in the ",(0,r.kt)("em",{parentName:"p"},"production.conf"),", similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'jatos.user.authentication.oauth.googleClientId = "1234567890-abc123abc123.apps.googleusercontent.com"\n')),(0,r.kt)("p",null,"If a new user authenticates the first time with Google Sign-In the user will be automatically created in JATOS. This means a 'Google' user cannot be created by a JATOS Admin."))}d.isMDXComponent=!0},3218:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_User_Manager3-cdbe44efb87af7a62717f4b6431a2bbd.png"},8836:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_User_Manager4-b1cc5752a024c60be6634d5bf61412fe.png"}}]);