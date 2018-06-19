# Contributing code

First, thanks for your interest in the code for ClearlyDefined. While much of the project's focus is on getting,
curating and upstreaming the data, that all takes some non-trivial code and infrastructure. You can
geta sense of the system from the [architecture guide](code/architecture). It has a high-level discussion
of the major pieces and how they fit together. The various repos may also have more specific information
about the particulars of their code.

# Quick and easy complete local configuration

You can setup individual parts of the system to run locally. Each repo's README has instructions on how to
get setup with just that functionality. To get the entire system setup locally, follow these steps. You will
end up with the crawler and service running locally, serving up the sample harvested data via the local website.

1.  Clone these four repos side by side:
    * [https://github.com/clearlydefined/website.git](https://github.com/clearlydefined/website.git)
    * [https://github.com/clearlydefined/service.git](https://github.com/clearlydefined/service.git)
    * [https://github.com/clearlydefined/crawler.git](https://github.com/clearlydefined/crawler.git)
    * [https://github.com/clearlydefined/harvested-data.git](https://github.com/clearlydefined/harvested-data.git)
      -- This is a **sample** set of data that changes over time and typically has data for the top 20 or so packages
      from supported different communities. The real data is stored in blob storage and accessed via REST APIs.
1.  Install [ScanCode](https://github.com/nexB/scancode-toolkit) by following the instructions provided [on their
    site](https://github.com/nexB/scancode-toolkit#quick-start).
1.  Copy the `full.env.json` from this (service) repo up one directory level and name it `env.json`
1.  Edit this `env.json` file as follows:
    * Add a GitHub token to `CURATION_GITHUB_TOKEN` and `CRAWLER_GITHUB_TOKEN`. This enables you to login to the
      local website or call the service APIs. You can use the same token for both settings. The tokens need only
      minimal permissions and are used to call GitHub APIs to manage pull requests and get repo tags etc.
    * Set `SCANCODE_HOME` to be the location of your ScanCode install from above.
1.  In each of the code repos (i.e., `website`, `service`, and `crawler`), run `npm install` and `npm start`.
    You probably want to run in three separate shells so you can see the logging coming from each. Note that if
    you are a VS Code user, you can use the handy launch configs that come with the `crawler` and `service`
    repos -- just hit F5.
1.  Point your browser at `http://localhost:3000`. You should see the ClearlyDefined website and be able to
    browse the data etc. If you login (top right corner), more functionality will light up.

# Contribution opportunities

The system as a whole is very young. The code should be considered pre-alpha -- it's enough to demonstrate the
concepts and operation. As such there are many areas ripe for your help. Don't let technology be a barrier.
Several contributors with little to no Node or React experience have made very real contributions. For example,
the website needs designers and people who can think deeply about the curation User Experience and workflow. No
code at all! Of course, if you are a React expert, there are challenges for you too.

Each repo has a set of GitHub issues and typically several with _Help wanted_ or _Good first issue_ labels.
Also look in the repos for a higher level view of the problem areas and a roadmap for where that repo's
function is going. Che

And of course, you can always ask on [Discord](https://discord.gg/wEzHJku) or [the mailing list](mailto:clearlydefined@googlegroups.com).
