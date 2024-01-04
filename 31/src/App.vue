<script>
  import { ref, computed } from "vue"
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
      const tasksOrdered = computed(() => {
        return tasks.value
                    .sort((a, b) => b.title.localeCompare(a.title))
                    .sort((a, b) => (a.done ? -1 : 1))
      })
      const Done = (task) =>{
        task.done = !task.done
        console.log("H")
      }
      const addTask = () =>{
        tasks.value.push({ title: text.value, done: false, id: new Date().getTime() })
      }
      return {
        text,
        tasksOrdered,
        Done,
        addTask
      }
    }
  }
</script>

<template>
  <div v-for="(task, index) in tasksOrdered" :key="task.id">
    <div v-if="task.done">
      <h5>
        <b>Tarea realizada - {{ task.title }}</b>
      </h5>
    </div>
    <div v-else>
      Tarea pendiente - {{ task.title }}
      <input type="checkbox" @click="Done(task)" value="realizar">
    </div>
  </div>
  <input type="text" v-model="text">
  <input type="button" value="Añadir tarea" @click="addTask">
</template>