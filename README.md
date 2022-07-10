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
- [Como Usarla](#Como-Usarla)
- [Base de datos](#Base-de-datos)
- [Desarrollador](#Desarrollador)

---

## Descripción

Data warehouse, es una aplicación que gestiona los clientes de una gran cantidad de compañias, proporcionando datos de los contactos, como numero de telefono email, etc.

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

## End points

## Cars

## FIND ALL CARS

http://localhost:4000/cars/findAll?offset=0&limit=2 GET: Esta ruta muestra todos los autos que se encuentran en la base de datos, además puede ordenar por precio, también puede ponerle un límite de la cantidad de autos que desea, como así también cuantos desea saltar

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

## FIND ALL CARS FOR NAME

http://localhost:4000/cars/findAll/name?offset=0&limit=2&sort=-1&name=Ferrari GET: Esta ruta muestra todos los autos que se encuentran en la base de datos segun la busqueda provista, además puede ordenar por precio, también puede ponerle un límite de la cantidad de autos que desea, como así también cuantos desea saltar

```javascript
//Ejemplo
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

http://localhost:4000/cars/findOneForId/Id GET: Esta ruta muestra un auto segun su id

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

http://localhost:4000/cars/uploads/auto.jpg GET: Esta ruta muestra una imagen en base al nombre en el que se guardo la misma por defecto las imagenes las trae de la carpeta Uploads

## DELETE ONE CAR FOR ID

http://localhost:4000/cars/deleteOneForId/Id DELTE:Esta ruta borra un auto por el id, luego como respuesta devuelve el auto que se borro

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

http://localhost:4000/cars/updateOneForId/id PUT:Esta ruta actualiza un auto por el id, luego como respuesta devuelve el auto que se actualizo

```javascript
//Ejemplo de body
{
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
}


```

## Desarrollador

- Ezequiel Rey - [eze.rey92@gmail.com]

[Volver al inicio](#Contenidos)
