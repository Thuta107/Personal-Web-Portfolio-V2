import './NavMenu.css';
import { NavMenuItem, NavMenuItemProps } from '../nav-menu-item/NavMenuItem';

export default function NavMenu() {

    const menus: NavMenuItemProps[] = [
        { text: 'Home', path: '' },  { text: 'About Me', path: 'about-me' },  
        { text: 'My Experience', path: 'my-experience' },  
        { text: 'My Portfolio', path: 'my-portfolio' }, 
        { text: 'My Skills', path: 'my-skills' }
    ]

    return (
        <nav className='nav-container'>
            { menus.map(menu => <NavMenuItem text={menu.text} path={menu.path} />) }
        </nav>
    )
}