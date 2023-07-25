# back_dvp
backend prueba técnica dvp (guarda y muestra ususarios de github)

Configuración para la Aplicación en Local
Antes de ejecutar la aplicación en modo local, asegúrate de configurar el archivo config.js con los siguientes parámetros necesarios para establecer la conexión con la base de datos:

## Paso 1: 
Ir al archivo config.js En la raíz del proyecto.

## Paso 2: 
Configurar las variables de conexión
Dentro del archivo config.js, reemplaza los valores con la información correspondiente para tu entorno local:

~~~
// config.js

module.exports = {
  host: 'localhost',      // Dirección del servidor de la base de datos
  database: 'my_database',  // Nombre de la base de datos que deseas utilizar
  user: 'my_username',       // Nombre de usuario de la base de datos
  password: 'my_password',   // Contraseña del usuario de la base de datos
  port: 3306,               // Puerto de la base de datos (puede variar según la configuración)
};

~~~

Asegúrate de reemplazar 'localhost', 'my_database', 'my_username', 'my_password' y 3306 con los valores específicos de tu configuración.

## Paso 3: 
Guardar los cambios, guarda el archivo config.js con los valores actualizados.

Una vez que hayas configurado el archivo config.js con la información correcta de tu base de datos local, podrás ejecutar la aplicación sin problemas.

