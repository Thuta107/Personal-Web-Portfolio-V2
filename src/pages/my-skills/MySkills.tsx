import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../App';
import './MySkills.css'
import { ProgrammingLabelsList, ProgrammingSkillsList } from '../../constants/ProgrammingSkills';

export const MySkills = () => {
    const { darkMode } = useContext(ThemeContext);
    const [chips, setChips] = useState<string[]>([])
    const [skills, setSkills] = useState(ProgrammingSkillsList)
    const [input, setInput] = useState('')
    const labels = ProgrammingLabelsList
    const allSkills = ProgrammingSkillsList

    const containerStyle = {
        color: darkMode ? 'white' : 'black'
    }

    const serachBgStyle = {
        backgroundColor: darkMode ? 'white' : '#D3D3D3',
        borderColor: darkMode ? 'white' : '#D3D3D3',
    }

    function handleClick(label: string) {
        const temp = [...chips]
        const index = temp.indexOf(label)
        if(index > -1) {
            temp.splice(index, 1)
        } else {
            temp.push(label)
        }
        setChips(temp)
    }

    const checkSelectedLabels = (label: string) => {
        return chips.some(chip => chip == label) ? 'skill-chip-active' : ''
    }

    function handleInputChange(word: string) {
        setInput(word)
    }

    useEffect(() => {
        const filtered = allSkills
        .filter(skill => {
            if(chips.length <= 0) return true
            const obj: {[key: string]: string} = {}
            skill.labels.forEach(label => obj[label.toString()] = label)
            let matchLabel = false
            for(const key in chips) {
                if(obj[chips[key]]) {
                    matchLabel = true
                    break
                }
            }
            return matchLabel
        }).filter(skill => input == '' || skill.code.toLowerCase().startsWith(input.toLowerCase()) )
        setSkills(filtered)
    }, [chips, input])
  
    return (
        <div className='skill-container' style={containerStyle}>
            <h1> My Tools &#128187; </h1>
            <input className='skill-search' placeholder='&#128270; Search' style={serachBgStyle}
                onChange={(event) => handleInputChange(event.target.value)}>
            </input>
            <div className='skill-chips'>
                {labels.map(label => 
                    <div className={`skill-chip ${checkSelectedLabels(label)}`}
                        key={label} onClick={() => handleClick(label)}> 
                        {label}
                    </div>
                )}
            </div>
            <div className='tools-container'>
                {skills.map(skill => 
                    <div key={skill.code} className='tool-container'>
                        <img className='tool-image' src={skill.image}/>
                        <div> {skill.code} </div>
                    </div>
                )}
            </div>
        </div>
    )
}