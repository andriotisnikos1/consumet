import axios from "axios";
export const gogoanime_Watch_availableServers = async (episodeId, endpoint) => {
    try {
        const response = await axios.get(`${endpoint}/anime/gogoanime/servers/${episodeId}`);
        return response.data;
    }
    catch (error) {
        console.error("[Consumet Anime Watch Available Servers Fetch Error (Gogoanime)]: ", error);
        return null;
    }
};
