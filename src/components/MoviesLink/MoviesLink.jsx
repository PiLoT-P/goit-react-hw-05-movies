import { NavLink } from "react-router-dom";

const MoviesToday = ({movies}) => {
    return (
        <ul>
            {movies.map((item) => (
                <li key={item.id}>
                    <NavLink to={'/movies/'+item.id}>{item.name || item.original_title}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default MoviesToday;