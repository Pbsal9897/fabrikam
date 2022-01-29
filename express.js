var exp=require('express');
var app=exp();
app.listen(8081,function(){
     console.log("Server Started");
});
app.get('/index',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.get('*',function(req,res){
	res.send("<h2>Invalid Search</h2>");
});