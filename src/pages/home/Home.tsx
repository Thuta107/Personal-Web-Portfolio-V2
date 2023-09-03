import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { FaDownload } from 'react-icons/fa'
import './Home.css'
import { WorkStatus } from '../../components/work-status/WorkStatus';

export const Home = () => {
    const { darkMode } = useContext(ThemeContext); 

    const containerStyle = {
        color: darkMode ? 'white' : 'black'
    }

    const nameStyle = {
        color: '#2196F3',
        fontWeight: 'bolder'
    }

    return (
        <div className='home-container' style={containerStyle}>
            <h1> &#128075; Hello! </h1>

            <div className='home-flex'>
                <p className='home-title'> 
                    <span> Bio </span> 
                </p>
                <h2 className='home-title-mobile'> Bio </h2>
                <p style={{ fontWeight: 'bold' }}> 
                    My name is <span style={nameStyle}> Thuta Lin </span> and I build software products for 
                    your business needs. A software developer with passion for developing and designing 
                    various system and application with experience in Web & Hybrid Mobile development.
                </p>
            </div>

            <div className='home-flex'>
                <p className='home-title'> 
                    <span> Summary </span> 
                </p>
                <h2 className='home-title-mobile'> Summary </h2>
                <p style={{ fontWeight: 'bold' }}> 
                    Passionate and motivated individual with one and a half year of experience in building 
                    reliable and performant enterprise applications in the industry. Primarily used Angular 
                    Framework and React Library to build front-end applications for the web, and Ionic Framework 
                    to provide hybrid mobile solutions. Actively pursuing the goal of becoming a professional full-stack 
                    developer by learning Java Spring Framework. 
                </p>
            </div>

            <div className='home-flex'>
                <p className='home-title'> 
                    <span> I'm currently </span> 
                </p>
                <h2 className='home-title-mobile'> I'm currently </h2>
                <WorkStatus index={1} />
            </div>

            <div className='home-flex'>
                <p className='home-title'></p>
                <div className='home-mt'>
                    <button className='download-btn'>
                        <FaDownload /> &nbsp; Download CV
                    </button>
                </div>
            </div>
        </div>
    )
}