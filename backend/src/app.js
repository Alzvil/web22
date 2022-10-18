const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaLogger = require('koa-logger');
const cors = require('@koa/cors');
const router = require('./routes');
const orm = require('./models');

const app = new Koa();

app.context.orm = orm;

app.use(cors());

app.use(KoaLogger());
app.use(KoaBody());

app.use(router.routes());

module.exports = app;
