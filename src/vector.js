const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env
const replies = require('./responses/replies');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('clientReady', () => {
    console.log('V.E.C.T.O.R. is Status: ONLINE ~bzzt~');
});

// When a message is sent, VECTOR will detect it
client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Ignore bot messages
    if (message.content.toLowerCase().includes('vector')) {
        const randomIndex = Math.floor(Math.random() * replies.length);
        message.reply(replies[randomIndex]);
    }
});

client.login(process.env.BOT_TOKEN); // Securing bot token and using it to login the bot