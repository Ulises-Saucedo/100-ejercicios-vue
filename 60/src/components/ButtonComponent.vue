<script>
    export default {
        emits: ['emitEvento'],
        setup(props, ctx) {
            const handleClick = () => {
                ctx.emit('emitEvento')
            }
        return {
            handleClick
        }
    }
};
</script>

<template>
    <button @click="handleClick">Hacer click</button>
</template>