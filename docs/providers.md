# ClearlyDefined providers

ClearlyDefined implements support for many providers that host open source packages.
The current supported list is based on popularity, but more providers are always on the way as the landscape of open source shifts and evolves.
Every provider has their own implementation and quirks, but ClearlyDefined cuts through this to aggregate and summarize all kinds of open source into a useful, homogenous schema.

The following table details all of the currently supported providers and how ClearlyDefined interprets and handles their differences.

| Provider      | URL                              | Namespace        | Name         | API Case handling | Namespace casing        | Name casing             |
| :------------ | :------------------------------- | ---------------- | ------------ | ----------------- | ----------------------- | ----------------------- |
| GitHub        | https://github.com/              | Repo Owner       | Repo Name    | Case insensitive  | Lowercased              | Lowercased              |
| Maven Central | http://central.maven.org/maven2/ | GroupId          | ArtifactId   | Case sensitive    | Preserved from provider | Preserved from provider |
| NpmJS         | https://www.npmjs.com/           | Scope (optional) | Package Name | Case sensitive    | Preserved from provider | Preserved from provider |
| NuGet         | https://www.nuget.org/           | N/A              | ID           | Lowercase only    | N/A                     | Preserved from provider |
| PyPI          | https://pypi.org/                | N/A              | Name         | Case insensitive  | N/A                     | Preserved from provider |
| RubyGems      | https://rubygems.org/            | N/A              | Name         | Case sensitive    | N/A                     | Preserved from provider |
| CrateIO       | https://crates.io/               | N/A              | Name         | Case insensitive  | N/A                     | Preserved from provider |

## GitHub

The information available about a component's owner and name is not versioned, and GitHub only surfaces the current state of the component when the request is made.
To avoid changing names of old components when new versions change case, ClearlyDefined normalizes all GitHub provided coordinates to lowercase the namespace and the name.

## Maven Central

At this time, all packages on Maven Central have lowercased namespace and name.
The API used to query the packages is case sensitive and ClearlyDefined preserves the casing that is received from querying the provider.

## NpmJS

Multiple components listed on the NpmJS registry can be listed that differ in case only.
The registry itself, is case sensitive, and ClearlyDefined preserves the casing that is received from the provider.
When a scope is set on a package, the Package Name includes a slash ('/') character to denote the split between the Scope and the Name.

## NuGet

The NuGet APIs require all requests to be made with lowercased package names regardless of ID casing.
The catalogEntry from the registration is parsed and the ID casing preserved in the coordinates.

## PyPI

All python packages are case insensitive and the PyPI registry will redirect queries with wrong casing.
The casing from the name that is returned from the registry is preserved in the coordinates.

## RubyGems

The guidance for naming Gems is to not use lowercase letters, however there are gems with uppercase letters on the registry today.
The RubyGems APIs are case sensitive and will not return a query for a component with the wrong casing.

## CratesIO

The naming convention for Rust crates is snake_case (but prefer single word).
