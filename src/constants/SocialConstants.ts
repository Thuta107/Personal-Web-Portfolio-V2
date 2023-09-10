export enum SocialConstants {
    GMAIL = 'GMAIL',
    LINKEDIN = 'LINKEDIN',
    GITHUB = 'GITHUB',
    WEBSITE = 'WEBSITE'
}

export type SocialIconProps = {
    code: string, 
    size: number,
    color: string,
    link: string
}

export const MySocials: SocialIconProps[] = [
    { 
        code: SocialConstants.LINKEDIN, 
        size: 35, 
        color: 'var(--linkedin)', 
        link: 'https://www.linkedin.com/in/thuta-lin' 
    },
    { 
        code: SocialConstants.GITHUB, 
        size: 35, 
        color: 'var(--github)', 
        link: 'https://github.com/Thuta107' 
    },
    { 
        code: SocialConstants.GMAIL, 
        size: 35, 
        color: 'var(--gmail)', 
        link: 'thutalin1727@gmail.com' 
    },
    { 
        code: SocialConstants.WEBSITE, 
        size: 35, 
        color: 'var(--green)', 
        link: 'https://thutalin.app/' 
    },
]