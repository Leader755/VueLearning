<template>
    <div>
       <div class="row mb-5">
           <div class="col-4">
               <!-- 导航 -->
                <div class="list-group mb-5">
                    <router-link tag="li" :to="{name:'historyLink'}">
                        <a class="list-group-item" list-group-item-action>历时订单</a>
                    </router-link>
                    <router-link tag="li" :to="{name:'concatLink'}">
                        <a class="list-group-item" list-group-item-action>联系我们</a>
                    </router-link>
                    <router-link tag="li" :to="{name:'ordingguistLink'}">
                        <a class="list-group-item" list-group-item-action>点餐文档</a>
                    </router-link>
                    <router-link tag="li" :to="{name:'diveryLink'}">
                        <a class="list-group-item" list-group-item-action>快递订单</a>
                    </router-link>
                </div>

           </div>
            <div class="col-8">
                <!-- 导航所对应的内容     -->
                <router-view></router-view>
             </div>
       </div>
    </div>
</template>
<style lang="">
    li{
        list-style: none;
    }
</style>