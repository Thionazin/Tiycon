const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./cfg/secrets.json");
const ServerSettings = require('./src/Schemas/serverSettings.js')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SettingsDB', {useNewUrlParser: true});
const essentials = require("./src/BotCore/essentialCommands");
const configer = require("./src/BotCore/cfgSetup");

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildCreate', guild => {
    configer.setUp(guild)
});

client.on('message', (msg) => {
    if (msg.author.bot) return;
    ServerSettings.findOne({
        guildID: msg.channel.guild.id
    }, (err, guildSettings) => {
        if(err) console.log('Really shouldnt happen. You should look in to this.');
        else
        {
            if(msg.content.startsWith(guildSettings.cmdPrefix))
            {

            }
        }
    })
});

client.login(token.token);
