import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import {watch} from "vue";
// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

import Mycomponent from "./components/Mycomponent.vue"
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import MyLayout from "./components/MyLayout.vue";
import backtotop from "./components/backtotop.vue"

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({app , router }) {
        // 注册全局组件
        app.component('Mycomponent' , Mycomponent)
        app.component('Linkcard' , Linkcard)
        app.component('HomeUnderline' , HomeUnderline)
        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname === '/'),
                { immediate: true },
            )
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