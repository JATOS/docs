"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1684],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5962:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=t(3117),a=(t(7294),t(3905));const i={title:"JATOS Study Archive (JZIP)",slug:"/JATOS-Study-Archive-JZIP.html",sidebar_position:3},o=void 0,l={unversionedId:"Reference/JATOS-Study-Archive-JZIP",id:"Reference/JATOS-Study-Archive-JZIP",title:"JATOS Study Archive (JZIP)",description:"This is advanced knowledge about JATOS. If you just want to use JATOS to run a study it is not necessary to read this.",source:"@site/docs/Reference/JATOS-Study-Archive-JZIP.md",sourceDirName:"Reference",slug:"/JATOS-Study-Archive-JZIP.html",permalink:"/next/JATOS-Study-Archive-JZIP.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Reference/JATOS-Study-Archive-JZIP.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1685716948,formattedLastUpdatedAt:"Jun 2, 2023",sidebarPosition:3,frontMatter:{title:"JATOS Study Archive (JZIP)",slug:"/JATOS-Study-Archive-JZIP.html",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JATOS API",permalink:"/next/JATOS-API.html"},next:{title:"JATOS Results Archive (.jrzip)",permalink:"/next/JATOS-Results-Archive.html"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"JSON Schema of a <em>.jas</em> file:",id:"json-schema-of-a-jas-file",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is ",(0,a.kt)("strong",{parentName:"p"},"advanced knowledge")," about JATOS. If you just want to use JATOS to run a study it is not necessary to read this.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'A JZIP ("JATOS study archive") file is the file format JATOS uses exchange studies between different JATOS instances. A JZIP aggregates the study assets and associated metadata (study properties) into one file for distribution. They are built on the ZIP format and typically have a ',(0,a.kt)("em",{parentName:"p"},".jzip")," file extension."),(0,a.kt)("p",null,"File system format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"study assets directoy"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},".jas")," file containing the study properties in JSON format")),(0,a.kt)("p",null,"Example of a _.jas file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "3",\n    "data": {\n        "uuid": "537cfff1-de92-1d80-264c-6b589e82f6de",\n        "title": "Simple Reaction Time Task",\n        "description": "Here we descibe the study.",\n        "groupStudy": false,\n        "linearStudy": false,\n        "allowPreview": false,\n        "dirName": "simple_rt_task",\n        "comments": "",\n        "jsonData": null,\n        "endRedirectUrl": "",\n        "studyEntryMsg": null,\n        "componentList": [\n            {\n                "uuid": "dea21111-a966-5b24-9f15-a89fefa3f711",\n                "title": "Introduction and Consent",\n                "htmlFilePath": "intro.html",\n                "reloadable": true,\n                "active": true,\n                "comments": "",\n                "jsonData": null\n            },\n            {\n                "uuid": "970a92f0-b966-4b2f-bf15-b89fefa3f911",\n                "title": "Experiment",\n                "htmlFilePath": "experiment.html",\n                "reloadable": false,\n                "active": true,\n                "comments": "",\n                "jsonData": null\n            }\n        ],\n        "batchList": [\n            {\n                "uuid": "9c7992ca-aa24-4081-8b0e-ee70f49cd65f",\n                "title": "Default",\n                "active": true,\n                "maxActiveMembers": null,\n                "maxTotalMembers": null,\n                "maxTotalWorkers": null,\n                "allowedWorkerTypes": [\n                    "PersonalSingle",\n                    "Jatos",\n                    "PersonalMultiple"\n                ],\n                "comments": null,\n                "jsonData": null\n            }\n        ]\n    }\n}\n')),(0,a.kt)("h2",{id:"json-schema-of-a-jas-file"},"JSON Schema of a ",(0,a.kt)("em",{parentName:"h2"},".jas")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "http://json-schema.org/draft-04/schema#",\n  "type": "object",\n  "properties": {\n    "version": {\n      "type": "string"\n    },\n    "data": {\n      "type": "object",\n      "properties": {\n        "uuid": {\n          "type": "string"\n        },\n        "title": {\n          "type": "string"\n        },\n        "description": {\n          "type": "string"\n        },\n        "groupStudy": {\n          "type": "boolean"\n        },\n        "linearStudy": {\n          "type": "boolean"\n        },\n        "allowPreview": {\n          "type": "boolean"\n        },\n        "dirName": {\n          "type": "string"\n        },\n        "comments": {\n          "type": "string"\n        },\n        "jsonData": {\n          "type": "null"\n        },\n        "endRedirectUrl": {\n          "type": "string"\n        },\n        "studyEntryMsg": {\n          "type": "null"\n        },\n        "componentList": {\n          "type": "array",\n          "items": [\n            {\n              "type": "object",\n              "properties": {\n                "uuid": {\n                  "type": "string"\n                },\n                "title": {\n                  "type": "string"\n                },\n                "htmlFilePath": {\n                  "type": "string"\n                },\n                "reloadable": {\n                  "type": "boolean"\n                },\n                "active": {\n                  "type": "boolean"\n                },\n                "comments": {\n                  "type": "string"\n                },\n                "jsonData": {\n                  "type": "null"\n                }\n              },\n              "required": [\n                "uuid",\n                "title",\n                "htmlFilePath"\n              ]\n            }\n          ]\n        },\n        "batchList": {\n          "type": "array",\n          "items": [\n            {\n              "type": "object",\n              "properties": {\n                "uuid": {\n                  "type": "string"\n                },\n                "title": {\n                  "type": "string"\n                },\n                "active": {\n                  "type": "boolean"\n                },\n                "maxActiveMembers": {\n                  "type": "null"\n                },\n                "maxTotalMembers": {\n                  "type": "null"\n                },\n                "maxTotalWorkers": {\n                  "type": "null"\n                },\n                "allowedWorkerTypes": {\n                  "type": "array",\n                  "items": [\n                    {\n                      "type": "string"\n                    },\n                    {\n                      "type": "string"\n                    },\n                    {\n                      "type": "string"\n                    }\n                  ]\n                },\n                "comments": {\n                  "type": "null"\n                },\n                "jsonData": {\n                  "type": "null"\n                }\n              },\n              "required": [\n                "uuid",\n                "title"\n              ]\n            }\n          ]\n        }\n      },\n      "required": [\n        "uuid",\n        "title",\n        "dirName",\n        "componentList",\n        "batchList"\n      ]\n    }\n  },\n  "required": [\n    "version",\n    "data"\n  ]\n}\n')))}p.isMDXComponent=!0}}]);