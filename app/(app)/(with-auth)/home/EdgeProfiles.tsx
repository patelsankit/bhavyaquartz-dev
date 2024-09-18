const EdgeProfiles = () => {
  return (
    <section className="about-three relative overflow-hidden py-12 sm:py-20 lg:py-20 px-2 sm:px-5">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">
          <div className="order-1">
            <div className="about-three__left !mr-0 lg:!mr-[86px]">
              <div className="about-three__img wow slideInLeft animated">
                <img src="images/size.png" alt="image" />
              </div>
            </div>
          </div>
          <div className="order-2">
            <div className="about-three__right">
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
                Many edge profiles are possible,from a standard edge to
                laminated or mitered edges which create the appearance of a
                thicker slab. All edge details should have a minimum 1/8" radius
                on anyprofile, for both top and bottom edges. For high-traffic
                areas, 1/4" minimum radius is suggested.
              </p>
              <p className="about-three__text-2">Available Thickness</p>
              <ul className="about-three__points list-unstyled">
                <li>
                  <img
                    src="https://evetis.in/assets/images/home_page/30_mm.png"
                    width="160px"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://evetis.in/assets/images/home_page/30_mm.png"
                    width="160px"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://evetis.in/assets/images/home_page/30_mm.png"
                    width="160px"
                    alt=""
                  />
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
