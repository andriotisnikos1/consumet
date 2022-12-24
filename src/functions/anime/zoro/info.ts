import axios from "axios"

export const zoro_Info = async (id: string, endpoint: string) => {
    try {
        const response = await axios.get(`${endpoint}/anime/zoro/info?id=${id}`)
        return response.data
    } catch (error) {
        console.error("[Consumet Anime Info Error (Zoro)]: ", error)
        return null
    }
}
