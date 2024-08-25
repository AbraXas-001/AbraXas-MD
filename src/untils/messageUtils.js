module.exports = {
    sendText: async (client, to, text) => {
        await client.sendMessage(to, text);
    }
};
