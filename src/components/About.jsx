import './css/components.css'
import { motion } from 'framer-motion';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

function About() {
    return (
        <div className='About'>
            <div
                // initial={{ opacity: 0.2, x: 2 }}
                // animate={{ opacity: 0.6, x: -1200, }}
                // onAnimationComplete={{ opacity: 0.2, x: 2 }}
                // transition={{ duration: 6, type: "spring", repeat: Infinity }}

                className="ellipse-a1"></div>
            <div className='container'>

                <div className="left">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                    >BUBBLE WORLD</motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                    >Your one-stop marketing agency for all things SEO, branding, and web design. We are a dynamic team of experts passionate about creating digital experiences that make your business shine in the online realm.<br /><br />
                        At Bubble World, we understand the importance of a strong online presence in today&apos;s competitive landscape. That&apos;s why we offer a comprehensive range of services tailored to meet your specific needs and goals.</motion.p>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.5, ease: "linear", }}
                    >

                        <motion.button onClick={() => window.location.href = 'https://calendly.com/bubbleworld/30min?back=1&month=2023-06'} className="btn btnWithIcon">Let&apos;s Talk
                            <div className='btn-icon'>
                                < ArrowSmallRightIcon />
                            </div>
                        </motion.button>
                    </motion.div>
                </div>
                <div className="right">

                    <motion.video initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }} controls={true} className='video-frame' src="https://bubbleworld.in/wp-content/uploads/2023/08/video01.mp4"></motion.video>
                </div>
            </div>
        </div>
    )
}

export default About
