"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1277],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,_=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(_,i(i({ref:t},l),{},{components:n})):o.createElement(_,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var o=n(3117),r=(n(7294),n(3905));const a={title:"JATOS with Nginx",slug:"/JATOS-with-Nginx.html",sidebar_position:9},i=void 0,s={unversionedId:"Serving_the_Internet/JATOS-with-Nginx",id:"Serving_the_Internet/JATOS-with-Nginx",title:"JATOS with Nginx",description:"These are examples for configurations of Nginx as a proxy in front of JATOS. It is not necessary to run JATOS with a proxy but it's common. They support WebSockets for JATOS' group studies.",source:"@site/docs/Serving_the_Internet/JATOS-with-Nginx.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-with-Nginx.html",permalink:"/next/JATOS-with-Nginx.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Serving_the_Internet/JATOS-with-Nginx.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1683712351,formattedLastUpdatedAt:"May 10, 2023",sidebarPosition:9,frontMatter:{title:"JATOS with Nginx",slug:"/JATOS-with-Nginx.html",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Install JATOS via Docker",permalink:"/next/Install-JATOS-via-Docker.html"},next:{title:"JATOS with Apache",permalink:"/next/JATOS-with-Apache.html"}},c={},p=[{value:"With HTTPS",id:"with-https",level:2},{value:"With HTTPS and Docker",id:"with-https-and-docker",level:2},{value:"Simple without encryption",id:"simple-without-encryption",level:2}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These are examples for configurations of ",(0,r.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx")," as a proxy in front of JATOS. It is not necessary to run JATOS with a proxy but it's common. They support WebSockets for JATOS' group studies. "),(0,r.kt)("p",null,"The following two configs are the content of ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),". Change them to your needs. You probably want to change your servers address (",(0,r.kt)("inlineCode",{parentName:"p"},"www.example.com")," in the example) and the path to the SSL certificate and its key. This ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy_set_header X-Forwarded-*")," is necessary to tell JATOS the original requester's IP address - please leave it unchanged."),(0,r.kt)("p",null,"As an additional security measurement you can uncomment the ",(0,r.kt)("inlineCode",{parentName:"p"},"location /jatos")," and config your local network. This will restrict the access to JATOS' GUI (every URL starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"/jatos"),") to the local network."),(0,r.kt)("p",null,"A JATOS server that handles sensitive or private data should always use encryption (HTTPS). A nice free certificate issuer is ",(0,r.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot.eff.org")," from the Electronic Frontier Foundation."),(0,r.kt)("h2",{id:"with-https"},"With HTTPS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"user www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n\nevents {\n        worker_connections 768;\n        # multi_accept on;\n}\n\nhttp {\n        sendfile             on;\n        tcp_nopush           on;\n        tcp_nodelay          on;\n        keepalive_timeout    65;\n        client_max_body_size 500M;\n\n        include      /etc/nginx/mime.types;\n        default_type application/octet-stream;\n\n        proxy_buffering    off;\n        proxy_set_header   X-Forwarded-Proto https;\n        proxy_set_header   X-Forwarded-Ssl on;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   Host $http_host;\n        proxy_http_version 1.1;\n\n        upstream jatos-backend {\n                server 127.0.0.1:9000;\n        }\n\n        # needed for websockets\n        map $http_upgrade $connection_upgrade {\n                default upgrade;\n                ''      close;\n        }\n\n        # redirect http to https\n        server {\n                listen      80;\n                server_name www.example.com;\n                rewrite     ^ https://www.example.com$request_uri? permanent;\n        }\n\n        server {\n                listen        443 ssl;\n                server_name   www.example.com;\n\n                keepalive_timeout    70;\n\n                ssl_certificate      /etc/ssl/certs/localhost.crt;\n                ssl_certificate_key  /etc/ssl/private/localhost.key;\n\n                ssl_protocols             TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;\n                ssl_prefer_server_ciphers on;\n\n                # websocket location (JATOS' group and batch channel and the test page)\n                location ~ \"/(jatos/testWebSocket|publix/[a-z0-9-]+/(group/join|batch/open))\" {\n                        proxy_pass              http://jatos-backend;\n                        proxy_http_version      1.1;\n                        proxy_set_header        Upgrade $http_upgrade;\n                        proxy_set_header        Connection $connection_upgrade;\n                        proxy_connect_timeout   7d; # keep open for 7 days even without any transmission\n                        proxy_send_timeout      7d;\n                        proxy_read_timeout      7d;\n                }\n\n                # restrict access to JATOS' GUI to local network 192.168.1.*\n                #location /jatos {\n                #       allow                   192.168.1.0/24;\n                #       deny                    all;\n                #       proxy_pass              http://jatos-backend;\n                #       proxy_connect_timeout   300;\n                #       proxy_send_timeout      300;\n                #       proxy_read_timeout      300;\n                #       send_timeout            300;\n                #}\n\n                # all other traffic\n                location / {\n                        proxy_pass              http://jatos-backend;\n                        proxy_connect_timeout   300;\n                        proxy_send_timeout      300;\n                        proxy_read_timeout      300;\n                        send_timeout            300;\n                }\n        }\n\n        access_log /var/log/nginx/access.log;\n        error_log /var/log/nginx/error.log;\n\n        include /etc/nginx/conf.d/*.conf;\n        #include /etc/nginx/sites-enabled/*;\n}\n")),(0,r.kt)("h2",{id:"with-https-and-docker"},"With HTTPS and Docker"),(0,r.kt)("p",null,"Have a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/robinsonkwame/jatos-https-docker-compose"},"github.com/robinsonkwame/jatos-https-docker-compose")," for a good example in how to do this (Thanks to Kwame Porter Robinson)"),(0,r.kt)("h2",{id:"simple-without-encryption"},"Simple without encryption"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"user www-data;\nworker_processes auto;\npid /run/nginx.pid;\n\nevents {\n        worker_connections 768;\n        # multi_accept on;\n}\n\nhttp {\n        sendfile on;\n        keepalive_timeout 65;\n        client_max_body_size 500M;\n\n        include /etc/nginx/mime.types;\n        default_type application/octet-stream;\n\n        proxy_buffering    off;\n        proxy_set_header   X-Forwarded-Proto http;\n        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header   Host $http_host;\n        proxy_http_version 1.1;\n\n        upstream jatos-backend {\n                server 127.0.0.1:9000;\n        }\n\n        # needed for websockets\n        map $http_upgrade $connection_upgrade {\n                default upgrade;\n                ''      close;\n        }\n\n        server {\n                listen               80;\n\n                keepalive_timeout    70;\n                server_name          www.example.com;\n\n                # websocket location (JATOS' group and batch channel and the test page)\n                location ~ \"^/(jatos/testWebSocket|publix/[a-z0-9-]+/(group/join|batch/open))\" {\n                        proxy_pass              http://jatos-backend;\n                        proxy_http_version      1.1;\n                        proxy_set_header        Upgrade $http_upgrade;\n                        proxy_set_header        Connection $connection_upgrade;\n                        proxy_connect_timeout   7d; # keep open for 7 days even without any transmission\n                        proxy_send_timeout      7d;\n                        proxy_read_timeout      7d;\n                }\n\n                # restrict access to JATOS' GUI to local network\n                #location /jatos {\n                #       allow           192.168.1.0/24;\n                #       deny            all;\n                #       proxy_pass      http://jatos-backend;\n                #       proxy_connect_timeout   300;\n                #       proxy_send_timeout      300;\n                #       proxy_read_timeout      300;\n                #       send_timeout            300;\n                #}\n\n                # all other traffic\n                location / {\n                        proxy_pass              http://jatos-backend;\n                        proxy_connect_timeout   300;\n                        proxy_send_timeout      300;\n                        proxy_read_timeout      300;\n                        send_timeout            300;\n\n                }\n        }\n\n        access_log /var/log/nginx/access.log;\n        error_log /var/log/nginx/error.log;\n\n        include /etc/nginx/conf.d/*.conf;\n        #include /etc/nginx/sites-enabled/*;\n}\n")))}d.isMDXComponent=!0}}]);