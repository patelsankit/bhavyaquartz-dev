"use client";

import Link from "next/link";
const steps = [
  {
    number: "01",
    title: "IEC",
    description: "Certificate",
    img: "/images/certificate.jpg",
    pdfUrl: "https://bhavyaquartz.com/Pdf-Files/IEC.pdf",
  },
];

const openPdfInNewTab = (pdfUrl: any) => {
  window.open(pdfUrl, "_blank");
};

const Certificate = () => {
  return (
    <section className="">
      <div className="max-w-7xl container px-4 lg:px-7 mt-4 lg:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-10">
          {steps.map((step) => (
            <div key={step.number} className="collection-product-details">
              <div className="collection-product-details-box">
                <div
                  className="collection-product-details-img cursor-pointer"
                  onClick={() => openPdfInNewTab(step.pdfUrl)}
                >
                  <img src={step.img} alt="images" />
                </div>
              </div>
              <div className="collection-product-details-content">
                <p className="collection-product-sub-title-main">
                  {step.title}
                </p>
                <h3 className="collection-product-sub-title-sub">
                  <span>{step.description}</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
