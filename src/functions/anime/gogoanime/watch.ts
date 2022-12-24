import axios from "axios";

export const gogoanime_Watch = async (episodeId: string, endpoint: string, server?: "gogocdn" | "steamsb") => {
    try {
        const response = await axios.get(`${endpoint}/anime/gogoanime/watch/${episodeId}?server=${server || "gogocdn"}`);
        return response.data;
    } catch (error) {
        console.error("[Consumet Anime Watch Link Fetch Error (Gogoanime)]: ", error);
        return null
    }
}
