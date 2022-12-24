import axios from "axios";
export const zoro_Watch = async (id, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/zoro/watch/?episodeId=${id}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Watch Link Fetch Error (Zoro)]: ", error);
        return null;
    }
};
