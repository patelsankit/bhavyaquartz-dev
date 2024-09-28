// components/Banner.js
import PropTypes from "prop-types";

const Banner = ({ title, imageSrc, imageClass }: any) => {
  return (
    <div className="relative">
      <div className="absolute top-0 h-full w-full bg-black/70 flex items-center justify-center">
        <h1 className="text-center contact-us-banner-title px-2 !font-700 text-white !text-30 sm:!text-40 md:!text-[56px]">
          {title}
        </h1>
      </div>
      <img
        className={`max-h-[calc(100vh-200px)] min-h-[200px] sm:min-h-[550px] w-full ${imageClass}`}
        src={imageSrc}
        alt="Banner Image"
      />
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
};

export default Banner;
