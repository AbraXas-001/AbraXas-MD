const ytdl = require('ytdl-core');
const fs = require('fs');

module.exports = async (client, message, args) => {
    const url = args[0];
    if (!url || !ytdl.validateURL(url)) {
        return message.reply('Please provide a valid YouTube URL.');
    }

    const stream = ytdl(url, { filter: 'audioonly' });
    const fileName = 'music.mp3';

    stream.pipe(fs.createWriteStream(fileName)).on('finish', async () => {
        await client.sendMessage(message.from, fileName);
    });
};
