<script>
    import { ref, computed } from "vue"
    export default{
        setup(){
            const title = "Calculator"
            const operator1 = ref('0')
            const operator2 = ref('0')
            const operator3 = ref('0')
            const operator4 = ref('0')
            const resultSum = computed(() =>{
                let op1 = parseInt(operator1.value === '' ? '0' : operator1.value)
                let op2 = parseInt(operator2.value === '' ? '0' : operator2.value)
                console.log(op1 + " + " + op2 + " = " + (op1+op2))
                return op1+op2
            })
            const resultSub = computed(() =>{
                let op3 = parseInt(operator3.value === '' ? '0' : operator3.value)
                let op4 = parseInt(operator4.value === '' ? '0' : operator4.value)
                console.log(op3 + " - " + op4 + " = " + (op3-op4))
                return op3-op4
            })
            return {
                title,
                operator1,
                operator2,
                operator3,
                operator4,
                resultSum,
                resultSub
            }
        }
    }
</script>

<template>
    <h1>{{ title }}</h1>
    <input type="text" v-model="operator1"> +
    <input type="text" v-model="operator2"> = {{ resultSum }}
    <input type="text" v-model="operator3"> -
    <input type="text" v-model="operator4"> = {{ resultSub }}
</template>