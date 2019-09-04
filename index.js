const express=require('express');
const app=express();
//app reguster this route handle with
//get watch for incoming req with this method
//(get, post,put,delete,patch)
// '/'
//
app.get('/',(req,res)=>{
    res.send({bb:'could I kiss you?>'});
});

//deploy 1.port binding,Specify Node Environment, specify start script,create .gitigmore file
const PORT = process.env.PORT||5000;
app.listen(PORT);
