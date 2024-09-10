import Contact from "@/screens/contact/contact";
import { CardBody, CardContainer } from "../ui/3d-card";
import Banner from "../Page-Banner/page";
import {
  IconBrandHipchat,
  IconBuilding,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="">
      <Banner
        title="GET IN TOUCH"
        imageSrc="/images/contact-us-banner-min.webp"
      />
      <div className="py-12 px-4 container">
        <h2 className="h1-title text-center mb-5 lg:mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Link
            target="_blank"
            href="https://wa.me/916353757842?text=Hello I Have Tiles Related Inquiry!"
            className="p-6 md:p-10 bg-white shadow-card hover:shadow-xl border border-solid border-gray-300 rounded-xl"
          >
            <div className="flex flex-col  items-center text-center transition-transform duration-300 hover:scale-105">
              <IconBrandHipchat className="sm:h-16 h-10 w-10 sm:w-16 text-48 text-primary mb-4" />{" "}
              <h3 className="text-18 sm:text-20 font-500 mb-2">
                WhatsApp Chat
              </h3>
              <p className="">Available 24/7</p>
            </div>
          </Link>
          <Link
            href="tel:+916353757842"
            className="p-6 md:p-10 bg-white shadow-card hover:shadow-xl border border-solid border-gray-300 rounded-xl"
          >
            <div className="flex flex-col  items-center text-center transition-transform duration-300 hover:scale-105">
              <IconPhone className="sm:h-16 h-10 w-10 sm:w-16 text-48 text-primary mb-4" />{" "}
              <h3 className="text-18 sm:text-20 font-500 mb-2">Call Us</h3>
              <p className="">+91 63537 57842</p>
            </div>
          </Link>
          <Link
            href="mailto:info@bhavyaquartz.com"
            className="p-6 md:p-10 bg-white shadow-card hover:shadow-xl border border-solid border-gray-300 rounded-xl"
          >
            <div className="flex flex-col  items-center text-center transition-transform duration-300 hover:scale-105">
              <IconMail className="sm:h-16 h-10 w-10 sm:w-16 text-48 text-primary mb-4" />{" "}
              <h3 className="text-18 sm:text-20 font-500 mb-2">Mail Us</h3>
              <p className="">info@bhavyaquartz.com</p>
            </div>
          </Link>
          <div className="p-6 md:p-10 bg-white shadow-card hover:shadow-xl border border-solid border-gray-300 rounded-xl">
            <div className="flex flex-col  items-center text-center transition-transform duration-300 hover:scale-105">
              <IconBuilding className="sm:h-16 h-10 w-10 sm:w-16 text-48 text-primary mb-4" />{" "}
              <h3 className="text-18 sm:text-20 font-500 mb-2">
                Office Address
              </h3>
              <p className="">Wankaner-Morbi,Gujrat</p>
            </div>
          </div>
        </div>
        <div className="container mt-5 lg:mt-10">
          <Contact />
        </div>
      </div>
    </section>
  );
}
