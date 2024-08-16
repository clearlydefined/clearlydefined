---
layout: default
sidebar_position: 2
title: Containers
---

# Containers

Now, let's go through what your are running, container by container.

- ClearlyDefined Website
- ClearlyDefined Service
- ClearlyDefined Crawler
- ClearlyDefined Mongo DB
- ClearlyDefined Mongo DB Seed

## ClearlyDefined Website

This is the ClearlyDefined React UI. It's what you see when you open your browser and go to http://locahost:3000. It connects to the ClearlyDefined Service API.

## ClearlyDefined Service

This is the backend of ClearlyDefined, you can use it through the Website UI or through
querying it directly through the command line.

Any ClearlyDefined environment needs a place to store raw harvest information. In the case of this development environment, we use the file store for storing harvest information (our production setup uses Azure blob storage).

This Docker setup creates a volume for the harvested data and mounts it in the Service container.

```bash
$ curl http://localhost:4000

{"status":"OK"}

$ curl localhost:4000/definitions/maven/mavencentral/org.flywaydb/flyway-maven-plugin/5.0.7

{"described":{"sourceLocation":{"type":"sourcearchive","provider":"mavencentral","url":"http://central.maven.org/maven2/org/flywaydb/flyway-maven-plugin/5.0.7/flyway-maven-plugin-5.0.7-sources.jar","revision":"5.0.7","namespace":"org.flywaydb","name":"flyway-maven-plugin"},"releaseDate":"2018-01-30","urls":{"registry":"http://central.maven.org/maven2/org/flywaydb/flyway-maven-plugin","version":"http://central.maven.org/maven2/org/flywaydb/flyway-maven-plugin/5.0.7","download":"http://central.maven.org/maven2/org/flywaydb/flyway-maven-plugin/5.0.7/flyway-maven-plugin-5.0.7.jar"},"tools":["clearlydefined/1"],"toolScore":{"total":100,"date":30,"source":70},"score":{"total":100,"date":30,"source":70}},"licensed":{"declared":"NOASSERTION","toolScore":{"total":15,"declared":0,"discovered":0,"consistency":15,"spdx":0,"texts":0},"score":{"total":15,"declared":0,"discovered":0,"consistency":15,"spdx":0,"texts":0}},"coordinates":{"type":"maven","provider":"mavencentral","namespace":"org.flywaydb","name":"flyway-maven-plugin","revision":"5.0.7"},"_meta":{"schemaVersion":"1.6.1","updated":"2019-11-04T21:59:21.238Z"},"scores":{"effective":57,"tool":57}}

$ curl http://localhost:4000/curations/maven/mavencentral/org.flywaydb/flyway-maven-plugin/5.0.7?expand=prs

{"curations":{},"contributions":[{"pr":{"number":387,"id":254753509,"state":"open","title":"update flyway maven plugin to the artistic license","body":"\n**Type:** Incorrect\n\n**Summary:**\nupdate flyway maven plugin to the artistic license\n\n**Details:**\nFixed the problem\n\n**Resolution:**\nChanged to the correct license\n\n**Affected definitions**:\n- flyway-maven-plugin 5.0.7","created_at":"2019-02-20T18:53:22Z","updated_at":"2019-02-20T18:53:24Z","closed_at":null,"merged_at":null,"merge_commit_sha":"377d70874899b17c054881929fdc1c4f7dd87ace","user":{"login":"clearlydefinedbot"},"head":{"sha":"cef2ce0577899f9ae429f3750fbf8ec34afb6f76","repo":{"id":115941547}},"base":{"sha":"1f8ee8bbe8200c494bdfa458b5b589dc5c0d9862","repo":{"id":115941547}}},"files":[{"path":"curations/maven/mavencentral/org.flywaydb/flyway-maven-plugin.yaml","coordinates":{"type":"maven","provider":"mavencentral","namespace":"org.flywaydb","name":"flyway-maven-plugin"},"revisions":[{"revision":"5.0.7","data":{"licensed":{"declared":"Artistic-1.0-Perl"}}}]}]}]}

$ curl http://localhost:4000/harvest/maven/mavencentral/org.flywaydb/flyway-maven-plugin/5.0.7?form=raw

{"clearlydefined":{"1":{"_metadata":{"type":"maven","url":"cd:/maven/mavencentral/org.flywaydb/flyway-maven-plugin/5.0.7","fetchedAt":"2018-03-06T00:08:41.835Z","links":{"self":{"href":"urn:maven:mavencentral:org.flywaydb:flyway-maven-plugin:revision:5.0.7:tool:clearlydefined:1","type":"resource"}
(...)
```

## ClearlyDefined Crawler

The Crawler is what "crawls" package registries, github, and more to scan and collect license information.

This is run within it's own container. Queues used by the crawler are current run in the container's memory.

As noted above, any ClearlyDefined environment needs a place to store raw harvest information. In the case of this development environment, we use the same file storage place as the service (harvest information is stored in a volume that is mounted to both containers).

To see this in action, you can request a package that has not been harvested through either the UI or through the service API.

To request it through the UI, navigate to http://localhost:3000/definitions/npm/npmjs/-/npm/7.3.0 in your browser.

To request it through the API, run:

```bash
$ curl localhost:4000/definitions/npm/npmjs/-/npm/7.3.0
```

You will first see that it does not have the definition. Check back in a few minutes after you
run these commands and you should see newly harvested data.

## ClearlyDefined Mongo DB

This container holds a Mongo database called **clearlydefined**

The database contains the following collections:

- curations (contains curations)
- definitions-paged (contains definitions)
- definitions-trimmed (contains definitions without files)

Our production Azure setup includes definitions-trimmed, that is actively used. The reason the definitions collection is called definitions-trimmed is because, previously, the definitions collection was paged. The pagination was added in [this January 2019 pull request](https://github.com/clearlydefined/service/pull/364). To improve performance and reduce cost of the definition database, [this Feb 2023 pull request](https://github.com/clearlydefined/service/pull/976) subsequently stores definitions without files.

The sample setup uses definitions-paged instead of definitions-trimmed because definitions-trimmed works well as part of a definition store collection, but not on its own. In comparison, definitions-paged collection stores the definitions in entirety, and can be used as a standalone definitions store. To emulate the production environment more closely, one can use dispatch+file+mongoTrimmed as DEFINITION_STORE_PROVIDER.

These collections are seeded using the ClearlyDefined Mongo Seed container.

If you have [mongodb](https://docs.mongodb.com/manual/installation/) installed on your local system, you can attach to the Mongo database with:

```bash
$ mongo mongodb://localhost:27017
```

You can also do this through the [Docker desktop client](https://www.docker.com/products/docker-desktop).

## ClearlyDefined Mongo Seed

This container exists only to seed initial data into the ClearlyDefined Mongo DB. It populates the collections with sample data.

If you wish to build this container yourself, please follow the instructions [here](https://github.com/clearlydefined/docker_dev_env_experiment/blob/main/mongo_seed/README.md)
