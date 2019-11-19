const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const cookieSession=require('cookie-session');
const passport=require('passport');
require('./models/User');
require('./services/passport');
const app=express();

//mongodb+srv://huahaoqi:<password>@emaily-vuuj2.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect(keys.mongoURI);

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
//app reguster this route handle with
//get watch for incoming req with this method
//(get, post,put,delete,patch)
// '/'
// app.get('/',(req,res)=>{
//     res.send({bb:'could I kiss you?>'});
// });


//deploy 1.port binding,Specify Node Environment, specify start script,create .gitigmore file
const PORT = process.env.PORT||5000;
app.listen(PORT);
