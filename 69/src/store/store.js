import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: parseInt(Cookies.get('count')) || 1
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count = this.count * 2
            Cookies.set('count', this.count, { expires: 3 / (24 * 60 * 60) })
        }
    },
    persist: true
})
