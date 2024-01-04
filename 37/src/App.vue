<script>
  export default {
    setup() {
      const title = 'Ejemplo con inline-template';
      const message = 'Este es un componente Vue con inline-template.';
      const templateContent = `
        <div>
          <h1>${ title }</h1>
          <p>${ message }</p>
        </div>
      `;
      return { 
        templateContent, 
        title, 
        message 
      };
    },
  };
</script>

<template>
  <div v-html="templateContent"></div>
</template>