const { Client, GatewayIntentBits } = require('discord.js')
require("dotenv").config()

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

client.login(process.env.TOKEN)

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
})

client.on("messageCreate",(message) => {
    if(message.content == "hi"){
        message.reply("hello")
    }
})
