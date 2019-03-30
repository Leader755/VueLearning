import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routers'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // return { x: 0, y: 100 }//x.y轴滚动多少距离
        // return { selector: '.btn' } //选择器,滚动到指定元素
        if (savedPosition) { //浏览器后退时，页面自动滚到历史记录时的位置
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }

    }
})

// router.beforeEach((to, from, next) => {
//     document.body.scrollTop = 200;
//     next()
// });

new Vue({
    el: '#app',
    router,
    render: h => h(App)

})