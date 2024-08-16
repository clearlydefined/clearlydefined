---
layout: default
sidebar_position: 1
title: Start
---

# Getting Started

## Prerequisitives

To run this environment, you need to install

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Cloning repositories

Start off by cloning the following repository.

```bash
$ git clone git@github.com:clearlydefined/docker_dev_env_experiment.git
```

Change into that directory:

```bash
$ cd docker_dev_env_experiment
```

I prefer to clone my copies of the ClearlyDefined repos into this directory as well

```bash
$ git clone git@github.com:clearlydefined/website.git
$ git clone git@github.com:clearlydefined/service.git
$ git clone git@github.com:clearlydefined/crawler.git
```

Alternately, you can edit the **docker-compose.yml** file to point to where you have those repos cloned on your local system:

**docker-compose.yml**

```bash
version: "3.8"
services:
  web:
    build:
      context: <path-to-website-repo-on-your-system>
      dockerfile: DevDockerfile
    ports:
      - "3000:3000"
    stdin_open: true
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

If you are using a Mac computer and your CPU does not have a AVX support, please change the version of Mongo from 5.0.6 to 4.4.28 in docker-compose.yml file.

```bash
clearlydefined_mongo_db:
    image: "mongo:4.4.28"
    ports:
      - "27017:27017"
```

## Setting up environmental variables

This environment handles environmental variables a little differently from the [historical ClearlyDefined dev environment instructions](https://docs.clearlydefined.io/contributing-code).

The docker-compose.yml file loads environmental variables from a **.env** file.

To set this up, copy the **sample_env** file in this repo to **.env**

```bash
$ cp sample_env .env
```

And add in appropriate values to the .env file:

(You will need a [GitHub token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) with minimal permissions)

(You can use the same GitHub token for both CURATION_GITHUB_TOKEN and CRAWLER_GITHUB_TOKEN)

**.env**

```
# Curation GitHub Info
CURATION_GITHUB_BRANCH="master"
CURATION_GITHUB_OWNER="clearlydefined"
CURATION_GITHUB_REPO="curated-data-dev"
CURATION_GITHUB_TOKEN="<your GitHub token>"

# GitLab info
GITLAB_TOKEN="<your GitLab token (unless you are working on code that interacts with the GitLab API, this can be a random string of characters)>

# Curation Store Info
CURATION_MONGO_CONNECTION_STRING="mongodb://clearlydefined_mongo_db"
CURATION_MONGO_DB_NAME="clearlydefined"
CURATION_MONGO_COLLECTION_NAME="curations"
CURATION_PROVIDER="github"
CURATION_STORE_PROVIDER="mongo"

# Definition Store Info
DEFINITION_STORE_PROVIDER="mongo"
DEFINITION_MONGO_CONNECTION_STRING="mongodb://clearlydefined_mongo_db"
DEFINITION_MONGO_DB_NAME="clearlydefined"
DEFINITION_MONGO_COLLECTION_NAME="definitions-paged"

# Harvest Store Info
HARVEST_STORE_PROVIDER="file"

# Note - this is mounted as a volume
# into the container for the
# ClearlyDefined service
# see docker-compose.yml for more details
FILE_STORE_LOCATION="/tmp/harvested_data"

# Crawler Info
CRAWLER_API_URL="http://crawler:5000"
CRAWLER_GITHUB_TOKEN="<your GitHub token>"
CRAWLER_DEADLETTER_PROVIDER=cd(file)
CRAWLER_NAME=cdcrawlerlocal
CRAWLER_QUEUE_PROVIDER=memory
CRAWLER_STORE_PROVIDER=cd(file)
```

Now, from withing your **docker_dev_env_experiment** directory, run:

```bash
$ docker-compose build
$ docker-compose up
```

_NOTE: If you have an issue seeding, prune all volumes, containers, and images then try again._

And head to http://localhost:3000 to see your running website UI along with some seeded data!

You can also query the service API with:

```bash
curl http://localhost:4000
```

## Additional Setup for GitHub curation(Optional)

If you want to work with curation on GitHub, you could follow these steps

1. Fork [curated-data-dev](https://github.com/clearlydefined/curated-data-dev) into your own GitHub account and modify the .env file.
   ```
   CURATION_GITHUB_OWNER="<your own GitHub account>"
   CURATION_GITHUB_REPO="curated-data-dev"
   ```
2. In order to get GitHub webhook events, a http forwarding proxy is needed. Here [ngrok](https://ngrok.com/download) has been used. Run `ngrok http http://localhost:4000`. You will see something similar to this
   ```
   Session Status                online
   Session Expires               1 hour, 59 minutes
   Version                       2.3.35
   Region                        United States (us)
   Web Interface                 http://127.0.0.1:4040
   Forwarding                    http://83f8ddfb177b.ngrok.io -> http://localhost:4000
   Forwarding                    https://83f8ddfb177b.ngrok.io -> http://localhost:4000
   ```
3. Then you could create a webhook in your forked curate-data repository. Use `<ngrok forwarding url(prefer https one)>/webhook` as the webhook payload URL. And put 'secret' as the webhook secret.
4. You could verify Github webhook events with `ngrok` management UI, http://localhost:4040

## Debugging

After running `docker-compose up`, you could attach debuggers to the running containers for service and crawler.

### Debug service

Open the folder to the local clone of [crawler](https://github.com/clearlydefined/crawler) with vscode. Choose `Docker: Attach to Node` and run debug.

### Debug Crawler

Open the folder to the local clone of [service](https://github.com/clearlydefined/service) with vscode. Choose `Attach to Docker` and run debug.
