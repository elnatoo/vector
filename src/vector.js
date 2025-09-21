const { Client, GatewayIntentBits } = require('discord.js');

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

require('dotenv').config(); // Load environment variables from .env
const botToken = process.env.BOT_TOKEN;
client.login(botToken);