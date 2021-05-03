# Adding a Harvest source

ClearlyDefined currently harvests several types of packages, the full list can be seen on the [ClearlyDefined Stats Page](https://clearlydefined.io/stats).

## Current Harvest Sources

### NPM

We pull NPM (Node.js) license information from https://www.npmjs.com/

### Gem

We pull Gem (Ruby) license information from https://rubygems.org/

### Pypi

We pull PyPi (Python) license information from https://pypi.org/

### Maven

We pull Maven (Java) license information from multiple sources including:

* https://mvnrepository.com/repos/central
* https://maven.google.com/

### Nuget

We pull Nuget (.NET) license information from https://www.nuget.org/

### Git

We pull Git license information from https://github.com

### Crate

We pull Crates (Rust) license information from https://crates.io/

### Deb

We pull Deb license information from http://ftp.debian.org/

### Debsrc

We pull Debsrc license information from http://ftp.debian.org/

### Composer

We pull Composer (PHP) license information from https://packagist.org/

### Pod

We pull Pod (Swift and Objective-C) license information from https://cocoapods.org/

## Adding a new Harvest Source

If you would like to add a new Harvest source to ClearlyDefined, consider this criteria:

**Discoverability** – how are the packages for this language discovered? Is the repository searched by the build tooling without the user having to customize their client?

**Primary Source** – is this the primary repository that the package is published to? Or is this repository a mirror of an existing repository? We should always harvest from primary sources.

**Reputability** – is this repository operated by a reputable organization? What is the purpose behind running this repository? Is there an identifiable team that can be reached in the event of any issues?

**Security** – how secure is the repository? Is there a team that is available to handle issues in a timely manner when they arise? How fast do they respond to issues, such as when a security vulnerability is planted as a backdoor in a package?

**Automation** – does the repository support an API to support pulling of information? If not, is the package index organized in a schematized format that can programmatically queried using the package name and version and queried using HTTP(s). When using HTTP to mine data, ClearlyDefined should check for the existence of robots.txt or robot headers that indicate such mining is unacceptable. How much effort is it to automate the process

**Relationship** – reach out to the organization that maintains the repository to indicate that ClearlyDefined wishes to harvest data from their repository, with an explanation on how harvesting is done, what the data is used for and how much additional traffic this could result in. Identify/Resolve any concerns and provide a contact from ClearlyDefined in the event they need to support in case of an issue.

To add a new harvest source, open an issue on the [ClearlyDefined Service Repo](https://github.com/clearlydefined/service) for comment. Make sure to include how you believe that source fits the above criteria and the community will discuss it with you.