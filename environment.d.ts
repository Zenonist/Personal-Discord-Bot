import { WolframAlphaAPI } from 'wolfram-alpha-api';
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            botToken: string;
            UserID: string;
            Testing_Guild_ID: string;
            WolframAlphaAPI: string;
            GENIUS_ACCESS_TOKEN: string;
            Notion_API_Key: string;
            Notion_Money_Tracker_DB_ID: string;
            Google_API_Key: string;
            environment: "dev" | "prod" | "debug";
        }
    }
}

export {};