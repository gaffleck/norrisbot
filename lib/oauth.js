var request = require('request');



var express = require('express');
var request = require('request');


// Instantiates Express and assigns our app variable to it
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Again, we define a port we want to listen to
const PORT=4321;

// Lets start our server
app.listen(PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Example app listening on port " + PORT);
});

app.get('/done',function(){
	res.send('all set!');
});

// This route handles GET requests to our root ngrok address and responds with the same "Ngrok is working message" we used before
app.get('/callback', function(req, res) {
    res.send('I got you babe' + req.url);

    const tokenConfig = {
	  code: req.query.code,
	  redirect_uri: 'http://localhost:3000/done',
	  id: '6216722577038463.2664803408665155',
      secret: 'vlGNXr2eu5XNeE7KumUYOggJZx1wUI5VyrL0F6BQYNQ'
	};

	console.log('got the code '+ tokenConfig.code);

	request.post({url:'https://keener.me/api/oauth/token?grant_type=authorization_code&code='+req.query.code+'&redirect_uri=http://dc5ddd31.ngrok.io&client_id=6216722577038463.2664803408665155&client_secret=vlGNXr2eu5XNeE7KumUYOggJZx1wUI5VyrL0F6BQYNQ'},
		function(error,response,body){
			console.log(response);
		});

});


// Set the configuration settings
const credentials = {
  client: {
    id: '6216722577038463.2664803408665155',
    secret: 'vlGNXr2eu5XNeE7KumUYOggJZx1wUI5VyrL0F6BQYNQ'
    
  },
  auth: {
    
tokenHost:'https://www.keener.me',
tokenPath :'/api/oauth/token',
authorizeHost :'https://www.keener.me',
authorizePath:'/api/oauth/authorize'

     }
};

const oauth2 = require('simple-oauth2').create(credentials);

app.get('/start',function(req,res){

// Authorization oauth2 URI
const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: 'http://localhost:4321/callback',
  scope: 'workflows:read',
  state: ''
});

// Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
res.redirect(authorizationUri);



});






