import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhavya Quartz",
  description: "Bhavya Quartz - Your go-to source for quality quartz products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="description" content={metadata.description ?? ""} />
        <meta
          name="keywords"
          content="Quartz Stone manufacturer and exporter of Stone & Quartz, Bhavya Quartz"
        />
        <meta name="author" content="Bhavya Quartz" />
        <meta property="og:title" content={String(metadata.title)} />
        <meta property="og:description" content={metadata.description ?? ""} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bhavyaquartz.com/" />
        <meta
          property="og:image"
          content="https://bhavyaquartz.com/images/logo.svg"
        />
      </head>
      <body
        className={`custom-cursor min-h-screen text-[#414651] dark:text-white ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
