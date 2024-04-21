import axios from "axios";

async function unShortenURL (_url: string): Promise<string>{
    let baseURL = "https://unshorten.me/api/v2/unshorten?url=" + _url;
    let _headers = {
        'Authorization': `Token ${process.env.Unshorten_API_Key}`
    }
    try {
        let response = await axios.get(baseURL, {headers: _headers});
        // * Handle the response in case that the URL is invalid or the limit acceess is exceeded
        let result = (response.data.unshortened_url) ? response.data.unshortened_url : `Error: ${response.data.error.url}`;
        return result
    } catch (error) {
        console.error(error);
    }
}

export { unShortenURL }