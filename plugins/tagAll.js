module.exports = async (client, message) => {
    const chat = await message.getChat();
    let text = '';
    let mentions = [];

    for (let participant of chat.participants) {
        const contact = await client.getContactById(participant.id._serialized);
        mentions.push(contact);
        text += `@${participant.id.user} `;
    }

    await client.sendMessage(message.from, text, { mentions });
};
