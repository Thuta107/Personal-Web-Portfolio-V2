import port1 from '../images/PortfolioV1.png'
import port2 from '../images/PortfolioV2.png'
import pokedex from '../images/Pokedex.png'
import reportCare from '../images/ReportCare.png'

export const PersonalProjects = [
    { 
        title: 'Personal Portfolio V2', 
        github: 'https://github.com/Thuta107/Personal-Web-Portfolio-V2',
        domain: '/',
        image: port2,
        tools: ['HTML', 'CSS', 'TypeScript', 'React', 'React Router'],
        desc: 'My current personal developer portfolio that not only showcases my work and abilities, but also tells my story. This portfolio will guide you through my background, work experience, favourite skills & tools, features and projects that I have worked on. The portfolio also support means to directly communicate with me. So if you are interested, please do scroll until the end.'
    },
    { 
        title: 'Personal Portfolio V1', 
        github: 'https://github.com/Thuta107/Personal-Web-Portfolio-V1',
        domain: 'https://personal-web-portfolio-v1.vercel.app/',
        image: port1,
        tools: ['HTML', 'CSS', 'JavaScript', 'Express (NodeJS)', 'Nodemailer', 'Heroku'],
        desc: 'My first-ever version of personal developer portfolio that not only showcases my work and abilities, but also tells my story. This portfolio will guide you through my background, work experience, favourite skills & tools, features and projects that I have worked on. The portfolio also support means to directly communicate with me.'
    },
    { 
        title: 'ReportCare App', 
        github: '',
        domain: '',
        image: reportCare,
        tools: ['React Native', 'AWS', 'Java', 'Amplify'],
        desc: 'Mobile Health Solution (mHealth) to assist patients and clinicians with heart failure (HF). Application assists clinicians and patients communicate effectively, assists and educates patients with self-monitoring of their health conditions, record daily vitals & symptoms. Additionally, application integrates virtual assistant feature to provide assistance to both clinicians and patients with their need.'
    },
    { 
        title: 'Simple Pokedex', 
        github: 'https://github.com/Thuta107/Pokemon-App',
        domain: '',
        image: pokedex,
        tools: ['React', 'Express (NodeJS)', 'PokeAPI', 'MaterialUI'],
        desc: 'Web application that displays various pokemon info, pokedex data and the movesets available in the pokemon game franchise. The application communicates with PokeAPI to retreive the relevant data. In the future, you will be able to add and create your own favourite team and even simulate pokemon battles.'
    },
]