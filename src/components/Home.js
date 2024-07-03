// Home.js
import React, {Suspense} from "react";
import AppBar from "./AppBar";
import Landing from "./Landing";
import Lable from "./Lable";
import About from "./About";
// import Articles from "./Articles";
import Projects from "./Projects";
import Services from "./Services"
import Contact from "./Contact";
import WhatsAppIcon from "./WhatsAppIcon";
import Footer from "./Footer";
import "../Home.css";
const ImageComponent = React.lazy(() => import('./Landing'));

function Home() {
  return (
    <div>
      <AppBar />
      <div className="home">
      <Suspense fallback={<div>Loading...</div>}>
                <ImageComponent />
      </Suspense>
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
      <WhatsAppIcon/>
      <Footer/>
    </div>
  );
}

export default Home;
