import { GoogleGenerativeAI } from "@google/generative-ai";
require("dotenv").config();

async function getResults(_prompt: string, _model: string="gemini-pro"){
    // Set API key
    const genAI = new GoogleGenerativeAI(process.env.Google_API_Key);
    
    // Select model
    const model= genAI.getGenerativeModel({
        model: _model
    })

    // Get result
    const result = await model.generateContent(_prompt)
    const response = result.response;
    return response.text();
}

export { getResults }