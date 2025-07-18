import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import picture from "../../src/assets/profile-pic.png";

const Header = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.7
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        },
        tap: {
            scale: 0.98
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4
            }
        },
        hover: {
            scale: 1.03,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            transition: { type: "spring", stiffness: 300 }
        }
    };

    const textHighlightVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.8 }
        }
    };

    return (
        <motion.div
            className="text-white flex items-center px-4 mt-15"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                {/* Left Content */}
                <div className="space-y-5">
                    {/* Availability */}
                    <motion.div
                        className="flex items-center space-x-2"
                        variants={itemVariants}
                    >
                        <motion.img
                            src={picture}
                            alt="Profile"
                            className="w-6 h-6 rounded-full"
                            whileHover={{ rotate: 10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        />
                        <span className="text-sm text-gray-300">
                            <motion.span
                                className="text-green-400"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [1, 0.8, 1]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2
                                }}
                            >
                                ●
                            </motion.span> Available for work
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold leading-tight text-white"
                        variants={itemVariants}
                    >
                        Building <motion.span
                        className="text-gray-400"
                        variants={textHighlightVariants}
                    >
                        Scalable
                    </motion.span><br />
                        <motion.span
                            className="text-gray-400"
                            variants={textHighlightVariants}
                        >
                            Modern Websites
                        </motion.span><br />
                        for the Future
                    </motion.h1>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-wrap items-center gap-4 pt-2"
                        variants={itemVariants}
                    >
                        <motion.button
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Download size={16} /> Download CV
                        </motion.button>
                        <motion.button
                            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            animate={{
                                y: [0, 5, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }}
                        >
                            Scroll down <ChevronDown size={16} />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    className="flex justify-center md:justify-end"
                    variants={itemVariants}
                >
                    <motion.img
                        src={picture}
                        alt="Profile"
                        className="w-64 md:w-80 rounded-[2rem] border-4 border-blue-500/20"
                        variants={imageVariants}
                        whileHover="hover"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Header;