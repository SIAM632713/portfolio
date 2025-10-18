import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
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

    const statsVariants = {
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
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            className="text-white p-8 rounded-lg max-w-6xl mx-auto shadow-lg border border-gray-800 mt-15"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.p
                className="text-lg md:text-xl leading-relaxed italic"
                variants={itemVariants}
            >
                I'm Siam, a dedicated <span className="text-blue-400 font-medium">Full-Stack MERN Developer</span> with a strong focus on
                building scalable, secure, and efficient backend systems. My expertise includes <span className="text-blue-400 font-medium">Node.js</span>,
                <span className="text-blue-400 font-medium"> Express.js</span>, <span className="text-blue-400 font-medium">MongoDB</span>, and <span className="text-blue-400 font-medium">Mongoose</span> — combined with modern frontend tools like React, Tailwind CSS,
                and Zustand. I specialize in crafting RESTful APIs, authentication systems, and optimized database structures.
                Whether you're looking for a complete full-stack web solution or just solid backend logic for your project,
                I deliver maintainable, production-ready code built for performance and scalability.
            </motion.p>

            <motion.div
                className="flex items-center justify-between mt-8"
                variants={containerVariants}
            >
                <div className="space-x-6 flex items-center">
                    <motion.div
                        variants={statsVariants}
                        whileHover="hover"
                    >
                        <h2 className="text-3xl font-bold">3<span className="text-blue-400">+</span></h2>
                        <p className="text-sm text-gray-300">Project done</p>
                    </motion.div>
                    <motion.div
                        variants={statsVariants}
                        whileHover="hover"
                    >
                        <h2 className="text-3xl font-bold">1<span className="text-blue-400">+</span></h2>
                        <p className="text-sm text-gray-300">Years of experience</p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Banner;