import Image from "next/image";

const ImageModal = ({ isOpen, onClose, imageSrc }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded">
        <button
          className="absolute top-2 right-2 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <Image
          src={imageSrc}
          alt="Modal Image"
          layout="responsive"
          width={1000}
          height={1000}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ImageModal;
