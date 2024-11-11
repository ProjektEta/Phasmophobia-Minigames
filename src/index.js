const { Client, IntentsBitField, EmbedBuilder } = require("discord.js");
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

  try {
    const {execute} = require(`./commands/${interaction.commandName}.js`);
    execute(interaction);
  } catch(e) {
    console.log(e)
  }

})

client.login(process.env.TOKEN)
