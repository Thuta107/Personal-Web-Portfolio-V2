import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { FaDownload, FaPaperPlane } from 'react-icons/fa';
import './Home.css'
import { WorkStatus } from '../../components/work-status/WorkStatus';
import { WorkStatusConstants } from '../../constants/WorkStatusConstants';
import cv from '../../files/Thuta-Resume.pdf'
import { motion } from 'framer-motion'

export const Home = () => {
    const { darkMode } = useContext(ThemeContext); 

    const containerStyle = {
        color: darkMode ? 'white' : 'black'
    }

    const downloadCV = () => {
        window.open(cv, '_blank')
    }

    return (
        <motion.div className='home-container' style={containerStyle} 
            initial={{ left: -3000, opacity: 0 }} 
            animate={{ left: 0, opacity: 1 }} 
            transition={{ duration: 0.5, ease: 'easeInOut'}}>
            <h1 className='intro-title bolder'> 
                <div> &#128075;&nbsp;&nbsp; </div>
                <div> Hello! I'm <span className='intro-name'> Thuta Lin </span> </div>
            </h1>

            <div className='home-flex'>
                <h2 className='left-title bolder'> About Me </h2>
                <p className='bold'> 
                    {/* Passionate and motivated individual with one and a half year of experience in building 
                    reliable and performant enterprise applications in the industry. Primarily used Angular 
                    Framework and React Library to build front-end applications for the web, and Ionic Framework 
                    to provide hybrid mobile solutions. Actively pursuing the goal of becoming a professional full-stack 
                    developer by learning Java Spring Framework.  */}
                    Passionate and motivated individual with one and a half year of experience in building reliable and 
                    performant enterprise applications in the industry. I build, develop and design system and application 
                    with experience in Web & Hybrid Mobile development that cater to your business.
                </p>
            </div>

            <div className='home-flex'>
                <h2 className='left-title bolder'> What I do? </h2>
                <p className='bold'>
                    {/* I build software products for your business needs. A software developer with passion for developing 
                    and designing various system and application with experience in Web & Hybrid Mobile development. */}
                    I build software products for your business needs. Primarily used Angular Framework and React Library 
                    to build front-end applications for the web, and Ionic Framework to provide hybrid mobile solutions. 
                    Actively pursuing the goal of becoming a professional Full Stack Developer.
                </p>
            </div>

            <div className='home-flex'>
                <h2 className='left-title bolder'> I'm currently </h2>
                <WorkStatus status={WorkStatusConstants.LOOKING_FOR_NEW_JOB} />
            </div>

            <div className='home-flex'>
                <div></div>
                <div className='home-btn-flex'>
                    <button className='download-btn bold' onClick={downloadCV}>
                        <FaDownload/> Download CV
                    </button>
                    <a href='mailto:thutalin1727@gmail.com' className='contact-btn nav-link bold'>
                        <FaPaperPlane /> Contact Me
                    </a>
                </div>
            </div>
        </motion.div>
    )
}