import axios from "axios";
//search anime by provider
export const search = async (provider, query, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/${provider}/${query}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Search Error]: ", error);
    }
};
