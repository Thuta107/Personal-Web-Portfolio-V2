import { useContext } from 'react';
import { ThemeContext } from '../../App';
import './MyPortfolio.css'
import { PersonalProjects } from '../../constants/PersonalProjects';
import { SocialIcon } from '../../components/social-icon/SocialIcon';
import { SocialConstants } from '../../constants/SocialConstants';

export const MyPortfolio = () => {
    const { darkMode } = useContext(ThemeContext); 

    const containerStyle = {
        color: darkMode ? 'white' : 'black'
    }

    const projTitleStyle = {
        color: darkMode ? '#2196F3' : 'orange',
        margin: 'margin: 5px 0 15px 0'
    }

    const projChipStyle = {
        color: 'white',
        backgroundColor: darkMode ? '#2196F3' : 'orange'
    }

    projChipStyle

    const projects = PersonalProjects

    return (
        <div className='project-container' style={containerStyle}>
            <h1> My Portfolio &#128194; </h1>
            {projects.map(project => 
                <div className='project-flex'>
                    <h3 className='project-title'> {project.title} </h3> 
                    <div className='project-info'> 
                        <img className='project-img' src={project.image} />
                        <div className='project-grid'>
                            <p> 
                                <h3 style={projTitleStyle}> { project.title } </h3>
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
                    </div>
                </div>
            )}
        </div>
    )
}