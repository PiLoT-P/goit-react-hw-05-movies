import { NavLink, useLocation } from "react-router-dom";

const MoviesToday = ({ movies }) => {
    const locatin = useLocation();

    return (
        <ul>
            {movies.map((item) => (
                <li key={item.id}>
                    <NavLink to={'/goit-react-hw-05-movies/movies/'+item.id} state={locatin}>{item.name || item.original_title}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default MoviesToday;