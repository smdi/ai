
var express  =  require('express');

var fs  =  require('fs');

var app      =  express();

app.use(express.static(__dirname+"/../ai/public"));


 app.get('/',function (req, res) {
               res.sendFile(path + '/public/index.html');

          });


app.get("/shopping",function(req,res){

   fs.readFile("./sample.json",function(err,data){

           res.send(data);
         
   });

});




app.listen(process.env.PORT || 5000 ,()=>console.log('\nserver listening'));




