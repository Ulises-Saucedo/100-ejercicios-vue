import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('red', {
    mounted: (el, binding) =>{
        el.style.color = "red"
    }
})

app.directive('custom-color', {
    mounted: (el, binding) =>{
        el.style.color = binding.value
    }
})

app.mount('#app')