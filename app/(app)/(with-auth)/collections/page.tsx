import { Collection } from "@/components/Collection/collection";
import Banner from "@/components/Page-Banner/page";

const Collections = () => {
  return (
    <section className="">
      <Banner
        title="ALL COLLECTIONS"
        imageSrc="/images/banner-image-2.webp"
        imageClass="max-h-full"
      />
      <Collection />
    </section>
  );
};

export default Collections;
