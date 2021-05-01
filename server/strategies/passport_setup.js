const passport = require('koa-passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user,done){
    done(null,user);
});
passport.deserializeUser(function(user,done){
    done(null,user)

})
passport.use(new GoogleStrategy({
    clientID:'669710024779-ffodthvvvo5vfdcmf06kpi5ouvc2aeql.apps.googleusercontent.com',
    clientSecret:'AtndJ3d_gQbanFRIAr58Dg7b',
    callbackURL:'http://localhost:4000/google/callback',
    passReqToCallback:true,

}, function(request,accessToken,refreshToken,profile,done){
    console.log(profile)
    return done(null,profile)
}))