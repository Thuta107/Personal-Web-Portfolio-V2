import { useContext } from 'react';
import { ThemeContext } from '../../App';
import './MyJourney.css'
import { Educations, WorkExperience } from '../../constants/Experience';
import { LocationPin } from '../../components/location-pin/LocationPin';
import { motion } from 'framer-motion'

export const MyJourney = () => {
    const { darkMode } = useContext(ThemeContext); 

    const containerStyle = {
        color: darkMode ? 'var(--white)' : 'var(--black2)'
    }

    const dateStyle = {
        color: darkMode ? 'var(--blue)' : 'var(--orange)',
    }

    const atStyle = {
        color: !darkMode ? 'var(--blue)' : 'var(--orange)',
    }

    const education = Educations;
    const work = WorkExperience;

    return (
        <motion.div className='exp-container' style={containerStyle}
            initial={{ left: -3000, opacity: 0 }} 
            animate={{ left: 0, opacity: 1 }} 
            transition={{ duration: 0.5, ease: 'easeInOut'}}>
            <h1 className='title'> My Journey &#128640; </h1>

            <div className='exp-main-grid'>
                <h2 className='left-title bolder'> 💼 Experience </h2>
                <p className='journey-grid'>
                    {work.map(edu => <>
                        <div className='journey-info'>
                            <div className={`journey-img-container ${edu.imagePadding ? 'journey-padding' : ''}`}>
                                <img className='journey-img' src={edu.image} /> 
                            </div>
                            <p style={dateStyle} className='bold journey-date'> { edu.date } </p>
                        </div>
                        <div className='journey-desc'>
                            <h3 className='subtitle'> 
                                <span> {edu.role} </span> 
                                <span style={atStyle}> @ </span> 
                                <span className='job-position'> { edu.title } </span> 
                            </h3>
                            <p style={dateStyle} className='bold journey-date-mb'> { edu.date } </p>
                            <p>
                                { edu.desc.map((para, index) => <>
                                    <div> { para } </div> {(index == edu.desc.length - 1) ? <></> : <br/>}
                                </>)}
                            </p>
                            <LocationPin text={edu.location} />
                        </div></>
                    )}
                </p>
            </div>

            <div className='exp-main-grid mt-20'>
                <h2 className='left-title bolder'> 🎓 Education </h2>
                <p className='journey-grid'>
                    {education.map(edu => <>
                        <div className='journey-info'>
                            <div className={`journey-img-container ${edu.imagePadding ? 'journey-padding' : ''}`}>
                                <img className='journey-img' src={edu.image} /> 
                            </div>
                            <p style={dateStyle} className='bold journey-date'> { edu.date } </p>
                        </div>
                        <div className='journey-desc'>
                            <h3 className='subtitle'> 
                                <span> {edu.role} </span> 
                                <span style={atStyle}> @ </span> 
                                <span className='job-position'> { edu.title } </span> 
                            </h3>
                            <p style={dateStyle} className='bold journey-date-mb'> { edu.date } </p>
                            <p>
                                { edu.desc.map((para, index) => <>
                                    <div> { para } </div> {(index == edu.desc.length - 1) ? <></> : <br/>}
                                </>)}
                            </p>
                            <LocationPin text={edu.location} />
                        </div></>
                    )}
                </p>
            </div>
        </motion.div>
    )
}