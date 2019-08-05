# Using the ClearlyDefined data

All of the ClearlyDefined data is available for everyone to see and use. You can browse and inspect in a [convenient web ui](#website) or hook up a client to the [REST API](https://api.clearlydefined.io/api-docs/) and integrate it into your systems.

# Website

## Browse Definitions

ClearlyDefined is all about making project data easily discoverable and available to people. On the **Definitions** tab you will see a search box. Click in there and start typing the name of a project. This will auto-suggest definitions that exist in ClearlyDefined. Pick one of the presented options and the related definition is added to the **Definitions** list. Note that if you are after a definition for a component not shown in the list, ClearlyDefined does not know about it yet.

In the **Definition** list you see a high level summary of the related component -- its license, possible relationship to source in GitHub, a ClearlyDefined score, and more. If you click on an entry in the list, the entry expands to show more detail. The exact content here will change over time as the community learns more about what's most relevant. Typically this additional detail includes release date of the selected revision, details of licenses discovered in the files of the component, as well as a list of attribution parties, and more. Check out the [ClearlyDefined Glossary](glossary) for more info on the various terms you see in the panel.

On the right side of any definition entry (expanded or collapsed) you will see a set of buttons that modify the list itself (adding related definitions or removing the current definition) or take you to alternative views of a definition. Typically hovering over a button will give you an idea of what it does. Go ahead and click around. You won't break anything.

## Inspecting - Definitions Expanded View

Key to understanding a definition is understanding how it was put together. That's what's happening when you click on the **Dig into this entry** button, after searching for a few definition on the [**Definitions**](https://clearlydefined.io/definitions) tab. 

The **Described** pane provides information about the definition source (e.g. github URL), Release date, Tools and **Facets**.

The second pane, **Licensed** provides information about the **Declared** licenses as well as the automatically **Discovered** ones. Additionally, **Attribution** and **Files** details are available (Total files, Unlicensed files, and Unattributed ones).

The **Files** tab, allows to browse through the files that are part of definition, see which **Facet** each file belongs to, its **Licenses** and **Copyrights** Information. 

Having selected a definition details about where the definition's content came from is shown. The bottom most pane, **Raw Data** on the tab shows the raw YAML form of the definition. The **Curation** pane shows you the text of any human additions or modifications that went into the final form of the definition. The **Harvested** pane shows the raw text dump of all tool output related to the definition.


This is pretty overwhelming with lots and lots of detail. Over time, and with your help, we will discover effective ways presenting this data so you have enough of the right information at your finger tips to understand the definitions and be confident in their content.

## A note on definition coordinates

As you will have noticed, the same component name (e.g, jquery) shows up multiple times in the suggestion lists. Sometimes in entries that look like GitHub things, sometimes Maven or NPM or ... This in fact reflects reality -- the same project is often packaged or made available in multiple forms. Given the differences between these packaging forms names and even versioning often do not align. For example, the thing you know and commonly refer to as `jquery` is actually called `jquery` on NPM but `jquery/jquery` on GitHub. The version you know as `3.3.1` on NPM is `32b00373b3f42e5cdcb709df53f3b08b7184a944` on GitHub. It's even worse in that various package types can come from different providers. For example, you can install NPMs from GitHub!

This is what we call, _the identity problem_. ClearlyDefined is NOT attempting to solve the identity problem. Instead, we give each unique thing (i.e., component) unique coordinates and then allow for the creation for _links_ between coordinates.

Typical coordinates that you will encounter are a five part path-like structure as follows:

```
npm/npmjs/-/jquery/3.3.1
```

Or, more generally:

```
type/provider/namespace/name/revision
```

Where the segments have following values:

* type -- the type of the component you are looking for. For exammple, npm, git, nuget, maven, ... This talks about the _shape_ of the component.
* provider -- where the component can be found. Examples include npmjs, mavencentral, github, nuget, ...
* namespace -- many component systems have namespaces. GitHub orgs, NPM namespace, Maven group id, ... This segment must be supplied. If your component does not have a namespace, use '-' (ASCII hyphen).
* name -- the name of the component you want. Given the `namespace` segment mentioned above, this is just the simple name.
* revision -- components typically have some differentiator like a version or commit id. Use that here. If this segment is omitted, the latest revision is used (if that makes sense for the provider).
* pr -- literally the string `pr`. This is a marker segment and must be included if you are looking for the
  results of applying a particular curation PR to the harvested and curated data for a component
* number -- the GitHub PR number to apply to the existing harvested and curated data.

### Examples

* https://clearlydefined.io/definitions/npm/npmjs/-/react/2.20.1
* https://clearlydefined.io/definitions/npm/npmjs/@someNamespace/coolpackage/1.13/pr/37
* https://clearlydefined.io/definitions/git/github/clearlydefined/service/0.1.0

# Data API

The ClearlyDefined service manages both raw, harvested data and curated data, as well as the merge of these. These data can be expressed in relation to source code (e.g., a GitHub repo) or a package (e.g., an NPM, RPM, Maven project, ...). One of the key goals of ClearlyDefined is to correlate the _binary_ package with the original source.

> A quick note on _binary_. Throughout the ClearlyDefined ecosystem we talk about _binary_ as being the packaged, executable form of a component. An NPM for example is a binary despite the fact it may contain human-readable text that looks a lot like JavaScript source code. In general, the original source for these packages may have been in a very different language (e.g., TypeScript) or the package content may have been minimized, compresses, concatenated, or otherwise swizzled. For the purposes of license detection and ultimately compliance, as well as security scanning etc, consumers need to know the location of the actual developer-authored source code.

As a result of this separation, the same component may show up in the data in several forms -- the NPM and its source are both treated separately. These components may also have different _revision_ identifiers (e.g., NPM version and Git commit hash). There are links between the different types and as the ecosystem progresses, this web of components will get richer and enable transitive operations, for example, given a vulnerability in a GitHub repo you will be able to find all the packaged versions and forms that included the vulnerable code.

You can see the swagger API doc at https://api.clearlydefined.io/api-docs/

## Curation

New curations, or changes to existing curations, are done via PATCHes. Ultimately these surface as PRs in the configured curation repo. They can be manipulated directy there but using this API keeps things regular. Below is an example curation.

```json
{
  "described": {
    "sourceLocation": {
      "type": "git",
      "provider": "github",
      "url": "https://github.com/microsoft/redie",
      "revision": "194269b5b7010ad6f8dc4ef608c88128615031ca"
    }
  },
  "licensed": {
    "license": {
      "expression": "MIT"
    }
  }
}
```

Here the curation updates information in two data _neighborhoods_, `described` and `licensed`. (You will hear us talk about projects being ClearlyDescribed or ClearlyLicensed). These new values will be merged with the existing curation (as part of the PR merge) and laid over whatever data has been harvested when users access the data.

To progammatically submit a curation, wrap the curation from above in an object with a `description` and then send it to the service as a PATCH to, for example, http://localhost:4000/curations/npm/npmjs/-/redie/0.3.0

```json
{
  "description": "Supply the source location and correct the license to MIT",
  "patch": {
    body of the curation here
  }
}
```

You can also get the curation for a particular component revision using one of the following requests. Both return the full curation for the given component. The first (without the `pr` segment), gets the current curation that is in effect -- the content of the `master` branch. The second gets the curation proposed in the given pull request.

```
GET http://localhost:4000/curations/npm/npmjs/-/redie/0.3.0
GET http://localhost:4000/curations/npm/npmjs/-/redie/0.3.0/pr/23
```

## Data access

Once some data has been harvested and/or curated, you can acces the constituent parts or get the net result of merging the data together.

### Definitions

Most of the time you will want to see the end result of the harvesting with the curations mixed in. A GET to the `definitions` URL returns the summarized and curated view of the data about the identified component. For example,

```
GET http://localhost:4000/definitions/npm/npmjs/-/redie/0.3.0
```

In this case, we are accessing version 0.3.0 of the NPM called redie. Given the above curation, the result would look something like the snippet below. Notice that the `projectWebsite` and `issueTracker` information was not in the curation. That data was harvested through some automated tools.

```json
{
  "described": {
    "sourceLocation": {
      "type": "git",
      "provider": "github",
      "url": "https://github.com/microsoft/redie",
      "revision": "194269b5b7010ad6f8dc4ef608c88128615031ca"
    },
    "projectWebsite": "https://github.com/microsoft/redie",
    "issueTracker": "https://github.com/microsoft/redie/issues"
  },
  "licensed": {
    "license": {
      "expression": "MIT"
    }
  }
}
```

You can also get the result that would be given **if** a proposed curation PR were merged. Issue the same GET but add `/pr/<pr number>` on the end. For example, the following gets the result if PR #23 were merged.

```
GET http://localhost:4000/definitions/npm/npmjs/-/redie/0.3.0/pr/23
```

If you want to get multiple definitions in a single call, you can `POST` an array of coordinates (with up to 1000 coordinates) to `/definitions`:

```json
POST http://localhost:4000/definitions

["npm/npmjs/-/redie/0.1.0", "npm/npmjs/-/redie/0.2.0", "npm/npmjs/-/redie/0.3.0"]
```

The response will be an object with a key for each coordinate:

```json
{
  "npm/npmjs/-/redie/0.1.0": { ... },
  "npm/npmjs/-/redie/0.2.0": { ... },
  "npm/npmjs/-/redie/0.3.0": { ... }
}
```

### Raw outputs
