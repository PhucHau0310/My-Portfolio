'use client';

import { repositories } from '@/constants/repos-github';
import developerImg from '@/public/developer.svg';
import avatar from '@/public/hau.jpg';
import githubIcon from '@/public/github.svg';
import gmailIcon from '@/public/gmail.svg';
import linkedin from '@/public/linkedin.svg';
import facebookIcon from '@/public/facebook.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export default function Home() {
    const [showEmail, setShowEmail] = useState(false);
    return (
        <div className="mb-16 px-4 md:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between transition-all duration-300 py-8 md:py-0">
                <motion.div
                    className="w-full md:w-[45%] lg:w-[38%] flex flex-col items-center md:items-start mb-8 md:mb-14"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left text-gray-800 dark:text-gray-200">
                        HI, IAM HẬU NGUYỄN
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl lg:text-4xl text-center md:text-left text-gray-600 dark:text-gray-400">
                        A Full-Stack Developer
                    </p>
                    <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
                        <a
                            href="/CV-NguyenPhucHau.pdf"
                            download="CV-NguyenPhucHau.pdf"
                            className="px-4 py-2 md:px-5 md:py-3 border border-[#c7d2fe] rounded-lg bg-[#EEF2FF] text-[#6b7280] cursor-pointer hover:text-white transition-all hover:bg-[#4F46E5] duration-300"
                        >
                            My Resume
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full md:w-[50%] lg:w-[58%] mb-6 md:mb-0"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: 'easeOut',
                    }}
                >
                    <img
                        src={developerImg.src}
                        alt="developer"
                        className="w-full h-auto md:h-[400px] lg:h-[600px]"
                    />
                </motion.div>
            </div>

            <div
                id="projects"
                className="w-full h-[1px] bg-[#767676] my-8 md:my-16"
            ></div>

            {/* Projects Section */}
            <div className="mt-8 md:mt-10">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                        Projects
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mt-6 md:mt-10"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {repositories.map((repo, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            onClick={() => window.open(repo.githubLink)}
                            className="cursor-pointer hover:scale-105 shadow-lg rounded-xl bg-white dark:bg-[#1e3851] transition-all duration-300"
                        >
                            <img
                                src={repo.thumbnail}
                                alt={repo.projectName}
                                className="w-full h-40 sm:h-44 md:h-48 object-cover rounded-tl-lg rounded-tr-lg"
                            />
                            <div className="p-3 md:p-4">
                                <h3 className="text-lg md:text-xl font-semibold">
                                    {repo.projectName}
                                </h3>
                                <div className="flex flex-wrap mt-2">
                                    {repo.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-[#0284c7] font-semibold text-white px-2 py-1 rounded-full text-xs md:text-sm mr-2 mb-2"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                                <p className="mt-2 text-sm md:text-base">
                                    {repo.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <h3
                    onClick={() =>
                        window.open('https://github.com/PhucHau0310')
                    }
                    className="cursor-pointer mt-6 md:mt-10 text-xl md:text-2xl text-center font-bold"
                >
                    See more on my Github
                </h3>
            </div>

            <div
                id="about-me"
                className="w-full h-[1px] bg-[#767676] my-8 md:my-16"
            ></div>

            {/* About Me Section */}
            <div className="mt-8 md:mt-10">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                        About Me
                    </h2>
                </motion.div>

                <motion.div
                    className="w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-6 md:mt-10"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                >
                    <img
                        src={avatar.src}
                        alt="developer"
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover"
                    />

                    <div className="flex flex-col items-center md:items-start gap-3 md:gap-4 font-semibold text-sm md:text-base">
                        <p>
                            I'm from Vietnam, started programming back in 2021
                            and turned it into a hobby.
                        </p>
                        <p>
                            {' '}
                            I'm a Full-Stack Developer with a passion for
                            building web applications and learning new
                            technologies. I love to create beautiful and
                            functional user interfaces, and I'm always looking
                            for ways to improve my skills and knowledge. I'm
                            currently working on a few personal projects and
                            looking for new opportunities to learn and grow. I'm
                            also interested in open source contributions and
                            collaborating with other developers.
                        </p>
                        <p>
                            {' '}
                            In my free time, I enjoy reading books, playing
                            video games, and spending time with my family and
                            friends. I'm also a big fan of anime and manga, and
                            I love to watch and read them in my spare time. I'm
                            always open to new ideas and suggestions, so feel
                            free to reach out to me if you have any questions or
                            want to chat. You can find me on my social media
                            accounts or contact me via email. I'm looking
                            forward to hearing from you!
                        </p>
                        <p>
                            {' '}
                            Thank you for visiting my portfolio website, and I
                            hope you enjoy your stay!
                        </p>
                        <p> Best regards, Hậu Nguyễn</p>
                    </div>
                </motion.div>
            </div>

            <div
                id="contact"
                className="w-full h-[1px] bg-[#767676] my-8 md:my-16"
            ></div>

            {/* Contact Section */}
            <div className="mt-8 md:mt-10">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                >
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
                        Contact
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                >
                    <ul className="relative flex flex-row items-center mt-6 md:mt-10 mx-auto justify-center gap-4 md:gap-6 lg:gap-10">
                        <li
                            onClick={() =>
                                window.open('https://github.com/PhucHau0310')
                            }
                            className="flex items-center hover:shadow-lg hover:shadow-gray-600 transition-all duration-400 cursor-pointer shadow-xl gap-2 bg-[#f9fafb] dark:bg-[#1e3851] p-2 md:p-3 rounded-xl"
                        >
                            <img
                                src={githubIcon.src}
                                alt="github"
                                className="w-5 h-5 md:w-6 md:h-6 text-[#9ca3af]"
                            />
                        </li>
                        <li
                            onMouseEnter={() => setShowEmail(true)}
                            onMouseLeave={() => setShowEmail(false)}
                            className="flex items-center hover:shadow-lg hover:shadow-gray-600 transition-all duration-400 cursor-pointer shadow-xl gap-2 bg-[#f9fafb] dark:bg-[#1e3851] p-2 md:p-3 rounded-xl"
                        >
                            <a
                                href="mailto:haunhpr024@gmail.com?subject=Contact from your portfolio website&body=Hi, I wannna contact with you about..."
                                className="flex items-center gap-2 w-full"
                                title="Contact from your portfolio"
                            >
                                <img
                                    src={gmailIcon.src}
                                    alt="email"
                                    className="w-5 h-5 md:w-6 md:h-6 text-[#9ca3af]"
                                />
                            </a>
                        </li>
                        <li className="flex items-center hover:shadow-lg hover:shadow-gray-600 transition-all duration-400 cursor-pointer shadow-xl gap-2 bg-[#f9fafb] dark:bg-[#1e3851] p-2 md:p-3 rounded-xl">
                            <img
                                src={linkedin.src}
                                alt="linkedin"
                                className="w-5 h-5 md:w-6 md:h-6 text-[#9ca3af]"
                            />
                        </li>

                        <li
                            onClick={() =>
                                window.open(
                                    'https://www.facebook.com/phuchau204'
                                )
                            }
                            className="flex items-center hover:shadow-lg hover:shadow-gray-600 transition-all duration-400 cursor-pointer shadow-xl gap-2 bg-[#f9fafb] dark:bg-[#1e3851] p-2 md:p-3 rounded-xl"
                        >
                            <img
                                src={facebookIcon.src}
                                alt="facebook"
                                className="w-5 h-5 md:w-6 md:h-6 text-[#9ca3af]"
                            />
                        </li>
                        {showEmail && (
                            <p className="transition-transform duration-300 text-center absolute -bottom-8 md:-bottom-10 left-0 right-0 text-sm md:text-base text-gray-500 dark:text-gray-400">
                                haunhpr024@gmail.com
                            </p>
                        )}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeOut',
                    }}
                >
                    <h3 className="text-center mt-10 md:mt-16 text-base md:text-xl font-semibold">
                        Designed and made with 💙 by Nguyễn Phúc Hậu @2025
                    </h3>
                </motion.div>
            </div>
        </div>
    );
}
