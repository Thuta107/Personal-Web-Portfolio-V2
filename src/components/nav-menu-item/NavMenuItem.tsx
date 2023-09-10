import { useContext } from 'react';
import { ThemeContext } from '../../App';
import './NavMenuItem.css';
import { Link } from 'react-router-dom';
import { NavMenuProps } from '../../constants/RouteConstants';

export const NavMenuItem: React.FunctionComponent<NavMenuProps> = ({ text, route }) => {

    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`nav-menu ${ darkMode ? 'light-text' : ''}`}>
            <Link className='nav-link' to={route}> { text } </Link>
        </div>
    )
}