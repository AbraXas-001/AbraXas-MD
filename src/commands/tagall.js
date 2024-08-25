module.exports = async (bot, message) => {
    const groupMetadata = await bot.groupMetadata(message.key.remoteJid);
    const participants = groupMetadata.participants.map(participant => participant.id);

    await bot.sendMessage(message.key.remoteJid, { text: 'Tagging all members...', mentions: participants });
};
