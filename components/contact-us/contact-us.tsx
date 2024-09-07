import Contact from "@/screens/contact/contact";
import { CardBody, CardContainer } from "../ui/3d-card";

export default function ContactUs() {
  const steps = [
    {
      id: 1,
      img: " img or svg 01",
      title: "WhatsApp Chat",
      description: "Available 24/7",
      URl: "#",
    },
    {
      id: 2,
      img: "img or svg  02",
      title: "Call Us",
      description: "+91 72029 00299 , +91 70966 64834",
      URl: "#",
    },
    {
      id: 3,
      img: "img or svg  03",
      title: "Mail Us",
      description: "info@bhavyaquartz.com",
      URl: "#",
    },
    {
      id: 4,
      img: "img or svg  04",
      title: "Office Address",
      description: "Morbi,Gujrat",
      URl: "#",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="px-4 container">
        <h2 className="h1-title text-center mb-5 lg:mb-12">Contect Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <>
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-gray-50 shadow-lg relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border h-full ">
                  <div
                    key={step.id}
                    className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                  >
                    <div className="text-48 font-700 text-primary mb-4">
                      {step.img}
                    </div>
                    <h3 className="text-24 font-500 mb-4">{step.title}</h3>
                    <p className="">{step.description}</p>
                  </div>
                </CardBody>
              </CardContainer>
            </>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="w-full">
            <Contact />
          </div>
          <div className="mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6487308219994!2d70.88005267417756!3d22.889431021285766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598b822e19caaf%3A0x9ededb7cf35d1f98!2sBhavaya%20STONE!5e0!3m2!1sen!2sin!4v1696408058519!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
