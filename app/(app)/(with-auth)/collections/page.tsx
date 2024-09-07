import { Collection } from "@/components/Collection/collection";
import Banner from "@/components/Page-Banner/page";

const Collections = () => {
  return (
    <section className="">
      <Banner
        title="ALL COLLECTIONS"
        imageSrc="/images/contact-us-banner-min.webp" // Adjust the path as needed
      />
      <Collection />
    </section>
  );
};

export default Collections;
