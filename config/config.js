const fs = require('fs');
const path = require('path');

const themesPath = path.join(__dirname, 'themes');

function loadTheme(themeName) {
    const themeFile = path.join(themesPath, `${themeName}.json`);
    if (fs.existsSync(themeFile)) {
        return JSON.parse(fs.readFileSync(themeFile, 'utf8'));
    } else {
        console.error(`Theme ${themeName} not found, using default theme.`);
        return JSON.parse(fs.readFileSync(path.join(themesPath, 'default.json'), 'utf8'));
    }
}

module.exports = {
    loadTheme
};
