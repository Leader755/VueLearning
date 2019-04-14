<template>
  <div v-theme:cloum="'wide'" class="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div  class="single-blog" v-for="(blog,index) in filteredBlogs" :key="index">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title|to-uppercase}}</h2>
      </router-link>

      <article>{{blog.content | snapit}}</article>

    </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created () {
    // https://jsonplaceholder.typicode.com/posts
    // './../../static/posts.json'请求本地json文件，本地json需要放在statics文件夹下
    this.$http.get('https://vue-blog-c2af7.firebaseio.com/post.json').then((data) => {
      console.log(data.json())
      return data.json()
      // this.blogs = data.body.slice(0, 10)
      // console.log(this.blogs)
    }).then((data) => {
      var blogsArry = []
      for (let i in data) {
        console.log(i + '-----------' + data[i])
        data[i].id = i// 赋值一个id
        blogsArry.push(data[i])
        console.log(blogsArry)
        this.blogs = blogsArry
        console.log(this.blogs)
      }
    })
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  },
  filters: {
    // 'to-uppercase': function (value) {
    //   return value.toUpperCase()
    // }
    // 2种写法都正确
    toUppercase (value) {
      return value.toUpperCase()
    }
  },
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.color = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .show-blogs {
        max-width: 800px;
        margin: 0 auto;
    }

    .single-blog {
        background: #ccc;
        padding: 20px 10px;
        margin: 20px auto;
        border: 1px dotted #aaa;
    }
    .show-blogs a{
      color:#444;
      text-decoration: none;

    }
    input[type='text']{
      padding: 8px;
      width: 100%;
  box-sizing: border-box;
    }

</style>
