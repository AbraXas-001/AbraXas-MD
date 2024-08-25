const gTTS = require('gtts');

module.exports = async (client, message, args) => {
    const text = args.join(' ');
    if (!text) {
        return message.reply('Please provide the text you want to convert to speech.');
    }

    const gtts = new gTTS(text, 'en');
    const filePath = './tts.mp3';

    gtts.save(filePath, err => {
        if (err) {
            return message.reply('An error occurred while generating the speech.');
        }
        client.sendMessage(message.from, filePath, { sendAudioAsVoice: true });
    });
};
