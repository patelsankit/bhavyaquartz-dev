"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import CardComponentspage from "../nextcomponents/card/page";
import Banner from "./Banner";
import SectionTwo from "./SectionTwo";
import { SectionThree } from "./SectionThree";
import TechnologySection from "./TechnologySection";
import { CertifiedCompany } from "./ CertifiedCompany";
import { OurCollection } from "./ OurCollection";
import AboutusSection from "./AboutusSection";

const HomePage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      {/* <div className="text-center py-5">Welcome home</div> */}
      {/* <Banner /> */}
      <SectionTwo />
      <AboutusSection />
      <SectionThree />
      <TechnologySection />
      <CertifiedCompany />
      <OurCollection />
    </>
  );
};

export default HomePage;
