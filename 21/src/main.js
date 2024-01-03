import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('color', {
    mounted: (el, binding) =>{
        el.style.color = binding.arg
    }
})

app.mount('#app')