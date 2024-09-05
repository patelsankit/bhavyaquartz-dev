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
import { IconMail, IconMenu2, IconX } from "@tabler/icons-react";
import { ThemeSwitcher } from "../ThemeSwitcher";

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

  // Disable body scroll when the sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when the component is unmounted or when isMenuOpen changes
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
        <Link href="mailto:bhavyaquartz@gmail.com">
          <IconMail className="" />
        </Link>
        <div onClick={handleMenuToggle}>
          {isMenuOpen ? <IconX /> : <IconMenu2 />}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-2 lg:gap-4" justify="center">
        <NavbarItem className="lg:mr-10">
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
          <NavbarItem key={item.keyIndex}>
            <Link
              className={`text-14 lg:text-16 font-600 ${
                pathname === item.url
                  ? "text-primary underline"
                  : "text-black dark:text-gray-50"
              }`}
              href={item.url}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        {/* <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem> */}
        <NavbarItem className="lg:ml-10">
          <Button
            className="btn btn-primary"
            target="_blank"
            as={Link}
            href="https://wa.me/917202900299?text=Hello I Have Tiles Related Inquiry!"
            variant="flat"
          >
            Mail Inquiry
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Sidebar Menu */}
      <>
        {/* Sidebar Backdrop */}
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
          {menuItems.map((item) => (
            <div key={item.keyIndex}>
              <Link
                className={`px-2 py-2.5 border-b border-white/10 block ${
                  pathname === item.url ? "text-white underline" : ""
                }`}
                href={item.url}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </>
    </Navbar>
  );
}
