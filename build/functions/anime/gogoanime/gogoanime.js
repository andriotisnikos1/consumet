import { gogoanime_Info } from "./info.js";
import { gogoanime_Search } from "./search.js";
import { gogoanime_Watch } from "./watch.js";
import { gogoanime_RecentEpisodes } from "./recentEpisodes.js";
import { gogoanime_Watch_availableServers } from "./watch_availableServers.js";
import { gogoanime_TopAiring } from "./topAiring.js";
export default {
    info: gogoanime_Info,
    search: gogoanime_Search,
    watch: {
        availableServers: gogoanime_Watch_availableServers,
        videoLinks: gogoanime_Watch
    },
    recentEpisodes: gogoanime_RecentEpisodes,
    topAiring: gogoanime_TopAiring
};
