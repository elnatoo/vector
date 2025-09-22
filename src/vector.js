const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env

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
    if (message.author.bot) return; // Cancel reply if the author is a bot.
    message.reply("~bzzt~");
});

client.login(process.env.BOT_TOKEN); // Securing bot token