module.exports = async (bot, message) => {
    const helpMessage = `
🔧 *Rex-Emperor-MD Help* 🔧

This bot offers several commands to help you manage your groups and automate tasks.

Use the following commands with the prefix "${process.env.PREFIX}" to interact with the bot:

menu - Show the main menu and bot information.
help - Display this help message.
tts <text> - Convert the given text to speech.
tagall - Tag all members in a group.
obfuscate <code> - Obfuscate the provided JavaScript code.
appdl <url> - Download an application from the given URL.
musicdl <url> - Download music from the given URL.
setvar <variable>:<value> - Set bot variables like mode, theme, prefix, and sudo.
    `;

    await bot.sendMessage(message.key.remoteJid, { text: helpMessage });
};
