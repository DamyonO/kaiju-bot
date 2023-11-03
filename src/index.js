require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');

randomKaiju = ["https://media2.giphy.com/media/ClHz2YRBofO8w282HH/giphy.gif", "https://media.tenor.com/KsPtSodKMm0AAAAd/godzilla-vs-kong-godzilla.gif", "https://media1.giphy.com/media/UpDzyyBkjHyqkQkyhI/200w.gif?cid=6c09b952jtqltnq0bnfwsgml2mfdipjfz10kkfsf53o8drtr&ep=v1_gifs_search&rid=200w.gif&ct=g"]

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
        let random = Math.floor(Math.random() * randomKaiju.length);
        message.reply('No one Kaiju is the best, but here is one I like: \n' + randomKaiju[random])
    }
});