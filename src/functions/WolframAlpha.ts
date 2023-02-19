import axios from 'axios';
require("dotenv").config();

type subpods = {
    title: string,
    plaintext: string
}

type pods = {
    title: string,
    scanner: string,
    id: string,
    position: number,
    error: boolean,
    numsubpods: number,
    subpods: Array<subpods>
}

type WolframAlphaResponse = {
    queryresult: {
        success: boolean,
        error: boolean,
        numpods: number,
        pods: Array<pods>,
        inputstring: string,
        tips: {
            text: string
        }
    }
}

async function getResults(equation: string){
    var result = null;
    var request_option = {
        method: 'GET',
        url: 'https://api.wolframalpha.com/v2/query',
        params: {
            input : equation,
            format : 'plaintext',
            output : 'JSON',
            appid : process.env.WolframAlphaAPI
        }
    }
    await axios.request<WolframAlphaResponse>(request_option).then(response => {
        if (!response.data.queryresult.success) { 
            result = 'Check your spelling, and use English';
        } else {
            result = response.data.queryresult.pods[1].subpods[0].plaintext;
        }
    });
    return result;
}

export { getResults }