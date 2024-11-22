"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2113],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(83117),r=(n(67294),n(3905));const a={title:"JATOS Study Archive (JZIP)",slug:"/JATOS-Study-Archive-JZIP.html",sidebar_position:4},s=void 0,l={unversionedId:"References_Configs_and_JATOS_API/JATOS-Study-Archive-JZIP",id:"version-3.9.1/References_Configs_and_JATOS_API/JATOS-Study-Archive-JZIP",title:"JATOS Study Archive (JZIP)",description:"This is advanced knowledge about JATOS. If you just want to use JATOS to run a study it is not necessary to read this.",source:"@site/versioned_docs/version-3.9.1/References_Configs_and_JATOS_API/JATOS-Study-Archive-JZIP.md",sourceDirName:"References_Configs_and_JATOS_API",slug:"/JATOS-Study-Archive-JZIP.html",permalink:"/JATOS-Study-Archive-JZIP.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.9.1/References_Configs_and_JATOS_API/JATOS-Study-Archive-JZIP.md",tags:[],version:"3.9.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1732281913,formattedLastUpdatedAt:"Nov 22, 2024",sidebarPosition:4,frontMatter:{title:"JATOS Study Archive (JZIP)",slug:"/JATOS-Study-Archive-JZIP.html",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JATOS API",permalink:"/JATOS-API.html"},next:{title:"JATOS Results Archive (JRZIP)",permalink:"/JATOS-Results-Archive-JRZIP.html"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"JZIP File system structure",id:"jzip-file-system-structure",level:3},{value:"Study assets directory",id:"study-assets-directory",level:3},{value:"JAS file schema",id:"jas-file-schema",level:3},{value:"Example of a JAS file",id:"example-of-a-jas-file",level:4},{value:"JSON Schema of a JAS file",id:"json-schema-of-a-jas-file",level:4}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is ",(0,r.kt)("strong",{parentName:"p"},"advanced knowledge")," about JATOS. If you just want to use JATOS to run a study it is not necessary to read this.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'A JZIP ("JATOS study archive") is a file package format used to exchange JATOS studies between different JATOS instances. A JZIP aggregates the study assets and associated metadata (study properties) into one file for distribution. They are built on the ZIP format and have a ',(0,r.kt)("em",{parentName:"p"},".jzip")," file extension."),(0,r.kt)("h3",{id:"jzip-file-system-structure"},"JZIP File system structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 study assets directory (actual name is defined in the study properties)\n\u2502   \u251c\u2500\u2500 some asset file\n\u2502   \u251c\u2500\u2500 some asset file\n\u2502   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 JAS file (containing the study properties in JSON format with a .jas file extension)\n")),(0,r.kt)("h3",{id:"study-assets-directory"},"Study assets directory"),(0,r.kt)("p",null,"This is a copy of the study assets directory."),(0,r.kt)("h3",{id:"jas-file-schema"},"JAS file schema"),(0,r.kt)("p",null,"The JAS file contains the study properties in JSON format."),(0,r.kt)("h4",{id:"example-of-a-jas-file"},"Example of a JAS file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "3",\n    "data": {\n        "uuid": "537cfff1-de92-1d80-264c-6b589e82f6de",\n        "title": "Simple Reaction Time Task",\n        "description": "Here we descibe the study.",\n        "groupStudy": false,\n        "linearStudy": false,\n        "allowPreview": false,\n        "dirName": "simple_rt_task",\n        "comments": "",\n        "jsonData": "{\\"a\\":\\"test\\",\\"b\\":5}",\n        "endRedirectUrl": "",\n        "studyEntryMsg": null,\n        "componentList": [\n            {\n                "uuid": "dea21111-a966-5b24-9f15-a89fefa3f711",\n                "title": "Introduction and Consent",\n                "htmlFilePath": "intro.html",\n                "reloadable": true,\n                "active": true,\n                "comments": "",\n                "jsonData": null\n            },\n            {\n                "uuid": "970a92f0-b966-4b2f-bf15-b89fefa3f911",\n                "title": "Experiment",\n                "htmlFilePath": "experiment.html",\n                "reloadable": false,\n                "active": true,\n                "comments": "",\n                "jsonData": null\n            }\n        ],\n        "batchList": [\n            {\n                "uuid": "9c7992ca-aa24-4081-8b0e-ee70f49cd65f",\n                "title": "Default",\n                "active": true,\n                "maxActiveMembers": null,\n                "maxTotalMembers": null,\n                "maxTotalWorkers": null,\n                "allowedWorkerTypes": [\n                    "PersonalSingle",\n                    "Jatos",\n                    "PersonalMultiple"\n                ],\n                "comments": null,\n                "jsonData": null\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h4",{id:"json-schema-of-a-jas-file"},"JSON Schema of a JAS file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "https://json-schema.org/draft/2019-09/schema",\n    "$id": "http://example.com/example.json",\n    "type": "object",\n    "title": "Root Schema",\n    "required": [\n        "version",\n        "data"\n    ],\n    "properties": {\n        "version": {\n            "type": "string",\n            "title": "Version of this study property schema"\n        },\n        "data": {\n            "type": "object",\n            "title": "Study properties",\n            "required": [\n                "uuid",\n                "title",\n                "dirName",\n                "componentList"\n            ],\n            "properties": {\n                "uuid": {\n                    "type": "string",\n                    "title": "Study UUID"\n                },\n                "title": {\n                    "type": "string",\n                    "title": "Title"\n                },\n                "description": {\n                    "type": "string",\n                    "title": "Description"\n                },\n                "groupStudy": {\n                    "type": "boolean",\n                    "default": false,\n                    "title": "Group study flag"\n                },\n                "linearStudy": {\n                    "type": "boolean",\n                    "default": false,\n                    "title": "Linear study flag"\n                },\n                "allowPreview": {\n                    "type": "boolean",\n                    "default": false,\n                    "title": "Allow preview flag"\n                },\n                "dirName": {\n                    "type": "string",\n                    "title": "Study assets directory name"\n                },\n                "comments": {\n                    "type": "string",\n                    "title": "Comments"\n                },\n                "jsonData": {\n                    "type": "string",\n                    "title": "JSON data"\n                },\n                "endRedirectUrl": {\n                    "type": "string",\n                    "title": "End redirect URL"\n                },\n                "studyEntryMsg": {\n                    "type": "string",\n                    "title": "Study entry message"\n                },\n                "componentList": {\n                    "type": "array",\n                    "title": "List of components",\n                    "items": {\n                        "type": "object",\n                        "title": "Component",\n                        "required": [\n                            "uuid",\n                            "title",\n                            "htmlFilePath"\n                        ],\n                        "properties": {\n                            "uuid": {\n                                "type": "string",\n                                "title": "Component UUID"\n                            },\n                            "title": {\n                                "type": "string",\n                                "title": "Title"\n                            },\n                            "htmlFilePath": {\n                                "type": "string",\n                                "title": "HTML file path"\n                            },\n                            "reloadable": {\n                                "type": "boolean",\n                                "default": false,\n                                "title": "Reloadable component flag"\n                            },\n                            "active": {\n                                "type": "boolean",\n                                "default": true,\n                                "title": "Component active flag"\n                            },\n                            "comments": {\n                                "type": "string",\n                                "title": "Comments"\n                            },\n                            "jsonData": {\n                                "type": "null",\n                                "title": "JSON data"\n                            }\n                        }\n                    }\n                },\n                "batchList": {\n                    "type": "array",\n                    "title": "List of batches",\n                    "items": {\n                        "type": "object",\n                        "title": "Batch",\n                        "required": [\n                            "uuid",\n                            "title",\n                            "allowedWorkerTypes"\n                        ],\n                        "properties": {\n                            "uuid": {\n                                "type": "string",\n                                "title": "Batch UUID"\n                            },\n                            "title": {\n                                "type": "string",\n                                "title": "Title"\n                            },\n                            "active": {\n                                "type": "boolean",\n                                "default": true,\n                                "title": "Batch active flag"\n                            },\n                            "maxActiveMembers": {\n                                "type": "integer",\n                                "default": "null",\n                                "title": "Max active members"\n                            },\n                            "maxTotalMembers": {\n                                "type": "integer",\n                                "default": "null",\n                                "title": "Max total members"\n                            },\n                            "maxTotalWorkers": {\n                                "type": "integer",\n                                "default": "null",\n                                "title": "Max total workers"\n                            },\n                            "allowedWorkerTypes": {\n                                "type": "array",\n                                "title": "Allowed worker types",\n                                "description": "Possible items are: GeneralMultiple, GeneralSingle, Jatos, MTSandbox, MT, PersonalMultiple, PersonalSingle"\n                                "items": {\n                                    "type": "string",\n                                    "title": "Worker type"\n                                }\n                            },\n                            "comments": {\n                                "type": "string",\n                                "title": "Comments"\n                            },\n                            "jsonData": {\n                                "type": "string",\n                                "title": "JSON data"\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')))}c.isMDXComponent=!0}}]);