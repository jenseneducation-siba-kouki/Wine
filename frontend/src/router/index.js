import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LogIn from '../views/LogIn'
import Register from '../views/Register'
import Contact from '../views/Contact'
import Wines from '../views/Wines'
import Order from '../views/Order'
import Status from '../views/Status'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/logIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/wines',
    name: 'Wines',
    component: Wines
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Status',
    name: 'Status',
    component: Status
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
