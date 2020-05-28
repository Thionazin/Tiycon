const mongoose = require("mongoose");

const serverSettings = mongoose.Schema({
    guildID: String,
    cmdPrefix: String
})

module.exports = mongoose.model("settings", serverSettings)
