import type { Metadata } from "next";

import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

import "../assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Real State App",
  keywords: "rental, property, real state",
  description: "Find the perfect rental property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
