import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Shopify Themes",
  description: "Knowledge base for GirlElements themes on Shopify",
  base: '/shopify-support/',

  head: [
    ['link', { rel: 'icon', href: '/shopify-support/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Configuration', link: '/configuration/' },
      { text: 'Theme Guides', link: '/theme-guides/' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/getting-started/' },
            { text: 'About Themes', link: '/getting-started/about-themes' },
            { text: 'Support Policy', link: '/getting-started/support-policy' },
            { text: 'Browser Support', link: '/getting-started/browser-support' },
            { text: 'Accessibility', link: '/getting-started/accessibility' },
            { text: 'Licensing', link: '/getting-started/licensing' },
            { text: 'Changelog', link: '/getting-started/changelog' }
          ]
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/configuration/' },
            { text: 'General Settings', link: '/configuration/general-settings' },
            { text: 'Header', link: '/configuration/header' },
            { text: 'Collections', link: '/configuration/collections' },
            { text: 'Footer', link: '/configuration/footer' },
            { text: 'Pages', link: '/configuration/pages' },
            { text: 'Products', link: '/configuration/products' },
            { text: 'Cart', link: '/configuration/cart' },
            { text: 'Search', link: '/configuration/search' },
            { text: 'Sections', link: '/configuration/sections' }
          ]
        },
        {
          text: 'Theme Basics',
          collapsed: false,
          items: [
            { text: 'Install and Activate the Theme', link: '/theme-basics/install-and-activate-the-theme' },
            { text: 'Editing Your Theme', link: '/theme-basics/editing-your-theme' },
            { text: 'Updating Your Theme', link: '/theme-basics/updating-theme' },
            { text: 'Using Sections Responsibly', link: '/theme-basics/using-sections-responsibly' },
            { text: 'SEO Best Practices', link: '/theme-basics/seo-best-practices' },
            { text: 'Changing Default Theme Content', link: '/theme-basics/changing-default-theme-content' },
            { text: 'Understanding Sections and Blocks', link: '/theme-basics/understanding-sections-and-blocks' },
            { text: 'Alternate Templates', link: '/theme-basics/alternate-templates' },
            { text: 'Metafields and Metaobjects', link: '/theme-basics/metafields' },
            { text: 'App Embeds and Blocks', link: '/theme-basics/app-embeds-and-blocks' },
            { text: 'Combining Templates with Metafields', link: '/theme-basics/combining-alternate-templates-with-metafields' },
            { text: 'Languages and Currencies', link: '/theme-basics/languages-and-currencies' },
            { text: 'Image Recommendations', link: '/theme-basics/image-recommendations' },
            { text: 'Remove Powered by Shopify', link: '/theme-basics/remove-powered-by' },
            { text: 'Access Collaborator Code', link: '/theme-basics/access-collaborator-code' },
            { text: 'Hiring a Shopify Expert', link: '/theme-basics/hiring-shopify-expert' },
            { text: 'Content per Market', link: '/theme-basics/contextualizing-content-per-market' },
            { text: 'B2B Features', link: '/theme-basics/b2b-features' }
          ]
        },
        
        {
          text: 'Theme Specific Guides',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/theme-guides/' },
            { text: 'Verve', link: '/theme-guides/verve' }
          ]
        },
        {
          text: 'Going Further',
          collapsed: false,
          items: [
            { text: 'Advanced Customizations', link: '/advanced/advanced-customizations' },
            { text: 'Advanced Guides', link: '/advanced/advanced-guides' },
            { text: 'Using Apps', link: '/advanced/using-apps' }
          ]
        },
        {
          text: 'Contact',
          link: '/contact'
        }
      ]
    },

    socialLinks: [],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Shopify Themes Documentation',
      copyright: '© 2026 GirlElements. All rights reserved.'
    },

    outline: {
      level: [2, 4],
      label: 'On this page'
    },

    editLink: {
      pattern: 'https://github.com/houdangdang/shopify-support/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
