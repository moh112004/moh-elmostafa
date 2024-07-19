// Home.js
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import AppBar from "./AppBar";
import Landing from "./Landing";
import Lable from "./Lable";
import About from "./About";
// import Articles from "./Articles";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import WhatsAppIcon from "./WhatsAppIcon";
import Footer from "./Footer";
import "../Home.css";

function Home() {
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  const { t } = useTranslation();

  return (
    //isPageVisible?
    <div>
      <AppBar />
      <div
        className="home"
        style={{ visibility: isPageVisible?"visible":"hidden"}}
      >
        <Landing />
        <span id="about">
          <Lable>{t('about')}</Lable>
        </span>
        <About />
        <span id="portfolio">
          <Lable>{t('portfolio')}</Lable>
        </span>
        <Projects />
        {/* <span id="blog">
          <Lable>Blog</Lable>
        </span> 
        <Articles />*/}
        <span id="services">
          <Lable>{t('services')}</Lable>
        </span>
        <Services />
        <span id="contact">
          <Lable>{t('contact')}</Lable>
        </span>
        <Contact />
        <WhatsAppIcon />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
