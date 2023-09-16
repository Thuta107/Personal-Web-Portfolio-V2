import { MobileNavMenuProps, RouteConstants } from '../../constants/RouteConstants';
import { AiFillLinkedin, AiFillGithub, AiFillGoogleSquare } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { GiJourney } from 'react-icons/gi';
import { FiPackage, FiTool } from 'react-icons/fi';
import { 
    TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, 
    TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4Filled
} from 'react-icons/tb';
import './MobileNavMenu.css';
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


export const MobileNavMenu: React.FunctionComponent<MobileNavMenuProps> = ({ opened, handleOpened }) => {

    const { darkMode } = useContext(ThemeContext);

    const mobileNavStyle = {
        color: (darkMode) ? 'var(--white)' : 'var(--black2)',
        backgroundColor: (darkMode) ? 'var(--charcoal)' : 'var(--lace)'
    }

    const positionStyle = {
        left: (opened) ? 0 : '-300px'
    }

    const handleClick = () => handleOpened()

    return (
        <nav style={{...positionStyle, ...mobileNavStyle}} className='mobile-nav'>
            <div className='mobile-nav-main'>
                <Link className='mobile-nav-main-grid nav-link' to={RouteConstants.HOME} onClick={handleClick}>
                    <div><FaHome className='mobile-nav-socials-icon' size={25}/></div>
                    <div className='mobile-nav-socials-text'> Home </div> 
                    <div><TbSquareRoundedNumber1Filled className='mobile-nav-socials-num' size={25}/></div>
                </Link>
                <Link className='mobile-nav-main-grid nav-link' to={RouteConstants.MY_JOURNEY} onClick={handleClick}>
                    <div><GiJourney className='mobile-nav-socials-icon' size={25}/></div>
                    <div className='mobile-nav-socials-text'> My Journey </div> 
                    <div><TbSquareRoundedNumber2Filled className='mobile-nav-socials-num' size={25}/></div>
                </Link>
                <Link className='mobile-nav-main-grid nav-link' to={RouteConstants.MY_PORTFOLIO} onClick={handleClick}>
                    <div><FiPackage className='mobile-nav-socials-icon' size={25}/></div>
                    <div className='mobile-nav-socials-text'> My Portfolio </div> 
                    <div><TbSquareRoundedNumber3Filled className='mobile-nav-socials-num' size={25}/></div>
                </Link>
                <Link className='mobile-nav-main-grid nav-link' to={RouteConstants.MY_TOOLS} onClick={handleClick}>
                    <div><FiTool className='mobile-nav-socials-icon' size={25}/></div>
                    <div className='mobile-nav-socials-text'> My Tools </div> 
                    <div><TbSquareRoundedNumber4Filled className='mobile-nav-socials-num' size={25}/></div>
                </Link>
            </div>

            <div className='mobile-nav-socials'>
                <a className='mobile-nav-main-grid nav-link' href='https://www.linkedin.com/in/thuta-lin' 
                    target='_blank' onClick={handleClick}>
                    <div><AiFillLinkedin className='mobile-nav-socials-icon' size={25}/></div>
                    <div className='mobile-nav-socials-text'> LinkedIn </div> 
                    <div><TbSquareRoundedNumber1Filled className='mobile-nav-socials-num' size={25}/></div>
                </a>
                <a className='mobile-nav-main-grid nav-link' href='https://github.com/Thuta107' 
                    target='_blank' onClick={handleClick}> 
                    <div><AiFillGithub className='mobile-nav-socials-icon' size={25}/></div>
                    <div className='mobile-nav-socials-text'> GitHub </div>  
                    <div><TbSquareRoundedNumber2Filled className='mobile-nav-socials-num' size={25}/></div>
                </a>
                <a className='mobile-nav-main-grid nav-link' href='mailto:thutalin1727@gmail.com' 
                    target='_blank' onClick={handleClick}> 
                    <div><AiFillGoogleSquare className='mobile-nav-socials-icon' size={25}/></div>
                    <div className='mobile-nav-socials-text'> Gmail </div> 
                    <div><TbSquareRoundedNumber3Filled className='mobile-nav-socials-num' size={25}/></div> 
                </a>
            </div>
        </nav>
    )
}