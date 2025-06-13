/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'
import { version } from '../../package.json'

export const enNavbar = defineNavbarConfig([
  {
    text: 'Guide',
    icon: 'icon-park-outline:guide-board',
    link: '/guide/intro/',
    activeMatch: '^/guide/',
  },
  {
    text: 'Generate',
    icon: 'fluent-mdl2:provisioning-package',
    link: '/generate/',
  },
  {
    text: 'Playground',
    icon: 'ix:runtime-play',
    link: '/playground/',
  },
  {
    text: 'More',
    icon: 'icon-park-outline:more-three',
    items: [
      {
        text: 'Repository',
        items: [
          { text: 'GitHub', link: 'https://github.com/useiife/useiife', icon: 'simple-icons:github' },
          { text: 'Gitee', link: 'https://gitee.com/useiife/useiife', icon: 'simple-icons:gitee' },
          { text: 'Npm', link: 'https://www.npmjs.com/package/useiife', icon: 'simple-icons:npm' },
        ],
      },
      {
        text: 'Other',
        items: [
          { text: 'Blog', link: 'https://www.lufuhu.com/', icon: 'simple-icons:blogger' },
          { text: 'Toy-Kit', link: 'https://tk.lufuhu.com/', icon: 'material-symbols:folder-code' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    badge: 'New',
    items: [
      { text: 'Changelog', link: '/changelog/' },
      { text: 'Contributing', link: '/contributing/' },
    ],
  },
])

export const zhNavbar = defineNavbarConfig([
  {
    text: '指南',
    icon: 'icon-park-outline:guide-board',
    link: '/zh/guide/intro/',
    activeMatch: '^/zh/guide/',
  },
    {
    text: '在线生成',
    icon: 'fluent-mdl2:provisioning-package',
    link: '/zh/generate/',
  },
  {
    text: '演练场',
    icon: 'ix:runtime-play',
    link: '/zh/playground/',
  },
  {
    text: '更多',
    icon: 'icon-park-outline:more-three',
    items: [
      {
        text: '仓库',
        items: [
          { text: 'GitHub', link: 'https://github.com/useiife/useiife', icon: 'simple-icons:github' },
          { text: 'Gitee', link: 'https://gitee.com/useiife/useiife', icon: 'simple-icons:gitee' },
          { text: 'Npm', link: 'https://www.npmjs.com/package/useiife', icon: 'simple-icons:npm' },
        ],
      },
      {
        text: '其他',
        items: [
          { text: 'Blog', link: 'https://www.lufuhu.com/', icon: 'simple-icons:blogger' },
          { text: 'Toy-Kit', link: 'https://tk.lufuhu.com/', icon: 'material-symbols:folder-code' },
        ],
      },
    ],
  },
  {
    text: `${version}`,
    icon: 'codicon:versions',
    badge: '新',
    items: [
      { text: '更新日志', link: '/changelog/' },
      { text: '参与贡献', link: '/zh/contributing/' },
    ],
  },
])

