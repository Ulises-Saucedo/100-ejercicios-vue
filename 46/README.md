# Service scripts

Vite permite ejecutar scripts personalizados antes y después del desarrollo y la construcción. Para ello, puedes utilizar el archivo vite.config.js en la raíz de tu proyecto. A continuación, se muestra un ejemplo básico de cómo configurar un script personalizado:
```
    // vite.config.js
    import { defineConfig } from 'vite';

    export default defineConfig({
        // ...otras configuraciones
        scripts: [
            {
                // Script que se ejecutará antes de iniciar el servidor de desarrollo
                pre: 'pre-start-script.js',
                // Script que se ejecutará después de la construcción
                post: 'post-build-script.js',
            },
        ],
    });
```