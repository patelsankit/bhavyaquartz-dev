"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function NavbarComponent() {
  const menuItems = [
    { name: "Home", keyIndex: "1", url: "/" },
    { name: "About", keyIndex: "2", url: "/about" },
    { name: "Collections", keyIndex: "3", url: "/collections" },
    {
      name: "Technical Specification",
      keyIndex: "4",
      url: "/technical-specification",
    },
    { name: "E-Catalogue", keyIndex: "5", url: "/e-catalogue" },
    { name: "Contact", keyIndex: "6", url: "/contact" },
  ];

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isExiting, setIsExiting] = React.useState(false);

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

  return (
    <Navbar
      className="[&>header]:gap-2 z-[99] header-main"
      disableAnimation
      isBordered
    >
      <NavbarContent className="md:hidden md:pr-3" justify="center">
        <Link href="/">
          <NavbarBrand>
            <Image
              src="/images/logo.svg"
              // src=""
              height="100"
              width="100"
              className=""
              alt="logo"
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <div onClick={handleMenuToggle}>
          {isMenuOpen ? <IconX /> : <IconMenu2 />}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-2 lg:gap-4" justify="center">
        <NavbarItem className="lg:mr-10">
          <Link href="/">
            <NavbarBrand>
              <Image
                src="/images/logo.svg"
                // src=""
                height="100"
                width="150"
                className=""
                alt="logo"
              />
            </NavbarBrand>
          </Link>
        </NavbarItem>
        {menuItems.map((item) => (
          <NavbarItem key={item.keyIndex}>
            <Link
              className={`text-14 lg:text-16 font-600 ${
                pathname === item.url ? "text-primary underline" : "text-black"
              }`}
              href={item.url}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem className="lg:ml-10">
          <Button
            className="btn btn-primary"
            target="_blank"
            as={Link}
            href="https://wa.me/917202900299?text=Hello I Have Tiles Related Inquiry!"
            variant="flat"
          >
            WhatsApp Inquiry
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <>
          {/* Sidebar Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden h-screen"
            onClick={closeMenu}
          ></div>

          <div
            className={`z-30 px-4 pt-2 fixed top-0 w-[300px] inset-x-0 bottom-0 flex-col gap-2 overflow-y-auto backdrop-blur-xl backdrop-saturate-150 h-[100dvh] bg-[#0D121E] text-white transition-transform duration-300 ${
              isMenuOpen && !isExiting
                ? "transform-none"
                : "transform -translate-x-full"
            } ${isExiting ? "transform -translate-x-full" : ""}`}
          >
            {menuItems.map((item) => (
              <div key={item.keyIndex}>
                <Link
                  className={`px-2 py-2.5 border-t border-white/10 block  ${pathname === item.url ? "text-white underline" : ""}`}
                  href={item.url}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </Navbar>
  );
}
