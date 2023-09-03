import { useContext } from 'react';
import { ThemeContext } from '../../App';
import './MyJourney.css'
import { Educations, WorkExperience } from '../../constants/Experience';
import { MdLocationPin } from 'react-icons/md'

export const MyJourney = () => {
    const { darkMode } = useContext(ThemeContext); 

    const containerStyle = {
        color: darkMode ? 'white' : 'black'
    }

    const expDateStyle = {
        color: darkMode ? '#2196F3' : 'orange',
        margin: 'margin: 5px 0 15px 0'
    }

    // const expAtStyle = {
    //     color: darkMode ? 'orange' : '#2196F3',
    // }

    const education = Educations;
    const work = WorkExperience;

    return (
        <div className='exp-container' style={containerStyle}>
            <h1> My Journey &#128640; </h1>

            <div className='exp-flex'>
                <p className='exp-title'> 
                    <span> 💼 Experience </span> 
                </p>
                <h2 className='exp-title-mobile'> 💼 Experience </h2>
                <div>
                    {work.map(edu => 
                        <div className='exp-grid'>
                            <div className='exp-summary'>
                                <img className='exp-img' src={edu.image} /> 
                                <h4> 
                                    <span> {edu.role} </span> 
                                    <span style={{ color: 'orange' }}> @ </span> 
                                    <span style={{ color: 'gray' }}> { edu.title } </span> 
                                </h4>
                                <p style={{ color: 'orange' }} className='italic'> { edu.date } </p>
                                <div style={{ position: 'absolute', right: '30px', top: '10px', color: '#2196F3' }}> 
                                    <span style={{ verticalAlign: 'middle' }}> <MdLocationPin size={24}/> </span>
                                    <span>{ edu.location }</span> 
                                </div>
                                <p> { edu.desc } </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className='exp-flex'>
                <p className='exp-title'> 
                    <span> 🎓 Education </span> 
                </p>
                <h2 className='exp-title-mobile'> 🎓 Education </h2>
                <div>
                    {education.map(edu => 
                        <div className='exp-grid'>
                            <div className='exp-summary'>
                                <img className='exp-img' src={edu.image} /> 
                                <h4> 
                                    <span> {edu.role} </span> 
                                    <span style={{ color: 'orange' }}> @ </span> 
                                    <span style={{ color: 'gray' }}> { edu.title } </span> 
                                </h4>
                                <p style={expDateStyle} className='italic'> { edu.date } </p>
                                <p style={{ fontWeight: 'bold' }}> { edu.desc } </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}