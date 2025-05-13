import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
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
]