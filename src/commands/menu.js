const process = require('process');
const fs = require('fs');
const path = require('path');

module.exports = async (sock, message) => {
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const uptime = process.uptime();
    const uptimeHours = Math.floor(uptime / 3600);
    const uptimeMinutes = Math.floor((uptime % 3600) / 60);
    const uptimeSeconds = Math.floor(uptime % 60);

    const menuMessage = `

╔═══════⟪ AbraXas-MD ⟫═══════╗
║
┏━━━━━━━━━━━━━━━┓
{process.env.BOT_NAME}*
┗━━━━━━━━━━━━━━━┛
║ 👤 User: ${message.pushName}
║ ⏰ Time: ${currentTime}
║ 📅 Date: ${currentDate}
║ 🔧 Prefix: [${process.env.PREFIX}]
║ 🔄 Mode: ${process.env.MODE}
║ 🎨 Theme: ${process.env.THEME}
║ 🔜 Version: 1.0.0
║ 🟢 Bot Uptime: ${uptimeHours}h ${uptimeMinutes}m ${uptimeSeconds}s
║
╠═════════════════════════╗
║            **COMMANDS**           ║
║ ⟪ .menu ⟫:                        ║
║ ⟪ .tagall ⟫:                      ║
║ ⟪ .tts ⟫:                         ║
║ ⟪ .obfuscate ⟫:                   ║
║ ⟪ .appdl ⟫:                       ║
║ ⟪ .musicdl ⟫:                     ║
║ ⟪ .setvar ⟫:                      ║
╚═════════════════════════╝
    `;

    // Path to the image
    const imagePath = path.join(__dirname, '../../assets/images/menu_header.png');

    // Read the image file
    const imageBuffer = fs.readFileSync(imagePath);

    // Send the image with the menu text as a caption
    await sock.sendMessage(message.key.remoteJid, {
        image: imageBuffer,
        caption: menuMessage
    });
};

