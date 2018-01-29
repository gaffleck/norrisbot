var request = require('request');

// Set the configuration settings
const credentials = {
  client: {
    id: '',
    secret: ''
  },
  auth: {
    
tokenHost:'https://www.keener.me',
tokenPath :'/api/oauth/token',
authorizeHost :'https://www.keener.me',
authorizePath:'/api/oauth/authorize'

     }
};


const oauth2 = require('simple-oauth2').create(credentials);
const tokenConfig = {};
var accessToken = '';

// Callbacks
// Get the access token object for the client
oauth2.clientCredentials.getToken(tokenConfig, (error, result) => {
  console.log('loggin in ');
  if (error) {
  	console.log('error mess:'+result);
    return console.log('Access Token Error', error.message);
  }
  console.log('succeeded in getting token '+JSON.stringify(result));

  accessToken = oauth2.accessToken.create(result);
});


// Promises
// Get the access token object for the client
oauth2.clientCredentials
  .getToken(tokenConfig)
  .then((result) => {
    const accessToken = oauth2.accessToken.create(result);
    console.log('token saved: '+JSON.stringify(accessToken));

    console.log('requesting with '+accessToken.token.access_token);
    var options = {
  	url: 'https://www.keener.me/api/workflows',
  	 auth: {
    'bearer': accessToken.token.access_token
  	}
	};

    request(options, callback);
  })
  .catch((error) => {
    console.log('Access Token error', error.message);
  });



  var request = require('request');



function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log('Got Workflows');
    console.log(info);
    return;
  }
  console.log('ERROR Getting Workflows');
  console.log(JSON.stringify(response));
}

