import { useContext, useState } from 'react';
import './MobileHeader.css';
import { ThemeContext } from '../../App';
import { WebsiteLogo } from '../website-logo/WebsiteLogo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import ThemeToggle from '../theme-toggle/ThemeToggle';

export default function MobileHeader() {

    const [open, setOpen] = useState(false)

    const { darkMode } = useContext(ThemeContext);

    const headerStyle = {
        color: (darkMode) ? 'black' : 'white',
        backgroundColor: (darkMode)? 'white' : 'black'
    }

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    return (
        <header className='mobile-top-nav' style={headerStyle}>
            <div className='left-menu'>
                {!open ? <GiHamburgerMenu onClick={handleClick} className='left-menu-icon' size={30}/> :
                <RxCross1 onClick={handleClick} className='left-menu-icon' size={30}/>}
            </div>
            <div> <WebsiteLogo darkMode={!darkMode}/> </div>
            <div> <ThemeToggle /> </div>
        </header>
    )
}