import axios from "axios";
export const enime_Info = async (id, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/enime/info?id=${id}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Info Error (Enime)]: ", error);
        return null;
    }
};
