<template>
    <div id="show-blogs">
        <h1> All Blog Articles </h1>
        <input type="text" v-model="search" placeholder="Search blogs" class="search-blog">
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <router-link class="hyper" v-bind:to="'/blog/'+blog.id"><h2 >{{blog.title | to-uppercase}}</h2></router-link>
            <article>{{blog.content | snippet}}</article>
        </div>
    </div>
</template>

<style scoped>
#show-blogs
{
    max-width:800px;
    margin:0 auto;
    
}

.hyper{
    text-decoration: none;
}

.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing:border-box;
    background:#eee;
}
.search-blog{
    padding:20px;
    margin:20px 0;
    box-sizing:border-box;
 
}

</style>
<script>
import searchMixin from '../mixins/searchMixin'
export default {
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    methods:{

    },
    created(){
        this.$http.get('https://vuepractice-f4374.firebaseio.com/posts.json')
        .then((data)=>{
            return data.data
        })
        .then((data)=>{
            var blogsArray = []
        for (let key in data)
        {
               
               data[key].id=key
               blogsArray.push(data[key])
        }
        // console.log(blogsArray)
        this.blogs = blogsArray
        })
       
    },
    computed: {
        
    },
    filters: {
        'to-uppercase': (value)=>{
            return value.toUpperCase()
        }
    },
    directives:{
        'rainbow': {
            bind(el,binding,vnode){
                 el.style.color = "#"+ Math.random().toString().slice(2,8);
            }
        }
    },
    mixins: [searchMixin]

}
</script>