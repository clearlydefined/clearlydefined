import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1fd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e80'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '163'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '4f2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ad8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b7b'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '868'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'ef8'),
    exact: true
  },
  {
    path: '/blog/foss-backstage',
    component: ComponentCreator('/blog/foss-backstage', '60e'),
    exact: true
  },
  {
    path: '/blog/ort-community-days',
    component: ComponentCreator('/blog/ort-community-days', 'b75'),
    exact: true
  },
  {
    path: '/blog/popular-licenses-2023',
    component: ComponentCreator('/blog/popular-licenses-2023', 'd20'),
    exact: true
  },
  {
    path: '/blog/recap-vision-2024',
    component: ComponentCreator('/blog/recap-vision-2024', 'c3b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'cf4'),
    exact: true
  },
  {
    path: '/blog/tags/events',
    component: ComponentCreator('/blog/tags/events', '0f8'),
    exact: true
  },
  {
    path: '/blog/tags/licenses',
    component: ComponentCreator('/blog/tags/licenses', '30a'),
    exact: true
  },
  {
    path: '/blog/tags/roadmap',
    component: ComponentCreator('/blog/tags/roadmap', '0e3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '175'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '924'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '0d9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '176'),
            routes: [
              {
                path: '/docs/community/',
                component: ComponentCreator('/docs/community/', 'a43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/community/charter',
                component: ComponentCreator('/docs/community/charter', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/community/coc',
                component: ComponentCreator('/docs/community/coc', '2ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/community/events',
                component: ComponentCreator('/docs/community/events', '62d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/community/meetings',
                component: ComponentCreator('/docs/community/meetings', '3db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/community/members',
                component: ComponentCreator('/docs/community/members', '2dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/curation/',
                component: ComponentCreator('/docs/curation/', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/curation/curation-guidelines',
                component: ComponentCreator('/docs/curation/curation-guidelines', 'c12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/curation/curation-process',
                component: ComponentCreator('/docs/curation/curation-process', 'ad5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/curation/data-donation',
                component: ComponentCreator('/docs/curation/data-donation', 'e01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-involved/',
                component: ComponentCreator('/docs/get-involved/', '9f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-involved/adding-sources',
                component: ComponentCreator('/docs/get-involved/adding-sources', 'e68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-involved/adopting',
                component: ComponentCreator('/docs/get-involved/adopting', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-involved/contributing-code',
                component: ComponentCreator('/docs/get-involved/contributing-code', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-involved/contributing-data',
                component: ComponentCreator('/docs/get-involved/contributing-data', '120'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-involved/data-curation',
                component: ComponentCreator('/docs/get-involved/data-curation', '5a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-involved/intro',
                component: ComponentCreator('/docs/get-involved/intro', '519'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/get-involved/using-data',
                component: ComponentCreator('/docs/get-involved/using-data', 'c3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/harvest/',
                component: ComponentCreator('/docs/harvest/', '68a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/harvest/intro',
                component: ComponentCreator('/docs/harvest/intro', '50f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/',
                component: ComponentCreator('/docs/legal/', '5d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/NOTICES',
                component: ComponentCreator('/docs/legal/NOTICES', 'acf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/privacy',
                component: ComponentCreator('/docs/legal/privacy', 'd36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/legal/terms',
                component: ComponentCreator('/docs/legal/terms', '5e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/',
                component: ComponentCreator('/docs/resources/', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/architecture',
                component: ComponentCreator('/docs/resources/architecture', '0f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/defined',
                component: ComponentCreator('/docs/resources/defined', 'b8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/FAQ',
                component: ComponentCreator('/docs/resources/FAQ', '655'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/glossary',
                component: ComponentCreator('/docs/resources/glossary', 'd0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/providers',
                component: ComponentCreator('/docs/resources/providers', '7ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/roadmap',
                component: ComponentCreator('/docs/resources/roadmap', '829'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roles/',
                component: ComponentCreator('/docs/roles/', '7e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roles/adopter',
                component: ComponentCreator('/docs/roles/adopter', '9cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roles/code-contributor',
                component: ComponentCreator('/docs/roles/code-contributor', 'f98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roles/data-consumer',
                component: ComponentCreator('/docs/roles/data-consumer', 'e04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roles/data-contributor',
                component: ComponentCreator('/docs/roles/data-contributor', '553'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/roles/data-curator',
                component: ComponentCreator('/docs/roles/data-curator', '771'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '0f4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
