import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      {/* JUNCIFY */}
      <article className="project-wrapper">
        <div className="project-content">
          <h1 className="project-overline">Featured Project</h1>
          <h3 className="project-title">
            <a
              href="https://juncify.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Juncify
            </a>
          </h3>
          <div className="project-description">
            <p>
              Neighborhood hotspot, backyard affair, and get-togethers to create
              an unbeatable fusion of fun! Plus, offer your unique services from
              your chosen location to earn extra income!
            </p>
            <p>
              Where you can create or join a junction, have fun, throw parties,
              play sports, go hiking, and explore endless adventures together!
            </p>
          </div>
          <ul className="project-tech-list">
            <li>Next.JS 14+</li>
            <li>MongoDB</li>
            <li>Clerk</li>
            <li>Stripe</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="project-image">
          <a
            href="https://juncify.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/Juncify.png"
              alt="Juncify.com Landing Section"
              width={700}
              height={338}
            />
          </a>
        </div>
      </article>

      {/* YOURCONFESS */}
      {/* <article className="project-wrapper">
        <div className="project-content">
          <h3 className="project-title">
            <a
              href="https://yourconfess.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              YourConfess
            </a>
          </h3>
          <div className="project-description">
            <p>
              A website for sharing thoughts and feelings through text messages
              and media.
            </p>
            <span>Some of the features include:</span>
            <ul>
              <li>Text Messaging</li>
              <li>Blocking Users</li>
              <li>Search Users</li>
              <li>Media Support with emojis</li>
            </ul>
          </div>
          <ul className="project-tech-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="project-image">
          <a
            href="https://yourconfess.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/Chat.png"
              alt="Chat Landing Section"
              width={700}
              height={338}
            />
          </a>
        </div>
      </article> */}

      {/* JOBSEARCH */}
      <article className="project-wrapper">
        <div className="project-content">
          <h3 className="project-title">
            <a
              href="https://github.com/archanme1/reactnativejob"
              rel="noopener noreferrer"
              target="_blank"
            >
              JobSearch
            </a>
          </h3>
          <div className="project-description">
            <p>
              Created a job search app using React Native for easy job hunting.
            </p>
          </div>
          <ul className="project-tech-list">
            <li>React Native</li>
          </ul>
        </div>
        <div className="project-image">
          <a
            href="https://github.com/archanme1/reactnativejob"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/Expo.png"
              alt="Expo Learning"
              width={700}
              height={338}
            />
          </a>
        </div>
      </article>

      {/* NCCC */}
      <article className="project-wrapper">
        <div className="project-content">
          <h3 className="project-title">
            <a
              href="https://nccricketclub.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              NCCC
            </a>
          </h3>
          <div className="project-description">
            <p>
              Created a community engagement platform using WordPress for
              content management.
            </p>
            <p>
              Implemented SEO best practices to improve visibility and attract
              more members.
            </p>
            <p>
              Ensured the site was responsive, mobile-friendly, and optimized
              for performance.
            </p>
          </div>
          <ul className="project-tech-list">
            <li>WordPress</li>
            <li>WooCommerce</li>
            <li>MySQL</li>
            <li>Hostinger</li>
          </ul>
        </div>
        <div className="project-image">
          <a
            href="https://nccricketclub.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src="/Ncc.png"
              alt="Ncc Landing Section"
              width={700}
              height={338}
            />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Projects;
