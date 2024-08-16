---
layout: default
sidebar_position: 3
title: Using
---

# Using the containers

As noted above, you can start all of the containers with:

```bash
$ docker-compose up
```

This will show all of the logs from all of the container in your current shell.

## Rebuilding after changes

When you make changes to one of the code bases, you do need to rebuild the Docker images.

If you were to make a change to the website, and want to rebuild only that container, you can do so by running:

```bash
$ docker-compose up --detach --build web
```

The same will work for the service and the crawler:

```bash
$ docker-compose up --detach --build service
```

```bash
$ docker-compose up --detach --build crawler
```

## Limitations

When you look at a definition in the UI and create a curation (this uses the API call PATCH /curations), the curation WILL be opened
as a pull request on the [curated-data-dev](https://github.com/clearlydefined/curated-data-dev), but you will not see it
under the "Curations" section when you refresh the definition's page.

In the Azure dev and production environment, creating a curation will open a PR on the appropriate github curated-data repo,
and then, once the pull request is open, GitHub will then use a webhook.

The webhook will POST to an Azure logic app. That app will then put the curation on the Azure storage queue, which is how it will
end up in the curation store (in this case, mongo).

I haven't yet figured out a way to do this without an Azure logic app (but will continue looking into this). I did try
creating a GitHub webhook to POST to http://localhost:4000, but GitHub requires that the webhooks it POSTs to be
accessible over the public internet.

When I figure out a solution, I will update this README.

## Stopping containers

You can stop and destroy the containers in the shell where you ran `docker-compose up` with CTRL c.

You can also do this through the [Docker desktop client](https://www.docker.com/products/docker-desktop) or through the [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/).

Note that in order to re-seed the database you must completely destroy the containers (this can also be done through both the Desktop client and the CLI).

## Attaching to a container

You can attach to a container either through using the [Docker desktop client](https://www.docker.com/products/docker-desktop) or the [Docker CLI](https://docs.docker.com/engine/reference/commandline/attach/).

## Running only certain containers

You can choose to run or not run any of the containers listed in [docker-compose.yml]. If you don't wish to run one of the containers, comment it out like this:

**docker-compose.yml**

```bash
version: "3.8"
services:
#  web:
#    build:
#      context: <path-to-website-repo-on-your-system>
#      dockerfile: DevDockerfile
#    ports:
#      - "3000:3000"
#    stdin_open: true
  service:
    build:
      context: <path-to-service-repo-on-your-system>
      dockerfile: DevDockerfile
    ports:
      - "4000:4000"
    env_file: .env
    volumes:
      - ./harvested_data:/tmp/harvested_data/
    links:
      - clearlydefined_mongo_db
      - crawler
  crawler:
    build:
      context: <path-to-crawler-repo-on-your-system>
      dockerfile: DevDockerfile
    env_file: .env
    volumes:
      - ./harvested_data:/tmp/harvested_data/
    ports:
      - "5000:5000"
```

If you run `docker-compose up` after making these changes to the file, it will start all containers except the web container.
