import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import logo1 from "../../src/assets/Screenshot_5.webp";
import logo2 from "../../src/assets/Screenshot_14.webp";
import logo3 from "../../src/assets/Screenshot_4.webp";

const projects = [
    {
        image: logo2,
        title: "Full stack e-commerce",
        tags: ["MERN", "Stripe", "Auth", "Responsive"],
        link: "https://aurellia-e-commerce.vercel.app/",
        github: "https://github.com/SIAM632713?tab=repositories"
    },
    {
        image: logo1,
        title: "Full stack job-portal",
        tags: ["MERN", "CRUD", "Role-based Auth", "Admin Panel"],
        link: "https://job-portal-six-brown.vercel.app/",
        github: "https://github.com/SIAM632713?tab=repositories"
    },
    {
        image: logo3,
        title: "Full stack news-portal",
        tags: ["MERN", "API", "Pagination", "Search"],
        link: "https://news-portal-roan.vercel.app/",
        github: "https://github.com/SIAM632713?tab=repositories"
    },
];

const Work = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const projectVariants = {
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
        },
        hover: {
            y: -5,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const tagVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 10
            }
        },
        hover: {
            scale: 1.05,
            backgroundColor: "#3b82f6",
            color: "#fff",
            transition: { duration: 0.2 }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: { type: "spring", stiffness: 400 }
        },
        tap: {
            scale: 0.95
        }
    };

    return (
        <motion.div
            className="text-white px-6 py-12 max-w-7xl mx-auto mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                My <motion.span
                className="text-blue-400 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                portfolio
            </motion.span> highlights
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                variants={containerVariants}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="border border-gray-800 rounded-xl overflow-hidden bg-[#121212]"
                        variants={projectVariants}
                        whileHover="hover"
                    >
                        <motion.div
                            className="overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover rounded-t-md"
                            />
                        </motion.div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <motion.span
                                        key={i}
                                        className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-full"
                                        variants={tagVariants}
                                        whileHover="hover"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex justify-end gap-2 mt-4">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 text-white p-2 rounded-md"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <Github className="w-4 h-4" />
                                </motion.a>
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white p-2 rounded-md"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Work;