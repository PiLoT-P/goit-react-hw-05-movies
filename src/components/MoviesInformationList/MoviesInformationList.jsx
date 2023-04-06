import css from './MoviesInformationList.module.css'

const MoviesInformationList = ({ movie }) => {
    return (
        <div>
            <img width='400px' src={'https://www.themoviedb.org/t/p/original/' + movie.backdrop_path} alt="poster" />
            <h2>{movie.name || movie.original_title}</h2>
            <h3>User score</h3>
            <p>{movie.vote_average}/10</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
        </div>
    );
}

export default MoviesInformationList;