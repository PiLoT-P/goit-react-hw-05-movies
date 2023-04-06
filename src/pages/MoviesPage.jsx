import { useEffect, useState } from "react";
import { getTrendingMoviesByName } from "services/MoviesData";
import SearchForm from "components/SearchForm/SearchForm";
import MoviesList from "components/MoviesLink/MoviesLink";

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const addQuery = (name) => {
        setQuery(name);
    }

    useEffect(() => {
        if (query.length < 1) {
            return;
        } else {
            getTrendingMoviesByName(query)
                .then((data) => setMovies(data.results))
                .catch((err) => console.log(err));
        }
    }, [query])

    return (
        <>
            <SearchForm addQuery={addQuery} />
            <MoviesList movies={movies} />
        </>
    );
}

export default MoviesPage;