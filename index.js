require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const KaijuBot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ],
});

KaijuBot.on('ready', (c) => {
    console.log(`${c.user.username} is online!`);
});

KaijuBot.login(process.env.TOKEN);

KaijuBot.on('messageCreate', (message) => {
    if(message.author.bot){
        return
    }

    if (message.content === 'kaiju') {
        message.reply('https://media4.giphy.com/media/jRr2Y37pHcYlRU8EZg/giphy.gif')
    }
})