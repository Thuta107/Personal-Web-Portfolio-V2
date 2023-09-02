import { useContext } from 'react';
import { ThemeContext } from '../../App';
import './NavMenuItem.css';
import { Link } from 'react-router-dom';

export type NavMenuItemProps = {
    text: string,
    path: string
}

export const NavMenuItem: React.FunctionComponent<NavMenuItemProps> = ({ text, path }) => {

    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`nav-menu ${ darkMode ? 'light-text' : ''}`}>
            <Link className='nav-link' to={path}> { text } </Link>
        </div>
    )
}