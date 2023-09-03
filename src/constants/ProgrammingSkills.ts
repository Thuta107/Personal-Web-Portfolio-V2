import html from '../images/html.png'
import css from '../images/css.png'
import react from '../images/react.png' 
import js from '../images/javascript.png'
import java from '../images/java.png'
import python from '../images/python.png'
import node from '../images/nodejs.png'
import git from '../images/git.png'
import gitlab from '../images/gitlab.png'
import github from '../images/github.png'
import mongo from '../images/mongo.png'
import oracle from '../images/oracle.png'
import aws from '../images/aws.png'
import heroku from '../images/heroku.png'
import trello from '../images/trello.png'
import angular from '../images/angular.png'
import typeScript from '../images/typescript.webp'
import rxjs from '../images/rxjs.png'
import ionic from '../images/ionic.png'
import php from '../images/php.png'
import postgres from '../images/postgres.png'
import amplify from '../images/amplify.png'
import firebase from '../images/firebase.png'
import bitbucket from '../images/bitbucket.webp'
import postman from '../images/postman.png'
import jira from '../images/jira.png'

export enum ProgrammingLabelsType {
    frontEnd = 'Frontend',
    backEnd = 'Backend',
    cicd = 'CI/CD',
    topSkills = 'Top Skills',
    cloud = 'Cloud Platform',
    db = 'Databases',
    mobile = 'Mobile',
    taskTracking = 'Task Tracking',
    testing = 'Testing'
}

export enum ProgrammingSkillsType {
    html = 'HTML',
    css = 'CSS',
    angular = 'Angular',
    typeScript = 'TypeScript',
    javaScript = 'JavaScript',
    react = 'React',
    reactNative = 'React Native',
    java = 'Java',
    python = 'Python',
    nodeJs = 'NodeJS',
    rxJs = 'RxJS',
    git = 'Git',
    gitLab = 'gitLab',
    gitHub = 'GitHub',
    bitBucket = 'Bitbucket',
    mongoDB = 'MongoDB',
    oracle = 'Oracle',
    postgres = 'PostgreSQL',
    firebase = 'Firebase',
    aws = 'AWS',
    heroku = 'Heroku',
    trello = 'Trello',
    ionic = 'Ionic',
    jira = 'Jira',
    php = 'PHP',
    amplify = 'Amplify',
    postman = 'Postman API'
}

export const ProgrammingSkillsList = [
    { code: ProgrammingSkillsType.html, image: html, labels: [ProgrammingLabelsType.frontEnd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.css, image: css, labels: [ProgrammingLabelsType.frontEnd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.angular, image: angular, labels: [ProgrammingLabelsType.frontEnd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.typeScript, image: typeScript, labels: [ProgrammingLabelsType.frontEnd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.javaScript, image: js, labels: [ProgrammingLabelsType.frontEnd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.react, image: react, labels: [ProgrammingLabelsType.frontEnd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.rxJs, image: rxjs, labels: [ProgrammingLabelsType.frontEnd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.reactNative, image: react, labels: [ProgrammingLabelsType.mobile, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.ionic, image: ionic, labels: [ProgrammingLabelsType.mobile] },
    { code: ProgrammingSkillsType.java, image: java, labels: [ProgrammingLabelsType.backEnd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.python, image: python, labels: [ProgrammingLabelsType.backEnd] },
    { code: ProgrammingSkillsType.nodeJs, image: node, labels: [ProgrammingLabelsType.backEnd] },
    { code: ProgrammingSkillsType.php, image: php, labels: [ProgrammingLabelsType.backEnd] },
    { code: ProgrammingSkillsType.git, image: git, labels: [ProgrammingLabelsType.cicd, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.gitLab, image: gitlab, labels: [ProgrammingLabelsType.cicd] },
    { code: ProgrammingSkillsType.gitHub, image: github, labels: [ProgrammingLabelsType.cicd] },
    { code: ProgrammingSkillsType.bitBucket, image: bitbucket, labels: [ProgrammingLabelsType.cicd] },
    { code: ProgrammingSkillsType.mongoDB, image: mongo, labels: [ProgrammingLabelsType.db] },
    { code: ProgrammingSkillsType.oracle, image: oracle, labels: [ProgrammingLabelsType.db] },
    { code: ProgrammingSkillsType.postgres, image: postgres, labels: [ProgrammingLabelsType.db, ProgrammingLabelsType.topSkills] },
    { code: ProgrammingSkillsType.aws, image: aws, labels: [ProgrammingLabelsType.cloud] },
    { code: ProgrammingSkillsType.amplify, image: amplify, labels: [ProgrammingLabelsType.cloud] },
    { code: ProgrammingSkillsType.firebase, image: firebase, labels: [ProgrammingLabelsType.cloud] },
    { code: ProgrammingSkillsType.heroku, image: heroku, labels: [ProgrammingLabelsType.cloud] },
    { code: ProgrammingSkillsType.postman, image: postman, labels: [ProgrammingLabelsType.testing] },
    { code: ProgrammingSkillsType.jira, image: jira, labels: [ProgrammingLabelsType.taskTracking] },
    { code: ProgrammingSkillsType.trello, image: trello, labels: [ProgrammingLabelsType.taskTracking] },
]

export const ProgrammingLabelsList = [
    ProgrammingLabelsType.frontEnd,
    ProgrammingLabelsType.backEnd,
    ProgrammingLabelsType.cicd,
    ProgrammingLabelsType.topSkills,
    ProgrammingLabelsType.cloud,
    ProgrammingLabelsType.db,
    ProgrammingLabelsType.mobile,
    ProgrammingLabelsType.taskTracking,
    ProgrammingLabelsType.testing,
]