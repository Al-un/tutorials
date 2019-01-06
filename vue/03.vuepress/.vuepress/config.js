// Inspired from
// https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/.vuepress/config.js

module.exports = {
  // Build
  base: '/tutorials/deploy/vue/vuepress/',
  // base: '/',
  dest: 'dist/',
  // Locales
  locales: {
    '/': {
      lang: 'en-GB',
      title: 'VuePress test',
      description: 'Testing VuePress and stuff'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Test de VuePress',
      description: 'Test de VuePress et consort'
    }
  },

  // Plugin
  plugins: [
    // PWA FTW
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],

  // Default theme configuration
  themeConfig: {
    // Github
    repo: 'Al-un/tutorials/tree/master/vue/03.vuepress',
    // Search box
    search: false,
    // Last update
    lastUpdated: 'Last Updated',
    // I18n
    locales: {
      '/': {
        // Definition
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on Github',
        lastUpdated: 'Last updated',
        // Navigation
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'Vocaloid',
            items: [
              { text: 'Hatsune Miku', link: '/vocaloid/miku' },
              { text: 'Megurine Luka', link: '/vocaloid/luka' },
              { text: 'Kagamine Len/Rin', link: '/vocaloid/kagamine' }
            ]
          },
          { text: 'About', link: '/about' }
        ],
        // Sidebars
        sidebar: {
          '/vocaloid/': [
            ['', 'Introduction'],
            ['miku', 'Hatsune Miku'],
            ['luka', 'Megurine Luka'],
            ['kagamine', 'Kagamine Rin/Len']
          ]
        }
      },
      '/fr/': {
        // Definition
        label: 'Français',
        selectText: 'Langues',
        editLinkText: 'Editer cette page sur Github',
        lastUpdated: 'Dernière mise à jour',
        // Navigation
        nav: [
          { text: 'Accueil', link: '/fr/' },
          {
            text: 'Vocaloid',
            items: [
              { text: 'Hatsune Miku', link: '/fr/vocaloid/miku' },
              { text: 'Megurine Luka', link: '/fr/vocaloid/luka' },
              { text: 'Kagamine Len/Rin', link: '/fr/vocaloid/kagamine' }
            ]
          },
          { text: 'A propos', link: '/fr/about' }
        ],
        // Sidebars
        sidebar: {
          '/fr/vocaloid/': [
            ['', 'Introduction'],
            ['miku', 'Hatsune Miku'],
            ['luka', 'Megurine Luka'],
            ['kagamine', 'Kagamine Rin/Len']
          ]
        }
      }
    }
  },

  markdown: {
    // https://vuepress.vuejs.org/guide/markdown.html#line-numbers
    lineNumbers: true
  }
};
