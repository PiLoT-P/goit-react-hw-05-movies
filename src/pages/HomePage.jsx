import { useEffect, useState } from "react";
import { getTrendingMovies } from "services/MoviesData";

import MoviesList from "components/MoviesLink/MoviesLink";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getTrendingMovies()
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    }, [])

    return (
        <>
            <h1>Trending today</h1>
            {movies.length > 0 && <MoviesList movies={movies} />}
        </>
    );
};

export default HomePage;