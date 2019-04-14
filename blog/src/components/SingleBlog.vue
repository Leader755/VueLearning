<template>
  <div class="single-blog">
    <h1>博客详情</h1>
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
    </ul>
    <button @click="deleteSingleBlog">删除博客</button>
    <router-link :to="'/edit/'+id">编辑</router-link>
  </div>
</template>

<script>
export default {
  name: 'sing-blog',
  data () {
    return {
      // id: 4,
      id: this.$route.params.id,
      blog: {}
    }
  },
  methods: {
    deleteSingleBlog () {
      // 删除博客
      this.$http
        .delete(
          'https://vue-blog-c2af7.firebaseio.com/post/' + this.id + '.json'
        )
        .then(() => {
          // console.log(data)
          this.$router.push({ path: '/' })
        })
    }
  },
  created () {
    console.log(this.id)

    this.$http
      .get('https://vue-blog-c2af7.firebaseio.com/post/' + this.id + '.json')
      .then(data => {
        console.log(data)
        return data.json()
        // this.blog = data.body
      })
      .then(data => {
        this.blog = data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.single-blog {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  border: 1px dotted #aaaaaa;
}
a{
	color:#000;
}
</style>
