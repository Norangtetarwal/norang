import emoji from 'react-easy-emoji';

import mindtickle from './assets/img/icons/common/mindtickle.png'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Norang Tetarwal",
    "title": "Hi all, I'm Norang",
    "description": "A passionate Backend Developer having an experience of building scalable and reliable backend with very minimal error rates",
    "resumeLink": "https://cv.hanzla.ga"
}

export const openSource = {
    githubUserName: 'Norangtetarwal',
};

export const contact = {}

export const socialLinks = {
    "facebook": "https://www.facebook.com/norang.tetarwal/",
    "instagram": "https://www.instagram.com/norangtetarwal/",
    "twitter": "https://twitter.com/",
    "github": "https://github.com/Norangtetarwal",
    "linkedin": "https://www.linkedin.com/in/tetarwal/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
        emoji(
            '⚡ Developed highly reliable backend for multiple applications'
        ),
        emoji(
            '⚡ Worked and contributed to event based architecture'
        ),
        emoji(
            '⚡ Worked with multiple third party services like aws, es, sumologic, datadog'
        ),
    ],

    softwareSkills: [
        // {
        //   skillName: 'html-5',
        //   fontAwesomeClassname: 'vscode-icons:file-type-html',
        // },
        // {
        //   skillName: 'css3',
        //   fontAwesomeClassname: 'vscode-icons:file-type-css',
        // },
        {
            skillName: 'sass',
            fontAwesomeClassname: 'logos:sass',
        },
        {
            skillName: 'JavaScript',
            fontAwesomeClassname: 'logos:javascript',
        },
        {
            skillName: 'TypeScript',
            fontAwesomeClassname: 'logos:typescript-icon',
        },
        // {
        //   skillName: 'reactjs',
        //   fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        // },
        {
            skillName: 'nodejs',
            fontAwesomeClassname: 'logos:nodejs-icon',
        },
        {
            skillName: 'java',
            fontAwesomeClassname: 'logos:java',
        },
        // {
        //   skillName: 'swift',
        //   fontAwesomeClassname: 'vscode-icons:file-type-swift',
        // },
        {
            skillName: 'npm',
            fontAwesomeClassname: 'vscode-icons:file-type-npm',
        },
        {
            skillName: 'sql-database',
            fontAwesomeClassname: 'vscode-icons:file-type-sql',
        },
        // {
        //   skillName: 'mongoDB',
        //   fontAwesomeClassname: 'vscode-icons:file-type-mongo',
        // },
        {
            skillName: 'aws',
            fontAwesomeClassname: 'logos:aws',
        },
        {
            skillName: 'firebase',
            fontAwesomeClassname: 'logos:firebase',
        },
        {
            skillName: 'python',
            fontAwesomeClassname: 'logos:python',
        },
        {
            skillName: 'git',
            fontAwesomeClassname: 'logos:git-icon',
        },
        {
            skillName: 'docker',
            fontAwesomeClassname: 'logos:docker-icon',
        },
        {
            skillName: 'couchbase',
            fontAwesomeClassname: 'logos:couchbase',
        },
        {
            skillName: 'kafka',
            fontAwesomeClassname: 'logos:kafka',
        },
        {
            skillName: 'graphQL',
            fontAwesomeClassname: 'logos:graphql',
        },
        {
            skillName: 'sumologic',
            fontAwesomeClassname: 'simple-icons:sumologic',
        },
        {
            skillName: 'datadog',
            fontAwesomeClassname: 'simple-icons:datadog',
        },
        {
            skillName: 'pagerduty',
            fontAwesomeClassname: 'simple-icons:pagerduty',
        },
        {
            skillName: 'golang',
            fontAwesomeClassname: 'grommet-icons:golang',
        },
    ],
}


export const SkillBars = [
    {
        Stack: 'Backend',
        progressPercentage: '80',
    },
    {
        Stack: 'Programming',
        progressPercentage: '60',
    },
    {
        Stack: 'Debugging and Tracing',
        progressPercentage: '90',
    },
    {
        Stack: 'System Design',
        progressPercentage: '50',
    },
]

export const educationInfo = [
    {
        schoolName: 'Indian Institute Of Technology Guwahati (India)',
        subHeader: 'Bachelor of Technology in Electronics and Communication Engineering',
        duration: 'July 2015 - May 2019',
        desc: '',
        descBullets: [],
    },
    // {
    //     schoolName: 'Indian Institute Of Technology Guwahati (India)',
    //     subHeader: 'Bachelor of Technology in Electronics and Communication Engineering',
    //     duration: 'July 2015 - May 2019',
    //     desc: '',
    //     descBullets: [],
    // },
    // {
    //   schoolName: 'Harvard',
    //   subHeader: 'Master of Science in Computer Science',
    //   duration: 'September 2017 - April 2019',
    //   desc: 'Participated in the research of XXX and published 3 papers.',
    //   descBullets: [
    //     'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   ],
    // },
    // {
    //   schoolName: 'Stanford University',
    //   subHeader: 'Bachelor of Science in Computer Science',
    //   duration: 'September 2013 - April 2017',
    //   desc:
    //     'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
    //   descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
    // },
]

export const experience = [
    {
        role: 'Software Engineer',
        company: 'Mindtickle',
        companylogo: mindtickle,
        date: 'June 2019 – Present',
        desc:
            'Worked on multiple backend projects, contributed to more then 10 active repositories',
        descBullets: [
            'Created a graphQL server from scratch, which empowers multiple active dashboards',
            'Created multiple aws lambda and stream-lined it\'s deployments through botocore',
        ],
    },
    {
        role: 'Front-End Developer',
        company: 'Github',
        companylogo: github,
        date: 'May 2017 – May 2018',
        desc:
            'Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        role: 'Software Engineer Intern',
        company: 'Airbnb',
        companylogo: airbnb,
        date: 'Jan 2015 – Sep 2015',
        desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

export const projects = [
    {
        name: "Generation and Analysis of Random Sequences",
        desc: "The project involves analyzing Linear Feedback shift registers and Proposing a scheme to make\n" +
            "Random number generators in modern ciphers more secure.",
    },
    {
        name: "Quality Enhancement of Audio speech signals",
        desc: "Designed an algorithm using MATLAB which aimed at reducing the noise in the received audio speech\n" +
            "signals by comparing it with the spectrum of the noise signal and manipulating its frequency\n" +
            "coefficients.",
    },
    {
        name: "Edge Detection System using FRDM-KL25Z Microcontroller.",
        desc: "Developed a program on FRDM_KL25Z microcontroller for edge detection using the Sobel\n" +
            "operator.",
        // link: {
        //     name: "hanzla",
        //     url: "kasjfklsdjf"
        // }
    }
]