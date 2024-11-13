const {REST, Routes, ApplicationCommandOptionType, ApplicationCommandOptionWithChoicesMixin} = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name: 'rules',
        description: 'States the rules of the minigames',
        options: [ 
            {
                name: "gamemode",
                description: "select the gamemode to use.",
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: 'Among Us',
                        value: 'amongus'
                    },
                    {
                        name: 'Hide & Seek',
                        value: 'has'
                    },
                ],
                required: true,
            },
        ]
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
                /*
                choices: [
                    name: 'current',
                    value: <@1>
                ],
                */
                required: true,
            },
        ],
    },

    {
        name: 'setup',
        description: 'the settings for Phasmophobia',
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

