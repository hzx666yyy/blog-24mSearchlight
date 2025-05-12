import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog-24mSearchlight/",
  ignoreDeadLinks: true, // 忽略所有死链
  head: [['link', { rel: 'icon', href: '/12.ico' }]],
  lang: 'en-US',
  title: "blog-24mSearchlight",
  description: "个人学习记录",
  themeConfig: {
    logo: '/12.ico',
    outlineTitle: '目录',
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux',items:[
          {text: 'linux',items: [
              { text: 'Linux学习笔记', link: '/docs/Linux/Linux学习笔记' },
              { text: 'yum的配置', link: '/docs/Linux/yum的配置' },
              { text: '配置ip地址', link: '/docs/Linux/配置ip地址' },
            ]},
          {text:'docker',items:[
              {text:'docker',link:'/docs/Linux/docker/docker'},
            ]}
        ] },
      { text: '计算机基础',items:[
          { text: '计算机网络', items: [
              {text: '计算机网络笔记',link: '/docs/计算机基础/计算机网络学习笔记/计算机网络学习笔记.md'}
            ] },
        ] },

      { text: '工具使用',items:[
          { text: 'Google搜索语法', link: '/docs/工具使用/Google搜索语法' },
          { text: 'markdown使用笔记', link: '/docs/工具使用/markdown使用笔记' },
        ] },

      { text: '遇到的问题',items:[
          { text: 'github连接超时的解决办法', link: '/docs/problem/github连接超时的解决办法' },
        ] }
    ],

    sidebar: [
      { text: 'Linux',items:[
          {text: 'linux',items: [
              { text: 'Linux学习笔记', link: '/docs/Linux/Linux学习笔记' },
              { text: 'yum的配置', link: '/docs/Linux/yum的配置' },
              { text: '配置ip地址', link: '/docs/Linux/配置ip地址' },
            ]},
          {text:'docker',items:[
              {text:'docker',link:'/docs/Linux/docker/docker'},
            ]}
        ] },
      { text: '计算机基础',
        collapsed: false
        ,items:[
          { text: '计算机网络',
            items: [
              {text: '计算机网络笔记',link: '/docs/计算机基础/计算机网络学习笔记/计算机网络学习笔记.md'}
            ] },
        ] },
      { text: '工具使用',
        collapsed: false,
        items:[
          { text: 'Google搜索语法', link: '/docs/工具使用/Google搜索语法' },
          { text: 'markdown使用笔记', link: '/docs/工具使用/markdown使用笔记' },
        ] },
      {
        text: '遇到的问题',
        collapsed: false,
        items: [
          { text: 'github连接超时的解决办法', link: '/docs/problem/github连接超时的解决办法' },
        ]
      }
    ],

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
  },

})
