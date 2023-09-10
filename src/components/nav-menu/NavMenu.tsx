import './NavMenu.css';
import { NavMenuItem } from '../nav-menu-item/NavMenuItem';
import { RouteConstants, NavMenuProps } from '../../constants/RouteConstants';

export default function NavMenu() {

    const menus: NavMenuProps[] = [
        { text: 'Home', route: RouteConstants.HOME },
        { text: 'My Journey', route: RouteConstants.MY_JOURNEY },  
        { text: 'My Portfolio', route: RouteConstants.MY_PORTFOLIO }, 
        { text: 'My Tools', route: RouteConstants.MY_TOOLS }
    ]

    return (
        <nav className='nav-container'>
            { menus.map(menu => <NavMenuItem text={menu.text} route={menu.route} />) }
        </nav>
    )
}