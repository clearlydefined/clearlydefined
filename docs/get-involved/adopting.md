---
layout: default
sidebar_position: 8
title: Adopt practices
---

# Adopt practices

Being ClearlyDefined can be more of an intent than an action. Many projects already make
the necessary data (e.g., license, source location, attribution parties) available in easy
to find places. Awesome! As long as the harvesting tools can find the info and you are
consistent about keeping it up-to-date, all is good.

For some however, there may be a few steps. One of the core philosophies of ClearlyDefined
is "meet them where they are". That is, we are not looking to drive a particular behavior
or format on your normal development process or repo structure. Rather we are aware of a
host of conventions and we only need hints from you as to which approach you are taking.

### Source location as a case-study

One key thing to note is that ClearlyDefined is about project releases, components. That is
after all what people consume. Knowing the source location of the version of the component you
are using is critical if you want to do targeted fixes, understand attributions, do deep code
analysis such as security reviews, or even simply to fulfill the source disclosure obligations
of copy-left licenses.

So whatever your release process, we are after two pieces of info: the repo location/type, and
the exact revision that matches each released version. If you are using a structured packaging
system like npm, this is pretty simple. There is a `repository` property in the package metadata
and by convention the indicated Git repo will have a `tag` that matches the package version.
Voila! No work. We just needed to know the convention and you just needed to follow it.

Our tools will do this kind of snooping automatically across a range of the data and formats
supported.

### Explicit data

In the npm case the convention at play is inferred. In other cases, approaches are ambiguous.
For example, not everyone maintains their license information (e.g., the license itself or
the list of attributable parties) in the same place or in the same way. Some projects want
everyone in the gitlog attributed. For others it is all the copyright holders. For others it
is the project itself. Dropping us a hint as to what approach you want clears up any ambiguity
and makes it easy for the relevant data to be gathered.

You can leave that hint in a very simple `clearly.yaml` file in your release and/or in your
repo. The details of this file are still being worked out. We actually aren't interested in
foisting another file/format on the world so if your community already has a convention for
where to store _metadata_, we just need to learn about that and then can look there for the
hints.

Keep in mind that these hints are _metadata_ -- it would indicate how to find the license or
attributable parties rather than give that information directly. That makes it an order of
magnitude simpler and easier to manage. The information can go almost anywhere.

### Help define this space

This is an evolving space and you can really help define how it works with the least possible
impact on project teams.
