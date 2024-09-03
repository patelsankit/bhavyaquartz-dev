"use client";

import { useState, useEffect } from "react";
import FullScreenLoader from "@/components/FullscreenLoader/FullScreenLoader";
import NavbarComponent from "@/components/navbar/page";
import FooterComponent from "@/components/footer/page";
import Providers from "@/utils/Provider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import Link from "next/link";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import GotoTop from "@/components/GotoTop/GotoTop";

export default function Layout({ children }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <Toaster position="top-right" reverseOrder={false} />
          <Link
            className="fixed bottom-4 right-4 md:hidden z-[999]"
            target="_blank"
            href="https://wa.me/917202900299?text=Hello I Have Tiles Related Inquiry!"
          >
            <img
              className="w-10 h-10"
              src="images/whatsapp-svgrepo-com.svg"
              alt="image"
            />
          </Link>
          <CustomCursor />
          {loading ? (
            <FullScreenLoader />
          ) : (
            <>
              <NavbarComponent />
              {children}
              <FooterComponent />
              <GotoTop />
            </>
          )}
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
}
