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
2. The string `NOSASSERTION`. This indicates that license-like data is found, but that ClearlyDefined cannot identify a SPDX-identified license.
3. The string `NONE`. This indicates that a human confirmed that there is no license information in the file.
4. The string `OTHER`. This indicates that a human confirmed that there is license information in the file but that the license is not an SPDX-identified license.)
5. No value. This indicates that automated tooling did not find license-like data in the file.

## The Difference between "Source components" and "Package components"
The process below differes for components depending on whether they are "source" or "package" components. A "source" package is the component in the preferred form of editing or building, like a Git repository.  A "package" component is a component in its functional form that is intended to be used without further editing or building, like would be installed by a package manager.

## The Difference between Declared and Discovered licenses
The ClearlyDefined definition for a component has two types of license information: declared and discovered.

* The *declared license* for a component is what the component explicitly calls out, formally or through convention, as the overall license. This might be a `LICENSE` or `README` file at the root of a repo or the value of a `LICENSE` property in a package’s metadata such as packgage.json or pom.xml.

* The *discovered licenses* in a component’s definition are the other licenses found in the files of the component. For example, a source file or sub-directory might have a header comment indicating an SPDX license id.

In other words, the declared license is what normal developers would understand the component producers intended the license to be. The discovered licenses represent what licenses are found in the component’s source files.

## Source components
### Source component declared license
To evaluate the declared license info for a source component, use the following steps:

1. Determine the canonical names and locations for the declared licenses in the ecosystem at hand.
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

1. Determine the canonical names and locations for the declared licenses in the ecosystem at hand.
2. Look to see whether there is license information in the relevant canonical locations for that ecosystem.
3. If there is, evaluate that canonical license information against the current declared license definition in ClearlyDefined.

### Package components discovered license
To evaluate the discovered licenses for a package component, use the following steps:

1. Identify all files in the repository labeled as `NOASSERTION` or with an SPDX expression containing `AND` or `OR`.
2. Review each such file to determine whether there is an SPDX-identified license. There are three cases:
    1. If there is/are SPDX-identified license(s) in the file, use the SPDX license expression to capture those licenses.
    2. If there is no license in the file, code `NONE`.
    3. If there is a license, but that license does not have an SPDX identifier, code `OTHER`.
3. If the definition indicates a source location, curate the license information found on source component’s definition. Because of the flow through of license obligations from source to a binary package, the information from the source location’s core facet should be encoded as a “discovered license” in the package.

## Troubleshooting: sources of truth for the declared license
We always prefer a reference to a version control system, but if you’re unable to find that, other public references are okay.
1. Target component metadata has license info indicating a license URL, but the  link points to a volatile location.
    * Apply license found at the volatile location at the time checked.
1. Target component metadata has license info indicating a license file URL in source repository, but the link is broken.
    * Ignore the link specifics but use source repository URL as a candidate for source location in subsequent steps.
1. Target component metadata has license info indicating a URL for a repository in source.
    * Look for version in source repository corresponding to target component version and use license information available there (e.g., LICENSE file, package metadata) if any.
    * Corresponding version can be found by looking at Git tags matching component version or by looking at commit history comments for “version bump” comments.
1. Target component has no project/source location and does not have any license information. There exists a related version (newer or older) that does have license information.
    * Use the related component’s license data, favoring for newer version if possible to discern
1. Target component has no project/source location and does not have any license information, but does declare a license in the copyright field (e.g., <Copyright MIT>)
    * Use the declared license in the copyright file
1. Target component is using multiple licenses, use an SPDX expression to indicate multiple licenses
1. Curate the declared license as `NONE` when the component verifiably and intentionally has no license.

# Attribution Information
* **Process**. The curator should look at each copyright statement. Copyright statements should be removed only when it is abundantly clear that the string is not a copyright statement and it was surfaced by the scanners in error.
* **Rationale**. Because copyright statements take a wide variety of forms, sometimes including typos or other inconsistencies, it is not the ClearlyDefined curator's role to guess the intent of the author or contributor to the package and so the Copyright statement should remain unmodified.

# Source Location Information
[TODO]

# Facets
[TODO]
