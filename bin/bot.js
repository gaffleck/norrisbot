// bin/bot.js

'use strict';

var NorrisBot = require('../lib/norrisbot');


var token = process.env.SLACK_TOKEN;
var dbPath = process.env.BOT_DB_PATH;
var name = 'onboardingroboto';

var norrisbot = new NorrisBot({
    token: token,
    dbPath: dbPath,
    name: name
});

norrisbot.run();