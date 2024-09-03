// components/CustomCursor.tsx
import React, { useEffect } from "react";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector(".follow-up-cursor-first") as HTMLElement | null;
    const cursorInner = document.querySelector(".follow-up-cursor-second") as HTMLElement | null;
    const links = document.querySelectorAll("a");

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursor && cursorInner) {
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
        cursorInner.style.left = `${x}px`;
        cursorInner.style.top = `${y}px`;
      }
    };

    const addClickEffect = () => {
      if (cursor && cursorInner) {
        cursor.classList.add("click");
        cursorInner.classList.add("custom-cursor__innerhover");
      }
    };

    const removeClickEffect = () => {
      if (cursor && cursorInner) {
        cursor.classList.remove("click");
        cursorInner.classList.remove("custom-cursor__innerhover");
      }
    };

    const addHoverEffect = () => {
      if (cursor) {
        cursor.classList.add("custom-cursor__hover");
      }
    };

    const removeHoverEffect = () => {
      if (cursor) {
        cursor.classList.remove("custom-cursor__hover");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", addClickEffect);
    document.addEventListener("mouseup", removeClickEffect);

    links.forEach((link) => {
      link.addEventListener("mouseover", addHoverEffect);
      link.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", addClickEffect);
      document.removeEventListener("mouseup", removeClickEffect);
      links.forEach((link) => {
        link.removeEventListener("mouseover", addHoverEffect);
        link.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div className="follow-up-cursor-first"></div>
      <div className="follow-up-cursor-second"></div>
    </>
  );
};

export default CustomCursor;