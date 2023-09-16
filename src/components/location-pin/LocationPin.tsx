import './LocationPin.css';
import { ThemeContext } from '../../App';
import { useContext } from 'react';
import { MdLocationPin } from 'react-icons/md';

export interface ILocationPinProps {
    text: string
}

export const LocationPin: React.FunctionComponent<ILocationPinProps> = ({ text }) => {

    const { darkMode } = useContext(ThemeContext);

    const locationStyle = {
        color: (!darkMode) ? 'var(--blue)' : 'var(--orange)',
    }

    return (
        <div style={locationStyle} className='pin-flex bold'>
            <div style={{ paddingTop: '8px' }}> <MdLocationPin size={24}/>&nbsp;</div>
            <div className='no-wrap'> {text} </div> 
        </div>
    )
}