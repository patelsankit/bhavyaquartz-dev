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
                  <h3 className="text-18 sm:text-20 font-500 mb-2">
                    {step.title}
                  </h3>
                  <p className="">{step.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="container mt-5 lg:mt-10">
          <Contact />
        </div>
      </div>
    </section>
  );
}
