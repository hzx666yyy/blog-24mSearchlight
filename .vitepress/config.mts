
import { defineConfig } from 'vitepress'
import { nav,sidebar } from './theme/configs'
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog-24mSearchlight/",
  ignoreDeadLinks: true, // 忽略所有死链
  head: [['link', { rel: 'icon', href: '/blog-24mSearchlight/12.ico' }],
    ['script', { src: '/blog-24mSearchlight/live2d.js' }],
    ['script', { src: '/blog-24mSearchlight/busuanzi.pure.mini.js' }],
  ],
  lang: 'en-US',
  title: "blog-24mSearchlight",
  description: "个人学习记录",
  themeConfig: {
    returnToTopLabel: '返回顶部',
    // 返回顶部
    backToTop: {
      text: "返回顶部",
    },
    logo: '/12.ico',
    outlineTitle: '目录',
    outline: [2, 6],
    musicBall: {
      list:[
        { name: "永恒呼吸", src: "https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/%E6%B0%B8%E6%81%92%E5%91%BC%E5%90%B8%20-%20%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR%2CYU.flac" },
        { name: "呼唤落花之名", src: "https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/%E5%91%BC%E5%94%A4%E8%90%BD%E8%8A%B1%E4%B9%8B%E5%90%8D%20-%20MoreanP.mp3" },
        { name: "Believing", src: "https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/%28Believed%20Believes%29%20Believing%20%28Instrumental%29%20-%20%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR%2CDavid%20Lin%2CErik%20Castro.flac" },
        { name: "PRAGMATISM -RESURRECTION", src: "https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/PRAGMATISM%20-RESURRECTION-%20-%20Laur.flac" },
        { name: "Last", src: "https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/Last%20-%20onoken.flac" },
      ]
    },
    lastUpdated: true,
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hzx666yyy' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/673411581' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
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
  }

})
