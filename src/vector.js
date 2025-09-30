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

// Sending a signal to the console once the bot is online
client.once('clientReady', () => {
    console.log('V.E.C.T.O.R. is online! STATUS: ONLINE ~bzzt~');
});

// Listen for any sent messages
client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Ignore bot messages = no spam
    if (message.content.toLowerCase().includes('vector')) {
        const randomIndex = Math.floor(Math.random() * replies.length);
        message.reply(replies[randomIndex]);
    }
});

// Listen for any sent messages asynchronously
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.toLowerCase().includes('tauros')) {
        const botReply = await message.reply('...');
        message.react('💥');

        setTimeout(() => {
            botReply.edit('Get ready to get rekt');
        }, 2000);

        setTimeout(() => {
            message.delete();
        }, 4000);

        setTimeout(() => {
            botReply.edit('Nothing to see here, ladies and gents! Carry on. 😎');
        }, 6000);

        setTimeout(() => {
            botReply.edit('⚠️ This message will self-destruct in T-2 seconds!');
        }, 8000);

        setTimeout(() => {
            botReply.delete();
        }, 10000);
    }
});

// Logs the bot into Discord using the token stored in the environment variables file.
// The token is a secret key that authenticates a bot, allowing it to connect and interact with the Discord API.
client.login(process.env.BOT_TOKEN);