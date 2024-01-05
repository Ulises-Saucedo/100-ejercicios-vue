# Estructura del proyecto

Tras haber creado el proyecto Vue se ha generado una estructura base que el desarrollador puede utilizar. El proyecto está estructurado por:

🪧 Ficheros de configuración: Se encuentran en el raíz de la aplicación. Uno de los mas importantes es "package.json", que contiene los paquetes instalados y requeridos por nuestro proyecto, además de la definición de scripts, que podemos lanzar en la consola, para compilar en diferentes modos de nuestro proyecto.

🪧 Scripts: Permite definir scripts a invocar en la consola, para compilar en difentes modos.

🪧 Dependencies: Contiene los paquetes que hemos instalado.

🪧 Public: Contiene recursos no optimizados por vite, movidos a producción tras compilarse en dicho modo. Aquí encontramos la página inicial de nuestra aplicación SPA.

🪧 Src: Contiene nuestro código estructurado en dos subcarpetas, uno para los componentes de la aplicación (components), no navegables desde enrutamiento y otra contendrá las vistas (views), navegables desde el enrutador.

