"use client";

import LogoFloating from "@/components/LogoFloating";
import { useState } from "react";
import ImageModal from "../ImageModel/image-model";

interface Step {
  title: string;
  description: string;
  img: string;
}

interface GeneralCollectionProps {
  steps: Step[];
  titlename: string;
}

export function GeneralCollection({
  steps,
  titlename,
}: GeneralCollectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  };

  return (
    <div className="bg-[#F7F9FA] py-8 sm:py-12 lg:py-20 relative  pb-16 sm:pb-20 lg:pb-32">
      <LogoFloating className="hidden lg:block absolute w-20 img-bounce-speed top-44 left-5" />
      <LogoFloating className="hidden lg:block absolute w-20 img-bounce-speed bottom-44 right-5" />
      <div className="section-title-three text-center">
        <p className="text-primary font-500 mb-2">{titlename.toUpperCase()}</p>
        <h2 className="h1-title">
          We Are Specialist For Quartz
          <br />
          Stone
        </h2>
      </div>
      <div className="max-w-7xl container px-4 lg:px-7 mt-4 lg:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-10 !gap-y-20 mt-4">
          {steps.map((step, index) => (
            <div className="collection-product-details" key={index}>
              <div className="collection-product-details-box h-full">
                <div
                  className="collection-product-details-img cursor-pointer h-full"
                  onClick={() => openModal(index)}
                >
                  <img src={step.img} alt={step.title} className="h-full" />
                </div>
              </div>
              <div className="collection-product-details-content notranslate">
                <p className="collection-product-sub-title-main">
                  {step.description}
                </p>
                <h3 className="collection-product-sub-title-sub notranslate">
                  <span>{step.title}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedImageIndex !== null && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          steps={steps}
          selectedImageIndex={selectedImageIndex}
        />
      )}
    </div>
  );
}
