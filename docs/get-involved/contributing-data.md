---
layout: default
sidebar_position: 5
title: Contribute data
---

# Contributing data

Curation is the act of human vetting, updating and/or supplying of information.
The first step in this is people, you, contributing data that fills in where projects were
missing data or tools could not find the desired data. Anyone can contribute a curation -- it's
just like contributing a bug fix or feature to any other open source project. In fact, it really
is just a pull request on the [curation repo](https://github.com/clearlydefined/curated-data).

Contributing data is something that anyone can do. Let's say you are working with some
component and you need to find the source to fix a bug in your version. You check ClearlyDefined
and the component is listed but there is no source location. You poke around and finally find
the project repository. Looking through there you find the right Git commit and voila,
you have the source for your version.

Now that you've gone and found the info, you can contribute that data so the next person doesn't
have to do what you did. And even better, there's a good chance that the need for that contribution
will filter upstream and the source for future versions of your component will be easier to find.

Contributing data is done on [**Curation** page of the website](https://clearlydefined.io/curate).
You can get there by clicking the **Curate this entry** button on an entry on the
[**Browse**](https://clearlydefined.io/definitions) page. Or you can head over there and type in
the name of your component.

Either way you should pick the one that best matches your
interests. For example, if you are using `jquery` there's a good chance that there is an npm, maven
package and several forms. Pick the one from the source that most closely matches your interests.

Having selected the one that you want, update the definition in the bottom right editor to match
you new info. For example, if you found the source location, create a `sourceLocation` property
in the `described` section and fill in the data.

Once you have finished you data entry, click **Contribute curation**. That asks you for
some descriptive info on your suggestions and then opens a pull request in
[curation repo on GitHub](https://github.com/clearlydefined/curated-data). Curators will take a
look at your suggestion, validate your approach and then merge the changes into the curation repo.
Depending on the nature of the change and the component, your change will also be proposed to the
upstream component so future versions of the component will be easier to understand.

### That was a bit hard

Yeah, the curation and contribution workflows are pretty rudimentary right now. This is an active
area of development. In particular, the experience for contributing data related to components
that are not already in the system is completely missing. YAML editing is fun and all but
we can do better given the narrowness of this problem space.

These are high on the list workareas for the web app. You can help shape that either with code
or design/workflow ideas. See the [code contributors guide](contributing-code).
