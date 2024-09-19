import { IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const ImageModal = ({ isOpen, onClose, steps, selectedImageIndex }: any) => {
  if (!isOpen) return null;

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
  };

  const settings = {
    initialSlide: selectedImageIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[99]"
    >
      <div className="p-0 rounded max-h-[calc(100%-20px)] mx-4 overflow-auto relative max-w-[1200px]">
        <IconX
          onClick={onClose}
          className="bg-primary rounded-full p-1 text-white absolute z-[999] top-0 right-6 h-6 w-6 sm:h-9 sm:w-9 font-700 hover:rotate-180 transition-all duration-700"
        />
        <Slider {...settings}>
          {steps.map((step: any, index: number) => (
            <div
              key={index}
              className="px-2 text-center image-carousel-main-div"
              onClick={handleImageClick}
            >
              <div className="collection-product-details">
                <div className="collection-product-details-box h-full">
                  <div className="collection-product-details-img cursor-pointer h-full">
                    {/* <Image
                      src={step.img}
                      alt={step.title}
                      height={200}
                      width={400}
                      priority={index === 0} // Prioritize the first image
                      placeholder="blur"
                      blurDataURL={step.img} // Placeholder for loading
                      onClick={handleImageClick}
                      className="rounded-lg max-h-[calc(100vh-80px)] object-contain mx-auto h-full"
                    /> */}
                    <img
                      onClick={handleImageClick}
                      src={step.img}
                      alt={step.title}
                      className="rounded-lg max-h-[calc(100vh-80px)] object-contain mx-auto h-full"
                    />
                  </div>
                </div>
                <div className="collection-product-details-content !px-2 sm:!px-5">
                  <p className="collection-product-sub-title-main">
                    {step.description}
                  </p>
                  <h3 className="collection-product-sub-title-sub  !text-[18px] sm:!text-[22px]">
                    <span>{step.title}</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageModal;
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
    ></div>
  );
};
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
    ></div>
  );
};
