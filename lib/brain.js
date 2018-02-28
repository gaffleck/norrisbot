"use strict";

var LanguageParser = require('./languageParser');
var WorkflowRepository = require('./workflowRepository');


var Brain = function Constructor (){
	var languageParser = new LanguageParser();
	this.workflowRepository = new WorkflowRepository();

	var builtinPhrases = require('../builtins');

	console.log('learning...');
	Object.keys(builtinPhrases).forEach(function(key) {
	    languageParser.teach(key, builtinPhrases[key]);
	  });
	this.languageParser = languageParser;
	this.languageParser.think();
	console.log('finished learning');

}



Brain.prototype.reply =  function(statement,speaker){
	var self = this; 
	return new Promise(function (resolve, reject) {
    
	    	//what's happening?
		var activeWorkflow = self.workflowRepository.getActiveWorkflow(speaker);

		var reply = {		
			intent : self.languageParser.interpret(statement).guess,
			data : null};

		//what should I do?
		if(reply.intent == "STARTNEWWORKFLOW"){
			self.workflowRepository.setActiveWorkflow();
		}

		if(reply.intent == "GETALLWORKFLOWS"){
			try{
				console.log('get all workflows in brain');
				self.workflowRepository.getAllWorkflows().then(function(res){
					reply.data = res;
					//console.log(JSON.stringify('Reply Data '+JSON.stringify(reply.data)));
					resolve(reply);			
				});	
				
			}catch(error){
				reject(error);
			}
		}

		//what to reply to the user
		
 
	});


}

Brain.prototype.speak = function(){

}

module.exports = Brain; 