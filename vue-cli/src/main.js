// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
// import Users from './components/Users' //引入Users组件

Vue.config.productionTip = false
Vue.use(VueRouter) //使用路由
Vue.use(VueResource) //使用http

// 配置路由基本项

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/helloworld', component: HelloWorld }
    ],
    //自定义路由，去除 #
    mode: 'history'
})

//将Users组件注册为全局组件，在别的组件中通过<users>标签来使用Users组件
// Vue.component("users", Users)

/* eslint-disable no-new */
new Vue({
    router, //使用router
    el: '#app',
    components: { App },
    template: '<App/>'
})