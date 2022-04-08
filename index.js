//import Client library and Intents library from discord.js
const { Client, Intents, Message } = require('discord.js');
//import config file
const config = require('./config.json');

//Initialize Client class   //Intents returns every single event that occurs on our server
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

//Run function once, when the client is online
client.once('ready', () => {
    console.log("Ready!");
})

//Run function when a certain condition is met
client.on('messageCreate', (message) => {
    //make sure the bot isn't replying to itself
    if(message.author.id === client.user.id) return;

    //looks to see what user typed and replies back with message
    if(message.content === "ping") {
        message.reply("pong")
    }
})

client.login(config.token) //grab token from config file