import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import Contact from '../views/Contact/Contact.vue'
import ShoopFarm from '../views/ShoopFarm/ShoopFarm.vue'
import ShoopFarmID from '../views/ShoopFarmID/ShoopFarmID.vue'
import ShoopPet from '../views/ShoopPet/ShoopPet.vue'
import ShoopStats from '../views/ShoopStats/ShoopStats.vue'
import Shop from '../views/Shop/Shop.vue'

// Define routes
const routes = [
  { path: '/', redirect: '/Home'},
  { path: '/Home', name: 'Home', component: Home },
  { path: '/About', name: 'About', component: About },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/ShoopFarm', name: 'ShoopFarm', component: ShoopFarm },
  { path: '/ShoopFarmID', name: 'ShoopFarmID', component: ShoopFarmID },
  { path: '/ShoopPet', name: 'ShoopPet', component: ShoopPet },
  { path: '/ShoopStats', name: 'ShoopStats', component: ShoopStats },
  { path: '/Shop', name: 'Shop', component: Shop },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Export so main.js can use it
export default router
