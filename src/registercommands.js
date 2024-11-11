const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'rules',
        description: 'States the rules of the minigame'
    },

    {
        name: 'assign',
        description: 'assigns the roles of the players.',
        options: [
            {
                name: "player-1",
                description: "first player",
                type: ApplicationCommandOptionType.User,
                required: true,
            },

            {
                name: "player-2",
                description: "second player",
                type: ApplicationCommandOptionType.User,
                required: true,
            },

            {
                name: "player-3",
                description: "third player",
                type: ApplicationCommandOptionType.User,
                required: true,
            },

            {
                name: "player-4",
                description: "fourth player",
                type: ApplicationCommandOptionType.User,
                required: true,
            },
        ]
    }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Resgister Commands")


        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log("Commands Registered")
    } catch (error) {
        console.log(error)
    }

})();

