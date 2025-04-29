'use client';

import logoIcon from '@/public/logo.svg';
import DarkModeButton from './DarkModeButton';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [showButton, setShowButton] = useState(false);

    const handleProjectsClick = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAboutMeClick = () => {
        const aboutMeSection = document.getElementById('about-me');
        if (aboutMeSection) {
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleUpClick = () => {
        const rootSection = document.getElementById('root');
        if (rootSection) {
            rootSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.getElementById('projects');

            if (projectsSection) {
                const projectsPosition = projectsSection.offsetTop;

                if (window.scrollY > projectsPosition) {
                    setShowButton(true);
                } else {
                    setShowButton(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            id="root"
            className="flex justify-between items-center pt-8 pb-4 px-4 text-gray-800 dark:text-gray-200 transition-colors duration-300"
        >
            <div className="flex items-center space-x-2 cursor-pointer">
                <img
                    src={logoIcon.src}
                    alt="logo icon"
                    className="w-12 h-12 rounded-xl"
                />
                <span className="text-xl font-semibold">Portfolio</span>
            </div>

            <div>
                <ul className="flex space-x-10 font-semibold">
                    <li
                        onClick={handleProjectsClick}
                        className="p-2 cursor-pointer hover:text-blue-800 transition-colors duration-200"
                    >
                        Projects
                    </li>
                    <li
                        onClick={handleAboutMeClick}
                        className="p-2 cursor-pointer hover:text-blue-800 transition-colors duration-200"
                    >
                        About Me
                    </li>
                    <li
                        onClick={handleContactClick}
                        className="p-2 cursor-pointer hover:text-blue-800 transition-colors duration-200"
                    >
                        Contact
                    </li>
                </ul>
            </div>

            <div className="flex items-center space-x-9">
                <button
                    onClick={handleContactClick}
                    className="px-4 py-2 rounded-xl bg-[#6366F1] text-white cursor-pointer hover:-translate-y-2 transition-all hover:bg-[#4F46E5] duration-300"
                >
                    Contact Me
                </button>
                <DarkModeButton />
            </div>

            {showButton && (
                <ArrowUpCircleIcon
                    onClick={handleUpClick}
                    className="w-12 h-12 fixed bottom-8 right-8 cursor-pointer  hover:scale-110 transition-transform duration-300"
                    style={{ zIndex: 1000 }}
                />
            )}
        </div>
    );
};

export default Navbar;
