import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'LayerEdge',
  tagline: 'Bitcoin Backed Internet',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.SITE_URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LayerEdge', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/orgs/Layer-Edge/repositories',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    metadata: [
      { name: 'title', content: 'LayerEdge Documentation - Bitcoin Backed Internet' },
      { name: 'description', content: "Explore LayerEdge's official documentation to learn how zk-proofs, recursive aggregation, and light node verification bring scalable, trust-minimized computation to Bitcoin. Discover how LayerEdge enables rollups, dApps, and modular chains to verify securely with minimal on-chain cost on Bitcoin." },
    ],
    // Replace with your project's social card
    image: 'https://dr6rqdr0y14sm.cloudfront.net/images/meta.jpg',
    algolia: {
      // Your Algolia Application ID
      appId: process.env.ALGOLIA_APP_ID,
      // Public API key: must be non-admin key
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME ,
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
    },
    navbar: {
      title: 'LayerEdge',
      logo: {
        alt: 'LayerEdge Logo',
        src: 'https://dr6rqdr0y14sm.cloudfront.net/images/newdarklogo.png',
        srcDark: 'https://dr6rqdr0y14sm.cloudfront.net/images/darklogo.png',
      },
      items: [
        { to: '/docs/intro', label: 'Learn', position: 'left' },
        { to: '/docs/build/', label: 'Build', position: 'left' },
        { to: '/docs/community-and-support/', label: 'Community', position: 'left'},
        {
          href: 'https://github.com/orgs/Layer-Edge/repositories',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Learn',
              to: '/docs/intro',
            },
            {
              label: 'Build',
              to: '/docs/getting-started/',
            },
            {
              label: 'Community',
              to: '/docs/community-and-support/',
            },
            {
              label: 'Legal Disclaimer',
              to: '/legal-disclaimer',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy-policy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://x.com/layeredge',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/layeredge',
            },
            {
              label: 'Medium',
              href: 'https://blog.layeredge.io',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/layeredge',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://layeredge.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/orgs/Layer-Edge/repositories',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LayerEdge.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
