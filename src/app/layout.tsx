import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar/Navbar";
import TopBar from "@/components/ui/Topbar/Topbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/_next/static/css/app/layout.css?v=1718750836637" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
