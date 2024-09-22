import React, { useEffect, useRef, useState } from "react";

const AboutusSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <section
        ref={sectionRef}
        className="about-three relative overflow-hidden pb-6 sm:pb-20 lg:pb-32 py-12 sm:py-20 lg:py-32 px-2 sm:px-5"
      >
        <div className="about-three__shape-5">
          <img src="images/about-three-shape-5.png" alt="image" />
        </div>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
            <div
              className={`order-2 lg:order-1 ${
                animate ? "animate-slide-in-left" : ""
              }`}
            >
              <div className="about-three__right">
                <div className="section-title-three text-left">
                  <div className="section-title-three__tagline-box">
                    <p className="section-title-three__tagline text-primary">
                      ABOUT US
                    </p>
                  </div>

                  <h2 className="section-title-three__title">
                    Bhavya is One of The
                    <br className="hidden sm:block" /> Best Quartz Stone Company
                  </h2>
                </div>
                <p className="about-three__text-1">
                  We are one of the most leading companies in the manufacture
                  and exporter of quality quartz stone in India.
                </p>
                <p className="about-three__text-2">
                  Our company offers a premium selection of quartz stone
                  countertops that boast numerous qualities, including
                  exceptional durability, strength, non-porosity, and appealing
                  colors. Each stone undergoes rigorous quality testing by our
                  expert team to ensure that the final product is flawless and
                  boasts a long-lasting lifespan.
                </p>
              </div>
            </div>
            <div
              className={`order-1 lg:order-2 ${
                animate ? "animate-slide-in-right" : ""
              }`}
            >
              <div className="about-three__left !mr-0 lg:!mr-[86px]">
                <div className="about-three__img">
                  <img src="images/about-us.png" alt="image" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusSection;
