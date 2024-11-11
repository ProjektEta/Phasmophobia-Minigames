const { EmbedBuilder } = require("discord.js");

const execute = function(interaction) {

    const embed = new EmbedBuilder()
    .setAuthor({
      name: "Phasmophobia Among Us",
      url: "https://github.com/ProjektEta/Phaso-Amongus",
    })
    .setTitle("Phasmophobia Gamemode Setup")
    .addFields(
      {
        name: "Player Rules",
        value: "Starting Sanity: 100\nSanity Pill Restoration: 40\nSanity Drain Speed: 100\nSprinting: On\nPlayer Speed: 100\nFlashlights: On\nLose Items and Consumables: Off",
        inline: false
      },
      {
        name: "Ghost Rules",
        value: "Ghost Speed: 100\nRoaming Frequency: Medium\nChanging Favourite Room: Medium\nActivity Level: Medium\nEvent Frequency: Low\nFriendly Ghost: Off\nGrace Period(s): 0\nHunt Duration: Medium\nKills Extend Hunts: Low\nEvidence Given: 2",
        inline: false
      },
      {
        name: "Contract Rules",
        value: "Setup Time: 60\nWeather: Random\nDoors Starting Open: High\nNumber of hiding Places: Low\nSanity Monitor: Off\nActivity Monitor: Off\nFuse Box at start of Contract: Off\nFuse box visible on map: Off\nCursed Possessions Quantity: 3 (All random)",
        inline: false
      },
    )
    .setColor("#00b0f4");

    interaction.reply({embeds: [embed]})
}

module.exports = { execute }
