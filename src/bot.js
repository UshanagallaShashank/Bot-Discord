require("dotenv").config();
const {token}=process.env;
const {Client, Collection,GatewayIntentBits} = require('discord.js');
const fs=require("fs");
const client = new Client({
    intents:GatewayIntentBits.Guilds
})
client.commands = new Collection();
client.commandArray = [];
const functionsfolder=fs.readdirSync("./src/functions");
for (const folder of functionsfolder) {
    const functionsfile= fs.readdirSync(`./functions/${folder}`).filter((file) =>file.endswith(".js"));
    for(const file of functionsfile)require(`./functions/${folder}/${file}`)(client);
}