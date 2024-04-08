// importamos el modulo express 
const express = require('express');
// metemos el metodo una variable para tratarlo como objeto 
const app=express();


app.get('/' , function(req,res){

    res.status(200).json({ ok:true,message:"Recibido!"})

    console.log('url : ' , req.url);
    console.log('mmetodo: ' , req.method);
    console.log('user-agent :' , req.headers['user-agent']);

    

    

});

app.get('/bye', (req, res)=>{
    res.status(200).json({ ok:true,message:"Adios !"})

})

app.listen(3000);

