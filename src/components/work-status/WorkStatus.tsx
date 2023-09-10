import { WorkStatusConstants, WorkStatusInfoConstants } from '../../constants/WorkStatusConstants'
import './WorkStatus.css'

type WorkStatusProps = {
    status: WorkStatusConstants
}

export const WorkStatus: React.FunctionComponent<WorkStatusProps> = ({ status }) => { 
    
    const selectEmoji = () => {
        switch(status) {
            case WorkStatusConstants.EMPLOYED:
                return <span>&#128581;</span>
            case WorkStatusConstants.UNEMPLOYED:
                return <span>&#128583;</span>
            case WorkStatusConstants.LOOKING_FOR_NEW_JOB:
                return <span>&#128582;</span>
            default:
                break
        }
    }

    return (
        <p className='bold' style={{ color: WorkStatusInfoConstants[status]?.color }}> 
            <span> { WorkStatusInfoConstants[status]?.text } </span> 
            {selectEmoji()}
        </p>
    )
}