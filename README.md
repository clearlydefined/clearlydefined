# ClearlyDefined, defined.

This repo holds the docs, artwork, and other organizational content in support of [ClearlyDefined](https://clearlydefined.io).

# Contributing

This project welcomes contributions and suggestions, and we've documented the details in how to [get involved](https://docs.clearlydefined.io/docs/get-involved).

The [Code of Conduct](https://docs.clearlydefined.io/docs/community/coc) for this project details how the community interacts in
an inclusive and respectful manner. Please keep it in mind as you engage here.

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
