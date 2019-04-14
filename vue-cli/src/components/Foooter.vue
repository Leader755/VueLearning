<template>
  <header>
      <h1>{{title}}{{title1}}</h1>

  </header>
</template>

<script>
    export default {
        name: 'app-footer',
        props: { //标准写法
            title: {
                type: String,

            }
        },
        data() {
            return {
                title1: "vue.js"
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        background: lightgreen;
        padding: 10px;
    }
    h1{
        text-align: center;
    }
</style>