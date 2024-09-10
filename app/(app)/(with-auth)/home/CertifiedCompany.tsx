export function CertifiedCompany() {
  return (
    <div className="bg-[#F7F9FA] py-8 sm:py-12 lg:py-20 relative">
      <div className="absolute left-0 top-4 img-bounce">
        <img
          className=""
          src="images/mask-image-section-down.png"
          alt="mask-image"
        />
      </div>
      <div className="section-title-three text-center">
        <p className="text-primary font-600 mb-2 text-18 sm:text-30">
          THE BHAVYA STONE PRODUCT ARE
        </p>
      </div>
      <div className="max-w-7xl container px-4 lg:px-7 mt-4 lg:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-7">
          <div className="certifiend-main-div p-4 md:p-7">
            <h3 className="certified__title">
              <a onClick={(e) => e.preventDefault()}>RESEARCH</a>
            </h3>
            <div className="p-5">
              <span>
                <img
                  className="w-[60px] mx-auto"
                  src="images/certified-icon-1.png"
                  alt="images"
                />
              </span>
            </div>
            <p className="certified__title__text">
              Our constant research involve new designs
            </p>
          </div>
          <div className="certifiend-main-div p-4 md:p-7">
            <h3 className="certified__title">
              <a onClick={(e) => e.preventDefault()}>QUALITY</a>
            </h3>
            <div className="p-5">
              <span>
                <img
                  className="w-[60px] mx-auto"
                  src="images/certified-icon-2.png"
                  alt="images"
                />
              </span>
            </div>
            <p className="certified__title__text">
              100% Quality approach keep us in the front line
            </p>
          </div>
          <div className="certifiend-main-div p-4 md:p-7">
            <h3 className="certified__title">
              <a onClick={(e) => e.preventDefault()}>DELIVERY</a>
            </h3>
            <div className="p-5">
              <span>
                <img
                  className="w-[60px] mx-auto"
                  src="images/certified-icon-3.png"
                  alt="images"
                />
              </span>
            </div>
            <p className="certified__title__text">
              On-Time shipment with global network
            </p>
          </div>
          <div className="certifiend-main-div p-4 md:p-7">
            <h3 className="certified__title">
              <a onClick={(e) => e.preventDefault()}>SUPPORT</a>
            </h3>
            <div className="p-5">
              <span>
                <img
                  className="w-[60px] mx-auto"
                  src="images/certified-icon-4.png"
                  alt="images"
                />
              </span>
            </div>
            <p className="certified__title__text">
              Support channel for sustainable growth
            </p>
          </div>
          <div className="certifiend-main-div p-4 md:p-7">
            <h3 className="certified__title">
              <a onClick={(e) => e.preventDefault()}>DISCOVERY</a>
            </h3>
            <div className="p-5">
              <span>
                <img
                  className="w-[60px] mx-auto"
                  src="images/certified-icon-5.png"
                  alt="images"
                />
              </span>
            </div>
            <p className="certified__title__text">
              Our capaign and analytical efforts spread our wings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
