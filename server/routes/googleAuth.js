const Router = require('koa-router');
const passport = require('koa-passport');
const bodyParser = require('koa-bodyparser');
const model = require('../model/locationModel');
require('../strategies/passport_setup')

const router = Router({prefix: '/google'});

router.get('/', passport.authenticate("google",{scope:['profile','email']}));
router.post('/google/callback', callback);


async function callback(ctx) {
  ctx.redirect('/api/v1/dog/')
}

async function success(ctx) {
  ctx.redirect('http://localhost:3000/home')
}







  module.exports = router;