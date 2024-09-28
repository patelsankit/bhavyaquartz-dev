import { useEffect, useRef, useState } from "react";

const EdgeProfiles = () => {
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
    <section
      ref={sectionRef}
      className="about-three relative overflow-hidden py-12 sm:py-20 lg:py-20 px-2 sm:px-5"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
          <div className="order-1">
            <div className="about-three__left !mr-0 lg:!mr-[86px]">
              <div
                className={`about-three__img ${
                  animate ? "animate-fade-zoom" : ""
                }`}
              >
                <img src="images/size.webp" alt="image" />
              </div>
            </div>
          </div>
          <div className="order-2">
            <div
              className={`about-three__right ${
                animate ? "animate-slide-bottom" : ""
              }`}
            >
              <div className="section-title-three text-left">
                <div className="section-title-three__tagline-box">
                  <p className="section-title-three__tagline text-primary">
                    EDGE PROFILES
                  </p>
                </div>
                <h2 className="section-title-three__title">EDGE PROFILES</h2>
              </div>
              <p className="about-three__text-1">
                Your surface is not complete without an edge profile to
                complement your slab selection and space. With keros stone,
                selecting the best fit is easy.
              </p>
              <p className="about-three__text-2">
                The unique properties and durability of keros stone quartz
                surfaces allow for a wide range of edge profile design options.
                Many edge profiles are possible, from a standard edge to
                laminated or mitered edges which create the appearance of a
                thicker slab. All edge details should have a minimum 1/8 radius
                on any profile, for both top and bottom edges. For high-traffic
                areas, 1/4 minimum radius is suggested.
              </p>
              <p className="about-three__text-2">Available Thickness</p>
              <ul className="about-three__points list-unstyled">
                <li>
                  <img src="/images/30_mm.png" width="160px" alt="" />
                </li>
                <li>
                  <img src="/images/20_mm.png" width="160px" alt="" />
                </li>
                <li>
                  <img src="/images/15_mm.png" width="160px" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeProfiles;
