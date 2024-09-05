"use client";
import React from "react";
import {
  IconArrowUp,
  IconBrandFacebook,
  IconBrandInstagram,
  IconClockHour1,
  IconMail,
  IconMapPinShare,
  IconPhone,
} from "@tabler/icons-react";
import MainLogo from "../MainLogo";
import { Logo } from "../Logo";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function FooterComponent() {
  return (
    <>
      <footer className="relative overflow-hidden rotation-svg bg-[#1e2734] text-[#c4cad4] pt-10 md:pt-14">
        <div className="container 2xl:max-w-[1320px] px-4 xl:px-6">
          <div className="border-b pb-5 md:pb-10 lg:pb-16 border-gray-border grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="flex items-start space-x-3 lg:space-x-6">
              <div className="bg-[#344152] p-2 rounded hover:bg-primary transition-all hover:scale-105">
                <Link href="https://maps.app.goo.gl/Db6YUr2soU9PeG8J9?g_st=iw" target="_blank">
                <IconMapPinShare />
                </Link>
              </div>
              <div>
                <h5 className="font-700">
                <Link href="https://maps.app.goo.gl/Db6YUr2soU9PeG8J9?g_st=iw" target="_blank">
                  Office Location
                </Link></h5>
                <p>
                <Link href="https://maps.app.goo.gl/Db6YUr2soU9PeG8J9?g_st=iw" target="_blank">
                  Vakaner-Morbi Highway,<br />Behind Shriji Polymers,<br />GIDC, Vakaner
                  </Link>
                  </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-6">
              <div className="bg-[#344152] p-2 rounded hover:bg-primary transition-all hover:scale-105">
                <IconPhone />
              </div>
              <div>
                <h5 className="font-700">Get a quote</h5>
                <p>+91 63537 57842</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 lg:space-x-6">
              <div className="bg-[#344152] p-2 rounded hover:bg-primary transition-all hover:scale-105">
                <IconClockHour1 />
              </div>
              <div>
                <h5 className="font-700">Working Time</h5>
                <p>Mon - Sat: 8:00 AM - 7:00 PM</p>
                <p>Sunday Close</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 py-6 md:py-10 lg:py-14 xl:py-24">
            <div>
              <MainLogo className="max-w-[200px]" />
              <p className="mt-1.5 md:mt-3">Leading Quartz Stone Expert.</p>
              <p className="mt-1.5 md:mt-3 hover:bg-primary border border-gray-border rounded-md w-fit p-2 flex justify-center md:justify-start items-center space-x-2">
                <IconMail />{" "}
                <Link href="mailto:abc@gmail.com">quartz@gmail.com</Link>
              </p>
            </div>
            <div className="grid gap-1.5 md:gap-3">
              <h5 className="font-700 text-white mb-2">Company</h5>
              <div>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </div>
              <div>
                <Link href="/about" className="hover:underline">
                  Contact
                </Link>
              </div>
            </div>
            <div className="grid gap-1.5 md:gap-3">
              <h5 className="font-700 text-white mb-2">Quick Links</h5>
              <div>
                <Link href="/about" className="hover:underline">
                  Quartz Stone
                </Link>
              </div>
              <div>
                <Link
                  href="/technical-specification"
                  className="hover:underline"
                >
                  Technical Specification
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 items-center md:justify-between border-t border-[#344152] py-4 md:py-6">
            <p>
              © Copyright 2024 Quartz.com All rights reserved. Developed
              By&nbsp;
              <a href="#" className="hover:underline">
                Dream Devs
              </a>
            </p>
            <div className="flex justify-center gap-3">
              <Link
                target="_blank"
                href="https://facebook.com/"
                className="text-white bg-[#344152] p-2 rounded hover:bg-primary transition-all hover:scale-105"
              >
                <IconBrandFacebook />
              </Link>
              <Link
                target="_blank"
                href="https://instagram.com/"
                className="text-white bg-[#344152] p-2 rounded hover:bg-primary transition-all hover:scale-105"
              >
                <IconBrandInstagram />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
