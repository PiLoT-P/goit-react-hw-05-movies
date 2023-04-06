import { getTrendingMoviesByID } from "services/MoviesData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesInformationList from "components/MoviesInformationList/MoviesInformationList";

const MoviesInformation = () => {
    const { movieID } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getTrendingMoviesByID(movieID)
            .then((data) => setMovie(data))
            .catch((err) => console.log(err));
    }, [movieID])

    return (
        <MoviesInformationList movie={movie} />
    );
}

export default MoviesInformation;
