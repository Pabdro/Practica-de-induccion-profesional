import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiciosSe.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductosPe.vue')
  },
  {
    path: '/vehiculos',
    name: 'vehiculos',
    component: () => import(/* webpackChunkName: "about" */ '../views/VehiculosVe.vue')
  },
  {
    path: '/muebles',
    name: 'muebles',
    component: () => import(/* webpackChunkName: "about" */ '../views/MueblesMe.vue')
  },
  {
    path: '/tecnologia',
    name: 'tecnologia',
    component: () => import(/* webpackChunkName: "about" */ '../views/TecnologiaTe.vue')
  },
  {
    path: '/ropa',
    name: 'ropa',
    component: () => import(/* webpackChunkName: "about" */ '../views/RopaRe.vue')
  },
  {
    path: '/automotriz',
    name: 'automotriz',
    component: () => import(/* webpackChunkName: "about" */ '../views/AutomotrizAe.vue')
  },
  {
    path: '/domesticos',
    name: 'domesticos',
    component: () => import(/* webpackChunkName: "about" */ '../views/DomesticosDe.vue')
  },
  {
    path: '/tecnicos',
    name: 'tecnicos',
    component: () => import(/* webpackChunkName: "about" */ '../views/TecnicosTe.vue')
  },
  {
    path: '/externos',
    name: 'externos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExternosEe.vue')
  },
  {
    path: '/comprado',
    name: 'comprado',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompradoCe.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
