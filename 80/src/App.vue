<template>
  <div>
    <h2>Componente Padre</h2>
    <Hijo @mensaje-al-padre="manejarMensajeDelHijo" />
    <p>Mensaje del Hijo: {{ mensajeDelHijo }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import Hijo from './components/Hijo.vue';

export default {
  components: {
    Hijo,
  },
  setup() {
    const mensajeDelHijo = ref('')
    const manejarMensajeDelHijo = (mensaje) => {
      mensajeDelHijo.value = mensaje
    }
    return {
      mensajeDelHijo,
      manejarMensajeDelHijo,
    }
  },
}
</script>
