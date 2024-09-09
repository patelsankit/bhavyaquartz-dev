import { GeneralCollection } from "@/components/Collection/GeneralCollection";

const SubCollectionpages = () => {
  const steps = [
    // Multi Classic Series
    {
      title: "Bricko",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Bricko.jpg",
    },
    {
      title: "Cemento",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Cemento.jpg",
    },
    {
      title: "Coper Cloudy",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Coper Cloudy.jpg",
    },
    {
      title: "Desert Sand",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Desert Sand.jpg",
    },
    {
      title: "Fibus Black",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Fibus Black.jpg",
    },
    {
      title: "Gold Sand",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Gold Sand.jpg",
    },
    {
      title: "Gris Griogio ",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Gris Griogio .jpg",
    },
    {
      title: "Marfil Grey",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Marfil Grey.jpg",
    },
    {
      title: "Milano Grey",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Milano Grey.jpg",
    },
    {
      title: "Simon Grey",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Simon Grey.jpg",
    },
    {
      title: "Starry Light",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/Starry Light.jpg",
    },
    {
      title: "William Grey",
      description: "Multi Classic Series",
      img: "/images/product/multi-classic-series/William Grey.jpg",
    },
  ];

  return (
    <section>
      <GeneralCollection steps={steps} titlename="Multi Classic Series" />
    </section>
  );
};

export default SubCollectionpages;
