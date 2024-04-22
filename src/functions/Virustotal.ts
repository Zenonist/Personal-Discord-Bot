import axios from "axios";
import { virustotalFuncResponse, virustotalScanUrlResponse, virustotalReportResponse} from "../structures/functions/virustotalStructure";
import FromData from 'form-data';

const wait = require('node:timers/promises').setTimeout;

export default async function getVirustotalResult(_url: string): Promise<virustotalFuncResponse> {
    // Get Url that contains scan result
    let formData = new FromData();
    formData.append('url', _url);
    let requestSettings = {
        method: 'POST',
        url: 'https://www.virustotal.com/api/v3/urls',
        headers: {
            'x-apikey': process.env.VirusTotal_API_Key,
        },
        data: formData
    }
    let result:virustotalFuncResponse = {
        malicious: 0,
        suspicious: 0,
        undetected: 0,
        harmless: 0,
        timeout: 0,
        error: true
    }
    let resultUrl = null
    await axios.request<virustotalScanUrlResponse>(requestSettings).then(response => {
        resultUrl =  response.data.data.links.self
    })
    // Get the scan result from the url
    // ! We send request multiple time because the scan result is not available immediately after we sent a request to VirusTotal Server
    let counter = 0;
    do {
        await wait(3_000)
        result = await getAnalysisResult(resultUrl)
        counter++
        // * If any of the scan result properties is not 0, we will return the result
        if (result.harmless !== 0 || result.undetected !== 0 || result.suspicious !== 0 || result.malicious !== 0 || result.timeout !== 0) {
            break
        }
    } while (counter < 10)
    // If counter is greater than 10, error should be true
    result.error = (counter >= 10)
    return result
}

async function getAnalysisResult(_url: string): Promise<virustotalFuncResponse> {
    let result = null
    let getResultSetting = {
        method: 'GET',
        url: _url,
        headers: {
            'x-apikey': process.env.VirusTotal_API_Key
        }
    }
    await axios.request<virustotalReportResponse>(getResultSetting).then(response => {
        let tempResult:virustotalFuncResponse = {
            malicious: response.data.data.attributes.stats.malicious,
            suspicious: response.data.data.attributes.stats.suspicious,
            undetected: response.data.data.attributes.stats.undetected,
            harmless: response.data.data.attributes.stats.harmless,
            timeout: response.data.data.attributes.stats.timeout,
            error: false
        }
        result = tempResult
    })
    return result
}