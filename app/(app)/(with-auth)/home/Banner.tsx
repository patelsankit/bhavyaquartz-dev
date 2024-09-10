import { Button } from "@nextui-org/button";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel/Carousel";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  return (
    <>
      <div className="relative text-white">
        <div className="bg-[#080A29]">
          <Carousel
            className="w-full px-10"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div>
                  <div className="flex-1 space-y-4">
                    <h1 className="text-[60px] font-700">Best Stone In Town</h1>
                    <p className="text-20">Bhavya</p>
                    <Button
                      className="btn btn-primary"
                      as={Link}
                      href="/contact"
                      variant="flat"
                    >
                      Contact Us
                    </Button>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full inline-block mr-2"></span>
                        <span className="w-2 h-2 bg-white rounded-full inline-block mr-2"></span>
                        <span className="w-2 h-2 bg-white rounded-full inline-block"></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 mt-8 md:mt-0 relative">
                    <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
                      <img
                        src="/path-to-your-image.jpg"
                        alt="Decorative"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>2</CarouselItem>
              <CarouselItem>3</CarouselItem>
              <CarouselItem>3</CarouselItem>
              <CarouselItem>3</CarouselItem>
              <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="flex items-center justify-center left-0 text-gray-300" />
            <CarouselNext className="flex items-center justify-center right-0 text-gray-300" />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Banner;
