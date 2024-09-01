"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { Logo } from "../Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../ThemeSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import Image from "next/image";

export default function NavbarComponent() {
  const menuItems = [
    { name: "Home", url: "/" }, 
    { name: "About", url: "/about" },
    { name: "Collections", url: "/collections" },
    { name: "Technical Specification", url: "/technical-specification" },
    { name: "E-Catalogue", url: "/e-catalogue" },
    { name: "Contact", url: "/contact" }
  ];
  const pathname = usePathname();
  const lastSegment = pathname.substring(pathname.lastIndexOf("/") + 1);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar
      className="[&>header]:gap-2 z-[99] header-main"
      disableAnimation
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent className="md:hidden md:pr-3" justify="center">
        <Link href="/">
          <NavbarBrand>
            <Image
              src="/images/logo.svg"
              height="100"
              width="100"
              className=""
              alt="logo"
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>


      <NavbarContent className="hidden md:flex gap-2 lg:gap-4" justify="center">
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
        {menuItems.map((item, index) => (
          <>
            <NavbarItem key={`${item.name}-${index}`}>
              <Link
               className={`text-14 lg:text-16 font-600 ${pathname === item.url ? "text-primary underline" : "text-black"}`}
                href={item.url}
              >
                {item.name}
              </Link>
            </NavbarItem>
          </>
        ))}
         <NavbarItem className="lg:ml-10">
          <Button className="btn btn-primary" target="_blank" as={Link} href="https://wa.me/917202900299?text=Hello I Have Tiles Related Inquiry!" variant="flat">
            WhatsApp Inquiry
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              // className={`w-full ${
              //   (pathname === "/" && item.url === "/") ||
              //   (pathname.startsWith(item.url) && item.url !== "/")
              //     ? "text-[#0D121E]"
              //     : ""
              // }`}
              className={pathname === item.url ? "text-primary underline" : "text-black"}
              href={item.url}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
