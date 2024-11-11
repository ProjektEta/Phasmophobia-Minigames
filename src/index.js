const { Client, IntentsBitField, EmbedBuilder, Embed } = require("discord.js");
require('dotenv').config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.DirectMessages,
    ]
})

client.on('ready', (c) => {
    console.log(c.user.tag);
});

client.on("interactionCreate", (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "rules") {

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
            value: "The Imposter is the only person allowed to use/pick up the cursed object.\nThe Imposter can hide equipment where it can be found by innocents.\nThe Imposter CAN'T take photos badly on purpose.\nThe Imposter CAN'T refuse to vote on photo deletion.\nThe Imposter CAN'T waste equipment on purpose (like using all the incense, salt)\nThe Imposter CAN'T make the truck leave unless they are the last one left.\nThe Imposter Must communicate that they are the imposter when they die.\nThe Innocents can not talk while dead.\nAt the end of the game, dead innocents and the imposters ghost guesses will not be counted.",
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

    if (interaction.commandName === "assign") {
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
            value: "Guess the Correct Ghost.\nComplete All Optional Tasks.\nYou can't touch or use the cursed object.\nDo not die.",
            inline: false
          },
          {
            name: "Basic Game Rules",
            value: "Innocents can't use the cursed object, but imposters can.\nYou can't communicate while dead.",
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
            value: "Stop the Innocents from guessing the correct ghost and complete the tasks.\nYou are allowed to hide equipment.\nYou can use the Cursed Object.\nYou can say anything that is false/not true, to trick the innocents.",
            inline: false
          },
          {
            name: "Basic Game Rules",
            value: "Imposters Can use the cursed object.\nYou are not allowed to take photos that are purposefully bad. However you are allowed to hide the Photo cameras.\nYou are not allowed to hide items outside the map where they can not be found.\nWhen you die you must communicate that you was the imposter.",
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
})

client.login(process.env.TOKEN)
