import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: '/index',
    meta: { title: 'home'},
    children: [
      {
        path: 'index',
        name: 'index',
        meta: { title: '首页'},
        component: Home,
      },
      {
        path: 'index2',
        name: 'index2',
        meta: { title: '首页2'},
        component: Home,
      },
      {
        path: 'index3',
        name: 'index4',
        meta: { title: '首页3'},
        component: Home,
        children:[
          {
            path: 'ab1',
            name: 'ab2',
            meta: { title: '关于1'},
            component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
          },
          {
            path: 'ab2',
            name: 'ab3',
            meta: { title: '关于2'},
            component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
          }
        ]
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
