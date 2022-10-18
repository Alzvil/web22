const Router = require('koa-router');
const usuarios = require('./routes/usuarios');

const router = new Router();

router.use('/usuarios', usuarios.routes());

module.exports = router;
