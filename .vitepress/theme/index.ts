import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

import { useLive2d } from 'vitepress-theme-website'

import { inBrowser,useRoute,useData } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';

import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'

import Mycomponent from "./components/Mycomponent.vue"
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import MyLayout from "./components/MyLayout.vue";
import DataPanel from "./components/DataPanel.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"

const playlist = [
    {
        name: '永恒呼吸',
        file: 'https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/%E6%B0%B8%E6%81%92%E5%91%BC%E5%90%B8%20-%20%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR%2CYU.flac',
    },
    {
        name: '呼唤落花之名',
        author: 'author2',
        file: 'https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/%E5%91%BC%E5%94%A4%E8%90%BD%E8%8A%B1%E4%B9%8B%E5%90%8D%20-%20MoreanP.mp3',
        hide: true
    },
    {
        name: 'Believing',
        file: 'https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/%28Believed%20Believes%29%20Believing%20%28Instrumental%29%20-%20%E5%A1%9E%E5%A3%AC%E5%94%B1%E7%89%87-MSR%2CDavid%20Lin%2CErik%20Castro.flac',
    },
    {
        name: 'PRAGMATISM',
        file: 'https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/PRAGMATISM%20-RESURRECTION-%20-%20Laur.flac',
    },
    {
        name: 'Last',
        file: 'https://24msearchlight.oss-cn-beijing.aliyuncs.com/music/Last%20-%20onoken.flac',
    },
]


export default {
    extends: DefaultTheme,
    setup() {

        //看板娘 //
        // useLive2d({
        //     enable: true,
        //     model: {
        //         url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/potion-Maker-Pio/index.json'
        //     },
        //     display: {
        //         position: 'left',
        //         width: '135px',
        //         height: '200px',
        //         xOffset: '35px',
        //         yOffset: '5px'
        //     },
        //     mobile: {
        //         show: true
        //     },
        //     react: {
        //         opacity: 0.8
        //     }
        // })

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
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
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

        vitepressMusic(playlist)

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

