"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[296],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(83117),r=a(67294),o=a(34334),s=a(12466),i=a(76775),l=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,o]),tabValues:o}}var f=a(72389);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(c(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",b,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},27068:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(83117),r=(a(67294),a(3905)),o=a(74866),s=a(85162);const i={title:"JATOS API",slug:"/JATOS-API.html",sidebar_position:3},l=void 0,u={unversionedId:"References_Configs_and_JATOS_API/JATOS-API",id:"version-3.9.1/References_Configs_and_JATOS_API/JATOS-API",title:"JATOS API",description:"Using the JATOS API requires some advanced knowledge of HTTP and how to call APIs from e.g. a programming language or a terminal. If you just want to run a study with JATOS this is probably not what you need. Anything that you can do (programmatially) with the API can also be done (by hand) with JATOS' GUI.",source:"@site/versioned_docs/version-3.9.1/References_Configs_and_JATOS_API/JATOS-API.md",sourceDirName:"References_Configs_and_JATOS_API",slug:"/JATOS-API.html",permalink:"/JATOS-API.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/References_Configs_and_JATOS_API/JATOS-API.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1725261939,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:3,frontMatter:{title:"JATOS API",slug:"/JATOS-API.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JATOS Configuration",permalink:"/JATOS_Configuration.html"},next:{title:"JATOS Study Archive (JZIP)",permalink:"/JATOS-Study-Archive-JZIP.html"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Have a look and try it out",id:"have-a-look-and-try-it-out",level:2},{value:"OpenAPI specification",id:"openapi-specification",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Personal access tokens",id:"personal-access-tokens",level:2},{value:"How to generate a token",id:"how-to-generate-a-token",level:3},{value:"How to import a study",id:"how-to-import-a-study",level:2},{value:"Deactivate the JATOS API",id:"deactivate-the-jatos-api",level:2}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using the JATOS API requires some ",(0,r.kt)("strong",{parentName:"p"},"advanced knowledge")," of HTTP and how to call APIs from e.g. a programming language or a terminal. If you just want to run a study with JATOS this is probably not what you need. Anything that you can do (programmatially) with the API can also be done (by hand) with JATOS' GUI.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Since version 3.8.1 JATOS offers an (HTTP) API to make integrating JATOS into other tools easier. One common usage of the API is to call JATOS directly from Python, R, Matlab (or any other programming language) in an automated and programatic fashion. "),(0,r.kt)("p",null,"Things that are possible with the API:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Import/export studies")," "),(0,r.kt)("li",{parentName:"ul"},"Update your study by uploading/downloading/deleting single ",(0,r.kt)("strong",{parentName:"li"},"study assets files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Export results")),(0,r.kt)("li",{parentName:"ul"},"Export ",(0,r.kt)("strong",{parentName:"li"},"study/componnent properties")),(0,r.kt)("li",{parentName:"ul"},"Get ",(0,r.kt)("strong",{parentName:"li"},"study codes")," (to build study links that can be distributed to participants)")),(0,r.kt)("h2",{id:"have-a-look-and-try-it-out"},"Have a look and try it out"),(0,r.kt)("p",null,"You can even try out the API with your local JATOS. Here's how:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"JATOS-API.html#how-to-generate-a-token"},"Generate a token")," in your local JATOS. (The JATOS API uses ",(0,r.kt)("em",{parentName:"li"},"personal access tokens")," with ",(0,r.kt)("em",{parentName:"li"},"bearer authentication"),".)"),(0,r.kt)("li",{parentName:"ol"},"Copy your token"),(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"http://petstore.swagger.io/?url=https://raw.githubusercontent.com/JATOS/JATOS/main/jatos-api.yaml"},"petstore.swagger.io"),". You'll see all API endpoints and their descriptions. "),(0,r.kt)("li",{parentName:"ol"},"At the top of the Swagger page, you'll find a green 'Authorize' button. Paste the JATOS token into ",(0,r.kt)("em",{parentName:"li"},"Authorize")," -> ",(0,r.kt)("em",{parentName:"li"},"Bearer Auth"),". Don't forget to click on ",(0,r.kt)("em",{parentName:"li"},"Authorize"),"."),(0,r.kt)("li",{parentName:"ol"},"Choose the server ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:9000")," (probably already set)"),(0,r.kt)("li",{parentName:"ol"},"Try it out! (Click on each link to try the corresponding endpoint with pre-loaded defaults)")),(0,r.kt)("h2",{id:"openapi-specification"},"OpenAPI specification"),(0,r.kt)("p",null,"The JATOS API uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/blob/main/jatos-api.yaml"},"OpenAPI 3 for specification"),". You can use ",(0,r.kt)("a",{parentName:"p",href:"http://petstore.swagger.io/?url=https://raw.githubusercontent.com/JATOS/JATOS/main/jatos-api.yaml"},"petstore.swagger.io")," to have an easy navigatable page."),(0,r.kt)("p",null,"The API is work in progress (this is the first version). To request any additional endpoints, please write a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/issues"},"GitHub issue"),"."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The JATOS API uses ",(0,r.kt)("strong",{parentName:"p"},"bearer authentication"),". It's pretty simple."),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"swagger.io"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. The name "Bearer authentication" can be understood as "give access to the bearer of this token." The bearer token is a cryptic string, usually generated by the server in response to a login request. The client must send this token in the Authorization header when making requests to protected resources. ')),(0,r.kt)("p",null,"Every HTTP request to the API needs this header (replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<token>")," with your token):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Authorization: Bearer <token>\n")),(0,r.kt)("p",null,"And an example in different tools/languages with the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/jatos/api/v1/admin/token")," that just returns some info about the used token:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -H "Authorization: Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f" https://example.com/jatos/api/v1/admin/token\n'))),(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import requests\n\nheaders = {\n    'Authorization': 'Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f',\n}\nresponse = requests.post('https://example.com/jatos/api/v1/admin/token', headers=headers)\n"))),(0,r.kt)(s.Z,{value:"r",label:"R",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'require(httr)\n\nheaders = c(\n  `Authorization` = "Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f"\n)\nres <- httr::GET(url = "https://example.com/jatos/api/v1/admin/token", httr::add_headers(.headers=headers))\n'))),(0,r.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"fetch('https://example.com/jatos/api/v1/admin/token', {\n  headers: {\n    'Authorization': 'Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f'\n  }\n});\n"))),(0,r.kt)(s.Z,{value:"matlab",label:"MATLAB",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-matlab"},"%% HTTP Interface\nimport matlab.net.*\nimport matlab.net.http.*\n\nheader = HeaderField('Authorization', 'Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f');\nuri = URI('https://example.com/jatos/api/v1/admin/token');\nresponse = RequestMessage('get', header).send(uri.EncodedURI);\n"))),(0,r.kt)(s.Z,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$headers=@{}\n$headers.Add("Authorization", "Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f")\n$response = Invoke-WebRequest -Uri \'https://www.example.com/jatos/api/v1/admin/token\' -Method GET -Headers $headers\n')))),(0,r.kt)("h2",{id:"personal-access-tokens"},"Personal access tokens"),(0,r.kt)("p",null,"The JATOS API uses personal access tokens (PATs or API tokens)."),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Personal_access_token"},"wikipedia"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"a personal access token (or PAT) is a string of characters that can be used to authenticate a user when accessing a computer system instead of the usual password. Though associated with a single account, multiple PATs may be added, and can be manipulated independently of the password associated with that account, including creation and revocation of PATs without altering the password.")),(0,r.kt)("p",null,"Unlike other systems (e.g. GitHub) JATOS' tokens have no roles or scopes. A token has the same access as the user they are associated with. Therefore, naturally, a token can only be used to access studies or their result data if the associated user is a member of this study. Only ",(0,r.kt)("em",{parentName:"p"},"admin tokens")," (tokens associated with an admin user) can access the administration endpoints."),(0,r.kt)("h3",{id:"how-to-generate-a-token"},"How to generate a token"),(0,r.kt)("p",null,"Go to the user menu (click on your name in the top-right header). Then click the button ",(0,r.kt)("em",{parentName:"p"},"My API tokens"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API token 1",src:a(86801).Z,width:"1917",height:"457"})),(0,r.kt)("p",null,"In the pop-up window click the button ",(0,r.kt)("em",{parentName:"p"},'New Token". Then choose a descriptive _name')," (doesn't have to be unique). Choose the time period when the token is about to expire. Click ",(0,r.kt)("em",{parentName:"p"},"Generate"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API token 1",src:a(37348).Z,width:"1917",height:"457"})),(0,r.kt)("p",null,"Now your token will be shown. ",(0,r.kt)("strong",{parentName:"p"},"Copy it to a safe place"),". ",(0,r.kt)("strong",{parentName:"p"},"It will never be shown to you again"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API token 1",src:a(13321).Z,width:"1918",height:"513"})),(0,r.kt)("p",null,"In the token overview windows you can temporarily deactivate a token or delete it altogether."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"API token 1",src:a(50773).Z,width:"1918",height:"513"})),(0,r.kt)("h2",{id:"how-to-import-a-study"},"How to import a study"),(0,r.kt)("p",null,"The endpoint to import a study, ",(0,r.kt)("inlineCode",{parentName:"p"},"/jatos/api/v1/study"),", can be a bit tricky. It uses POST request with the header ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type: multipart/form-data")," to upload the a study archive file (JZIP) in binary format."),(0,r.kt)("p",null,"Here are some examples in different tools/languages. They all upload a JZIP file named ",(0,r.kt)("inlineCode",{parentName:"p"},"test.jzip"),":"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X 'POST'   'https://example.com/jatos/api/v1/study'   -H 'accept: application/json' -H 'Authorization: Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f'   -H 'Content-Type: multipart/form-data'   -F 'study=@test.jzip'\n"))),(0,r.kt)(s.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import requests\n\nheaders = {\n    'accept': 'application/json',\n    'Authorization': 'Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f',\n    # requests won't add a boundary if this header is set when you pass files=\n    # 'Content-Type': 'multipart/form-data',\n}\n\nfiles = {\n    'study': open('test.jzip', 'rb'),\n}\n\nresponse = requests.post('https://example.com/jatos/api/v1/study', headers=headers, files=files)\n"))),(0,r.kt)(s.Z,{value:"r",label:"R",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'require(httr)\n\nheaders = c(\n  `Authorization` = "Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f"\n)\nres <- httr::GET(url = "https://example.com/jatos/api/v1/admin/token", httr::add_headers(.headers=headers))\n'))),(0,r.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const form = new FormData();\nform.append('study', File(['<data goes here>'], 'test.jzip'));\n\nfetch('https://example.com/jatos/api/v1/study', {\n  method: 'POST',\n  headers: {\n    'accept': 'application/json',\n    'Authorization': 'Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f',\n    'Content-Type': 'multipart/form-data'\n  },\n  body: form\n});\n"))),(0,r.kt)(s.Z,{value:"matlab",label:"MATLAB",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-matlab"},"%% HTTP Interface\nimport matlab.net.*\nimport matlab.net.http.*\nimport matlab.net.http.io.*\n\nheader = [\n    field.AcceptField(MediaType('application/json'))\n    HeaderField('Authorization', 'Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f')\n    HeaderField('Content-Type', 'multipart/form-data')\n]';\nuri = URI('https://example.com/jatos/api/v1/study');\nbody = MultipartFormProvider('study', FileProvider('test.jzip'));\nresponse = RequestMessage('post', header, body).send(uri.EncodedURI);\n"))),(0,r.kt)(s.Z,{value:"powershell",label:"PowerShell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'$headers=@{}\n$headers.Add("accept", "application/json")\n$headers.Add("Authorization", "Bearer jap_OeYwru727YeLzxcHSvIFlTQ52Ud03wo7cd41f")\n$headers.Add("Content-Type", "multipart/form-data")\n$response = Invoke-WebRequest -Uri \'https://example.com/jatos/api/v1/study\' -Method POST -Headers $headers\n\n')))),(0,r.kt)("h2",{id:"deactivate-the-jatos-api"},"Deactivate the JATOS API"),(0,r.kt)("p",null,"By default the API is activated and ready to use. If, for whatever reasons, you want to turn it off, edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/jatos.conf")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," in version < 3.8.3) in the JATOS installation folder. Search for ",(0,r.kt)("inlineCode",{parentName:"p"},"jatos.api.allowed")," and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jatos.api.allowed = false\n")))}m.isMDXComponent=!0},86801:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api_tokens_1-d45beb116ccd9910388effdba6fd8460.png"},37348:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api_tokens_2-bd2d1416d54db468580872fa818993eb.png"},13321:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api_tokens_3-ac1943693017862e3b6bee36c42031e0.png"},50773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/api_tokens_4-a2237893c7bc1c807df29dd53d68cb14.png"}}]);