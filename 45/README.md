# Variables de entorno y ejecución

Vite utiliza un archivo `.env` para gestionar las variables de entorno. Asegúrate de crear este archivo en la raíz de tu proyecto y añadir las variables necesarias. Ejemplo:

```
VITE_API_URL=https://api.example.com
VITE_APP_MODE=development
```

En tu código, puedes acceder a estas variables utilizando import.meta.env. Ejemplo:
```
const apiUrl = import.meta.env.VITE_API_URL;
const appMode = import.meta.env.VITE_APP_MODE;
console.log(`API URL: ${apiUrl}, App Mode: ${appMode}`);
```