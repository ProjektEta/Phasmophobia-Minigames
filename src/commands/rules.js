const { EmbedBuilder } = require("discord.js");

const execute = function(interaction) {
    const rules_embed = new EmbedBuilder()
        .setAuthor({
          name: "Phasmophobia Among Us",
          url: "https://github.com/ProjektEta/Phaso-Amongus",
        })
        .setTitle("Among Us Rules.")
        .addFields(
          {
            name: "Roles",
            value: "There is 1 Imposter & 3 Innocents.\n\nThe Imposter needs to sabotage the innocents and help the ghost in killing them/hiding the ghosts type. They can do this by any means.\n\nThe Innocents need to guess the correct ghost type, survive and do all the optional tasks.",
            inline: false
          },
          {
            name: "Basic Game Rules.",
            value: "Anyone is allowed to use the cursed object, but can not use it for the sole purpose of wasting it. (so the imposter has no chance to use it)\nThe Imposter can hide equipment where it can be found by innocents.\nThe Imposter CAN'T take photos badly on purpose.\nThe Imposter CAN'T refuse to vote on photo deletion.\nThe Imposter CAN'T waste equipment on purpose (like using all the incense, salt)\nThe Imposter CAN'T make the truck leave unless they are the last one left.\nThe Imposter Must communicate that they are the imposter when they die.\nThe Innocents can not talk while dead.\nAt the end of the game, dead innocents and the imposters ghost guesses will not be counted.",
            inline: false
          },
          {
            name: "End Game Conditions.",
            value: "Imposter Wins by the following\n- All The Innocents Die.\n- The Innocents gets the Ghost type wrong\n- The Innocents can no longer be able to get one of the optional tasks\n\nInnocents Win\n- The Imposter Dies\n- Do all tasks and get the correct Ghost type.\n\nAt the end of the game, all ALIVE innocents must have the correct Ghost type, if one of them doesnt have the correct ghost type it counts as the innocents getting it wrong.\n\nThe Game Officially ends when the truck is leaving.",
            inline: false
          },
        )
        .setColor("#00b0f4")
        .setFooter({
          text: "Made by @project Eta",
        })
        .setTimestamp();
      

        interaction.reply({embeds: [rules_embed]})
}

module.exports = { execute }
