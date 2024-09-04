"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1447],{6872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(4848),a=t(8453);const o={layout:"default",sidebar_position:2,title:"Containers"},r="Containers",l={id:"installation/containers",title:"Containers",description:"Now, let's go through what your are running, container by container.",source:"@site/docs/installation/containers.md",sourceDirName:"installation",slug:"/installation/containers",permalink:"/docs/installation/containers",draft:!1,unlisted:!1,editUrl:"https://github.com/clearlydefined/clearlydefined/tree/main/docs/installation/containers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",sidebar_position:2,title:"Containers"},sidebar:"tutorialSidebar",previous:{title:"Start",permalink:"/docs/installation/start"},next:{title:"Using",permalink:"/docs/installation/using"}},s={},d=[{value:"ClearlyDefined Website",id:"clearlydefined-website",level:2},{value:"ClearlyDefined Service",id:"clearlydefined-service",level:2},{value:"ClearlyDefined Crawler",id:"clearlydefined-crawler",level:2},{value:"ClearlyDefined Mongo DB",id:"clearlydefined-mongo-db",level:2},{value:"ClearlyDefined Mongo Seed",id:"clearlydefined-mongo-seed",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"containers",children:"Containers"})}),"\n",(0,i.jsx)(n.p,{children:"Now, let's go through what your are running, container by container."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ClearlyDefined Website"}),"\n",(0,i.jsx)(n.li,{children:"ClearlyDefined Service"}),"\n",(0,i.jsx)(n.li,{children:"ClearlyDefined Crawler"}),"\n",(0,i.jsx)(n.li,{children:"ClearlyDefined Mongo DB"}),"\n",(0,i.jsx)(n.li,{children:"ClearlyDefined Mongo DB Seed"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"clearlydefined-website",children:"ClearlyDefined Website"}),"\n",(0,i.jsxs)(n.p,{children:["This is the ClearlyDefined React UI. It's what you see when you open your browser and go to ",(0,i.jsx)(n.a,{href:"http://locahost:3000",children:"http://locahost:3000"}),". It connects to the ClearlyDefined Service API."]}),"\n",(0,i.jsx)(n.h2,{id:"clearlydefined-service",children:"ClearlyDefined Service"}),"\n",(0,i.jsx)(n.p,{children:"This is the backend of ClearlyDefined, you can use it through the Website UI or through\nquerying it directly through the command line."}),"\n",(0,i.jsx)(n.p,{children:"Any ClearlyDefined environment needs a place to store raw harvest information. In the case of this development environment, we use the file store for storing harvest information (our production setup uses Azure blob storage)."}),"\n",(0,i.jsx)(n.p,{children:"This Docker setup creates a volume for the harvested data and mounts it in the Service container."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ curl http://localhost:4000\n\n{"status":"OK"}\n\n$ curl localhost:4000/definitions/maven/mavencentral/org.flywaydb/flyway-maven-plugin/5.0.7\n\n{"described":{"sourceLocation":{"type":"sourcearchive","provider":"mavencentral","url":"http://central.maven.org/maven2/org/flywaydb/flyway-maven-plugin/5.0.7/flyway-maven-plugin-5.0.7-sources.jar","revision":"5.0.7","namespace":"org.flywaydb","name":"flyway-maven-plugin"},"releaseDate":"2018-01-30","urls":{"registry":"http://central.maven.org/maven2/org/flywaydb/flyway-maven-plugin","version":"http://central.maven.org/maven2/org/flywaydb/flyway-maven-plugin/5.0.7","download":"http://central.maven.org/maven2/org/flywaydb/flyway-maven-plugin/5.0.7/flyway-maven-plugin-5.0.7.jar"},"tools":["clearlydefined/1"],"toolScore":{"total":100,"date":30,"source":70},"score":{"total":100,"date":30,"source":70}},"licensed":{"declared":"NOASSERTION","toolScore":{"total":15,"declared":0,"discovered":0,"consistency":15,"spdx":0,"texts":0},"score":{"total":15,"declared":0,"discovered":0,"consistency":15,"spdx":0,"texts":0}},"coordinates":{"type":"maven","provider":"mavencentral","namespace":"org.flywaydb","name":"flyway-maven-plugin","revision":"5.0.7"},"_meta":{"schemaVersion":"1.6.1","updated":"2019-11-04T21:59:21.238Z"},"scores":{"effective":57,"tool":57}}\n\n$ curl http://localhost:4000/curations/maven/mavencentral/org.flywaydb/flyway-maven-plugin/5.0.7?expand=prs\n\n{"curations":{},"contributions":[{"pr":{"number":387,"id":254753509,"state":"open","title":"update flyway maven plugin to the artistic license","body":"\\n**Type:** Incorrect\\n\\n**Summary:**\\nupdate flyway maven plugin to the artistic license\\n\\n**Details:**\\nFixed the problem\\n\\n**Resolution:**\\nChanged to the correct license\\n\\n**Affected definitions**:\\n- flyway-maven-plugin 5.0.7","created_at":"2019-02-20T18:53:22Z","updated_at":"2019-02-20T18:53:24Z","closed_at":null,"merged_at":null,"merge_commit_sha":"377d70874899b17c054881929fdc1c4f7dd87ace","user":{"login":"clearlydefinedbot"},"head":{"sha":"cef2ce0577899f9ae429f3750fbf8ec34afb6f76","repo":{"id":115941547}},"base":{"sha":"1f8ee8bbe8200c494bdfa458b5b589dc5c0d9862","repo":{"id":115941547}}},"files":[{"path":"curations/maven/mavencentral/org.flywaydb/flyway-maven-plugin.yaml","coordinates":{"type":"maven","provider":"mavencentral","namespace":"org.flywaydb","name":"flyway-maven-plugin"},"revisions":[{"revision":"5.0.7","data":{"licensed":{"declared":"Artistic-1.0-Perl"}}}]}]}]}\n\n$ curl http://localhost:4000/harvest/maven/mavencentral/org.flywaydb/flyway-maven-plugin/5.0.7?form=raw\n\n{"clearlydefined":{"1":{"_metadata":{"type":"maven","url":"cd:/maven/mavencentral/org.flywaydb/flyway-maven-plugin/5.0.7","fetchedAt":"2018-03-06T00:08:41.835Z","links":{"self":{"href":"urn:maven:mavencentral:org.flywaydb:flyway-maven-plugin:revision:5.0.7:tool:clearlydefined:1","type":"resource"}\n(...)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"clearlydefined-crawler",children:"ClearlyDefined Crawler"}),"\n",(0,i.jsx)(n.p,{children:'The Crawler is what "crawls" package registries, github, and more to scan and collect license information.'}),"\n",(0,i.jsx)(n.p,{children:"This is run within it's own container. Queues used by the crawler are current run in the container's memory."}),"\n",(0,i.jsx)(n.p,{children:"As noted above, any ClearlyDefined environment needs a place to store raw harvest information. In the case of this development environment, we use the same file storage place as the service (harvest information is stored in a volume that is mounted to both containers)."}),"\n",(0,i.jsx)(n.p,{children:"To see this in action, you can request a package that has not been harvested through either the UI or through the service API."}),"\n",(0,i.jsxs)(n.p,{children:["To request it through the UI, navigate to ",(0,i.jsx)(n.a,{href:"http://localhost:3000/definitions/npm/npmjs/-/npm/7.3.0",children:"http://localhost:3000/definitions/npm/npmjs/-/npm/7.3.0"})," in your browser."]}),"\n",(0,i.jsx)(n.p,{children:"To request it through the API, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ curl localhost:4000/definitions/npm/npmjs/-/npm/7.3.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"You will first see that it does not have the definition. Check back in a few minutes after you\nrun these commands and you should see newly harvested data."}),"\n",(0,i.jsx)(n.h2,{id:"clearlydefined-mongo-db",children:"ClearlyDefined Mongo DB"}),"\n",(0,i.jsxs)(n.p,{children:["This container holds a Mongo database called ",(0,i.jsx)(n.strong,{children:"clearlydefined"})]}),"\n",(0,i.jsx)(n.p,{children:"The database contains the following collections:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"curations (contains curations)"}),"\n",(0,i.jsx)(n.li,{children:"definitions-paged (contains definitions)"}),"\n",(0,i.jsx)(n.li,{children:"definitions-trimmed (contains definitions without files)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Our production Azure setup includes definitions-trimmed, that is actively used. The reason the definitions collection is called definitions-trimmed is because, previously, the definitions collection was paged. The pagination was added in ",(0,i.jsx)(n.a,{href:"https://github.com/clearlydefined/service/pull/364",children:"this January 2019 pull request"}),". To improve performance and reduce cost of the definition database, ",(0,i.jsx)(n.a,{href:"https://github.com/clearlydefined/service/pull/976",children:"this Feb 2023 pull request"})," subsequently stores definitions without files."]}),"\n",(0,i.jsx)(n.p,{children:"The sample setup uses definitions-paged instead of definitions-trimmed because definitions-trimmed works well as part of a definition store collection, but not on its own. In comparison, definitions-paged collection stores the definitions in entirety, and can be used as a standalone definitions store. To emulate the production environment more closely, one can use dispatch+file+mongoTrimmed as DEFINITION_STORE_PROVIDER."}),"\n",(0,i.jsx)(n.p,{children:"These collections are seeded using the ClearlyDefined Mongo Seed container."}),"\n",(0,i.jsxs)(n.p,{children:["If you have ",(0,i.jsx)(n.a,{href:"https://docs.mongodb.com/manual/installation/",children:"mongodb"})," installed on your local system, you can attach to the Mongo database with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ mongo mongodb://localhost:27017\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also do this through the ",(0,i.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker desktop client"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"clearlydefined-mongo-seed",children:"ClearlyDefined Mongo Seed"}),"\n",(0,i.jsx)(n.p,{children:"This container exists only to seed initial data into the ClearlyDefined Mongo DB. It populates the collections with sample data."}),"\n",(0,i.jsxs)(n.p,{children:["If you wish to build this container yourself, please follow the instructions ",(0,i.jsx)(n.a,{href:"https://github.com/clearlydefined/docker_dev_env_experiment/blob/main/mongo_seed/README.md",children:"here"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);