import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { ProductionSection } from "@/components/sections/production-section";
import { ProcessSection } from "@/components/sections/process-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ProductionSection />
        <ProcessSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
