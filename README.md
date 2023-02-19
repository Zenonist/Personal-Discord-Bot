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
