---
layout: default
---

# Glossary

There are relatively few concepts and verbs in ClearlyDefined. Here is
a summary of the terms and their meanings:

### Adopter

An adopter of ClearlyDefined is a team or project that is explicitly
trying to be ClearlyDefined. ClearlyDefined attempts to meet teams
where they are. As such, we do not require specific formats or
locations for the interesting data. Rather, if projects signal how
they intend the data to be found, ClearlyDefined can harvest that data
and make it available. For example, simply having a LICENSE file, or
using `SPDX-License-Identifier:` file headers are clear signs to the
tools (and others) that the project is explicitly declaring that
information rather than having consumers intuit or interpret the
intent. Over time the community will develop a richer set of signals
and tools for detecting the signals.

### Aggregate

Aggregating is the act of combining the (typically summarized) outputs
of various tools. Aggregation typically follows a precedence order
with curation having the highest precedence. The order of tool
aggregation may evolve over time subject to community agreement.

### Component

A discrete chunk of open source project output that can be harvested,
curated or otherwise defined in ClearlyDefined. For example, an NPM
package, GitHub repo, or source archive. Components are more of an
input to the system than a element of the system. Users look at the
ClearlyDefined definition for a component or request that a component
be harvested. Components are identified by coordinates.

### Coordinates

Coordinates are used to identify various elements in
ClearlyDefined. For example, components to harvest, tool outputs,
source locations. The coordinates for an entity has at least five
parts: type, provider, namespace, name and revision.

* type -- the form of the entity being identified. For example, `git`,
  `npm`, `sourceArchive`. This is logically, though not actually,
  equivalent to a mime type.

* provider -- where entity can be found. Examples include `github`,
  `npmjs`, `mavenCentral`. The system supports a finite set of
  providers at any given time.

* namespace -- a qualifier that helps scope the name of the entity
  being identified. This typically comes from the context of the
  type. For example, for NPM packages, it is the `scope`, for Maven
  project it would be the `groupid`, and for GitHub, the `login`
  (often `org`) is used. If an entity does not have a reasonable
  namespace, a `-` (hyphen) must be used. That is, the namespace is
  logically optional but the property must be set.

* name -- the name of the entity. As with `namespace`, the name
  typically comes from the context of the type. So `artifactid` for
  Maven, repo `name` for GitHub, etc.

* revision -- the instance of the entity being identified. The exact
  form of the revision depends on the type and provider. In Git, a
  commit hash is used. In package managers, the typical package
  version is used. This value is largely uninterpreted by
  ClearlyDefined and simply either passed to the provider as needed or
  used as an opaque string in internal keys.

### Curation

A curation is a set of one or more updates or additions to the data in
a definition. For example, a curation may add the release date for a
revision of a component. This new information, the curation, would
then show up in the component's definition. There is at most one
curation for a given revision of a component at a given time. All
curations are managed as files in a GitHub repo and changes to these
files are managed through pull requests on the files. Ru

### Curate

Curate is the act of creating a curation. Anyone can submit a curation
much like anyone can submit a pull request on GitHub. In fact,
proposing a curation does create a pull request.

### Curator

A curator is akin to a committer or maintainer on a traditional open
source project -- they have an established history of quality
contribution, insight and knowledge in domain they are
curating. Curators are responsible for vetting contributed curations
from the community as well as creating their own. They also play a key
role in contributing merged curations to upstream projects.

### Definition

A definition is the final set of data related to a revision of a
component. It is the combination of the summarized, aggregated
harvested tool output and any curation for the revision. This is the
main form of consuming data from ClearlyDefined -- users browse or
otherwise access the definitions for their components of interest.

### Harvest

Harvesting is the act of running one or more tools on a revision of a
component. The resultant tool outputs are stored for future use in
summarization and the creation of definitions.

### Summary

A summary is the condensed and structure version of a harvest tool's
output. A summary contains only the data in which ClearlyDefined is
interested.

### Summarizer

As summarizer is a mechanism for creating the summary of a particular
(set of) tool output. Since ClearlyDefined is only interested in
particular information and tools output in many different formats, the
summarizer's role is to extract the relevant information and structure
it in the canonical internal format for further use in ClearlyDefined.

### Tool

A tool is an utility that can inspect a component and extract
information of interest to ClearlyDefined. Typical tools are ScanCode
and FOSSology. ClearlyDefined has a very minimal set of its own tools
and the set of tools in use will expand and contract over time.

### Tool output

The result of running a particular tool version on a particular
revision of a component is a uniquely addressable tool output. Tool
outputs are durable and immutable. Further, it is expected that
running the same tool version on the same component revision will
yield the same tool output.

### Tool version

The version of a tool includes both the version of the code as well as
any applicable configuration. The tool version MUST be in
[https://semver.org](semver format). Textual representations of the
configuration can be captured in the `-<info>` portion of the version
specification.
