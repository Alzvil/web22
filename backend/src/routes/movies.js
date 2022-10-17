// import Router from "koa-router";
const Router = require('koa-router');

const router = new Router();

// crear un endpoint que muestre una lista de peliculas
const movies = [
  {
    name: 'Interstellar',
    year: '2019',
  },
  {
    name: 'Top Gun',
    year: '1986',
  },
];

// ruta del tipo get
// get(nombre cualquiera, ruta{vacia para definirla en routes.js}, funcion)
router.get('movies.show', '/', async (ctx) => {
  // funcion asincrona que define el body de la respuesta como el array
  // stringify: recibe un objeto JS y lo transforma en un string formateado en JSON (hacemos la response de una API)
  ctx.body = JSON.stringify(movies);
});

// export default router;
module.exports = router;
