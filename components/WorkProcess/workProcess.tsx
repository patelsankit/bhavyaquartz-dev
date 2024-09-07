// components/WorkProcess.js
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Image from "next/image";

export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Identifying Problems",
      description:
        "Whatever the issue with your quartz stone, we at Bhavaya, stand ready to help with quartz restoration, quartz repair and quartz cleaning.",
    },
    {
      number: "02",
      title: "Research Your Problem",
      description:
        "Revisiting the “Quartz Problem” in Bhavaya Studies: A Review and New, Open-access, Experimental Dataset",
    },
    {
      number: "03",
      title: "Solutions Your Problem",
      description:
        "Adjust the pressing parameters (reduce vibration motor revolution speed and Time). Ensure that the paper (film) will not fracture under the condition that the slab pressing is finished.",
    },
    {
      number: "04",
      title: "Consultation With Experts",
      description:
        "Our stone experts can help you find the perfect material for your project! Book an appointment for a free personal consultation.",
    },
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="px-4 container">
        <h2 className="h1-title text-center mb-5 lg:mb-12">Our Work Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, index) => (
            <>
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-gray-50 shadow-lg relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border h-full ">
                  <div
                    key={step.number}
                    className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                  >
                    <div className="text-48 font-700 text-primary mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-24 font-500 mb-4">{step.title}</h3>
                    <p className="">{step.description}</p>
                  </div>
                </CardBody>
              </CardContainer>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
