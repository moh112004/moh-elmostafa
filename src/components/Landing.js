import me from "../me.jpg";
import "../Landing.css";
export default function Landing() {
  return (
    <>
      <div className="row" >
        <img src={me} alt="" data-aos="zoom-out" data-aos-duration="2000"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <p data-aos="zoom-out" data-aos-duration="2000">
          {" "}
          &nbsp; &nbsp; &nbsp;Hello, I'm Mohamed Mustafa, a Front-End Developer
          specializing in performance optimization, user experience, and
          interactive design. Despite my short experience of less than a year, I
          have successfully completed several freelance projects. I possess high
          flexibility and fast learning abilities, allowing me to adapt to
          various environments and work effectively whether individually or as
          part of a team. I excel in research, analysis, and problem-solving,
          helping me find and implement the best technical solutions
          efficiently. I am proficient in various modern front-end development
          technologies, including HTML, CSS, JavaScript, Bootstrap, and React. I
          am always striving to improve my skills and stay updated with the
          latest industry trends. I have a strong passion for developing
          interactive and seamless user interfaces, and I have several projects
          available for review to demonstrate my level of expertise and the
          quality of my work.
        </p>
      </div>
    </>
  );
}
