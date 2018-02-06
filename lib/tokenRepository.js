"use strict";

var request = require('request');
var PouchDB = require('pouchdb');

var TokenRepository = function Constructor(config){
	this.config = config; 
	this.db = new PouchDB('my_db');

}


//authenticate

TokenRepository.prototype.Authenticate = function(access_code){
	this.config.code = access_code; 
	var self = this; 

	console.log('got the code '+ access_code);

	request.post({url:buildTokenUri(this.config)},
		function(error,response,body){
			if(error){
				console.log("Failed to get access token "+error);
				return;
			}
			console.log('got the access token '+body);

			var objs = JSON.parse(body);
			console.log('token is: '+objs.access_token);
			
			var doc ={'_id':'access_token'};
			doc = Object.assign(doc,objs);
			console.log('saving to DB: '+JSON.stringify(objs));
			self.db.remove('access_token').then(function(){
				self.db.put(doc).then(function(res){
					console.log('saved ');
				}).catch(function(err){
					console.log('failed to save '+err);
				}); 	
			}).catch(function(err){
				console.log('failed to remove '+err);
				self.db.put(doc).then(function(res){
					console.log('saved ');
				}).catch(function(err){
					console.log('failed to save '+err);
				}); 
			});
			
		});

	return; 
}


//Refresh Token
TokenRepository.prototype.RefreshToken = function(){


}

//Token Getter
TokenRepository.prototype.getToken = function(){
	var self = this;
	return new Promise(function(resolve,reject){
		self.db.get('access_token').then(function(doc){
			resolve(doc);
		}).catch(function(err){
			console.log(err);
		});

		
	});

	 

}

module.exports = TokenRepository;



function buildTokenUri(tokenConfig){
	var url = 'https://keener.me/api/oauth/token?grant_type=authorization_code&code='+tokenConfig.code+'&redirect_uri=http%3A%2F%2Flocalhost:4390/callback&client_id='+tokenConfig.id+'&client_secret='+tokenConfig.secret;
	console.log(url);
	return url;
}