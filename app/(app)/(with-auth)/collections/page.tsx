import { Collection } from "@/components/Collection/collection";
import Banner from "@/components/Page-Banner/page";

const Collections = () => {
  return (
    <section className="">
      <Banner
        title="ALL COLLECTIONS"
        imageSrc="/images/contact-us-banner-min.webp"
      />
      <Collection />
    </section>
  );
};

export default Collections;
