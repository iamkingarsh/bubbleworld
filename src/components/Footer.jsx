import React from 'react'
import { ArrowRight, Facebook, Instagram, Linkedin } from 'react-bootstrap-icons'

function Footer() {
    return (
        <div className='Footer'>
            <div className="SocialIcons-Container">
                <div className="instagram s-icons">
                    <a href="https://www.instagram.com/bubbleworld.tech/" target="_blank" rel="noreferrer"> <Instagram className='icons' color="white" size={20} /></a>
                </div>
                <div className="LinkedIn s-icons">
                    <a href="https://www.linkedin.com/company/bubble-world/" target="_blank" rel="noreferrer"><Linkedin className='icons' color="white" size={20} /></a>
                </div>
            </div>
            © BubbleTechSpace Pvt. Ltd. | All Rights Reserved
        </div>
    )
}

export default Footer
