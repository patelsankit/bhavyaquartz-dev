// components/Banner.js
import PropTypes from "prop-types";

const Banner = ({ title, imageSrc }: any) => {
  return (
    <div className="relative">
      <div className="absolute top-0 h-full w-full bg-black/70 flex items-center justify-center">
        <h1 className="contact-us-banner-title !font-700 text-white !text-40 sm:!text-[56px]">
          {title}
        </h1>
      </div>
      <img
        className="max-h-[calc(100vh-200px)] sm:min-h-[550px] w-full"
        src={imageSrc}
        alt="Banner Image"
      />
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Banner;
