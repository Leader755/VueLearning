<template>
  <nav>
   <ul>
     <li>
       <router-link to="/" exact>博客</router-link>
       <router-link to="/add" exact>写博客</router-link>
       <router-link to="/blog" exact>博客详情</router-link>
     </li>
   </ul>
  </nav>
</template>
<script>

export default {
  components: {
    name: 'BlogHeader'
  }
}
</script>
<style lang="">
  ul{
    list-style: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
    color: #fff;
  }
  nav{
    background: red;
    padding: 30px 0;
    margin-bottom: 40px;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
  }
</style>
