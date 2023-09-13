"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},40403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const o={title:"JATOS in a cluster",slug:"/JATOS-in-a-cluster.html",sidebar_position:10},i=void 0,s={unversionedId:"Serving_the_Internet/JATOS-in-a-cluster",id:"version-3.8.1/Serving_the_Internet/JATOS-in-a-cluster",title:"JATOS in a cluster",description:"JATOS can run on multiple nodes in a cluster to achieve high availability and scalability.",source:"@site/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-in-a-cluster.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-in-a-cluster.html",permalink:"/JATOS-in-a-cluster.html",draft:!1,editUrl:"https://github.com/JATOS/JATOS_docs/tree/main/versioned_docs/version-3.8.1/Serving_the_Internet/JATOS-in-a-cluster.md",tags:[],version:"3.8.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1694620039,formattedLastUpdatedAt:"Sep 13, 2023",sidebarPosition:10,frontMatter:{title:"JATOS in a cluster",slug:"/JATOS-in-a-cluster.html",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"JATOS with Docker Compose",permalink:"/JATOS-with-Docker-Compose.html"},next:{title:"JATOS with Nginx",permalink:"/JATOS-with-Nginx.html"}},l={},p=[{value:"Things to know before running JATOS in a multi-node setup",id:"things-to-know-before-running-jatos-in-a-multi-node-setup",level:2},{value:"Multi-node installation with Docker Compose",id:"multi-node-installation-with-docker-compose",level:2},{value:"JATOS with Kubernetes",id:"jatos-with-kubernetes",level:2},{value:"Load-balancing and scaling",id:"load-balancing-and-scaling",level:3},{value:"Shared volumes",id:"shared-volumes",level:3},{value:"Configure JATOS&#39; deployment",id:"configure-jatos-deployment",level:3},{value:"Secrets",id:"secrets",level:3},{value:"MySQL setup",id:"mysql-setup",level:3},{value:"Liveness probe and startup probe",id:"liveness-probe-and-startup-probe",level:3},{value:"<em>securityContext</em> and <em>affinity</em>",id:"securitycontext-and-affinity",level:3},{value:"Updating JATOS with Kubernetes",id:"updating-jatos-with-kubernetes",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JATOS can run on multiple nodes in a cluster to achieve high availability and scalability."),(0,r.kt)("h2",{id:"things-to-know-before-running-jatos-in-a-multi-node-setup"},"Things to know before running JATOS in a multi-node setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JATOS, in a multi-node setup, needs a ",(0,r.kt)("strong",{parentName:"li"},"MySQL")," or ",(0,r.kt)("strong",{parentName:"li"},"MariaDB")," database (and cannot be used with the embedded H2 database)."),(0,r.kt)("li",{parentName:"ul"},"All JATOS nodes need to ",(0,r.kt)("strong",{parentName:"li"},"share some folders"),": ",(0,r.kt)("em",{parentName:"li"},"study assets"),", ",(0,r.kt)("em",{parentName:"li"},"study uploads"),", ",(0,r.kt)("em",{parentName:"li"},"study logs"),", and JATOS' ",(0,r.kt)("em",{parentName:"li"},"tmp")," folder."),(0,r.kt)("li",{parentName:"ul"},"All JATOS nodes need the ",(0,r.kt)("strong",{parentName:"li"},"same secret"),", otherwise the session cookie used for authentication won't work."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Updating")," is arguably easier by just changing the tag of JATOS docker image to a higher version (but JATOS' auto-updater can't be used).")),(0,r.kt)("p",null,"All these points (and more) are addressed in this page."),(0,r.kt)("h2",{id:"multi-node-installation-with-docker-compose"},"Multi-node installation with Docker Compose"),(0,r.kt)("p",null,"A setup of JATOS with multiple nodes through ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," might not make much sense, because all JATOS instances still run on the same machine. But it highlights some general concepts and caveats pretty well, so we describe it here."),(0,r.kt)("p",null,"How to get started with JATOS and Docker Compose is explained in ",(0,r.kt)("a",{parentName:"p",href:"/JATOS-with-Docker-Compose.html"},"another page"),". You might want to follow the instructions there to get a JATOS installation with a MySQL database and Nginx running. "),(0,r.kt)("p",null,"Now, if you want to run JATOS in multiple containers in parallel you need to configure the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_docker_compose/blob/main/compose.yaml"},(0,r.kt)("em",{parentName:"a"},"compose.yaml"))," additionally (if you haven't already):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"-Djatos.multiNode=true"))," in the ",(0,r.kt)("em",{parentName:"li"},"command")," section of the ",(0,r.kt)("em",{parentName:"li"},"jatos")," service."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"JATOS_SECRET"))," environment variable to a string with at least than 15 characters (otherwise the session cookie that JATOS uses for authentication won't work).")),(0,r.kt)("p",null,"It's important to share some of JATOS folders between all JATOS nodes. In our Docker composed setup this is already achieved with the shared ",(0,r.kt)("em",{parentName:"p"},"volumes")," ",(0,r.kt)("em",{parentName:"p"},"jatos-data"),", ",(0,r.kt)("em",{parentName:"p"},"jatos-logs"),", and ",(0,r.kt)("em",{parentName:"p"},"jatos-db"),". Nothing to do here."),(0,r.kt)("p",null,"Finally, to scale up and run multiple JATOS instances use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--scale")," parameter, e.g. to run two JATOS instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker compose -f compose.yaml up --scale jatos=2\n")),(0,r.kt)("h2",{id:"jatos-with-kubernetes"},"JATOS with Kubernetes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," is a system for container orchestration and automatic deployments. It offers vast possibilities to do so in many different ways that might also depend on your cloud provider. Here we used it with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/kubernetes/"},"DigitalOcean")," - but with some adjustments it should work on any Kubernetes cluster. "),(0,r.kt)("p",null,"For the JATOS cluster we use ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/"},"Kustomize")," to define Kubernetes objects through ",(0,r.kt)("em",{parentName:"p"},"kustomization")," YAML files. "),(0,r.kt)("p",null,"We assembled all necessary files in a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes"},"git repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/JATOS/JATOS_with_kubernetes.git\n")),(0,r.kt)("p",null,"The file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/kustomization.yaml"},(0,r.kt)("em",{parentName:"a"},"kustomization.yaml"))," defines our secrets and specifies the resource file, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/jatos.yaml"},(0,r.kt)("em",{parentName:"a"},"jatos.yaml")),", that describes the JATOS cluster."),(0,r.kt)("p",null,"Then, after you set up everything, you can start the cluster with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -k <my_JATOS_kustomize_directory>\n")),(0,r.kt)("h3",{id:"load-balancing-and-scaling"},"Load-balancing and scaling"),(0,r.kt)("p",null,"In our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/jatos.yaml"},(0,r.kt)("em",{parentName:"a"},"jatos.yaml")),", for ",(0,r.kt)("em",{parentName:"p"},"auto-balancing")," in our JATOS cluster, we use the one ",(0,r.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/kubernetes/how-to/add-load-balancers/"},"integrated in DigitalOcean"),". This is specified in the ",(0,r.kt)("em",{parentName:"p"},"Service")," object, with the ",(0,r.kt)("em",{parentName:"p"},"annotation")," ",(0,r.kt)("inlineCode",{parentName:"p"},'kubernetes.digitalocean.com/load-balancer-id: "jatos-load-balancer"'),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  name: jatos\n  labels:\n    app: jatos\n  annotations:\n    kubernetes.digitalocean.com/load-balancer-id: "jatos-load-balancer"\nspec:\n  ports:\n    - port: 80\n      targetPort: 9000\n  selector:\n    app: jatos\n  type: LoadBalancer\n')),(0,r.kt)("p",null,"And our cluster does ",(0,r.kt)("em",{parentName:"p"},"automatic horizontal scaling")," with an ",(0,r.kt)("inlineCode",{parentName:"p"},"HorizontalPodAutoscaler"),". Here we set up a minimum of 2 and maximum of 10 JATOS pods and as scaling metric a average CPU utilization of 100%. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: jatos\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: jatos\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 100\n")),(0,r.kt)("h3",{id:"shared-volumes"},"Shared volumes"),(0,r.kt)("p",null,"As said ",(0,r.kt)("a",{parentName:"p",href:"/JATOS-in-a-cluster.html#things-to-know-before-running-jatos-in-a-multi-node-setup"},"before"),", JATOS, if running on multiple nodes, needs to share some folders. Translated to Kubernetes this means the ",(0,r.kt)("em",{parentName:"p"},"PersistentVolumeClaim")," needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessMode"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadWriteMany"),"."),(0,r.kt)("p",null,"Although many cloud provider have their own storage system to achieve this, we use a common ",(0,r.kt)("em",{parentName:"p"},"NFS")," storage. E.g. there is an easy-to-use ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"helm chart")," for this purpose: ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/kvaps/nfs-server-provisioner"},"nfs-server-provisioner"),". And since we want to run on ",(0,r.kt)("em",{parentName:"p"},"DigitalOcean")," we need the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"persistence.storageClass")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"do-block-storage"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install nfs-server stable/nfs-server-provisioner --set persistence.enabled=true,persistence.storageClass=do-block-storage,persistence.size=11Gi\n")),(0,r.kt)("p",null,"Then in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/jatos.yaml"},(0,r.kt)("em",{parentName:"a"},"jatos.yaml"))," the NFS storage is used in a ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: jatos-data-pv-claim\n  labels:\n    app: jatos\nspec:\n  accessModes:\n  - ReadWriteMany\n  resources:\n    requests:\n      storage: 10Gi\n  storageClassName: nfs\n")),(0,r.kt)("p",null,"And the ",(0,r.kt)("em",{parentName:"p"},"volume")," is mounted in every JATOS ",(0,r.kt)("em",{parentName:"p"},"pod"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"volumes:\n  - name: jatos-data-storage\n    persistentVolumeClaim:\n      claimName: jatos-data-pv-claim\n")),(0,r.kt)("h3",{id:"configure-jatos-deployment"},"Configure JATOS' deployment"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/jatos.yaml"},(0,r.kt)("em",{parentName:"a"},"jatos.yaml")),", to run JATOS in on multiple nodes in a cluster you have to set the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djatos.multiNode=true"),". Also the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-Djatos.logs.appender=ASYNCSTDOUT")," redirects the logging to ",(0,r.kt)("em",{parentName:"p"},"stdout"),", which is what you probably want with Kubernetes."),(0,r.kt)("p",null,"The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-J-Xmx")," defines the maximum memory the Java Virtual Machine (JVM) that runs JATOS is allowed to use. If you don't set this, the JVM might take too much memory for itself and strangle the operating system. Here we set it to 1500 MB but it really depends on the kind of underlying machine you are using to run your nodes."),(0,r.kt)("p",null,"You might want to change the Docker image version to a different one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"containers:\n  # Maybe use a newer image version\n  - image: jatos/jatos:3.8.4\n    name: jatos\n    args:\n      # Necessary to run JATOS on multiple nodes\n      - -Djatos.multiNode=true\n      # Logging to stdout\n      - -Djatos.logs.appender=ASYNCSTDOUT\n      # Set the JVM maximum memory usage. It has to fit your machine.\n      - -J-Xmx=1500M\n")),(0,r.kt)("h3",{id:"secrets"},"Secrets"),(0,r.kt)("p",null,"The password for the MySQL database and the secret for JATOS session cookie are set in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/kustomization.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"kustomization.yaml"))," file and then just referenced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/jatos.yaml"},(0,r.kt)("em",{parentName:"a"},"jatos.yaml"))," in JATOS ",(0,r.kt)("em",{parentName:"p"},"deployment")," object."),(0,r.kt)("h3",{id:"mysql-setup"},"MySQL setup"),(0,r.kt)("p",null,"We assume here that you have your MySQL database set up and ready already. Have a look at ",(0,r.kt)("a",{parentName:"p",href:"/JATOS-with-MySQL.html"},"JATOS with MySQL")," to get started."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/jatos.yaml"},(0,r.kt)("em",{parentName:"a"},"jatos.yaml"))," you have to change the environmental variable ",(0,r.kt)("inlineCode",{parentName:"p"},"JATOS_DB_URL"),". The IP and port need to be the ones from your MySQL IP and port."),(0,r.kt)("h3",{id:"liveness-probe-and-startup-probe"},"Liveness probe and startup probe"),(0,r.kt)("p",null,"Applications running on the JVM can need some initial warm-up time before they are fully functional. Therefore we have, additionally to the ",(0,r.kt)("inlineCode",{parentName:"p"},"livenessProbe")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/jatos.yaml"},(0,r.kt)("em",{parentName:"a"},"jatos.yaml")),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"startupProbe")," that accounts for this. You might have to tweak ",(0,r.kt)("inlineCode",{parentName:"p"},"failureThreshold")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"periodSeconds")," on your system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"livenessProbe:\n  httpGet:\n    path: /ping\n    port: 9000\n  failureThreshold: 1\n  periodSeconds: 10\nstartupProbe:\n  httpGet:\n    path: /ping\n    port: 9000\n  failureThreshold: 30\n  periodSeconds: 10\n")),(0,r.kt)("h3",{id:"securitycontext-and-affinity"},(0,r.kt)("em",{parentName:"h3"},"securityContext")," and ",(0,r.kt)("em",{parentName:"h3"},"affinity")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS_with_kubernetes/blob/main/jatos.yaml"},(0,r.kt)("em",{parentName:"a"},"jatos.yaml"))," also has a ",(0,r.kt)("em",{parentName:"p"},"securityContext")," and a ",(0,r.kt)("em",{parentName:"p"},"affinity")," section. You probably don't have to change anything there. We just want to explain them here shortly."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"securityContext")," sets the ",(0,r.kt)("em",{parentName:"p"},"UID")," and ",(0,r.kt)("em",{parentName:"p"},"GID")," of the user defined in JATOS' Docker image. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"securityContext:\n  runAsUser: 1000\n  runAsGroup: 1000\n  fsGroup: 1000\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("em",{parentName:"p"},"affinity")," section we define a ",(0,r.kt)("inlineCode",{parentName:"p"},"podAntiAffinity")," to ensure that each Kubernetes ",(0,r.kt)("em",{parentName:"p"},"pod")," runs only one JATOS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"affinity:\n  podAntiAffinity:                                 \n    requiredDuringSchedulingIgnoredDuringExecution:\n    - topologyKey: kubernetes.io/hostname    \n      labelSelector:                               \n        matchLabels:                               \n          app: jatos\n")),(0,r.kt)("h3",{id:"updating-jatos-with-kubernetes"},"Updating JATOS with Kubernetes"),(0,r.kt)("p",null,"The easiest way to update a JATOS Kubernetes cluster is to ",(0,r.kt)("strong",{parentName:"p"},"just change the JATOS' Docker image tag to a higher version"),". ",(0,r.kt)("a",{parentName:"p",href:"/Update-JATOS.html#automatic-update"},"JATOS' auto-updater")," ",(0,r.kt)("strong",{parentName:"p"},"cannot")," be used here."),(0,r.kt)("p",null,"But there are some ",(0,r.kt)("strong",{parentName:"p"},"constraints"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kubernetes' ",(0,r.kt)("em",{parentName:"li"},"rolling updates")," are not possible with JATOS. You have to turn off all JATOS pods, do the update (change the Docker image tag) and turn them back on."),(0,r.kt)("li",{parentName:"ol"},"JATOS is only allowed to update to higher version numbers - downgrading will likely break your installation."),(0,r.kt)("li",{parentName:"ol"},"And please do backups before updating.")))}u.isMDXComponent=!0}}]);