import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/page/TestView.vue'

const routes = [
    {
        path: "/",
        name: "test",
        component: TestView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
  export default router
