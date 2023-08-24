import { defineConfig } from 'vitepress'
import zhConfig from './locales/zh.config.js'
export default defineConfig({
  base: '',
  title: "SMemory",
  description: "Documents",
  head: [
    [
      'link',
      { rel: 'icon', href: '/images/icon.png' }
    ]
  ],
  lastUpdated: true,
  srcDir: './src',
  locales: {
    root: zhConfig,
  },
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BNDong/Cnblogs-Theme-SimpleMemory' },
    ]
  },
  markdown: {
    lineNumbers: true
  }
})