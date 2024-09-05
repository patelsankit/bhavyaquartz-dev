import LogoFloating from "@/components/LogoFloating";
import Link from "next/link";

export function OurCollection() {
  const steps = [
    {
      number: "01",
      title: "Bhavya",
      description: "Lorem ipsum",
      img: "images/product-1.png",
    },
    {
      number: "02",
      title: "Bhavya",
      description: "Lorem ipsum",
      img: "images/product-2.png",
    },
    {
      number: "03",
      title: "Bhavya",
      description: "Lorem ipsum",
      img: "images/product-3.png",
    },
    {
      number: "04",
      title: "Bhavya",
      description: "Lorem ipsum",
      img: "images/product-4.png",
    },
    {
      number: "04",
      title: "Bhavya",
      description: "Lorem ipsum",
      img: "images/product-5.png",
    },
    {
      number: "04",
      title: "Bhavya",
      description: "Lorem ipsum",
      img: "images/product-6.png",
    },
  ];
  return (
    <div className="bg-[#F7F9FA] py-8 sm:py-12 lg:py-20 relative">
      <LogoFloating className="hidden lg:block absolute w-20 img-bounce-speed top-44 left-5"/>
      <LogoFloating className="hidden lg:block absolute w-20 img-bounce-speed bottom-44 right-5"/>
      <div className="section-title-three text-center">
        <p className="text-primary font-500 mb-2">OUR COLLECTIONS</p>
        <h2 className="h1-title">
          We Are Specialist For Quartz
          <br />
          Stone
        </h2>
      </div>
      <div className="max-w-7xl container px-4 lg:px-7 mt-4 lg:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-10">
          {steps.map((step) => (
            <div key={step.number} className="collection-product-details">
              <div className="collection-product-details-box">
                <div className="collection-product-details-img">
                  <img src={step.img} alt="images" />
                </div>
              </div>
              <div className="collection-product-details-content">
                <p className="collection-product-sub-title-main">
                  {step.title}
                </p>
                <h3 className="collection-product-sub-title-sub">
                  <Link href="">{step.description}</Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
