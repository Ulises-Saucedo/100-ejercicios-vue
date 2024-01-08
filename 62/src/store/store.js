import { defineStore } from 'pinia'

export const useFakeAuthStore = defineStore('auth', {
    state: () => {
        return {
            loggedIn: false
        }
    },
    actions: {
        toggleSession(){
            this.loggedIn = !this.loggedIn
        }
    }
})