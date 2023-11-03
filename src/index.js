require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

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

    KaijuBot.user.setActivity({
        name: "Minus One Trailer",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=-EYFLuykn2Y'
    })
});

KaijuBot.login(process.env.TOKEN);

KaijuBot.on('messageCreate', (message) => {
    if(message.author.bot){
        return
    }

    if (message.content === '.$bestKaiju') {
        message.reply('https://media4.giphy.com/media/jRr2Y37pHcYlRU8EZg/giphy.gif')
    }
});