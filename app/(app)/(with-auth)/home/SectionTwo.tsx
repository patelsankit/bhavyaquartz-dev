import { Boxes } from "@/components/background-boxes/background-boxes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel/Carousel";
import { Highlight } from "@/components/hero-highlight/hero-highlight";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const SectionTwo = () => {
  return (
    <>
      <section className="overflow-hidden relative bg-[#1e2734] dark:bg-black py-6 md:py-16 lg:py-24 xl:py-32 px-5 lg:min-h-[calc(100dvh-64px)] flex items-center ">
        <Boxes className="z-10" />
        <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-12 relative">
          <div className="flex flex-col justify-center space-y-4 text-white xl:col-span-5">
            <div className="space-y-2">
              <h1 className="z-20 relative text-30 font-600 tracking-tighter sm:text-36 md:text-40 lg:text-48">
                Make Your Home{" "}
                <Highlight className="z-20 text-white">
                  Attractive
                </Highlight>
              </h1>
              <p className="z-20 relative max-w-[600px] text-white/80 md:text-16 lg:text-18 xl:text-20">
                We are one of the most leading companies in the manufacture and
                exporter of quality quartz stone in India.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                className="z-20 relative btn btn-primary px-10 rounded-md py-4 h-12 font-600 md:text-18"
                target="_blank"
                as={Link}
                href="https://wa.me/917202900299?text=Hello I Have Tiles Related Inquiry!"
                variant="flat"
              >
                Contact us
              </Button>
            </div>
          </div>
          <div className="xl:col-span-7 z-20">
            <Carousel className="col-span-2 row-span-2 rounded-lg overflow-hidden">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="images/banner-1.jpg"
                    width={800}
                    height={600}
                    alt="Feature 1"
                    className="rounded-lg aspect-video w-full object-cover transition-all duration-500 ease-in-out animate-[zoom_5s_ease-in-out_infinite]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="images/banner-2.jpg"
                    width={800}
                    height={600}
                    alt="Feature 2"
                    className="rounded-lg aspect-video w-full object-cover transition-all duration-500 ease-in-out animate-[zoom_5s_ease-in-out_infinite_alternate]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="images/banner-3.jpg"
                    width={800}
                    height={600}
                    alt="Feature 3"
                    className="rounded-lg aspect-video w-full object-cover transition-all duration-500 ease-in-out animate-[zoom_5s_ease-in-out_infinite_reverse]"
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="relative h-12">
                <CarouselPrevious className="left-1 !p-0 h-9 w-9 flex items-center justify-center hover:bg-primary hover:outline-primary text-white hover:dark:text-black disabled:!cursor-not-allowed" />
                <CarouselNext className="right-1 !p-0 h-9 w-9 flex items-center justify-center hover:bg-primary hover:outline-primary text-white disabled:!cursor-not-allowed  hover:dark:text-black" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
