"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),y=i,m=c["".concat(l,".").concat(y)]||c[y]||p[y]||s;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(83117),i=(n(67294),n(3905));const s={title:"JATOS Results Archive (JRZIP)",slug:"/JATOS-Results-Archive-JRZIP.html",sidebar_position:5},a=void 0,o={unversionedId:"References_Configs_and_JATOS_API/JATOS-Results-Archive-JRZIP",id:"version-3.8.1/References_Configs_and_JATOS_API/JATOS-Results-Archive-JRZIP",title:"JATOS Results Archive (JRZIP)",description:"This is advanced knowledge about JATOS. If you just want to use JATOS to run a study it is not necessary to read this.",source:"@site/versioned_docs/version-3.8.1/References_Configs_and_JATOS_API/JATOS-Results-Archive-JRZIP.md",sourceDirName:"References_Configs_and_JATOS_API",slug:"/JATOS-Results-Archive-JRZIP.html",permalink:"/JATOS-Results-Archive-JRZIP.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/References_Configs_and_JATOS_API/JATOS-Results-Archive-JRZIP.md",tags:[],version:"3.8.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1717153948,formattedLastUpdatedAt:"May 31, 2024",sidebarPosition:5,frontMatter:{title:"JATOS Results Archive (JRZIP)",slug:"/JATOS-Results-Archive-JRZIP.html",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"JATOS Study Archive (JZIP)",permalink:"/JATOS-Study-Archive-JZIP.html"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"JRZIP File system structure",id:"jrzip-file-system-structure",level:2},{value:"Metadata JSON Schema",id:"metadata-json-schema",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is ",(0,i.kt)("strong",{parentName:"p"},"advanced knowledge")," about JATOS. If you just want to use JATOS to run a study it is not necessary to read this.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'A JRZIP ("JATOS study results archive") is a file package format used to export results from JATOS instances. A JRZIP aggregates the results data, result files and associated metadata into one file for distribution. They are built on the ZIP format and have a ',(0,i.kt)("em",{parentName:"p"},".jrzip")," file extension. Hence every ZIP unpacker can be used to get to the files."),(0,i.kt)("h2",{id:"jrzip-file-system-structure"},"JRZIP File system structure"),(0,i.kt)("p",null,"A JRZIP file is organized by study results. Each study result folder (named ",(0,i.kt)("em",{parentName:"p"},"study_result_x"),",  ",(0,i.kt)("em",{parentName:"p"},"x")," being the study result ID) contains the folders for the component results (named ",(0,i.kt)("em",{parentName:"p"},"comp_result_y"),", ",(0,i.kt)("em",{parentName:"p"},"y")," being the component result ID) that belong to the components of the study. Each component result folder contains the uploaded result files in the ",(0,i.kt)("em",{parentName:"p"},"files")," folder and the result data in the ",(0,i.kt)("em",{parentName:"p"},"data.txt")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/\n\u251c\u2500\u2500 study_result_1\n\u2502   \u251c\u2500\u2500 comp_result_1\n\u2502   \u2502   \u251c\u2500\u2500 files\n\u2502   \u2502   \u2514\u2500\u2500 data.txt\n\u2502   \u251c\u2500\u2500 comp_result_2\n\u2502   \u251c\u2500\u2500 comp_result_2\n\u2502   \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 study_result_2\n\u251c\u2500\u2500 study_result_3\n\u2502   ...\n\u2514\u2500\u2500 metadata.json\n")),(0,i.kt)("h2",{id:"metadata-json-schema"},"Metadata JSON Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "$schema": "https://json-schema.org/draft/2019-09/schema",\n    "$id": "http://example.com/example.json",\n    "type": "object",\n    "title": "Root",\n    "required": [\n        "data"\n    ],\n    "properties": {\n        "apiVersion": {\n            "type": "string",\n            "title": "The API version",\n            "examples": [\n                "1.0.0"\n            ]\n        },\n        "data": {\n            "type": "array",\n            "title": "All data",\n            "items": {\n                "type": "object",\n                "title": "Study IDs, title and results",\n                "required": [\n                    "studyId",\n                    "studyUuid",\n                    "studyTitle",\n                    "studyResults"\n                ],\n                "properties": {\n                    "studyId": {\n                        "type": "integer",\n                        "title": "Study ID"\n                    },\n                    "studyUuid": {\n                        "type": "string",\n                        "title": "Study UUID"\n                    },\n                    "studyTitle": {\n                        "type": "string",\n                        "title": "Study\'s title"\n                    },\n                    "studyResults": {\n                        "type": "array",\n                        "title": "List of study results",\n                        "items": {\n                            "type": "object",\n                            "title": "Study result",\n                            "description": "A study result contains one or multiple component results",\n                            "required": [\n                                "id",\n                                "uuid",\n                                "studyCode",\n                                "startDate",\n                                "endDate",\n                                "duration",\n                                "lastSeenDate",\n                                "studyState",\n                                "message",\n                                "workerId",\n                                "workerType",\n                                "batchId",\n                                "batchUuid",\n                                "batchTitle",\n                                "groupId",\n                                "componentResults"\n                            ],\n                            "properties": {\n                                "id": {\n                                    "type": "integer",\n                                    "title": "Study result ID"\n                                },\n                                "uuid": {\n                                    "type": "string",\n                                    "title": "Study result UUID"\n                                },\n                                "studyCode": {\n                                    "type": "string",\n                                    "title": "Study code"\n                                },\n                                "comment": {\n                                    "type": "string",\n                                    "title": "Comment from study link (only PersonalSingle and PersonalMultiple)"\n                                },\n                                "startDate": {\n                                    "type": "integer",\n                                    "title": "Epoch time of the start date"\n                                },\n                                "endDate": {\n                                    "type": "integer",\n                                    "title": "Epoch time of the end date"\n                                },\n                                "duration": {\n                                    "type": "string",\n                                    "title": "Study run duration in hh:mm:ss"\n                                },\n                                "lastSeenDate": {\n                                    "type": "integer",\n                                    "title": "Epoch time of the last seen date"\n                                },\n                                "studyState": {\n                                    "type": "string",\n                                    "title": "Study result state",\n                                    "description": "One of: PRE (Preview of study - exists only in PersonalSingle GeneralSingle worker), STARTED (Study was started), DATA_RETRIEVED (Study\'s jsonData were retrieved), FINISHED (Study successfully finished), ABORTED (Study aborted by worker), FAIL (Something went wrong)"\n                                },\n                                "message": {\n                                    "type": "string",\n                                    "title": "Message from the study run"\n                                },\n                                "workerId": {\n                                    "type": "integer",\n                                    "title": "Worker ID"\n                                },\n                                "workerType": {\n                                    "type": "string",\n                                    "title": "Worker type",\n                                    "description": "On of: GeneralMultiple, GeneralSingle, Jatos, MTSandbox, MT, PersonalMultiple, PersonalSingle"\n                                },\n                                "batchId": {\n                                    "type": "integer",\n                                    "title": "Batch ID"\n                                },\n                                "batchUuid": {\n                                    "type": "string",\n                                    "title": "Batch UUID"\n                                },\n                                "batchTitle": {\n                                    "type": "string",\n                                    "title": "Batch title"\n                                },\n                                "groupId": {\n                                    "type": "string",\n                                    "title": "Group ID"\n                                },\n                                "componentResults": {\n                                    "type": "array",\n                                    "title": "List of component results",\n                                    "items": {\n                                        "type": "object",\n                                        "title": "component result",\n                                        "required": [\n                                            "id",\n                                            "componentId",\n                                            "componentUuid",\n                                            "startDate",\n                                            "endDate",\n                                            "duration",\n                                            "componentState",\n                                            "path",\n                                            "data",\n                                            "files"\n                                        ],\n                                        "properties": {\n                                            "id": {\n                                                "type": "integer",\n                                                "title": "Component result ID"\n                                            },\n                                            "componentId": {\n                                                "type": "integer",\n                                                "title": "Component ID"\n                                            },\n                                            "componentUuid": {\n                                                "type": "string",\n                                                "title": "Component UUID"\n                                            },\n                                            "startDate": {\n                                                "type": "integer",\n                                                "title": "Epoch time of the start date"\n                                            },\n                                            "endDate": {\n                                                "type": "integer",\n                                                "title": "Epoch time of the end date"\n                                            },\n                                            "duration": {\n                                                "type": "string",\n                                                "title": "Component run duration in hh:mm:ss"\n                                            },\n                                            "componentState": {\n                                                "type": "string",\n                                                "title": "Component result state",\n                                                "description": "One of: STARTED, DATA_RETRIEVED, FINISHED, RELOADED, ABORTED, FAIL (deprecated: RESULTDATA_POSTED)"\n                                            },\n                                            "path": {\n                                                "type": "string",\n                                                "title": "Path",\n                                                "description": "Path to the component result folder in the archive"\n                                            },\n                                            "data": {\n                                                "type": "object",\n                                                "title": "Data properties",\n                                                "description": "The actual result data are in an extra file called \'data.txt\'",\n                                                "required": [\n                                                    "size",\n                                                    "sizeHumanReadable"\n                                                ],\n                                                "properties": {\n                                                    "size": {\n                                                        "type": "integer",\n                                                        "title": "Data size in byte"\n                                                    },\n                                                    "sizeHumanReadable": {\n                                                        "type": "string",\n                                                        "title": "Human readable data size"\n                                                    }\n                                                }\n                                            },\n                                            "files": {\n                                                "type": "array",\n                                                "title": "List of file properties",\n                                                "items": {\n                                                    "type": "object",\n                                                    "title": "Properties of one file",\n                                                    "required": [\n                                                        "filename",\n                                                        "size",\n                                                        "sizeHumanReadable"\n                                                    ],\n                                                    "properties": {\n                                                        "filename": {\n                                                            "type": "string",\n                                                            "title": "Filename"\n                                                        },\n                                                        "size": {\n                                                            "type": "integer",\n                                                            "title": "File size in byte"\n                                                        },\n                                                        "sizeHumanReadable": {\n                                                            "type": "string",\n                                                            "title": "Human readable file size"\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);