import express from express;
app = express();

app.get('/',(req,res)=>{
    res.end('bonjour fr express');
})

app.get('/:name',(req,res)=>){
    var a= req.params.name;
    req.body.name;
    res.end('bonjour fr express');
}

app.listen(8000);