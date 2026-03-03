import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "RehearsalLink",
  description: "リハーサル録音の『あの指示、どこだっけ？』をゼロに。",
  base: "/rehearsallink/",
  head: [['link', { rel: 'icon', href: '/rehearsallink/hero-icon-128.png' }]],
  themeConfig: {
    logo: '/hero-icon-128.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '使い方', link: '/guide/' },
      { text: 'Tips', link: '/guide/tips' }
    ],
    sidebar: [
      {
        text: 'ガイド',
        items: [
          { text: 'はじめに', link: '/guide/' },
          { text: '活用Tips', link: '/guide/tips' }
        ]
      }
    ]
  }
})
