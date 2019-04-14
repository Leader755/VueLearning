<template>
  <div id="app">
     <!--
        v-on:titleChanged="updateTitle($event)"
        绑定一个从子组件传递过来方法，并重新命名一个方法并接收从子组件传递的值
        一定是$event
      -->
    <app-header v-on:titleChanged="updateTitle" v-bind:title="title"></app-header>
    <h1 ></h1>
    <!-- 在App.vue里面 的template模板里 直接使用  <users></users>加载使用 -->
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Users from './Users'
import Header from './Header'
import Footer from './Foooter'



export default {
  name: 'home',
  data(){
    return {
      users:[],
      title:"传值，包括(boolean,string,number)"
    }
  },
  methods:{
    updateTitle:function(title){
      console.log(title);
      this.title=title;
    }
  },
  components:{
    'users':Users,
    // Users,
    "app-header":Header,
    "app-footer":Footer
  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
          console.log(data.body);
          this.users=data.body;
      })
  }
}
</script>

<style scoped>

</style>
