import Button from "components/Button/Button";
import MoviesDetailNav from "components/MoviesDetailNav/MoviesDetailNav";
import MoviesInformationList from "components/MoviesInformationList/MoviesInformationList";
import { useEffect, useState } from "react";

import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getTrendingMoviesByID } from "services/MoviesData";

const MoviesInformationPage = () => {
    const { movieID } = useParams();
    const [movie, setMovie] = useState({});

    const navigate = useNavigate();
    const location = useLocation();

    const hendleGoBack = () => {
        // console.log('goBack');
        navigate(location.state);
    }

    useEffect(() => {
        getTrendingMoviesByID(movieID)
            .then((data) => setMovie(data))
            .catch((err) => console.log(err));
    }, [movieID])

    return (
        <>
            <Button title={"GoBack"} onClick={hendleGoBack} />
            <MoviesInformationList movie={movie} />
            <MoviesDetailNav />
            <Outlet />
        </>
    );
}

export default MoviesInformationPage;