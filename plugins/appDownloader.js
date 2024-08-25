const fetch = require('node-fetch');
const fs = require('fs');

module.exports = async (client, message, args) => {
    const url = args[0];
    if (!url) {
        return message.reply('Please provide a valid app URL.');
    }

    const response = await fetch(url);
    const buffer = await response.buffer();
    const fileName = 'app.apk';
    fs.writeFileSync(fileName, buffer);

    await client.sendMessage(message.from, fileName);
};
