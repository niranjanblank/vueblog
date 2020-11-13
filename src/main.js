import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes : Routes,
  mode: 'history'
})

Vue.config.productionTip = false


//custom directives
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//       el.style.color = "#"+ Math.random().toString().slice(2,8);
//   }
// })
Vue.directive('theme',{
  bind(el,binding,vnode){
      if (binding.value =='wide'){
        el.style.maxWidth = "1200px";
      }
      else if (binding.value=='narrow'){
        el.style.maxWidth = "800px";
      }

      if (binding.arg == 'column'){
        el.style.background = '#abc';
        el.style.padding = '20px';
      }
      
  }
})

//Filters
// Vue.filter('to-uppercase',(value)=>{
//   return value.toUpperCase()
// })
Vue.filter('snippet',(value)=>{
  return value.slice(0,100)+'...'
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
