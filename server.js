
var express  =  require('express');

var fs  =  require('fs');

var app      =  express();

app.use(express.static(__dirname+"/../ai"));





app.get("/shopping",function(req,res){

   fs.readFile("./sample.json",function(err,data){

           res.send(data);
         
   });

});




app.listen(process.env.PORT || 8999 ,()=>console.log('\nserver listening'));




