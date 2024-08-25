const makeWASocket = require('@adiwajshing/baileys').default;
const { useMultiFileAuthState } = require('@adiwajshing/baileys');
const { Boom } = require('@hapi/boom');
const commandHandler = require('./plugins/commandHandler');
const { DisconnectReason } = require('@adiwajshing/baileys');
const { PREFIX } = process.env;

async function initBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys'); // Session saved in 'auth_info_baileys'

    const bot = makeWASocket({
        auth: state,
        logger: require('pino')({ level: 'silent' }), // Silent logging
        printQRInTerminal: false, // No QR code functionality
    });

    // Handle connection updates
    bot.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut);
            if (shouldReconnect) {
                initBot();
            } else {
                console.log('Connection closed. Not reconnecting...');
            }
        } else if (connection === 'open') {
            console.log('Connection opened');
        }
    });

    // Save session credentials when updated
    bot.ev.on('creds.update', saveCreds);

    // Message handler
    bot.ev.on('messages.upsert', async (m) => {
        const message = m.messages[0];
        if (!message.message) return;
        if (message.key.fromMe) return;

        const msgBody = message.message.conversation || message.message.extendedTextMessage?.text;
        if (!msgBody.startsWith(PREFIX)) return;

        const args = msgBody.slice(PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        await commandHandler(bot, message, command, args);
    });

    return bot;
}

module.exports = { initBot };
