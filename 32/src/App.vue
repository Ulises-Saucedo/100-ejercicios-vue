<script>
  import { ref } from "vue"
  export default {
    setup(){
      const text = ref('')
      const tasks = ref([
        {
          title: "Recoger tarta",
          done: true,
          id: 1000
        },
        {
          title: "Enviar postal",
          done: false,
          id: 1001
        },
        {
          title: "Llamar al trabajo",
          done: true,
          id: 1002
        }
      ])
      const Done = (task) =>{
        task.done = !task.done
      }
      return {
        tasks,
        text,
        Done
      }
    }
  }
</script>

<template>
  <h4>Tareas atributos</h4>
  <div v-for="(task, index) in tasks" :key="task.id">
    {{ index }}
    <template v-for="(value, key) in task">
      <b>{{ key }}</b>: {{ value }}
    </template>
    <input type="checkbox" @click="Done(task)" :checked="task.done" value="Realizado">
  </div>
  <h4>Rango de: {{ tasks.length }}</h4>
  <ul v-for="item in tasks.length">
    <li>{{ item }}</li>
  </ul>
</template>