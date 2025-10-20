import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Scripts from "@/components/Scripts";
import ScrollAnimations from "@/components/ScrollAnimations";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Toscano Costamagna & Asociados - Estudio Jurídico",
  description: "Estudio Jurídico especializado en Derecho Laboral, Civil y Penal. 20 años de experiencia.",
  icons: {
    icon: '/img/favicon.png',
    shortcut: '/img/favicon.png',
    apple: '/img/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Scripts />
        <ScrollAnimations />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
