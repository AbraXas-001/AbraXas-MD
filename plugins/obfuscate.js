const obfuscator = require('javascript-obfuscator');

module.exports = async (client, message, args) => {
    const code = args.join(' ');
    if (!code) {
        return message.reply('Please provide the code you want to obfuscate.');
    }

    const obfuscatedCode = obfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true
    }).getObfuscatedCode();

    await message.reply(`Obfuscated code: \n\`\`\`${obfuscatedCode}\`\`\``);
};
