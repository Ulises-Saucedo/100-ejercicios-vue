<script>
    export default{
        setup(){
            const html = `
                <div>
                    <h1>Ejemplo de renderizado HTML</h1>
                    este enlace nos lleva a <a href="https://google.com">Google</a> 
                </div>
            `
            return {
                html
            }
        }
    }
</script>

<template>
    <div v-html="html"></div>
</template>