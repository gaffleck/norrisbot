// bin/bot.js

'use strict';

var NorrisBot = require('../lib/norrisbot');

var token = 'xoxb-287169468385-pKcFDi7l9EzNres6ylEbM21s';
var dbPath = process.env.BOT_DB_PATH;
var name = 'onboardingroboto';

var norrisbot = new NorrisBot({
    token: token,
    dbPath: dbPath,
    name: name
});

norrisbot.run();