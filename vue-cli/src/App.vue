<template>
  <div id="app">
    <ul>
      <!-- 使用router-link来代替a标签跳转,to相当于href. -->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">HelloWorld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>




export default {
  name: 'App',
  data(){
    return {
      
      title:"传值，包括(boolean,string,number)"
    }
  },
  methods:{
   
  }
  
}
</script>

<style scoped>

</style>
