import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: "Cp.jpg",
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: "pyy.png",
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: "sq.png",
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl:"mll.jpg",
        name: "Machine Learning",
        type: "Machine Learning",
    },
    {
        imageUrl: "ds.jpeg",
        name: "Problem Solving",
        type: "Problem Solving",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: "da.png",
        name: "Data Analytic",
        type: "Data Analysis",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shaunfernandes84/shaunfernandes84.git',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/shaun-fernandes-513855287',
    }
];

export const projects = [
    {
        iconUrl: react,
        theme: 'btn-back-red',
        name: 'Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto',
        description: 'Web 3.0 has the potential to change the internet as we know it, forever. Youre still early in catching the trend right now and building your first blockchain cryptocurrency app.',
        link: 'https://github.com/shaunfernandes84/shaunfernandes84.git',
    },
    {
        iconUrl: nodejs,
        theme: 'btn-back-green',
        name: 'MMA-training-Gym',
        description: 'Using pug, Node.js , css, javascript, etc The project involves creating an MMA training gym website using technologies like Pug, Node.js, CSS, and JavaScript to provide an engaging user experience. It offers features like class schedules, membership management, trainer profiles, a gallery, news and events, and a contact page. The website aims to cater to both beginners and experienced fighters, fostering a sense of community and offering a seamless online experience for all users.',
        link: 'https://github.com/shaunfernandes84/MMA-training-Gym.git',
    },
    {
        iconUrl: contact,
        theme: 'btn-back-blue',
        name: 'HOMIES-lets-chat',
        description: 'my first chat application using socket.io Here i learnt how a user joins a server leaves a server how the messages are sent and received using socket.io and node.js. Ive learnet more about java script and styling.',
        link: 'https://github.com/shaunfernandes84/HOMIES-let-s-chat.git',
    },
    {
        iconUrl: "da.png",
        theme: 'btn-back-yellow',
        name: 'AQI Prediction',
        description: 'Air Quality Prediction using Regression/html/css/Flask which predicts the value of Particulate Matter(2.5) and the value is represented in User-freindly UI.',
        link: 'https://github.com/shaunfernandes84/shaunfernandes84.git',
    },
    {
        iconUrl: "mll.jpg",
        theme: 'btn-back-red',
        name: 'Football game Prediction',
        description: 'Developed a ML model using Random Forest/Neural Network/Regression which gives the prediction of Football matches played.',
        link: 'https://github.com/shaunfernandes84/shaunfernandes84.git',
    },
    {
        iconUrl: javascript,
        theme: 'btn-back-orange',
        name: 'Cyberpunk: Front page',
        description: '3D Animations Using HTML, CSS & JS | Scrolling Animation Using Canvas.',
        link: 'https://github.com/shaunfernandes84/3D-animation-website.git',
    }
];