# Contributing code

First, thanks for your interest in the code for ClearlyDefined. While much of the project's focus is on getting,
curating and upstreaming data about open source components, that all takes some non-trivial code and infrastructure.
You can get a sense of the system from the [architecture guide](code/architecture). It has a high-level discussion
of the major pieces and how they fit together. The various repos may also have more specific information
about the particulars of their code.

## Major ClearlyDefined Repositories

* [website](https://github.com/clearlydefined/website)
* [service](https://github.com/clearlydefined/service)
* [crawler](https://github.com/clearlydefined/crawler)
* [curated-data](https://github.com/clearlydefined/curated-data)

# Quick and easy complete local configuration

You can setup individual parts of the system to run locally. Each repo's README has instructions on how to
get setup with just that repo's functionality. 

To get the entire system setup locally, check out the [Dockerized ClearlyDefined environment setup](https://github.com/clearlydefined/docker_dev_env_experiment).

After following these steps, you should see the ClearlyDefined website in your browser at `http://localhost:3000`
and be able to browse the data, see curations, etc. If you login (top right corner), more functionality will light up.

# Forking/Branching

If you are looking to contribute code/docs, thanks! All contributions should come in as pull requests. We do not have a
CLA (Contributor License Agreement) nor do we do DCOs (Developer Certificate of Origin) rather we rely on the
[GitHub Terms of Service Contributions section](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license)
which boils down to outbound license === inbound license.

From an operational point of view, most people do not have write permissions to the ClearlyDefined Git repos and so should
simply fork in their favored location and do a PR when ready. For folks who do have write permissions, you can fork as
well or you can create a branch directly in the respective ClearlyDefined repo and do a PR from there. The branch naming
convention we use is <some user distinguisher>/<branch name>. So, for example, the user `jeffmcaffer` might use
`jm/fixSomeStuff` or `jeffmcaffer/someFix`.

# Coding style

We try to use a consistent style across all elements of ClearlyDefined. Of course there are some variations
because part of the system is in Node while another is React but for the most part the same principles apply.

- Consistency -- A consistently formatted, named, structured, ... codebase is easier to work with. Look around at
  the other code and see how it is structured and formatted.
- Minimal -- Simplicity and minimalism in the algorithms, data structures and the code itself makes for simpler systems.
- Factored -- Small, single purpose functions and classes are easier to test and understand.
- Automatic -- Automated formatting and testing are real enablers. We use `prettier` throughout.

## Naming

Always a topic in code and ClearlyDefined is no different. Here we follow these conventions:

- Semantic -- Names, especially variable and property names, should have semantic value. Type-based names are frowned
  upon. For example `set(newValue)` is better than `set(number)`. Functions should have clear semantic names that are
  durable across data/implementation refactorings. For example, `readDefinition` is better than `readBlob` in most
  cases.
- camelCase -- camelCasing is used for properties, variables, functions, ... Classes use PascalCase
- Text -- Names should be full words with all the vowels and consonant. `request` over `req`. Similarly, single
  letter variable names should be avoided except in certain very well known cases like loop indexes (e.g., `i`).
- _Private -- Functions that are private to a class should be prefixed with an `_` (underscore). Note that this
  convention is not well-practiced at the moment.
- Negative names -- Avoid negative names like `disbleCache`. Err, `disbleCache = true` means the cache is enabled?
  Now try `if (!disableCache) ...`. Instead, use `enableCache` defaulted to false (if that's what you want).

## Formatting

As a general rule all code should be formatted using `prettier` and the settings in the `.prettierrc` file in
the repo. Pleaes don't override them with local settings somehow. Here is a brief summary of the main points:

- Spaces not tabs. 'nuff said.
- Minimal vertical white space. If you find you need to add blank lines to separate parts of a function,
  your code is likely doing too much. Refactor into more, simpler, functions.
- No `;` (semi-colons). Yeah, it's a thing.
- Single quotes `'` over double `"` unless convention strongly indicates otherwise (e.g., JSON, JSX)
- Omit unnecessary `{}`, `()` and `return`s . For example, `foo.map(entry => entry.name)` over `foo.map((entry) => { return entry.name })`

## Coding

- Exit early. Avoid deeply nested if/else structures. Test for the simple/error cases and exit the function
  as early as possible. Much easier to understand.
- Use the language but don't go nuts. JavaScript has a number of cool features that enable simple, elegant
  expressions. Spread operators and destructuring are particularly hip. Going over-board make for code that
  is hard to understand. Fortunately, if your code is factored as described above, you tend to have smaller,
  well-named functions and can use more of the language more clearly.

# Contribution opportunities

The system as a whole is approaching "beta" stage. Much of the essential function and structure is implemented
but there are still many gaps and evolving areas -- lots of room for jumping in and making a difference. Don't let
technology be a barrier. Several contributors with little to no Node or React experience have made very real
contributions. For example, the website needs designers and people who can think deeply about the curation User
Experience and workflow. No code at all! Of course, if you are a React expert, there are challenges for you too.

The ongoing work is tracked in a set of [GitHub Project on the ClearlyDefined org](https://github.com/orgs/clearlydefined/projects). Typically there will be a project for the current monthly milestone. In
addition, each repo has a set of GitHub issues and typically several with _Help wanted_ or _Good first issue_ labels.
Also look in the repos for a higher level view of the problem areas and a roadmap for where that repo's
function is going.

And of course, you can always ask on [Discord](https://discord.gg/wEzHJku) or [the mailing list](mailto:clearlydefined@googlegroups.com).
