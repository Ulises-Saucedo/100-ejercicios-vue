<script>
import { ref, computed } from "vue"
export default {
    props: {
        language: String
    },
    setup(props) {
        const word = ref('')
        const dictionary = [
            {
                EN: "Hello",
                ES: "Hola"
            },
            {
                EN: "Bye",
                ES: "Chau"
            },
            {
                EN: "Good",
                ES: "Bueno"
            },
            {
                EN: "Bad",
                ES: "Malo"
            }
        ]

        const clear = () => {
            word.value = ''
        }

        const anyMatch = computed(() => {
            let match = false
            let words = []
            dictionary.map((w) => {
                if (word.value !== '' && w[props.language].toLowerCase().includes(word.value.toLowerCase())) {
                    words.push(w)
                }
            })
            return words
        })

        return {
            word,
            dictionary,
            anyMatch,
            clear,
            props
        }
    }
}
</script>

<template>
    <h1>
        Traductor
        <b v-if="props.language === 'ES'">Castellano-Inglés</b>
        <b v-if="props.language === 'EN'">Inglés-Castellano</b>
    </h1>
    <input type="text" placeholder="Introduzca la palabra a traducir" v-model="word">
    <input type="button" @click="clear" value="Limpiar">
    <div v-for="match in anyMatch">
        <span v-if="props.language === 'ES'">{{ match.ES }}-->{{ match.EN }}</span>
        <span v-else>{{ match.EN }}-->{{ match.ES }}</span>
    </div>
</template>