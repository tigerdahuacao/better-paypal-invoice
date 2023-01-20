import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router'
 
const routes = [
  {
    path: '/invoice/:invoice_id',
    component: ()=> import('../View/Invoice'),
  },
  {
    path: '/oldHtml',
    component: ()=>import('../View/OldHtml'),
  },
  {
    path: '/test',
    component: ()=>import('../View/TestPage'),
  },
  // 重定向
  {
    path: '/', 
    redirect: '/test' 
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