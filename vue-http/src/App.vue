<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
   


    //fetch
    // fetch("/apis/test/testToken.php", {
    //     method: "post",
    //     headers: {
    //       "Content-type": "application/json",
    //       token: "f4c902c9ae5a2a9d8f84868ad064e706"
    //     },
    //     body: JSON.stringify({ username: "henry", password: "321321" })//必须为字符串
    //   })
    //   .then(result => {  
    //     console.log(result)
    //     return result.json()
    //   })
    //   .then(data => {
    //     console.log(data)
    //   })

      // axios
      // cnpm install axios
      this.$axios.post('/apis/test/testToken.php',{username: "hello", password: "123456"}).then(data=>{
        console.log(data)
      })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
