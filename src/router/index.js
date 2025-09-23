import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Components/Home.vue'
import SignUp from '@/Components/SignUp.vue'
import Login from '@/Components/Login.vue'
import Menu from '@/Components/Menu.vue'
import MenuItem from '@/Components/MenuItem.vue'
import UserProfile from '@/Components/UserProfile.vue'
import ContactUs from '@/Components/ContactUs.vue'
import Orders from '@/Components/Orders.vue'
import Reservation from '@/Components/Reservation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
{
  name:'home',
  path:'/',
  component: Home
},
{
  name:'menu',
  path:'/menu',
  component: Menu
},
{
  name:'menuitems',
  path:'/menuitems',
  component: MenuItem
},
{
  name:'orders',
  path:'/orders',
  component: Orders
},
{
  name:'reservation',
  path:'/reservation',
  component: Reservation
},
{
  name:'contactus',
  path:'/contactus',
  component: ContactUs
},
{
  name:'userprofile',
  path:'/userprofile',
  component: UserProfile
},
{
  name:'login',
  path:'/login',
  component: Login
},
{
  name:'signup',
  path:'/signup',
  component: SignUp
}
   ],
})

export default router
