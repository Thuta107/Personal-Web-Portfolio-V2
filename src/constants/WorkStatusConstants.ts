export enum WorkStatusConstants {
    EMPLOYED = 'EMPLOYED',
    LOOKING_FOR_NEW_JOB = 'LOOKING_FOR_NEW_JOB',
    UNEMPLOYED = 'UNEMPLOYED'
}

interface IWorkStatusInformation {
    text: string;
    color: string;
}

export const WorkStatusInfoConstants: {[key: string]: IWorkStatusInformation} = {
    'EMPLOYED': {
        text: 'Under Active Employment and Not Looking for New Opportunities',
        color: 'var(--red)'
    },
    'LOOKING_FOR_NEW_JOB': {
        text: 'Under Employment but Open to New Opportunities',
        color: 'var(--orange)'
    },
    'UNEMPLOYED': {
        text: 'Activly Looking for Work and Open to New Opportunities',
        color: 'var(--green)'
    },
}