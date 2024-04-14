import { GoogleGenerativeAI } from "@google/generative-ai";
require("dotenv").config();

async function getResults(_prompt: string, _model: string="gemini-pro", _maxTokens: number=4096){
    // Set API key
    const genAI = new GoogleGenerativeAI(process.env.Google_API_Key);
    
    // Set configuration
    // * discord text is limited to 4096 tokens
    const generationConfig = {
        maxOutputTokens: _maxTokens,
    }

    // Select model
    const model= genAI.getGenerativeModel({
        model: _model,
        generationConfig
    })



    // Get result
    const result = await model.generateContent(
        _prompt
    );
    const response = result.response;
    return response.text();
}

export { getResults }