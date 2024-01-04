<script>
    import { ref } from "vue"
    export default {
        props: {
            propPerson: {
                type: Object
            }
        },
        setup(props){
            const person = ref(props.propPerson)
            const name = ref(null)
            const age = ref(null)
            const onChangeName = () => {
                person.value.FirstName = name.value
            }
            const deleteFirstName = () => {
                delete person.value.FirstName
            }
            const addAge = () => {
                person.value.Age = age.value
            }
            return {
                person,
                age,
                name,
                onChangeName,
                deleteFirstName,
                addAge
            }
        }
    }
</script>

<template>
    <p v-if="person">
        <b>(Reactividad Objeto)Persona:</b>
        <span>{{ person.FirstName }} {{ person.LastName }} {{ person.Age }}</span>
    </p>
    <input type="text" placeholder="Nombre" v-model="name" @change="onChangeName">
    <p>
        <b>(Reactividad)Edad:</b>
        {{ age }}
    </p>
    <input type="number" placeholder="Edad" v-model="age">
    <input type="button" @click="deleteFirstName" value="Borra nombre">
    <input type="button" @click="addAge" value="Añade edad">
</template>