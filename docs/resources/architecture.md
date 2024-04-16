---
layout: default
sidebar_position: 5
title: Architecture
---

# Architecture

ClearlyDefined is structured as a set of stateles, micro-services that can scale horizontally with ease.
The services collaborate via REST APIs using shared service-to-service tokens and/or shared access to storage
(e.g., blob storage). The website is React-based an talks almost solely to the service.

The system as a whole is made up of the following major subsystems:

- [Website](https://github.com/clearlydefined/website.git) -- A relatively simple but quite useful React app that uses the [Create React App framework](https://github.com/facebook/create-react-app), [Redux](https://redux.js.org), [React-Bootstrap](https://react-bootstrap.github.io) and a few other bits and pieces.
- [Service](https://github.com/clearlydefined/service.git) -- A Node based service that supports numerous REST APIs for accessing and searching definitions, getting and harvesting data, creating and managing curations, and more.
- [Crawler](https://github.com/clearlydefined/crawler.git) -- A horizontally scalable Node service that processes requests to harvest data from components using a variety of tools.
- Definition store -- A store for component definitions
- Harvest store -- A store for raw harvest tool outputs. Nothing fancy here. Plain blob storage is fine.
- Harvest queue -- A queue of requests for the crawlers to process.
- Curation store -- A place to store and collaborate on curations to the harvested data. In practice this a structured GitHub repo (e.g., https://github.com/clearlydefined/curated-data).
- Tools -- Any number of openly available code/package analysis tools such as [ScanCode](https://github.com/nexB/scancode-toolkit) and [FOSSology](https://www.fossology.org/)
  as well as a few home grown utilities.

## Service

Unsurprisingly, the `service` is at the heart of the system. It supports a [set of REST APIs](https://api.clearlydefined.io/api-docs) that server or manage

- Auth\* -- Token based auth using GitHub OAuth API and GitHub teams for permissions
- Definitions -- Get, list, search or investigate existing definitions in the system
- Curations -- Get and create curations
- Harvesting -- Get or queue traversals of components of various supported types
- Origin scanning -- Support for searching and selecting components and versions from a wide range of systems such as GitHub, npmjs, Maven Central.

The service process itself is completely stateless and can scale horizontally as needed. It does relativley little compute itself. The heaviest lifting it does is summarizing, aggregating and curating definitions from their
constituent parts. That computation is only done once and then cached until invalidated by new data. So, most of
the time the service is listing blobs or getting blobs and returning their content.

When you think about the service, think really simple. There is a pluggable provider mechanism so, for example,
different storage providers (e.g., Azure blob, local file system, ...) can be configured in. The actual business
logic is probably < 500 lines of Node code.

## Website

The website is a simple React app that uses the [Create React App framework](https://github.com/facebook/create-react-app), [Redux](https://redux.js.org) and [React-Bootstrap](https://react-bootstrap.github.io). All of its content comes via the service, even when it is talking to GitHub or npmjs or Maven Central. This allows us to manage access tokens, do caching, and precompute results. This approach also simplifies client code and enables the easy creation of alternative front-ends with consistent functional behavior.

The app was put together by new React devs so is bound to have a number of less than opitimal designs and approaches.

### Badges

To retrieve a link to the image for your badge on your open source page, you can use the API endpoint
/badges/:type/:provider/:namespace/:name/:revision

So, for example:
/badges/git/github/expressjs/express/351396f971280ab79faddcf9782ea50f4e88358d

You can embed this into your open source project by putting the following markdown into your Readme.
(Note please replace variables with your poject information)

```
![My ClearlyDefined Score](https://api.clearlydefined.io/badges/:type/:provider/:namespace/:name/:revision)
```

# Deploying the ClearlyDefined service

## Properties

### `AUTH_GITHUB_ORG`

The name of the org the site will use for authenticating users. Checks team membership.

### `AUTH_CURATION_TEAM`

The GitHub team whose members have permission to programmatically write to the curation repo for this environment (e.g., merge pull requests). If left unset, **anyone** can do these operations.

### `AUTH_HARVEST_TEAM`

The GitHub team whose members have permission to programmatically queue requests to harvest data. That is, they can POST to the /harvest endpoint. If left unset, **anyone** can do these operations.

### `CURATION_GITHUB_OWNER`

The GitHub user or org that owns the curation repo. This repo is assumed to be owned by `CURATION_GITHUB_OWNER`.

### `CURATION_GITHUB_REPO`

The GitHub curation repo to use for curations. This repo is assumed to be owned by `CURATION_GITHUB_OWNER`.

### `CURATION_GITHUB_BRANCH`

The GitHub curation repo branch to use for curations. For testing and development, feel free to use your own. DON'T use `master` and you aren't so DO NOT use `master`.

### `CURATION_GITHUB_TOKEN`

A Personal Access Token with public_repo scope

### DEFINITION_AZBLOB_CONNECTION_STRING

Azure blob connection string

### DEFINITION_AZBLOB_CONTAINER_NAME

Name of the Azure blob container holding that holds computed definitions

### `FILE_STORE_LOCATION`

This is the location to store harvested data, scan results, ... If left unset, data will be stored in `c:\temp\cd` (for Windows) and `/tmp/cd` (for all other systems). This location is shared with other parts of the system.

# Deploying the ClearlyDefined crawler

## Properties

### `SERVICE_ENDPOINT`

The full origin of the service, e.g. `http://domain.com:port`.

### `WEBSITE_ENDPOINT`

The full origin of the website/UI, e.g. `http://domain.com:port`.

### `AUTH_GITHUB_CLIENT_ID` and `AUTH_GITHUB_CLIENT_SECRET`

If using an OAuth application for GitHub sign-on, set these to the client ID and client secret, respectively.
If not provided, auth will fall back to `CURATION_GITHUB_TOKEN`.

### `CRAWLER_DEADLETTER_PROVIDER`

Crawler's deadletter provider. If unset, it defaults to `CRAWLER_STORE_PROVIDER`'s default.

### `CRAWLER_GITHUB_TOKEN`

The crawler tries to figure out details of the packages and source being traversed using various GitHub API calls. For this it needs an API token. This can be a Personal Access Token (PAT) or the token for an OAuth App. The token does not need any special permissions, only public data is accessed. Without this key GitHub will severely rate limit the crawler (as it should) and you won't get very far.

### `CRAWLER_STORE_PROVIDER`

Crawler's store providers. If left unset, it defaults to `cd(file)`. If multiple stores need to be set, they should be concatenated with "+", for example `cdDispatch+cd(azblob)+webhook`

### `FILE_STORE_LOCATION`

This is the location to store harvested data, scan results, ... If left unset, data will be stored in `c:\temp\cd` (for Windows) and `/tmp/cd` (for all other systems). This location is shared with other parts of the system.

### CRAWLER_AZBLOB_CONNECTION_STRING

Azure blob connection string

### CRAWLER_AZBLOB_CONTAINER_NAME

name of container holding harvested data

### PORT

Defaults to 3000, like a lot of other dev setups. Set this if you are running more than one service that uses that port.

### `SCANCODE_HOME`

The directory where ScanCode is installed.
