import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'


// 二级路由
import Concat from './components/about/Concact'
import Delivery from './components/about/Delivery'
import OrdringGuide from './components/about/OrdringGuide'
import History from './components/about/History'

// 三级路由
import Phone from './components/about/cancat/Phone.vue'
import PersonName from './components/about/cancat/PersonName.vue'



Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'homeLink', component: Home },
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/admin', name: 'adminLink', component: Admin },
    {
        path: '/about',
        name: 'aboutLink',
        redirect: '/about/cancat',
        component: About,
        children: [{
                path: '/about/cancat',
                name: 'concatLink',
                redirect: '/personname',
                component: Concat,
                children: [
                    { path: '/phone', name: 'phoneNumber', component: Phone },
                    { path: '/personname', name: 'personName', component: PersonName },
                ]
            },
            { path: '/history', name: 'diveryLink', component: Delivery },
            { path: '/delivery', name: 'historyLink', component: History },
            { path: '/ordringGuid', name: 'ordingguistLink', component: OrdringGuide }
        ]
    },
    { path: '/login', name: 'loginLink', component: Login },
    { path: '/register', name: 'registerLink', component: Register },
    { path: '*', redirect: '/' } //发生错误时跳转至home

]


const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})