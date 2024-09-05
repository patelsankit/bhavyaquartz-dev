import { HoverEffect } from "@/components/ui/card-hover-effect";

export function SectionThree() {
  return (
    <div className="bg-muted lg:py-20 px-1 sm:px-3">
      <div className="container">
        <HoverEffect className="text-black" items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Our Mission",
    description:
      "We Are At The Forefront Of Innovation And Have A Strong Culture Of Commitment And Developing Leaders Who Create Winning Results.",
    src: "images/our_mission.png",
  },
  {
    title: "Our Vision",
    description:
      "Be Our Esteemed Customers, Suppliers, Trade Partners Or Our Complete Vishwas Ceramic Team, We Prioritize Them Before Anything.",
    src: "images/Our_Vision.png",
  },
  {
    title: "Core Value",
    description:
      "We Take Full Accountability Of Flawless Working Environment And Delivering Results With High Performing Teams Under Inspiration Leadership.",
    src: "images/core_value.png",
  },
];
