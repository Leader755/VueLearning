// var data = {
//     name: 'herry'
// };

//组件
Vue.component("getting", {
    template: `<p>{{name}}大家好
    <button @click="changName">改名</button>
    </p>
    `,
    data: function() {
        return {
            name: '鹿晗'
        }
    },
    methods: {
        changName: function() {
            this.name = 'hERRY';
        }
    },
})

new Vue({
    el: "#vue-app-one",
})
new Vue({
    el: "#vue-app-two"
})