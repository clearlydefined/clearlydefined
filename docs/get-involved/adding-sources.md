---
layout: default
sidebar_position: 7
title: Add a harvest
---

# Adding a Harvest source

ClearlyDefined currently harvests several types of packages, the full list can be seen on the [ClearlyDefined Stats Page](https://clearlydefined.io/stats).

## Current Harvest Sources

### npm

- source: https://www.npmjs.com
- The crawler pulls registry data for the component from https://registry.npmjs.com
- In the service, the ClearlyDefined summarizer parses license(s) from the registry data and sets them as the declared license

### gem

- source: https://rubygems.org
- The crawler pulls registry data for the component from https://rubygems.org
- The ClearlyDefined summarizer determines the declared license based on the license in the registry data

### pypi

- source: https://pypi.org
- First, the crawler pulls registry information from https://pypi.org [Code](https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/pypiFetch.js#L42)
- It then extracts the declared license from the registry data [Code](https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/pypiFetch.js#L71)
- The service uses the declared license set by the crawler

### maven

- sources https://mvnrepository.com/repos/central, https://maven.google.com/ and https://plugins.gradle.org/m2/

--maven central--

- The crawler downloads the maven artifact from maven.org
- The crawler then extracts all pom files from the artifact
- And then merges the poms (including all the licenses defined in the poms)
- The ClearlyDefined summarizer parses the merged poms and sets the declared license(s) based on that data

--google maven--

- The crawler gets pom files for the component from https://dl.google.com/android/maven2/
- It then merges the poms (including all the licenses defined in the poms)
- The ClearlyDefined summarizer parses the merged poms and sets the declared license(s) based on that data

--gradle plugin--

- The crawler gets pom files for the component from https://plugins.gradle.org/m2/
- It then merges the poms (including all the licenses defined in the poms)
- The ClearlyDefined summarizer parses the merged poms and sets the declared license(s) based on that data

### nuget

- source: https://www.nuget.org/
- The crawler gets registry information for the component from https://api.nuget.org
- If the registry information has a licenseExpression field, the ClearlyDefined summarizer sets the declared license to that license expression
- If the registry information has a licenseUrl field, the ClearlyDefined summarizer extracts the license from that license url and sets the declared license to the extracted license
- If the ClearlyDefined summarizer cannot extract the license from the license URL, it sets the declared license to NOASSERTION

--Checking for the packageEntries field--

- The ClearlyDefined summarizer then checks whether the registry information has a packageEntries field
- If it does not, it leaves the declared license as it is
- If it does have a packageEntries field, the ClearlyDefined summarizer creates a new definition with the files field set to those packageEntries

--Merging definitions--

- It then merges the definitions and, in the process, merges the declared licenses
- If the original definition (prior to the merge) has a declared license of 'OTHER', it sets the declared license (on the merged definition) to the license on the new definition
- Otherwise, it combines the original definition license and the new definition license with AND

### git

- sources: https://github.com and https://gitlab.com
- The crawler clones the repo for the component from either https://gitlab.com or https://github.com
- TODO - how is the declared license decided?

### crate

- source: https://crates.io/
- The crawler gets registry information from https://crates.io/api/v1/crates/
- The ClearlyDefined summarizer sets the declared license to the license(s) in the registry information

### deb

- source: http://ftp.debian.org/
- First, the crawler downloads a package file map from http://ftp.debian.org/debian/indices/package-file.map.bz2 and caches it (if there is not one already cached) for 8 hours [Code](https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L87)
- It then pulls the registry information for the particular component from that package map file [Code](https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L114)
- It then finds the relevant copyright URL from the registry information [Code](https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L295) [Example](https://metadata.ftp-master.debian.org/changelogs/main/0/0ad-data/0ad-data_0.0.17-1_copyright)
- It then pulls information from the copyright URL [Code](https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L306)
- And parses that information [Code](https://github.com/clearlydefined/crawler/blob/f461b2358fbde130bcc5d183de01a4212c4cd66d/providers/fetch/debianFetch.js#L320) to determine the declared license(s)
- The ClearlyDefined summarizer then parses the declared licenses and, if there is more than one, joins them with 'AND'

### debsrc

- source: http://ftp.debian.org/
- Appears to be the same as `deb`

### composer

- source: https://packagist.org/
- The crawler pulls registry information from https://repo.packagist.org/
- The ClearlyDefined summarizer then sets the declared license based on the registry information

### pod

- source: https://cocoapods.org/
- The service then sets the declared license based on the registry information
- The ClearlyDefined summarizer pulls registry information from 'https://raw.githubusercontent.com/CocoaPods/Specs/master

## Adding a new Harvest Source

If you would like to add a new Harvest source to ClearlyDefined, consider this criteria:

**Discoverability** – how are the packages for this language discovered? Is the repository searched by the build tooling without the user having to customize their client?

**Primary Source** – is this the primary repository that the package is published to? Or is this repository a mirror of an existing repository? We should always harvest from primary sources.

**Reputability** – is this repository operated by a reputable organization? What is the purpose behind running this repository? Is there an identifiable team that can be reached in the event of any issues?

**Security** – how secure is the repository? Is there a team that is available to handle issues in a timely manner when they arise? How fast do they respond to issues, such as when a security vulnerability is planted as a backdoor in a package?

**Automation** – does the repository support an API to support pulling of information? If not, is the package index organized in a schematized format that can programmatically queried using the package name and version and queried using HTTP(s). When using HTTP to mine data, ClearlyDefined should check for the existence of robots.txt or robot headers that indicate such mining is unacceptable. How much effort is it to automate the process?

**Relationship** – reach out to the organization that maintains the repository to indicate that ClearlyDefined wishes to harvest data from their repository, with an explanation on how harvesting is done, what the data is used for and how much additional traffic this could result in. Identify/Resolve any concerns and provide a contact from ClearlyDefined in the event they need to support in case of an issue.

To add a new harvest source, open an issue on the [ClearlyDefined Service Repo](https://github.com/clearlydefined/service) for comment. Make sure to include how you believe that source fits the above criteria and the community will discuss it with you.

## Adding a new Harvest Provider

If you wish to add a new provider to an existing source (for example a new Maven artifact repository), please consider the [same criteria as for a new source](#adding-a-new-harvest-source).  You might also review issues [882](https://github.com/clearlydefined/service/issues/882) and [1316](https://github.com/clearlydefined/service/issues/1316) as worked examples of requests of this nature.
