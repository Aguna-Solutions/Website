import type { Metadata } from "next";
import AboutMission from "@/components/AboutMission";
import SectionDivider from "@/components/SectionDivider";
import HowWeWork from "@/components/HowWeWork";
import AboutValues from "@/components/AboutValues";
import TechPartners from "@/components/TechPartners";

export const metadata: Metadata = {
  title: "About Us | Aguna Solutions",
  description:
    "Learn about Aguna Solutions — our mission, team, and commitment to enterprise cybersecurity.",
  alternates: { canonical: "https://www.agunasolutions.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutMission />
      <SectionDivider />
      <HowWeWork />
      <SectionDivider />
      <AboutValues />
      <TechPartners />
    </>
  );
}

