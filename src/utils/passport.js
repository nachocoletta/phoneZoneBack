const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://phonezoneback-production.up.railway.app/auth/google/callback",
  scope: ["profile", "email"],
  //passReqToCallback: true,
},

async function (accessToken, refreshToken, profile, callback) {
  try {
    // Perform additional processing here, such as creating a new user in your database
    // based on the Google profile information
    callback(null, profile);
  } catch (error) {
    callback(error, null);
  }
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
