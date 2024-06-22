// Home.js
import React from "react";
import AppBar from "./AppBar";
import Landing from "./Landing";
import Lable from "./Lable";
import About from "./About";
import Articles from "./Articles";
import Projects from "./Projects";
import Services from "./Services"
import Contact from "./Contact";
import WhatsAppIcon from "./WhatsAppIcon";
import Footer from "./Footer";
import "../Home.css"
function Home() {
  return (
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
      <WhatsAppIcon/>
      <Footer/>
    </div>
  );
}

export default Home;
