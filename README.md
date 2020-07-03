# Upload Images Angular + ExpressJS

Este repositorio contiene un ejemplo completo de cómo podemos subir imágenes desde un formulario en una aplicación Angular a un servidor generado con ExpressJS.

Los ficheros clave son los siguientes:

## AppFront
---

### form-producto.component.ts

Dentro de este componente generamos toda la lógica necesaria para detectar el cambio de la imagen dentro del formulario situado dentro del fichero **form-producto.component.html**. 

El objeto de tipo FormData generado dentro del método **onSubmit** contiene los datos de la imagen y el resto de los campos del formulario. Una vez generado este objeto será enviado al servicio **productos.service.ts** para poder ser enviado al servidor de Express.

## AppBack
---

### /router/api/productos.js

Dentro de este fichero tenemos las rutas que gestionan todas las peticiones que podemos realizar sobre la api del modelo Producto.

La petición POST está gestionando el envío realizado desde el formulario de Angular. 

Utilizando la librería **multer** manejamos la recepción de las imágenes que nos llegan del front. Antes de realizar la inserción de los datos en la base de datos de MongoDB nos encargamos de modificar el nombre de la imagen ya que por defecto viene sin extensión.

A partir de ahí, una vez insertadas las imágenes, estas estarán disponibles en la ruta **http://localhost:3000/images/NOMBREIMAGEN.EXTENSION**