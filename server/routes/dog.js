const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const model = require("../model/dogModel");

const auth = require("../routes/auth");

const router = Router({ prefix: "/api/v1/dog" });

router.get("/", getAll);
router.get("/four", getFour);
router.get("/deleteDog/:id([0-9]{1,})", deleteDog);
router.get("/Search/:breed", Search);
router.post("/create", bodyParser(), createDog);
router.get("/getdog/:id([0-9]{1,})", getById); //([0-9]{1,})
router.post('/dogUpdate/:id([0-9]{1,})', bodyParser(), updateDog);//([0-9]{1,})


async function getAll(ctx) {
  //ctx.body = "Hello world!";
  let dog = await model.getAll();
  if (dog.length) {
    ctx.body = {dog};
  }
}


async function Search(ctx) {
  var breed = ctx.params.breed;
 
  let dog = await model.Search(breed);
  if (dog.length) {
    ctx.body = {dog};
  }
}

async function getFour(ctx) {
  //ctx.body = "Hello world!";
  let dog = await model.getFour();
  if (dog.length) {
    ctx.body = {dog};
  }
}

async function getById(ctx) {
  let id = ctx.params.id;
 
  let dog = await model.getById(id);
  if (dog.length) {
    ctx.body = dog;
  }
}



async function createDog(ctx) {
 
  var Details = ctx.request.body;

  let result = model.add(Details);
  if (result) {
    ctx.status = 201;
    ctx.body = { ID: result.insertId };
  }
}

async function updateDog(ctx) {
  // TODO edit an existing dog
  console.log('good')
  let id = ctx.params.id;
 
    var Details =  ctx.request.body;
    let result = model.update(Details, id);
    if (result) {
      ctx.status = 201;
      ctx.body = { id: result.insertId };
    }
  
}

async function deleteDog(ctx) {
  // TODO delete an existing dog
  console.log("delete", ctx.params.id);
  let id = ctx.params.id;
  let dog = await model.deleteById(id);
  if (dog.length) {
    ctx.body = dog;
  }
}

module.exports = router;
