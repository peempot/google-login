import { createApp, } from 'vue'
import './style.css'
import App from './App.vue'
import 'aos/dist/aos.css'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: 'YOUR_GOOGLE_CLIENT_ID'
})
createApp(App).mount('#app')



