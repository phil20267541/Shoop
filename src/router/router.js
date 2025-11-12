import { createRouter, createWebHistory } from 'vue-router'

// Import pages
import Home from '../views/Home/Home.vue'
import About from '../views/About/About.vue'
import Contact from '../views/Contact/Contact.vue'
import ShoopFarm from '../views/ShoopFarm/ShoopFarm.vue'
import ShoopFarmID from '../views/ShoopFarmID/ShoopFarmID.vue'
import ShoopPet from '../views/ShoopPet/ShoopPet.vue'
import ShoopStats from '../views/ShoopStats/ShoopStats.vue'
import Shop from '../views/Shop/Shop.vue'
import ShopHats from '../views/Shop/ShopHats.vue'
import ShopTops from '../views/Shop/ShopTops.vue'
import ShopBoots from '../views/Shop/ShopBoots.vue'
import ShopColors from '../views/Shop/ShopColors.vue'
import ShopThemes from '../views/Shop/ShopThemes.vue'
import Wiki from '../views/Wiki/Wiki.vue'
import Login from '../views/Login/Login.vue'
import Profile from '../views/Profile/Profile.vue'

const routes = [
  { path: '/', redirect: '/Home' },
  { path: '/Home', name: 'Home', component: Home },
  { path: '/About', name: 'About', component: About },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/ShoopFarm', name: 'ShoopFarm', component: ShoopFarm },
  { path: '/ShoopFarmID', name: 'ShoopFarmID', component: ShoopFarmID },
  { path: '/ShoopPet', name: 'ShoopPet', component: ShoopPet },
  { path: '/ShoopStats', name: 'ShoopStats', component: ShoopStats },
  { path: '/Wiki', name: 'Wiki', component: Wiki },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/Profile', name: 'Profile', component: Profile },
  
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop,
    children: [
      { path: '/', redirect: 'hats' }, // default subpage
      { path: 'hats', name: 'ShopHats', component: ShopHats },
      { path: 'tops', name: 'ShopTops', component: ShopTops },
      { path: 'boots', name: 'ShopBoots', component: ShopBoots },
      { path: 'colors', name: 'ShopColors', component: ShopColors },
      { path: 'themes', name: 'ShopThemes', component: ShopThemes },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
