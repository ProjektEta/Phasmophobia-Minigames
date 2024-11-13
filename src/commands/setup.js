const { AmongUS_Setup_Embed } = require("../tools/embeds.js")

const execute = function(interaction) {
  interaction.reply({embeds: [AmongUS_Setup_Embed]})
}

module.exports = { execute }
