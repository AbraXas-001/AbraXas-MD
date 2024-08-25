const { PREFIX, MODE, THEME, SUDO_NUMBER } = process.env;

module.exports = async (bot, message, args) => {
    if (args.length === 0) {
        return bot.sendMessage(message.key.remoteJid, { text: 'Please provide the variable and value to set (e.g., .setvar mode:public).' });
    }

    const [variable, value] = args[0].split(':');

    switch (variable.toLowerCase()) {
        case 'prefix':
            process.env.PREFIX = value;
            bot.sendMessage(message.key.remoteJid, { text: `Prefix set to ${value}` });
            break;
        case 'mode':
            process.env.MODE = value;
            bot.sendMessage(message.key.remoteJid, { text: `Mode set to ${value}` });
            break;
        case 'theme':
            process.env.THEME = value;
            bot.sendMessage(message.key.remoteJid, { text: `Theme set to ${value}` });
            break;
        case 'sudo':
            process.env.SUDO_NUMBER = value;
            bot.sendMessage(message.key.remoteJid, { text: `Sudo number set to ${value}` });
            break;
        default:
            bot.sendMessage(message.key.remoteJid, { text: 'Unknown variable. Valid variables: prefix, mode, theme, sudo' });
    }
};
