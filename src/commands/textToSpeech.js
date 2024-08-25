const gTTS = require('gtts');

module.exports = async (bot, message, args) => {
    if (args.length === 0) {
        return bot.sendMessage(message.key.remoteJid, { text: 'Please provide the text to convert to speech.' });
    }

    const text = args.join(' ');
    const gtts = new gTTS(text, 'en');
    const filepath = `/tmp/${Date.now()}_speech.mp3`;

    gtts.save(filepath, async (err) => {
        if (err) {
            console.error(err);
            return bot.sendMessage(message.key.remoteJid, { text: 'Failed to generate speech.' });
        }
        await bot.sendMessage(message.key.remoteJid, { audio: { url: filepath } }, { mimetype: 'audio/mp4' });
    });
};
