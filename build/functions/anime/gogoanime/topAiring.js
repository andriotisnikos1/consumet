import axios from "axios";
export const gogoanime_TopAiring = async (page, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/gogoanime/top-airing?page=${page || 1}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Top Airing Error (Gogoanime)]: ", error);
        return null;
    }
};
