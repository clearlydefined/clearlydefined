# Purpose
ClearlyDefined licensing data forms the core understanding required to meet FOSS licensing obligations. This data includes:

1. declared and discovered license information
2. attribution information
3. source location information
4. facet information

This document sets out the minimum processes the ClearlyDefined community follows to curate each class of data.

# License information
There are five possible license property values on a definition element:

1. A valid SPDX license expression.
2. The string `NOASSERTION`. This indicates that license-like data is found, but that ClearlyDefined cannot identify an SPDX-identified license.
3. The string `NONE`. This indicates that a human confirmed that there is no license information in the file.
4. The string `OTHER`. This indicates that a human confirmed that there is license information in the file but that the license is not an SPDX-identified license.
5. No value. This indicates that automated tooling did not find license-like data in the file.

## The Difference between "Source components" and "Package components"
The process below differs for components depending on whether they are "source" or "package" components. A "source" package is the component in the preferred form of editing or building, like a Git repository.  A "package" component is a component in its functional form that is intended to be used without further editing or building, like would be installed by a package manager.

For some package types such as Maven and Debian, both the “package” and “source” components are created simultaneously under their own respective ClearlyDefined definitions and linked together. 

Both may contain equally valuable information and should be reviewed and curated together. For Maven, the definition containing the source has the type “sourcearchive”, while Debian has “debsrc”.

## The Difference between Declared and Discovered licenses
The ClearlyDefined definition for a component has two types of license information: declared and discovered.

* The *declared license* for a component is what the component explicitly calls out, formally or through convention, as the overall license. This might be a `LICENSE` or `README` file at the root of a repo or the value of a `LICENSE` property in a package’s metadata such as packgage.json or pom.xml.
* The *discovered licenses* in a component’s definition are the other licenses found in the files of the component or sub-components of the overall project. For example, a source file or sub-directory might have a header comment indicating an SPDX license id, or a sub-directory might be under a different license.

In other words, the declared license is what normal developers would understand the component producers intended the overall project license to be. The discovered licenses represent what other licenses are found in the component.

## Source components
### Source component declared license
To evaluate the declared license info for a source component, use the following steps:

1. Determine the canonical names and locations for the declared licenses in the ecosystem at hand. These names and locations are listed in the source canonical locations section below. 
2. Look to see whether there is license information in the relevant canonical locations for that ecosystem.
3. If there is, evaluate that canonical license information against the current declared license definition in ClearlyDefined.

### Source component discovered licenses
To evaluate the discovered licenses for a source component, use the following steps:

1. Identify all files in the repository labeled as `NOASSERTION` or with an SPDX expression containing `AND` or `OR`.
2. Review each such file to determine whether there is an SPDX-identified license. There are three cases:
    1. If there are SPDX-identified license(s) in the file, use the SPDX license expression to capture those licenses.
    2. If there is no license in the file, code `NONE`.
    3. If there is a license but that license does not have an SPDX identifier, code as `OTHER`.

## Package components
Although a package component can have a different license than the underlying source used to create that package, most license obligations from the source flow through to the package. Thus, package definitions data must incorporate the definition data from the source.

### Package components declared license
To evaluate the declared license info for a package component, use the following steps:

1. Determine the canonical names and locations for the declared licenses in the ecosystem at hand. These names and locations for common ecosystems are listed in **Appendix A**.
2. Look to see whether there is license information in the relevant canonical locations for that ecosystem.
3. If there is, evaluate that canonical license information against the current declared license definition in ClearlyDefined.

### Package components discovered license
To evaluate the discovered licenses for a package component, use the following steps:

1. Identify all files in the repository labeled as `NOASSERTION` or with an SPDX expression containing `AND` or `OR`.
2. Review each such file to determine whether there is an SPDX-identified license. There are three cases:
    1. If there is/are SPDX-identified license(s) in the file, use the SPDX license expression to capture those licenses.
    2. If there is no license in the file, code `NONE`.
    3. If there is a license, but that license does not have an SPDX identifier, code `OTHER`.
3. Follow the above steps for the source component definition that corresponds to the package component definition.  If you see `</>` next to the magnifying glass symbol, you can pull it up automatically. 

### Canonical locations for the declared license for source definitions 
When curating the declared license for a source code repository, look in the canonical locations listed below.  
1.	**Source repository.**  Look to see if a license file (e.g. LICENSE, COPYING) is included in the specific commit or version you are curating.  Sometimes the license is found on the README.  There may be more than one declared license.  If there is not any license information at the specific commit or version level, check the master branch.
2.	**File Headers.**  If there is not a declared license anywhere in the repository, look to see if there is any license information in the source code file header comments.  Look at multiple files to determine if they are under different licenses.  You can also try using a search function to find any mention of ‘license,’ for example.

### Canonical locations for the declared license for package definitions
When curating the declared license for a package, look in all the canonical locations listed below (1-3).  **Appendix A** has canonical locations for common package ecosystems.  

If the canonical locations do not match (e.g., the license file states Apache-2.0 and the metadata states MIT), contact the author/publisher.  If you do not receive a response after 7 days, prioritize curating the declared license in the order listed below.
1.	**Package files.**  Look to see if a license file (e.g. LICENSE, COPYING) is included in the package file contents. Sometimes there is license information on a README.
2.  **Package metadata.**  Look to see if the target component metadata includes any license info, such as a license identifier or license file URL. 
3.	**Source repository.**  Follow the canonical locations for source definitions, above.  Also look for package manifest files (e.g. package.json, setup.py). 

## Troubleshooting
We always prefer a reference to a version control system, but if you’re unable to find that, other public references are okay.
1. Target component metadata gives a URL that points to a volatile location (e.g. a webpage or the master branch of a git repository).
    * Look for evidence of the license at the time the target component was published.
1. Target component metadata points to a license file URL in source repository, but the link is broken.
    * Ignore the link specifics and look for license information in other canonical locations in that source repository.
1. Target component has no project/source location and does not have any license information. There exists a related version (newer or older) that does have license information.
    * Use the related component’s license data, favoring for newer version if possible to discern
1. Target component has no project/source location and does not have any license information, but does declare a license in the copyright field (e.g., `<Copyright MIT>`)
    * Use the declared license in the copyright field
1. Target component is using multiple licenses.
    * Use an SPDX expression to indicate multiple licenses, using AND, OR, or WITH (see https://spdx.org/licenses/).
1. Curate the declared license as `NONE` when the component verifiably and intentionally has no license.
1. Curate the declared license as `OTHER` when the license is a proprietary license, such as an End-User-License-Agreement. 
1. Curate the declared license as 'OTHER' when there is a reference saying the target component is in the public domain.
3. Target component includes a license file and a separate PATENTS file that grants additional patent rights.  Curate the declared field with the license and add "AND `OTHER`". 
4. Target component license information is limited to a non-SPDX license identifier that may not be version specific:
    * If the only license information is “BSD,” code the license as “BSD-3-Clause.”  Note - https://opensource.org/licenses/bsd-license.php is not a license version specific link. 
    * For L/GPL licensed packages, look in the ReadMe, package manifest, and source code files to determine if it is “GPL-#-only” or “GPL-#-or-later.” (Do not use the deprecated SPDX license identifiers – e.g. GPL-2.0+).
    * If the only license information is “GPL,” with no COPYING license file, code the license as “GPL-1.0-or-later.” Note - http://www.gnu.org/licenses/gpl.txt is not a license version specific link.
    * If the only license information is “LGPL” with no COPYING license file, code the license as “LGPL-2.0-or later.”
 1. Target component’s license file states it is a “fork of,” “implementation of,” or “is derived from” another project, and the original project is under a different license from the target component.  In this case, the license of the original project is a “discovered” license.  If the original project license is not already included as a “discovered” license, look for an appropriate file in the “Files” section of ClearlyDefined to add the license information.  For example, a NuGet package points to a license that states the project is MIT and is a fork of a project that is Apache-2.0 and the Apache-2.0 license is not showing up as a “discovered” license.  Here, you can curate the nuspec file as “MIT AND Apache-2.0.”  

# Attribution Information
* **Process**. The curator should look at each copyright statement. Copyright statements should be removed only when it is abundantly clear that the string is not a copyright statement and it was surfaced by the scanners in error.
* **Rationale**. Because copyright statements take a wide variety of forms, sometimes including typos or other inconsistencies, it is not the ClearlyDefined curator's role to guess the intent of the author or contributor to the package and so the Copyright statement should remain unmodified.

# Source Location Information
[TODO]

# Facets
[TODO]

# Appendix A - Package ecosystems
When evaluating license information, always look in the version specific canonical location that corresponds to the version of the target component package. 

## Maven

|  | Canonical Location |  
| --- | --- |
| **Package files**| Look in the -sources.jar. |
| **Package metadata**|  Look on the .pom file.|
| **Source repository**| Look on the .pom file for a URL to the source repository.|

## NPM

|  | Canonical Location |  
| --- | --- |
|**Package files**|  Look in the "Files" section on the ClearlyDefined definition.| 
|**Package metadata**|  Look on the package.json in the "Files" section on the ClearlyDefined definition.  Alternatively, you can look on http://registry.npmjs.com/ (use this format: `http://registry.npmjs.com/[package name]/[version number]`).  Note:  the license information on npmjs.com displays the most current package license for all versions.  Unless you are evaluating the license for the most current package, you will want to use a version specific canonical location. |
|**Source repository**|  The “Source” field on the ClearlyDefined definition may link to a GitHub commit.  Alternatively, you can look on the registry or the package.json file for a URL to the source repository.  The package on https://www.npmjs.com may also provide a link to the repository.|

## NuGet

|  | Canonical Location |  
| --- | --- |
|**Package files**|  Look in the "Files" section on the ClearlyDefined definition.|
|**Package metadata**|  Look on https://www.nuget.org/.|  
|**Source repository**| The “Source” field on the ClearlyDefined definition may link to a GitHub commit.  The package on https://www.nuget.org may also provide a link to the source repository.|

## PyPi

|  | Canonical Location |  
| --- | --- |
|**Package files**|  Look in the "Files" section on the ClearlyDefined definition. You can also click on “Download files” on https://pypi.org.|
|**Package metadata**|  Look on https://pypi.org.  Do not rely on the Statistics links.  You can also look at the setup.py file in the "Files" section on the ClearlyDefined definition.| 
|**Source repository**| The “Source” field on the ClearlyDefined definition may link to a GitHub commit.  You can also click on “Homepage” under “Project links" on https://pypi.org/.|
