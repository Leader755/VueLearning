<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">

            <div class="background">
                <h1>欢迎大家品尝pizza</h1>
                <h2>这里有你非常喜欢的Pizza</h2>
                <button @click="goTomenu" class="btn btn-success">Let's go！</button>
            </div>
        </div>

        <h1>Home</h1>
        
    </div>
</template>
<script>
export default {
    methods:{
        goTomenu(){
            //跳转到上一次浏览的页面
            // this.$router.go(-1)

            //指定跳转的地址
            // this.$router.replace('/menu')

            // 跳转到指定的路由名字下
            // this.$router.replace({name:'menuLink'})

            //通过push跳转
            // this.$router.push('/menu')
            this.$router.push({name:'menuLink'})
        }
    }
}
</script>
<style >
   #home{
       background: url('../../src/assets/pizza1.jpg');
       height: 85vh;
       padding: 10%;

   }
   h1,h2{
       margin: 6%;
   }
   .background{
       background: #eee;
       opacity: 0.8;
       max-width: 70vw;
       margin:  0 auto ;
   }
</style>