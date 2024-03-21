# Being ClearlyDefined

Being ClearlyDefined is about clarity in different _domains_ of a component. For example, we talk about being ClearlyDescribed as meaning that the essential descriptive data about a component (e.g., source location) is available. Similarly, being ClearlyLicensed means that the key license-related data (e.g., license and attribution parties) are readily apparent. The set of domains coordinated by ClearlyDefined will evolve over time. The current set are detailed below.

ClearlyDefined seeks to identify the minimal possible set of factual information for each domain and find the simplest possible way to get and present that information.

## Described

For communities to engage with confidence, they need to know what they are getting into. For example, when using a version of a component, knowing the location of the source, where the project lives and where issues are managed help users understand the project more clearly and more quickly. Note that this is not intended to be a catch all bag of subjective information. Rather, we gather essential factual information about component itself.

The full set of properties that make a component ClearlyDescribed:

* sourceLocation -- Knowing the source location for a version of a component enables users to fix bug, scan for IP and security issues, and comply with source disclosure requirements. The location specification is similar to the coordinates of the component itself and is structured as follows:
  * type
  * provider
  * url
  * revision
  * path
* issueTracker - The URL to the system in which bugs and features are tracked for the described component. Knowing the issues tracker allows the community to engage more fully in the evolution of the component. This location may change after the component was released and the definition published. As such, the value of this property may be updated at any time.
* projectWebsite - The URL to the website where the community for the described component lives. Knowing the website enables users to find documentation, better understand the component, and to find and collaborate with the community. This location may change after the component was released and the definition published. As such, the value of this property may be updated at any time.
* releaseDate -- The ISO8601 date when the component was released. While more precision may be included, generally you should assume the release date to the day. Unless there are corrections, this value should not change.

### Facets

It turns out that many projects contain an assortment of code, only some of which is actually part of the component they ship. For example, tests and samples generally are not part of the release of a project. As such, consumers generally need not be concerned with the licenses of that content. For example, the packaged [TypeScript](https://github.com/microsoft/typescript) component includes about 200 files but the full source of the component has >36,000 files -- lots of tests.

To accommodate this level of detail and variation, ClearlyDefined's _described_ domain includes the notion of _facets_. A facet of a component is a subset of the files related to the component. It's really just a grouping that helps us understand the shape of the project. Each facet is described by a set of `glob` expressions -- essentially wildcard patterns that are matched against filenames.

While there are many different ways to slice up one's source, for simplicity and generality, ClearlyDefined identifies a fixed set of canonical facets as discussed below. The facet declarations are not meant to be hard and fast rules nor are they intended for anything other than the uses in ClearlyDefined -- differentiating files that go in the delivery/consumption forms of the component. In short, think of this as specifying what goes into the consumed outputs. You need not fill in each facet. Key element is that all files that go into the release are part of the relevant facet.

Each facet definition can have zero or more glob expressions. A file can be captured by more than one facet. Any file found but not captured by a defined facet is automatically assigned to the `core` facet.

* core - The files that go into making the release of the component. Note that the `core` facet is not explicitly defined. Rather, it is made up of whatever is not in any other facet. So, by default, all files are in the `core` facet unless otherwise specified.
* data - The files included in any data distribution of the component.
* dev - Files primarily used at development time (e.g., build utilities) and not distributed with the component
* docs - Documentation files. Docs may be included with the executable component or separately or not at all.
* examples -- Like docs, examples may be included in the main component release or separately.
* tests -- Test files may include code, data and other artifacts.

## Licensed

Being ClearlyLicensed is a main focus of ClearlyDefined. Many projects have a license. Not all are clearly identified or identified uniformly. Often times there are more licenses at play in the code than are stated in the project. Even when the license is known, the information required to comply with the license (e.g., source location and the parties to the attribution requirement) are not always clear.

This ambiguity results in component users who either end up not following the project requirements or who spend enormous effort trying to "get it right". ClearlyDefined addresses both scenarios by clarifying the licensing information around a component.

License information is broken down by facet (see above). So if you are consuming just the `core` of a component (the common case), then you need only be concerned with the licensing data in the `core` facet.

Each facet includes the following licensing-related information:

* declared - The SPDX license expression that was declared to cover the component in general. For example, the value of the `license` property in an NPM or the license declared in the `LICENSE` file of a Git repo.
* files - Total number of files related to the facet.
* discovered - License information found in facet files. In particular, the following properties:
  * expressions - The set of unique SPDX license expressions found across all files in the facet.
  * unknown - The number of files in the facet that have no discernable license information.
* attribution - Information related to how attribution should be done for the files in the facet. Typically this equates to a list of copyright holders but projects vary as to how they want attribution to be done.
  * parties - The set of unique entities that are to receive attribution (e.g., copyright holders)
  * unknown - The number of files in the facet that have no discernable attribution information.

## Secure

Component security is an important and evolving area. ClearlyDefined is helping project teams be explicit about their security approach and any vulnerabilities they may have found and fixed. This is meant to augment existing efforts such as the NIST database and security.org.

As the initial focus of ClearlyDefined is on licensing related information, the notion of being ClearlySecured is still being fleshed out. You can help shape the secure domain by defining scenarios to be supported (or not).
