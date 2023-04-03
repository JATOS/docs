"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7614],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,k=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2227:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=n(3117),o=(n(7294),n(3905));const r={title:"JATOS API",slug:"/JATOS-API.html",sidebar_position:2},i=void 0,s={unversionedId:"Reference/JATOS-API",id:"Reference/JATOS-API",title:"JATOS API",description:"Introduction",source:"@site/docs/Reference/JATOS-API.md",sourceDirName:"Reference",slug:"/JATOS-API.html",permalink:"/next/JATOS-API.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Reference/JATOS-API.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1680550539,formattedLastUpdatedAt:"Apr 3, 2023",sidebarPosition:2,frontMatter:{title:"JATOS API",slug:"/JATOS-API.html",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"jatos.js Reference",permalink:"/next/jatos.js-Reference.html"},next:{title:"JATOS Study Archive (JZIP)",permalink:"/next/JATOS-Study-Archive-JZIP.html"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Have a look and try it out",id:"have-a-look-and-try-it-out",level:2},{value:"OpenAPI specification",id:"openapi-specification",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Personal access tokens",id:"personal-access-tokens",level:2},{value:"How to generate a token",id:"how-to-generate-a-token",level:3},{value:"Deactivate the JATOS API",id:"deactivate-the-jatos-api",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Since version 3.8.1 JATOS offers an (HTTP) API to make integrating JATOS into other tools easier. One usecase is to call JATOS directly from Python, R, Matlab (or any other programming language). "),(0,o.kt)("p",null,"Things that are possible with the API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Import/export studies")," "),(0,o.kt)("li",{parentName:"ul"},"Update your study by uploading/downloading/deleting single ",(0,o.kt)("strong",{parentName:"li"},"study assets files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Export results")),(0,o.kt)("li",{parentName:"ul"},"Export ",(0,o.kt)("strong",{parentName:"li"},"study/componnent properties")),(0,o.kt)("li",{parentName:"ul"},"Get ",(0,o.kt)("strong",{parentName:"li"},"study codes")," (to run studies)")),(0,o.kt)("h2",{id:"have-a-look-and-try-it-out"},"Have a look and try it out"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can use ",(0,o.kt)("a",{parentName:"li",href:"http://petstore.swagger.io/?url=https://raw.githubusercontent.com/JATOS/JATOS/api_token/jatos-api.yaml"},"petstore.swagger.io")," to see all endpoints including their descriptions and even try it out with your local JATOS (by clicking the link the API specs will be automatically loaded)"),(0,o.kt)("li",{parentName:"ol"},"To test the API with your local JATOS choose the server ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:9000")," (probably already set)"),(0,o.kt)("li",{parentName:"ol"},"JATOS API uses ",(0,o.kt)("em",{parentName:"li"},"personal access tokens")," with ",(0,o.kt)("em",{parentName:"li"},"bearer authentication"),". ",(0,o.kt)("a",{parentName:"li",href:"JATOS-API.html#how-to-generate-a-token"},"Get a token")," and copy-paste it into ",(0,o.kt)("em",{parentName:"li"},"Authorize")," -> ",(0,o.kt)("em",{parentName:"li"},"Bearer Auth"),". Don't forget to click on ",(0,o.kt)("em",{parentName:"li"},"Authorize"),"."),(0,o.kt)("li",{parentName:"ol"},"Try it.")),(0,o.kt)("h2",{id:"openapi-specification"},"OpenAPI specification"),(0,o.kt)("p",null,"The JATOS API uses ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/JATOS/JATOS/api_token/jatos-api.yaml"},"OpenAPI 3 for specification"),". You can use ",(0,o.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/?url=https://raw.githubusercontent.com/JATOS/JATOS/api_token/jatos-api.yaml"},"petstore.swagger.io")," to have an easy navigatable page."),(0,o.kt)("p",null,"This is the first version of the API. If you are missing endpoints please write an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/issues"},"GitHub issue"),"."),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"The JATOS API uses ",(0,o.kt)("strong",{parentName:"p"},"bearer authentication"),". It's pretty simple."),(0,o.kt)("p",null,"From ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"swagger.io"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. The name "Bearer authentication" can be understood as "give access to the bearer of this token." The bearer token is a cryptic string, usually generated by the server in response to a login request. The client must send this token in the Authorization header when making requests to protected resources. ')),(0,o.kt)("p",null,"Every HTTP request to the API needs this header (exchange ",(0,o.kt)("inlineCode",{parentName:"p"},"<token>")," with your token)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer <token>\n")),(0,o.kt)("p",null,"A command-line request with ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," could look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -H "Authorization: Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f" https://www.example.com/jatos/api/v1/admin/token\n')),(0,o.kt)("h2",{id:"personal-access-tokens"},"Personal access tokens"),(0,o.kt)("p",null,"The JATOS API uses personal access tokens (PATs or API tokens)."),(0,o.kt)("p",null,"From ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Personal_access_token"},"wikipedia"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"a personal access token (or PAT) is a string of characters that can be used to authenticate a user when accessing a computer system instead of the usual password. Though associated with a single account, multiple PATs may be created, and can be manipulated independently of the password associated with that account, including creation and revocation of PATs without altering the password.")),(0,o.kt)("p",null,"Unlike other systems (e.g. GitHub) JATOS' tokens have no roles or scopes. A token has the same access as the user they are associated with. Needless to say a token can only be used to access studies including their result data if the associated user is a member of this study. Only ",(0,o.kt)("em",{parentName:"p"},"admin tokens")," (tokens associated with an admin user) can access certain administration endpoints."),(0,o.kt)("h3",{id:"how-to-generate-a-token"},"How to generate a token"),(0,o.kt)("p",null,"Go to your user's page (click on your name in the top-right header). Then click the button ",(0,o.kt)("em",{parentName:"p"},"API Tokens"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API token 1",src:n(6747).Z,width:"1914",height:"236"})),(0,o.kt)("p",null,"In the pop-up window click the button ",(0,o.kt)("em",{parentName:"p"},'New Token". Then choose a descriptive _name')," (doesn't have to be unique). Choose the time period when the token is about to expire. Click ",(0,o.kt)("em",{parentName:"p"},"Generate"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API token 1",src:n(8890).Z,width:"928",height:"360"})),(0,o.kt)("p",null,"Now your token will be shown. ",(0,o.kt)("strong",{parentName:"p"},"Copy it to a safe place"),". ",(0,o.kt)("strong",{parentName:"p"},"It will never be shown to you again"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API token 1",src:n(9724).Z,width:"927",height:"413"})),(0,o.kt)("p",null,"In the token overview windows you can temporarily deactivate a token or delete it altogether."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"API token 1",src:n(6214).Z,width:"927",height:"413"})),(0,o.kt)("h2",{id:"deactivate-the-jatos-api"},"Deactivate the JATOS API"),(0,o.kt)("p",null,"By default the API is activated and ready to use. If, for whatever reasons, you want to turn it off, edit the ",(0,o.kt)("em",{parentName:"p"},"conf/production.conf")," file in the JATOS installation folder. Search for ",(0,o.kt)("inlineCode",{parentName:"p"},"jatos.api.allowed")," and remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"#"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jatos.api.allowed = false\n")))}u.isMDXComponent=!0},6747:function(e,t,n){t.Z=n.p+"assets/images/api_tokens_1-70b8eeb91d7299dc790fbea83ed8140a.png"},8890:function(e,t,n){t.Z=n.p+"assets/images/api_tokens_2-3410effdb426802405ac89ff76dd27b2.png"},9724:function(e,t,n){t.Z=n.p+"assets/images/api_tokens_3-b29c6450a8453a2fda40c850d5976adb.png"},6214:function(e,t,n){t.Z=n.p+"assets/images/api_tokens_4-5f34d5ac05c9c7e0422e08e2a486fcb2.png"}}]);