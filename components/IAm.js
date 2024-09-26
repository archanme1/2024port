import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faCodepen,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const IAm = () => {
  return (
    <section className="intro-section">
      <article className="intro-text">
        <p>Hello, I’m</p>
        <h1>ARCHAN BHATTA</h1>
        <p className="adjust">FULL STACK DEVELOPER</p>
      </article>
      <div className="CTAs">
        <a className="download-resume" href="/archanme1_resume.pdf">
          Checkout Resume
        </a>
        <div className="socials">
          <a
            href={"https://www.linkedin.com/in/archanme1/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="waving-hand"
            />
          </a>
          <a
            href={"https://github.com/archanme1"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" className="waving-hand" />
          </a>
          <a
            href={"https://x.com/archanme1"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" className="waving-hand"s/>
          </a>
        </div>
      </div>
      <article className="some-details">
        <p>Skilled at bringing designs to life with 2 years experience.</p>
        <p>
          Constantly learning and expading my knowledge. Currently exploring
          Expo.
        </p>
      </article>
    </section>
  );
};

export default IAm;
