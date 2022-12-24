namespace _Enime {
    interface SearchResult {
        type: "TV" | "MOVIE" | "OVA" | "SPECIAL",
        id: string,
        anilistId: number,
        malId: number,
        title: string,
        image: string,
        cover: string,
        releaseDate: string,
        description: string,
        genres: string[],
        rating: number,
        status: string,
        rating: number,
        mappings: {
            mal: number,
            anidb: number,
            kisetsu: number,
            anilist: number,
            thetvdb: number,
            anisearch: number,
            livesearch: number,
            "notify.moe": string,
            "anime-planet": string
        }

    }

    interface Episode {
        id: string,
        number: number,
        title: string
    }
}

export namespace Enime {
    interface Search {
        currentPage: number,
        hasNextPage: boolean,
        results: _Enime.SearchResult[]
    }

    interface Info extends _Enime.SearchResult {
        episodes: _Enime.Episode[],
        synonyms: string[]
    }
}
