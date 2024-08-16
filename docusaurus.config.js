// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ClearlyDefined Docs',
  tagline: 'Helping Open Source projects be more successful through clearly defined licensing data',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.clearlydefined.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'clearlydefined', // Usually your GitHub org/user name.
  projectName: 'clearlydefined', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/get-involved/intro',
            from: '/get-involved',
          },
          {
            to: '/docs/get-involved/using-data',
            from: '/using-data',
          },
          {
            to: '/docs/get-involved/data-curation',
            from: '/data-curation',
          },
          {
            to: '/docs/get-involved/contributing-data',
            from: '/contributing-data',
          },
          {
            to: '/docs/get-involved/contributing-code',
            from: '/contributing-code',
          },
          {
            to: '/docs/get-involved/adding-sources',
            from: '/adding-sources',
          },
          {
            to: '/docs/get-involved/adopting',
            from: '/adopting',
          }
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/clearlydefined/clearlydefined',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/clearlydefined/clearlydefined',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ClearlyDefined-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'ClearlyDefined',
          src: 'img/clearlydefined.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            to: '/docs/get-involved/intro',
            position: 'left',
            items: [
              {
                label: 'Introduction',
                to: '/docs/get-involved/intro',
              },
              {
                label: 'Use the data',
                to: '/docs/get-involved/using-data',
              },
              {
                label: 'Curate the data',
                to: '/docs/get-involved/data-curation',
              },
              {
                label: 'Contribute data',
                to: '/docs/get-involved/contributing-data',
              },
              {
                label: 'Contribute code',
                to: '/docs/get-involved/contributing-code',
              },
              {
                label: 'Add a harvest',
                to: '/docs/get-involved/adding-sources',
              },
              {
                label: 'Adopt practices',
                to: '/docs/get-involved/adopting',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Resources',
            to: '/docs/get-involved/intro',
            position: 'left',
            items: [
              {
                label: 'Blog',
                href: '/blog',
              },
              {
                label: 'FAQ',
                href: '/docs/resources/faq',
              },
              {
                label: 'Glossary',
                href: '/docs/resources/glossary',
              },
              {
                label: 'Providers',
                href: '/docs/resources/providers',
              },
              {
                label: 'Installation',
                href: '/docs/installation/',
              },
              {
                label: 'Curation',
                href: '/docs/curation/curation-guidelines',
              },
              {
                label: 'Roadmap',
                href: '/docs/resources/roadmap',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Community',
            to: '/docs/get-involved/intro',
            position: 'left',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/clearlydefined',
              },
              {
                label: 'Forum',
                to: 'https://discord.gg/wEzHJku',
              },
              {
                label: 'Events',
                to: '/docs/community/events',
              },
              {
                label: 'Meetings',
                to: '/docs/community/meetings',
              },
              {
                label: 'Members',
                to: '/docs/community/members',
              },
              {
                label: 'Code of Conduct',
                to: '/docs/community/coc',
              },
              {
                label: 'Charter',
                to: '/docs/community/charter',
              },
            ]
          },
          {
            href: 'https://github.com/clearlydefined',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/get-involved/intro',
              },
              {
                label: 'Use the data',
                to: '/docs/get-involved/using-data',
              },
              {
                label: 'Curate the data',
                to: '/docs/get-involved/data-curation',
              },
              {
                label: 'Contribute data',
                to: '/docs/get-involved/contributing-data',
              },
              {
                label: 'Contribute code',
                to: '/docs/get-involved/contributing-code',
              },
              {
                label: 'Add a harvest',
                to: '/docs/get-involved/adding-sources',
              },
              {
                label: 'Adopt practices',
                to: '/docs/get-involved/adopting',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                href: '/blog',
              },
              {
                label: 'FAQ',
                href: '/docs/resources/faq',
              },
              {
                label: 'Glossary',
                href: '/docs/resources/glossary',
              },
              {
                label: 'Providers',
                href: '/docs/resources/providers',
              },
              {
                label: 'Installation',
                href: '/docs/installation/',
              },
              {
                label: 'Curation',
                href: '/docs/curation/curation-guidelines',
              },
              {
                label: 'Roadmap',
                href: '/docs/resources/roadmap',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/clearlydefined',
              },
              {
                label: 'Forum',
                to: 'https://discord.gg/wEzHJku',
              },
              {
                label: 'Events',
                to: '/docs/community/events',
              },
              {
                label: 'Meetings',
                to: '/docs/community/meetings',
              },
              {
                label: 'Members',
                to: '/docs/community/members',
              },
              {
                label: 'Code of Conduct',
                to: '/docs/community/coc',
              },
              {
                label: 'Charter',
                to: '/docs/community/charter',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
