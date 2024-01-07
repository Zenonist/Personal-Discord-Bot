import { WolframAlphaAPI } from 'wolfram-alpha-api';
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BOTTOKEN: string;
            USERID: string;
            GUILDID: string;
            TESTING_GUILD_ID: string;
            WOLFRAMALPHAAPI: string;
            GENIUS_ACCESS_TOKEN: string;
            NOTION_API_KEY: string;
            NOTION_MONEY_TRACKER_DB_ID: string;
            OPENAI_API_KEY: string;
            GOOGLE_API_KEY: string;
            environment: "dev" | "prod" | "debug";
        }
    }
}

export {};