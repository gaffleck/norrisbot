

var express = require('express');
var request = require('request');
var TokenRepository = require('./tokenRepository');
var path = require('path');

// Store our app's ID and Secret. These we got from Step 1. 
// For this tutorial, we'll keep your API credentials right here. But for an actual app, you'll want to  store them securely in environment variables. 
var clientId = process.env.CLIENT_ID;
var clientSecret = process.env.CLIENT_SECRET;
var keenerId = process.env.KEENER_ID; 
var keenerSecret = process.env.KEENER_SECRET;


// Set the configuration settings
const credentials = {
  client: {
    id: keenerId,
    secret: keenerSecret    
  },
  auth: {    
    tokenHost:'https://www.keener.me',
    tokenPath :'/api/oauth/token',
    authorizeHost :'https://www.keener.me',
    authorizePath:'/api/oauth/authorize'
     }
};

var tokenRepository = new TokenRepository(credentials.client);




var oauth2 = require('simple-oauth2').create(credentials);

// Instantiates Express and assigns our app variable to it
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(path.join(__dirname,'../static')));

// Again, we define a port we want to listen to
const PORT=process.env.PORT;

// Lets start our server
app.listen(PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Example app listening on port " + PORT);
});




// This route handles get request to a /oauth endpoint. We'll use this endpoint for handling the logic of the Slack oAuth process behind our app.
app.get('/oauth', function(req, res) {
    // When a user authorizes an app, a code query parameter is passed on the oAuth endpoint. If that code is not there, we respond with an error message
    if (!req.query.code) {
        res.status(500);
        res.send({"Error": "Looks like we're not getting code."});
        console.log("Looks like we're not getting code.");
    } else {
        // If it's there...

        // We'll do a GET call to Slack's `oauth.access` endpoint, passing our app's client ID, client secret, and the code we just got as query parameters.
        request({
            url: 'https://slack.com/api/oauth.access', //URL to hit
            qs: {code: req.query.code, client_id: clientId, client_secret: clientSecret}, //Query string data
            method: 'GET', //Specify the method

        }, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                res.json(body);

            }
        })
    }
});

app.get('/callback',function(req,res){
    console.log('In the callback');
    //check for success
    var accessCode = req.query.code;
    //get the token and carry on
    tokenRepository.Authenticate(accessCode);

    res.send('All Set!');

});

app.get('/keenerConnect',function(req,res){

// Authorization oauth2 URI
const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: 'http://localhost:4390/callback',
  scope: 'workflows:read',
  state: ''
});

// Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
res.redirect(authorizationUri);

})

app.post('/interaction', function(req, res) {
    console.log('got the req!');
    
    var form = JSON.parse(req.body.payload);
    //console.log(form);
    var selection = form.actions[0].value;
    console.log('You selected '+selection);
    
    
});



// Route the endpoint that our slash command will point to and send back a simple response to indicate that ngrok is working
app.post('/command', function(req, res) {
    res.send('Your ngrok tunnel is up and running!');
});