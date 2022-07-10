<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Cars Back Api

> Estas son las instrucciones de la aplicación Online (Cars Back Api)

---

### Contenidos

Puede hacer click sobre los contenidos para hacer una búsqueda más rápida

- [Descripción ](#Descripción)
- [End points ](#End-points)
- [Cars ](#Cars)
- [Token ](#Token)
- [Como Usarla](#Como-Usarla)
- [Base de datos](#Base-de-datos)
- [Desarrollador](#Desarrollador)

---

## Descripción

Este es el back Cars api, es una aplicación en la cual se pueden cargar autos simulando la carga, la edición y la eliminación de autos como así también el registrarse en la misma aplicación, El loguearse le va a permitir cargar editar los productos, que en esta aplicación en particular son autos

#### Tecnologias Utilizadas

- Node.js
- Typescript
- MongoDB

[Volver al inicio](#Contenidos)

---

## Como Usarla

#### Instalación

Abrir un terminal y ejecutar el comando docker-compose up de esa manera se va a correr el contenedor de docker, que tiene alojada la DB de Mongo. Además de toda la aplicación del back-end. De esa forma se instalarán todas la dependencia automáticamente gracias al Dockerfile.
El puerto por defecto de la aplicación es el 4000

#### Base de datos

Como ya se dijo anteriormente, la base de datos es Mongo DB. La misma consta de varias colecciones, entre ellas Users y Cars.

## Token

Todas las rutas a excepción de las de del tipo get o create user y login llevan el token en las cabeceras, para que estas puedan funcionar de manera correcta. Si lo hace desde postman tiene que ingresar los datos de la siguiente forma, donde la key es token y el valor tiene que ser su token
KEY:token VALUE: su token

## End points

## Cars

## FIND ALL CARS

http://localhost:4000/cars/findAll?offset=0&limit=2 GET: Esta ruta muestra todos los autos que se encuentran en la base de datos, además puede ordenar por precio, también puede ponerle un límite de la cantidad de autos que desea, como así también cuantos desea saltar

```javascript
//Ejemplo
[
  {
    ' _id ': '62c61e494c3e1ced7a851c8a',
    ' name ': 'ferrari',
    ' price ': 2502448,
    ' description ':
      'Este es un auto deportivo de primera linea no dude en consultar con nuestros asesores',
    ' images ': [
      {
        '  name ': 'auto1.jpg',
        ' _id ': '62c61e494c3e1ced7a851c8b',
      },
    ],
    'createdAt ': '2022-07-06T23:44:09.993Z',
    ' __v': 0,
  },
  {
    ' _id ': '62c61e4a4c3e1ced7a851cbe',
    ' name ': 'ferrari',
    ' price ': 2636816,
    ' description ':
      'Este es un auto deportivo de primera linea no dude en consultar con nuestros asesores',
    ' images ': [
      {
        ' name': 'auto2.jpg',
        ' _id ': '62c61e4a4c3e1ced7a851cbf',
      },
    ],
    ' createdAt ': '2022-07-06T23:44:10.021Z',
    ' __v ': 0,
  },
];
```

## FIND ALL CARS FOR NAME

http://localhost:4000/cars/findAll/name?offset=0&limit=2&sort=-1&name=Ferrari GET: Esta ruta muestra todos los autos que se encuentran en la base de datos segun la busqueda provista, además puede ordenar por precio, también puede ponerle un límite de la cantidad de autos que desea, como así también cuantos desea saltar

```javascript
//Ejemplo
 [
  {
   " _id: '62c61e494c3e1ced7a851c8a',
    "name": 'ferrari',
    "price": 2502448,
    "description":
      'Este es un auto deportivo de primera linea no dude en consultar con nuestros asesores',
    "images": [
      {
        "name": 'auto1.jpg',
        "_id": '62c61e494c3e1ced7a851c8b',
      },
    ],
    "createdAt": '2022-07-06T23:44:09.993Z',
   " __v": 0,
  },
  {
    "_id": '62c61e4a4c3e1ced7a851cbe',
    "name": 'ferrari',
    "price": 2636816,
    "description":
      'Este es un auto deportivo de primera linea no dude en consultar con nuestros asesores',
    "images": [
      {
       " name": 'auto2.jpg',
        "_id": '62c61e4a4c3e1ced7a851cbf',
      },
    ],
    "createdAt": '2022-07-06T23:44:10.021Z',
    "__v": 0,
  },
];
```

## FIND ONE FOR ID

http://localhost:4000/cars/findOneForId/Id GET: Esta ruta muestra un auto según su id

```javascript
//Ejemplo
  {
    "_id": '62c61e494c3e1ced7a851c8a',
    "name": 'ferrari',
    "price": 2502448,
    "description":
      'Este es un auto deportivo de primera linea no dude en consultar con nuestros asesores',
    "images": [
      {
       " name": 'auto1.jpg',
        "_id": '62c61e494c3e1ced7a851c8b',
      },
    ],
   " createdAt": '2022-07-06T23:44:09.993Z',
    "__v": 0,
  }
```

## IMAGE VIEW

http://localhost:4000/cars/uploads/auto.jpg GET: Esta ruta muestra una imagen en base al nombre con el que se guardó la misma, por defecto las imágenes las trae de la carpeta Uploads

## DELETE ONE CAR FOR ID

http://localhost:4000/cars/deleteOneForId/Id DELETE:Esta ruta borra un auto por el, id luego como respuesta devuelve el auto que se borró

```javascript
//Ejemplo de respuesta
{
    "_id": "62c61e494c3e1ced7a851c7a",
    "name": "pagany",
    "price": 9979913,
    "description": "Este es un auto deportivo de primera linea no dude en consultar con nuestros asesores",
    "images": [
        {
            "name": "auto1.jpg",
            "_id": "62c61e494c3e1ced7a851c7b"
        }
    ],
    "createdAt": "2022-07-06T23:44:09.978Z",
    "__v": 0
}


```

## UPDATE ONE CAR FOR ID

http://localhost:4000/cars/updateOneForId/id PUT:Esta ruta actualiza un auto por el, id, luego como respuesta devuelve el auto que se actualizó, se debe enviar un body de lo que se quiere actualizar

```javascript
//Ejemplo de body
  {
    "name": "Audi TT",
    "price": 123800,
    "description": "Consumo de combustible combinado¹: 7,0–6,0 l / 100 km\nEmisiones de CO₂ combinadas¹: 161-137 g / km\n\nDos décadas después de su debut, el Audi TT Coupé sigue cautivando por su característico vocabulario de diseño, su gran placer de conducción y su amplia gama de equipamiento de serie.",
    "images": [
        {
            "name": "e2d9fb9b-a1a4-4e09-9ffc-9d9c1baff3dd.jpg"
        },
        {
            "name": "e2d9fb9b-a1a4-4e09-9ffc-9d9c1baff3dd.jpg"
        },
        {
            "name": "e2d9fb9b-a1a4-4e09-9ffc-9d9c1baff3dd.jpg"
        }
    ]
}


```

## CREATE CAR

http://localhost:4000/cars/createCar POST: Esta ruta crea uno o varios autos, según el usuario lo prefiera debe tener las imágenes previamente guardadas en la carpeta uploads, o usar el método para guardar las mismas

```javascript
//Ejemplo body
[
  {
    ' price ': 2502448,
    ' name ': 'ferrari',
    ' description ':
      'Este es un auto deportivo de primera linea no dude en consultar con nuestros asesores',
    ' images ': [
      {
        '  name ': 'auto1.jpg',
      },
    ],
  },
  {
    ' name ': 'ferrari',
    ' price ': 2636816,
    '  description ':
      'Este es un auto deportivo de primera linea no dude en consultar con nuestros asesores',
    ' images ': [
      {
        ' name': 'auto2.jpg',
      },
    ],
  },
];
```

## UPLOAD MULTIPLE PHOTO

http://localhost:4000/cars/files POST:Esta ruta sirve para subir muchas fotos en la carpeta Uploads, internamente utiliza la librería multer para facilitar esta tarea, si quiere probar esta ruta individualmente con postman, el body tiene que ser del tipo from data el key tiene que ser files y cargar la imagen que desea claro esta si quiere hacerlo únicamente desde el back

## USERS

## FIND ALL USERS

http://localhost:4000/users/findAll?limit=0&offset=0 GET: Esta ruta busca todos los usuarios en la base de datos, tambien puede traer un solo usuario o saltar usuarios.

```javascript
[
  {
    '_id ': '62c61e9e4c3e1ced7a851d09',
    'username ': 'Matuzay32',
    'email ': 'eze@gmail.com',
    'password ': '$2b$10$ZHTdRrGc6Lc/iHN9j6A/AuzxNBvNwB6uxMHI9cr24wQxycSMt5K0O',
    '__v ': 0,
  },
  {
    '_id ': '62c625284c3e1ced7a851d52',
    'username ': 'Matuzay323',
    'email ': 'eze2@gmail.com',
    'password ': '$2b$10$85piqdW5SepqIbZoOLnfb.pRmx/lFP10rLHuy7jDEx4bdcT43ZCye',
    '__v ': 0,
  },
];
```

## FIND ALL USERS FOR EMAIL OR USERNAME

http://localhost:4000/users/findAll/name?name=eze@gmail.com&limit=0&offset=0 GET: Esta ruta busca todos los usuarios en la base de datos, tanto por nombre como por email, si quiere un usuario en especifico conviene hacer una búsqueda por mail

```javascript
[
  {
    '_id ': '62c61e9e4c3e1ced7a851d09',
    'username ': 'Matuzay32',
    'email ': 'eze@gmail.com',
    'password ': '$2b$10$ZHTdRrGc6Lc/iHN9j6A/AuzxNBvNwB6uxMHI9cr24wQxycSMt5K0O',
    '__v ': 0,
  },
];
```

## FIND ONE USER FOR ID

http://localhost:4000/users/findOneForId/ID GET: Esta ruta busca un usuario en especifico por ID

```javascript
  {
    '_id ': '62c61e9e4c3e1ced7a851d09',
    'username ': 'Matuzay32',
    'email ': 'eze@gmail.com',
    'password ': '$2b$10$ZHTdRrGc6Lc/iHN9j6A/AuzxNBvNwB6uxMHI9cr24wQxycSMt5K0O',
    '__v ': 0,
  },
```

## Desarrollador

- Ezequiel Rey - [eze.rey92@gmail.com]

[Volver al inicio](#Contenidos)
