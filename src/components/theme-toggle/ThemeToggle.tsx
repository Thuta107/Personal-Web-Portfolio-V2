import { useContext } from 'react';
import './ThemeToggle.css';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { ThemeContext } from '../../App';

export default function ThemeToggle() {

    const { toggleDarkMode } = useContext(ThemeContext); 

    const darkIconStyle = {
        right: '8px',
        color: 'var(--moon)'
    }

    const lightIconStyle = {
        left: '8px',
        color: 'var(--sun)'
    }

    const handleClick = () => toggleDarkMode()

    return (
        <label className="switch">
            <input type="checkbox" onClick={handleClick} />
            <span className="slider"></span>
            <BsFillSunFill className='theme-icon' style={lightIconStyle} size={18} />
            <BsMoonStarsFill className='theme-icon' style={darkIconStyle} />
        </label>
    )
}