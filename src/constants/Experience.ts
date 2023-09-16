import monash from '../images/monash.png'
import curtin from '../images/curtin.webp'
import bigledger from '../images/bigledger.jpeg'
import juris from '../images/juris.png'

export const Educations = [
    { 
        title: 'Monash University Malaysia',
        role: 'Bachelor of Software Engineering', 
        date: 'Jul 2017 - Oct 2021',
        location: 'Malaysia',
        imagePadding: true,
        image: monash,
        desc: [
            'Achieved a GPA of 3.5 and graduated with First Class Honours (H1).'
        ]
    },
    { 
        title: 'Curtin University Malaysia', 
        role: 'Foundation Studies (Engineering)',
        date: 'Mar 2016 - Dec 2016',
        location: 'Sarawak, Malaysia',
        imagePadding: true,
        image: curtin,
        desc: [
            'Achieved a Weighted Average Mark of 87.5 (out of 100).'
        ]
    },
]

export const WorkExperience = [
    { 
        title: 'Bigledger Sdn Bhd',
        role: 'Software Developer',
        date: 'Feb 2022 - Current',
        location: 'Selangor, Malaysia',
        image: bigledger,
        imagePadding: false,
        desc: [
            'Worked in an agile team of 3 handling multiple clients, and successfully helped and delivered 2 of our clients projects.',
            'Specialized in developing new features, components, and widgets for Cross-Platform Ecommerce project, built and developed using Ionic Framework with Angular to support across different platforms.',
            "Built micro-frontend applications, using Angular, for the company's SaaS platform and refactor on state management of these applications.",
            "Implemented integration with popular e-commerce platforms such as Shopify, Shopee, Lazada, etc. and built a consolidated UI workflow that supports managing orders and products to various platforms from our system."
        ]
    },
    { 
        title: 'Monash University Malaysia', 
        role: 'Research Assistant',
        date: 'Dec 2020 - Feb 2021',
        location: 'Malaysia',
        image: monash,
        imagePadding: true,
        desc: [
            'Worked on the development of the mHealth app (hybrid mobile + cloud) for managing of heart failure patients and prediction of heart failure systems using React Native & AWS Amplify.',
            "Researched on the tracking and prediction of patient's potential heart failure through the use of Activity Recognition API offered by the Android Platform for tracing steps, distance & the sensors (environmental stressors).",
            "Got a chance to mentor a second-year student due to my prior experience on the project, and managed to update him on the current state of the project as well as assisting him with the development."
        ]
    },
    { 
        title: 'Juris Technologies', 
        role: 'Software Engineer Intern',
        date: 'Nov 2019 - Feb 2020',
        location: 'Kuala Lumpur, Malaysia',
        image: juris,
        imagePadding: true,
        desc: [
            'Worked on the debt collection and recovery system (web application) for the client using PHP and PHP-based in-house framework, OracleDB, HTML, CSS, and JavaScript.',
            'Primarily debugged and tested features devloped by the team while involving in the development of some features under the guidance and in collaboration with the paired Professional Services Engineer on the team.',
            'Create test suites and test cases for various features alongside the team and able to discover frontend bugs that interfere with the business logic such as page refresh resulting in undesired business workflow upon exiting or refreshing of the application.'
        ]
    },
]