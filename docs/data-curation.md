---
layout: default
---

# Curation and upstreaming

## Summary
Curation of the data in ClearlyDefined is an integral part of the process and mission of the project. It is a value-add for end-users and will build an open source community in a space where people were previously working independently and without sharing results.

The first part of ClearlyDefined’s process is the automated harvesting and scanning of components for what data is available to find mechanically. Then, in places where the data is in some way ambiguous or missing, curation of that data by humans is meant to improve that data. Curations are then meant to be upstreamed back to projects in order to have future versions have better data and thus be more clearly defined.

The curation process is meant to be transparent in the same way ClearlyDefined as a project is. Curators will be members of the community from many different organizations and positions of expertise. Below you will find the principles and processes the community plans to adhere to in order to make the collaboration amongst these people as simple and friction-free as possible. 

## Charter
Contained in ClearlyDefined’s Charter is information about how the project intends to handle curators, an integral part of the community:

_“The curation process is fundamentally open and transparent. Curators (aka project committers or maintainers) work on harvested data, data contributed by the ClearlyDefined community, and with the origin project artifacts and community to validate presented information. All deliberations, discoveries, and discussions are recorded and made available for community inspection._

_Initially this workflow will happen in one or more GitHub repositories using standard Pull Request workflows on human-readable and diff-able curation artifacts. The project may develop additional tools to supplement or supplant this flow but will always ensure full transparency._

_As with committers on typical FOSS projects, curators are free/expected to focus on particular domains that fit their interests and expertise._

_At least initially, all curated data must be signed off by two curators. This is more in the interest of working through thought and mechanical processes and developing a common understanding of the data and determining what is admissible. This requirement may be removed through a vote, as described below._

_A data curator is akin to a project maintainer or committer in typical open source projects. Curators have write permissions to the curation repo(s) and are ultimately responsible for admitting data to the curated store. A curator is more librarian and data scientist than lawyer or developer. The role requires enough domain context to enable issue identification and resolution. The role also requires technical expertise in running the various tools used to detect and analyze components. Each curator must be, and be seen to be, vendor neutral and unbiased. This helps them in their other key role – working with upstream projects to incorporate the curated data into the original project._

_As with committers and maintainers, curators are nominated and approved by the project community based on their merits and prior contributions. The role of curator relates to an individual, not an organization or a position in an organization. Under no circumstances is a curator held responsible for any errors or other flaws in the data merged into the service.”_ 

## Principles
From the above Charter text and ClearlyDefined’s mission itself, we derive the following principles the curation community will adhere to:

**Open and transparent.** Users of the data in ClearlyDefined rely on it being completely transparent in its providence as well as replicable by anyone. This gives consumers of the data confidence in it. In order to maintain this confidence beyond the machine harvested and scanned data and into the curation process, all curations must be transparent and have clear providence as well. Users who are surprised or suspicious about a curation must be able to see the person who suggested the curation and any associated discussion about that curation quickly and easily. Curations can never have unclear providence as it hinders the review process and ultimately will lead to poor quality data. 

**Neutral.** Along with the entire process being open and transparent, curations must also be completely vendor- and perspective-neutral. Even if the proposed curation’s basis is transparent, if it puts a distinct perspective or lens on the project that is not clearly the project’s intention, the curation is likely not mergeable. The decision about whether a curation is non-vendor-neutral is up to the curators reviewing it. 

**Curations that can’t be referenced or documented aren’t mergeable.** Curators need to provide the factual basis on which they are submitting their proposed curation. As mentioned above in being open and transparent, curations need to be as close to replicable as possible. Curators must reference docs, git commits, mailing list discussions, etc that are publicly viewable to all in order to support their position for proposed curations. Opaque reasoning for curations is antithetical to ClearlyDefined’s mission and goals.

**Curators must review, discuss, and come to agreement together and in the open.** Curators are not meant to merge their own pull requests. All proposed curations must be reviewed by some other person in the community and merged by someone else other than the proposer.

**Curators build reputation to become project maintainers with merge permissions.** As per the Charter, curators must be nominated and approved by the project community based on their merits and prior contributions. Curators will spend time submitting curations and in discussions on other curations in order to build their profile in the community. Curators who have merge permissions can nominate and choose to approve those people to also get merge permissions once their reputation is established.

**Curations that can’t be agreed on can’t be merged.** In some cases, a project’s data may be ambiguous and a curator may propose a curation that leads to discussion where two or more curators cannot come to agreement. In these cases, this proposed curation can stay open as long as is necessary to come to agreement or to close the PR without merging because agreement is not possible. There is no required timeframe that a PR can or can’t stay open. 

## Process
The curation process itself is meant to enforce and the curation principles above. Curations are also possible to do in a variety of ways with the same result, so this process is meant to translate to all potential workflows:

1. Harvested data is viewed by the curator. This can be done from a number of interfaces including clearlydefined.io or any UI that calls the API. 
2. Curators identify a component that needs some or all of its data corrected. This identification can come from a low score, the curator’s own expertise or experience, or from automated mechanisms that surface components that may need curation. 
3. Curators submit the data correction along with a justification for the correction. In order to get the correct data, the curator research the topic, find the the correct data, and provide link(s) to that research in support of their change. 
4. A PR is created for the proposed curation. This is always a GitHub PR at clearlydefined/curated-data. Typically, though not necessarily, this is done through clearlydefined.io.
5. Review and/or discussion happens. Other curator(s) will review and potentially discuss the proposed curation. The supporting research from the curator’s proposed curation will be used by the reviewers to consider its validity. All review and discussion is captured in the related GitHub PR.
6. If the curators come to agreement, the proposed curation is merged. If the curators can’t come to agreement, the PR can stay open but can’t be merged. Proposed curations open for 60 days with no activity will be closed. Curations that are merged overlay the existing harvest data in ClearlyDefined and produces that new data to its users immediately after merge. 
7. Merged curations are upstreamed to the appropriate project(s) in a way that is respectful to the community’s way of working. ClearlyDefined’s ultimate goal is to help the FOSS community as a whole be more clearly defined. Submitting curations back upstream for future versions furthers this goal. 

## Guidelines
For more information about curation, please check out our [curation guidelines](https://docs.clearlydefined.io/curation-guidelines).

If you have been curating data in private and want to start doing that in the open with the ClearlyDefined
community, we want to talk to you. Get in touch on [Discord](https://discord.gg/wEzHJku) or
[the mailing list](mailto:clearlydefined@googlegroups.com).

