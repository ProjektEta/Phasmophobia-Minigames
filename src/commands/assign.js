const { Innocent_Embed, Imposter_Embed } = require("../tools/embeds.js")

const execute = function(interaction) {

    var player1 = interaction.options.get("player-1");
    var player2 = interaction.options.get("player-2");
    var player3 = interaction.options.get("player-3");
    var player4 = interaction.options.get("player-4");

    console.log(player1);

    var randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        // Player 1
        player1.user.send({embeds: [Imposter_Embed]})
        player2.user.send({embeds: [Innocent_Embed]})
        player3.user.send({embeds: [Innocent_Embed]})
        player4.user.send({embeds: [Innocent_Embed]})
    }
    else if (randomChoice === 1) {
        // Player 2
        player2.user.send({embeds: [Imposter_Embed]})
        player1.user.send({embeds: [Innocent_Embed]})
        player3.user.send({embeds: [Innocent_Embed]})
        player4.user.send({embeds: [Innocent_Embed]})
    }
    else if (randomChoice === 2) {
        // Player 3
        player3.user.send({embeds: [Imposter_Embed]})
        player2.user.send({embeds: [Innocent_Embed]})
        player1.user.send({embeds: [Innocent_Embed]})
        player4.user.send({embeds: [Innocent_Embed]})
    }
    else if (randomChoice === 3) {
        // Player 4
        player4.user.send({embeds: [Imposter_Embed]})
        player2.user.send({embeds: [Innocent_Embed]})
        player3.user.send({embeds: [Innocent_Embed]})
        player1.user.send({embeds: [Innocent_Embed]})
    }

    interaction.reply("Assigned!")

}

module.exports = {execute}
