"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6738],{7294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(4848),i=t(8453);const r={layout:"default",sidebar_position:2,title:"Glossary"},a="Glossary",s={id:"resources/glossary",title:"Glossary",description:"There are a few concepts and verbs in ClearlyDefined. Here is",source:"@site/docs/resources/glossary.md",sourceDirName:"resources",slug:"/resources/glossary",permalink:"/docs/resources/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/clearlydefined/clearlydefined/docs/resources/glossary.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{layout:"default",sidebar_position:2,title:"Glossary"},sidebar:"tutorialSidebar",previous:{title:"Defined",permalink:"/docs/resources/defined"},next:{title:"Providers",permalink:"/docs/resources/providers"}},l={},d=[{value:"Adopter",id:"adopter",level:3},{value:"Aggregate",id:"aggregate",level:3},{value:"Component",id:"component",level:3},{value:"Coordinates",id:"coordinates",level:3},{value:"Curation",id:"curation",level:3},{value:"Curate",id:"curate",level:3},{value:"Curator",id:"curator",level:3},{value:"Definition",id:"definition",level:3},{value:"Harvest",id:"harvest",level:3},{value:"Summary",id:"summary",level:3},{value:"Summarizer",id:"summarizer",level:3},{value:"Tool",id:"tool",level:3},{value:"Tool output",id:"tool-output",level:3},{value:"Tool version",id:"tool-version",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"glossary",children:"Glossary"}),"\n",(0,o.jsx)(n.p,{children:"There are a few concepts and verbs in ClearlyDefined. Here is\na summary of the terms and their meanings:"}),"\n",(0,o.jsx)(n.h3,{id:"adopter",children:"Adopter"}),"\n",(0,o.jsxs)(n.p,{children:["An adopter of ClearlyDefined is a team or project that is explicitly\ntrying to be ClearlyDefined. ClearlyDefined attempts to meet teams\nwhere they are. As such, we do not require specific formats or\nlocations for the interesting data. Rather, if projects signal how\nthey intend the data to be found, ClearlyDefined can harvest that data\nand make it available. For example, simply having a LICENSE file, or\nusing ",(0,o.jsx)(n.code,{children:"SPDX-License-Identifier:"})," file headers are clear signs to the\ntools (and others) that the project is explicitly declaring that\ninformation rather than having consumers intuit or interpret the\nintent. Over time the community will develop a richer set of signals\nand tools for detecting the signals."]}),"\n",(0,o.jsx)(n.h3,{id:"aggregate",children:"Aggregate"}),"\n",(0,o.jsx)(n.p,{children:"Aggregating is the act of combining the (typically summarized) outputs\nof various tools. Aggregation typically follows a precedence order\nwith curation having the highest precedence. The order of tool\naggregation may evolve over time subject to community agreement."}),"\n",(0,o.jsx)(n.h3,{id:"component",children:"Component"}),"\n",(0,o.jsx)(n.p,{children:"A discrete chunk of open source project output that can be harvested,\ncurated or otherwise defined in ClearlyDefined. For example, an NPM\npackage, GitHub repo, or source archive. Components are more of an\ninput to the system than a element of the system. Users look at the\nClearlyDefined definition for a component or request that a component\nbe harvested. Components are identified by coordinates."}),"\n",(0,o.jsx)(n.h3,{id:"coordinates",children:"Coordinates"}),"\n",(0,o.jsx)(n.p,{children:"Coordinates are used to identify various elements in\nClearlyDefined. For example, components to harvest, tool outputs,\nsource locations. The coordinates for an entity has at least five\nparts: type, provider, namespace, name and revision."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["type -- the form of the entity being identified. For example, ",(0,o.jsx)(n.code,{children:"git"}),",\n",(0,o.jsx)(n.code,{children:"npm"}),", ",(0,o.jsx)(n.code,{children:"sourceArchive"}),". This is logically, though not actually,\nequivalent to a mime type."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["provider -- where entity can be found. Examples include ",(0,o.jsx)(n.code,{children:"github"}),",\n",(0,o.jsx)(n.code,{children:"npmjs"}),", ",(0,o.jsx)(n.code,{children:"mavenCentral"}),". The system supports a finite set of\nproviders at any given time."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["namespace -- a qualifier that helps scope the name of the entity\nbeing identified. This typically comes from the context of the\ntype. For example, for NPM packages, it is the ",(0,o.jsx)(n.code,{children:"scope"}),", for Maven\nproject it would be the ",(0,o.jsx)(n.code,{children:"groupid"}),", and for GitHub, the ",(0,o.jsx)(n.code,{children:"login"}),"\n(often ",(0,o.jsx)(n.code,{children:"org"}),") is used. If an entity does not have a reasonable\nnamespace, a ",(0,o.jsx)(n.code,{children:"-"})," (hyphen) must be used. That is, the namespace is\nlogically optional but the property must be set."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["name -- the name of the entity. As with ",(0,o.jsx)(n.code,{children:"namespace"}),", the name\ntypically comes from the context of the type. So ",(0,o.jsx)(n.code,{children:"artifactid"})," for\nMaven, repo ",(0,o.jsx)(n.code,{children:"name"})," for GitHub, etc."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"revision -- the instance of the entity being identified. The exact\nform of the revision depends on the type and provider. In Git, a\ncommit hash is used. In package managers, the typical package\nversion is used. This value is largely uninterpreted by\nClearlyDefined and simply either passed to the provider as needed or\nused as an opaque string in internal keys."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"curation",children:"Curation"}),"\n",(0,o.jsx)(n.p,{children:"A curation is a set of one or more updates or additions to the data in\na definition. For example, a curation may add the release date for a\nrevision of a component. This new information, the curation, would\nthen show up in the component's definition. There is at most one\ncuration for a given revision of a component at a given time. All\ncurations are managed as files in a GitHub repo and changes to these\nfiles are managed through pull requests on the files. Ru"}),"\n",(0,o.jsx)(n.h3,{id:"curate",children:"Curate"}),"\n",(0,o.jsx)(n.p,{children:"Curate is the act of creating a curation. Anyone can submit a curation\nmuch like anyone can submit a pull request on GitHub. In fact,\nproposing a curation does create a pull request."}),"\n",(0,o.jsx)(n.h3,{id:"curator",children:"Curator"}),"\n",(0,o.jsx)(n.p,{children:"A curator is akin to a committer or maintainer on a traditional open\nsource project -- they have an established history of quality\ncontribution, insight and knowledge in domain they are\ncurating. Curators are responsible for vetting contributed curations\nfrom the community as well as creating their own. They also play a key\nrole in contributing merged curations to upstream projects."}),"\n",(0,o.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(n.p,{children:"A definition is the final set of data related to a revision of a\ncomponent. It is the combination of the summarized, aggregated\nharvested tool output and any curation for the revision. This is the\nmain form of consuming data from ClearlyDefined -- users browse or\notherwise access the definitions for their components of interest."}),"\n",(0,o.jsx)(n.h3,{id:"harvest",children:"Harvest"}),"\n",(0,o.jsx)(n.p,{children:"Harvesting is the act of running one or more tools on a revision of a\ncomponent. The resultant tool outputs are stored for future use in\nsummarization and the creation of defintions."}),"\n",(0,o.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"A summary is the condensed and structure version of a harvest tool's\noutput. A summary contains only the data in which ClearlyDefined is\ninterested."}),"\n",(0,o.jsx)(n.h3,{id:"summarizer",children:"Summarizer"}),"\n",(0,o.jsx)(n.p,{children:"As summarizer is a mechanism for creating the summary of a particular\n(set of) tool output. Since ClearlyDefined is only interested in\nparticular information and tools output in many different formats, the\nsummarizer's role is to extract the relevant information and structure\nit in the canonical internal format for further use in ClearlyDefined."}),"\n",(0,o.jsx)(n.h3,{id:"tool",children:"Tool"}),"\n",(0,o.jsx)(n.p,{children:"A tool is an utility that can inspect a component and extract\ninformation of interest to ClearlyDefined. Typical tools are ScanCode\nand FOSSology. ClearlyDefined has a very minimal set of its own tools\nand the set of tools in use will expand and contract over time."}),"\n",(0,o.jsx)(n.h3,{id:"tool-output",children:"Tool output"}),"\n",(0,o.jsx)(n.p,{children:"The result of running a particular tool version on a particular\nrevision of a component is a uniquely addressable tool output. Tool\noutputs are durable and immutable. Further, it is expected that\nrunning the same tool version on the same component revision will\nyield the same tool output."}),"\n",(0,o.jsx)(n.h3,{id:"tool-version",children:"Tool version"}),"\n",(0,o.jsxs)(n.p,{children:["The version of a tool includes both the version of the code as well as\nany applicable configuration. The tool version MUST be in\n",(0,o.jsx)(n.a,{href:"https://semver.org/",children:"semver format"}),". Textual representations of the\nconfiguration can be captured in the ",(0,o.jsx)(n.code,{children:"-<info>"})," portion of the version\nspecification."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(6540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);