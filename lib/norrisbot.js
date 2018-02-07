//lib/norrisbot.js

'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var Bot = require('slackbots');
var Mustache = require('mustache');

var request = require('request');

var NorrisBot = function Constructor(settings) {
    this.settings = settings;
    this.settings.name = this.settings.name;
    this.brain = settings.brain;
    this.user = null;
    this.language = settings.language;
    this.messages = require('../messages/replies');
};

NorrisBot.prototype.run = function () {
    NorrisBot.super_.call(this, this.settings);

    this.on('start', this._onStart);
    this.on('message', this._onMessage);
    
};

NorrisBot.prototype._onStart = function () {
    this._loadBotUser();
    
};


NorrisBot.prototype._loadBotUser = function () {
    var self = this;
    console.log('name is '+self.name);
    this.user = this.users.filter(function (user) {
        return user.name === self.name;
    })[0];
    console.log(this.user);
};


NorrisBot.prototype._onMessage = function (message) {
    this.message = message;
    var self = this;
    

    if (this._isChatMessage(message) &&
        this._isChannelConversation(message) &&
        !this._isFromNorrisBot(message) ) 
        {
        console.log(JSON.stringify(message));
        //console.log('logging message '+JSON.stringify(message));
        self.brain.reply(message.text,message.user).then(reply => {
            console.log('reply '+JSON.stringify(reply));
            console.log('mess: '+JSON.stringify(self.message));
            var channel = self._getChannelById(self.message.channel);
            var message = Mustache.render(self.messages[reply.intent][this.language].text,reply.data);//self._formatReply(self.messages[reply.intent],reply.data);
            //console.log('reply data '+JSON.stringify(reply.data));
            self.postTo(channel.name, message, {as_user: true});

        });
    }

    if(this._isGroupJoinMessage(message)){
        console.log(JSON.stringify(message));
        var channel = self.message.channel;
        console.log('Bot joined this channel: '+ channel.name);
        var message = self.messages["CHANNEL_JOIN"][this.language];
        message.text = Mustache.render(message.text,null);//self._formatReply(self.messages[reply.intent],reply.data);
            //console.log('reply data '+JSON.stringify(reply.data));
        //self.postTo(channel.name, message, {as_user: true});
        self.postTo(channel.name, "I got in!", {as_user: true});

    }
};

NorrisBot.prototype._formatReply = function formatReply(reply, settings){
    var self = this; 
    return ;
}


NorrisBot.prototype.postFormattedMessageToChannel = function(channelName,message) {
    console.log('sending fancy message');
    //message.token = this.token;
    var headersOpt = {  
    "content-type": "application/json",
    "Authorization": "Bearer "+this.token
    };

    message.channel = channelName;
    console.log(message);
    request({
    method: 'post',
    url: 'https://slack.com/api/chat.postMessage', 
    form:message,
    headers: headersOpt, 

    json: true
    },
    function (error, response, body) {
        //console.log(response);
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
        else{
            console.log(error);
        }
    }
);
};


NorrisBot.prototype._isGroupJoinMessage = function (message) {
    return message.type === 'group_joined';
};


NorrisBot.prototype._isChatMessage = function (message) {
    return message.type === 'message' && Boolean(message.text);
};


NorrisBot.prototype._isChannelConversation = function (message) {
    
    return typeof message.channel === 'string' &&
        message.channel[0] === 'C';
};

NorrisBot.prototype._isFromNorrisBot = function (message) {
    
    return message.user === this.user.id;
};


NorrisBot.prototype._getChannelById = function (channelId) {
    
    return this.channels.filter(function (item) {
        return item.id === channelId;
    })[0];
};

// inherits methods and properties from the Bot constructor
util.inherits(NorrisBot, Bot);

module.exports = NorrisBot;