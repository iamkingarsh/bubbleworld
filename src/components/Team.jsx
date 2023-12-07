import React from 'react';
import { motion } from 'framer-motion';
import './css/components.css';

function Team() {
    const TeamsData = [
        {
            id: 1,
            name: 'Raghav Aneja',
            designation: 'Founder',
            image: 'https://bubbleworld.site/assets/images/image09.jpg?v=87f0ea9c',
        },
        {
            id: 2,
            name: 'Aashna Aneja',
            designation: 'Creative Director',
            image: 'https://bubbleworld.site/assets/images/image10.jpg?v=87f0ea9c',
        },
        {
            id: 3,
            name: 'Mohammed Arshad',
            designation: 'Sr. Web Developer',
            image: 'https://bubbleworld.site/assets/images/image14.jpg?v=87f0ea9c',
        },
        {
            id: 4,
            name: 'Ishika Chopra',
            designation: 'Graphic Designer',
            image: 'https://bubbleworld.site/assets/images/image13.jpg?v=87f0ea9c',
        },
        {
            id: 5,
            name: 'Rashmi',
            designation: 'Graphic Designer',
            image: 'https://bubbleworld.site/assets/images/image11.jpg?v=87f0ea9c',
        },
        {
            id: 6,
            name: 'Vaibhav Sai',
            designation: 'Business Development Executive',
            image: 'https://bubbleworld.site/assets/images/image12.jpg?v=87f0ea9c',
        },
    ];

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,

        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (

        <div className="Team">
            <motion.div
                initial={{ opacity: 0.2, x: 2 }}
                animate={{ opacity: 0.6, x: -1200, }}
                onAnimationComplete={{ opacity: 0.2, x: 2 }}
                transition={{ duration: 6, type: "spring", repeat: Infinity }}

                className="ellipse-t1"></motion.div>
            <motion.div
                initial={{ opacity: 0.2, x: 2 }}
                animate={{ opacity: 0.6, x: 1200 }}
                onEnded={{ opacity: 0.2, x: 2 }}
                transition={{ duration: 6, type: "spring", repeat: Infinity }}

                className="ellipse-t2"></motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
            >
                <h1>Meet The Team</h1>
            </motion.div>
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
            >
                {TeamsData.map((team) => (
                    <motion.div
                        key={team.id}
                        className="teamCards"
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="teamImgContainer">
                            <img className="teamImg" src={team.image} alt={team.name} />
                        </div>
                        <h2>{team.name}</h2>
                        <p>{team.designation}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Team;
