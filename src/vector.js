const { Client, GatewayIntentBits, EmbedBuilder, AttachmentBuilder } = require('discord.js');
require('dotenv').config(); // Load environment variables from .env
const mugshots = require('./assets/mugshots/mugshotOptions');

// Import responses
const replies = require('./responses/replies');

// Import functions
const helperFunctions = require('./functions/helperFunctions')
const commandFunctions = require('./functions/commandFunctions');
const replyFunctions = require('./functions/replyFunctions');

// Import triggers
const botAppreciationTriggers = require('./triggers/botAppreciationTriggers');
const incidentTriggers = require('./triggers/incidentTriggers');
const kinchromeTriggers = require('./triggers/kinchromeTriggers');

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

//#region Responses
// Listen for any sent messages that call on VECTOR directly
client.on('messageCreate', (message) => {
    if (message.author.bot || message.content.startsWith('!')) return; // Ignore bot messages + classic commands
    const userMessage = message.content.toLowerCase();
    let responseImage = new AttachmentBuilder();
    let responseEmbed = new EmbedBuilder();

    if (userMessage.includes('vector') || userMessage.includes('v3ct0r')) {
        switch(true) {
            case botAppreciationTriggers.containsTrigger(userMessage):
                message.react('❤️');
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.EMOTIONAL}.png`);
                responseEmbed = new EmbedBuilder()
                    .setDescription(`Thank you! \\*blushes\\*`)
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.EMOTIONAL}.png`);

                message.reply({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });

                break;
            case replyFunctions.containsGreeting(userMessage):
                message.react('<:bzztSHINY:917575652377501736>');
                const randomIndex = Math.floor(Math.random() * replies.greetings.length);
                const mugshotIndex = Math.floor(Math.random() * (mugshots.greetingMugshots.length - 1));

                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.greetingMugshots[mugshotIndex]}.png`);
                responseEmbed = new EmbedBuilder()
                    .setDescription(`${replies.greetings[randomIndex]}`)
                    .setThumbnail(`attachment://${mugshots.greetingMugshots[mugshotIndex]}.png`);

                message.channel.send({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });

                break;
            case replyFunctions.containsGoodnight(userMessage):
                message.react('<:swabluNAP:991770194466836542>');

                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.HAPPY}.png`);
                responseEmbed = new EmbedBuilder()
                    .setDescription(`Have a good night, ${message.author.username}!`)
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.HAPPY}.png`);

                message.reply({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            default:

                break;
        }
    }
});
//#endregion

//#region Async Responses
// Listen for any sent messages asynchronously using triggers/commands
client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore bot messages
    const userMessage = message.content.toLowerCase();
    let botReply = '';
    let responseImage = new AttachmentBuilder();
    let responseEmbed = new EmbedBuilder();

    let isCommandMessage = userMessage.startsWith('!');
    
    //#region Triggers
    if (!isCommandMessage) {
        switch (true) {
            case incidentTriggers.containsTrigger(userMessage):
                message.react('🚨');
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.DETERMINED}.png`);
                responseEmbed = new EmbedBuilder()
                    .setDescription('...')
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.DETERMINED}.png`);

                botReply = await message.reply({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });

                setTimeout(async () => {
                    responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.ANGRY}.png`)
                    responseEmbed.setDescription('Get ready to get rekt')
                        .setThumbnail(`attachment://${mugshots.mugshotOptions.ANGRY}.png`);
                    await botReply.edit({ 
                        embeds: [responseEmbed], 
                        files: [responseImage]
                    });
                }, 2000);

                setTimeout(async () => { 
                    await message.delete(); 
                    responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.RELIEVED}.png`)
                    responseEmbed.setDescription('Setting variable targetEliminated = true')
                        .setThumbnail(`attachment://${mugshots.mugshotOptions.RELIEVED}.png`);
                    await botReply.edit({ 
                        embeds: [responseEmbed], 
                        files: [responseImage]
                    });
                }, 5000);

                setTimeout(async () => {
                    responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.JOYFUL}.png`)
                    responseEmbed.setDescription('Nothing to see here, ladies and gents! Carry on. 😎')
                        .setThumbnail(`attachment://${mugshots.mugshotOptions.JOYFUL}.png`);
                    await botReply.edit({ 
                        embeds: [responseEmbed], 
                        files: [responseImage]
                    });
                }, 8000);

                setTimeout(async () => {
                    responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.DEFAULT}.png`)
                    responseEmbed.setDescription('⚠️ **This message will self-destruct in T-2 seconds!**')
                        .setThumbnail(`attachment://${mugshots.mugshotOptions.DEFAULT}.png`);
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
            case incidentTriggers.almostContainsTrigger(userMessage):
                message.react('🤨');
                botreply = await message.reply('https://tenor.com/view/dexter-doakes-squint-stare-suspicious-gif-14432154109786838518');

                break;
            case kinchromeTriggers.containsTrigger(userMessage):
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.DEFAULT}.png`);
                responseEmbed = new EmbedBuilder()
                    .setDescription(`Wait for it...`)
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.DEFAULT}.png`);

                botReply = await message.channel.send({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });

                setTimeout(async () => { await message.react('<a:pokepoggersMAX:953631233076785152>'); }, 3000);

                setTimeout(async () => { 
                    responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.SHOUTING}.png`)
                    responseEmbed.setDescription('POKEPOGGERS! <a:pokepoggersMAX:953631233076785152>')
                        .setThumbnail(`attachment://${mugshots.mugshotOptions.SHOUTING}.png`);
                    await botReply.edit({ 
                        embeds: [responseEmbed], 
                        files: [responseImage]
                    });
                }, 5000);
                
                break;
            case replyFunctions.containsRickRoll(userMessage):
                message.react('<a:rickrollgif:1424886267673448448>');
                botreply = await message.reply('https://media.tenor.com/o656qFKDzeUAAAAM/rick-astley-never-gonna-give-you-up.gif');

                break;
            default:
                break;
        }
    }
    //#endregion

    //#region Commands
    switch(true) {
        case userMessage.startsWith('!sip'):
            message.react('<:sansSIP:1422422942414934026>');

            // TO-DO: Create an array of drinks and pick one at random from 3 choices using buttons
            responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.DEFAULT}.png`);
            responseEmbed = new EmbedBuilder()
                .setDescription(`**STATUS:** Sippin' on oil ~bzzt~`)
                .setThumbnail(`attachment://${mugshots.mugshotOptions.DEFAULT}.png`);

            botReply = await message.channel.send({ 
                embeds: [responseEmbed], 
                files: [responseImage]
            });

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.PENSIVE}.png`)
                responseEmbed.setDescription('\\*sips\\*')
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.PENSIVE}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 3000);

            // TO-DO: Add different reactions/responses to each drink case

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.HAPPY}.png`)
                responseEmbed.setDescription('**STATUS:** Just sipped ~bzzt~')
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.HAPPY}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 6000);

            break;
        case userMessage.startsWith('!leet'):
            // Check for empty inputs
            if (!helperFunctions.hasInputAfterCommand(userMessage, '!leet')) {
                message.react('❌');

                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.STUNNED}.png`);
                responseEmbed = new EmbedBuilder()
                    .setDescription(`Uh oh... please enter a message to translate into leetspeak. \n STATUS: Error ~bzzt~`)
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.STUNNED}.png`);

                botReply = await message.channel.send({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });

                break;
            }

            // Check for trigger keywords
            if (incidentTriggers.containsTrigger(userMessage)) {
                message.react('❌');

                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.DETERMINED}.png`);
                responseEmbed = new EmbedBuilder()
                    .setDescription(`No ~bzzt~`)
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.DETERMINED}.png`);

                botReply = await message.channel.send({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });

                break;
            }

            // Approve message for translation
            message.react('✅');

            // Remove command prefix
            const input = message.content.slice(5);
            const leetspeak = commandFunctions.translateToLeetspeak(input);

            responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.HAPPY}.png`);
            responseEmbed = new EmbedBuilder()
                .setDescription(`Can do!`)
                .setThumbnail(`attachment://${mugshots.mugshotOptions.HAPPY}.png`);

            botReply = await message.channel.send({ 
                embeds: [responseEmbed], 
                files: [responseImage]
            });

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.TINKERING}.png`)
                responseEmbed.setDescription('Translating...')
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.TINKERING}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 2000);

            if (replyFunctions.containsRickRoll(userMessage)) {
                setTimeout(async () => { 
                    await botReply.edit({
                        content: 'https://media.tenor.com/o656qFKDzeUAAAAM/rick-astley-never-gonna-give-you-up.gif', 
                        embeds: [], 
                        files: []
                    }); 
                }, 5000);

                break;
            }

            setTimeout(async () => { 
                responseImage = new AttachmentBuilder(`src/assets/mugshots/${mugshots.mugshotOptions.DEFAULT}.png`)
                responseEmbed.setDescription(`Here is your message in l33t5p34k (leetspeak): \n ${leetspeak}`)
                    .setThumbnail(`attachment://${mugshots.mugshotOptions.DEFAULT}.png`);
                await botReply.edit({ 
                    embeds: [responseEmbed], 
                    files: [responseImage]
                });
            }, 5000);

            break;
        default:
            break;
    }
    //#endregion
});
//#endregion

// Logs the bot into Discord using the token stored in the environment variables file.
// The token is a secret key that authenticates a bot, allowing it to connect and interact with the Discord API.
client.login(process.env.BOT_TOKEN);