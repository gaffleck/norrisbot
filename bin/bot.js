// bin/bot.js

'use strict';

var NorrisBot = require('../lib/norrisbot');
var Brain = require('../lib/brain');


var token = process.env.SLACK_TOKEN;
var dbPath = process.env.BOT_DB_PATH;
var name = 'onboardingroboto';
var _brain = new Brain();

var builtinPhrases = require('../builtins');

console.log('learning...');
Object.keys(builtinPhrases).forEach(function(key) {
    _brain.teach(key, builtinPhrases[key]);
  });
_brain.think();
console.log('finished learning');

var norrisbot = new NorrisBot({
    token: token,
    dbPath: dbPath,
    name: name, 
    brain: _brain
});

norrisbot.run();

