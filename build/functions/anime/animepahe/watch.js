import axios from "axios";
export const animepache_Watch = async (episodeId, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/animepahe/watch/${episodeId}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Watch Link Fetch Error (AnimePahe)]: ", error);
        return null;
    }
};
