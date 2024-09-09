import { GeneralCollection } from "@/components/Collection/GeneralCollection";

const SubCollectionpages = () => {
  const steps = [
    {
      title: "Crystal Blue",
      description: "Basic Series",
      img: "/images/product/basic-series/Crystal Blue.webp",
    },
    {
      title: "Crystal Light Grey",
      description: "Basic Series",
      img: "/images/product/basic-series/Crystal Light Grey.webp",
    },
    {
      title: "Crystal red",
      description: "Basic Series",
      img: "/images/product/basic-series/Crystal red.webp",
    },
    {
      title: "Crystal-White",
      description: "Basic Series",
      img: "/images/product/basic-series/Crystal-White.webp",
    },
    {
      title: "Ice White",
      description: "Basic Series",
      img: "/images/product/basic-series/Ice White.webp",
    },
  ];

  return (
    <section>
      <GeneralCollection steps={steps} titlename="basic series" />
    </section>
  );
};

export default SubCollectionpages;
