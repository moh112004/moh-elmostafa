// Home.js
import React, { useState, useEffect } from "react";
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
// const Landing = React.lazy(() => import('./Landing'));
// const WhatsAppIcon = React.lazy(() => import('./WhatsAppIcon'));

function Home() {
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageVisible(true);
    }, 1000); // تأخير لمدة ثانية واحدة (1000 مللي ثانية)

    // تنظيف المؤقت عندما يتم إزالة المكون
    return () => clearTimeout(timer);
  }, []);

  return ( isPageVisible?
    <div>
        
        <AppBar />
        <div className="home">
            <Landing />
          <span id="about">
            <Lable>About</Lable>
          </span>
          <About />
          <span id="portfolio">
            <Lable>Portfolio</Lable>
          </span>
          <Projects />
          {/* <span id="blog">
          <Lable>Blog</Lable>
        </span> 
        <Articles />*/}
          <span id="services">
            <Lable>Services</Lable>
          </span>
          <Services />
          <span id="contact">
            <Lable>Contact</Lable>
          </span>
          <Contact />
        </div>
          <WhatsAppIcon />
        <Footer />
      </div>:<></>
  );
}

export default Home;
