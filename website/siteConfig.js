/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Cloud Hub Limited',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/ch.png',
    infoLink: 'https://www.cloudhub.co.ke',
    pinned: true,
  },
  {
    caption: 'Bonded Groceries',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/bondedgroceries.png',
    infoLink: 'https://www.bondedgroceries.co.ke',
    pinned: true,
  },
  {
    caption: 'Instaveg Limited',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/instaveg.jpg',
    infoLink: 'https://www.instaveg.co.ke',
    pinned: true,
  },
  {
    caption: 'AgriPro',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/agripro.png',
    infoLink: 'https://agripro.cloudhub.co.ke',
    pinned: true,
  },
  {
    caption: 'Manifested Publishers',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/manifested.png',
    infoLink: 'https://wwww.manifestedpublishers.com',
    pinned: true,
  },
  {
    caption: 'J-Vuka',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/jvuka.png',
    infoLink: 'https://wwww.jvuka.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Sails-ArangoJs', // Title for your website.
  tagline:
    'Leverage the power of ArangoDB and Graphs\n\nin your NodeJs project. Thank us later.',
  url: 'https://sails-arangojs.netlify.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'sails-arangojs-docs',
  organizationName: 'Cloud Hub',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'installation', label: 'Docs' },
    { doc: 'create', label: 'API' },
    // { blog: true, label: 'Blog' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/arangoicon.png',
  footerIcon: 'img/cloudhubicon256.png',
  favicon: 'img/cloudhubicon256.png',

  /* Colors for website */
  colors: {
    primaryColor: '#6920b0',
    secondaryColor: '#fa41cc',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Cloud Hub Limited`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/cloudhubke/sails-arangojs-docs',
};

module.exports = siteConfig;
