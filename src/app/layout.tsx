import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ContentSection/Footer/FooterItem";



export const metadata: Metadata = {
  title: "Municipalidad de Pisacoma",
  description: "Sitio oficial de la Municipalidad de Pisacoma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={cn(
      " bg-slate-100  ",
    )} >
      <body
      
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
