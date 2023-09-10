import logo from '../../images/Logo.png'
import whiteLogo from '../../images/LogoWhite.webp'
import './WebsiteLogo.css'

export interface ILogoProps {
    darkMode: boolean
}

export const WebsiteLogo: React.FunctionComponent<ILogoProps> = ({ darkMode }) => {
    return (
        <figure className='logo-container'> 
            <img src={ darkMode ? whiteLogo : logo } width={100} />
        </figure>
    )
}