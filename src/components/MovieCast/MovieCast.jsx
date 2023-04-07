import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrendingMoviesByCast } from "services/MoviesData";
import MovieCastList from "components/MoviCastList/MovieCastList";

const MovieCast = () => {
    const { movieID } = useParams();
    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {
        getTrendingMoviesByCast(movieID)
            .then((data) => setMovieCast(data.cast))
            .catch((error) => console.log(error));
    },[movieID])

    return (
        <MovieCastList casts={movieCast} />
    );
};

export default MovieCast;