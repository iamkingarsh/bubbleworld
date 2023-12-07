import { motion } from 'framer-motion';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import ReactPlayer from 'react-player'

const instaContent = [
    {
        id: 1,
        video: 'https://youtube.com/shorts/_O34CKDX40M?feature=share',
        title: 'Creato',
        description: 'Restraunt',
        live: 'https://youtube.com',
    },
    {
        id: 2,
        video: 'https://youtube.com/shorts/yTptQySD1kM?feature=share',
        title: 'Sheroes by sheena kang',
        description: 'Clothing',
        live: 'https://youtube.com',
    },
    {
        id: 2,
        video: 'https://youtube.com/shorts/w-VBETDxPPE?feature=share',
        title: 'Aasa by simran',
        description: 'Designer',
        live: 'https://bubbleworld.site/assets/images/slideshow03-df3abccc.jpg?v=87f0ea9c',
    },
];
function InstagramReel() {

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
        <div className="instagramReels">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
            ><h1>Instagram Reels</h1></motion.div>
            <motion.div className='web-container'
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
            >
                {instaContent.map((content) => (
                    <motion.div variants={cardVariants} transition={{ duration: 0.5 }} key={content.id} className="projectCards">
                        <ReactPlayer url={content.video} className="projectVid" controls></ReactPlayer>

                        <h2>{content.title}</h2>
                        <p>{content.description}</p>
                        {/* <div className="button-area"> */}
                        <button onClick={() => window.location.href = content.live} className="btn btnWithIcon">View Live
                            <div className='btn-icon'>
                                < ArrowSmallRightIcon />
                            </div>
                        </button>
                        {/* </div> */}
                    </motion.div>
                ))
                }
                {/* </div> */}
            </motion.div >
        </div >
    )
}

export default InstagramReel
