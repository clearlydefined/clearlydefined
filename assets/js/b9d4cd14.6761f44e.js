"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5658],{9589:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var o=i(4848),t=i(8453);const s={},c="Curation",r={id:"curation/curation-guidelines",title:"Curation",description:"ClearlyDefined licensing data forms the core understanding required to meet FOSS licensing obligations. This data includes:",source:"@site/docs/curation/curation-guidelines.md",sourceDirName:"curation",slug:"/curation/curation-guidelines",permalink:"/docs/curation/curation-guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/clearlydefined/clearlydefined/docs/curation/curation-guidelines.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Curation",permalink:"/docs/curation/"},next:{title:"How to curate",permalink:"/docs/curation/curation-process"}},l={},a=[{value:"The Difference between &quot;Source components&quot; and &quot;Package components&quot;",id:"the-difference-between-source-components-and-package-components",level:2},{value:"The Difference between Declared and Discovered licenses",id:"the-difference-between-declared-and-discovered-licenses",level:2},{value:"Source components",id:"source-components",level:2},{value:"Source component declared license",id:"source-component-declared-license",level:3},{value:"Source component discovered licenses",id:"source-component-discovered-licenses",level:3},{value:"Package components",id:"package-components",level:2},{value:"Package components declared license",id:"package-components-declared-license",level:3},{value:"Package components discovered license",id:"package-components-discovered-license",level:3},{value:"Canonical locations for the declared license for source definitions",id:"canonical-locations-for-the-declared-license-for-source-definitions",level:3},{value:"Canonical locations for the declared license for package definitions",id:"canonical-locations-for-the-declared-license-for-package-definitions",level:3},{value:"File level curations",id:"file-level-curations",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Supported source locations",id:"supported-source-locations",level:2},{value:"Maven",id:"maven",level:2},{value:"NPM",id:"npm",level:2},{value:"NuGet",id:"nuget",level:2},{value:"PyPi",id:"pypi",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"curation",children:"Curation"}),"\n",(0,o.jsx)(n.p,{children:"ClearlyDefined licensing data forms the core understanding required to meet FOSS licensing obligations. This data includes:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"declared and discovered license information"}),"\n",(0,o.jsx)(n.li,{children:"attribution information"}),"\n",(0,o.jsx)(n.li,{children:"source location information"}),"\n",(0,o.jsx)(n.li,{children:"facet information"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This document sets out the minimum processes the ClearlyDefined community follows to curate each class of data."}),"\n",(0,o.jsx)(n.h1,{id:"license-information",children:"License information"}),"\n",(0,o.jsx)(n.p,{children:"There are five possible license property values on a definition element:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"A valid SPDX license expression."}),"\n",(0,o.jsxs)(n.li,{children:["The string ",(0,o.jsx)(n.code,{children:"NOASSERTION"}),". This indicates that license-like data is found, but that ClearlyDefined cannot identify an SPDX-identified license."]}),"\n",(0,o.jsxs)(n.li,{children:["The string ",(0,o.jsx)(n.code,{children:"NONE"}),". This indicates that a human confirmed that there is no license information in the file."]}),"\n",(0,o.jsxs)(n.li,{children:["The string ",(0,o.jsx)(n.code,{children:"OTHER"}),". This indicates that a human confirmed that there is license information in the file but that the license is not an SPDX-identified license."]}),"\n",(0,o.jsx)(n.li,{children:"No value. This indicates that automated tooling did not find license-like data in the file."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["ClearlyDefined will follow the ",(0,o.jsx)(n.a,{href:"https://spdx.dev/license-list/matching-guidelines/",children:"SPDX Matching Guidelines"}),". If a license fails to meet the requirements of the ",(0,o.jsx)(n.a,{href:"https://spdx.dev/license-list/matching-guidelines/",children:"SPDX Matching Guidelines"}),", the license will be curated as ",(0,o.jsx)(n.code,{children:"OTHER"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"the-difference-between-source-components-and-package-components",children:'The Difference between "Source components" and "Package components"'}),"\n",(0,o.jsx)(n.p,{children:'The process below differs for components depending on whether they are "source" or "package" components. A "source" package is the component in the preferred form of editing or building, like a Git repository. A "package" component is a component in its functional form that is intended to be used without further editing or building, like would be installed by a package manager.'}),"\n",(0,o.jsx)(n.p,{children:"For some package types such as Maven and Debian, both the \u201cpackage\u201d and \u201csource\u201d components are created simultaneously under their own respective ClearlyDefined definitions and linked together."}),"\n",(0,o.jsx)(n.p,{children:"Both may contain equally valuable information and should be reviewed and curated together. For Maven, the definition containing the source has the type \u201csourcearchive\u201d, while Debian has \u201cdebsrc\u201d."}),"\n",(0,o.jsx)(n.h2,{id:"the-difference-between-declared-and-discovered-licenses",children:"The Difference between Declared and Discovered licenses"}),"\n",(0,o.jsx)(n.p,{children:"The ClearlyDefined definition for a component has two types of license information: declared and discovered."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"declared license"})," for a component is what the component explicitly calls out, formally or through convention, as the overall license. This might be a ",(0,o.jsx)(n.code,{children:"LICENSE"})," or ",(0,o.jsx)(n.code,{children:"README"})," file at the root of a repo or the value of a ",(0,o.jsx)(n.code,{children:"LICENSE"})," property in a package\u2019s metadata such as package.json or pom.xml."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"discovered licenses"})," in a component\u2019s definition are the other licenses found in the files of the component or sub-components of the overall project. For example, a source file or sub-directory might have a header comment indicating an SPDX license id, or a sub-directory might be under a different license."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In other words, the declared license is what normal developers would understand the component producers intended the overall project license to be. The discovered licenses represent what other licenses are found in the component."}),"\n",(0,o.jsx)(n.h2,{id:"source-components",children:"Source components"}),"\n",(0,o.jsx)(n.h3,{id:"source-component-declared-license",children:"Source component declared license"}),"\n",(0,o.jsx)(n.p,{children:"To evaluate the declared license info for a source component, use the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Determine the canonical names and locations for the declared licenses in the ecosystem at hand. These names and locations are listed in the source canonical locations section below."}),"\n",(0,o.jsx)(n.li,{children:"Look to see whether there is license information in the relevant canonical locations for that ecosystem."}),"\n",(0,o.jsx)(n.li,{children:"If there is, evaluate that canonical license information against the current declared license definition in ClearlyDefined."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"source-component-discovered-licenses",children:"Source component discovered licenses"}),"\n",(0,o.jsx)(n.p,{children:"To evaluate the discovered licenses for a source component, use the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Identify all files in the repository labeled as ",(0,o.jsx)(n.code,{children:"NOASSERTION"})," or with an SPDX expression containing ",(0,o.jsx)(n.code,{children:"AND"})," or ",(0,o.jsx)(n.code,{children:"OR"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Review each such file to determine whether there is an SPDX-identified license. There are three cases:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"If there are SPDX-identified license(s) in the file, use the SPDX license expression to capture those licenses."}),"\n",(0,o.jsxs)(n.li,{children:["If there is no license in the file, code ",(0,o.jsx)(n.code,{children:"NONE"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If there is a license but that license does not have an SPDX identifier, code as ",(0,o.jsx)(n.code,{children:"OTHER"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"package-components",children:"Package components"}),"\n",(0,o.jsx)(n.p,{children:"Although a package component can have a different license than the underlying source used to create that package, most license obligations from the source flow through to the package. Thus, package definitions data must incorporate the definition data from the source."}),"\n",(0,o.jsx)(n.h3,{id:"package-components-declared-license",children:"Package components declared license"}),"\n",(0,o.jsx)(n.p,{children:"To evaluate the declared license info for a package component, use the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Determine the canonical names and locations for the declared licenses in the ecosystem at hand. These names and locations for common ecosystems are listed in ",(0,o.jsx)(n.strong,{children:"Appendix A"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Look to see whether there is license information in the relevant canonical locations for that ecosystem."}),"\n",(0,o.jsx)(n.li,{children:"If there is, evaluate that canonical license information against the current declared license definition in ClearlyDefined."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"package-components-discovered-license",children:"Package components discovered license"}),"\n",(0,o.jsx)(n.p,{children:"To evaluate the discovered licenses for a package component, use the following steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Identify all files in the repository labeled as ",(0,o.jsx)(n.code,{children:"NOASSERTION"})," or with an SPDX expression containing ",(0,o.jsx)(n.code,{children:"AND"})," or ",(0,o.jsx)(n.code,{children:"OR"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Review each such file to determine whether there is an SPDX-identified license. There are three cases:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"If there is/are SPDX-identified license(s) in the file, use the SPDX license expression to capture those licenses."}),"\n",(0,o.jsxs)(n.li,{children:["If there is no license in the file, code ",(0,o.jsx)(n.code,{children:"NONE"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If there is a license, but that license does not have an SPDX identifier, code ",(0,o.jsx)(n.code,{children:"OTHER"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Follow the above steps for the source component definition that corresponds to the package component definition. If you see ",(0,o.jsx)(n.code,{children:"</>"})," next to the magnifying glass symbol, you can pull it up automatically."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"canonical-locations-for-the-declared-license-for-source-definitions",children:"Canonical locations for the declared license for source definitions"}),"\n",(0,o.jsx)(n.p,{children:"When curating the declared license for a source code repository, look in the canonical locations listed below."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Source repository."})," Look to see if a license file (e.g. LICENSE, COPYING) is included in the specific commit or version you are curating. Sometimes the license is found on the README. There may be more than one declared license. If there is not any license information at the specific commit or version level, check the master branch."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"File Headers."})," If there is not a declared license anywhere in the repository, look to see if there is any license information in the source code file header comments. Look at multiple files to determine if they are under different licenses. You can also try using a search function to find any mention of \u2018license,\u2019 for example."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"canonical-locations-for-the-declared-license-for-package-definitions",children:"Canonical locations for the declared license for package definitions"}),"\n",(0,o.jsxs)(n.p,{children:["When curating the declared license for a package, look in all the canonical locations listed below (1-3). ",(0,o.jsx)(n.strong,{children:"Appendix A"})," has canonical locations for common package ecosystems."]}),"\n",(0,o.jsx)(n.p,{children:"If the canonical locations do not match (e.g., the license file states Apache-2.0 and the metadata states MIT), contact the author/publisher. If you do not receive a response after 7 days, prioritize curating the declared license in the order listed below."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Package files."})," Look to see if a license file (e.g. LICENSE, COPYING) is included in the package file contents. Sometimes there is license information on a README."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Package metadata."})," Look to see if the target component metadata includes any license info, such as a license identifier or license file URL."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Source repository."})," Follow the canonical locations for source definitions, above. Also look for package manifest files (e.g. package.json, setup.py)."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"file-level-curations",children:"File level curations"}),"\n",(0,o.jsxs)(n.p,{children:["In ClearlyDefined, you can curate license and copyright information at the file level in the \u201cFiles\u201d section of the definition. For further information, also see the ",(0,o.jsx)(n.a,{href:"https://github.com/clearlydefined/clearlydefined/blob/master/docs/curation-guidelines.md#attribution-information",children:"Attribution information"})," section below."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"License information to include."})," When curating license information for an individual file, string together all the licenses found on the file with an \u201cAND,\u201d unless otherwise specified. For example, a file has a code comment at the top saying the component is MIT. Further down the file is a comment saying a portion of the file is based on an Apache-2.0 licensed project. When curating that file, you would curate \u201cMIT AND Apache-2.0.\u201d"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"License information to ignore."})," Occasionally you may see a reference to a license that is not meant to apply to the file. For example, a code comment saying the data looked at GPL licensed projects, would not result in a GPL license curation."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Copyright information to include."})," When curating the copyright information for an individual file, add any copyright statements found on the file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Copyright information to ignore."})," Some licenses include a copyright statement for the license text itself. A copyright curation would not include the license\u2019s copyright statement."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"We always prefer a reference to a version control system, but if you\u2019re unable to find that, other public references are okay."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Target component package metadata gives a URL that points to a volatile location (e.g. a webpage or the master branch of a git repository).","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Look for evidence of the license at the time the target component was published."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Target component package metadata points to a license URL in source repository, but the link is broken.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Ignore the link specifics and look for license information in other canonical locations in that source repository."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Target component package metadata does not have a license URL or license information. There exists a related version (newer or older) of the package that does have license information.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use the related component\u2019s license data, favoring for newer version if possible to discern."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Target component has no project/source location and does not have any license information, but does declare a license in the copyright field (e.g., ",(0,o.jsx)(n.code,{children:"<Copyright MIT>"}),")","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Use the declared license in the copyright field"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Target component is using multiple licenses.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Use an SPDX expression to indicate multiple licenses, using AND, OR, or WITH (see ",(0,o.jsx)(n.a,{href:"https://spdx.org/licenses/",children:"https://spdx.org/licenses/"}),")."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Curate the declared license as ",(0,o.jsx)(n.code,{children:"NONE"})," when the component verifiably and intentionally has no license."]}),"\n",(0,o.jsxs)(n.li,{children:["Curate the declared license as ",(0,o.jsx)(n.code,{children:"OTHER"})," when the license is a proprietary license, such as an End-User-License-Agreement."]}),"\n",(0,o.jsx)(n.li,{children:"Curate the declared license as 'OTHER' when there is a reference saying the target component is in the public domain."}),"\n",(0,o.jsxs)(n.li,{children:['Target component includes a license file and a separate PATENTS file that grants additional patent rights. Curate the declared field with the license and add "AND ',(0,o.jsx)(n.code,{children:"OTHER"}),'".']}),"\n",(0,o.jsxs)(n.li,{children:["Target component license information is limited to a non-SPDX license identifier that may not be version specific:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If the only license information is \u201cBSD,\u201d code the license as \u201cBSD-3-Clause.\u201d Note - ",(0,o.jsx)(n.a,{href:"https://opensource.org/licenses/bsd-license.php",children:"https://opensource.org/licenses/bsd-license.php"})," is not a license version specific link."]}),"\n",(0,o.jsx)(n.li,{children:"For L/GPL licensed packages, look in the ReadMe, package manifest, and source code files to determine if it is \u201cGPL-#-only\u201d or \u201cGPL-#-or-later.\u201d (Do not use the deprecated SPDX license identifiers \u2013 e.g. GPL-2.0+)."}),"\n",(0,o.jsxs)(n.li,{children:["If the only license information is \u201cGPL,\u201d with no COPYING license file, code the license as \u201cGPL-1.0-or-later.\u201d Note - ",(0,o.jsx)(n.a,{href:"http://www.gnu.org/licenses/gpl.txt",children:"http://www.gnu.org/licenses/gpl.txt"})," is not a license version specific link."]}),"\n",(0,o.jsx)(n.li,{children:"If the only license information is \u201cLGPL\u201d with no COPYING license file, code the license as \u201cLGPL-2.0-or later.\u201d"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Target component\u2019s license file states it is a \u201cfork of,\u201d \u201cimplementation of,\u201d or \u201cis derived from\u201d another project, and the original project is under a different license from the target component. In this case, the license of the original project is a \u201cdiscovered\u201d license. If the original project license is not already included as a \u201cdiscovered\u201d license, look for an appropriate file in the \u201cFiles\u201d section of ClearlyDefined to add the license information. For example, a NuGet package points to a license that states the project is MIT and is a fork of a project that is Apache-2.0 and the Apache-2.0 license is not showing up as a \u201cdiscovered\u201d license. Here, you can curate the nuspec file as \u201cMIT AND Apache-2.0.\u201d"}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"attribution-information",children:"Attribution Information"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Process"}),". The curator should look at each copyright statement. Copyright statements should be removed only when it is abundantly clear that the string is not a copyright statement and it was surfaced by the scanners in error."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Rationale"}),". Because copyright statements take a wide variety of forms, sometimes including typos or other inconsistencies, it is not the ClearlyDefined curator's role to guess the intent of the author or contributor to the package and so the Copyright statement should remain unmodified."]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"source-location-information",children:"Source Location Information"}),"\n",(0,o.jsx)(n.p,{children:"When curating the source code location for a package component, consider where the source code was at the time the component was published. When curating the source code repository, look in the canonical locations listed below."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Package metadata"}),"\n",(0,o.jsx)(n.li,{children:"Location provided in component files such as links in the README, file headers, etc."}),"\n",(0,o.jsx)(n.li,{children:"Other versions"}),"\n",(0,o.jsx)(n.li,{children:"Author's other components for potential locations (such as GitHub user accounts)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"When dealing with multiple forks, you may have to look at the creation date to verify which one existed when the package was published."}),"\n",(0,o.jsx)(n.h2,{id:"supported-source-locations",children:"Supported source locations"}),"\n",(0,o.jsx)(n.p,{children:"Currently, GitHub and GitLab are supported source code locations."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["GitHub: ",(0,o.jsx)(n.a,{href:"https://github.com/%7Bowner%7D/%7Brepo%7D/commits/%7Bcommit_sha%7D",children:"https://github.com/{owner}/{repo}/commits/{commit_sha}"})]}),"\n",(0,o.jsxs)(n.li,{children:["GitLab: ",(0,o.jsx)(n.a,{href:"https://gitlab.com/%7Bowner%7D/%7Brepo%7D/-/commit/%7Bcommit_sha%7D",children:"https://gitlab.com/{owner}/{repo}/-/commit/{commit_sha}"})]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"facets",children:"Facets"}),"\n",(0,o.jsx)(n.p,{children:"[TODO]"}),"\n",(0,o.jsx)(n.h1,{id:"appendix-a---package-ecosystems",children:"Appendix A - Package ecosystems"}),"\n",(0,o.jsx)(n.p,{children:"When evaluating license information, always look in the version specific canonical location that corresponds to the version of the target component package."}),"\n",(0,o.jsx)(n.h2,{id:"maven",children:"Maven"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Canonical Location"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Package files"})}),(0,o.jsx)(n.td,{children:"Look in the -sources.jar."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Package metadata"})}),(0,o.jsx)(n.td,{children:"Look on the .pom file."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Source repository"})}),(0,o.jsx)(n.td,{children:"Look on the .pom file for a URL to the source repository."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"npm",children:"NPM"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Canonical Location"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Package files"})}),(0,o.jsx)(n.td,{children:'Look in the "Files" section on the ClearlyDefined definition.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Package metadata"})}),(0,o.jsxs)(n.td,{children:['Look on the package.json in the "Files" section on the ClearlyDefined definition. Alternatively, you can look on ',(0,o.jsx)(n.a,{href:"http://registry.npmjs.com/",children:"http://registry.npmjs.com/"})," (use this format: ",(0,o.jsx)(n.code,{children:"http://registry.npmjs.com/[package name]/[version number]"}),"). Note: the license information on npmjs.com displays the most current package license for all versions. Unless you are evaluating the license for the most current package, you will want to use a version specific canonical location."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Source repository"})}),(0,o.jsxs)(n.td,{children:["The \u201cSource\u201d field on the ClearlyDefined definition may link to a GitHub or GitLab commit. Alternatively, you can look on the registry or the package.json file for a URL to the source repository. The package on ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com",children:"https://www.npmjs.com"})," may also provide a link to the repository."]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"nuget",children:"NuGet"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Canonical Location"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Package files"})}),(0,o.jsx)(n.td,{children:'Look in the "Files" section on the ClearlyDefined definition.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Package metadata"})}),(0,o.jsxs)(n.td,{children:["Look on ",(0,o.jsx)(n.a,{href:"https://www.nuget.org/",children:"https://www.nuget.org/"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Source repository"})}),(0,o.jsxs)(n.td,{children:["The \u201cSource\u201d field on the ClearlyDefined definition may link to a GitHub or GitLab commit. The package on ",(0,o.jsx)(n.a,{href:"https://www.nuget.org",children:"https://www.nuget.org"})," may also provide a link to the source repository."]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"pypi",children:"PyPi"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Canonical Location"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Package files"})}),(0,o.jsxs)(n.td,{children:['Look in the "Files" section on the ClearlyDefined definition. You can also click on \u201cDownload files\u201d on ',(0,o.jsx)(n.a,{href:"https://pypi.org",children:"https://pypi.org"}),"."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Package metadata"})}),(0,o.jsxs)(n.td,{children:["Look on ",(0,o.jsx)(n.a,{href:"https://pypi.org",children:"https://pypi.org"}),'. Do not rely on the Statistics links. You can also look at the setup.py file in the "Files" section on the ClearlyDefined definition.']})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Source repository"})}),(0,o.jsxs)(n.td,{children:['The \u201cSource\u201d field on the ClearlyDefined definition may link to a GitHub or GitLab commit. You can also click on \u201cHomepage\u201d under \u201cProject links" on ',(0,o.jsx)(n.a,{href:"https://pypi.org/",children:"https://pypi.org/"}),"."]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var o=i(6540);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);