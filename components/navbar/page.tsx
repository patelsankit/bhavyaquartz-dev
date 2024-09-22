"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IconMail, IconMenu2, IconPlus, IconX } from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion/accordion";

export default function NavbarComponent() {
  const menuItems = [
    { cstclass: "", name: "Home", url: "/" },
    { cstclass: "", name: "About", url: "/about" },
    { cstclass: "group", name: "Collections", url: "/collections" },
    {
      cstclass: "",
      name: "Technical Specification",
      url: "/technical-specification",
    },
    { cstclass: "", name: "Contact", url: "/contact" },
  ];

  const collectioItems = [
    { name: "Basic Series", url: "/collections/basic-series" },
    { name: "Calacatta Series", url: "/collections/calacatta-series" },
    { name: "Carrara Series", url: "/collections/carrara-series" },
    { name: "Gravel Series", url: "/collections/gravel-series" },
    { name: "Multi Classic Series", url: "/collections/multi-classic-series" },
    { name: "Multi Exotic Series", url: "/collections/multi-exotic-series" },
    { name: "Plain Colours", url: "/collections/plain-colours" },
    { name: "Satuario Series", url: "/collections/satuario-series" },
  ];

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isExiting, setIsExiting] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setIsExiting(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsExiting(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsExiting(false);
    }, 300);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <Navbar
      className="[&>header]:gap-2 z-[99] header-main bg-white dark:bg-black"
      disableAnimation
      isBordered
    >
      <NavbarContent className="lg:hidden lg:pr-3" justify="center">
        <Link href="/">
          <NavbarBrand>
            <Image
              src="/images/logo.svg"
              height="100"
              width="100"
              className="w-[140px]"
              alt="logo"
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="end">
        <Link href="mailto:info@bhavyaquartz.com">
          <IconMail />
        </Link>
        <div className="cursor-pointer" onClick={handleMenuToggle}>
          {isMenuOpen ? <IconX /> : <IconMenu2 />}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-2 lg:gap-4" justify="center">
        <NavbarItem className="lg:mr-10 xl:mr-16">
          <Link href="/">
            <NavbarBrand>
              <Image
                src="/images/logo.svg"
                height="100"
                width="150"
                alt="logo"
              />
            </NavbarBrand>
          </Link>
        </NavbarItem>
        {menuItems.map((item, index) => (
          <NavbarItem
            key={index}
            className={`${item.cstclass} py-4 cursor-pointer`}
            onMouseEnter={() =>
              item.name === "Collections" && setIsHovered(true)
            }
            onMouseLeave={() =>
              item.name === "Collections" && setIsHovered(false)
            }
          >
            <Link
              className={`relative text-14 lg:text-16 font-600`}
              href={item.url}
            >
              <div
                className={`flex gap-2 items-center rounded-lg px-2 py-0.5 ${
                  pathname === item.url ||
                  (item.url === "/collections" && pathname.startsWith(item.url))
                    ? "bg-primary hover:opacity-80 text-white font-700 rounded-lg p-1.5"
                    : "text-black hover:text-[#414651] dark:text-gray-50"
                }`}
              >
                {item.name}
                {item.name === "Collections" && (
                  <IconPlus className="w-5 h-5" />
                )}
              </div>
              {item.name === "Collections" && isHovered && (
                <div className="absolute top-8 p-2.5 bg-white rounded-md shadow-medium min-w-[300px] w-full">
                  {collectioItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.url}
                      className="px-4 py-2.5 block hover:bg-primary/20 rounded-md"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          </NavbarItem>
        ))}
        {/* https://wa.me/916353757842?text=Hello I Have Tiles Related Inquiry! */}
        <NavbarItem className="lg:ml-10 xl:ml-16">
          <Button
            className="btn btn-primary"
            as={Link}
            href="mailto:info@bhavyaquartz.com"
            variant="flat"
          >
            Mail Inquiry
          </Button>
        </NavbarItem>
      </NavbarContent>

      {isMenuOpen && (
        <>
          <div
            className="fixed top-[64px] inset-0 bg-black opacity-50 z-10 lg:hidden h-[calc(100dvh-64px)]"
            onClick={closeMenu}
          ></div>
          <div
            className={`lg:hidden z-30 px-4 fixed top-[64px] w-[300px] inset-y-0 left-0 flex-col gap-2 overflow-y-auto backdrop-blur-xl backdrop-saturate-150 h-[calc(100dvh-64px)] bg-[#0D121E] text-white transition-transform duration-300 ${
              isMenuOpen && !isExiting
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            } ${isExiting ? "transform -translate-x-full" : ""}`}
          >
            <div>
              {menuItems.map((item, index) => {
                // Only render the item if it's not "Collections"
                if (item.name !== "Collections") {
                  return (
                    <Link
                      key={index}
                      className={`px-2 py-2.5 border-b border-white/10 block ${
                        pathname === item.url ? "text-white underline" : ""
                      }`}
                      href={item.url}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  );
                }
                return null; // Skip rendering "Collections" here
              })}
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="px-2 py-2.5">
                    <Link href="/collections" onClick={closeMenu}>
                      Collections
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 py-2.5">
                    {collectioItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.url}
                        onClick={closeMenu}
                        className="px-4 py-2.5 block hover:bg-primary/20 rounded-md"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </>
      )}
    </Navbar>
  );
}
