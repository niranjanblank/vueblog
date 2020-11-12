<template>
    <div id="show-blogs" v-theme="'wide'">
        <h1> All Blog Articles </h1>
        <input type="text" v-model="search" placeholder="Search blogs" class="search-blog">
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <h2 v-rainbow >{{blog.title | to-uppercase}}</h2>
            <article>{{blog.body | snippet}}</article>
        </div>
    </div>
</template>

<style scoped>
#show-blogs
{
    max-width:800px;
    margin:0 auto;
    
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
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(data=>{
            this.blogs = data.data.slice(0,10)
            console.log(this.blogs[0])
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