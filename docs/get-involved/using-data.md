---
layout: default
sidebar_position: 3
title: Use the data
---

# Using the ClearlyDefined data

All of the ClearlyDefined data is available for everyone to see and use. You can browse and inspect in a [convenient web ui](https://clearlydefined.io) or hook up a client to the [REST API](https://api.clearlydefined.io/api-docs/) and integrate it into your systems.

## REST API Usage Considerations

ClearlyDefined enforces specific rate limits on REST API calls to ensure stability and integrity of the platform.

You can check the _x-ratelimit-limit_ and _x-ratelimit-remaining_ response headers to track your usage and reset window.

If the rate limit is reached, an _HTTP 429_ response code will be returned. The rate limit is based on the window below.

### Production Instance Rate Limits

Host: [api.clearlydefined.io](https://api.clearlydefined.io/)
\([Docs](https://api.clearlydefined.io/api-docs/)\)

| Endpoint     | Method | Limit/Window |
| ------------ | ------ | ------------ |
| /definitions | POST   | 250 /min     |
| /curations   | POST   | 250 /min     |
| /notices     | POST   | 250 /min     |

All other endpoints are max 2K requests per minute.

### Development Instance Rate Limits

Host: [dev-api.clearlydefined.io](https://dev-api.clearlydefined.io/)
\([Docs](https://dev-api.clearlydefined.io/api-docs/)\)

| Endpoint     | Method | Limit/Window |
| ------------ | ------ | ------------ |
| /definitions | POST   | 250 /min     |
| /curations   | POST   | 250 /min     |
| /notices     | POST   | 250 /min     |

All other endpoints are max 500 requests per every 5 minutes.

## ClearlyDefined Coordinates

In order to use ClearlyDefined's data (whether through the REST API or the Web UI), it's critical to understand how to find a component in the data. ClearlyDefined uses a system of **coordinates** to navigate to data about particular components.

### Basics

Typical coordinates that you will encounter are a five part path-like structure as follows:

```
npm/npmjs/@fluentui/react-text/9.0.0-alpha.13
```

Or, more generally:

```
type/provider/namespace/name/revision
```

Where the segments have following values:

- type -- the type of the component you are looking for. For example, npm, git, nuget, maven, ... This talks about the _shape_ of the component.
- provider -- where the component can be found. Examples include npmjs, mavencentral, github, nuget, ...
- namespace -- many component systems have namespaces. GitHub orgs, NPM namespace, Maven group id, ... This segment must be supplied. If your component does not have a namespace, use '-' (ASCII hyphen).
- name -- the name of the component you want. Given the `namespace` segment mentioned above, this is just the simple name.
- revision -- components typically have some differentiator like a version or commit id. Use that here. If this segment is omitted, the latest revision is used (if that makes sense for the provider).

In the case of:

```
npm/npmjs/@fluentui/react-text/9.0.0-alpha.13
```

- npm is the **type** of component
- npmjs is the **provider** - where the component can be found
- @fluentui is the **namespace** of the component
- react-text is the **name** of the component
- 9.0.0-alpha.13 is the **revision** of the component

A noted above, not all components have namespaces. For example, [the npm component lodash](https://www.npmjs.com/package/lodash) does not have a namespace. In this case, the coordinates would be:

```
npm/npmjs/-/lodash/4.17.21
```

You could see the definition in the Web UI by navigating to:

https://clearlydefined.io/definitions/npm/npmjs/-/lodash/4.17.21

Or, you could access it through the REST API like this:

```
curl -X GET "https://api.clearlydefined.io/definitions/npm/npmjs/-/lodash/4.17.21" -H "accept: */*"
```

### Special Notes

**Git components**

For git components, commit hashes, rather than version numbers, are used for revisions.

For example, these coordinates:

```
git/github/react-component/tree/7b90c11c4aa3458010cbc2031ff48ac4803030e4
```

Map to this [commit](https://github.com/react-component/tree/tree/7b90c11c4aa3458010cbc2031ff48ac4803030e4).

**Go components**

For Go components with slashes in the namespace, those slashes need to be url encoded as %2f.

For example, a Go component with this import path:

```
golang.org/fx/crypto v0.0.0-20210921155107-089bfa567519
```

would map to those coordinates:

```
go/golang/golang.org%2fx/crypto/v0.0.0-20210921155107-089bfa567519
```

The last word in the import path is considered the name of the component.

Another example:

```
github.com/satori/go.uuid v1.2.1-0.20181028125025-b2ce2384e17b
```

would map to these coordinates

```
github.com%2fsatori/go.uuid/v1.2.1-0.20181028125025-b2ce2384e17b
```

Alternately, if you are using a component that has more than five slashes in it's namespace, you can use an alternative version of the API to retrieve a definition for a coordinate. Below is a detailed example.

For a go component with an import url of `github.com/quasilyte/regex/syntax v0.0.0-20200419152657-af9db7f4a3ab`, the coordinates would look like this:

```
type: go
provider: golang
namespace: github.com/quasilyte/regex (we will need to do url [percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding) to this, see below)
name: syntax
revision: v0.0.0-20200419152657-af9db7f4a3ab
```

We need to encode the slashes in the namespace as '%2F'. You could do that by calling `namespace.replaceAll('/', '%2F')` in JavaScript or a similar function in other languages. You could also manually add the encoding to the namespace. For this example, the namespace `github.com/quasilyte/regex` would become `github.com%2Fquasilyte%2Fregex`. Note that using a function like `encodeURIComponent`
may cause issues with namespaces like `@std`.

After encoding the namespace, our coordinates would now look like this:

```
type: go
provider: golang
namespace: github.com%2Fquasilyte%2Fregex
name: syntax
revision: v0.0.0-20200419152657-af9db7f4a3ab
```

Put together, our coordinates now look like this: `go/golang/github.com%2Fquasilyte%2fregex/syntax/v0.0.0-20200419152657-af9db7f4a3ab`

Because we pass the coordinates as a query parameter, we need to encode the whole coordinate string. You could do that by calling encodeURIComponent(namespace) in JavaScript or a similar function in other languages. You could also manually add the encoding to the coordinates. After the encoding, `go/golang/github.com%2Fquasilyte%2fregex/syntax/v0.0.0-20200419152657-af9db7f4a3ab` would become `go%2Fgolang%2Fgithub.com%252Fquasilyte%252Fregex%2Fsyntax%2Fv0.0.0-20200407221936-30656e2c4a95`

To use the API, `Accept-Version: 1.0.0` must be added to the headers. Note:
`Accept-Version` is currently accepted for `GET` requests but not `POST` requests.

Here is a curl command you could use with the example coordinates.

```
curl --request GET 'https://api.clearlydefined.io/definitions?coordinates=go%2Fgolang%2Fgithub.com%252Fquasilyte%252Fregex%2Fsyntax%2Fv0.0.0-20200407221936-30656e2c4a95' \
--header 'Accept-Version: 1.0.0' \
--header 'Content-Type: application/json'
```

### Advanced

As you get more comfortable with using ClearlyDefined's data, you might use these additional coordinate fields as well:

- pr -- literally the string `pr`. This is a marker segment and must be included if you are looking for the
  results of applying a particular curation PR to the harvested and curated data for a component
- number -- the GitHub PR number to apply to the existing harvested and curated data.

For example, if you wanted to see what the definition would look like with [this PR to the curated data merged](https://github.com/clearlydefined/curated-data/pull/12248), you would use these coordinates:

```
npm/npmjs/@microsoft/microsoft-graph-types/1.9.0/pr/12248
```

You could see the definition (with the PR applied) in the Web UI by navigating to:

https://clearlydefined.io/definitions/npm/npmjs/@microsoft/microsoft-graph-types/1.9.0/pr/12248

And this API call:

```
curl -X GET "https://api.clearlydefined.io/definitions/npm/npmjs/@microsoft/microsoft-graph-types/1.9.0/pr/12248"
```

## Data API

The ClearlyDefined service manages both raw, harvested data and curated data, as well as the merge of these. These data can be expressed in relation to source code (e.g., a GitHub repo) or a package (e.g., an NPM, RPM, Maven project, ...). One of the key goals of ClearlyDefined is to correlate the _binary_ package with the original source.

> A quick note on _binary_. Throughout the ClearlyDefined ecosystem we talk about _binary_ as being the packaged, executable form of a component. An NPM for example is a binary despite the fact it may contain human-readable text that looks a lot like JavaScript source code. In general, the original source for these packages may have been in a very different language (e.g., TypeScript) or the package content may have been minimized, compresses, concatenated, or otherwise swizzled. For the purposes of license detection and ultimately compliance, as well as security scanning etc, consumers need to know the location of the actual developer-authored source code.

As a result of this separation, the same component may show up in the data in several forms -- the NPM and its source are both treated separately. These components may also have different _revision_ identifiers (e.g., NPM version and Git commit hash). There are links between the different types and as the ecosystem progresses, this web of components will get richer and enable transitive operations, for example, given a vulnerability in a GitHub repo you will be able to find all the packaged versions and forms that included the vulnerable code.

### Definitions

One of the most useful API calls is to retrieve a definition for a revision of a component.

**Getting the definition for a component**

To get the definition of a component at the coordinates

```
npm/npmjs/@fluentui/react-text/9.0.0-alpha.13
```

You would run:

```
curl -X GET "https://api.clearlydefined.io/definitions/npm/npmjs/%40fluentui/react-text/9.0.0-alpha.13" -H "accept: */*"
```

**Getting coordinates for all definitions that match a given pattern**

If you want to find all coordinates for components that match a given pattern (in this case, "lodash"), you would run:

```
curl -X GET "https://api.clearlydefined.io/definitions?pattern=lodash" -H "accept: */*"
```

### Harvests

You may also wish to queue up a harvest of a component if you don't see it in ClearlyDefined. To harvest a component at these coordinates:

```
npm/npmjs/-/redie/0.3.0
```

You would run:

```
curl -X POST "https://api.clearlydefined.io/harvest" -H "accept: */*" -H "Content-Type: application/json" -d "[{\"tool\":\"package\",\"coordinates\":\"npm/npmjs/-/redie/0.3.0\"}]"
```

### Additional Docs

You can see the additional API docs at https://api.clearlydefined.io/api-docs/

## Website

### Browse Definitions

ClearlyDefined is all about making project data easily discoverable and available to people. On the **Definitions** tab you will see a search box. Click in there and start typing the name of a project. This will auto-suggest definitions that exist in ClearlyDefined. Pick one of the presented options and the related definition is added to the **Definitions** list. Note that if you are after a definition for a component not shown in the list, ClearlyDefined does not know about it yet.

In the **Definition** list you see a high level summary of the related component -- its license, possible relationship to source in GitHub, a ClearlyDefined score, and more. If you click on an entry in the list, the entry expands to show more detail. The exact content here will change over time as the community learns more about what's most relevant. Typically this additional detail includes release date of the selected revision, details of licenses discovered in the files of the component, as well as a list of attribution parties, and more. Check out the [ClearlyDefined Glossary](/docs/resources/glossary) for more info on the various terms you see in the panel.

On the right side of any definition entry (expanded or collapsed) you will see a set of buttons that modify the list itself (adding related definitions or removing the current definition) or take you to alternative views of a definition. Typically hovering over a button will give you an idea of what it does. Go ahead and click around. You won't break anything.

### Inspecting - Definitions Expanded View

Key to understanding a definition is understanding how it was put together. That's what's happening when you click on the **Dig into this entry** button, after searching for a few definition on the [**Definitions**](https://clearlydefined.io/definitions) tab.

The **Described** pane provides information about the definition source (e.g. github URL), Release date, Tools and **Facets**.

The second pane, **Licensed** provides information about the **Declared** licenses as well as the automatically **Discovered** ones. Additionally, **Attribution** and **Files** details are available (Total files, Unlicensed files, and Unattributed ones).

The **Files** tab, allows to browse through the files that are part of definition, see which **Facet** each file belongs to, its **Licenses** and **Copyrights** Information.

Having selected a definition details about where the definition's content came from is shown. The bottom most pane, **Raw Data** on the tab shows the raw YAML form of the definition. The **Curation** pane shows you the text of any human additions or modifications that went into the final form of the definition. The **Harvested** pane shows the raw text dump of all tool output related to the definition.

This is pretty overwhelming with lots and lots of detail. Over time, and with your help, we will discover effective ways presenting this data so you have enough of the right information at your finger tips to understand the definitions and be confident in their content.

### A note on definition coordinates

As you will have noticed, the same component name (e.g, jquery) shows up multiple times in the suggestion lists. Sometimes in entries that look like GitHub things, sometimes Maven or NPM or ... This in fact reflects reality -- the same project is often packaged or made available in multiple forms. Given the differences between these packaging forms names and even versioning often do not align. For example, the thing you know and commonly refer to as `jquery` is actually called `jquery` on NPM but `jquery/jquery` on GitHub. The version you know as `3.3.1` on NPM is `32b00373b3f42e5cdcb709df53f3b08b7184a944` on GitHub. It's even worse in that various package types can come from different providers. For example, you can install NPMs from GitHub!

This is what we call, _the identity problem_. ClearlyDefined is NOT attempting to solve the identity problem. Instead, we give each unique thing (i.e., component) unique coordinates and then allow for the creation for _links_ between coordinates.

## Curation

New curations, or changes to existing curations, are done via PATCHes. Ultimately these surface as PRs in the configured curation repo. They can be manipulated directly there but using this API keeps things regular. A set of curations is described together with its general intent, and understood as a `contribution`. Below is an example contribution.

```json
{
  "contributionInfo": {
    "summary": "[Test] Update declared license",
    "details": "The declared license should be Apache as per the LICENSE file.",
    "resolution": "Updated declared license to Apache-2.0.",
    "type": "incorrect",
    "removeDefinitions": false
  },
  "patches": [
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
  ]
}
```

Here the curation updates information in two data _neighborhoods_, `described` and `licensed`. (You will hear us talk about projects being ClearlyDescribed or ClearlyLicensed). These new values will be merged with the existing curation (as part of the PR merge) and laid over whatever data has been harvested when users access the data.

You can also get the curation for a particular component revision using one of the following requests. Both return the full curation for the given component. The first (without the `pr` segment), gets the current curation that is in effect -- the content of the `master` branch. The second gets the curation proposed in the given pull request.

```
GET http://api.clearlydefined.io/curations/npm/npmjs/-/redie/0.3.0
GET http://api.clearlydefined.io/curations/npm/npmjs/-/redie/0.3.0/pr/23
```
