const { Client, GatewayIntentBits, EmbedBuilder, AttachmentBuilder } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env
const replies = require('./responses/replies');
const botAppreciationTriggers = require('./triggers/botAppreciationTriggers');

// Import functions
const translateToLeetspeak = require('./functions/translateToLeetspeak');

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
    if (message.author.bot || message.content.startsWith('!')) return; // Ignore bot messages + commands
    const userMessage = message.content.toLowerCase();
    let responseImage = new AttachmentBuilder();
    let responseEmbed = new EmbedBuilder();
    const mugshotArray = ['default', 'happy', 'inspired', 'joyful', 'shouting', 'emotional'];

    switch(true) {
        case botAppreciationTriggers.some(trigger => userMessage.includes(trigger)):
            responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotArray[5]}.png`);
            responseEmbed = new EmbedBuilder()
                .setDescription(`Thank you! \\*blushes\\*`)
                .setThumbnail(`attachment://${mugshotArray[5]}.png`);

            message.channel.send({ 
                embeds: [responseEmbed], 
                files: [responseImage]
            });

            break;
        case userMessage.includes('vector'):
            message.react('<:bzztSHINY:917575652377501736>');
            const randomIndex = Math.floor(Math.random() * replies.length);
            const mugshotIndex = Math.floor(Math.random() * (mugshotArray.length - 1));

            responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotArray[mugshotIndex]}.png`);
            responseEmbed = new EmbedBuilder()
                .setDescription(`${replies[randomIndex]}`)
                .setThumbnail(`attachment://${mugshotArray[mugshotIndex]}.png`);

            message.channel.send({ 
                embeds: [responseEmbed], 
                files: [responseImage]
            });

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
    let responseImage = new AttachmentBuilder();
    let responseEmbed = new EmbedBuilder();

    const mugshotOptions = [
        'angry',      /* 0 */
        'crying',     /* 1 */
        'default',    /* 2 */
        'determined', /* 3 */
        'dizzy',      /* 4 */
        'emotional',  /* 5 */
        'happy',      /* 6 */
        'inspired',   /* 7 */
        'joyful',     /* 8 */
        'pensive',    /* 9 */
        'relieved',   /* 10 */
        'sad',        /* 11 */
        'shouting',   /* 12 */
        'stunned',    /* 13 */
        'surprised',  /* 14 */
        'tinkering'   /* 15 */
    ];

    // Regex to match 'tauros' or 'earthquake'
    // This regex will allow for any characters between the letters
    // This expression should also identify l33t-speak/accents
    const taurosRegex = /[t7+ţțṫṯṭ][\u0300-\u036f']?.*[a4@àáâäãåāáǎ][\u0300-\u036f']?.*[uvüµùúûū][\u0300-\u036f']?.*[r2®řŕ][\u0300-\u036f']?.*[o0ø()òóôöõōőǒ][\u0300-\u036f']?.*[s5$zśšşș][\u0300-\u036f']?/i;
    const earthquakeRegex = /[e3èéêëēėę][\u0300-\u036f']?.*[a4@àáâäãåāáǎ][\u0300-\u036f']?.*[r2řŕ][\u0300-\u036f']?.*[t7+ţțṫṯṭ][\u0300-\u036f']?.*[h#ḥĥ][\u0300-\u036f']?.*[q9ɋ][\u0300-\u036f']?.*[uµvùúûū][\u0300-\u036f']?.*[a4@àáâäãåāáǎ][\u0300-\u036f']?.*[k<ķ][\u0300-\u036f']?.*[e3èéêëēėę][\u0300-\u036f']?/i;
    
    switch (true) {
        case userMessage.includes('tauros'):
        case userMessage.includes('earthquake'):
            message.react('🚨');
            responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[3]}.png`);
            responseEmbed = new EmbedBuilder()
                .setDescription('...')
                .setThumbnail(`attachment://${mugshotOptions[3]}.png`);

            botReply = await message.reply({ 
                embeds: [responseEmbed], 
                files: [responseImage]
            });

            setTimeout(async () => {
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[0]}.png`)
                responseEmbed.setDescription('Get ready to get rekt')
                    .setThumbnail(`attachment://${mugshotOptions[0]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 2000);

            setTimeout(async () => { 
                await message.delete(); 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[10]}.png`)
                responseEmbed.setDescription('Setting variable targetEliminated = true')
                    .setThumbnail(`attachment://${mugshotOptions[10]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 5000);

            setTimeout(async () => {
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[8]}.png`)
                responseEmbed.setDescription('Nothing to see here, ladies and gents! Carry on. 😎')
                    .setThumbnail(`attachment://${mugshotOptions[8]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 8000);

            setTimeout(async () => {
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[2]}.png`)
                responseEmbed.setDescription('⚠️ **This message will self-destruct in T-2 seconds!**')
                    .setThumbnail(`attachment://${mugshotOptions[2]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 10000);

            setTimeout(async () => { 
                await botReply.edit({
                    content: 'https://media.tenor.com/-pMfQcryj3cAAAAi/explosion-boom.gif', 
                    embeds: [], 
                    files: []
                }); 
            }, 12000);

            setTimeout(async () => { await botReply.delete(); }, 13550);

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

            // TO-DO: Create an array of drinks and pick one at random
            responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[12]}.png`);
            responseEmbed = new EmbedBuilder()
                .setDescription(`**STATUS:** Sippin' on oil ~bzzt~`)
                .setThumbnail(`attachment://${mugshotOptions[12]}.png`);

            botReply = await message.channel.send({ 
                embeds: [responseEmbed], 
                files: [responseImage]
            });

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[9]}.png`)
                responseEmbed.setDescription('\\*sips\\*')
                    .setThumbnail(`attachment://${mugshotOptions[9]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 3000);

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[8]}.png`)
                responseEmbed.setDescription('**STATUS:** Just sipped ~bzzt~')
                    .setThumbnail(`attachment://${mugshotOptions[8]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 6000);

            break;
        case userMessage.includes('pkpog'):
        case userMessage.includes('pokepog'):
            responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[2]}.png`);
            responseEmbed = new EmbedBuilder()
                .setDescription(`Wait for it...`)
                .setThumbnail(`attachment://${mugshotOptions[2]}.png`);

            botReply = await message.channel.send({ 
                embeds: [responseEmbed], 
                files: [responseImage]
            });

            setTimeout(async () => { await message.react('<a:pokepoggersMAX:953631233076785152>'); }, 3000);

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[12]}.png`)
                responseEmbed.setDescription('POKEPOGGERS! <a:pokepoggersMAX:953631233076785152>')
                    .setThumbnail(`attachment://${mugshotOptions[12]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 5000);
            
            break;

        case userMessage.startsWith('!leet '):
            // Remove command prefix
            const input = message.content.slice(6); 
            const leetspeak = translateToLeetspeak(input);

            responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[6]}.png`);
            responseEmbed = new EmbedBuilder()
                .setDescription(`Can do!`)
                .setThumbnail(`attachment://${mugshotOptions[6]}.png`);

            botReply = await message.channel.send({ 
                embeds: [responseEmbed], 
                files: [responseImage]
            });

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[15]}.png`)
                responseEmbed.setDescription('Translating...')
                    .setThumbnail(`attachment://${mugshotOptions[15]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 2000);

            // TO-DO: Check for rick rolls, maybe return GIF

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshotOptions[2]}.png`)
                responseEmbed.setDescription(leetspeak)
                    .setThumbnail(`attachment://${mugshotOptions[2]}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 5000);

            break;
        default:
            break;
    }

    
});

// Logs the bot into Discord using the token stored in the environment variables file.
// The token is a secret key that authenticates a bot, allowing it to connect and interact with the Discord API.
client.login(process.env.BOT_TOKEN);