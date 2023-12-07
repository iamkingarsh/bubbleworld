import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { motion } from 'framer-motion';

function CaseStudies() {

    const CaseStudiesData = [
        {
            id: 1,
            logo: 'https://bubbleworld.site/assets/images/image08.png?v=87f0ea9c',
            title: '100 QUALIFIED LEADS IN JUST 4 DAYS AND 150 FOLLOWERS IN 30 DAYS ALL ORGANICALLY.',
            featuredImg: 'https://bubbleworld.site/assets/images/image03.jpg?v=87f0ea9c',
            btnLink: 'https://calendly.com/bubbleworld/30min?month=2023-06',
        },
        {
            id: 2,
            logo: 'https://bubbleworld.site/assets/images/image06.jpg?v=87f0ea9c',
            title: 'REDUCED THEIR OPERATIONAL COST FROM $2,000 TO $300.',
            featuredImg: 'https://bubbleworld.site/assets/images/image04.jpg?v=87f0ea9c',
            btnLink: 'https://calendly.com/bubbleworld/30min?month=2023-06',
        }
    ]

    return (
        <div className='CaseStudies'>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
            ><h1>Case Studies</h1></motion.div>
            <div>
                <div className="container caseStudy-1">
                    <div className="left">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                            className="caseStudy-logoContainer">

                            <img src={CaseStudiesData[0].logo} className='caseStudy-logo' alt="" srcset="" />
                        </motion.div>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                        >{CaseStudiesData[0].title}</motion.h2>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.5, ease: "linear", }}
                        >

                            <button onClick={() => window.location.href = CaseStudiesData[0].btnLink} className="btn btnWithIcon">Book Slot
                                <div

                                    className='btn-icon'>
                                    < ArrowSmallRightIcon />
                                </div>
                            </button>
                        </motion.div>
                    </div>
                    <div className="right">
                        <motion.img
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                            className='featured-img' src={CaseStudiesData[0].featuredImg} alt="" srcset="" />
                    </div>
                </div>
                <div className="container caseStudy-2">

                    <div className="left">
                        <motion.img
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                            className='featured-img' src={CaseStudiesData[1].featuredImg} alt="" srcset="" />
                    </div>
                    <div className="right">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                            className="caseStudy-logoContainer">

                            <img src={CaseStudiesData[1].logo} className='caseStudy-logo' alt="" srcset="" />
                        </motion.div>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                        >{CaseStudiesData[1].title}</motion.h2>

                        <motion.div initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.5, ease: "linear", }} >

                            <button onClick={() => window.location.href = CaseStudiesData[1].btnLink} className="btn btnWithIcon">Book Slot
                                <div className='btn-icon'>
                                    < ArrowSmallRightIcon />
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies
