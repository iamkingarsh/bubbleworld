import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import { motion } from 'framer-motion';
import WebsiteProjects from './components/WebsiteProjects';
import InstagramReel from './components/InstagramReel';
import BrandKits from './components/BrandKits';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Header from './components/Header';
import { Element } from 'react-scroll';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {


  return (
    <>
      <div className="noise"></div>
      <Header />
      <Element name="heroSection">
        <Hero />
      </Element>
      <Element name="aboutSection">
        <About />
      </Element>
      <Element name="worksSection">
        <WebsiteProjects />
        <InstagramReel />
        <BrandKits />
      </Element>
      <Element name="testimonialsSection">
        <Testimonials />
        <CaseStudies />
      </Element>
      <Element name="teamSection">
        <Team />
      </Element>
      <Element name="contactSection">
        <Contact />
      </Element>

      <Footer />

    </>
  )
}

export default App
