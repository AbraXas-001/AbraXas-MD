require('dotenv').config();
const { initBot } = require('./bot');

(async () => {
    try {
        // Initialize the bot and start it
        const bot = await initBot();
        console.log('AbraXas-MD is running...');
    } catch (error) {
        console.error('Failed to start AbraXas-MD:', error);
        process.exit(1);
    }
})();
