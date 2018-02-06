"use strict";

var request = require('request-promise');
var TokenRepository = require('./tokenRepository');




var WorkflowRepository = function Constructor (){
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
	this.activeWorkflows = {};
	this.tokenRepository = new TokenRepository(credentials.client);
}

WorkflowRepository.prototype.getActiveWorkflow = function(user){
	//get the active workflow for the user if any
	return this.activeWorkflows[user];
}

WorkflowRepository.prototype.setActiveWorkflow = function(user,workflow){
	//set the active workflow for this user
	this.activeWorkflows[user] = workflow;
	return this.getActiveWorkflow(user);
}

WorkflowRepository.prototype.getAllWorkflows =  function(){
	//return a list of workflows 
	var self = this; 

	return new Promise(function(resolve,reject){

		self.tokenRepository.getToken().then(function(token){
			console.log('Token value: '+JSON.stringify(token));
			var options = {
        		url: 'https://keener.me/api/workflows',
        		headers: {"Authorization": "Bearer "+token.access_token}
    	};	

    	console.log('making http call for workflows '+JSON.stringify(options));
	    	
	    request.get(options).then(function(workflows){
	    	resolve(workflows);
	    }).catch(function(err){
	    	console.log(err);
	    });


    	
	});

	


	});



    
}


module.exports = WorkflowRepository;