import axios from "axios";
export const enime_Search = async (query, endpoint, params) => {
    try {
        const response = await axios.get(`${endpoint}/anime/enime/${query}?page=${params?.page || 1}&perPage=${params?.perPage || 20}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Search Error (Enime)]: ", error);
        return null;
    }
};
