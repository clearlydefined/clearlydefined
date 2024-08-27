"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[563],{5546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(4848),a=n(8453);const i={layout:"default",sidebar_position:4,title:"Curate the data"},o="Curation and upstreaming",s={id:"get-involved/data-curation",title:"Curate the data",description:"Summary",source:"@site/docs/get-involved/data-curation.md",sourceDirName:"get-involved",slug:"/get-involved/data-curation",permalink:"/docs/get-involved/data-curation",draft:!1,unlisted:!1,editUrl:"https://github.com/clearlydefined/clearlydefined/tree/main/docs/get-involved/data-curation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{layout:"default",sidebar_position:4,title:"Curate the data"},sidebar:"tutorialSidebar",previous:{title:"Use the data",permalink:"/docs/get-involved/using-data"},next:{title:"Contribute data",permalink:"/docs/get-involved/contributing-data"}},d={},c=[{value:"Summary",id:"summary",level:2},{value:"Charter",id:"charter",level:2},{value:"Principles",id:"principles",level:2},{value:"Process",id:"process",level:2},{value:"Guidelines",id:"guidelines",level:2}];function l(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"curation-and-upstreaming",children:"Curation and upstreaming"}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"Curation of the data in ClearlyDefined is an integral part of the process and mission of the project. It is a value-add for end-users and will build an open source community in a space where people were previously working independently and without sharing results."}),"\n",(0,r.jsx)(t.p,{children:"The first part of ClearlyDefined\u2019s process is the automated harvesting and scanning of components for what data is available to find mechanically. Then, in places where the data is in some way ambiguous or missing, curation of that data by humans is meant to improve that data. Curations are then meant to be upstreamed back to projects in order to have future versions have better data and thus be more clearly defined."}),"\n",(0,r.jsx)(t.p,{children:"The curation process is meant to be transparent in the same way ClearlyDefined as a project is. Curators will be members of the community from many different organizations and positions of expertise. Below you will find the principles and processes the community plans to adhere to in order to make the collaboration amongst these people as simple and friction-free as possible."}),"\n",(0,r.jsx)(t.h2,{id:"charter",children:"Charter"}),"\n",(0,r.jsx)(t.p,{children:"Contained in ClearlyDefined\u2019s Charter is information about how the project intends to handle curators, an integral part of the community:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"\u201cThe curation process is fundamentally open and transparent. Curators (aka project committers or maintainers) work on harvested data, data contributed by the ClearlyDefined community, and with the origin project artifacts and community to validate presented information. All deliberations, discoveries, and discussions are recorded and made available for community inspection."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Initially this workflow will happen in one or more GitHub repositories using standard Pull Request workflows on human-readable and diff-able curation artifacts. The project may develop additional tools to supplement or supplant this flow but will always ensure full transparency."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"As with committers on typical FOSS projects, curators are free/expected to focus on particular domains that fit their interests and expertise."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"At least initially, all curated data must be signed off by two curators. This is more in the interest of working through thought and mechanical processes and developing a common understanding of the data and determining what is admissible. This requirement may be removed through a vote, as described below."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"A data curator is akin to a project maintainer or committer in typical open source projects. Curators have write permissions to the curation repo(s) and are ultimately responsible for admitting data to the curated store. A curator is more librarian and data scientist than lawyer or developer. The role requires enough domain context to enable issue identification and resolution. The role also requires technical expertise in running the various tools used to detect and analyze components. Each curator must be, and be seen to be, vendor neutral and unbiased. This helps them in their other key role \u2013 working with upstream projects to incorporate the curated data into the original project."})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"As with committers and maintainers, curators are nominated and approved by the project community based on their merits and prior contributions. The role of curator relates to an individual, not an organization or a position in an organization. Under no circumstances is a curator held responsible for any errors or other flaws in the data merged into the service.\u201d"})}),"\n",(0,r.jsx)(t.h2,{id:"principles",children:"Principles"}),"\n",(0,r.jsx)(t.p,{children:"From the above Charter text and ClearlyDefined\u2019s mission itself, we derive the following principles the curation community will adhere to:"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Open and transparent."})," Users of the data in ClearlyDefined rely on it being completely transparent in its providence as well as replicable by anyone. This gives consumers of the data confidence in it. In order to maintain this confidence beyond the machine harvested and scanned data and into the curation process, all curations must be transparent and have clear providence as well. Users who are surprised or suspicious about a curation must be able to see the person who suggested the curation and any associated discussion about that curation quickly and easily. Curations can never have unclear providence as it hinders the review process and ultimately will lead to poor quality data."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Neutral."})," Along with the entire process being open and transparent, curations must also be completely vendor- and perspective-neutral. Even if the proposed curation\u2019s basis is transparent, if it puts a distinct perspective or lens on the project that is not clearly the project\u2019s intention, the curation is likely not mergeable. The decision about whether a curation is non-vendor-neutral is up to the curators reviewing it."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Curations that can\u2019t be referenced or documented aren\u2019t mergeable."})," Curators need to provide the factual basis on which they are submitting their proposed curation. As mentioned above in being open and transparent, curations need to be as close to replicable as possible. Curators must reference docs, git commits, mailing list discussions, etc that are publicly viewable to all in order to support their position for proposed curations. Opaque reasoning for curations is antithetical to ClearlyDefined\u2019s mission and goals."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Curators must review, discuss, and come to agreement together and in the open."})," Curators are not meant to merge their own pull requests. All proposed curations must be reviewed by some other person in the community and merged by someone else other than the proposer."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Curators build reputation to become project maintainers with merge permissions."})," As per the Charter, curators must be nominated and approved by the project community based on their merits and prior contributions. Curators will spend time submitting curations and in discussions on other curations in order to build their profile in the community. Curators who have merge permissions can nominate and choose to approve those people to also get merge permissions once their reputation is established."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Curations that can\u2019t be agreed on can\u2019t be merged."})," In some cases, a project\u2019s data may be ambiguous and a curator may propose a curation that leads to discussion where two or more curators cannot come to agreement. In these cases, this proposed curation can stay open as long as is necessary to come to agreement or to close the PR without merging because agreement is not possible. There is no required timeframe that a PR can or can\u2019t stay open."]}),"\n",(0,r.jsx)(t.h2,{id:"process",children:"Process"}),"\n",(0,r.jsx)(t.p,{children:"The curation process itself is meant to enforce and the curation principles above. Curations are also possible to do in a variety of ways with the same result, so this process is meant to translate to all potential workflows:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Harvested data is viewed by the curator. This can be done from a number of interfaces including clearlydefined.io or any UI that calls the API."}),"\n",(0,r.jsx)(t.li,{children:"Curators identify a component that needs some or all of its data corrected. This identification can come from a low score, the curator\u2019s own expertise or experience, or from automated mechanisms that surface components that may need curation."}),"\n",(0,r.jsx)(t.li,{children:"Curators submit the data correction along with a justification for the correction. In order to get the correct data, the curator research the topic, find the the correct data, and provide link(s) to that research in support of their change."}),"\n",(0,r.jsx)(t.li,{children:"A PR is created for the proposed curation. This is always a GitHub PR at clearlydefined/curated-data. Typically, though not necessarily, this is done through clearlydefined.io."}),"\n",(0,r.jsx)(t.li,{children:"Review and/or discussion happens. Other curator(s) will review and potentially discuss the proposed curation. The supporting research from the curator\u2019s proposed curation will be used by the reviewers to consider its validity. All review and discussion is captured in the related GitHub PR."}),"\n",(0,r.jsx)(t.li,{children:"If the curators come to agreement, the proposed curation is merged. If the curators can\u2019t come to agreement, the PR can stay open but can\u2019t be merged. Proposed curations open for 60 days with no activity will be closed. Curations that are merged overlay the existing harvest data in ClearlyDefined and produces that new data to its users immediately after merge."}),"\n",(0,r.jsx)(t.li,{children:"Merged curations are upstreamed to the appropriate project(s) in a way that is respectful to the community\u2019s way of working. ClearlyDefined\u2019s ultimate goal is to help the FOSS community as a whole be more clearly defined. Submitting curations back upstream for future versions furthers this goal."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,r.jsxs)(t.p,{children:["For more information about curation, please check out our ",(0,r.jsx)(t.a,{href:"/docs/curation/curation-guidelines",children:"curation guidelines"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have been curating data in private and want to start doing that in the open with the ClearlyDefined\ncommunity, we want to talk to you. Get in touch on ",(0,r.jsx)(t.a,{href:"https://discord.gg/wEzHJku",children:"Discord"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(6540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);