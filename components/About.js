import AboutParallax from "./AboutParallax";

const About = () => {
  return (
    <section className="about-section" id="about">
      <AboutParallax />
      <div className="about-inner">
        <article className="top-left">
          <div className="cavalier-content">
            <h1 style={{ color: "#6d83f2" }}>Professional Experience</h1>
            <p>
              I have over <strong>2 years</strong> of experience as a{" "}
              <strong>Web and Mobile App Developer</strong>, driven by a passion
              for both technologies and sports. My first role was as a{" "}
              <strong>Software Developer Intern</strong> at Livewire. Later, I
              worked as a <strong>Frontend Developer</strong> at Enter Soft
              Inside, where I designed visually appealing web pages using{" "}
              <strong>React JS</strong> and <strong>Next JS</strong>. I then
              took on the role of a <strong>Full Stack Web Developer</strong> at
              Queen’s College of Business Technology & Public Safety and was
              working with <strong>MERN Stack</strong>.
            </p>
          </div>
        </article>
        <article className="middle-right">
          <div className="cavalier-content">
            <h1 style={{ color: "#6d83f2" }}>Languages & Skills</h1>
            <p>
              My go-to programming languages are <strong>JavaScript</strong> and{" "}
              <strong>TypeScript</strong>. For front-end development, I
              primarily use <strong>React JS</strong>, <strong>Next JS</strong>,
              and <strong>React Native</strong> with <strong>Expo</strong> for
              mobile app development. On the backend, I work with{" "}
              <strong>Node JS</strong> and <strong>Express JS</strong>. I am
              proficient in working with various SQL and NoSQL databases as well
              as different state management tools.
            </p>
          </div>
        </article>
        <article className="bottom-left">
          <div className="cavalier-content">
            <h1 style={{ color: "#6d83f2" }}>Other Technologies</h1>
            <p>
              I have experience working with various cloud services,
              containerization tools, and build tools. Recently, I have also
              explored CI/CD automation, caching solutions, and different
              deployment platforms. Currently exploring Expo and Three.js.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
