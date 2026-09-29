# Guía para vincular un formulario web con una base de datos e ingresar/consultar información
¿Qué es un conector de base de datos?

Se trata de un enlace intermediario que posibilita la interacción entre el lenguaje de programación (JavaScript, en este caso) y el sistema gestor de la base de datos. Opera a modo de intérprete, convirtiendo las órdenes escritas en el código para que la base de datos almacene o proporcione los datos requeridos.

Paso 1: Herramientas utilizadas

En esta práctica empleamos un conjunto específico de tecnologías: Node.js, que actúa como el entorno de ejecución del servidor; Express, el marco de trabajo web encargado de gestionar las solicitudes de las personas usuarias y definir la respuesta lógica del código; y SQLite, un motor relacional ligero y de fácil implementación que concentra todos los registros en un único archivo local.

Paso 2: Instalación del conector

Es indispensable contar previamente con Node.js descargado desde su sitio web oficial. Para inicializar el directorio de trabajo, abre la consola dentro de la carpeta correspondiente y ejecuta npm init -y, lo que generará la estructura base de configuración. A continuación, instala las dependencias necesarias ejecutando npm install sqlite3 y npm install express. Tras completar este proceso, verás reflejados en tu carpeta los archivos package.json, package-lock.json y el directorio node_modules (donde se alojan los módulos descargados).

Paso 3: Definición de la tabla de datos

Desde la lógica del programa, el conector construye la estructura de almacenamiento empleando la instrucción CREATE TABLE IF NOT EXISTS (nombre de la tabla). Resulta fundamental declarar el identificador como INTEGER PRIMARY KEY AUTO_INCREMENT para garantizar que la base de datos enumere de manera única y secuencial cada nuevo registro. Es primordial usar la palabra clave INTEGER en lugar de INT para asegurar la correcta funcionalidad del autoincremento.

Paso 4: Inserción de registros

En el momento en que una persona completa los campos del formulario en el sitio web y hace clic en Guardar, el conector ejecuta la sentencia INSERT INTO productos, transfiriendo dicha información para guardarla de forma permanente en el archivo de la base de datos.

Paso 5: Lectura y recuperación de datos

Para visualizar los artículos almacenados previamente, se activa una acción mediante un botón que envía una consulta a través de la sentencia SELECT * FROM productos. Esta instrucción extrae la totalidad de las filas guardadas en la tabla para que la interfaz web las presente listadas en pantalla.

Paso 6: Puesta en marcha de la aplicación

Para iniciar el sistema, abre la terminal y arranca el programa ejecutando node index.js. En el archivo index.js se integran el servidor (Express), la conexión a la base de datos (SQLite) y la lógica de negocio de la aplicación. Una vez iniciado el servicio, no debes abrir directamente el archivo HTML; en su lugar, accede desde un navegador web a la dirección http://localhost:3000, considerando que 3000 corresponde al puerto local asignado para publicar la aplicación.

Notas y consideraciones clave

Si vas a ejecutar este proyecto en un equipo o entorno diferente, es obligatorio repetir las órdenes de instalación indicadas en el Paso 2 para asegurar que las dependencias estén presentes.

Antes de interactuar con la interfaz, asegúrate de haber ejecutado node index.js en la terminal dentro del directorio del proyecto; de lo contrario, la aplicación arrojará un error. Mantén la consola abierta mientras utilices la web, ya que si la cierras se interrumpirá la ejecución del servidor y tendrás que iniciarlo nuevamente.

Al arrancar index.js, el script se encarga automáticamente de generar la base de datos y la tabla correspondiente si no existen. Aunque cierres el navegador o el sitio web, la información permanecerá guardada en la base de datos y podrá ser consultada posteriormente.
