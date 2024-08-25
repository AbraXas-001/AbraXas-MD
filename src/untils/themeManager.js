const { loadTheme } = require('../../config/config.js');

module.exports = {
    applyTheme: (themeName) => {
        const theme = loadTheme(themeName);
        return `Background color: ${theme.background}, Text color: ${theme.textColor}`;
    }
};
