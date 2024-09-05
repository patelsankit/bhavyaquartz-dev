import { Button } from "@nextui-org/button";
import { IconArrowUp } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`z-20 fixed bottom-10 md:bottom-4 right-4 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Button
        className="hover:!bg-[#0E73A7] bg-grad-100 p-1 md:p-3 rounded-full shadow-md text-white min-w-[45px] h-[45px] md:min-w-[55px] md:h-[55px]"
        onClick={scrollToTop}
        variant="flat"
      >
        <IconArrowUp />
      </Button>
    </div>
  );
};

export default GotoTop;

// import { Button } from "@nextui-org/button";
// import { IconArrowUp } from "@tabler/icons-react";
// import React, { useState, useEffect } from "react";

// const GotoTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isCursorActive, setIsCursorActive] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     const handleMouseMove = () => {
//       if (window.innerWidth > 768) {
//         setIsCursorActive(true);
//         if (timeout) clearTimeout(timeout);
//         timeout = setTimeout(() => setIsCursorActive(false), 2000);
//       }
//     };

//     const handleTouchStart = () => {
//       if (window.innerWidth <= 768) {
//         setIsVisible(true);
//       }
//     };

//     let timeout = setTimeout(() => setIsCursorActive(false), 2000);

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("touchstart", handleTouchStart);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("touchstart", handleTouchStart);
//       clearTimeout(timeout);
//     };
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div
//       className={`fixed bottom-[60px] md:bottom-4 right-4 transition-opacity duration-500 ${
//         isVisible && (isCursorActive || window.innerWidth <= 768)
//           ? "opacity-100"
//           : "opacity-0"
//       }`}
//     >
//       <Button
//         className="hover:!bg-[#0E73A7] bg-grad-100 p-1 md:p-3 rounded-full shadow-md text-white min-w-[40px] h-[40px] md:min-w-[55px] md:h-[55px]"
//         onClick={scrollToTop}
//         variant="flat"
//       >
//         <IconArrowUp />
//       </Button>
//     </div>
//   );
// };

// export default GotoTop;
