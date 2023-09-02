import { useContext } from 'react';
import './ThemeToggle.css';
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { ThemeContext } from '../../App';

export default function ThemeToggle() {

    const { toggleDarkMode } = useContext(ThemeContext); 

    const darkIconStyle = {
        position: 'absolute',
        zIndex: 2,
        top: '8px',
        right: '8px',
        color: '#EBC815'
    }

    const lightIconStyle = {
        position: 'absolute',
        zIndex: 2,
        top: '8px',
        left: '8px',
        color: '#FDB813'
    }

    const handleClick = () => { toggleDarkMode() }

    return (
        <section className='theme-container'>
            <label className="switch">
                <input type="checkbox" onClick={handleClick} />
                <span className="slider"></span>
                <BsFillSunFill style={lightIconStyle} size={18} />
                <BsMoonStarsFill style={darkIconStyle} />
            </label>
        </section>
    )
}