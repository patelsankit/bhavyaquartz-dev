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

const HomePage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="text-center py-5">Welcome home</div>
      {/* <Banner /> */}
    </>
  );
};

export default HomePage;
