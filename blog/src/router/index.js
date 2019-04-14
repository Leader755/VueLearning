import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlog from '@/components/SingleBlog'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ShowBlogs',
    component: ShowBlogs
  }, {
    path: '/add',
    name: 'AddBlog',
    component: AddBlog
  }, {
    path: '/blog/:id',
    name: 'SingleBlog',
    component: SingleBlog
  }

  ],
  mode: 'history'
})
