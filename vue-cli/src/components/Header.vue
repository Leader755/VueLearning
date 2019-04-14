<template>

  <header v-on:click="changetitle">
    <h1>{{title}}{{title1}}</h1>
  </header>
</template>

<script>
export default {
  name: "app-header",
  props: {
    //标准写法
    title: {
      type: String
    }
  },
  data() {
    return {
      title1: "Vue.js的Demo"
    }
  },
  methods:{
      changetitle:function(){
          // this.title="我已经改变了";
          //注册了事件
          this.$emit('titleChanged',"子向父组件传值");//方法名，需要传递的参数
          /***
            使用$emit向父组件传递一个方法（'方法名'，'传递的值'）
          
           */
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  text-align: center;
}
</style>
