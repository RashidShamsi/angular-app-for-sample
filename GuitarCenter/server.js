var express= require('express');

var app = express();

app.use(express.static('app'));
// start the server
app.listen(3000,function(){
		console.log("Express server is runninhg on port 3000")
});