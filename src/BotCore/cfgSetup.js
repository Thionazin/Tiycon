const ServerSettings = require('../Schemas/serverSettings.js')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SettingsDB', {useNewUrlParser: true});

exports.imported = function() {
    console.log("First time setup module imported successfully!")
}

exports.setUp = function(newServer) {
    ServerSettings.findOne({
        guildID: newServer.id
    }, (err, guildSettings) => {
        if(err) console.log('Well, uh....');
        if(!guildSettings) {
            const newSettings = new ServerSettings({
                guildID: newServer.id,
                cmdPrefix: "+"
            })
            newSettings.save().catch(err => console.log(err));
        }
        else
        {
            console.log('Nothing happened.')
        }
    })
}
