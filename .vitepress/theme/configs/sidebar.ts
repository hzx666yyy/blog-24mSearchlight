import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
    {text: 'C#',
        collapsed: false,
        items:[
            {text: 'C# 扩展方法',link: '/docs/CSharp/CSharp 扩展方法'}
        ]
    },
    {text: 'Unity',
        collapsed: false,
        items:[
            {text: 'Unity中世界坐标和本地坐标互相之间的转换',link: '/docs/Unity/Unity中世界坐标和本地坐标互相之间的转换'},
            {text: '2D图的Sprite分隔',link: '/docs/Unity/2D图的Sprite分隔'},
            {text: '2D角色动画',link: '/docs/Unity/2D角色动画'},
            {text: 'Unity中,实现人物下蹲的逻辑和动画',link: '/docs/Unity/Unity中,实现人物下蹲的逻辑和动画'},
            {text: '如何取消两个刚体物体之间的碰撞检测',link: '/docs/Unity/如何取消两个刚体物体之间的碰撞检测'},
            {text: '检测角色是否在与其他物体重叠',link: '/docs/Unity/检测角色是否在与其他物体重叠'},
        ]
    },
    { text: 'Linux',
        collapsed:false,
        items:[
            {text: 'linux',items: [
                    { text: 'Linux学习笔记', link: '/docs/Linux/Linux学习笔记' },
                    { text: 'yum的配置', link: '/docs/Linux/yum的配置' },
                    { text: '配置ip地址', link: '/docs/Linux/配置ip地址' },
                ]},
            {text:'docker',items:[
                    {text:'docker',link:'/docs/Linux/docker/docker'},
                    {text:'Docker可视化工具-portainer',link:'/docs/Linux/docker/Docker可视化工具-portainer'},
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