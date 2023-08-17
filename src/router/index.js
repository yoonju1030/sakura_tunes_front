import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import TestView from '../views/TestView.vue'

const routes = [
    {
        path: "/",
        name: "main",
        component: MainView
    }, 
    {
        path: "/test",
        name: "test",
        component: TestView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
