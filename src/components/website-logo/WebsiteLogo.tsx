import { useContext } from 'react';
import { ThemeContext } from '../../App';
import logo from '../../images/Logo.png'
import whiteLogo from '../../images/LogoWhite.webp'
import './WebsiteLogo.css'

export const WebsiteLogo = () => {
    const { darkMode } = useContext(ThemeContext); 

    return (
        <figure className='logo-container'> 
            <img src={ darkMode ? whiteLogo : logo } width={100} />
        </figure>
    )
}