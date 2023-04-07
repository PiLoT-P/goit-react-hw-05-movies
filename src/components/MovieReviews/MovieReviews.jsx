import MovieReviewsList from "components/MovieReviewsList/MovieReviewsList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrendingMoviesByReviews } from "services/MoviesData";

const MovieReviews = () => {
    const { movieID } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
        getTrendingMoviesByReviews(movieID)
            .then((data) => setMovieReviews(data.results))
            .catch((error) => console.log(error));
    }, [movieID])

    return (
        <MovieReviewsList reviews={movieReviews} />
    );
}

export default MovieReviews;