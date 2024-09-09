import { GeneralCollection } from "@/components/Collection/GeneralCollection";

const SubCollectionpages = () => {
  const steps = [
    // Plain Colours
    {
      title: "Pure black",
      description: "Plain Colours",
      img: "/images/product/plain-colours/Pure black.jpg",
    },
    {
      title: "Pure White",
      description: "Plain Colours",
      img: "/images/product/plain-colours/Pure White.jpg",
    },
  ];

  return (
    <section>
      <GeneralCollection steps={steps} titlename="Plain Colours" />
    </section>
  );
};

export default SubCollectionpages;
