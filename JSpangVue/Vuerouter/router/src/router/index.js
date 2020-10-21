import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Hi2 from '@/components/Hi2'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld,
    },{
      path:'/params/:newsId/:newsTitle',
      component:Params,
    },{
      path:'/goHome',
      redirect:'/'
    },{
      path:'/goParams/:newsId/:newsTitle',
      redirect:'/params/:newsId/:newsTitle' 
    },{
      path:'/hi2',
      component:Hi2,
      alias:'imh2',
    },{
      path:'*',
      component:Error,
    }
  ]
})

