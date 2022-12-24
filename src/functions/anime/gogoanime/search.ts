import axios from "axios";

export const gogoanime_Search = async (query: string, endpoint: string, page?: number) => {
    try {
        const response = await axios.get(`${endpoint}/anime/gogoanime/${query}?page=${page || 1}`)
        return response.data
    } catch (error) {
        console.error("[Consumet Anime Search Error (Gogoanime)]: ", error)
        return null
    }
}
