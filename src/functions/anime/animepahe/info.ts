import axios from "axios"

export const animepahe_Info = async (id: string, endpoint: string) => {
    try {
        const response = await axios.get(`${endpoint}/anime/animepahe/info/${id}`)
        return response.data
    } catch (error) {
        console.error("[Consumet Anime Info Error (AnimePahe)]: ", error)
        return null
    }
}
