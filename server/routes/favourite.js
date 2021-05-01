const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const likes = require('../model/favouriteModel');

const router = Router({prefix: '/api/v1/favourite'});

router.get('/likes/:LikeDog([0-9]{1,})' , likesCount);
router.post('/like/:id([0-9]{1,})', bodyParser(),  likePost);//auth,
router.del('/:id([0-9]{1,})/likes',  dislikePost);//auth,


async function likesCount(ctx) {
  // For you TODO: add error handling and error response code
  const dog_id = ctx.params.LikeDog;
  const result = await likes.count(dog_id);
  ctx.body = result ? result : 0;
}

async function likePost(ctx) {
  // For you TODO: add error handling and error response code
  const dog_id = parseInt(ctx.params.id);
  console.log(dog_id);
  const user_id = ctx.request.body;
  const result = await likes.like(user_id,dog_id);
  console.log(result);
  ctx.body = result.affectedRows ? {message: "liked"} : {message: "error"};
}

async function dislikePost(ctx) {
  // For you TODO: add error handling and error response code
  const dog_id = parseInt(ctx.params.id);
  const user_id = ctx.state.user.ID;
  const result = await likes.dislike(dog_id, user_id);
  console.log(result);
  ctx.body = result.affectedRows ? {message: "disliked"} : {message: "error"};
}

async function favouriteDog(ctx) {
  let user_id = ctx.params.id;
 
  let dog = await likes.favouriteDog(user_id);
  if (dog.length) {
    ctx.body = dog;
  }
}

  module.exports = router;