"use strict";


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


module.exports = WorkflowRepository;