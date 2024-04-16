# Running the Harvester

Local dev

- If you want to run locally, you’ll need to install scancode/licensee on your local machine with paths/etc. Easier to run docker image.
- There is a linux Dockerfile to build a container, that is the target environment
- Look at quick start in README
- Template.env.json has minimal settings: file storage provider, memory incoming queue
- “Queueing work with crawler”: instructions once crawler is running
  - Could bring up service and crawler, and send harvest to service
  - Easier to work with just crawler, example post message in readme
- See “Build and run docker image locally” in readme, need config file
- Run docker build command
- To get dev config: go to portal: cdcrawler-dev, Settings->Configuration
- Uses docker’s “env-file”, key/value environment vars, different than env.json
- From dev, change \*crawler/harvest azblob_container_name, queue prefix, harvests, queue name, to be your own personal names
- Crawler_service_auth_token: the token needed for the harvest queue curl command
- When you use the curl command directly on the crawler, it puts a message on its own queue. You could just copy an existing harvest message from the storage queue, and put on your own named harvest queue

# Contributing back to ClearlyDefined

Technical Process:
How will data sent from an outside harvester be submitted to ClearlyDefined?

- put data in shared Blob storage
- put on harvested queue

OPTIONS:

- CD adds a PUT API call that would do both adding data to Blob storage and on the harvested queue
- May want to add provenance of the data to identify who contributed harvested data
