const Router = require('koa-router');

const router = new Router();

router.post('usuarios.create', '/', async (ctx) => {
  try {
    console.log('Recibido');
    console.log(ctx.request.body);

    //   const usuario = await ctx.orm.Usuario.create(ctx.request.body);
    //   ctx.throw(usuario.dataValues, 201);
    // } catch (error) {
    //   ctx.throw(error);
    // }
    let estadoInicial = 'offline';

    const usuario = await ctx.orm.Usuario.create({
      username: ctx.request.body.username,
      password: ctx.request.body.password,
      email: ctx.request.body.email,
      estado: estadoInicial,
    });
    //usuario.save();
    //ctx.status = 201;
    ctx.throw(usuario.dataValues, 201);
  } catch (error) {
    ctx.throw(error);
  }
});

router.get('usuarios.show', '/', async (ctx) => {
  try {
    const usuarios = await ctx.orm.Usuario.findAll();
    ctx.body = usuarios;
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});

module.exports = router;
