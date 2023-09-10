import React, { useState } from 'react';
import { BiLogoGoogle, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import { BsGlobeAsiaAustralia } from 'react-icons/bs'
import { SocialConstants } from '../../constants/SocialConstants';
import './SocialIcon.css'
import { SocialIconProps } from '../../constants/SocialConstants';

export const SocialIcon: React.FunctionComponent<SocialIconProps> = ({ code, size, color, link }) => {

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => setIsHover(true)

    const handleMouseLeave = () => setIsHover(false)

    const handleClick = () => window.open(link, '_blank')

    const iconStyle = {
        color: isHover ? color : 'gray',
        cursor: 'pointer',
        transition: 'color 0.5s ease-in-out'
    }

    const renderSocialIcon = () => {
        if(code == SocialConstants.GMAIL) {
            return <a href={`mailto:${link}`}>
            <BiLogoGoogle size={size} style={iconStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}/>
            </a> 
        } else if (code == SocialConstants.LINKEDIN) {
            return <BiLogoLinkedin size={size} style={iconStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}/>
        } else if (code == SocialConstants.GITHUB) {
            return <BiLogoGithub size={size} style={iconStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}/>
        } else if (code == SocialConstants.WEBSITE) {
            return <BsGlobeAsiaAustralia size={size} style={iconStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}/>
        }
    }

    return <div className="social-content"> { renderSocialIcon() } </div>
}