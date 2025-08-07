import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss'
import axios from 'axios'
import '@/assets/tailwind.css';

// Configure the base API URL for axios.
axios.defaults.baseURL = import.meta.env.VITE_API_URL

const app = createApp(App)

app.use(router)

app.mount('#app')
