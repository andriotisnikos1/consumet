import axios from "axios";
export const gogoanime_RecentEpisodes = async (endpoint, type, page) => {
    try {
        const response = await axios.get(`${endpoint}/anime/gogoanime/recent-episodes?type=${type || 1}&page=${page || 1}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Recent Episodes Error (Gogoanime)]: ", error);
        return null;
    }
};
