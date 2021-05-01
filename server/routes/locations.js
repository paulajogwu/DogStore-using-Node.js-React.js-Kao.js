const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const model = require('../model/locationModel');
const auth = require('../routes/auth')

const router = Router({prefix: '/api/v1/location'});

router.get('/', getAll);
router.post('/addlocation', bodyParser(), AddLocation);
router.get("/ById:id([0-9]{1,})", getById);
router.put('/update:id([0-9]{1,})', bodyParser(), updateLocation);
router.del("/delete:id([0-9]{1,})", deleteLocation);

async function getAll(ctx) {
  let location = await model.getAll();
  if (location.length) {
    ctx.body = {location};
  }
}



async function AddLocation(ctx) {
  console.log("Go")
  const body = ctx.request.body;
 
  let result = await model.add(body);
  if (result) {
    ctx.status = 201;
    ctx.body = {ID: result.insertId}
  }
}

async function getById(ctx) {
    let id = ctx.params.id;
    let location = await model.getById(id);
    if (location.length) {
      ctx.body = location[0];
    }
}


async function updateLocation(ctx) {
    // TODO edit an existing location
    let id = ctx.params.id;
    const body = ctx.request.body;
    let result = await model.update(body,id);
    if (result) {
      ctx.status = 201;
      ctx.body = {ID: result.insertId}
    }
  
  }

  
async function deleteLocation(ctx) {
    // TODO delete an existing location
  
    let id = ctx.params.id;
    let location = await model.deleteById(id);
    if (location.length) {
      ctx.body = location[0];
    }
  }


  module.exports = router;