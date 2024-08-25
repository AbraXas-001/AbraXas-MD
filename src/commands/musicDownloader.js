const axios = require('axios');
const fs = require('fs');

module.exports = async (bot, message, args) => {
    if (args.length === 0) {
        return bot.sendMessage(message.key.remoteJid, { text: 'Please provide a URL to download the music.' });
    }

    const url = args[0];
    const filepath = `/tmp/${Date.now()}_music.mp3`;

    try {
        const response = await axios({ url, responseType: 'stream' });
        response.data.pipe(fs.createWriteStream(filepath))
            .on('finish', () => {
                bot.sendMessage(message.key.remoteJid, { audio: { url: filepath }, mimetype: 'audio/mpeg' });
            });
    } catch (error) {
        console.error(error);
        bot.sendMessage(message.key.remoteJid, { text: 'Failed to download the music.' });
    }
};
