"use strict";

var NLP = require('natural');
var fs = require('fs');


var LanguageParser = function Constructor (){
  this.classifier = new NLP.LogisticRegressionClassifier();
  this.minConfidence = 0.7;
  console.log('creating new LanguageParser');
}

LanguageParser.prototype.teach = function(label, phrases) {
  console.log('min conf' + this.minConfidence);
  phrases.forEach(function(phrase) {
    //console.log('Ingesting example for ' + label + ': ' + phrase);
    this.classifier.addDocument(phrase.toLowerCase(), label);
  }.bind(this));
  return this;
};

LanguageParser.prototype.think = function() {
  this.classifier.train();

  // save the classifier for later use
  var aPath = './src/classifier.json';
  this.classifier.save(aPath, function(err, classifier) {
    // the classifier is saved to the classifier.json file!
    console.log('Writing: Creating a Classifier file in SRC.');
    });

  return this;
};

LanguageParser.prototype.interpret = function(phrase) {
  var guesses = this.classifier.getClassifications(phrase.toLowerCase());

  var guess = guesses.reduce(toMaxValue);
  console.log(JSON.stringify(guess));
  return {
    probabilities: guesses,
    guess: guess.value > this.minConfidence ? guess.label : "NOT FOUND"
  };
};

function toMaxValue(x, y) {
  return x && x.value > y.value ? x : y;
}

module.exports = LanguageParser; 

