const JavaScriptObfuscator = require('javascript-obfuscator');

module.exports = async (bot, message, args) => {
    if (args.length === 0) {
        return bot.sendMessage(message.key.remoteJid, { text: 'Please provide the JavaScript code to obfuscate.' });
    }

    const code = args.join(' ');
    const obfuscatedCode = JavaScriptObfuscator.obfuscate(code).getObfuscatedCode();

    await bot.sendMessage(message.key.remoteJid, { text: `\`\`\`${obfuscatedCode}\`\`\`` });
};
