import axios from "axios";
import { virustotalFuncResponse, virustotalScanUrlResponse, virustotalReportResponse} from "../structures/functions/virustotalStructure";
import FromData from 'form-data';

export default async function getVirustotalResult(_url: string): Promise<virustotalFuncResponse> {
    console.log('A')
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
        console.log('B')
        resultUrl =  response.data.data.links.self
    })
    // Get the scan result from the url
    let getResultSetting = {
        method: 'GET',
        url: resultUrl,
        headers: {
            'x-apikey': process.env.VirusTotal_API_Key
        }
    }
    await axios.request<virustotalReportResponse>(getResultSetting).then(response => {
        console.log(`Malicious: ${response.data.data.attributes.stats.malicious}
        Suspicious: ${response.data.data.attributes.stats.suspicious}
        Undetected: ${response.data.data.attributes.stats.undetected}
        Harmless: ${response.data.data.attributes.stats.harmless}
        Timeout: ${response.data.data.attributes.stats.timeout}`)
        let tempResult:virustotalFuncResponse = {
            malicious: response.data.data.attributes.stats.malicious,
            suspicious: response.data.data.attributes.stats.suspicious,
            undetected: response.data.data.attributes.stats.undetected,
            harmless: response.data.data.attributes.stats.harmless,
            timeout: response.data.data.attributes.stats.timeout,
            error: false
        }
        console.log('D')
        result = tempResult
    })
    return result
}