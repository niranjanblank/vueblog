<template>
 <div >
   <app-header></app-header>
   <router-view></router-view>
 </div>
</template>

<script>

import addBlog from './components/addBlog'
import showBlogs from './components/showBlogs'
import listBlogs from './components/listBlogs'
import header from './components/header'
export default {
  name: 'App',
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header
  }
}
</script>

<style>
body{
  margin:0;
  height:100%;
  font-family: 'Calibri';
}

</style>
