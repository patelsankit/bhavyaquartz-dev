import { GeneralCollection } from "@/components/Collection/GeneralCollection";

const SubCollectionpages = () => {
  const steps = [
    // Satuario Series
    {
      title: "Calacatta Costta (Grey) 2",
      description: "Satuario Series",
      img: "/images/product/satuario-series/Calacatta Costta (Grey) 2.jpg",
    },
    {
      title: "CALACATTA COSTTA (GREY+GOLD)",
      description: "Satuario Series",
      img: "/images/product/satuario-series/CALACATTA COSTTA (GREY+GOLD).jpg",
    },
    {
      title: "CalacattaCostta",
      description: "Satuario Series",
      img: "/images/product/satuario-series/CalacattaCostta.jpg",
    },
    {
      title: "Natural Satuario",
      description: "Satuario Series",
      img: "/images/product/satuario-series/Natural Satuario.jpg",
    },
  ];

  return (
    <section>
      <GeneralCollection steps={steps} titlename="Satuario Series" />
    </section>
  );
};

export default SubCollectionpages;
