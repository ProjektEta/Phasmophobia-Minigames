const { AmongUS_Rules_Embed, HideAndSeek_Rules } = require('../tools/embeds.js')

const execute = function(interaction) {
    var gamemode = interaction.options.get("gamemode").value;

    if (gamemode === "amongus") 
    {
        interaction.reply({embeds: [AmongUS_Rules_Embed]})
    }

    if (gamemode === "has")
    {
        interaction.reply({embeds: [HideAndSeek_Rules]})
    }
}

module.exports = { execute }
