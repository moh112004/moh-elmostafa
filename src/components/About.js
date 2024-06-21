import "../About.css"
export default function About() {
  return (
    <>
      <section className="about">
        <h3>Who I Am</h3>
        <p>
          Hello, I'm Mohamed Mustafa, a Front-End Developer specializing in
          performance optimization, user experience, and interactive design.
          Despite my short experience of less than a year, I have successfully
          completed several freelance projects.
        </p>

        <h3>Education</h3>
        <p>
          Currently studying in the ALX Software Engineering program, where I am
          learning the latest technologies and skills required in software
          development.
        </p>

        <h3>Professional Experience</h3>
        <p>
          Worked as a Front-End Developer freelancer, developing several
          successful projects for clients. You can mention specific projects if
          desired.
        </p>

        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
        <h4>Additional Skills</h4>
        <ul>
          <li>Performance optimization</li>
          <li>User Experience (UX)</li>
          <li>Interactive design</li>
          <li>Research and analysis</li>
          <li>Problem-solving</li>
          <li>Individual and team work</li>
          <li>Flexibility and fast learning</li>
        </ul>

        <h3>Interests</h3>
        <p>
          I am passionate about improving website performance and user
          experience, and I greatly enjoy working on designing interactive and
          appealing interfaces. I constantly strive to enhance my skills and
          stay updated with the latest trends in web development.
        </p>

        <h3>Projects</h3>
        <p>
          I have several projects available for review to demonstrate my level
          of expertise and the quality of my work. (You can add links to your
          projects here or create a separate portfolio page containing project
          details and images).
        </p>

        <h3>Contact Me</h3>
        <p>
          If you would like to get in touch to discuss a project or a job
          opportunity, you can reach me through the{" "}
          <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: "#eee",
              fontWeight: "500",
              borderBottom: "#eee solid 2px",
            }}
          >
            Contact
          </a>{" "}
          section. I am always happy to receive inquiries and collaborate on new
          projects.
        </p>
      </section>
      <br/>
      <br/>
      <a
            href="#contact"
            style={{
              textDecoration: "none",
              color: "#eee",
              fontWeight: "500",
              borderBottom: "#eee solid 2px",
            }}
          >
            Download Resume as PDF
          </a>
    </>
  );
}
