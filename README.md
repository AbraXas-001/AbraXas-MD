# Rex-Emperor-MD

Rex-Emperor-MD is a feature-rich WhatsApp bot built using the Baileys library. It provides various commands and functionalities, including tagging all group members, converting text to speech, downloading apps and music, obfuscating JavaScript code, and setting bot variables on the fly.

## Features

- **Menu Command**: Displays the bot menu with various options.
- **Tag All Command**: Tags all participants in a group chat.
- **Text-to-Speech Command**: Converts text to speech and sends it as an audio message.
- **App Downloader**: Downloads an app from a provided URL.
- **Music Downloader**: Downloads music from YouTube.
- **Obfuscate Command**: Obfuscates JavaScript code.
- **Set Variable Command**: Sets bot variables directly from WhatsApp.

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo-link.git
    cd rex-emperor-md
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```plaintext
    PREFIX=.
    MODE=public
    THEME=default
    SUDO_NUMBER=1234567890
    SESSIONID='your-session-id-here'
    MONGODB_URI='your-mongodb-uri-here'
    ```

4. Start the bot:
    ```bash
    npm start
    ```

5. Deploy to Heroku:
    ```bash
    git add .
    git commit -m "Initial commit"
    git push heroku main
    ```

## Deployment

- **Heroku**: Deployment is supported via Docker containers.
- **Docker**: Use the provided `Dockerfile` to create a containerized version of the bot.

## Contributing

Feel free to submit issues or pull requests. Any contributions are welcome!

## License

This project is licensed under the MIT License.
