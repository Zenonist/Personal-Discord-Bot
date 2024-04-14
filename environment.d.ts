import { WolframAlphaAPI } from 'wolfram-alpha-api';
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BotToken: string;
            UserID: string;
            GuildID: string;
            Testing_Guild_ID: string;
            WolframAlphaAPI: string;
            Genius_Access_Token: string;
            Notion_API_Key: string;
            Notion_Money_Tracker_DB_ID: string;
            OpenAI_API_Key: string;
            Google_API_Key: string;
            Unshorten_API_Key: string;
            environment: "dev" | "prod" | "debug";
        }
    }
}

export {};