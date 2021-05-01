require('dotenv').config()
const Koa = require('koa');
const app = new Koa();
const passport = require('koa-passport');
var bodyParser = require("koa-bodyparser");
var formidable = require("koa-formidable");
const cors = require('@koa/cors');
const swagger = require('swagger2');
const { validate,ui } = require ('swagger2-koa');




// 669710024779-ffodthvvvo5vfdcmf06kpi5ouvc2aeql.apps.googleusercontent.com
//AtndJ3d_gQbanFRIAr58Dg7b

const dog = require('./routes/dog.js');
const users = require('./routes/users');
const favourite = require('./routes/favourite.js');
const location = require('./routes/locations');
const message = require('./routes/message');
const googleAuth = require('./routes/googleAuth');





// load YAML swagger file
// const document = swagger.loadDocumentSync('./schema/swagger.yaml');

// // validate document
// // if (!swagger.validateDocument(document)) {
// //   throw Error(`./swagger.yml does not conform to the Swagger 2.0 schema`);
// // }

// app.use(bodyParser());
// app.use(ui(document));


//app.use(validate(document));
app.use(cors());

app.use(passport.initialize())
app.use(passport.session())

app.use(dog.routes());
app.use(users.routes());
app.use(location.routes());
app.use(message.routes());
app.use(favourite.routes());
app.use(googleAuth.routes());
 

var server = app.listen(4000, function () {
    var port = server.address().port
    console.log("App listening at  http://localhost:" + port);

});

 module.exports = app;

