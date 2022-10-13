"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1218],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8030:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={title:"Manage JATOS users",slug:"/User-Manager.html",sidebar_position:2},c=void 0,l={unversionedId:"Manage_your_JATOS/User-Manager",id:"version-3.6.1/Manage_your_JATOS/User-Manager",title:"Manage JATOS users",description:"Each experimenter with access to the JATOS server (though the GUI) is a JATOS User. Users can create, modify and delete the studies they are members of. They can also export and delete results. Users may also have admin rights, which lets them access the Administration page and control other users' access to JATOS.",source:"@site/versioned_docs/version-3.6.1/Manage_your_JATOS/User-Manager.md",sourceDirName:"Manage_your_JATOS",slug:"/User-Manager.html",permalink:"/3.6.1/User-Manager.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Manage_your_JATOS/User-Manager.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1665650426,formattedLastUpdatedAt:"10/13/2022",sidebarPosition:2,frontMatter:{title:"Manage JATOS users",slug:"/User-Manager.html",sidebar_position:2},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Administration",permalink:"/3.6.1/Administration.html"},next:{title:"Update JATOS",permalink:"/3.6.1/Update-JATOS.html"}},u=[{value:"Manage users",id:"manage-users",children:[],level:2},{value:"Authentication via LDAP (version &gt;= 3.5.4)",id:"authentication-via-ldap-version--354",children:[],level:2}],d={toc:u};function m(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each experimenter with access to the JATOS server (though the GUI) is a JATOS User. Users can create, modify and delete the studies they are members of. They can also export and delete results. Users may also have ",(0,i.kt)("strong",{parentName:"p"},"admin rights"),", which lets them access the ",(0,i.kt)("em",{parentName:"p"},"Administration")," page and control other users' access to JATOS. "),(0,i.kt)("h2",{id:"manage-users"},"Manage users"),(0,i.kt)("p",null,"Only users with admin rights have access to the ",(0,i.kt)("strong",{parentName:"p"},"User Manager")," (through a menu button located in the header on every GUI page or since v3.6.1 on the ",(0,i.kt)("em",{parentName:"p"},"Administration")," page only). From the ",(0,i.kt)("em",{parentName:"p"},"User Manager"),", admins can create new users or delete existing ones, or change passwords. Since v3.6.1 admins can also deactivate/activate users and see information about the user's studies."),(0,i.kt)("p",null,"JATOS comes with one ",(0,i.kt)("strong",{parentName:"p"},"Admin user")," out-of-box (username: 'admin'). Admin always has admin rights that cannot be revoked. The initial password for Admin is 'admin' and it should be changed immediately after installation and kept safe!"),(0,i.kt)("p",null,"Every user can be granted admin rights, by checking the corresponding box either during creation or in the ",(0,i.kt)("em",{parentName:"p"},"Admin")," column of the table. Only admins can access the ",(0,i.kt)("em",{parentName:"p"},"Administration")," pages (like ",(0,i.kt)("em",{parentName:"p"},"User Manager")," or ",(0,i.kt)("em",{parentName:"p"},"Study Info"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User manager screenshot",src:n(1042).Z})),(0,i.kt)("p",null,"Since v3.6.1: A user can be ",(0,i.kt)("strong",{parentName:"p"},"deactivated")," (and activated again) by clicking the checkbox in the 'Active' column. A deactivated user cannot log in anymore but their studies can still be run by participants (to prevent a study from running, deactivate it in the study ",(0,i.kt)("em",{parentName:"p"},"Administration")," page)."),(0,i.kt)("p",null,"Since v3.6.1: If you're an admin and need to get more information about a user's studies, click on the ",(0,i.kt)("em",{parentName:"p"},"Studies")," column. You'll see ",(0,i.kt)("em",{parentName:"p"},"Result Data Size")," and ",(0,i.kt)("em",{parentName:"p"},"Result File size"),", which can give you an idea of how many of the server's resources this user needs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User manager screenshot",src:n(2763).Z})),(0,i.kt)("p",null,"Since v3.6.1: Clicking on the ",(0,i.kt)("em",{parentName:"p"},"Export")," button on the top of the page, you can export user data in CSV format. This is useful to e.g. get a list of emails if you need to notify all users about a server downtime, JATOS update, etc.   "),(0,i.kt)("h2",{id:"authentication-via-ldap-version--354"},"Authentication via LDAP (version >= 3.5.4)"),(0,i.kt)("p",null,"JATOS allows password authentication via LDAP (which lets an institution manage their users in a centralized way). LDAP is disabled by default. To enable it ",(0,i.kt)("a",{parentName:"p",href:"Configure-JATOS-on-a-Server.html#ldap-authentication-since-jatos--354"},"change the JATOS config file"),". "),(0,i.kt)("p",null,"Once LDAP is enabled, there will be an additional checkbox 'LDAP' on the overlay dialog when an admin creates a new user. Check this box to enforce authentication by LDAP. Normal JATOS users (locally authenticated) and LDAP users can co-exist in the same JATOS instance."),(0,i.kt)("p",null,"At the moment it is not possible to let JATOS create LDAP users automatically - they must be created by an JATOS admin manually."))}m.isMDXComponent=!0},1042:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_User_Manager1-bb29990dab4bba6b720240add9f09cf3.png"},2763:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_User_Manager2-34deb1e1b73304f3d46540253e39fed2.png"}}]);