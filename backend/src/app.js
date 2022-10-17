// import que funciona solo al poner type=module en package.json
// import Koa from "koa";
// import KoaBody from "koa-body";
// import KoaLogger from "koa-logger";
// import router from "./routes.js";
const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaLogger = require('koa-logger');
const router = require('./routes');
// dentro de la carpeta models importa directamente el archivo index.js > importa db
const orm = require('./models');

const app = new Koa();

// exponer orm a nuestra aplicación (koa context)
app.context.orm = orm;

// middleware tipicos de koa
// logger: cuantas request y cuanto nos demoramos en responderlas
// body: parcear el contenido que hay dentro de la request
app.use(KoaLogger());
app.use(KoaBody());

// primer middleware inicial
// respuesta en la vista
// app.use((ctx, next) => {
//    ctx.body = "Hola mundo";
// });

// utilizar las rutas
app.use(router.routes());

// app.listen(3000, () => {
//    console.log("Starting app in port 3000");
// });

module.exports = app;
