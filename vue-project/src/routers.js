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

//通过export导出
export const routes = [{
        path: '/',
        name: 'homeLink',
        components: {
            default: Home,
            'orderingGuide': OrdringGuide,
            'delivery': Delivery,
            'history': History
        }
    },
    { path: '/menu', name: 'menuLink', component: Menu },
    {
        path: '/admin',
        name: 'adminLink',
        component: Admin,
        // beforeEnter: (to, from, next) => { // 路由独享守卫
        //     alert('非登录状态不能访问此页面');
        //     next(false); //此方式不会跳转

        //     判断store.gettes.isLogin === false
        //     if (to.path == "/login" || to.path == '/register') {
        //         next();
        //     } else {
        //         alert('还没登录，请先登录');
        //         next('/login');
        //     }

        // }
    },
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