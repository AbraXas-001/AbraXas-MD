const menu = require('../commands/menu');
const help = require('../commands/help');
const textToSpeech = require('../commands/textToSpeech');
const tagAll = require('../commands/tagall');
const obfuscate = require('../commands/obfuscate');
const appDownloader = require('../commands/appDownloader');
const musicDownloader = require('../commands/musicDownloader');
const setVar = require('../commands/setvar');

module.exports = async (bot, message, command, args) => {
    switch (command) {
        case 'menu':
            return menu(bot, message);
        case 'help':
            return help(bot, message);
        case 'tts':
            return textToSpeech(bot, message, args);
        case 'tagall':
            return tagAll(bot, message);
        case 'obfuscate':
            return obfuscate(bot, message, args);
        case 'appdl':
            return appDownloader(bot, message, args);
        case 'musicdl':
            return musicDownloader(bot, message, args);
        case 'setvar':
            return setVar(bot, message, args);
        default:
            return bot.sendMessage(message.key.remoteJid, { text: 'Unknown command. Type ${process.env.PREFIX}help for a list of commands.' });
    }
};
