
import { motion } from 'framer-motion';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

function WebsiteProjects() {
    const projContent = [
        {
            id: 1,
            image: 'src/assets/m11architects.png',
            title: 'M11 Architects',
            description: 'Achitect',
            live: 'https://m11architects.com/',
        },
        {
            id: 2,
            image: 'src/assets/drberi.png',
            title: 'Dr. Beri',
            description: 'Homeopathy',
            live: 'https://drberi.com',
        },
        {
            id: 2,
            image: 'src/assets/TheCoutureByKJH.png',
            title: 'Adamas International',
            description: 'Jewellery',
            live: 'https://thecouturebykjh.com/',
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
        <div className="WebsiteProjects">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
            ><h1>Website Projects</h1></motion.div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" className='web-container'>
                {projContent.map((content,) => (
                    <motion.div key={content.id} className="projectCards" variants={cardVariants} transition={{ duration: 0.5 }}>
                        <img className="projectImg" src={content.image} ></img>
                        <h2>{content.title}</h2>
                        <p>{content.description}</p>

                        <a href={content.live} target='blank' className="btn btnWithIcon Btn-aTag">View Live
                            <div className='btn-icon'>
                                < ArrowSmallRightIcon />
                            </div>
                        </a>

                    </motion.div>
                ))}

            </motion.div>


        </div>
    );
}

export default WebsiteProjects;
