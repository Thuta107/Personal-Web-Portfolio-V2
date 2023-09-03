import React, { useState } from 'react';
import { BiLogoGoogle, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'
import { BsGlobeAsiaAustralia } from 'react-icons/bs'
import { SocialIconTypes } from '../../constants/SocialIconTypes';
import './SocialIcon.css'

export type SocialIconProps = {
    icon: string, 
    size: number,
    color: string,
    link: string
}

export const SocialIcon: React.FunctionComponent<SocialIconProps> = ({ icon, size, color, link }) => {

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const handleClick = () => {
        window.open(link, '_blank')
    }

    const iconStyle = {
        color: isHover ? color : 'gray',
        cursor: 'pointer',
        transition: 'color 0.5s ease-in-out'
    }

    const renderSocialIcon = () => {
        if(icon == SocialIconTypes.gMail) {
            return <BiLogoGoogle size={size} style={iconStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}/>
        } else if (icon == SocialIconTypes.linkedIn) {
            return <BiLogoLinkedin size={size} style={iconStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}/>
        } else if (icon == SocialIconTypes.gitHub) {
            return <BiLogoGithub size={size} style={iconStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}/>
        } else if (icon == SocialIconTypes.website) {
            return <BsGlobeAsiaAustralia size={size} style={iconStyle} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}/>
        }
    }

    return <div className="social-content"> { renderSocialIcon() } </div>
}