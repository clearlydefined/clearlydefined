# Technical Governance

This document covers the lower level technical governance of the ClearlyDefined project.

## Scope

Higher level governance is defined in this project's [Charter](https://docs.clearlydefined.io/docs/community/charter). That document defines these:

- [Steering Committee](https://docs.clearlydefined.io/docs/community/charter#steering-committee)
- [Code Committer and Maintainer](https://docs.clearlydefined.io/docs/community/charter#code-committermaintainer)

Additionally, it defines the responsibilities and election, promotion, and removal procedures. This document does not cover those aspects, and is about governance below those roles.

The Charter also defines the Data Consumer, Contributor, and Curator role. Those pertain to the results and output of the project. This document covers the aspects of the project outside the data. For example generating, storing, and serving data, but not the data contents.

## Participation

Firstly all are welcome to participate in the Clearly Defined project on but not limited to:

- GitHub Issues and Pull Requests
- Community and Developer Zoom calls
- Discord server

Provided that you adhere to our [Code of Conduct](https://docs.clearlydefined.io/docs/community/coc). Participation is not limited to those roles below

## Contributor

Anyone who contributes to the project, not just through code but through anything constructive, such as but not limited to:

- Discussion
- Review
- Documentation
- Triage
- Code
- Operations

will be considered a "Contributor"
Feel free to send a PR to the [CONTRIBUTORS.md](CONTRIBUTORS.md) list.
Being a contributor does not expire
There are no special privileges with being a contributor. However your input will be considered more significant when Maintainers ask the community for input on decisions.

## Ad-hoc Permissions and Roles

Any contributor may be granted permissions and roles as beneficial to the project. Such as, but not limited to:

- Issue triage
- Write access
  - Really "review/approve" access due to branch protection
  - Can be repo by repo
- Operations / Infrastructure
  - Azure logs/appinisghts, blob read

The main requirement is that the contributor wishes to help in that area that requires permissions. Ex: triage issues, do code reviews, monitor service health, etc.
- Requests can be done by creating an issue on this repo
- 51% Maintainer approval is required to approve
- Permission can be removed by Maintainers if no longer being used.
- People may propose others. For example, if a contributor has been contributing good code and providing good insights, they may be asked to do reviews.

The only "role" that cannot be granted ad-hoc is production deployer. That is reserved for maintainers. 

## Maintainer

In addition to the definition in the Charter, Maintainers are expected to drive the project forward, participate in the community, actively help new contributors and contributions. They should proactively see "what is needed," such as reviewing and merging prs, addressing discussion or asks for help, driving releases, etc.

The list of maintainers is kept in [MAINTAINERS.md](MAINTAINERS.md)