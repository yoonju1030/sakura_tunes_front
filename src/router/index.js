import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/page/MainView.vue'

const routes = [
    {
        path: "/",
        name: "test",
        component: MainView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
  
  export default router
