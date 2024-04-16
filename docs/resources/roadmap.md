---
layout: default
sidebar_position: 6
title: Roadmap
---

# Roadmap 2024

This is the roadmap for 2024:

## Community

- Grow the Community
  - Reach out to organizations known to have an interest in ClearlyDefined:
    - Companies: Microsoft, SAP, Bloomberg, GitHub, Stacklok, JetBrains, Codethink
    - Organizations: OpenChain, ORT, OpenSSF, Eclipse Foundation, Guac, Software Heritage, TODO Group
    - From ORT: Bosch, Deloitte, Porsche, Mercedes, Volkswagen, Elektrobit Automotive, CARIAD, EPAM, Here Technologies, LG Electronics
  - Create interest group to talk about governance
    - Charter [proposal](https://blog.opensource.org/what-is-open-governance-drafting-a-charter-for-an-open-source-project/)
  - Create interest group to explore organization level concerns
- Grow the number of Active Developers
  - See Community of Developers below
- In collaboration of governance members with developers, establish a roadmap
  - Thomas Steenbergen to lead here
- Bring back a unified vision for ClearlyDefined where the community is heard and can participate in. Thomas has the leadership, technical skills and industry connections to make the project successful.

## Development

- Ongoing Maintenance
  - update dependencies
  - move deploy to GH actions
  - grooming issues
- Refactoring
  - improve handling of NOASSERTION/OTHER that are bugs
- New Work
  - allow LicenseRef from ScanCode (addresses a lot of NOASSERTION/OTHER) - requires community buy-in
  - make it easier for other organizations to set up crawlers (aka harvesters)

## Complete the Transfer

- Move crawler from Microsoft in Azure to ClearlyDefined Azure
- Ensure that a group of devs have permissions required for DevOpts
- Move deploys to GitHub actions

## Permission Management

- Determine the primary set of maintainers and make sure they are admins on all repos.
- Determine the set of devs that will have super-admin permissions in Azure
- Determine the set of devs that have access to key vault
- What user will connect Azure to GitHub?
- What user will connect GitHub to Azure?
- Other places with permissions?

## Community of Developers

- Develop a plan for attracting and retaining developers
- Consider moving to Slack (poll developers about their preference)
- Dedicated email list about development
- Use interest groups to discuss topics of interest
- Create a wiki that gathers development information in one place (GitHub’s ClearlyDefined.io repo)
- Create recipes for common tasks to make it easier for all devs to help with DevOpts (e.g. how to release, how to deploy, etc.)
- Use working groups to evaluate proposed changes, make recommendations, and/or implement working group recommendations (Implementation may or may not be done by those who did the evaluation and recommendations)

## Governance

- There is an immediate need to understand the financing. This impacts work like moving the crawler to ClearlyDefined Azure.
  - What processes cost how much per month?
  - Estimate of credits required to run for a year.
  - Determine approach for feedback to developers on costly processes.
- Working group focused on reaching out to other organizations known to have an interest.

## Development Wishlist

This is the complete list of community requests and Roadmap items. If additional developers become available, we will be able to work on items on this list in addition to the work already targeted on the Roadmap.

## Ongoing Maintenance

- Critical updates to keep tools that identify licenses at the latest revision (GitHub, SAP)
- Address outdated dependencies (GitHub, SAP, Microsoft)
- Automated integration tests (SAP)
- Bug fixes (SAP, GitHub, Microsoft)
- Documentation (SAP, GitHub, OSI, Microsoft)

## Working on Now

- Add support for latest scancode & licensee (GitHub, SAP)
- Addition of Conda as a source (CodeThink, SAP)
- Move deploy to GitHub actions (GitHub)
- Use semantic versioning for releases (GitHub)
- Add GitHub action to regularly update licenses from SPDX (GitHub)
- Bug fixes leading to resolution of some licenses classified as NOASSERTION (SAP)
- Move production crawler to ClearlyDefined Azure space

## Wishlist

- License Data Quality
  - pass through ScanCode LicenseRef
  - reduce the number of licenses identified as NOASSERTION/OTHER
  - improve the human curation process for licenses
  - trust score for license human curations where score increases with the number of institutions that have reviewed the data
  - report of complex licenses to identify licenses for human review
- Attributions Data Quality
  - improve the human curation process for attributions
  - report of attributions not following the expected pattern to identify attributions for human review
  - trust score for attribution human curations where score increases with the number of institutions that have reviewed the data
- Improve Throughput
  - improve concurrency in code
  - set up an additional crawler in CD Azure space
  - support other entities setting up crawlers on their hardware
  - update queue processing to support a secondary queue set that a crawler draws from when their primary queue is empty
- Higher Rate Limits for API requests
  - Explore why requests are denied before current rate limits are met
- UI Usability Improvements
  - bug fixes
  - design review (esp. functional workflows for curations, searching for definitions)
  - UI update to new design
- Better Monitoring
  - alerts when crawler requests fail at a rate > 10 per hour
  - alerts when crawler queue size > 1 million
  - alerts when harvest queue processes < 3 requests in an hour
  - analyze crawler failures to look for a pattern
- Improve license coverage by adding sources
  - Dart’s pub
  - GitHub Actions
  - Support for purl (in search)
  - _others?_

# Objectives 2024

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
