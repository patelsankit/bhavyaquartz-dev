import { GeneralCollection } from "@/components/Collection/GeneralCollection";

const SubCollectionpages = () => {
  const steps = [
    // Multi Exotic Series
    {
      title: "avalanche",
      description: "Multi Exotic Series",
      img: "/images/product/multi-exotic-series/avalanche.jpg",
    },
    {
      title: "Bellingham",
      description: "Multi Exotic Series",
      img: "/images/product/multi-exotic-series/Bellingham.jpg",
    },
    {
      title: "black pearl",
      description: "Multi Exotic Series",
      img: "/images/product/multi-exotic-series/black pearl.jpg",
    },
    {
      title: "canterbury",
      description: "Multi Exotic Series",
      img: "/images/product/multi-exotic-series/canterbury.jpg",
    },
    {
      title: "Jeliska white",
      description: "Multi Exotic Series",
      img: "/images/product/multi-exotic-series/Jeliska white.jpg",
    },
    {
      title: "Rain forest",
      description: "Multi Exotic Series",
      img: "/images/product/multi-exotic-series/Rain forest.jpg",
    },
    {
      title: "vanila black",
      description: "Multi Exotic Series",
      img: "/images/product/multi-exotic-series/vanila black.jpg",
    },
  ];

  return (
    <section>
      <GeneralCollection steps={steps} titlename="Multi Exotic Series" />
    </section>
  );
};

export default SubCollectionpages;
