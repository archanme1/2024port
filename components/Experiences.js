import Image from "next/image";
import { workExperiences } from "../constants";

const Experiences = () => {
  return (
    <section className="experience-section" id="work">
      <div className="experience-wrapper">
        <p className="experience-title">My Work Experience</p>
        <div className="work-container">
          {/* <div className="work-canvas">
            <Canvas></Canvas>
          </div> */}
          <div className="work-content">
            <div className="work-list">
              {workExperiences.map((item, index) => (
                <div key={index} className="work-content_container">
                  <div className="work-logo-wrapper">
                    <div className="work-content_logo">
                      <Image
                        width={48}
                        height={48}
                        src={
                          item.logo ? item.logo : "/assets/project-logo2.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="work-details">
                    <p className="work-name">{item.name}</p>
                    <p className="work-position">
                      {item.pos}: <span>{item.duration}</span>
                    </p>
                    <p className="work-title">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
