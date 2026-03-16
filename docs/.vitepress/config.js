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
      { text: 'Installation', link: '/installation' },
      { text: 'Items', link: '/items' },
      { text: 'Blocks', link: '/blocks' },
      { text: 'Musics', link: '/musics' },
    ],
    
    // 📂 Sidebar (menu latéral)
    sidebar: [
      {
        text: '🚀 Get Started',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Configuration', link: '/config' }
        ]
      },
      {
        text: '⌚ Items',
       // collapsed: false,  // ouvert par défaut
        items: [
          { text: 'Liste complète', link: '/yokais/' },
          { text: 'Jibanyan', link: '/yokais/jibanyan' },
          { text: 'Komasan', link: '/yokais/komasan' }
        ]
      }
    ],
    
    // 📄 Footer (visible sans sidebar)
    footer: {
      message: 'Yo-kai Watch Minecraft Mod par Dragoteen',
      copyright: 'Copyright © 2026 Dragoteen'
    },
    
    // 🌐 Langues (plus bas)
    // ...
  }
}
