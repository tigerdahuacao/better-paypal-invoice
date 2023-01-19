import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router'
 
const routes = [
  {
    path: '/invoice',
    component: ()=> import('../View/Invoice'),
  },
  {
    path: '/oldHtml',
    component: ()=>import('../View/OldHtml'),
  },
  // 重定向
  {
    path: '/', 
    redirect: '/invoice' 
  }
]
 
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),

//   routes
// })

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
 
export default router;