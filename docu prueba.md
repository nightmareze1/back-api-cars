# Data warehouse 4to proyecto de Acamica




> Estas son las instrucciones de la aplicación Online (Data warehouse)

---

### Contenidos
Puede hacer click sobre los contenidos para hacer una búsqueda más rápida

- [Descripción ](#Descripción)
- [Como Usarla](#Como-Usarla)
- [Instalacion](#Instalacion)
- [Desarrollador](#Desarrollador)

---

## Descripción 

Data warehouse,  es una aplicación que gestiona los clientes de una gran cantidad de compañias, proporcionando datos de los contactos, como numero de telefono email, etc.

#### Tecnologias Utilizadas 

- Node.js
- JavaScript
- MySQL
-Boostrap

[Volver al inicio](#Contenidos)

---

## Como Usarla

#### Instalación

Abrir una terminal e instalar las siguientes dependencias en caso de que no se encuentren instaladas de manera correcta

- npm install nodemon
- npm install express
- npm install sequelize
- npm install cors
- npm install jwt-simple
- npm install mysql2

También  debe descargar he instalar XAMPP para poder inicializar la base de datos como sugerencia puede hacerlo desde "https://www.apachefriends.org/es/download.html"

#### Base de datos

LA BASE DE DATOS SE ENCUENTRA EN LA CARPETA (BASE DE DATOS)

IMPORTANTE: LA BASE DE DATOS DEBE LLAMARSE datawarehouse

A MODO DE RECOMENDACION PARA AHORRARLE TIEMPO UTILICE LA BASE DE DATOS PROVISTA EN LA CARPETA YA QUE TIENE CREADO UN USUARIO DE ROL DE ADMINISTRADOR, PARA PODER CREAR OTROS USUARIOS. 
TAMBIEN TIENE  PAISES, PROVINCIAS, CIUDADES, Y COPAÑIAS AGREGADAS.



En la carpeta raíz  tiene una base de datos creada , si no desea usar esa base y por lo contrario piensa comenzar una desde cero, puede hacerlo
y la dirección en donde debe hacer esto es el servidor local "http://localhost/phpmyadmin".

¿Como iniciar el servidor? puede hacerlo de manera sencilla con nodemon. Simplemente debe poner en la terminal nodemon con eso se incializa correctamente. Desde  su editor de código  usted podrá  ver las sentencias que se van a ir ejecutando.
----------
## Usuario ADMINISTRADOR

En la tabla roles el cargo de administrador debe tener el id 1

Ej:

id   	nombre

1	ADMINISTRADOR


En la tabla de usuarios, el primer usuario que cree desde la misma base tiene que ser un ADMINISTRADOR

Ej:

id username password email nombre apellido 

1   admin    admin    admin  null   null


SOLO EL USUARIO ADMINITRADOR PUEDE CREAR NUEVOS USUARIOS


---------

## CANALES

en la tabla de canales 
tiene que generar los canales whatsAPP Instagram

----------

## EXPORTAR IMPORTAR CONTACTOS

Se le va a proporcionar  un excel con contactos para porder importarlos a la base de datos de forma masiva,
datos importante, tiene que tener el mismo formato y los mails deben ser distintos entre si para poder realizar la operacion con exito.

Al exportar un contacto si lo quiere poder enviar a la base nuevamente guardelo en un version de excel distinta a la que se guarda por defecto, cuanto mas nueva mejor.

Como recomendacion exporte el contacto que quiera pero borrelo de la base luego de exportarlo para poder agregarlo por la validacion interna de email.

para ahorrarse todo ese tiempo utilice el excel que se le va a proporcionar en la carpeta.


IMPORTANTE: EL EXCEL SE ENCUENTRA EN LA CARPETA (CONTACTOS EXCEL)

----------



## Desarrollador 

- Ezequiel Rey - [eze.rey92@gmail.com]


[Volver al inicio](#Contenidos)
