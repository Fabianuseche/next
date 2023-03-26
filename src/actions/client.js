
const API_BASE_ROUTE = "/api/"

export async function post(url, data) {
    const res = await fetch(API_BASE_ROUTE + url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const resData = await res.json()
    return resData
}

