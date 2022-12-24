namespace _AnimePahe {
    interface AnimeSource {
        url: string,
        isM3U8: boolean,
        quality: string,
        size: number
    }

    interface AnimeSearch {
        id: string,
        title: string,
        image: string,
        rating: string,
        releaseDate: number,
        type: "TV"
    }

    interface Episode {
        id: string,
        number: number,
        title: string,
        image: string,
        duration: string

    }



}

export namespace AnimePahe {
    interface Watch {
        headers: {
            Referer: string
        },
        sources: _AnimePahe.AnimeSource[]
    }
    type Search = _AnimePahe.AnimeSearch[]

    interface Info {
        id: string,
        title: string,
        image: string,
        cover: string,
        description: string,
        subOrDub: "sub" | "dub",
        hasDub: boolean,
        hasSub: boolean,
        genres: string[],
        status: string,
        releaseDate: string,
        aired: string,
        studios: string[],
        totalEpisodes: number | null,
        episodes: _AnimePahe.Episode[],
    }
}
