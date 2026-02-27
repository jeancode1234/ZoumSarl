import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavbarView from '../views/NavbarView.vue'
import Footer from '../views/FooterView.vue'


const routes = [
  {
     path: "/",
    component: NavbarView,
    children: [
      {
        path: "/",
        components: {
          default: NavbarView,
          one: HomeView,
        },
      },
      
    ]
  },
 {
    path: "/",
    name: "Footer",
    component: Footer,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
