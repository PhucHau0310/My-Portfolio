'use client';

import logoIcon from '@/public/logo.svg';
import DarkModeButton from './DarkModeButton';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [showButton, setShowButton] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleProjectsClick = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const handleAboutMeClick = () => {
        const aboutMeSection = document.getElementById('about-me');
        if (aboutMeSection) {
            aboutMeSection.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    const handleUpClick = () => {
        const rootSection = document.getElementById('root');
        if (rootSection) {
            rootSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
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
            className="flex justify-between items-center pt-8 pb-4 px-4 lg:px-8 text-gray-800 dark:text-gray-200 transition-colors duration-300 relative"
        >
            <div className="flex items-center space-x-2 cursor-pointer">
                <img
                    src={logoIcon.src}
                    alt="logo icon"
                    className="w-8 h-8 md:w-12 md:h-12 rounded-xl"
                />
                <span className="text-lg md:text-xl font-semibold">
                    Portfolio
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
                <ul className="flex space-x-4 lg:space-x-10 font-semibold">
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

            <div className="hidden md:flex items-center space-x-3 lg:space-x-9">
                <button
                    onClick={handleContactClick}
                    className="px-3 py-2 lg:px-4 lg:py-2 rounded-xl bg-[#6366F1] text-white cursor-pointer hover:-translate-y-2 transition-all hover:bg-[#4F46E5] duration-300"
                >
                    Contact Me
                </button>
                <DarkModeButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:hidden">
                <DarkModeButton />
                <button
                    onClick={toggleMobileMenu}
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-800 transition-colors duration-200"
                >
                    {mobileMenuOpen ? (
                        <XMarkIcon className="w-8 h-8" />
                    ) : (
                        <Bars3Icon className="w-8 h-8" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-white dark:bg-[#1e3851] shadow-lg rounded-b-xl p-4 z-50 md:hidden">
                    <ul className="flex flex-col space-y-4 font-semibold">
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
                        <li>
                            <button
                                onClick={handleContactClick}
                                className="w-full px-4 py-2 rounded-xl bg-[#6366F1] text-white cursor-pointer transition-all hover:bg-[#4F46E5] duration-300"
                            >
                                Contact Me
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            {showButton && (
                <ArrowUpCircleIcon
                    onClick={handleUpClick}
                    className="w-10 h-10 md:w-12 md:h-12 fixed bottom-4 md:bottom-8 right-4 md:right-8 cursor-pointer hover:scale-110 transition-transform duration-300"
                    style={{ zIndex: 1000 }}
                />
            )}
        </div>
    );
};

export default Navbar;
