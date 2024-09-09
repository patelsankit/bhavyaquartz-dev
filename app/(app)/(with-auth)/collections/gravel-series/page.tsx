import { GeneralCollection } from "@/components/Collection/GeneralCollection";

const SubCollectionpages = () => {
  const steps = [
    // Gravel Series
    {
      title: "GRAVEL ALMOND",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL ALMOND.jpg",
    },
    {
      title: "GRAVEL BEIGE",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL BEIGE.jpg",
    },
    {
      title: "GRAVEL BLACK",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL BLACK.jpg",
    },
    {
      title: "GRAVEL BROWN",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL BROWN.jpg",
    },
    {
      title: "GRAVEL DARK GREY",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL DARK GREY.jpg",
    },
    {
      title: "GRAVEL FOSSIL",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL FOSSIL.jpg",
    },
    {
      title: "GRAVEL IRON GREY",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL IRON GREY.jpg",
    },
    {
      title: "GRAVEL LIGHT GREY",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL LIGHT GREY.jpg",
    },
    {
      title: "GRAVEL VERDE",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL VERDE.jpg",
    },
    {
      title: "GRAVEL WHITE",
      description: "Gravel Series",
      img: "/images/product/gravel-series/GRAVEL WHITE.jpg",
    },
  ];

  return (
    <section>
      <GeneralCollection steps={steps} titlename="Gravel Series" />
    </section>
  );
};

export default SubCollectionpages;
