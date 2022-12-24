declare const _default: {
    info: (id: string, endpoint: string) => Promise<any>;
    search: (query: string, endpoint: string, page?: number | undefined) => Promise<any>;
    watch: {
        availableServers: (episodeId: string, endpoint: string) => Promise<any>;
        videoLinks: (episodeId: string, endpoint: string, server?: "gogocdn" | "steamsb" | undefined) => Promise<any>;
    };
    recentEpisodes: (endpoint: string, type?: number | undefined, page?: number | undefined) => Promise<any>;
    topAiring: (page: number, endpoint: string) => Promise<any>;
};
export default _default;
//# sourceMappingURL=gogoanime.d.ts.map