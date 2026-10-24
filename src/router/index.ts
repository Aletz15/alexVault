import { createRouter, createWebHistory } from 'vue-router'
import CatalogView from '../views/CatalogView.vue'
import GameDetails from '../components/GameDetails.vue'
import CarritoPage from '../components/CarritoPage.vue'

const routes = [
  { path: '/', name:'home', component: CatalogView},
  { path: '/juego/:gameId', name: 'juego', component: GameDetails, props: true },
  { path: '/carrito', name: 'carrito', component: CarritoPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router