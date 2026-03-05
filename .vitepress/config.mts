import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "RehearsalLink",
  description: "リハーサル録音の『あの指示、どこだっけ？』をゼロに。",
  base: "/rehearsallink/",
  head: [['link', { rel: 'icon', href: '/rehearsallink/icon-128.png' }]],
  themeConfig: {
    logo: '/icon-128.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '使い方', link: '/guide/' },
      { text: 'Tips', link: '/guide/tips' },
      { text: 'プライバシー', link: '/privacy' }
    ],
    sidebar: [
      {
        text: 'ガイド',
        items: [
          { text: '詳細ガイド', link: '/guide/' },
          { text: '活用Tips', link: '/guide/tips' }
        ]
      }
    ],
    footer: {
      message: 'All rights reserved. | <a href="https://buymeacoffee.com/hirokinomoto" target="_blank" rel="noopener">コーヒーをおごる ☕️</a>',
      copyright: 'Copyright © 2026 Hiroki Nomoto'
    }
  }
})
