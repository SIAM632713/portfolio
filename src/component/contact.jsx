import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
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
            backgroundColor: "#1e40af",
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.98
        }
    };

    const socialButtonVariants = {
        hover: {
            scale: 1.1,
            backgroundColor: "#3b82f6",
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95
        }
    };

    const inputVariants = {
        focus: {
            borderColor: "#3b82f6",
            boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)"
        }
    };

    return (
        <motion.div
            className="text-white py-12 px-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                {/* Left Section */}
                <motion.div variants={containerVariants}>
                    <motion.h2
                        className="text-3xl font-semibold mb-4"
                        variants={itemVariants}
                    >
                        Contact me for <br />
                        <motion.span
                            className="font-bold text-blue-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            collaboration
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 mb-6"
                        variants={itemVariants}
                    >
                        Reach out today to discuss your project needs and start collaborating on something amazing!
                    </motion.p>

                    <motion.div
                        className="flex gap-4"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="https://github.com/SIAM632713"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={socialButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <button className="p-3 bg-[#27272a] rounded-md flex items-center gap-2">
                                <Github size={20}/>
                                <span className="text-sm">GitHub</span>
                            </button>
                        </motion.a>

                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={socialButtonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <button className="p-3 bg-[#27272a] rounded-md flex items-center gap-2">
                                <Linkedin size={20}/>
                                <span className="text-sm">LinkedIn</span>
                            </button>
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Section */}
                <motion.form
                    className="flex flex-col gap-4"
                    variants={containerVariants}
                >
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        variants={itemVariants}
                    >
                        <motion.input
                            type="text"
                            placeholder="Name"
                            className="bg-[#27272a] p-3 rounded-md text-sm placeholder-gray-400 focus:outline-none border border-transparent"
                            variants={itemVariants}
                            whileFocus="focus"
                        />
                        <motion.input
                            type="email"
                            placeholder="Email"
                            className="bg-[#27272a] p-3 rounded-md text-sm placeholder-gray-400 focus:outline-none border border-transparent"
                            variants={itemVariants}
                            whileFocus="focus"
                        />
                    </motion.div>

                    <motion.textarea
                        rows="4"
                        placeholder="Message"
                        className="bg-[#27272a] p-3 rounded-md text-sm placeholder-gray-400 focus:outline-none border border-transparent"
                        variants={itemVariants}
                        whileFocus="focus"
                    ></motion.textarea>

                    <motion.button
                        type="submit"
                        className="bg-[#3b82f6] hover:bg-[#2563eb] p-3 rounded-md font-semibold flex items-center justify-center gap-2"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <Mail size={18}/>
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;