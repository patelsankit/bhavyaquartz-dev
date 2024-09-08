import Contact from "@/screens/contact/contact";
import { CardBody, CardContainer } from "../ui/3d-card";
import Banner from "../Page-Banner/page";
import {
  IconBrandHipchat,
  IconBuilding,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

export default function ContactUs() {
  const steps = [
    {
      id: 1,
      icon: (
        <IconBrandHipchat className="sm:h-16 h-10 w-10 sm:w-16 text-48 text-primary mb-4" />
      ),
      title: "WhatsApp Chat",
      description: "Available 24/7",
      URl: "#",
    },
    {
      id: 2,
      icon: (
        <IconPhone className="sm:h-16 h-10 w-10 sm:w-16 text-48 font-700 text-primary mb-4" />
      ),
      title: "Call Us",
      description: "+91 72029 00299 , +91 70966 64834",
      URl: "#",
    },
    {
      id: 3,
      icon: (
        <IconMail className="sm:h-16 h-10 w-10 sm:w-16 text-48 font-700 text-primary mb-4" />
      ),
      title: "Mail Us",
      description: "info@bhavyaquartz.com",
      URl: "#",
    },
    {
      id: 4,
      icon: (
        <IconBuilding className="sm:h-16 h-10 w-10 sm:w-16 text-48 font-700 text-primary mb-4" />
      ),
      title: "Office Address",
      description: "Morbi,Gujrat",
      URl: "#",
    },
  ];

  return (
    <section className="">
      <Banner
        title="GET IN TOUCH"
        imageSrc="/images/contact-us-banner-min.webp"
      />
      <div className="py-12 px-4 container">
        <h2 className="h1-title text-center mb-5 lg:mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <>
              <div className="p-6 md:p-10 bg-white shadow-card hover:shadow-xl border border-solid border-gray-300 rounded-xl">
                <div className="flex flex-col  items-center text-center transition-transform duration-300 hover:scale-105">
                  {step.icon}
                  <h3 className="text-18 sm:text-20 font-500 mb-2">{step.title}</h3>
                  <p className="">{step.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="container mt-5 lg:mt-10 grid lg:grid-cols-2 grid-cols-1 gap-5 lg:gap-10">
          <Contact />
          <div>
            <iframe
              className="max-w-full h-full min-h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.6487308219994!2d70.88005267417756!3d22.889431021285766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598b822e19caaf%3A0x9ededb7cf35d1f98!2sBhavaya%20STONE!5e0!3m2!1sen!2sin!4v1696408058519!5m2!1sen!2sin"
              width="600"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
