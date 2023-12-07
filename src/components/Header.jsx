import { useState } from 'react';
import { Link } from 'react-scroll';
import './css/components.css';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="Header">
            <div className={`container ${isMenuOpen ? 'columns' : ''}`}>
                <div className="logo-container"
                >
                    <Link
                        to="heroSection"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        activeClass="active"

                    >
                        <img className="logo" src="src/assets/Logo.png" alt="" />
                    </Link>
                </div>
                <div className={`nav-bar ${isMenuOpen ? 'open' : 'close'}`}>
                    <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className={`line top ${isMenuOpen ? 'rotate-top' : ''}`}></div>
                        <div className={`line middle ${isMenuOpen ? 'hide' : ''}`}></div>
                        <div className={`line bottom ${isMenuOpen ? 'rotate-bottom' : ''}`}></div>
                    </div>
                    <div>
                        <ul>
                            <motion.li

                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 1, ease: "linear", }}
                            >
                                <Link
                                    to="aboutSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    activeClass="active"
                                    onClick={handleNavLinkClick}
                                >
                                    About
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                            >
                                <Link
                                    to="worksSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    activeClass="active"
                                    onClick={handleNavLinkClick}
                                >
                                    Our Works
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.5, ease: "linear", }}
                            >
                                <Link
                                    to="testimonialsSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    activeClass="active"
                                    onClick={handleNavLinkClick}
                                >
                                    Testimonials
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.8, ease: "linear", }}
                            >
                                <Link
                                    to="teamSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    activeClass="active"
                                    onClick={handleNavLinkClick}
                                >
                                    Team
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 1, delay: 1, ease: "linear", }}
                            >
                                <Link
                                    to="contactSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    activeClass="active"
                                    onClick={handleNavLinkClick}
                                >
                                    Contact
                                </Link>
                            </motion.li>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 100 }}
                                transition={{ type: "spring", stiffness: 100, duration: 1, delay: 0.2, ease: "linear", }}
                            >
                                <a href="tel:+917013396624" className="btn btnWithIcon Btn-aTag">
                                    Call Now!
                                    <div className="btn-icon">
                                        <PhoneIcon />
                                    </div>
                                </a>
                            </motion.div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
