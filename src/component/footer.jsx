import React from "react";
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Codepen } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: "#2563eb",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        },
        tap: {
            scale: 0.98
        }
    };

    const linkVariants = {
        hover: {
            color: "#3b82f6",
            x: 5,
            transition: { duration: 0.2 }
        }
    };

    const socialIconVariants = {
        hover: {
            scale: 1.2,
            color: "#3b82f6",
            transition: { type: "spring", stiffness: 500 }
        }
    };

    return (
        <motion.footer
            className="text-white py-12 px-6 bg-[#111]"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

                {/* Left Section */}
                <motion.div
                    className="flex flex-col justify-between"
                    variants={itemVariants}
                >
                    <motion.h2
                        className="text-3xl font-semibold leading-tight"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Let's work <br />
                        <motion.span
                            className="text-blue-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            together today!
                        </motion.span>
                    </motion.h2>

                    <motion.button
                        className="flex items-center gap-2 bg-[#3b82f6] text-white px-4 py-2 rounded-md mt-4 md:mt-0 w-max"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Start project <ArrowRight size={16} className="inline-block" />
                    </motion.button>
                </motion.div>

                {/* Sitemap */}
                <motion.div variants={itemVariants}>
                    <motion.h4
                        className="text-lg font-semibold mb-4"
                        whileHover={{ scale: 1.02 }}
                    >
                        Sitemap
                    </motion.h4>
                    <ul className="space-y-2">
                        {['Home', 'About', 'Work', 'Reviews', 'Contact me'].map((item) => (
                            <motion.li
                                key={item}
                                className="text-gray-400 cursor-pointer"
                                variants={linkVariants}
                                whileHover="hover"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Socials */}
                <motion.div variants={itemVariants}>
                    <motion.h4
                        className="text-lg font-semibold mb-4"
                        whileHover={{ scale: 1.02 }}
                    >
                        Socials
                    </motion.h4>
                    <ul className="space-y-3">
                        {[
                            { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/SIAM632713" },
                            { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://linkedin.com/" },
                            { name: "Twitter X", icon: <Twitter size={18} />, url: "#" },
                            { name: "Instagram", icon: <Instagram size={18} />, url: "#" },
                            { name: "CodePen", icon: <Codepen size={18} />, url: "https://codepen.io/" }
                        ].map((social) => (
                            <motion.li
                                key={social.name}
                                whileHover={{ x: 5 }}
                            >
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400"
                                >
                                    <motion.span
                                        variants={socialIconVariants}
                                        whileHover="hover"
                                        className="inline-block"
                                    >
                                        {social.icon}
                                    </motion.span>
                                    {social.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                className="max-w-7xl mx-auto mt-16 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
            >
                © {new Date().getFullYear()} Siam. All rights reserved.
            </motion.div>
        </motion.footer>
    );
};

export default Footer;