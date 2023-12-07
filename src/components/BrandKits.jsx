import React, { useEffect, useState } from 'react'
import './css/components.css'
import { motion, AnimatePresence } from 'framer-motion';
import 'react-slideshow-image/dist/styles.css';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const slideImages1 = [
    {
        url: 'https://bubbleworld.site/assets/images/slideshow01-057217d7.jpg?v=87f0ea9c',
        caption: 'Slide 1'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow01-1ff47020.jpg?v=87f0ea9c',
        caption: 'Slide 2'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow01-e287eb66.jpg?v=87f0ea9c',
        caption: 'Slide 3'
    },
];

const slideImages2 = [
    {
        url: 'https://bubbleworld.site/assets/images/slideshow03-df3abccc.jpg?v=87f0ea9c',
        caption: 'Slide 1'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow03-84ec3f02.jpg?v=87f0ea9c',
        caption: 'Slide 2'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow03-b2771422.jpg?v=87f0ea9c',
        caption: 'Slide 3'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow03-51787109.jpg?v=87f0ea9c',
        caption: 'Slide 4'
    },
];

const slideImages3 = [
    {
        url: 'https://bubbleworld.site/assets/images/slideshow02-9eda7986.jpg?v=87f0ea9c',
        caption: 'Slide 1'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow02-c8b6e856.jpg?v=87f0ea9c',
        caption: 'Slide 2'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow02-f9dc67ac.jpg?v=87f0ea9c',
        caption: 'Slide 3'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow02-c9252378.jpg?v=87f0ea9c',
        caption: 'Slide 4'
    },
    {
        url: 'https://bubbleworld.site/assets/images/slideshow02-e27e8ace.jpg?v=87f0ea9c',
        caption: 'Slide 5'
    },
];

function BrandKits() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => (prevCount === 2 ? 0 : prevCount + 1));
        }, 2000);


        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount2(prevCount => (prevCount === 3 ? 0 : prevCount + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCount3(prevCount => (prevCount === 4 ? 0 : prevCount + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, [])


    return (
        <div className='BrandKits'>
            <div className="ellipse-a1"></div>
            <div className='container'>
                <div className="b-left">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear" }}
                    >
                        BRAND KITS
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear" }}
                    >
                        Revolutionize your brand identity that helps you stand out in today's competitive marketplace. Our comprehensive range of branding services is designed to elevate your business to new heights.
                    </motion.p>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 100 }}
                        transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.5, ease: "linear" }}
                    >
                        <motion.button onClick={() => window.location.href = 'https://calendly.com/bubbleworld/30min?back=1&month=2023-06'} className="btn btnWithIcon">
                            Let's Talk
                            <div className='btn-icon'>
                                < ArrowSmallRightIcon />

                            </div>
                        </motion.button>
                    </motion.div>
                </div>
                <div className="right">
                    <motion.div

                        className="slide-container"
                        style={{ height: "400px" }} // Set a fixed height for the container
                    >

                        <motion.img
                            key={count}
                            className='image'
                            src={slideImages1[count].url}
                            alt={slideImages1[count].caption}

                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.5 }}
                            transition={{ duration: 1.5 }}
                            style={{ height: "100%" }} // Set the image height to fill the container
                        />

                    </motion.div>
                </div>
            </div>

            <div className="container-2">
                <div className="left-img">
                    <motion.div

                        className="slide-container"
                        style={{ height: "400px" }} // Set a fixed height for the container
                    >

                        <motion.img
                            key={count}
                            className='image'
                            src={slideImages2[count2].url}
                            alt={slideImages2[count2].caption}

                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.2 }}
                            transition={{ duration: 1.2 }}
                            style={{ height: "100%" }} // Set the image height to fill the container
                        />

                    </motion.div>
                </div>
                <div className="right-img">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="slide-container"
                        style={{ height: "400px" }}
                    >

                        <motion.img
                            key={count}
                            className='image'
                            src={slideImages3[count3].url}
                            alt={slideImages3[count3].caption}

                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.2, }}
                            transition={{ duration: 1.2, }}
                            style={{ height: "400px" }}
                        />

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default BrandKits;
