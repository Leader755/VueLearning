//实例化对象
new Vue({
    el: '#vue-app', //=需要获取的元素，一定是html中的根容器元素
    data: { //用于数据的存储
        name: 'Mr彭',
        job: 'web开发',
        website: 'httP://www.leader755.com:',
        websitetag: '<a href="http://www.leader755.com">前端开发 </a>'
    },
    methods: { //用于存贮方法
        greet: function(time) { //方法中直接用this指针调用data中的内容
            return 'good ' + time + " " + this.name + "!"
        },
    },

})

/******
 *data-binding:给属性绑定对应的值
 * 
 * 
 */