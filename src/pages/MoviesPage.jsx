import { useEffect, useState } from "react";
import { getTrendingMoviesByName } from "services/MoviesData";
import SearchForm from "components/SearchForm/SearchForm";
import MoviesList from "components/MoviesLink/MoviesLink";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [search] = useSearchParams();

    const query = search.get('query');

    useEffect(() => {
        if (!query) return;
        getTrendingMoviesByName(query)
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    }, [query])

    return (
        <>
            <SearchForm />
            <MoviesList movies={movies} />
        </>
    );
}

export default MoviesPage;