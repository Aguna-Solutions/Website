import type { Metadata } from "next";
import ProductsHero from "@/components/ProductsHero";
import SectionDivider from "@/components/SectionDivider";
import ProductsList from "@/components/ProductsList";

export const metadata: Metadata = {
  title: "AI-Driven Industrial & Security Products | Aguna Solutions",
  description:
    "AI-driven predictive analytics and security products for specialized industries.",
  alternates: { canonical: "https://www.agunasolutions.com/products" },
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <SectionDivider />
      <ProductsList />
    </main>
  );
}
