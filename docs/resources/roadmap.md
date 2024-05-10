---
layout: default
sidebar_position: 6
title: Roadmap
---

# Roadmap 2024

There are three major pillars for ClearlyDefined technical work.

![Three Pillars of the Technical Roadmap](/img/technical-roadmap-3-pillars.png)

## Data Quality

### License Data Quality

- reduce missing licenses
  - pass through ScanCode LicenseRef
  - reduce the number of licenses identified as NOASSERTION/OTHER
- accurate license data
  - improve the human curation process for licenses
  - report of complex licenses to identify licenses for human review
- improve license coverage by adding support for more package managers with potential candidates...
  - Dart’s pub
  - GitHub Actions
  - Support for purl (in search)
  - identify additional package managers

### Attributions Data Quality

- accurate attribution data
  - improve the human curation process for attributions
  - report of attributions not following the expected pattern to identify attributions for human review

### UI Usability Improvements

- redesign UI (e.g. functional workflows for curations, searching for definitions)
- implement proposed UI design
- bug fixes

_NOTE: Curations through the UI lead directly to data quality improvements._

## Performance

### Improve Crawler Throughput

- determine the cause of current poor performance
- explore improvements to concurrency in code
- determine level of horizontal scaling needed to support demand on the queue
- support other entities setting up crawlers on their hardware
- update queue processing to support a secondary queue set that a crawler draws from when their primary queue is empty
- add better monitoring, examples...
  - alerts when crawler requests fail at a rate > 10 per hour
  - alerts when crawler queue size > 1 million
  - alerts when harvest queue processes < 3 requests in an hour
  - count of requests processed per hour
  - count of requests failing per hour
  - count of requests that timeout

### Improve API Performance

- support higher rate limits for API requests
- explore why requests are denied before current rate limits are met

## Sustainability

### Code Sustainability

- keep license detection tools on the latest version
- regular dependency updates

### DevOps & Infrastructure

- make it easier to deploy at a more frequent cadence
  - move deploys to GitHub Actions
  - document release and deploy process
  - expand integration tests
  - document manual checks to perform after a deploy
- evaluate current hardware to determine if upgrades are needed

### Documentation

- modernize current documentation by moving to Docusaurus

### Collaborators

- identify potential collaborators
- establish good issue management
  - add issues for roadmap items
  - triage older issues, closing as appropriate
  - add `Good First Issue` label to appropriate issues

## Requested and Considering

- trust score for license human curations where score increases with the number of institutions that have reviewed the data

# Community Objectives

These are the main objectives for 2024:

1. Bring back a unified vision for ClearlyDefined where the community is heard and can participate in.

- Key result 1: Double number of players in the community by end of the year
  - 2023: Microsoft, SAP, Bloomberg
  - 2024: +GitHub, Stacklok, JetBrains, Codethink, Kusari ?
- Key result 2: Double community contributions on GitHub by end of the year

2. Incentivize organizations like GitHub to create their own local harvest, including SAP and Bloomberg. The focus will be on the documentation of the process, which is quite complex.

- Key result 1: Achieve 3 local harvests by end of year
  - 2023: Microsoft
  - 2024: +GitHub, SAP, Bloomberg, Stacklok, Kusari ?
- Key result 2: Expand documentation, and increase contributions by 50%
  - 2023: Microsoft
  - 2024: +GitHub, SAP, Stacklok, Kusari ?

3. Work closely together with various other organizations, including the ORT, TODO Group, OSPO++, OSPO Alliance, OpenChain, SPDX, GUAC, Eclipse Foundation, and Software Heritage, to promote ClearlyDefined. Work closely together with OpenSSF.

- Key result 1: Triple the number of organizations we are involved with
  - 2023: OpenChain, ORT
  - 2024: +OpenSSF, Eclipse Foundation, GUAC, Software Heritage, TODO Group
- Key result 2: Increase activities (webinars, events, blog posts) with various organizations by 100%
