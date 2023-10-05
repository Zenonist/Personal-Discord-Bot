import OpenAI from 'openai';
require("dotenv").config();

async function getResults(_prompt: string, _model: string ="gpt-3.5-turbo", _maxTokens: number = 256, _temperature: number = 1, _topP: number = 1){
    const openai = new OpenAI({
        apiKey: process.env.OpenAI_API_Key
    })
    const response = await openai.chat.completions.create({
        model: _model,
        messages: [
            {
                "role": "user",
                "content": _prompt
            }
        ],
        temperature: _temperature,
        max_tokens: _maxTokens,
        top_p: _topP,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    // only return the first message
    return response.choices[0].message.content;
}

export { getResults }