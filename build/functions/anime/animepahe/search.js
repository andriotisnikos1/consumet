import axios from "axios";
export const animepache_Search = async (query, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/animepahe/${query}`);
        return response.data.results;
    }
    catch (error) {
        console.error("[Consumet Anime Search Error (AnimePahe)]: ", error);
        return null;
    }
};
