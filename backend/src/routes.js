// import Router from "koa-router";
const Router = require('koa-router');
// import movies from "./routes/movies.js";
const movies = require('./routes/movies');

const router = new Router();

// los path que empiecen con movies, sean los endpoints de movies.js
router.use('/movies', movies.routes());

// export default router;
module.exports = router;

// las rutas que haremos deben estar ordenadas segun el recurso al que nos dirijimos
// es decir, crear un archivo.js especifico para cada recurso dentro de la carpeta de routes
