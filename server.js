
var express  =  require('express');
var path     =  require('path'); 
var fs  =  require('fs');


var app      =  express();

app.use(express.static(__dirname+"/../ai/public"));


app.get('/',function (req, res) {
        res.sendFile(path.resolve("public/index.html"));
   });

app.get('/image',function (req, res) {
        res.sendFile(path.resolve("public/onli.png"));
   });


app.get("/shopping",function(req,res){

   fs.readFile("./sample.json",function(err,data){

           res.send(data);
         
   });

});




app.listen(process.env.PORT || 8999 ,()=>console.log('\nserver listening'));




