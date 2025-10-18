import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Shield, Code, Zap, Network } from "lucide-react";

const BackendExpertise = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 10 },
        },
        hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    };

    const skills = [
        {
            icon: <Server className="text-blue-400 w-6 h-6" />,
            title: "RESTful API Design",
            desc: "Clean, well-structured APIs with validation, pagination, and error handling.",
        },
        {
            icon: <Shield className="text-blue-400 w-6 h-6" />,
            title: "Authentication & Security",
            desc: "JWT tokens, bcrypt hashing, and secure cookie/session-based authentication.",
        },
        {
            icon: <Database className="text-blue-400 w-6 h-6" />,
            title: "Database Management",
            desc: "MongoDB (Mongoose) and PostgreSQL (Sequelize) with efficient query handling.",
        },
        {
            icon: <Code className="text-blue-400 w-6 h-6" />,
            title: "MVC Architecture",
            desc: "Modular and scalable service-controller-model architecture for maintainability.",
        },
        {
            icon: <Network className="text-blue-400 w-6 h-6" />,
            title: "Transactions & Middleware",
            desc: "Complex business logic management using Express middleware and transactions.",
        },
        {
            icon: <Zap className="text-blue-400 w-6 h-6" />,
            title: "Performance Optimization",
            desc: "Caching with Redis, query indexing, and load-efficient data handling.",
        },
    ];

    return (
        <motion.section
            className="text-white py-16 px-6 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My <span className="text-blue-400">Backend</span> Development Expertise
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#121212] border border-gray-800 rounded-xl p-5 hover:border-blue-500"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            {skill.icon}
                            <h4 className="font-semibold text-lg">{skill.title}</h4>
                        </div>
                        <p className="text-gray-400 text-sm">{skill.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default BackendExpertise;
