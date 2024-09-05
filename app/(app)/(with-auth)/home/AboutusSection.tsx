import React from "react";

const AboutusSection = () => {
  return (
    <>
      <section className="about-three relative overflow-hidden py-12 sm:py-20 lg:py-32">
        <div className="about-three__shape-5">
          <img src="images/about-three-shape-5.png" alt="image" />
        </div>
        <div className="about-three__shape-3 float-bob-x">
          <img src="images/about-three-shape-3.png" alt="image" />
        </div>
        <div className="about-three__shape-4 float-bob-y">
          <img src="images/about-three-shape-4.png" alt="image" />
        </div>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
            <div>
              <div className="about-three__left !mr-0 lg:!mr-[86px]">
                <div className="about-three__img wow slideInLeft animated">
                  <img src="images/ABOUT_US.jpg" alt="image" />
                  <div className="about-three__experience hidden">
                    <div className="about-three__experience-count count-box">
                      <h3
                        className="count-text"
                        data-stop="10"
                        data-speed="1500"
                      >
                        00
                      </h3>
                      <span>+</span>
                    </div>
                    <p className="about-three__experience-text">
                      YEARS OF <br /> EXPERIENCES
                    </p>
                  </div>
                  <div className="about-three__shape-1 zoominout">
                    <img src="images/about-three-shape-1.png" alt="image" />
                  </div>
                  <div className="about-three__shape-2 float-bob-y">
                    <img src="images/about-three-shape-2.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="about-three__right">
                <div className="section-title-three text-left">
                  <div className="section-title-three__tagline-box">
                    <p className="section-title-three__tagline text-primary">
                      ABOUT US
                    </p>
                  </div>
                  <h2 className="section-title-three__title">
                    Evetis is One of The
                    <br /> Best Quartz Stone Company
                  </h2>
                </div>
                <p className="about-three__text-1">
                  We are one of the most leading companies in the manufacture
                  and exporter of quality quartz stone in India.
                </p>
                <p className="about-three__text-2">
                  Our company provides an exclusive range of quartz stones
                  counter top which has many qualities such as it is durable,
                  strong non-porous, attractive colors, smooth, etc. <br />
                  These all stones are rigorously quality tested by our highly
                  qualified team of quality testers that help us to ensure that
                  the end product is completely faultless and has a longer shelf
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusSection;
