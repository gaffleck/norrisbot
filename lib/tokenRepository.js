"use strict";

var request = require('request');

var TokenRepository = function Constructor(config){
	TokenRepository.config = config; 
	TokenRepository.access_token = '';
}


//authenticate

TokenRepository.prototype.Authenticate = function(access_code){
	TokenRepository.config.code = access_code; 

	console.log('got the code '+ access_code);

	request.post({url:buildTokenUri(TokenRepository.config)},
		function(error,response,body){
			if(error){
				console.log("Failed to get access token "+error);
				return;
			}
			console.log('got the access token'+body);

			var objs = JSON.parse(body);
			console.log('token is: '+objs.access_token);
			TokenRepository.access_token = objs.access_token; 
		});

	return; 
}


//Refresh Token
TokenRepository.prototype.RefreshToken = function(){


}

//Token Getter
TokenRepository.prototype.getToken = function(){

	return TokenRepository.access_token;

}

module.exports = TokenRepository;



function buildTokenUri(tokenConfig){
	var url = 'https://keener.me/api/oauth/token?grant_type=authorization_code&code='+tokenConfig.code+'&redirect_uri=http%3A%2F%2Flocalhost:4390/callback&client_id='+tokenConfig.id+'&client_secret='+tokenConfig.secret;
	console.log(url);
	return url;
}