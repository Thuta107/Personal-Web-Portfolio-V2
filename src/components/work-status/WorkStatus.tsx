import './WorkStatus.css'

export type WorkStatusProps = {
    index: number
}

export const WorkStatus: React.FunctionComponent<WorkStatusProps> = ({ index }) => { 

    const selectEmoji = () => {
        if(index == 0) {
            return <span>&#128583;</span>
        } else if (index == 1) {
            return <span>&#128582;</span>
        } else if (index == 2) {
            return <span>&#128581;</span>
        }
    }

    const statusAvailable = [
        { text: 'Open to New Opportunities and Activly Looking for Work', color: 'rgb(3, 192, 74)' },
        { text: 'Under Employment but Open to New Opportunities', color: 'orange' },
        { text: 'Under Active Employment and Not Looking for New Opportunities', color: 'red' },
    ]

    return (
        <p className="work-bold" style={{ color: statusAvailable[index].color }}> 
            <span> {statusAvailable[index].text } </span> 
            {selectEmoji()}
        </p>
    )
}