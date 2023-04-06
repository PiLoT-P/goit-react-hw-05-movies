import { NavLink, useLocation } from "react-router-dom";

const MainNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/movies' end>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNav;