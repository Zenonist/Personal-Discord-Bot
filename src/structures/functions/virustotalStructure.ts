type virustotalFuncResponse = {
    malicious: number,
    suspicious: number,
    undetected: number,
    harmless: number,
    timeout: number,
    error: boolean
}

type virustotalScanUrlResponse = {
    data: {
        type: string,
        id: string,
        links: {
            self: string
        }
    }
}

type virustotalReportResponse = {
    data: {
        id: string,
        type: string,
        links: {
            self: string,
            item: string
        }
        attributes: {
            stats: {
                malicious: number,
                suspicious: number,
                undetected: number,
                harmless: number,
                timeout: number
            },
            result: {},
            status: string,
            date: number
        },
        meta: {
            url_info: {
                id: string,
                url: string,
            }
        }
    }
}

export { virustotalFuncResponse, virustotalScanUrlResponse, virustotalReportResponse}