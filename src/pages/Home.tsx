import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ProjectsSection from '../components/ProjectsSection';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import OurClients from '../components/Clients';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <Services />
      <ProjectsSection />
      <OurClients />
      {/* <Testimonials /> */}
      <ContactUs />
    </div>
  );
};

export default Home;