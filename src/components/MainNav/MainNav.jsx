import { NavLink} from "react-router-dom";
import clsx from "clsx";
import css from './MainNav.module.css';

const getACtiveClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const MainNav = () => {

    return (
        <nav>
            <ul className={css.list}>
                <li className={css.item}>
                    <NavLink className={getACtiveClass} to='/goit-react-hw-05-movies' end>
                        Home
                    </NavLink>
                </li>
                <li className={css.item}>
                    <NavLink className={getACtiveClass} to='/goit-react-hw-05-movies/movies'>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;