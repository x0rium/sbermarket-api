export const axiosConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: "https://api.sbermarket.ru/v2/",
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Content-Type": "application/json",
            "Client-Id": "InstamartApp",
            "Client-Ver": "4.17.4963",
            "Accept": "application/json",
            "User-Agent": "Instamart/4.17.4963 iPhone12,5 iOS/13_6_1 CFNetwork/1128.0.1 Darwin/19.6.0",
            "Accept-Language": "ru",
        },
    },
}