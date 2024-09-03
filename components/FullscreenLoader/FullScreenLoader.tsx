import Image from "next/image";
import React from "react";

const FullScreenLoader = () => {
  return (
    <div className="h-screen w-full absolute top-0 left-0 flex items-center justify-center z-[999] bg-white">
      <div className="animate-zoom-in-out w-1/2 mx-auto flex items-center justify-center">
        <img height="400"
          width="400"
          alt="logo"
          className="transform scale-90"
          src="/images/fullpagelogo.png" />
      </div>
    </div>
  );
};

export default FullScreenLoader;
