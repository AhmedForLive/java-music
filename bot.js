const express = require('express');
const app = express();
const fs = require("fs")
var shell = require('shelljs'); 
var request = require('request');
app.get("/", (request, response) => response.send("ok"))
const listener = app.listen(process.env.PORT || 3000, function() {});


var options = {
    url: "https://github.com/jagrosh/MusicBot/releases/download/0.3.1/JMusicBot-0.3.1.jar",
    method: "get",
    encoding: null
};

request(options, function (error, response, body) {
    if (error) {
        console.error('error:', error);
    } else {
fs.writeFile("bot.jar", body, function(err) {
    if(err) {
        return console.log(err);
    }
shell.exec('java -jar bot.jar')
});
    }
});
