import axios from "axios";
export const zoro_Search = async (query, endpoint, page) => {
    try {
        const response = await axios.get(`${endpoint}/anime/zoro/${query}?page=${page || 1}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Search Error (Zoro)]: ", error);
        return null;
    }
};
