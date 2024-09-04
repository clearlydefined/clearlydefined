"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1985],{7491:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=i(4848),s=i(8453);const o={layout:"default",sidebar_position:3,title:"Use the data"},a="Using the ClearlyDefined data",r={id:"get-involved/using-data",title:"Use the data",description:"All of the ClearlyDefined data is available for everyone to see and use. You can browse and inspect in a convenient web ui or hook up a client to the REST API and integrate it into your systems.",source:"@site/docs/get-involved/using-data.md",sourceDirName:"get-involved",slug:"/get-involved/using-data",permalink:"/docs/get-involved/using-data",draft:!1,unlisted:!1,editUrl:"https://github.com/clearlydefined/clearlydefined/tree/main/docs/get-involved/using-data.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{layout:"default",sidebar_position:3,title:"Use the data"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/get-involved/intro"},next:{title:"Curate the data",permalink:"/docs/get-involved/data-curation"}},d={},l=[{value:"REST API Usage Considerations",id:"rest-api-usage-considerations",level:2},{value:"Production Instance Rate Limits",id:"production-instance-rate-limits",level:3},{value:"Development Instance Rate Limits",id:"development-instance-rate-limits",level:3},{value:"ClearlyDefined Coordinates",id:"clearlydefined-coordinates",level:2},{value:"Basics",id:"basics",level:3},{value:"Special Notes",id:"special-notes",level:3},{value:"Advanced",id:"advanced",level:3},{value:"Data API",id:"data-api",level:2},{value:"Definitions",id:"definitions",level:3},{value:"Harvests",id:"harvests",level:3},{value:"Additional Docs",id:"additional-docs",level:3},{value:"Website",id:"website",level:2},{value:"Browse Definitions",id:"browse-definitions",level:3},{value:"Inspecting - Definitions Expanded View",id:"inspecting---definitions-expanded-view",level:3},{value:"A note on definition coordinates",id:"a-note-on-definition-coordinates",level:3},{value:"Curation",id:"curation",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"using-the-clearlydefined-data",children:"Using the ClearlyDefined data"})}),"\n",(0,t.jsxs)(n.p,{children:["All of the ClearlyDefined data is available for everyone to see and use. You can browse and inspect in a ",(0,t.jsx)(n.a,{href:"https://clearlydefined.io",children:"convenient web ui"})," or hook up a client to the ",(0,t.jsx)(n.a,{href:"https://api.clearlydefined.io/api-docs/",children:"REST API"})," and integrate it into your systems."]}),"\n",(0,t.jsx)(n.h2,{id:"rest-api-usage-considerations",children:"REST API Usage Considerations"}),"\n",(0,t.jsx)(n.p,{children:"ClearlyDefined enforces specific rate limits on REST API calls to ensure stability and integrity of the platform."}),"\n",(0,t.jsxs)(n.p,{children:["You can check the ",(0,t.jsx)(n.em,{children:"x-ratelimit-limit"})," and ",(0,t.jsx)(n.em,{children:"x-ratelimit-remaining"})," response headers to track your usage and reset window."]}),"\n",(0,t.jsxs)(n.p,{children:["If the rate limit is reached, an ",(0,t.jsx)(n.em,{children:"HTTP 429"})," response code will be returned. The rate limit is based on the window below."]}),"\n",(0,t.jsx)(n.h3,{id:"production-instance-rate-limits",children:"Production Instance Rate Limits"}),"\n",(0,t.jsxs)(n.p,{children:["Host: ",(0,t.jsx)(n.a,{href:"https://api.clearlydefined.io/",children:"api.clearlydefined.io"}),"\n(",(0,t.jsx)(n.a,{href:"https://api.clearlydefined.io/api-docs/",children:"Docs"}),")"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Limit/Window"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/definitions"}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"250 /min"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/curations"}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"250 /min"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/notices"}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"250 /min"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"All other endpoints are max 2K requests per minute."}),"\n",(0,t.jsx)(n.h3,{id:"development-instance-rate-limits",children:"Development Instance Rate Limits"}),"\n",(0,t.jsxs)(n.p,{children:["Host: ",(0,t.jsx)(n.a,{href:"https://dev-api.clearlydefined.io/",children:"dev-api.clearlydefined.io"}),"\n(",(0,t.jsx)(n.a,{href:"https://dev-api.clearlydefined.io/api-docs/",children:"Docs"}),")"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Endpoint"}),(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Limit/Window"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/definitions"}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"250 /min"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/curations"}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"250 /min"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"/notices"}),(0,t.jsx)(n.td,{children:"POST"}),(0,t.jsx)(n.td,{children:"250 /min"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"All other endpoints are max 500 requests per every 5 minutes."}),"\n",(0,t.jsx)(n.h2,{id:"clearlydefined-coordinates",children:"ClearlyDefined Coordinates"}),"\n",(0,t.jsxs)(n.p,{children:["In order to use ClearlyDefined's data (whether through the REST API or the Web UI), it's critical to understand how to find a component in the data. ClearlyDefined uses a system of ",(0,t.jsx)(n.strong,{children:"coordinates"})," to navigate to data about particular components."]}),"\n",(0,t.jsx)(n.h3,{id:"basics",children:"Basics"}),"\n",(0,t.jsx)(n.p,{children:"Typical coordinates that you will encounter are a five part path-like structure as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm/npmjs/@fluentui/react-text/9.0.0-alpha.13\n"})}),"\n",(0,t.jsx)(n.p,{children:"Or, more generally:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"type/provider/namespace/name/revision\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where the segments have following values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["type -- the type of the component you are looking for. For example, npm, git, nuget, maven, ... This talks about the ",(0,t.jsx)(n.em,{children:"shape"})," of the component."]}),"\n",(0,t.jsx)(n.li,{children:"provider -- where the component can be found. Examples include npmjs, mavencentral, github, nuget, ..."}),"\n",(0,t.jsx)(n.li,{children:"namespace -- many component systems have namespaces. GitHub orgs, NPM namespace, Maven group id, ... This segment must be supplied. If your component does not have a namespace, use '-' (ASCII hyphen)."}),"\n",(0,t.jsxs)(n.li,{children:["name -- the name of the component you want. Given the ",(0,t.jsx)(n.code,{children:"namespace"})," segment mentioned above, this is just the simple name."]}),"\n",(0,t.jsx)(n.li,{children:"revision -- components typically have some differentiator like a version or commit id. Use that here. If this segment is omitted, the latest revision is used (if that makes sense for the provider)."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"In the case of:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm/npmjs/@fluentui/react-text/9.0.0-alpha.13\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["npm is the ",(0,t.jsx)(n.strong,{children:"type"})," of component"]}),"\n",(0,t.jsxs)(n.li,{children:["npmjs is the ",(0,t.jsx)(n.strong,{children:"provider"})," - where the component can be found"]}),"\n",(0,t.jsxs)(n.li,{children:["@fluentui is the ",(0,t.jsx)(n.strong,{children:"namespace"})," of the component"]}),"\n",(0,t.jsxs)(n.li,{children:["react-text is the ",(0,t.jsx)(n.strong,{children:"name"})," of the component"]}),"\n",(0,t.jsxs)(n.li,{children:["9.0.0-alpha.13 is the ",(0,t.jsx)(n.strong,{children:"revision"})," of the component"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A noted above, not all components have namespaces. For example, ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/lodash",children:"the npm component lodash"})," does not have a namespace. In this case, the coordinates would be:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm/npmjs/-/lodash/4.17.21\n"})}),"\n",(0,t.jsx)(n.p,{children:"You could see the definition in the Web UI by navigating to:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://clearlydefined.io/definitions/npm/npmjs/-/lodash/4.17.21",children:"https://clearlydefined.io/definitions/npm/npmjs/-/lodash/4.17.21"})}),"\n",(0,t.jsx)(n.p,{children:"Or, you could access it through the REST API like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -X GET "https://api.clearlydefined.io/definitions/npm/npmjs/-/lodash/4.17.21" -H "accept: */*"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"special-notes",children:"Special Notes"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Git components"})}),"\n",(0,t.jsx)(n.p,{children:"For git components, commit hashes, rather than version numbers, are used for revisions."}),"\n",(0,t.jsx)(n.p,{children:"For example, these coordinates:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git/github/react-component/tree/7b90c11c4aa3458010cbc2031ff48ac4803030e4\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Map to this ",(0,t.jsx)(n.a,{href:"https://github.com/react-component/tree/tree/7b90c11c4aa3458010cbc2031ff48ac4803030e4",children:"commit"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Go components"})}),"\n",(0,t.jsx)(n.p,{children:"For Go components with slashes in the namespace, those slashes need to be url encoded as %2f."}),"\n",(0,t.jsx)(n.p,{children:"For example, a Go component with this import path:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"golang.org/fx/crypto v0.0.0-20210921155107-089bfa567519\n"})}),"\n",(0,t.jsx)(n.p,{children:"would map to those coordinates:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"go/golang/golang.org%2fx/crypto/v0.0.0-20210921155107-089bfa567519\n"})}),"\n",(0,t.jsx)(n.p,{children:"The last word in the import path is considered the name of the component."}),"\n",(0,t.jsx)(n.p,{children:"Another example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"github.com/satori/go.uuid v1.2.1-0.20181028125025-b2ce2384e17b\n"})}),"\n",(0,t.jsx)(n.p,{children:"would map to these coordinates"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"github.com%2fsatori/go.uuid/v1.2.1-0.20181028125025-b2ce2384e17b\n"})}),"\n",(0,t.jsx)(n.p,{children:"Alternately, if you are using a component that has more than five slashes in it's namespace, you can use an alternative version of the API to retrieve a definition for a coordinate. Below is a detailed example."}),"\n",(0,t.jsxs)(n.p,{children:["For a go component with an import url of ",(0,t.jsx)(n.code,{children:"github.com/quasilyte/regex/syntax v0.0.0-20200419152657-af9db7f4a3ab"}),", the coordinates would look like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"type: go\nprovider: golang\nnamespace: github.com/quasilyte/regex (we will need to do url [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) to this, see below)\nname: syntax\nrevision: v0.0.0-20200419152657-af9db7f4a3ab\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We need to encode the slashes in the namespace as '%2F'. You could do that by calling ",(0,t.jsx)(n.code,{children:"namespace.replaceAll('/', '%2F')"})," in JavaScript or a similar function in other languages. You could also manually add the encoding to the namespace. For this example, the namespace ",(0,t.jsx)(n.code,{children:"github.com/quasilyte/regex"})," would become ",(0,t.jsx)(n.code,{children:"github.com%2Fquasilyte%2Fregex"}),". Note that using a function like ",(0,t.jsx)(n.code,{children:"encodeURIComponent"}),"\nmay cause issues with namespaces like ",(0,t.jsx)(n.code,{children:"@std"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"After encoding the namespace, our coordinates would now look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"type: go\nprovider: golang\nnamespace: github.com%2Fquasilyte%2Fregex\nname: syntax\nrevision: v0.0.0-20200419152657-af9db7f4a3ab\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Put together, our coordinates now look like this: ",(0,t.jsx)(n.code,{children:"go/golang/github.com%2Fquasilyte%2fregex/syntax/v0.0.0-20200419152657-af9db7f4a3ab"})]}),"\n",(0,t.jsxs)(n.p,{children:["Because we pass the coordinates as a query parameter, we need to encode the whole coordinate string. You could do that by calling encodeURIComponent(namespace) in JavaScript or a similar function in other languages. You could also manually add the encoding to the coordinates. After the encoding, ",(0,t.jsx)(n.code,{children:"go/golang/github.com%2Fquasilyte%2fregex/syntax/v0.0.0-20200419152657-af9db7f4a3ab"})," would become ",(0,t.jsx)(n.code,{children:"go%2Fgolang%2Fgithub.com%252Fquasilyte%252Fregex%2Fsyntax%2Fv0.0.0-20200407221936-30656e2c4a95"})]}),"\n",(0,t.jsxs)(n.p,{children:["To use the API, ",(0,t.jsx)(n.code,{children:"Accept-Version: 1.0.0"})," must be added to the headers. Note:\n",(0,t.jsx)(n.code,{children:"Accept-Version"})," is currently accepted for ",(0,t.jsx)(n.code,{children:"GET"})," requests but not ",(0,t.jsx)(n.code,{children:"POST"})," requests."]}),"\n",(0,t.jsx)(n.p,{children:"Here is a curl command you could use with the example coordinates."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl --request GET 'https://api.clearlydefined.io/definitions?coordinates=go%2Fgolang%2Fgithub.com%252Fquasilyte%252Fregex%2Fsyntax%2Fv0.0.0-20200407221936-30656e2c4a95' \\\n--header 'Accept-Version: 1.0.0' \\\n--header 'Content-Type: application/json'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"advanced",children:"Advanced"}),"\n",(0,t.jsx)(n.p,{children:"As you get more comfortable with using ClearlyDefined's data, you might use these additional coordinate fields as well:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["pr -- literally the string ",(0,t.jsx)(n.code,{children:"pr"}),". This is a marker segment and must be included if you are looking for the\nresults of applying a particular curation PR to the harvested and curated data for a component"]}),"\n",(0,t.jsx)(n.li,{children:"number -- the GitHub PR number to apply to the existing harvested and curated data."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you wanted to see what the definition would look like with ",(0,t.jsx)(n.a,{href:"https://github.com/clearlydefined/curated-data/pull/12248",children:"this PR to the curated data merged"}),", you would use these coordinates:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm/npmjs/@microsoft/microsoft-graph-types/1.9.0/pr/12248\n"})}),"\n",(0,t.jsx)(n.p,{children:"You could see the definition (with the PR applied) in the Web UI by navigating to:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://clearlydefined.io/definitions/npm/npmjs/@microsoft/microsoft-graph-types/1.9.0/pr/12248",children:"https://clearlydefined.io/definitions/npm/npmjs/@microsoft/microsoft-graph-types/1.9.0/pr/12248"})}),"\n",(0,t.jsx)(n.p,{children:"And this API call:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -X GET "https://api.clearlydefined.io/definitions/npm/npmjs/@microsoft/microsoft-graph-types/1.9.0/pr/12248"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"data-api",children:"Data API"}),"\n",(0,t.jsxs)(n.p,{children:["The ClearlyDefined service manages both raw, harvested data and curated data, as well as the merge of these. These data can be expressed in relation to source code (e.g., a GitHub repo) or a package (e.g., an NPM, RPM, Maven project, ...). One of the key goals of ClearlyDefined is to correlate the ",(0,t.jsx)(n.em,{children:"binary"})," package with the original source."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["A quick note on ",(0,t.jsx)(n.em,{children:"binary"}),". Throughout the ClearlyDefined ecosystem we talk about ",(0,t.jsx)(n.em,{children:"binary"})," as being the packaged, executable form of a component. An NPM for example is a binary despite the fact it may contain human-readable text that looks a lot like JavaScript source code. In general, the original source for these packages may have been in a very different language (e.g., TypeScript) or the package content may have been minimized, compresses, concatenated, or otherwise swizzled. For the purposes of license detection and ultimately compliance, as well as security scanning etc, consumers need to know the location of the actual developer-authored source code."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["As a result of this separation, the same component may show up in the data in several forms -- the NPM and its source are both treated separately. These components may also have different ",(0,t.jsx)(n.em,{children:"revision"})," identifiers (e.g., NPM version and Git commit hash). There are links between the different types and as the ecosystem progresses, this web of components will get richer and enable transitive operations, for example, given a vulnerability in a GitHub repo you will be able to find all the packaged versions and forms that included the vulnerable code."]}),"\n",(0,t.jsx)(n.h3,{id:"definitions",children:"Definitions"}),"\n",(0,t.jsx)(n.p,{children:"One of the most useful API calls is to retrieve a definition for a revision of a component."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Getting the definition for a component"})}),"\n",(0,t.jsx)(n.p,{children:"To get the definition of a component at the coordinates"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm/npmjs/@fluentui/react-text/9.0.0-alpha.13\n"})}),"\n",(0,t.jsx)(n.p,{children:"You would run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -X GET "https://api.clearlydefined.io/definitions/npm/npmjs/%40fluentui/react-text/9.0.0-alpha.13" -H "accept: */*"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Getting coordinates for all definitions that match a given pattern"})}),"\n",(0,t.jsx)(n.p,{children:'If you want to find all coordinates for components that match a given pattern (in this case, "lodash"), you would run:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -X GET "https://api.clearlydefined.io/definitions?pattern=lodash" -H "accept: */*"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"harvests",children:"Harvests"}),"\n",(0,t.jsx)(n.p,{children:"You may also wish to queue up a harvest of a component if you don't see it in ClearlyDefined. To harvest a component at these coordinates:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm/npmjs/-/redie/0.3.0\n"})}),"\n",(0,t.jsx)(n.p,{children:"You would run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'curl -X POST "https://api.clearlydefined.io/harvest" -H "accept: */*" -H "Content-Type: application/json" -d "[{\\"tool\\":\\"package\\",\\"coordinates\\":\\"npm/npmjs/-/redie/0.3.0\\"}]"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"additional-docs",children:"Additional Docs"}),"\n",(0,t.jsxs)(n.p,{children:["You can see the additional API docs at ",(0,t.jsx)(n.a,{href:"https://api.clearlydefined.io/api-docs/",children:"https://api.clearlydefined.io/api-docs/"})]}),"\n",(0,t.jsx)(n.h2,{id:"website",children:"Website"}),"\n",(0,t.jsx)(n.h3,{id:"browse-definitions",children:"Browse Definitions"}),"\n",(0,t.jsxs)(n.p,{children:["ClearlyDefined is all about making project data easily discoverable and available to people. On the ",(0,t.jsx)(n.strong,{children:"Definitions"})," tab you will see a search box. Click in there and start typing the name of a project. This will auto-suggest definitions that exist in ClearlyDefined. Pick one of the presented options and the related definition is added to the ",(0,t.jsx)(n.strong,{children:"Definitions"})," list. Note that if you are after a definition for a component not shown in the list, ClearlyDefined does not know about it yet."]}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Definition"})," list you see a high level summary of the related component -- its license, possible relationship to source in GitHub, a ClearlyDefined score, and more. If you click on an entry in the list, the entry expands to show more detail. The exact content here will change over time as the community learns more about what's most relevant. Typically this additional detail includes release date of the selected revision, details of licenses discovered in the files of the component, as well as a list of attribution parties, and more. Check out the ",(0,t.jsx)(n.a,{href:"/docs/resources/glossary",children:"ClearlyDefined Glossary"})," for more info on the various terms you see in the panel."]}),"\n",(0,t.jsx)(n.p,{children:"On the right side of any definition entry (expanded or collapsed) you will see a set of buttons that modify the list itself (adding related definitions or removing the current definition) or take you to alternative views of a definition. Typically hovering over a button will give you an idea of what it does. Go ahead and click around. You won't break anything."}),"\n",(0,t.jsx)(n.h3,{id:"inspecting---definitions-expanded-view",children:"Inspecting - Definitions Expanded View"}),"\n",(0,t.jsxs)(n.p,{children:["Key to understanding a definition is understanding how it was put together. That's what's happening when you click on the ",(0,t.jsx)(n.strong,{children:"Dig into this entry"})," button, after searching for a few definition on the ",(0,t.jsx)(n.a,{href:"https://clearlydefined.io/definitions",children:(0,t.jsx)(n.strong,{children:"Definitions"})})," tab."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Described"})," pane provides information about the definition source (e.g. github URL), Release date, Tools and ",(0,t.jsx)(n.strong,{children:"Facets"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The second pane, ",(0,t.jsx)(n.strong,{children:"Licensed"})," provides information about the ",(0,t.jsx)(n.strong,{children:"Declared"})," licenses as well as the automatically ",(0,t.jsx)(n.strong,{children:"Discovered"})," ones. Additionally, ",(0,t.jsx)(n.strong,{children:"Attribution"})," and ",(0,t.jsx)(n.strong,{children:"Files"})," details are available (Total files, Unlicensed files, and Unattributed ones)."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Files"})," tab, allows to browse through the files that are part of definition, see which ",(0,t.jsx)(n.strong,{children:"Facet"})," each file belongs to, its ",(0,t.jsx)(n.strong,{children:"Licenses"})," and ",(0,t.jsx)(n.strong,{children:"Copyrights"})," Information."]}),"\n",(0,t.jsxs)(n.p,{children:["Having selected a definition details about where the definition's content came from is shown. The bottom most pane, ",(0,t.jsx)(n.strong,{children:"Raw Data"})," on the tab shows the raw YAML form of the definition. The ",(0,t.jsx)(n.strong,{children:"Curation"})," pane shows you the text of any human additions or modifications that went into the final form of the definition. The ",(0,t.jsx)(n.strong,{children:"Harvested"})," pane shows the raw text dump of all tool output related to the definition."]}),"\n",(0,t.jsx)(n.p,{children:"This is pretty overwhelming with lots and lots of detail. Over time, and with your help, we will discover effective ways presenting this data so you have enough of the right information at your finger tips to understand the definitions and be confident in their content."}),"\n",(0,t.jsx)(n.h3,{id:"a-note-on-definition-coordinates",children:"A note on definition coordinates"}),"\n",(0,t.jsxs)(n.p,{children:["As you will have noticed, the same component name (e.g, jquery) shows up multiple times in the suggestion lists. Sometimes in entries that look like GitHub things, sometimes Maven or NPM or ... This in fact reflects reality -- the same project is often packaged or made available in multiple forms. Given the differences between these packaging forms names and even versioning often do not align. For example, the thing you know and commonly refer to as ",(0,t.jsx)(n.code,{children:"jquery"})," is actually called ",(0,t.jsx)(n.code,{children:"jquery"})," on NPM but ",(0,t.jsx)(n.code,{children:"jquery/jquery"})," on GitHub. The version you know as ",(0,t.jsx)(n.code,{children:"3.3.1"})," on NPM is ",(0,t.jsx)(n.code,{children:"32b00373b3f42e5cdcb709df53f3b08b7184a944"})," on GitHub. It's even worse in that various package types can come from different providers. For example, you can install NPMs from GitHub!"]}),"\n",(0,t.jsxs)(n.p,{children:["This is what we call, ",(0,t.jsx)(n.em,{children:"the identity problem"}),". ClearlyDefined is NOT attempting to solve the identity problem. Instead, we give each unique thing (i.e., component) unique coordinates and then allow for the creation for ",(0,t.jsx)(n.em,{children:"links"})," between coordinates."]}),"\n",(0,t.jsx)(n.h2,{id:"curation",children:"Curation"}),"\n",(0,t.jsxs)(n.p,{children:["New curations, or changes to existing curations, are done via PATCHes. Ultimately these surface as PRs in the configured curation repo. They can be manipulated directly there but using this API keeps things regular. A set of curations is described together with its general intent, and understood as a ",(0,t.jsx)(n.code,{children:"contribution"}),". Below is an example contribution."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "contributionInfo": {\n    "summary": "[Test] Update declared license",\n    "details": "The declared license should be Apache as per the LICENSE file.",\n    "resolution": "Updated declared license to Apache-2.0.",\n    "type": "incorrect",\n    "removeDefinitions": false\n  },\n  "patches": [\n    {\n      "described": {\n        "sourceLocation": {\n          "type": "git",\n          "provider": "github",\n          "url": "https://github.com/microsoft/redie",\n          "revision": "194269b5b7010ad6f8dc4ef608c88128615031ca"\n        }\n      },\n      "licensed": {\n        "license": {\n          "expression": "MIT"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here the curation updates information in two data ",(0,t.jsx)(n.em,{children:"neighborhoods"}),", ",(0,t.jsx)(n.code,{children:"described"})," and ",(0,t.jsx)(n.code,{children:"licensed"}),". (You will hear us talk about projects being ClearlyDescribed or ClearlyLicensed). These new values will be merged with the existing curation (as part of the PR merge) and laid over whatever data has been harvested when users access the data."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also get the curation for a particular component revision using one of the following requests. Both return the full curation for the given component. The first (without the ",(0,t.jsx)(n.code,{children:"pr"})," segment), gets the current curation that is in effect -- the content of the ",(0,t.jsx)(n.code,{children:"master"})," branch. The second gets the curation proposed in the given pull request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"GET http://api.clearlydefined.io/curations/npm/npmjs/-/redie/0.3.0\nGET http://api.clearlydefined.io/curations/npm/npmjs/-/redie/0.3.0/pr/23\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);