/**
 * @see https://theme-plume.vuejs.press/guide/document/
 */

/**
 * - `defineNoteConfig` 是用于定义单个 note 配置的帮助函数
 * - `defineNotesConfig` 是用于定义 notes 集合的帮助函数
 */
import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: en-US ======================= */

const enGuideNote = defineNoteConfig({
  dir: 'guide',
  link: '/guide/',
  sidebar: [
    {
      text: 'Quick Start',
      collapsed: false,
      items: [
        { text: 'Intro', link: '/guide/intro/' },
        { text: 'Installation', link: '/guide/installation/' },
        { text: 'Use', link: '/guide/use/' },
      ],
    },
    {
      text: 'Usage',
      collapsed: false,
      items: [
        { text: 'Vue', link: '/guide/usage/vue/' },
        { text: 'React', link: '/guide/usage/react/' },
        { text: 'Angular', link: '/guide/usage/angular/' },
        { text: 'Svelte', link: '/guide/usage/svelte/' },
        { text: 'Solid.js', link: '/guide/usage/solid-js/' },
      ],
    },
    {
      text: 'API',
      collapsed: false,
      items: [
        { text: "useIIFE()", link: '/guide/api/use-iife/' },
      ],
    },
  ],
})

export const enNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [enGuideNote],
})

/* =================== locale: zh-CN ======================= */

const zhGuideNote = defineNoteConfig({
  dir: 'guide',
  link: '/guide/',
  sidebar: [
    {
      text: '快速开始',
      collapsed: false,
      items: [
        { text: '介绍', link: '/zh/guide/intro/' },
        { text: '安装', link: '/zh/guide/installation/' },
        { text: '使用', link: '/zh/guide/use/' },
      ],
    },
    {
      text: '用法',
      collapsed: false,
      items: [
        { text: 'Vue', link: '/zh/guide/usage/vue/' },
        { text: 'React', link: '/zh/guide/usage/react/' },
        { text: 'Angular', link: '/zh/guide/usage/angular/' },
        { text: 'Svelte', link: '/zh/guide/usage/svelte/' },
        { text: 'Solid.js', link: '/zh/guide/usage/solid-js/' },
      ],
    },
    {
      text: 'API',
      collapsed: false,
      items: [
        { text: "useIIFE()", link: '/zh/guide/api/use-iife/' },
      ],
    },
  ],
})
/**
 * 导出所有
 */
export const zhNotes = defineNotesConfig({
  dir: 'zh/notes',
  link: '/zh/',
  notes: [zhGuideNote],
})

