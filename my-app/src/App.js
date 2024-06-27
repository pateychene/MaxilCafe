import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from '@react-spring/web'; // Importation des fonctionnalités de React Spring
import CustomNavbar from './components/Navbar/navbar';
import HomePage from './pages/homepage/HomePage';
import ContactPage from './pages/contact/ContactPage';
import Carousel from './components/Carousel/carousel';
import Loader from './components/Loader/loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 secondes de délai

    return () => clearTimeout(timer);
  }, []);

  // Animation pour la transition des composants
  const fadeInNavbar = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? 'translateY(-20px)' : 'translateY(0)',
    config: config.default,
  });

  const fadeInHomePage = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? 'translateY(20px)' : 'translateY(0)',
    config: config.default,
    delay: 500, // Délai de 0.5 seconde
  });

  const parallaxCarousel = useSpring({
    transform: loading ? 'translateY(100px)' : 'translateY(0)',
    opacity: loading ? 0 : 1,
    config: config.slow,
    delay: 1000, // Délai de 1 seconde
  });

  const fadeInContactPage = useSpring({
    opacity: loading ? 0 : 1,
    transform: loading ? 'translateY(20px)' : 'translateY(0)',
    config: config.default,
    delay: 1500, // Délai de 1.5 seconde
  });

  return (
    <div>
      {loading ? (
        <Loader /> // Affiche le loader si en cours de chargement
      ) : (
        <>
          <animated.div style={fadeInNavbar}>
            <CustomNavbar />
          </animated.div>
          <animated.div style={fadeInHomePage}>
            <HomePage />
          </animated.div>
          <animated.div style={parallaxCarousel}>
            <Carousel />
          </animated.div>
          <animated.div style={fadeInContactPage}>
            <ContactPage />
          </animated.div>
        </>
      )}
    </div>
  );
}

export default App;
