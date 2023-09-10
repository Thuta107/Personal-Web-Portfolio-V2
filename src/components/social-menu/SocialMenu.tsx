import './SocialMenu.css';
import { SocialConstants, MySocials } from '../../constants/SocialConstants';
import { SocialIcon } from '../social-icon/SocialIcon';


export default function SocialMenu() {

    return (
        <nav className='social-menu'>
            {MySocials
                .filter(social => social.code != SocialConstants.WEBSITE )
                .map((social, index) =>
                <SocialIcon
                    key={index}
                    code={social.code}
                    size={social.size}
                    color={social.color}
                    link={social.link}
                />
            )}
        </nav>
    )
}