const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const model = require('../model/userModel');
const auth = require('../routes/auth')

const router = Router({prefix: '/api/v1/users'});

router.get('/', getAll);
router.get('/role', getByRole);
router.get('/userId/:id([0-9]{1,})', getById);
router.post('/login/:email', login);// auth,
router.post('/adduser', bodyParser(), AddUser);
router.post('/roleUpdate/:id([0-9]{1,})', bodyParser(), updateUser);


async function getAll(ctx) {
  let user = await model.getAll();
  if (user.length) {
    ctx.body = {user};
  }
}

async function getByRole(ctx) {
  let user = await model.getRole();
  if (user.length) {
    ctx.body = {user};
  }
}
async function getById(ctx) {
  
  let id = ctx.params.id;
 
  let user = await model.getById(id);

  if (user.length) {
    ctx.body = {user};
  }
}


async function AddUser(ctx) {
  const body = ctx.request.body;
  let result = await model.add(body);
  if (result) {
    ctx.status = 201;
    ctx.body = {ID: result.insertId}
  }
}

 // TODO edit user role
async function updateUser(ctx) {
  let id = ctx.params.id;
  const body = ctx.request.body;
  let result = await model.update(body,id);
  if (result) {
    ctx.status = 201;
    ctx.body = {result}
  }

}

async function login(ctx) {
  let email = ctx.params.email;
  console.log('email',email)
  let result = await model.logins(email);
  console.log('email',result)
  if (result) {
    ctx.body = {result}
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
