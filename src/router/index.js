import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import InicioPage from '../views/InicioPage.vue'
import NoticiasPPage from '../views/NoticiasP.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },


  {
    path: '/inicio',
    name: 'Inicio',
    component: InicioPage
  },

  {
    path: '/noticiaspoliciales',
    name: 'NoticiasP',
    component: NoticiasPPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
