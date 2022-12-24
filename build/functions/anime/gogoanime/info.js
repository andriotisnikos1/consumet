import axios from "axios";
export const gogoanime_Info = async (id, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/gogoanime/info/${id}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Info Error (Gogoanime)]: ", error);
        return null;
    }
};
