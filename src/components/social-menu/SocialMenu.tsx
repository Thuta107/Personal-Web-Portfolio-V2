import './SocialMenu.css';
import { SocialIconTypes } from '../../constants/SocialIconTypes';
import { SocialIcon, SocialIconProps } from '../social-icon/SocialIcon';


export default function SocialMenu() {

    const socials: SocialIconProps[] = [{ 
        icon: SocialIconTypes.linkedIn, size: 35, color: '#0072b1', 
        link: 'https://www.linkedin.com/in/thuta-lin' 
    },
    { 
        icon: SocialIconTypes.gitHub, size: 35, color: '#5c6bc0', 
        link: 'https://www.linkedin.com/in/thuta-lin' 
    },
    { 
        icon: SocialIconTypes.gMail, size: 35, color: '#f00', 
        link: 'https://www.linkedin.com/in/thuta-lin' 
    }]

    return (
        <nav className='social-container'>
            {socials.map((social, index) =>
                <SocialIcon
                    key={index}
                    icon={social.icon}
                    size={social.size}
                    color={social.color}
                    link={social.link}
                />
            )}
        </nav>
    )
}