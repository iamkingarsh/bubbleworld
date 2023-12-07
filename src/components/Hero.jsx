import React from 'react'
import { motion } from 'framer-motion';
import './css/components.css'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

function Hero() {
  return (
    <div className='Hero'>
      <motion.div
        initial={{ opacity: 0.2, x: 2 }}
        animate={{ opacity: 0.6, x: -400, }}
        onAnimationComplete={{ opacity: 0.2, x: 2 }}
        transition={{ duration: 6, type: "spring", repeat: Infinity }}

        className="ellipse-h1"></motion.div>
      <motion.div
        initial={{ opacity: 0.2, x: 2 }}
        animate={{ opacity: 0.6, x: 400 }}
        onEnded={{ opacity: 0.2, x: 2 }}
        transition={{ duration: 6, type: "spring", repeat: Infinity }}

        className="ellipse-h2"></motion.div>

      <motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
          className="HeroLogo">
          <img src="https://bubbleworld.site/assets/images/image05.png?v=87f0ea9c" alt="" srcset="" />
        </motion.div>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
          className='hero-h1'>TRANSFORM YOUR <br /> ONLINE PRESENCE</motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
          className='hero-p'>Establish a powerful brand, and captivate your audience with our <br />
          unique combination of SEO, Branding, and Web Design expertise.</motion.p>
        <motion.div initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.5, ease: "linear", }}
          className='button-container'>

          <motion.button onClick={() => window.location.href = 'https://calendly.com/bubbleworld/30min?back=1&month=2023-06'} className="btn btnWithIcon"> Book a Slot
            <div className='btn-icon'>
              < ArrowSmallRightIcon />
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
