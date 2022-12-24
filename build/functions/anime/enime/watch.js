import axios from "axios";
export const enime_Watch = async (episodeId, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/enime/watch/?episodeId=${episodeId}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Watch Link Fetch Error (Enime)]: ", error);
        return null;
    }
};
