---
layout: default
---

# ClearlyDefined, defined.

## Mission

Help FOSS projects be more successful through clearly defined project
data.

## Principles

* Neutral – The project carries no affiliation or company driven focus
* Open – The data, infrastructure, and processes are open to all
* Factual – All data is factual. No interpretation or assessment is made
* Upstream – Enable upstream projects as much as possible
* Simple – Wherever possible the project will use the simple solution

## Scope

ClearlyDefined will pursue any data that makes FOSS projects easier to
consume and thus more successful. Initially this work will focus on
licensing data that form the core of understanding and meeting the
legal obligations related to using FOSS. This includes:

* License (declared and observed)
* Copyright holders
* Source location (including revision/commit)

### Why?

The FOSS licensing and security information landscape is vast and
varied. Projects without clear metadata are harder to adopt and so get
fewer contributions and lower engagement -- they enjoy less
success. On the consumer side, enormous effort is required to
discover, comply with licensing obligations, and track security
issues. Even simple things like the location of the source for a
component can be painful to find.

These ambiguities mean that FOSS cannot be consumed with
confidence. This affects the success of FOSS projects. We want to
break this vicious cycle.

### What?

Crowdsourcing the curation of licensing, security, accessibility data
for FOSS projects. First clear licensing data. Later, clear security,
accessibility data.

### How?

Harvesting data embedded in projects, curating the data in an open and
collaborative process, contributing clearly defined project data back
to the FOSS projects, and making the data freely and easily
accessible. A virtuous cycle.

### Future efforts will focus on further topics such as:

* Security – facilitating the reporting and tracking of
  vulnerabilities in projects
* Accessibility – Characteristics and analysis of a project’s support
  of accessibility related technology and concerns
* Project data – Governance model, principals, issue tracking,
  discussion forums, ...

The ordering of this work and effort applied will depend entirely on
the community and their interests.

# ClearlyDefined, governed.

## Processes

The continuing goal of ClearlyDefined is to help originating projects
craft and maintain clarity around their in-scope data as a native part
of their operation. Where that is not possible, the project will
maintain the relevant data. This is viewed as a fork of the upstream
project and, like code forks, should be minimized. Either way, the
project serves as a one-stop-shop for the in-scope data making life
easy for consumers.

The project undertakes four main operations in support of the stated
goals and scope. Those processes are listed here in rough execution
order:

### Harvest

Harvesting is the act getting data from upstream projects. This may be
as simple as reading prescribed data from canonical locations to
full-on analysis of the source code using a variety of open tools. The
discovered data is stored in its entirety in its native form in
ClearlyDefined infrastructure and made available to the community on
demand. The harvesting tools themselves are always fully open and
accessible to the community for vetting and inspection. The project is
open to including new tools subject to a vote, as described below.

Harvesting may be run by the ClearlyDefined project itself or by
designated parties, typically curators. In all cases, only output from
agreed to tools and configurations will be admitted to the
system. Harvesting operators are free to focus on a given domain of
projects that best suit their expertise and interests.

### Curate

The curation process is fundamentally open and transparent. Curators
(aka project committers or maintainers) work on harvested data, data
contributed by the ClearlyDefined community, and with the origin
project artifacts and community to validate presented information. All
deliberations, discoveries and discussions are recorded and made
available for community inspection.

Initially this workflow will happen in one or more GitHub repositories
using standard Pull Request workflows on human-readable and diff-able
curation artifacts. The project may develop additional tools to
supplement or supplant this flow but will always ensure full
transparency.

As with committers on typical FOSS projects, curators are
free/expected to focus on particular domains that fit their interests
and expertise.

At least initially, all curated data must be signed off by two
curators. This is more in the interest of working through thought and
mechanical processes and developing a common understanding of the data
and determining what is admissible. This requirement may be removed
through a vote, as described below.

### Contribute

Having curated data about a project, ClearlyDefined community members
will seek to contribute the data upstream in a form most attractive to
the receiving project. Given the anticipated scale of this effort,
some automation will be used but with a sensitivity to spamming
projects with pull requests. These contributions will include
information supporting the inclusion and ongoing maintenance of the
curated data.

Projects accepting the curated contribution will be deemed
ClearlyDefined (see Badging below) and will no longer need
curation. Validations will continue but by opting into this program,
the projects are endeavoring to effectively self-curate the data.

### Serve

Regardless of whether projects are self-curating or externally curated
by ClearlyDefined, as a service to the consuming community, the
ClearlyDefined project serves up the harvested and curated data both
through programmatic (e.g., REST) APIs and through browsable web
properties. The raw harvested data as well as the summarized and
curated is made available through both access methods.

## Roles

### Curator

A data curator is akin to a project maintainer or committer in typical
open source projects. Curators have write permissions to the curation
repo(s) and are ultimately responsible for admitting data to the
curated store. A curator is more librarian and data scientist than
lawyer or developer. The role requires enough domain context to enable
issue identification and resolution. The role also requires technical
expertise in running the various tools used to detect and analyze
components. Each curator must be, and be seen to be, vendor neutral
and unbiased. This helps them in their other key role – working with
upstream projects to incorporate the curated data into the original
project.

As with committers and maintainers, curators are nominated and
approved by the project community based on their merits and prior
contributions. The role of curator relates to an individual, not an
organization or a position in an organization. Under no circumstances
is a Curator held responsible for any errors or other flaws in the
data merged into the service.

### Data Contributor

A ClearlyDefined data contributor is like a
contributor on any other open source project -- they identify bugs or
improvements, fork the repo and contribute a pull request with their
changes. For data contributors this could be a small change (e.g.,
spelling correction), a substantive change (e.g., identifying the
license for a component), or wholesale data definition (e.g.,
providing data for a previously unknown component). Contributors
should, as with any other project, expect to substantiate the changes
with background information and proof of correctness.

A serial contributor of quality data is a candidate to become a
curator.

### Consumer

A ClearlyDefined data consumer accesses the curated or harvested
data. They understand that the data is provided as-is with no
guarantees or warranties as to the correctness of the data or is
suitability for any particular purpose. All data is fully qualified as
to its origin and any clarifications made and it is up to the consumer
to use the data, or not.

### Code Committer/Maintainer

While ClearlyDefined is focused on data, the project will develop a
modest amount of code. Code committership is independent of data
committership. As such, code committers are elected by a vote of the
existing code committer community as described below. Code committers
have complete control over and responsibility for the operation of the
harvesting, curation and serving infrastructure of the project.

### Removal from role

In the unlikely event that a committer or curator becomes disruptive
or falls inactive for an extended period of time, they may be removed
from the role though a unanimous vote of the remaining set of
committers or curators.

## Voting

Most decisions within the project can be done through informal
consensus and recorded in the appropriate public record. When a formal
decision is required, for example, when electing committers/curators,
a vote is held using the following process:

* A topic for voting is tabled by a curator by notifying all other
  curators.
* Once tabled, curators may vote during an open voting period lasting
  no less than one working week. Voting will occur on an agreed to,
  mutually convenient, and open medium (e.g., email, GitHub issue,
  etc.)
* A minimum of two positive (+1) votes and no negative (-1) votes
  carries the topic. Note that negative votes must be substantiated.
* Abstention (0) votes do not affect the outcome.

## Recognition and promotion

The project may, from time to time, run programs that recognize and
reward the efforts of a project to become and remain
ClearlyDefined. For example, a badging program would enable eligible
projects to show they are ClearlyDefined, thus increasing consumer
confidence. Such recognitions may be made relative to a specific
domain such as licensing or security, or in relation to the overall
ClearlyDefined effort.
