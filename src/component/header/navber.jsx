import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('Home');
    const [hoveredLink, setHoveredLink] = useState(null);

    const navLinks = ['Home', 'About', 'Work', 'Reviews'];

    // Scroll to section
    const handleScroll = (section) => {
        setActive(section);
        setIsOpen(false);

        const el = document.getElementById(section);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const mobileMenuVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: 0.15
            }
        }
    };

    const overlayVariants = {
        open: { opacity: 1, pointerEvents: "auto" },
        closed: { opacity: 0, pointerEvents: "none" }
    };

    return (
        <motion.header
            className="text-white relative z-50"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <motion.button
                        className="md:hidden"
                        onClick={() => setIsOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Menu size={24} />
                    </motion.button>

                    {/* Desktop Nav Links */}
                    <motion.ul
                        className="hidden md:flex space-x-2 bg-[#222] rounded-full p-1 relative"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {navLinks.map((link) => (
                            <motion.li
                                key={link}
                                onClick={() => handleScroll(link)}
                                onMouseEnter={() => setHoveredLink(link)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className={`px-4 py-1 rounded-full cursor-pointer transition relative z-10 ${
                                    active === link
                                        ? 'text-black font-medium'
                                        : 'text-gray-300 hover:text-black'
                                }`}
                                variants={itemVariants}
                            >
                                {link}

                                {hoveredLink === link && (
                                    <motion.div
                                        className="absolute inset-0 bg-white rounded-full -z-10"
                                        layoutId="hoverBg"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                )}

                                {active === link && (
                                    <motion.div
                                        className="absolute inset-0 bg-white rounded-full -z-10"
                                        layoutId="activeBg"
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                )}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>

                <motion.button
                    className="bg-white text-black px-4 py-1 rounded-full font-medium text-sm hover:bg-gray-200 transition"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 5px 15px rgba(255,255,255,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Contact Me
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed top-0 right-0 h-full w-64 bg-[#222] shadow-lg z-40"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={mobileMenuVariants}
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                                <h2 className="text-lg font-semibold">Menu</h2>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>
                            <motion.ul
                                className="p-4 space-y-4 text-sm"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {navLinks.map((link) => (
                                    <motion.li
                                        key={link}
                                        onClick={() => handleScroll(link)}
                                        className={`px-4 py-2 rounded-full cursor-pointer text-center transition ${
                                            active === link
                                                ? 'bg-white text-black font-medium'
                                                : 'text-gray-300 hover:text-black'
                                        }`}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {link}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>

                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
                            onClick={() => setIsOpen(false)}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={overlayVariants}
                            transition={{ duration: 0.2 }}
                        ></motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navber;