import { defineStore } from 'pinia'

export const useFirstGetter = defineStore('firstGetter', {
    state: () => {
        return {
            count: 1
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2
    }
})