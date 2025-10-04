const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env
const replies = require('./responses/replies');
const botAppreciationTriggers = require('./triggers/botAppreciationTriggers');

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
    const userMessage = message.content.toLowerCase();

    switch(true) {
        case botAppreciationTriggers.some(trigger => userMessage.includes(trigger)):
            message.channel.send('<:bzztSHINY:917575652377501736> : \\*blushes\\*')
            break;
        case userMessage.includes('vector'):
            message.react('<:bzztSHINY:917575652377501736>');
            const randomIndex = Math.floor(Math.random() * replies.length);
            message.reply(`<:bzztSHINY:917575652377501736> : ${replies[randomIndex]}`);
            break;
        default:
            break;
    }
});

// Listen for any sent messages asynchronously
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    const userMessage = message.content.toLowerCase();
    let botReply = '';

    // Build a regex to match 't', then 'a', then 'u', then 'r', then 'o', then 's'
    // This regex will allow for any characters between the letters
    const taurosRegex = /t.*a.*u.*r.*o.*s/;
    const earthquakeRegex = /e.*a.*r.*t.*h.*q.*u.*a.*k.*e/;
    
    switch (true) {
        case userMessage.includes('tauros'):
        case userMessage.includes('earthquake'):
            message.react('🚨');
            botReply = await message.reply('...');

            setTimeout(async () => { await botReply.edit('Get ready to get rekt'); }, 2000);
            setTimeout(async () => { await message.delete(); }, 5000);
            setTimeout(async () => { await botReply.edit('Nothing to see here, ladies and gents! Carry on. 😎'); }, 8000);
            setTimeout(async () => { await botReply.edit('⚠️ **This message will self-destruct in T-2 seconds!**'); }, 10000);
            setTimeout(async () => { await botReply.edit('https://media.tenor.com/-pMfQcryj3cAAAAi/explosion-boom.gif'); }, 12000);
            setTimeout(async () => { await botReply.delete(); }, 14000);

            break;
        case userMessage.includes('tauro'):
        case userMessage.includes('eq'):
        case taurosRegex.test(userMessage):
        case earthquakeRegex.test(userMessage):
            message.react('🤨');
            botreply = await message.reply('https://tenor.com/view/dexter-doakes-squint-stare-suspicious-gif-14432154109786838518');

            break;
        case userMessage.includes('sip'):
            message.react('<:sansSIP:1422422942414934026>');
            botReply = await message.channel.send(`**STATUS:** Sippin' on oil ~bzzt~`);

            setTimeout(async () => { await botReply.edit('\\*sips\\*'); }, 3000);
            setTimeout(async () => { await botReply.edit('**STATUS:** Just sipped ~bzzt~'); }, 6000);
            break;

        case userMessage.includes('pkpog'):
        case userMessage.includes('pokepog'):
            botReply = await message.channel.send(`Wait for it...`);

            setTimeout(async () => { await message.react('<a:pokepoggersMAX:953631233076785152>'); }, 3000);
            setTimeout(async () => { await botReply.edit('<a:pokepoggersMAX:953631233076785152>'); }, 5000);
            
            break;

        default:
            break;
    }

    
});

// Logs the bot into Discord using the token stored in the environment variables file.
// The token is a secret key that authenticates a bot, allowing it to connect and interact with the Discord API.
client.login(process.env.BOT_TOKEN);