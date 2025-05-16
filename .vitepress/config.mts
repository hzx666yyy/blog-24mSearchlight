
import { defineConfig } from 'vitepress'
import { nav,sidebar } from './theme/configs'
import timeline from "vitepress-markdown-timeline";

import vue from '@vitejs/plugin-vue'
// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: "/blog-24mSearchlight/",
  ignoreDeadLinks: true, // 忽略所有死链
  head: [['link', { rel: 'icon', href: '/blog-24mSearchlight/12.ico' }],
    ['script', { src: '/blog-24mSearchlight/live2d.js' }],
  ],
  lang: 'en-US',
  title: "24mSearchlight′s Blog",
  description: "记录成长点滴",
  themeConfig: {
    returnToTopLabel: '返回顶部',
    // 返回顶部
    backToTop: {
      text: "返回顶部",
    },
    logo: '/12.ico',
    outlineTitle: '目录',
    outline: [1, 6],
    lastUpdated: true,
    //侧边栏文字更改(移动端) //
    sidebarMenuLabel:'目录',
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzx666yyy' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/673411581' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Evan You'
    },
    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },
  },//markdown配置
  markdown: {

    // 组件插入h1标题下
    config: (md) => {
      md.use(timeline);
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    }
  },
  // 站点地图
  sitemap: {
    hostname: 'https://hzx666yyy.github.io/blog-24mSearchlight/',
  },

})
