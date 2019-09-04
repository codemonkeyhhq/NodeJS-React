const express=require('express');
const app=express();
//app reguster this route handle with
//get watch for incoming req with this method
//(get, post,put,delete,patch)
// '/'
//
app.get('/',(req,res)=>{
    res.send({bb:'Can I kiss you>?'});
});


const PORT = process.env.PORT||5000;
app.listen(PORT);
