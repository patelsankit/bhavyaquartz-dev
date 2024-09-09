"use client";

import { useState, useEffect } from "react";
import FullScreenLoader from "@/components/FullscreenLoader/FullScreenLoader";
import NavbarComponent from "@/components/navbar/page";
import FooterComponent from "@/components/footer/page";
import Providers from "@/utils/Provider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import GotoTop from "@/components/GotoTop/GotoTop";

export default function Layout({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const loadContent = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setContentLoaded(true);
      };

      loadContent();
    }
  }, [loading]);

  if (loading || !contentLoaded) {
    return <FullScreenLoader />;
  }

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Toaster position="top-right" reverseOrder={false} />
        <CustomCursor />
        <NavbarComponent />
        {children}
        <FooterComponent />
        <GotoTop />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
