import { createRouter, createWebHistory } from 'vue-router'
import Detail from '../views/Details.vue'
import Home from '../views/Home.vue'
import Upcoming from '../views/upcoming.vue'
import Search from '../views/search.vue'
import TopDownloads from '../views/topdownloads.vue'

const routes = [

  {
    path:"/top-dwonloads",
    name:"topDownloads",
    component:TopDownloads,
  },

  {
  path:'/search/:query',
  name:'Search',
  component:Search,
  props:true

  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
path:'/detail/:id',
name:'Detail',
component:Detail,
props:true

  },
  {
   path:'/upcoming',
   name:'Upcoming',
   component:Upcoming,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
