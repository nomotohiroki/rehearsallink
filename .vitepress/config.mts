import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "RehearsalLink",
  description: "リハーサル録音の『あの指示、どこだっけ？』をゼロに。",
  base: "/rehearsal-link/",
  themeConfig: {
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
