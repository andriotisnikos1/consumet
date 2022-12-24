import axios from "axios";
export const zoro_RecentEpisodes = async (endpoint, page) => {
    try {
        const response = await axios.get(`${endpoint}/anime/zoro/recent-episodes?page=${page || 1}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Recent Episodes Error (Zoro)]: ", error);
        return null;
    }
};
