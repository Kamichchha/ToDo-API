var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;

app.get('/',function(req,res){
	res.send('Hello TO DO API!');
});

app.listen(PORT,function(){
	console.log('Server started on port : ' + PORT);
});

