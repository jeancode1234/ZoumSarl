import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import Aos from 'aos'
import 'aos/dist/aos.css'




// const app = createApp({
//   // something vue options here ...
// })


createApp(App).use(router).use(Aos.init())
.mount('#app')






