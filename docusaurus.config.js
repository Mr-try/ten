/*
 * @Author: try try418@163.com
 * @Date: 2023-07-10 14:49:12
 * @Description:
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '光影',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.try.design',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mr-try', // Usually your GitHub org/user name.
  projectName: 'ten', // Usually your repo name.
  // deploymentBranch:'',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/Mr-try/ten/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/Mr-try/ten/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          // hideable: true,
        },
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'RNAX3KFNDT',
      //   // Public API key: it is safe to commit it
      //   apiKey: '54ef1284c554494a65d9c3633368f5cd',
      //   indexName: 'try',
      //   insights: true,
      //   // Optional: see doc section below
      //   contextualSearch: true,
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.design|try\\.design',
      //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //   // replaceSearchResultPathname: {
      //   //   from: '/docs/', // or as RegExp: /\/docs\//
      //   //   to: '/',
      //   // },
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   // searchPagePath: 'search',
      //   //... other Algolia params
      // },
      navbar: {
        hideOnScroll: true,
        title: '',
        logo: {
          alt: 'try',
          href: '/',
          src: 'img/logo.png',
        },
        items: [
          { to: '/blog', label: '博客', position: 'left' },
          {
            label: '月迹',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'monthlySidebar',
          },
          // {
          //   to: '/read',
          //   label: '阅读笔记',
          //   position: 'left',
          // },
          // {
          //   to: '/picture',
          //   label: '老照片',
          //   position: 'left',
          // },
          {
            href: 'https://www.yuque.com/mrtry/blog',
            label: '语雀',
            position: 'right',
          },
          {
            href: 'https://github.com/mr-try',
            label: 'GitHub',
            position: 'right',
            logo: 'img/logo.png',
          },
          // {
          //   type: 'search',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} try.design`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
