import React from 'react';
import { motion } from 'framer-motion';
import logo1 from "../../src/assets/download.jpeg";
import logo2 from "../../src/assets/download.png";
import logo3 from "../../src/assets/download (1).png";
import logo5 from "../../src/assets/download (3).png";
import logo6 from "../../src/assets/download (4).png";
import logo7 from "../../src/assets/download (5).png";
import logo8 from "../../src/assets/images.png";

const tools = [
    { logo: logo1, title: "NodeJs", desc: "Web Server" },
    { logo: logo2, title: "CSS", desc: "User Interface" },
    { logo: logo3, title: "JavaScript", desc: "Interaction" },
    { logo: logo8, title: "ExpressJS", desc: "Node Framework" },
    { logo: logo5, title: "MongoDB", desc: "Database" },
    { logo: logo6, title: "React", desc: "Framework" },
    { logo: logo7, title: "TailwindCss", desc: "User Interface" },
];

const Tools = () => {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            y: -5,
            backgroundColor: "#1e1e1e",
            borderColor: "#3b82f6",
            boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const logoVariants = {
        hover: {
            scale: 1.2,
            rotate: [0, 10, -10, 0],
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <motion.div
            className="text-white py-12 px-6 max-w-7xl mx-auto mt-15"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-3xl font-bold">
                    Essential <span className="text-blue-400">Tools</span> I use
                </h2>
                <p className="text-gray-400 mt-2 max-w-2xl">
                    Discover the powerful tools and technologies I use to create
                    exceptional, high-performing websites & applications.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                variants={containerVariants}
            >
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-3 bg-[#121212] border border-gray-800 rounded-lg p-4 cursor-pointer"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <motion.img
                            src={tool.logo}
                            alt={tool.title}
                            className="w-8 h-8 object-contain"
                            variants={logoVariants}
                            whileHover="hover"
                        />
                        <div>
                            <h4 className="text-base font-semibold">{tool.title}</h4>
                            <p className="text-xs text-gray-400">{tool.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Tools;