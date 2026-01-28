import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Shopify Themes",
  description: "Knowledge base for Verve themes on Shopify",
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
          text: 'Theme Basics',
          collapsed: false,
          items: [
            { text: 'Editing Your Theme', link: '/theme-basics/editing-theme' },
            { text: 'Using Metafields', link: '/theme-basics/metafields' },
            { text: 'Alternate Templates', link: '/theme-basics/alternate-templates' },
            { text: 'Updating Theme', link: '/theme-basics/updating-theme' },
            { text: 'Image Recommendations', link: '/theme-basics/image-recommendations' },
            { text: 'Remove Powered by Shopify', link: '/theme-basics/remove-powered-by' }
          ]
        },
        {
          text: 'Configuration',
          collapsed: true,
          items: [
            { text: 'General Settings', link: '/configuration/' },
            { text: 'Header', link: '/configuration/header' },
            { text: 'Mega Menu', link: '/configuration/mega-menu' },
            { text: 'Transparent Header', link: '/configuration/transparent-header' },
            { text: 'Products', link: '/configuration/products' },
            { text: 'Color Swatches', link: '/configuration/color-swatches' },
            { text: 'Custom Badges', link: '/configuration/custom-badges' },
            { text: 'Size Chart', link: '/configuration/size-chart' },
            { text: 'Variant Images', link: '/configuration/variant-images' },
            { text: 'Collections', link: '/configuration/collections' },
            { text: 'Products Filtering', link: '/configuration/filtering' },
            { text: 'Cart', link: '/configuration/cart' },
            { text: 'Search', link: '/configuration/search' },
            { text: 'Footer', link: '/configuration/footer' }
          ]
        },
        {
          text: 'Theme Specific Guides',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/theme-guides/' },
            { text: 'Prestige', link: '/theme-guides/prestige' },
            { text: 'Impact', link: '/theme-guides/impact' },
            { text: 'Focal', link: '/theme-guides/focal' },
            { text: 'Warehouse', link: '/theme-guides/warehouse' },
            { text: 'Stretch', link: '/theme-guides/stretch' }
          ]
        },
        {
          text: 'Going Further',
          collapsed: true,
          items: [
            { text: 'Advanced Customizations', link: '/advanced/customizations' },
            { text: 'Technical Documentation', link: '/advanced/technical-docs' },
            { text: 'Using Apps', link: '/advanced/using-apps' },
            { text: 'Internationalization', link: '/advanced/internationalization' }
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
      copyright: '© 2026 Verve. All rights reserved.'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    editLink: {
      pattern: 'https://github.com/your-repo/shopify-support/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
