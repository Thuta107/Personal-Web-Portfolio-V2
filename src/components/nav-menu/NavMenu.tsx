import './NavMenu.css';
import { NavMenuItem, NavMenuItemProps } from '../nav-menu-item/NavMenuItem';

export default function NavMenu() {

    const menus: NavMenuItemProps[] = [
        { text: 'Home', path: '' },
        { text: 'My Journey', path: 'my-journey' },  
        { text: 'My Portfolio', path: 'my-portfolio' }, 
        { text: 'My Tools', path: 'my-tools' }
    ]

    return (
        <nav className='nav-container'>
            { menus.map(menu => <NavMenuItem text={menu.text} path={menu.path} />) }
        </nav>
    )
}