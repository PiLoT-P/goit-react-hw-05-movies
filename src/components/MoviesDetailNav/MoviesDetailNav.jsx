import { NavLink, useLocation } from "react-router-dom";
import css from  './MoviesDetailNav.module.css'

const MoviesDetailNav = () => {
    const location = useLocation();

    return (
            <div className={css.block}>
                <div>Additional information</div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='cast' state={location.state}>Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to='reviews' state={location.state}>Reviews</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
    );
}

export default MoviesDetailNav;