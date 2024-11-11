const { EmbedBuilder } = require("discord.js");

const execute = function(interaction) {
    var player1 = interaction.options.get("player-1");
    var player2 = interaction.options.get("player-2");
    var player3 = interaction.options.get("player-3");
    var player4 = interaction.options.get("player-4");

    console.log(player1);

    var randomChoice = Math.floor(Math.random() * 3);

    const innocentEmbed = new EmbedBuilder()
    .setAuthor({
      name: "Phasmophobia Among Us",
      url: "https://github.com/ProjektEta/Phaso-Amongus",
    })
    .setTitle("You Are Innocent.")
    .addFields(
      {
        name: "Role Rules",
        value: "Guess the Correct Ghost.\nComplete All Optional Tasks.\nDo not die.",
        inline: false
      },
      {
        name: "Basic Game Rules",
        value: "You can not waste the cursed object.\nYou can't communicate while dead.",
        inline: false
      },
      {
        name: "End Conditions.",
        value: "All Innocents Die.\nInnocents Do all the Tasks Required (And guess the correct ghost.)\nImposter Dies.\n\nIf the innocents leave, and one of the tasks isn't complete or they got the wrong ghost, Imposters win.\n\nEvery Innocent must have the correct Ghost. if 1 Innocent has it wrong (unless they are dead) then Imposters win.",
        inline: false
      },
    )
    .setColor("#45fc03")
    .setFooter({
      text: "Made by @project Eta",
    })
    .setTimestamp();

    const imposterEmbeds = new EmbedBuilder()
    .setAuthor({
      name: "Phasmophobia Among Us",
      url: "https://github.com/ProjektEta/Phaso-Amongus",
    })
    .setTitle("You Are The Imposter")
    .addFields(
      {
        name: "Role Rules",
        value: "Stop the Innocents from guessing the correct ghost and complete the tasks.\nYou are allowed to hide equipment.\nYou can say anything that is false/not true, to trick the innocents.",
        inline: false
      },
      {
        name: "Basic Game Rules",
        value: "\nYou are not allowed to take photos that are purposefully bad. However you are allowed to hide the Photo cameras.\nYou are not allowed to hide items outside the map where they can not be found.\nWhen you die you must communicate that you was the imposter.",
        inline: false
      },
      {
        name: "End Conditions.",
        value: "All Innocents Die.\nInnocents Do all the Tasks Required (And guess the correct ghost.)\nImposter Dies.\n\nIf the innocents leave, and one of the tasks isn't complete or they got the wrong ghost, Imposters win.\n\nEvery Innocent must have the correct Ghost. if 1 Innocent has it wrong (unless they are dead) then Imposters win.",
        inline: false
      },
    )
    .setColor("#fc031c")
    .setFooter({
      text: "Made by @project Eta",
    })
    .setTimestamp();
    if (randomChoice === 0) {
        // Player 1
        player1.user.send({embeds: [imposterEmbeds]})
        player2.user.send({embeds: [innocentEmbed]})
        player3.user.send({embeds: [innocentEmbed]})
        player4.user.send({embeds: [innocentEmbed]})
    }
    else if (randomChoice === 1) {
        // Player 2
        player2.user.send({embeds: [imposterEmbeds]})
        player1.user.send({embeds: [innocentEmbed]})
        player3.user.send({embeds: [innocentEmbed]})
        player4.user.send({embeds: [innocentEmbed]})
    }
    else if (randomChoice === 2) {
        // Player 3
        player3.user.send({embeds: [imposterEmbeds]})
        player2.user.send({embeds: [innocentEmbed]})
        player1.user.send({embeds: [innocentEmbed]})
        player4.user.send({embeds: [innocentEmbed]})
    }
    else if (randomChoice === 3) {
        // Player 4
        player4.user.send({embeds: [imposterEmbeds]})
        player2.user.send({embeds: [innocentEmbed]})
        player3.user.send({embeds: [innocentEmbed]})
        player1.user.send({embeds: [innocentEmbed]})
    }

    interaction.reply("Assigned!")
}

module.exports = {execute}
