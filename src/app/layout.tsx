import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Scripts from "@/components/Scripts";

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
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="/vendor/animate/animate.css" rel="stylesheet" type="text/css"/>
        <link href="/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css"/>
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Scripts />
      </body>
    </html>
  );
}
