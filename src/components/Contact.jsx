import React from 'react'
import './css/components.css';
import { InlineWidget } from "react-calendly";
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div className='Contact'>
            <motion.div
                className='headingDiv'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
            >
                <h1>Let's connect and see <br />how we can help you</h1>
            </motion.div>
            <motion.div className='Calendly'
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
            >
                <InlineWidget url="https://calendly.com/bubbleworld/30min" />

            </motion.div>
        </div >
    )
}

export default Contact
