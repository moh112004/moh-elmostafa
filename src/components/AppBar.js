import "../AppBar.css";
export default function AppBar() {
  return (
    <>
      <div className="appBar">
        <p>
            Moh Elomstafa
        </p>
        <div className="icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          {/* <li><a href="#blog">Blog</a></li> */}
          <li><a href="#services">Services</a></li>
          {/* <li><a href="#testimonials">Testimonials</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
