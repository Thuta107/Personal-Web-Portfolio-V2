import { useContext, useState } from 'react';
import './MobileHeader.css';
import { ThemeContext } from '../../App';
import { WebsiteLogo } from '../website-logo/WebsiteLogo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import { MobileNavMenu } from '../mobile-nav-menu/MobileNavMenu';

export default function MobileHeader() {
    const [open, setOpen] = useState(false)
    const { darkMode } = useContext(ThemeContext);

    const headerStyle = {
        color: (darkMode) ? 'var(--black)' : 'var(--white)',
        backgroundColor: (darkMode)? 'var(--white)' : 'var(--black)'
    }

    const handleClick = () => setOpen((prev) => !prev)

    return (
        <>
            <header className='mobile-header' style={headerStyle}>
                <div>
                    <div className='theme-mobile-container'>
                        <ThemeToggle />
                    </div>
                </div>
                <div> <WebsiteLogo darkMode={!darkMode}/> </div>
                <div className='right-menu'>
                    {!open ? <GiHamburgerMenu onClick={handleClick} className='right-menu-icon' size={30}/> :
                    <RxCross1 onClick={handleClick} className='right-menu-icon' size={30}/>}
                </div>
            </header>
            <MobileNavMenu opened={open} handleOpened={handleClick}/>
        </>
    )
}