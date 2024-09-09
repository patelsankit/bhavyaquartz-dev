"use client";

import LogoFloating from "@/components/LogoFloating";
import Link from "next/link";
import { useState } from "react";
import ImageModal from "../ImageModel/image-model";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";

export function Collection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const steps = [
    // Basic Series
    {
      title: "Crystal Blue",
      description: "Basic Series",
      img: "images/product/basic-series/Crystal Blue.webp",
    },
    {
      title: "Crystal Light Grey",
      description: "Basic Series",
      img: "images/product/basic-series/Crystal Light Grey.webp",
    },
    {
      title: "Crystal red",
      description: "Basic Series",
      img: "images/product/basic-series/Crystal red.webp",
    },
    {
      title: "Crystal-White",
      description: "Basic Series",
      img: "images/product/basic-series/Crystal-White.webp",
    },
    {
      title: "Ice White",
      description: "Basic Series",
      img: "images/product/basic-series/Ice White.webp",
    },
    // Calacatta Series
    {
      title: "ALASKA WHITE",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/ALASKA WHITE.webp",
    },
    {
      title: "Calacatta Alexa",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/Calacatta Alexa.webp",
    },
    {
      title: "Calacatta Artmis",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/Calacatta Artmis.webp",
    },
    {
      title: "Calacatta Cascade",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/Calacatta Cascade.webp",
    },
    {
      title: "Calacatta Classic",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/Calacatta Classic.webp",
    },
    {
      title: "Calacatta Dally",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/Calacatta Dally.webp",
    },
    {
      title: "Calacatta Gold Ice",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/Calacatta gold ice.webp",
    },
    {
      title: "Calacatta Kiva",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/CALACATTA KIVA.webp",
    },
    {
      title: "Calacatta Spider",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/Calacatta Spider.webp",
    },
    {
      title: "Exotic White",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/exotic-white.webp",
    },
    {
      title: "Imperial White",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/Imperial White.webp",
    },
    {
      title: "Infinity White",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/infinity-white.webp",
    },
    {
      title: "olympia white",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/olympia-white.webp",
    },
    {
      title: "Royal Calacatta",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/royal-calacatta.webp",
    },
    {
      title: "Simran White",
      description: "Calacatta Series",
      img: "images/product/calacatta-series/simran-white.webp",
    },
    //Carrara Series
    {
      title: "Belmont Carrara",
      description: "Carrara Series",
      img: "images/product/carrara-series/belmont-carrara.webp",
    },
    {
      title: "Cadila White",
      description: "Carrara Series",
      img: "images/product/carrara-series/cadila-white.webp",
    },
    {
      title: "Carrara Destiny",
      description: "Carrara Series",
      img: "images/product/carrara-series/carrara-destiny.webp",
    },
    {
      title: "Carrara Goldfish",
      description: "Carrara Series",
      img: "images/product/carrara-series/carrara-goldfish.webp",
    },
    {
      title: "Carrara Gremi",
      description: "Carrara Series",
      img: "images/product/carrara-series/carrara-gremi.webp",
    },
    {
      title: "Cumulus Cloud",
      description: "Carrara Series",
      img: "images/product/carrara-series/cumulus-cloud.webp",
    },
    {
      title: "Itaca White",
      description: "Carrara Series",
      img: "images/product/carrara-series/itaca-white.webp",
    },
    {
      title: "Italiano Grey",
      description: "Carrara Series",
      img: "images/product/carrara-series/italiano-grey.webp",
    },
    {
      title: "Misty Dusk",
      description: "Carrara Series",
      img: "images/product/carrara-series/misty-dusk.webp",
    },
    {
      title: "New Everest",
      description: "Carrara Series",
      img: "images/product/carrara-series/new-everest.webp",
    },
    {
      title: "Valecia Beige Aanay Chale",
      description: "Carrara Series",
      img: "images/product/carrara-series/valecia-beige-aanay-chale.webp",
    },
    // Gravel Series
    {
      title: "GRAVEL ALMOND",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL ALMOND.jpg",
    },
    {
      title: "GRAVEL BEIGE",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL BEIGE.jpg",
    },
    {
      title: "GRAVEL BLACK",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL BLACK.jpg",
    },
    {
      title: "GRAVEL BROWN",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL BROWN.jpg",
    },
    {
      title: "GRAVEL DARK GREY",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL DARK GREY.jpg",
    },
    {
      title: "GRAVEL FOSSIL",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL FOSSIL.jpg",
    },
    {
      title: "GRAVEL IRON GREY",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL IRON GREY.jpg",
    },
    {
      title: "GRAVEL LIGHT GREY",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL LIGHT GREY.jpg",
    },
    {
      title: "GRAVEL VERDE",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL VERDE.jpg",
    },
    {
      title: "GRAVEL WHITE",
      description: "Gravel Series",
      img: "images/product/gravel-series/GRAVEL WHITE.jpg",
    },
    // Multi Classic Series
    {
      title: "Bricko",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Bricko.jpg",
    },
    {
      title: "Cemento",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Cemento.jpg",
    },
    {
      title: "Coper Cloudy",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Coper Cloudy.jpg",
    },
    {
      title: "Desert Sand",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Desert Sand.jpg",
    },
    {
      title: "Fibus Black",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Fibus Black.jpg",
    },
    {
      title: "Gold Sand",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Gold Sand.jpg",
    },
    {
      title: "Gris Griogio ",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Gris Griogio .jpg",
    },
    {
      title: "Marfil Grey",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Marfil Grey.jpg",
    },
    {
      title: "Milano Grey",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Milano Grey.jpg",
    },
    {
      title: "Simon Grey",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Simon Grey.jpg",
    },
    {
      title: "Starry Light",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/Starry Light.jpg",
    },
    {
      title: "William Grey",
      description: "Multi Classic Series",
      img: "images/product/multi-classic-series/William Grey.jpg",
    },
    // Multi Exotic Series
    {
      title: "avalanche",
      description: "Multi Exotic Series",
      img: "images/product/multi-exotic-series/avalanche.jpg",
    },
    {
      title: "Bellingham",
      description: "Multi Exotic Series",
      img: "images/product/multi-exotic-series/Bellingham.jpg",
    },
    {
      title: "black pearl",
      description: "Multi Exotic Series",
      img: "images/product/multi-exotic-series/black pearl.jpg",
    },
    {
      title: "canterbury",
      description: "Multi Exotic Series",
      img: "images/product/multi-exotic-series/canterbury.jpg",
    },
    {
      title: "Jeliska white",
      description: "Multi Exotic Series",
      img: "images/product/multi-exotic-series/Jeliska white.jpg",
    },
    {
      title: "Rain forest",
      description: "Multi Exotic Series",
      img: "images/product/multi-exotic-series/Rain forest.jpg",
    },
    {
      title: "vanila black",
      description: "Multi Exotic Series",
      img: "images/product/multi-exotic-series/vanila black.jpg",
    },
    // Plain Colours
    {
      title: "Pure black",
      description: "Plain Colours",
      img: "images/product/plain-colours/Pure black.jpg",
    },
    {
      title: "Pure White",
      description: "Plain Colours",
      img: "images/product/plain-colours/Pure White.jpg",
    },
    // Satuario Series
    {
      title: "Calacatta Costta (Grey) 2",
      description: "Satuario Series",
      img: "images/product/satuario-series/Calacatta Costta (Grey) 2.jpg",
    },
    {
      title: "CALACATTA COSTTA (GREY+GOLD)",
      description: "Satuario Series",
      img: "images/product/satuario-series/CALACATTA COSTTA (GREY+GOLD).jpg",
    },
    {
      title: "CalacattaCostta",
      description: "Satuario Series",
      img: "images/product/satuario-series/CalacattaCostta.jpg",
    },
    {
      title: "Natural Satuario",
      description: "Satuario Series",
      img: "images/product/satuario-series/Natural Satuario.jpg",
    },
  ];

  const openModal = (imageSrc: any) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  const filteredSteps = steps.filter((step) => {
    if (activeTab === "All") return true;
    return step.description === activeTab.replace(/([A-Z])/g, " $1").trim(); // Convert the tab name to match description
  });

  return (
    <div className="bg-[#F7F9FA] py-8 sm:py-12 lg:py-20 relative">
      <LogoFloating className="hidden lg:block absolute w-20 img-bounce-speed top-44 left-5" />
      <LogoFloating className="hidden lg:block absolute w-20 img-bounce-speed bottom-44 right-5" />
      <div className="section-title-three text-center">
        <p className="text-primary font-500 mb-2">OUR COLLECTIONS</p>
        <h2 className="h1-title">
          We Are Specialist For Quartz
          <br />
          Stone
        </h2>
      </div>
      <div className="max-w-7xl container px-4 lg:px-7 mt-4 lg:mt-10">
        <Tabs
          defaultValue="All"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)} // Update active tab
        >
          <div className="overflow-auto w-full pb-1">
            <TabsList>
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="BasicSeries">Basic Series</TabsTrigger>
              <TabsTrigger value="CalacattaSeries">
                Calacatta Series
              </TabsTrigger>
              <TabsTrigger value="CarraraSeries">Carrara Series</TabsTrigger>
              <TabsTrigger value="GravelSeries">Gravel Series</TabsTrigger>
              <TabsTrigger value="MultiClassicSeries">
                Multi Classic Series
              </TabsTrigger>
              <TabsTrigger value="MultiExoticSeries">
                Multi Exotic Series
              </TabsTrigger>
              <TabsTrigger value="PlainColours">Plain Colours</TabsTrigger>
              <TabsTrigger value="SatuarioSeries">Satuario Series</TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-10 !gap-y-20 mt-4">
            {filteredSteps.map((step, index) => (
              <div className="collection-product-details" key={index}>
                <div className="collection-product-details-box h-full">
                  <div
                    className="collection-product-details-img cursor-pointer h-full"
                    onClick={() => openModal(step.img)}
                  >
                    <img src={step.img} alt={step.title} className="h-full" />
                  </div>
                </div>
                <div className="collection-product-details-content">
                  <p className="collection-product-sub-title-main">
                    {step.title}
                  </p>
                  <h3 className="collection-product-sub-title-sub">
                    <Link href="">{step.description}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Tabs>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        imageSrc={selectedImage}
        onClose={closeModal}
      />
    </div>
  );
}
