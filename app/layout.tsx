import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Personal Finance Management Application",
  description: "UI/UX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Navbar/>
          <main className="relative overflow-hidden">
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
