import { IconX } from "@tabler/icons-react";
import Image from "next/image";

const ImageModal = ({ isOpen, onClose, imageSrc }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[99]">
      <div className="relative bg-white p-4 sm:p-6 rounded max-h-[calc(100%-20px)] mx-4 overflow-auto">
        <IconX
          onClick={onClose}
          className="absolute top-0 right-0 sm:top-1.5 sm:right-1.5 text-24 font-700 hover:text-primary"
        />
        <div className="min-w-[300px] min-h-[150px]">
          <img
            src={imageSrc}
            alt="Modal Image"
            className="rounded-lg max-w-full lg:max-w-[800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
