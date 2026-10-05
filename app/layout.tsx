import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Manrope, Montserrat, Space_Grotesk, JetBrains_Mono, Fraunces, Plus_Jakarta_Sans, Outfit, Sora, Unbounded, Exo_2, Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollBackground from "@/components/ScrollBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const fraunces = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-fraunces" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded" });
const exo2 = Exo_2({ subsets: ["latin"], variable: "--font-exo2" });
const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa" });

export const metadata: Metadata = {
  title: {
    template: "%s | Aguna Solutions",
    default: "Aguna Solutions | Advanced AI & Security Solutions",
  },
  description:
    "Aguna Solutions delivers enterprise-grade cybersecurity, VAPT, cloud security, and custom software consulting.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${montserrat.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${plusJakarta.variable} ${outfit.variable} ${sora.variable} ${unbounded.variable} ${exo2.variable} ${comfortaa.variable}`}>
      <body>
        <Suspense fallback={null}>
          <SmoothScroll />
        </Suspense>
        <ScrollBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
