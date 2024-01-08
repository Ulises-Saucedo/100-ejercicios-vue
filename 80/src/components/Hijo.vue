<template>
    <div>
        <button @click="enviarMensajeAlPadre">Enviar Mensaje al Padre</button>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        setup(props, { emit }) {
            const enviarMensajeAlPadre = () => {
                emit('mensaje-al-padre', '¡Hola desde el hijo!')
            };
            return {
                enviarMensajeAlPadre,
            }
        },
    }
</script>  