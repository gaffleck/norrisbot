// bin/bot.js

'use strict';

var NorrisBot = require('../lib/norrisbot');
var Brain = require('../lib/brain');
require('../lib/server');
var http = require('http');


var token = process.env.SLACK_TOKEN;
var dbPath = process.env.BOT_DB_PATH;
var language = process.env.LANGUAGE;
var name = process.env.NAME;
console.log('got this name '+name);
var _brain = new Brain();

var norrisbot = new NorrisBot({
    token: token,
    dbPath: dbPath,
    name: name, 
    brain: _brain, 
    language: language
});

norrisbot.run();

