import imgFake from '@/public/not-found.jpg';
import vnLicensePlate from '@/public/vn-license-plate-recognition.png';
import personnelMagagement from '@/public/personnel-management.png';
import gameCaro from '@/public/game-caro.png';
import myStore from '@/public/my-store.png';
import apiLayer from '@/public/apilayer.png';
import micro from '@/public/microservices.png';

export const repositories = [
    {
        projectName: 'Microservices E-Commerce',
        technologies: [
            'C#',
            'ASP.NET Core API',
            'Docker',
            'RabbitMQ',
            'Redis',
            'Ocelot',
            'ELK Stack',
            'Prometheus',
            'Grafana',
        ],
        description:
            'The Microservices E-Commerce project is an e-commerce system built on a microservices architecture.',
        githubLink: 'https://github.com/PhucHau0310/MicroservicesECommerce',
        thumbnail: micro.src,
    },
    {
        projectName: 'VN License Plate Recognition',
        technologies: [
            'Python',
            'TypeScript',
            'YOLOV8',
            'FastAPI',
            'OpenCV',
            'EasyOCR',
            'Next.js',
            'Docker',
        ],
        description:
            'A web application uses YOLOv8 to detect license plates and EasyOCR to recognize text from images.',
        githubLink:
            'https://github.com/PhucHau0310/License-Plate-VN-Recognition',
        thumbnail: vnLicensePlate.src,
    },
    {
        projectName: 'Personnel Management System',
        technologies: [
            'C#',
            'TypeScript',
            'ASP.NET Core API',
            'Next.js',
            'Docker',
            'SQL Server',
            'Firebase',
        ],
        description:
            'Personnel Management System through webcam detect to CCCD qr code.',
        githubLink: 'https://github.com/PhucHau0310/Personnel-Management',
        thumbnail: personnelMagagement.src,
    },
    {
        projectName: 'Game Caro',
        technologies: ['C#', 'Windows Forms', 'SQL Server'],
        description:
            'The Caro Game project is a Tic-Tac-Toe-style game developed using Windows Forms in C#. The game allows players to compete against each other on the same computer, over a LAN, or against an AI. It also includes real-time chat functionality.',
        githubLink: 'https://github.com/PhucHau0310/GameCaro',
        thumbnail: gameCaro.src,
    },
    {
        projectName: 'My Store',
        technologies: [
            'TypeScript',
            'Prisma',
            'Next.js',
            'Firebase',
            'Redux Toolkit',
            'Redux Persist',
            'PostgreSQL',
        ],
        description:
            'My Store is a modern e-commerce platform built with Next.js',
        githubLink: 'https://github.com/PhucHau0310/My-Store',
        thumbnail: myStore.src,
    },
    {
        projectName: 'API Layer',
        technologies: [
            'TypeScript',
            'C#',
            'ASP.NET Core API',
            'Next.js',
            'Tailwind CSS',
            'SQL Server',
            'Docker',
        ],
        description:
            'APILayer is a software platform that serves as a marketplace for APIs.',
        githubLink: 'https://github.com/PhucHau0310/APILayer-FE-Clone',
        thumbnail: apiLayer.src,
    },
];
