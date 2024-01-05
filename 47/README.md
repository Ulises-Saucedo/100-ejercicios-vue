# Compilación de un único componente

### 1. Estructura del Proyecto

```
    Asegúrate de tener la siguiente estructura de proyecto:

    project-root/
    |-- src/
    |   |-- components/
    |       |-- MiComponente.vue
    |-- vite.config.js
    |-- package.json
    |--
```

Ajusta tu archivo vite.config.js para incluir solo el componente que deseas compilar. Ejemplo:

```
    import { defineConfig } from 'vite';
    import vue from '@vitejs/plugin-vue';

    export default defineConfig({
    plugins: [vue()],
    build: {
            target: 'esnext',
            outDir: 'dist',
            assetsInlineLimit: 4096,
            rollupOptions: {
                input: 'src/components/MiComponente.vue',
            },
        },
    });
```