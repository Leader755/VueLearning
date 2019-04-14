<template>

  <div class="users">
    <ul>
      <li v-for="(user,index) in users"  :key="index" >
       <h2>{{user.name}}</h2>
       <h3 >{{user.email}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteuser">删除</button>
  </div>
</template>

<script>
export default {
  name: 'users',//组件自身的递归调用，就是在当前组件中，调用组件自己
  // props:["users"],
  props:{//标准写法
    users:{
      type:Array,//类型
      required:true//必填
    },
   
  },
  data () {
    return {
     
    }
  },
  methods:{
    deleteuser:function(){
      this.users.pop();//删除
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }
  li{
   /* flex-grow: 1; //自动撑满整行 */
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #000;
    margin: 20px;
  }
</style>
