# Personal discord bot
Typescript Discord bot for both personal use and public use
- this project comes from my private repository
- Feel free to use this source code for your own discord bot
- Feel free to contribute to this project
---
# Installation
- Get your bot token from [Discord Developer Portal](https://discord.com/developers/applications)
- This bot requires API keys (to run some functions related to these APIs)
  - [Genius API](https://genius.com/api-clients)
  - [WolframAlpha API](https://developer.wolframalpha.com/portal/myapps/)
  - Notion API
    - [Workspace API](https://www.notion.so/my-integrations)
    - [Database ID](https://developers.notion.com/docs/working-with-databases) (Where can I find my database's ID? section)
    - [Notion database for money tracker function](./src/documents/notion_money_tracker.md)
  - [Google AI Studio API key](https://makersuite.google.com/app/apikey)
  - [OpenAI API key](https://platform.openai.com/api-keys)
  - [Virustotal API key](https://www.virustotal.com/gui/user/lunarfragment/apikey)
  - [Unshorten.me Token](https://unshorten.me/social_accounts/profile)
- Rename .example.env to .env and insert tokens and api into that file
## Install the bot
```
npm install
```
## Run the bot
```
npm run start
```
## Run the bot in development environment
```
npm run start:dev
```
## Docker
### Build the image
```
docker build -t discord-bot .
```
### Docker compose
```
docker compose up
```
## Docker Hub
- You can pull the image from [Docker Hub](https://hub.docker.com/repository/docker/zenonist/personal-discord-bot/general)
```
docker pull zenonist/personal-discord-bot:latest
```
### Note
- Require passing .env file to docker cli
- Example
```
docker run --name personal-discord-bot --env-file ./.env zenonist/personal-discord-bot
```


---
# Notes
- If you clone this project, **you need to remove .skip from test cases in 'src/test/unit/wolframaplha.spec.ts' and 'src/test/unit/chatgpt.spec.ts'** for unit testing (This test case requires API key)
- There is an issue with Totalvirus function that require sending multiple API requests to get the final result because the result is not immediately ready after the first request