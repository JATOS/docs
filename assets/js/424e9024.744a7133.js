"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7704],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6898:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(3117),o=(t(7294),t(3905));const i={title:"JATOS with Nginx",slug:"/JATOS-with-Nginx.html",sidebar_position:11},a=void 0,s={unversionedId:"Serving_the_Internet/JATOS-with-Nginx",id:"version-3.8.1/Serving_the_Internet/JATOS-with-Nginx",title:"JATOS with Nginx",description:"Here is an example for a configuration of Nginx as a reverse proxy in front of JATOS. It is not necessary to run JATOS with a proxy but it's common.",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-with-Nginx.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-with-Nginx.html",permalink:"/JATOS-with-Nginx.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-with-Nginx.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1692349542,formattedLastUpdatedAt:"Aug 18, 2023",sidebarPosition:11,frontMatter:{title:"JATOS with Nginx",slug:"/JATOS-with-Nginx.html",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"JATOS in a cluster",permalink:"/JATOS-in-a-cluster.html"},next:{title:"JATOS with Apache",permalink:"/JATOS-with-Apache.html"}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is an example for a configuration of ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx")," as a reverse proxy in front of JATOS. It is not necessary to run JATOS with a proxy but it's common."),(0,o.kt)("p",null,"A JATOS server that handles sensitive or private data should always use encryption (HTTPS). A nice free certificate issuer is ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot.eff.org")," from the Electronic Frontier Foundation."),(0,o.kt)("p",null,"The following config is the content of ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),". Change it to your needs. You probably want to change your servers address (",(0,o.kt)("inlineCode",{parentName:"p"},"www.example.com")," in the example) and the path to the SSL certificate and its key."),(0,o.kt)("p",null,"For JATOS versions 3.8.1 and older it is necessary to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-Forwarded-*")," headers with ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy_set_header")," to tell JATOS the original requester's IP address. This is not necessary from 3.8.2 and newer."),(0,o.kt)("p",null,"As an additional security measurement you can uncomment the ",(0,o.kt)("inlineCode",{parentName:"p"},"location /jatos")," and config your local network. This will restrict the access to JATOS' GUI (every URL starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"/jatos"),") to the local network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"user                    www-data;\npid                     /run/nginx.pid;\nworker_processes        auto;\nworker_rlimit_nofile    65535;\n\n# Load modules\ninclude                 /etc/nginx/modules-enabled/*.conf;\n\nevents {\n    multi_accept       on;\n    worker_connections 65535;\n}\n\nhttp {\n    sendfile                on;\n    tcp_nopush              on;\n    client_max_body_size    500M;\n\n    # MIME\n    include                 mime.types;\n    default_type            application/octet-stream;\n\n    # Logging\n    access_log              off;\n    error_log               /var/log/nginx/error.log warn;\n\n    proxy_buffering         off;\n    proxy_set_header        Host $http_host;\n    proxy_http_version      1.1;\n\n    # Needed for websockets\n    map $http_upgrade $connection_upgrade {\n        default upgrade;\n        ''      close;\n    }\n\n    # Load configs\n    include /etc/nginx/conf.d/*.conf;\n\n    upstream jatos-backend {\n        server 127.0.0.1:9000;\n    }\n\n    # Redirect http to https\n    server {\n        listen              80;\n        # --\x3e Change to your domain <--\n        server_name         www.example.com;\n        rewrite             ^ https://www.example.com$request_uri? permanent;\n    }\n\n    server {\n        listen               443 ssl http2;\n        # --\x3e Change to your domain <--\n        server_name          www.example.com;\n        keepalive_timeout    70;\n\n        # Encryption\n        # --\x3e Change to your certificate <--\n        ssl_certificate      /etc/ssl/certs/localhost.crt;\n        ssl_certificate_key  /etc/ssl/private/localhost.key;\n        ssl_protocols        TLSv1.2 TLSv1.3;\n\n        # WebSocket location (JATOS' group and batch channel and the test page)\n        location ~ \"/(jatos/testWebSocket|publix/[a-z0-9-]+/(group/join|batch/open))\" {\n            proxy_pass              http://jatos-backend;\n            proxy_http_version      1.1;\n            proxy_set_header        Upgrade $http_upgrade;\n            proxy_set_header        Connection $connection_upgrade;\n            proxy_connect_timeout   7d; # Keep open for 7 days even without any transmission\n            proxy_send_timeout      7d;\n            proxy_read_timeout      7d;\n        }\n\n        # Restrict access to JATOS' GUI to local network, e.g. 192.168.1.*\n        # location /jatos {\n        #     allow                   192.168.1.0/24;\n        #     deny                    all;\n        #     proxy_pass              http://jatos-backend;\n        #     proxy_connect_timeout   300;\n        #     proxy_send_timeout      300;\n        #     proxy_read_timeout      300;\n        #     send_timeout            300;\n        # }\n\n        # All other traffic\n        location / {\n            proxy_pass              http://jatos-backend;\n            proxy_connect_timeout   300;\n            proxy_send_timeout      300;\n            proxy_read_timeout      300;\n            send_timeout            300;\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);