import { GeneralCollection } from "@/components/Collection/GeneralCollection";

const SubCollectionpages = () => {
  const steps = [
    //Carrara Series
    {
      title: "Belmont Carrara",
      description: "Carrara Series",
      img: "/images/product/carrara-series/belmont-carrara.webp",
    },
    {
      title: "Cadila White",
      description: "Carrara Series",
      img: "/images/product/carrara-series/cadila-white.webp",
    },
    {
      title: "Carrara Destiny",
      description: "Carrara Series",
      img: "/images/product/carrara-series/carrara-destiny.webp",
    },
    {
      title: "Carrara Goldfish",
      description: "Carrara Series",
      img: "/images/product/carrara-series/carrara-goldfish.webp",
    },
    {
      title: "Carrara Gremi",
      description: "Carrara Series",
      img: "/images/product/carrara-series/carrara-gremi.webp",
    },
    {
      title: "Cumulus Cloud",
      description: "Carrara Series",
      img: "/images/product/carrara-series/cumulus-cloud.webp",
    },
    {
      title: "Itaca White",
      description: "Carrara Series",
      img: "/images/product/carrara-series/itaca-white.webp",
    },
    {
      title: "Italiano Grey",
      description: "Carrara Series",
      img: "/images/product/carrara-series/italiano-grey.webp",
    },
    {
      title: "Misty Dusk",
      description: "Carrara Series",
      img: "/images/product/carrara-series/misty-dusk.webp",
    },
    {
      title: "New Everest",
      description: "Carrara Series",
      img: "/images/product/carrara-series/new-everest.webp",
    },
    {
      title: "Valecia Beige Aanay Chale",
      description: "Carrara Series",
      img: "/images/product/carrara-series/valecia-beige-aanay-chale.webp",
    },
  ];

  return (
    <section>
      <GeneralCollection steps={steps} titlename="Carrara Series" />
    </section>
  );
};

export default SubCollectionpages;
