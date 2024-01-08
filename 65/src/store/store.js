import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 1
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count * 2
            console.log(this.count *= 2)
        }
    }
})
