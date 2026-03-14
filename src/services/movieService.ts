import axios from "axios";
import type { Movie } from "../types/movie";

const url = 'https://api.themoviedb.org/3/search/movie?';
const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    }
};

interface FetchedData {
    results: Movie[]
}

export async function fetchMovies(query: string): Promise<Movie[]> {

    const results: Movie[] = (await axios.get<FetchedData>(url + `&query=${query}`, options)).data.results
    return results
}
