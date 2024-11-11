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
            .setColor(0x0099FF)
            .setTitle("Among us")
            .setAuthor({ name: '@project_eta'})
            .addFields(
                {
                    name: "Roles",
                    value: "- Imposter (1)\n - Innocent (3)"
                },
                {
                    name: "Basic Game Rules",
                    value: "- Innocents Win if the Imposter Dies.\n - Innocents Win if they complete all option tasks + Guess the Correct Ghost.\n - Imposters Win when all innocents dies OR they are unable to complete the objectives.\n - Innocents can not touch the cursed object.\n - Imposters can hide equipment, however they cannot glitch or hide it in places unable to be reached.\n - Nobody can talk while dead unless they are the imposter.\n - The imposter can not take intentionally bad photos."
                },
                {
                    name: "Player - Custom Game Rules",
                    value: "Starting Sanity: 100\nSanity Pill Restroation: 40\nSanity Drain: 100\nSprinting: On\nPlayer Speed: 100\nFlashlights: On\nLose Items and Cosumables: off"
                },
                {
                    name: "Ghost - Custom Game Rules",
                    value: "Ghost Speed: 100\nRoaming Frequency: Medium\nChanging Favourite Room: Medium\nActivity Level: Medium\nEvent Frequency: Low\nFriendly Ghost: off\nGrace Period(s): 0\nHunt Duration: Medium\nKills Extend Hunts: Low\nEvidence Given: 2"
                },
                {
                    name: "Contract - Custom Game Rules",
                    value: "Setup Time: 60\nWeather: Random\nDoors Start Open: High\nNumber of Hiding Places: Low\nSanity Montior: off\nActivity Monitor: off\nFuse box at start of contract: off\nFuse Box visible on map: off\nCursed Possessions Quanitity: 3(random)"
                },
            )

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
            .setColor(0x0099FF)
            .setTitle("Among us")
            .setAuthor({ name: '@project_eta'})
            .setDescription("You are Innocent")
            .addFields(
                {
                    name: 'Role Rules',
                    value: '- You need to complete all optional tasks + get the correct ghost.\n - Find out who the imposter is. \n - Game ends when the imposter dies, the innocents did all the tasks or When all innocents die.'
                },
                {
                    name: 'Basic Game Rules',
                    value: '- You cant touch/use the cursed object. \n - You cant communicate while dead.'
                },
            )

        const imposterEmbeds = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("Among us")
            .setAuthor({ name: '@project_eta'})
            .setDescription("You are the Imposter")
            .addFields(
                {
                    name: 'Role Rules',
                    value: '- You need to stop the innocents from getting all the tasks and finding the correct ghost.\n - Stop them by shouting fake evidence. Hiding equipment. Any means. \n - Game ends when the imposter dies, the innocents did all the tasks or When all innocents die.'
                },
                {
                    name: 'Basic Game Rules',
                    value: '- You can use any cursed objects at your disposal. \n - You must say if your the imposter when you have died.'
                },
            )
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
