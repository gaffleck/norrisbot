// bin/bot.js

'use strict';

var NorrisBot = require('../lib/norrisbot');
var pwd = require('./pwd');

var token = pwd.token;
var dbPath = process.env.BOT_DB_PATH;
var name = 'onboardingroboto';

var norrisbot = new NorrisBot({
    token: token,
    dbPath: dbPath,
    name: name
});

norrisbot.run();