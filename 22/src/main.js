import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('format', {
    mounted: (el, binding) =>{
        const modifiers = binding.modifiers
        if(modifiers.underline){
            el.style.textDecoration = 'underline'
        }
        if(modifiers.bold){
            el.style.fontWeight = 'bold'
        }
        if(modifiers.highlight){
            el.style.background = '#eaeaea'
        }
    }
})

app.mount('#app')