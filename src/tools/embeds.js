const { EmbedBuilder } = require("discord.js");

const Innocent_Embed = new EmbedBuilder()
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
    value: "All Innocents Die.\nInnocents Do all the Tasks Required (And guess the correct ghost.)\nApostle Dies.\n\nIf the innocents leave, and one of the tasks isn't complete or they got the wrong ghost, Apostle win.\n\nEvery Innocent must have the correct Ghost. if 1 Innocent has it wrong (unless they are dead) then the Apostle wins.",
    inline: false
  },
)
.setColor("#45fc03")
.setFooter({
  text: "Made by @project Eta",
})
.setTimestamp();

const Imposter_Embed = new EmbedBuilder()
.setAuthor({
  name: "Phasmophobia Among Us",
  url: "https://github.com/ProjektEta/Phaso-Amongus",
})
.setTitle("You Are The Apostle")
.addFields(
  {
    name: "Role Rules",
    value: "Stop the Innocents from guessing the correct ghost and completing the tasks.\nYou are allowed to hide equipment.\nYou can say anything that is false/not true, to trick the innocents.",
    inline: false
  },
  {
    name: "Basic Game Rules",
    value: "\nYou are not allowed to take photos that are purposefully bad. However you are allowed to hide the Photo cameras.\nYou are not allowed to hide items outside the map where they can not be found.\nYou can not hold key items for the sole purpose of soft locking the game",
    inline: false
  },
  {
    name: "End Conditions.",
    value: "All Innocents Die.\nInnocents Do all the Tasks Required (And guess the correct ghost.)\nApostle Dies.\n\nIf the innocents leave, and one of the tasks isn't complete or they got the wrong ghost, Apostle win.\n\nEvery Innocent must have the correct Ghost. if 1 Innocent has it wrong (unless they are dead) then The Apostle wins.",
    inline: false
  },
)
.setColor("#fc031c")
.setFooter({
  text: "Made by @project Eta",
})
.setTimestamp();

const AmongUS_Rules_Embed = new EmbedBuilder()
.setAuthor({
  name: "Phasmophobia Among Us",
  url: "https://github.com/ProjektEta/Phaso-Amongus",
})
.setTitle("Among Us Rules.")
.addFields(
  {
    name: "Roles",
    value: "There is 1 Apostle & 3 Innocents.\n\nThe Apostle needs to sabotage the innocents and help the ghost in killing them/hiding the ghosts type. They can do this by any means.\n\nThe Innocents need to guess the correct ghost type, survive and do all the optional tasks.",
    inline: false
  },
  {
    name: "Basic Game Rules.",
    value: "Anyone is allowed to use the cursed object, but can not use it for the sole purpose of wasting it. (so the Apostle has no chance to use it)\nThe Apostle can hide equipment where it can be found by innocents.\nThe Apostle CAN'T take photos badly on purpose.\nThe Apostle CAN'T refuse to vote on photo deletion.\nThe Apostle CAN'T waste equipment on purpose (like using all the incense, salt)\nThe Apostle CAN'T make the truck leave unless they are the last one left.\nThe Innocents can not talk while dead.\nAt the end of the game, dead innocents and the Apostle ghost guesses will not be counted.\nthe Apostle CAN NOT hold key items in his inventory for the sole purpose of soft locking the game. (for example holding both parabolic microphones while there is a parabolic microphone task.)",
    inline: false
  },
  {
    name: "End Game Conditions.",
    value: "Apostle Wins by the following\n- All The Innocents Die.\n- The Innocents gets the Ghost type wrong\n- The Innocents can no longer be able to get one of the optional tasks\n\nInnocents Win\n- The Apostle Dies\n- Do all tasks and get the correct Ghost type.\n\nAt the end of the game, all ALIVE innocents must have the correct Ghost type, if one of them doesnt have the correct ghost type it counts as the innocents getting it wrong.\n\nThe Game Officially ends when the truck is leaving.",
    inline: false
  },
)
.setColor("#00b0f4")
.setFooter({
  text: "Made by @project Eta",
})
.setTimestamp();

const AmongUS_Setup_Embed = new EmbedBuilder()
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

const HideAndSeek_Rules = new EmbedBuilder()
.setAuthor({
  name: "Phasmophobia  Hide & Seek",
  url: "https://github.com/ProjektEta/Phasmophobia-Minigames",
})
.setTitle("Rules")
.addFields(
  {
    name: "Roles",
    value: "1 Apostle\n3 Innocents",
    inline: false
  },
  {
    name: "Basic Game Rules",
    value: "On the Round start, the Apostle can choose 3 items to hide within the map. (HAS TO BE INSIDE THE BUILDING)\nThe Apostle can hide as much until they die OR their sanity is below 50 (Innocents will look at the sanity monitor). The Apostle CAN NOT use Sanity Medication.\nApostle will not play during the game, only spectate.\nApostle CAN NOT hide items in impossible places to get to.\nApostle CAN NOT hide sanity medication.\nApostle CAN hide the cursed object.\nApostle can not start the truck, only when they are the last one left.",
    inline: false
  },
  {
    name: "Game end conditions",
    value: "The Game ends when the truck leaves.\nApostles win if the ghost hasn't been guessed correcting (or one optional task isnt completed.)\nInnocents win if all innocents get the ghost correct and all optional tasks are completed.",
    inline: false
  },
)
.setColor("#005ef5")
.setFooter({
  text: "Made by @project_eta",
})
.setTimestamp();

module.exports = { AmongUS_Rules_Embed, Imposter_Embed, Innocent_Embed, AmongUS_Setup_Embed, HideAndSeek_Rules }
