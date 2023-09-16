import { useContext } from 'react';
import { ThemeContext } from '../../App';
import './MyPortfolio.css'
import { PersonalProjects } from '../../constants/PersonalProjects';
import { SocialIcon } from '../../components/social-icon/SocialIcon';
import { SocialConstants } from '../../constants/SocialConstants';
import { motion } from 'framer-motion'

export const MyPortfolio = () => {
    const { darkMode } = useContext(ThemeContext); 

    const containerStyle = {
        color: darkMode ? 'var(--white)' : 'var(--black2)'
    }

    const projTitleStyle = {
        color: darkMode ? 'var(--blue)' : 'var(--orange)',
        margin: 'margin: 5px 0 15px 0'
    }

    const projChipStyle = {
        color: 'white',
        backgroundColor: darkMode ? '#2196F3' : 'orange'
    }

    const projects = PersonalProjects

    return (
        <motion.div className='project-container' style={containerStyle}
            initial={{ left: -3000, opacity: 0 }} 
            animate={{ left: 0, opacity: 1 }} 
            transition={{ duration: 0.5, ease: 'easeInOut'}}>
            <h1 className='title'> My Portfolio &#128194; </h1>
            {projects.map(project => 
                <div className='project-main-grid'>
                    <h2 className='project-header left-title bolder'> {project.title} </h2>
                    <p className='project-info'> 
                        <img className='project-img' src={project.image} />
                        <div className='project-grid'>
                            <p> 
                                <h3 className='subtitle' style={projTitleStyle}> { project.title } </h3>
                                <span> {project.desc} </span>
                            </p>
                            <div>
                                <div className='project-chips'>
                                    {project.tools.map(tool => 
                                        <div className='project-chip' style={projChipStyle}> 
                                            {tool}
                                        </div>
                                    )}
                                </div>
                                <div className='project-links'>
                                    {project.github ? 
                                    <div>
                                        <SocialIcon code={SocialConstants.GITHUB}
                                        size={40} color={'#5c6bc0'} link={project.github}/>
                                    </div> : <></>}
                                    {project.domain ? 
                                    <div style={{ padding: '3px 8px' }}>
                                        <SocialIcon code={SocialConstants.WEBSITE}
                                        size={34} color={'green'} link={project.domain}/>
                                    </div> : <></>}
                                </div>
                            </div>
                        </div>
                    </p>
                </div>
            )}
        </motion.div>
    )
}