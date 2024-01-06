"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(83117),o=(n(67294),n(3905));const a={title:"JATOS with Apache",slug:"/JATOS-with-Apache.html",sidebar_position:12},i=void 0,s={unversionedId:"Serving_the_Internet/JATOS-with-Apache",id:"version-3.8.1/Serving_the_Internet/JATOS-with-Apache",title:"JATOS with Apache",description:"This is an example of a configuration of Apache as a reverse proxy in front of JATOS. While it's not necessary to run JATOS with a proxy, it's common to do so in order to add encryption.",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-with-Apache.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-with-Apache.html",permalink:"/JATOS-with-Apache.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-with-Apache.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1704548352,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:12,frontMatter:{title:"JATOS with Apache",slug:"/JATOS-with-Apache.html",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"JATOS with Nginx",permalink:"/JATOS-with-Nginx.html"},next:{title:"jatos.js Reference",permalink:"/jatos.js-Reference.html"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is an example of a configuration of ",(0,o.kt)("a",{parentName:"p",href:"https://httpd.apache.org/"},"Apache")," as a reverse proxy in front of JATOS. While it's not necessary to run JATOS with a proxy, it's common to do so in order to add encryption."),(0,o.kt)("p",null,"It is necessary to use at least Apache ",(0,o.kt)("strong",{parentName:"p"},"version 2.4")," since JATOS relies on WebSockets that aren't supported by earlier versions. "),(0,o.kt)("p",null,"A JATOS server that handles sensitive or private data should always use encryption (HTTPS). A nice free certificate issuer is ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot.eff.org")," from the Electronic Frontier Foundation."),(0,o.kt)("p",null,"You have to add some modules to Apache to get it working:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"a2enmod proxy proxy_http proxy_wstunnel http2 rewrite headers ssl\n")),(0,o.kt)("p",null,"The following is an example of a proxy config with Apache. It is stored it in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apache2/sites-available/example.com.conf")," and added it to Apache with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo a2ensite example.com.conf"),". Change it to your needs. You probably want to change your servers address (",(0,o.kt)("inlineCode",{parentName:"p"},"www.example.com")," in the example) and the path to the SSL certificate and its key."),(0,o.kt)("p",null,"For JATOS versions 3.8.1 and older it is necessary to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-*")," headers with ",(0,o.kt)("inlineCode",{parentName:"p"},'RequestHeader set X-Forwarded-Proto "https"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'RequestHeader set X-Forwarded-Ssl "on"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ProxyPreserveHost On")," to tell JATOS the original requester's address. This is not necessary with version 3.8.2 and newer."),(0,o.kt)("p",null,"As an additional security measurement you can uncomment the ",(0,o.kt)("inlineCode",{parentName:"p"},'<Location "/jatos">')," and config your local network. This will restrict the access to JATOS' GUI (every URL starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"/jatos"),") to the local network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'<VirtualHost *:80>\n  ServerName www.example.com\n  \n  # Redirect all unencrypted traffic to the respective HTTPS page\n  Redirect "/" "https://www.example.com/"\n</VirtualHost>\n\n<VirtualHost *:443>\n  ServerName www.example.com\n\n  # Restrict access to JATOS GUI to local network\n  #<Location "/jatos">\n  #  Order deny,allow\n  #  Deny from all\n  #  Allow from 127.0.0.1 ::1\n  #  Allow from localhost\n  #  Allow from 192.168\n  #</Location>\n\n  # Your certificate for encryption\n  SSLEngine On\n  SSLCertificateFile /etc/ssl/certs/localhost.crt\n  SSLCertificateKeyFile /etc/ssl/private/localhost.key\n\n  # JATOS uses WebSockets for its batch and group channels\n  RewriteEngine On\n  RewriteCond %{HTTP:Upgrade} =websocket [NC]\n  RewriteRule /(.*)           ws://localhost:9000/$1 [P,L]\n  RewriteCond %{HTTP:Upgrade} !=websocket [NC]\n  RewriteRule /(.*)           http://localhost:9000/$1 [P,L]\n\n  # Proxy everything to the JATOS running on localhost on port 9000\n  ProxyPass / http://localhost:9000/\n  ProxyPassReverse / http://localhost:9000/\n</VirtualHost>\n')))}d.isMDXComponent=!0}}]);