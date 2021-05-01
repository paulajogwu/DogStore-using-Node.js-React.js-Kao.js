const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const model = require('../model/messageModel');
const auth = require('../routes/auth')

const router = Router({prefix: '/api/v1/Message'});

router.get('/getMessageByuserId/:sender_id([0-9]{1,})', getMessageByuserId);
router.get('/getAllByStaffid/:id([0-9]{1,})', getAllByStaffid);

router.post('/SendMessage', bodyParser(), SendMessage);



async function getAllByStaffid(ctx) {
  let message = await model.getAllByStaffid();
  if (message.length) {
    ctx.body = {message};
  }
}
async function getMessageByuserId(ctx) {
  
  let sender_id = ctx.params.sender_id;
  console.log(sender_id)
  let message = await model.getMessageByuserId(sender_id);

  if (message.length) {
    ctx.body = {message};
  }
}


async function SendMessage(ctx) {
  const body = ctx.request.body;
  let result = await model.add(body);
  if (result) {
    ctx.status = 201;
    ctx.body = {ID: result.insertId}
  }
}

 






module.exports = router;


// const Koa = require('koa');
// const Router = require('koa-router');
// const yamljs = require('yamljs');
// const koaSwagger = require('koa2-swagger-ui');

// const router = new Router({ prefix: '/' });

// const app = new Koa();
// const router = new Router();

// // .load loads file from root.
// const spec = yamljs.load('./openapi.yaml');

// // example 1 using router.use()
// router.use(koaSwagger({ swaggerOptions: { spec } }));

// // example 2 using more explicit .get()
// router.get('/docs', koaSwagger({ routePrefix: false, swaggerOptions: { spec } }));

// app.use(router.routes());
// app.listen(3000);
// ```
