<script>
    import { computed } from "vue"
    export default {
        props: {
            propRequired: {
                type: String,
                required: true
            },
            propArray: {
                type: Array,
                default: () => {return []},
                validator: values => { return values && values.length > 0 }
            },
            propObject: {
                type: Object,
                default: () => {return {} }
            },
            propMultipleValue: [Number, String, Date]
        },
        setup(props){
            const completeName = computed(() => {
                if(props.propObject && props.propObject.name && props.propObject.age){
                    return props.propObject.name + ' ' + props.propObject.age
                }else{
                    return '---Falta nombre----'
                }
            })
            return {
                props,
                completeName
            }
        }
    }
</script>

<template>
    <p>Texto requerido: {{ props.propRequired }}</p>
    <p>Objeto: {{ completeName }}</p>
    <p>Multiple valor: {{ props.propMultipleValue }}</p>
    <ul>
        Array
        <li v-for="item in props.propArray">{{ item }}</li>
    </ul>
</template>