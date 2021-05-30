import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LogIn from '../views/LogIn'
import Register from '../views/Register'
import Contact from '../views/Contact'
import Wines from '../views/Wines'
import Order from '../views/Order'


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
    path: '/LogIn',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/Register',
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
]

const router = new VueRouter({
  routes
})

export default router
