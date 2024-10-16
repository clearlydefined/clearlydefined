"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7272],{4094:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var t=s(4848),i=s(8453);const n={layout:"default",sidebar_position:7,title:"Add a harvest"},a="Adding a Harvest source",l={id:"get-involved/adding-sources",title:"Add a harvest",description:"ClearlyDefined currently harvests several types of packages, the full list can be seen on the ClearlyDefined Stats Page.",source:"@site/docs/get-involved/adding-sources.md",sourceDirName:"get-involved",slug:"/get-involved/adding-sources",permalink:"/docs/get-involved/adding-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/clearlydefined/clearlydefined/tree/main/docs/get-involved/adding-sources.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{layout:"default",sidebar_position:7,title:"Add a harvest"},sidebar:"tutorialSidebar",previous:{title:"Contribute code",permalink:"/docs/get-involved/contributing-code"},next:{title:"Adopt practices",permalink:"/docs/get-involved/adopting"}},d={},h=[{value:"Current Harvest Sources",id:"current-harvest-sources",level:2},{value:"npm",id:"npm",level:3},{value:"gem",id:"gem",level:3},{value:"pypi",id:"pypi",level:3},{value:"maven",id:"maven",level:3},{value:"nuget",id:"nuget",level:3},{value:"git",id:"git",level:3},{value:"crate",id:"crate",level:3},{value:"deb",id:"deb",level:3},{value:"debsrc",id:"debsrc",level:3},{value:"composer",id:"composer",level:3},{value:"pod",id:"pod",level:3},{value:"Adding a new Harvest Source",id:"adding-a-new-harvest-source",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"adding-a-harvest-source",children:"Adding a Harvest source"})}),"\n",(0,t.jsxs)(r.p,{children:["ClearlyDefined currently harvests several types of packages, the full list can be seen on the ",(0,t.jsx)(r.a,{href:"https://clearlydefined.io/stats",children:"ClearlyDefined Stats Page"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"current-harvest-sources",children:"Current Harvest Sources"}),"\n",(0,t.jsx)(r.h3,{id:"npm",children:"npm"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"https://www.npmjs.com",children:"https://www.npmjs.com"})]}),"\n",(0,t.jsxs)(r.li,{children:["The crawler pulls registry data for the component from ",(0,t.jsx)(r.a,{href:"https://registry.npmjs.com",children:"https://registry.npmjs.com"})]}),"\n",(0,t.jsx)(r.li,{children:"In the service, the ClearlyDefined summarizer parses license(s) from the registry data and sets them as the declared license"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"gem",children:"gem"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"https://rubygems.org",children:"https://rubygems.org"})]}),"\n",(0,t.jsxs)(r.li,{children:["The crawler pulls registry data for the component from ",(0,t.jsx)(r.a,{href:"https://rubygems.org",children:"https://rubygems.org"})]}),"\n",(0,t.jsx)(r.li,{children:"The ClearlyDefined summarizer determines the declared license based on the license in the registry data"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"pypi",children:"pypi"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"https://pypi.org",children:"https://pypi.org"})]}),"\n",(0,t.jsxs)(r.li,{children:["First, the crawler pulls registry information from ",(0,t.jsx)(r.a,{href:"https://pypi.org",children:"https://pypi.org"})," ",(0,t.jsx)(r.a,{href:"https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/pypiFetch.js#L42",children:"Code"})]}),"\n",(0,t.jsxs)(r.li,{children:["It then extracts the declared license from the registry data ",(0,t.jsx)(r.a,{href:"https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/pypiFetch.js#L71",children:"Code"})]}),"\n",(0,t.jsx)(r.li,{children:"The service uses the declared license set by the crawler"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"maven",children:"maven"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["sources ",(0,t.jsx)(r.a,{href:"https://mvnrepository.com/repos/central",children:"https://mvnrepository.com/repos/central"}),", ",(0,t.jsx)(r.a,{href:"https://maven.google.com/",children:"https://maven.google.com/"})," and ",(0,t.jsx)(r.a,{href:"https://plugins.gradle.org/m2/",children:"https://plugins.gradle.org/m2/"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"--maven central--"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The crawler downloads the maven artifact from maven.org"}),"\n",(0,t.jsx)(r.li,{children:"The crawler then extracts all pom files from the artifact"}),"\n",(0,t.jsx)(r.li,{children:"And then merges the poms (including all the licenses defined in the poms)"}),"\n",(0,t.jsx)(r.li,{children:"The ClearlyDefined summarizer parses the merged poms and sets the declared license(s) based on that data"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"--google maven--"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The crawler gets pom files for the component from ",(0,t.jsx)(r.a,{href:"https://dl.google.com/android/maven2/",children:"https://dl.google.com/android/maven2/"})]}),"\n",(0,t.jsx)(r.li,{children:"It then merges the poms (including all the licenses defined in the poms)"}),"\n",(0,t.jsx)(r.li,{children:"The ClearlyDefined summarizer parses the merged poms and sets the declared license(s) based on that data"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"--gradle plugin--"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The crawler gets pom files for the component from ",(0,t.jsx)(r.a,{href:"https://plugins.gradle.org/m2/",children:"https://plugins.gradle.org/m2/"})]}),"\n",(0,t.jsx)(r.li,{children:"It then merges the poms (including all the licenses defined in the poms)"}),"\n",(0,t.jsx)(r.li,{children:"The ClearlyDefined summarizer parses the merged poms and sets the declared license(s) based on that data"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"nuget",children:"nuget"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"https://www.nuget.org/",children:"https://www.nuget.org/"})]}),"\n",(0,t.jsxs)(r.li,{children:["The crawler gets registry information for the component from ",(0,t.jsx)(r.a,{href:"https://api.nuget.org",children:"https://api.nuget.org"})]}),"\n",(0,t.jsx)(r.li,{children:"If the registry information has a licenseExpression field, the ClearlyDefined summarizer sets the declared license to that license expression"}),"\n",(0,t.jsx)(r.li,{children:"If the registry information has a licenseUrl field, the ClearlyDefined summarizer extracts the license from that license url and sets the declared license to the extracted license"}),"\n",(0,t.jsx)(r.li,{children:"If the ClearlyDefined summarizer cannot extract the license from the license URL, it sets the declared license to NOASSERTION"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"--Checking for the packageEntries field--"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The ClearlyDefined summarizer then checks whether the registry information has a packageEntries field"}),"\n",(0,t.jsx)(r.li,{children:"If it does not, it leaves the declared license as it is"}),"\n",(0,t.jsx)(r.li,{children:"If it does have a packageEntries field, the ClearlyDefined summarizer creates a new definition with the files field set to those packageEntries"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"--Merging definitions--"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"It then merges the definitions and, in the process, merges the declared licenses"}),"\n",(0,t.jsx)(r.li,{children:"If the original definition (prior to the merge) has a declared license of 'OTHER', it sets the declared license (on the merged definition) to the license on the new definition"}),"\n",(0,t.jsx)(r.li,{children:"Otherwise, it combines the original definition license and the new definition license with AND"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"git",children:"git"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["sources: ",(0,t.jsx)(r.a,{href:"https://github.com",children:"https://github.com"})," and ",(0,t.jsx)(r.a,{href:"https://gitlab.com",children:"https://gitlab.com"})]}),"\n",(0,t.jsxs)(r.li,{children:["The crawler clones the repo for the component from either ",(0,t.jsx)(r.a,{href:"https://gitlab.com",children:"https://gitlab.com"})," or ",(0,t.jsx)(r.a,{href:"https://github.com",children:"https://github.com"})]}),"\n",(0,t.jsx)(r.li,{children:"TODO - how is the declared license decided?"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"crate",children:"crate"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"https://crates.io/",children:"https://crates.io/"})]}),"\n",(0,t.jsxs)(r.li,{children:["The crawler gets registry information from ",(0,t.jsx)(r.a,{href:"https://crates.io/api/v1/crates/",children:"https://crates.io/api/v1/crates/"})]}),"\n",(0,t.jsx)(r.li,{children:"The ClearlyDefined summarizer sets the declared license to the license(s) in the registry information"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"deb",children:"deb"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"http://ftp.debian.org/",children:"http://ftp.debian.org/"})]}),"\n",(0,t.jsxs)(r.li,{children:["First, the crawler downloads a package file map from ",(0,t.jsx)(r.a,{href:"http://ftp.debian.org/debian/indices/package-file.map.bz2",children:"http://ftp.debian.org/debian/indices/package-file.map.bz2"})," and caches it (if there is not one already cached) for 8 hours ",(0,t.jsx)(r.a,{href:"https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L87",children:"Code"})]}),"\n",(0,t.jsxs)(r.li,{children:["It then pulls the registry information for the particular component from that package map file ",(0,t.jsx)(r.a,{href:"https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L114",children:"Code"})]}),"\n",(0,t.jsxs)(r.li,{children:["It then finds the relevant copyright URL from the registry information ",(0,t.jsx)(r.a,{href:"https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L295",children:"Code"})," ",(0,t.jsx)(r.a,{href:"https://metadata.ftp-master.debian.org/changelogs/main/0/0ad-data/0ad-data_0.0.17-1_copyright",children:"Example"})]}),"\n",(0,t.jsxs)(r.li,{children:["It then pulls information from the copyright URL ",(0,t.jsx)(r.a,{href:"https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L306",children:"Code"})]}),"\n",(0,t.jsxs)(r.li,{children:["And parses that information ",(0,t.jsx)(r.a,{href:"https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L320",children:"Code"})," to determine the declared license(s)"]}),"\n",(0,t.jsx)(r.li,{children:"The ClearlyDefined summarizer then parses the declared licenses and, if there is more than one, joins them with 'AND'"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"debsrc",children:"debsrc"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"http://ftp.debian.org/",children:"http://ftp.debian.org/"})]}),"\n",(0,t.jsxs)(r.li,{children:["Appears to be the same as ",(0,t.jsx)(r.code,{children:"deb"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"composer",children:"composer"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"https://packagist.org/",children:"https://packagist.org/"})]}),"\n",(0,t.jsxs)(r.li,{children:["The crawler pulls registry information from ",(0,t.jsx)(r.a,{href:"https://repo.packagist.org/",children:"https://repo.packagist.org/"})]}),"\n",(0,t.jsx)(r.li,{children:"The ClearlyDefined summarizer then sets the declared license based on the registry information"}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"pod",children:"pod"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["source: ",(0,t.jsx)(r.a,{href:"https://cocoapods.org/",children:"https://cocoapods.org/"})]}),"\n",(0,t.jsx)(r.li,{children:"The service then sets the declared license based on the registry information"}),"\n",(0,t.jsxs)(r.li,{children:["The ClearlyDefined summarizer pulls registry information from '",(0,t.jsx)(r.a,{href:"https://raw.githubusercontent.com/CocoaPods/Specs/master",children:"https://raw.githubusercontent.com/CocoaPods/Specs/master"})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"adding-a-new-harvest-source",children:"Adding a new Harvest Source"}),"\n",(0,t.jsx)(r.p,{children:"If you would like to add a new Harvest source to ClearlyDefined, consider this criteria:"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Discoverability"})," \u2013 how are the packages for this language discovered? Is the repository searched by the build tooling without the user having to customize their client?"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Primary Source"})," \u2013 is this the primary repository that the package is published to? Or is this repository a mirror of an existing repository? We should always harvest from primary sources."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Reputability"})," \u2013 is this repository operated by a reputable organization? What is the purpose behind running this repository? Is there an identifiable team that can be reached in the event of any issues?"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Security"})," \u2013 how secure is the repository? Is there a team that is available to handle issues in a timely manner when they arise? How fast do they respond to issues, such as when a security vulnerability is planted as a backdoor in a package?"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Automation"})," \u2013 does the repository support an API to support pulling of information? If not, is the package index organized in a schematized format that can programmatically queried using the package name and version and queried using HTTP(s). When using HTTP to mine data, ClearlyDefined should check for the existence of robots.txt or robot headers that indicate such mining is unacceptable. How much effort is it to automate the process?"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Relationship"})," \u2013 reach out to the organization that maintains the repository to indicate that ClearlyDefined wishes to harvest data from their repository, with an explanation on how harvesting is done, what the data is used for and how much additional traffic this could result in. Identify/Resolve any concerns and provide a contact from ClearlyDefined in the event they need to support in case of an issue."]}),"\n",(0,t.jsxs)(r.p,{children:["To add a new harvest source, open an issue on the ",(0,t.jsx)(r.a,{href:"https://github.com/clearlydefined/service",children:"ClearlyDefined Service Repo"})," for comment. Make sure to include how you believe that source fits the above criteria and the community will discuss it with you."]})]})}function o(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>l});var t=s(6540);const i={},n=t.createContext(i);function a(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);