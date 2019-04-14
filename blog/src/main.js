import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)

// 自定义指令
Vue.directive('rainbow', { // rainbow自定义指令名称
  // eslint-disable-next-line indent
    bind (el, binding, vnode) {
    el.style.color = '#' + Math.random().toString(16).slice(2, 8)
  }
})

Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1260px'
    } else if (binding.value === 'narror') {
      el.style.minWidth = '300px'
    }
    if (binding.arg === 'cloum') {
      el.style.background = '#6677cc'
      el.style.padding = '20px'
    }
  }
})

// 自定义过滤器
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('snapit', function (value) {
  return value.slice(0, 100) + '...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
