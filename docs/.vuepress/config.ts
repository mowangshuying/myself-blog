import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
    navbar: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: 'echo',
        link: '/echo/',
      },
      {
        text: '帮助',
        link: '/help.html',
      },
    ],
  }),
  // lang:'zh-CN',
  title: "mowangshuying's blog",
  description: '莫忘输赢的博客',
})