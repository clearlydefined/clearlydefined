---
layout: default
---

# License discovery scenario guidelines

We always prefer a reference to a version control system, but if you’re unable to find that, other public references are okay.

1. Target component has a LICENSE or similar file embedded in a canonical location in the component (e.g., root, meta-inf folder, …) 
    * Use the license resulting from analyzing the content of the file. If the result cannot be interpreted as an SPDX-listed license identifier, treat it as `NONE`. 

2. Target component metadata has an explicit license entry indicating an SPDX (or similar) identifier 
    * Canonicalize the identifier with an SPDX-listed license identifier and use. If the value cannot be canonicalized, treat as `NONE`. 

3. Target component metadata has license info indicating a license file URL in source repository, but the link is broken or points to a volatile location. 
    * Ignore the link specifics but use source repository URL as a candidate for source location in subsequent steps. 

4. Target component metadata has license info indicating a URL for a repository in source. 
    * Look for version in source repository corresponding to target component version and use license information available there (e.g., LICENSE file, package metadata) if any. 
    * Corresponding version can be found by looking at Git tags matching component version or by looking at commit history comments for “version bump” comments. 

5. Target component has no project/source location and does not have any license information. There exists a related version (newer or older) that does have license information. 
    * Use the related component’s license data, favoring for newer version if possible to discern 

6. Target component has no project/source location and does not have any license information, but does declare a license in the copyright field (e.g., <Copyright MIT>) 
    * Use the declared license in the copyright file

7. Target component is using multiple licenses, use an SPDX expression to indicate multiple licenses
