import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
// flex布局库
import './common/flex.css'
import './common/animate.css'

const app = createApp(App)
app.use(router);
app.mount('#app');