export default {
  title: 'Yo-kai Watch Minecraft Mod Wiki',
  description: 'Complete documentation for the Yo-kai Watch For Minecraft Mod',
  base: '/YokaiWatchForMinecraftModWiki/',
  
  themeConfig: {
    // 🔍 Barre de recherche (activée par défaut)
    search: true,
    
    // 📱 Navigation en haut
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation' }
    ],
    
    sidebar: [
      {
        text: '🚀 Get Started',
        items: [                    // ✅ Avec `items`
          { text: 'Installation', link: '/installation' },
          { text: 'Configuration', link: '/config' }
        ]
      },
      {
        text: '⌚ Items',            // ✅ Section avec sous-pages
        items: [
          { text: 'Items list', link: '/items/' }
        ]
      },
      {
        text: '🧱 Blocks',          // ✅ Section avec sous-pages  
        items: [
          { text: 'Blocks list', link: '/blocks/' }
        ]
      },
      {
        text: '🎼 Musics',          // ✅ Section avec sous-pages
        items: [
          { text: 'Musics list', link: '/musics/' }
        ]
      }
    ],
    
    // 📄 Footer (visible sans sidebar)
    footer: {
      message: 'Yo-kai Watch Minecraft Mod par Dragoteen',
      copyright: 'Copyright © 2026 Dragoteen'
    },
    
    locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr/guide' // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
  }
}
