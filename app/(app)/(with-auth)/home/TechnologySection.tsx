import Image from "next/image";

export default function TechnologySection() {
  return (
    <section className="bg-primary/10 py-16 px-4 relative">
      <div className="container px-5">
        <h3 className="text-16 font-800 text-[#003E64] mb-2">WHY CHOOSE US</h3>
        <h2 className="text-28 md:text-44 font-800 mb-6 md:leading-[52px]">
          Technology <br /> At Bhavya Stone
        </h2>
        <p className="text-lg lg:text-18 text-gray-700 mb-5 sm:mb-12">
          Unlike granite, quartz does not form any stone blocks, and it
          naturally exists in clusters. Although some people are interested in
          this mineral to be part of their kitchen design, the natural stone of
          quartz is considered to be unsuitable for countertops and any other
          large slab applications. While we take a look at the quartz stone
          manufacturing process,
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-5 items-start">
          <div className="grid justify-center h-full items-start group gap-5 bg-white shadow-cst hover:shadow-lg rounded-lg z-10 p-4 md:p-5 lg:p-6">
            <div className="w-[60px] h-[60px] mx-auto">
              {/* Replace with your actual icon path */}
              <img className="group-hover:scale-110 transition-all duration-700 h-full mx-auto"
                src="images/why-choose-icon-1.png"
                alt="Plant & Machinery Icon"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-20 sm:text-24 font-600 text-[#0D121E]">
                PLANT & MACHINERY
              </h3>
              <p className="text-gray-600">
                Stable and efficient, to meet the needs of different customers.
              </p>
            </div>
          </div>

          <div className="grid justify-center h-full items-start group gap-5 bg-white shadow-cst hover:shadow-lg rounded-lg z-10 p-4 md:p-5 lg:p-6">
            <div className="w-[60px] h-[60px] mx-auto">
              <img className="group-hover:scale-110 transition-all duration-700 h-full mx-auto"
                src="images/why-choose-icon-2.png"
                alt="Quality Policy Icon"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-20 sm:text-24 font-600 text-[#0D121E]">
                OUR QUALITY POLICY
              </h3>
              <p className="text-gray-600">
                In order to ensure total customer satisfaction, we have built up
                a solid infrastructure and techno-commercial network in India.
              </p>
            </div>
          </div>

          <div className="grid justify-center h-full items-start group gap-5 bg-white shadow-cst hover:shadow-lg rounded-lg z-10 p-4 md:p-5 lg:p-6">
            <div className="w-[60px] h-[60px] mx-auto">
              <img className="group-hover:scale-110 transition-all duration-700 h-full mx-auto"
                src="images/why-choose-icon-3.png"
                alt="Testing Facilities Icon"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-20 sm:text-24 font-600 text-[#0D121E]">
                TESTING FACILITIES
              </h3>
              <p className="text-gray-600">
                Our entity is rendering Quartz Sample Testing Service to our
                customers.
              </p>
            </div>
          </div>

          <div className="grid justify-center h-full items-start group gap-5 bg-white shadow-cst hover:shadow-lg rounded-lg z-10 p-4 md:p-5 lg:p-6">
            <div className="w-[60px] h-[60px] mx-auto">
              <img className="group-hover:scale-110 transition-all duration-700 h-full mx-auto"
                src="images/why-choose-icon-4.png"
                alt="Certifications Icon"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-20 sm:text-24 font-600 text-[#0D121E]">
                CERTIFICATIONS
              </h3>
              <p className="text-gray-600">
                Bhavaya is certified by internationally recognised bodies to
                ensure total conformity to standards of safety and protection.
              </p>
            </div>
          </div>

          <div className="grid justify-center h-full items-start group gap-5 bg-white shadow-cst hover:shadow-lg rounded-lg z-10 p-4 md:p-5 lg:p-6">
            <div className="w-[60px] h-[60px] mx-auto">
              <img className="group-hover:scale-110 transition-all duration-700 h-full mx-auto"
                src="images/why-choose-icon-5.png"
                alt="Company's Network Strength Icon"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-20 sm:text-24 font-600 text-[#0D121E]">
                COMPANY&apos;S NETWORK STRENGTH
              </h3>
              <p className="text-gray-600">
                High quality and environment-friendly stone product integrated
                with technology, energy saving, and environmental protection.
              </p>
            </div>
          </div>

          <div className="grid justify-center h-full items-start group gap-5 bg-white shadow-cst hover:shadow-lg rounded-lg z-10 p-4 md:p-5 lg:p-6">
            <div className="w-[60px] h-[60px] mx-auto">
              <img className="group-hover:scale-110 transition-all duration-700 h-full mx-auto"
                src="images/why-choose-icon-6.png"
                alt="Worldwide Footprint Icon"
              />
            </div>
            <div className="ml-4">
              <h3 className="text-20 sm:text-24 font-600 text-[#0D121E]">
                WORLDWIDE FOOTPRINT
              </h3>
              <p className="text-gray-600">
                Increasing applications of quartz in various end-use industries
                due to its excellent physical, chemical, and electrical
                properties is driving the global quartz market.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-32 opacity-[0.05] img-bounce">
        <img className="" src="images/why-choose-mask.png" alt="mask-image" />
      </div>
    </section>
  );
}
