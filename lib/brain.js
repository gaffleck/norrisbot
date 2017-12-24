"use strict";

var LanguageParser = require('./LanguageParser');
var WorkflowRepository = require('./WorkflowRepository');


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



Brain.prototype.reply = function(statement,speaker){
	
	//what's happening?
	var activeWorkflow = this.workflowRepository.getActiveWorkflow(speaker);

	//what did you say?
	var intent = this.languageParser.interpret(statement);

	//what should I do?
	if(intent.guess == "STARTNEWWORKFLOW"){
		this.workflowRepository.setActiveWorkflow();
	}


	//what to reply to the user

	return intent.guess === null? "NOTFOUND":intent.guess;

}

Brain.prototype.speak = function(){

}

module.exports = Brain; 