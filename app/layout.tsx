import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhavya Quartz",
  description: "Bhavya Quartz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </head>
      <body className={`min-h-screen   ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
