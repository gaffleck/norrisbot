"use strict";

var request = require('request-promise');
var tokenRepository = require('./tokenRepository');




var WorkflowRepository = function Constructor (){
	this.activeWorkflows = {};
	
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


	var options = {
        url: 'https://keener.me/api/workflows',
        headers: {"Authorization": "Bearer"+tokenRepository.getToken()}
    };

    console.log('making http call for workflows');
    return request.get(options);

}


module.exports = WorkflowRepository;