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
              <strong>Web and Mobile App Developer</strong>. My first role was
              as a <strong>Frontend Developer</strong> at Enter Soft Inside,
              where I designed visually appealing web pages and built reusable
              components using <strong>React JS</strong> and{" "}
              <strong>Next JS</strong>. I later took on the role of a{" "}
              <strong>Full Stack Web Developer</strong> at Queen’s College of
              Business Technology & Public Safety, where I worked on updating a
              website and mobile app using <strong>React</strong>,{" "}
              <strong>Express</strong>, and <strong>MongoDB</strong>, while
              integrating <strong>JWT</strong> authentication and managing state
              with <strong>Redux</strong>.
            </p>
          </div>
        </article>
        <article className="middle-right">
          <div className="cavalier-content">
            <h1 style={{ color: "#6d83f2" }}>Languages & Skills</h1>
            <p>
              My primary programming language is <strong>JavaScript</strong>,
              and I have extensive experience with <strong>React JS</strong> as
              my preferred front-end framework. I enjoy working with the
              following stack:
              <strong>JavaScript</strong>, <strong>TypeScript</strong>,{" "}
              <strong>React JS</strong>, <strong>Next JS</strong>,{" "}
              <strong>Node JS</strong>, <strong>MongoDB</strong>,{" "}
              <strong>GraphQL</strong>, <strong>SCSS</strong>, and{" "}
              <strong>Styled-Components</strong>. In addition to this, I have
              hands-on experience with <strong>Tailwind CSS</strong>,{" "}
              <strong>Bootstrap</strong>, and <strong>Material UI</strong> for
              front-end styling, and am well-versed in state management tools
              like <strong>Redux</strong>, <strong>Zustand</strong>, and{" "}
              <strong>Context API</strong>.
            </p>
          </div>
        </article>
        <article className="bottom-left">
          <div className="cavalier-content">
            <h1 style={{ color: "#6d83f2" }}>Other Technologies</h1>
            <p>
              My experience also includes working with cloud services such as{" "}
              <strong>AWS</strong> and <strong>Cloudflare</strong>,
              containerization tools like <strong>Docker</strong> and{" "}
              <strong>Kubernetes</strong>, and build tools like{" "}
              <strong>Webpack</strong> and <strong>Babel</strong>. I have
              recently explored automation with <strong>GitHub Actions</strong>{" "}
              for CI/CD, <strong>Redis</strong> for caching, and{" "}
              <strong>Vercel and Hostinger</strong> for deployment.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
