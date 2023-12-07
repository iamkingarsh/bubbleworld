import { motion } from 'framer-motion';

function Testimonials() {
    const TestiomonialsData = [
        {
            id: 1,
            name: 'Dr. Sheetal Beri',
            designation: 'Homeopath ',
            org: '"DYNAMIC HOMEOPATHY CLINIC"',
            description: 'BubbleWorld truly excelled in creating an impactful website for my business. They understood the importance of a strong online presence and designed a website that perfectly captured the essence of my brand. The website not only impressed me but also resonated with my target audience, leading to increased engagement and conversions.Throughout the process, BubbleWorld displayed a remarkable commitment to excellence. They meticulously analyzed my business, industry, and competition to develop strategies that would yield optimal results.',
            VideoOrImage: 'https://bubbleworld.in/wp-content/uploads/2023/08/video08-1.mp4',
        },
        {
            id: 2,
            name: 'Sukhwinder Singh',
            designation: 'Cafe Owner',
            org: '"PURE WHITE CAFE"',
            description: 'BubbleWorld truly excelled in creating an impactful website for my business. They understood the importance of a strong online presence and designed a website that perfectly captured the essence of my brand. The website not only impressed me but also resonated with my target audience, leading to increased engagement and conversions.Throughout the process, BubbleWorld displayed a remarkable commitment to excellence. They meticulously analyzed my business, industry, and competition to develop strategies that would yield optimal results.',
            VideoOrImage: 'https://bubbleworld.in/wp-content/uploads/2023/08/image01.jpg',
        }
    ]


    return (
        <div className='Testimonials'>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
            ><h1>Client Testimonials</h1></motion.div>
            <div>
                <div className="Testimonial-1 container">
                    <div className="left">
                        <motion.h3
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                        >{TestiomonialsData[0].org}</motion.h3>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                        >{TestiomonialsData[0].description}</motion.p>
                    </div>
                    <div className="right">
                        <motion.video
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                            className="testimonial-vid" src={TestiomonialsData[0].VideoOrImage} controls></motion.video>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                        >{TestiomonialsData[0].name}</motion.h2>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.5, ease: "linear", }}
                        >{TestiomonialsData[0].designation}</motion.p>
                    </div>
                </div>
                <div className="Testimonial-2 container">
                    <div className="left">
                        <motion.img
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                            className="testimonial-img" src={TestiomonialsData[1].VideoOrImage} controls></motion.img>
                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                        >{TestiomonialsData[1].name}</motion.h2>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.5, ease: "linear", }}
                        >{TestiomonialsData[1].designation}</motion.p>
                    </div>
                    <div className="t-right">
                        <motion.h3
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                        >{TestiomonialsData[1].org}</motion.h3>
                        <motion.p
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 100 }}
                            transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                        >{TestiomonialsData[1].description}</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
