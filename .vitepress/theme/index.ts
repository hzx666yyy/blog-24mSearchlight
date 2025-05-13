import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import {watch} from "vue";
// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

import { useLive2d } from 'vitepress-theme-website'

import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

import Mycomponent from "./components/Mycomponent.vue"
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import MyLayout from "./components/MyLayout.vue";
import DataPanel from "./components/DataPanel.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"

export default {
    extends: DefaultTheme,
    setup() {

        //看板娘 //
        useLive2d({
            enable: true,
            model: {
                url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/potion-Maker-Pio/index.json'
            },
            display: {
                position: 'left',
                width: '135px',
                height: '200px',
                xOffset: '35px',
                yOffset: '5px'
            },
            mobile: {
                show: true
            },
            react: {
                opacity: 0.8
            }
        })

        // Get frontmatter and route
        const { frontmatter } = useData();
        const route = useRoute();

        // giscus配置
        giscusTalk({
                repo: "hzx666yyy/blog-24mSearchlight", //仓库
                repoId: 'R_kgDOOokvjg', //仓库ID
                category: 'General', // 讨论分类
                categoryId: 'DIC_kwDOOokvjs4CqEvT', //讨论分类ID
                mapping: 'pathname',
                inputPosition: 'bottom',
                lang: 'zh-CN',
            },
            {
                frontmatter, route
            },
            //默认值为true，表示已启用，此参数可以忽略；
            //如果为false，则表示未启用
            //您可以使用“comment:true”序言在页面上单独启用它
            true
        );
    },
    Layout: MyLayout,
    enhanceApp({app , router }) {

        // 注册全局组件
        app.component('Mycomponent' , Mycomponent)
        app.component('Linkcard' , Linkcard)
        app.component('HomeUnderline' , HomeUnderline)
        app.component('DataPanel' , DataPanel)
        app.component('update' , update)
        app.component('ArticleMetadata' , ArticleMetadata)

        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname === '/'),
                { immediate: true },
            )
        }
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }

    },
}

// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
            :root {
              animation: rainbow 12s linear infinite;
            }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}

