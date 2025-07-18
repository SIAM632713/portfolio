import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from "../../src/assets/download (13).jpeg";
import logo2 from "../../src/assets/download (14).jpeg";
import logo3 from "../../src/assets/download (15).jpeg";
import logo4 from "../../src/assets/download45.jpeg";

const testimonials = [
    {
        name: "Ethan Caldwell",
        company: "NexaWave",
        text: "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
        image: logo2,
    },
    {
        name: "Liam Bennett",
        company: "CodeCraft",
        text: "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
        image: logo3,
    },
    {
        name: "Noah Williams",
        company: "BrightWeb",
        text: "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
        image: logo1,
    },
    {
        name: "Ava Thompson",
        company: "TechMosaic",
        text: "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
        image: logo4,
    },
];

const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 },
            },
        ],
    };

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

    const cardVariants = {
        hover: {
            y: -5,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    const starVariants = {
        animate: {
            scale: [1, 1.1, 1],
            transition: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.div
            className="text-white py-16"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2
                className="text-center text-3xl font-semibold mb-12"
                variants={itemVariants}
            >
                What our <span className="text-blue-400">customers</span> say
            </motion.h2>

            <div className="mx-auto max-w-7xl px-4">
                <Slider {...settings}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="p-4"
                            variants={itemVariants}
                        >
                            <motion.div
                                className="bg-[#27272a] rounded-lg p-6 min-h-[220px] flex flex-col justify-between shadow-lg border border-gray-700"
                                variants={cardVariants}
                                whileHover="hover"
                            >
                                <div>
                                    <motion.div
                                        className="text-yellow-400 mb-4 flex gap-1"
                                        variants={starVariants}
                                        animate="animate"
                                    >
                                        {[...Array(5)].map((_, i) => (
                                            <motion.span key={i} variants={starVariants}>
                                                ★
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                    <p className="text-sm">{item.text}</p>
                                </div>
                                <motion.div
                                    className="flex items-center gap-3 mt-6"
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
                                        whileHover={{ rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    />
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-400">{item.company}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
};

export default Review;