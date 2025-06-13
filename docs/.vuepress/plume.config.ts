import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/favicon.svg',
  appearance: true,
  social: [
    { icon: 'github', link: 'https://github.com/useiife' },
  ],
  navbarSocialInclude: ['github'],
  // aside: true, // 页内侧边栏， 默认显示在右侧
  outline: [2, 3],
  copyright: false,
  prevPage: true,
  nextPage: true,
  createTime: false,
  footer: undefined,
  locales: {
    '/': {
      profile: undefined,
      navbar: enNavbar,
      notes: enNotes,
    },
    '/zh/': {
      profile: undefined,
      navbar: zhNavbar,
      notes: zhNotes,
    },
  },
})
