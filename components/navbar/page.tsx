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
import { ThemeSwitcher } from "../ThemeSwitcher";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../react-hover-card/react-hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion/accordion";

export default function NavbarComponent() {
  const menuItems = [
    { cstclass: "", name: "Home", keyIndex: "1", url: "/" },
    { cstclass: "", name: "About", keyIndex: "2", url: "/about" },
    {
      cstclass: "group",
      name: "Collections",
      keyIndex: "3",
      url: "/collections",
    },
    {
      cstclass: "",
      name: "Technical Specification",
      keyIndex: "4",
      url: "/technical-specification",
    },
    // { cstclass: "", name: "E-Catalogue", keyIndex: "5", url: "/e-catalogue" },
    { cstclass: "", name: "Contact", keyIndex: "6", url: "/contact" },
  ];
  const collectioItems = [
    { name: "Basic Series", keyIndex: "1", url: "/collections/basic-series" },
    {
      name: "Calacatta Series",
      keyIndex: "1",
      url: "/collections/calacatta-series",
    },
    {
      name: "Carrara Series",
      keyIndex: "1",
      url: "/collections/carrara-series",
    },
    { name: "Gravel Series", keyIndex: "1", url: "/collections/gravel-series" },
    {
      name: "Multi Classic Series",
      keyIndex: "1",
      url: "/collections/multi-classic-series",
    },
    {
      name: "Multi Exotic Series",
      keyIndex: "1",
      url: "/collections/multi-exotic-series",
    },
    { name: "Plain Colours", keyIndex: "1", url: "/collections/plain-colours" },
    {
      name: "Satuario Series",
      keyIndex: "1",
      url: "/collections/satuario-series",
    },
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
          <IconMail className="" />
        </Link>
        <div className="cursor-pointer" onClick={handleMenuToggle}>
          {isMenuOpen ? <IconX /> : <IconMenu2 />}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex gap-2 lg:gap-4 xl:gap-6"
        justify="center"
      >
        <NavbarItem className="lg:mr-10 xl:mr-16">
          <Link href="/">
            <NavbarBrand>
              <Image
                src="/images/logo.svg"
                height="100"
                width="150"
                className=""
                alt="logo"
              />
            </NavbarBrand>
          </Link>
        </NavbarItem>
        {menuItems.map((item) => (
          <>
            <NavbarItem
              key={item.keyIndex}
              className={`${item.cstclass} py-4 cursor-pointer`}
              onMouseEnter={() => {
                if (item.name === "Collections") setIsHovered(true);
              }}
              onMouseLeave={() => {
                if (item.name === "Collections") setIsHovered(false);
              }}
            >
              <Link
                className={`relative text-14 lg:text-16 font-600 ${
                  pathname === item.url
                    ? "text-primary underline"
                    : "text-black dark:text-gray-50"
                }`}
                href={item.url}
              >
                <div className="flex gap-2 items-center">
                  {item.name}
                  {item.name === "Collections" && (
                    <IconPlus className="w-5 h-5" />
                  )}
                </div>

                {item.name === "Collections" && isHovered && (
                  <div className="absolute top-8 p-2.5 bg-white rounded-md shadow-medium min-w-[300px] w-full">
                    {collectioItems.map((subItem) => (
                      <Link
                        key={subItem.keyIndex}
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
          </>
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

      <>
        {isMenuOpen && (
          <div
            className="fixed top-[64px] inset-0 bg-black opacity-50 z-10 lg:hidden h-[calc(100dvh-64px)]"
            onClick={closeMenu}
          ></div>
        )}

        <div
          className={`lg:hidden z-30 px-4 fixed top-[64px] w-[300px] inset-y-0 left-0 flex-col gap-2 overflow-y-auto backdrop-blur-xl backdrop-saturate-150 h-[calc(100dvh-64px)] bg-[#0D121E] text-white transition-transform duration-300 ${
            isMenuOpen && !isExiting
              ? "transform translate-x-0"
              : "transform -translate-x-full"
          } ${isExiting ? "transform -translate-x-full" : ""}`}
        >
          <div>
            <Link
              className={`px-2 py-2.5 border-b border-white/10 block ${
                pathname === "/" ? "text-white underline" : ""
              }`}
              href="/"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              className={`px-2 py-2.5 border-b border-white/10 block ${
                pathname === "/about" ? "text-white underline" : ""
              }`}
              href="/about"
              onClick={closeMenu}
            >
              About
            </Link>
            <span
              className={`border-b border-white/10 block ${
                pathname === "/collections" ? "text-white underline" : ""
              }`}
              // href="/collections"
              // onClick={closeMenu}
            >
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-b-0">
                  <AccordionTrigger className="px-2 py-2.5">
                    <Link href="/collections" onClick={closeMenu}>
                      Collections
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 py-2.5">
                    {collectioItems.map((subItem) => (
                      <Link
                        key={subItem.keyIndex}
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
            </span>
            <Link
              className={`px-2 py-2.5 border-b border-white/10 block ${
                pathname === "/technical-specification"
                  ? "text-white underline"
                  : ""
              }`}
              href="/technical-specification"
              onClick={closeMenu}
            >
              Technical Specification
            </Link>
            {/* <Link
              className={`px-2 py-2.5 border-b border-white/10 block ${
                pathname === "/e-catalogue" ? "text-white underline" : ""
              }`}
              href="/e-catalogue"
              onClick={closeMenu}
            >
              E-Catalogue
            </Link> */}
            <Link
              className={`px-2 py-2.5 border-b border-white/10 block ${
                pathname === "/contact" ? "text-white underline" : ""
              }`}
              href="/contact"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </>
    </Navbar>
  );
}
