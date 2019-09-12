const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy
const keys=require('../config/keys');
const mongoose = require('mongoose');
const User=mongoose.model('users');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id).then(user => {
        done(null,user);
    });
});


//generic register
passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done)=>{
            User.findOne({googleId:profile.id}).then((existingUser)=>{
                    console.log(333333333333);
                    if(existingUser){
                        done(null,existingUser);
                    }else{
                        new User({googleId: profile.id})
                            .save()
                            .then(user=>done(null,user));
                    }
                }
            )

        }
    )
);
