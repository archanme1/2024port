import { useState } from "react";
import Image from "next/image";

const BentoAbout = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("archanme1@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="about-section" id="about">
      <div className="grid-container">
        <div className="grid-item">
          <div className="grid-content">
            <div
              style={{ position: "relative", width: "100%", height: "200px" }}
            >
              <Image
                src="/assets/grid1.png"
                alt="grid-1"
                layout="fill"
                objectFit="contain"
                className="grid-image"
              />
            </div>
            <p className="grid-subtext">
              A computer science student with years of experience, I have honed
              my skills in both frontend and backend dev, creating dynamic and
              responsive websites.
            </p>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-content">
            <div
              style={{ position: "relative", width: "100%", height: "200px" }}
            >
              <Image
                src="/assets/grid3.png"
                alt="grid-3"
                layout="fill"
                objectFit="contain"
                className="grid-image"
              />
            </div>
            <p className="grid-subtext">
              I love solving problems and building things through code. I
              believe as long as there is good documention, I can adapt and
              excel. I enjoy exploring new technologies, and enhancing my
              skills.
            </p>
          </div>
        </div>

        <div className="grid-item">
          <div className="grid-content">
            <div
              style={{ position: "relative", width: "100%", height: "200px" }}
            >
              <Image
                src="/assets/grid4.png"
                alt="grid-4"
                layout="fill"
                className="grid-image"
                objectFit="cover"
              />
            </div>
            <p className="grid-text">
              Reach out to me <span className="waving-hand">📩</span>
            </p>
            <div className="copy-container" onClick={handleCopy}>
              <Image
                src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                alt="copy"
                width={24}
                height={24}
              />
              <p className="email-text">archanme1@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoAbout;