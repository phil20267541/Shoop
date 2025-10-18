import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

// Optional global components
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// Create app
const app = createApp(App)

// Register global components (optional)
app.component('navbar', Navbar)
app.component('footer-bar', Footer)

// Use router
app.use(router)

// Mount app
app.mount('#app')

                  