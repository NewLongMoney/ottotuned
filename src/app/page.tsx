import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FitmentStrip } from "@/components/FitmentStrip";
import { ProofStrip } from "@/components/ProofStrip";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { FeaturedReels } from "@/components/FeaturedReels";
import { Builds } from "@/components/Builds";
import { About } from "@/components/About";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FitmentStrip />
        <ProofStrip />
        <Services />
        <Gallery />
        <FeaturedReels />
        <Builds />
        <About />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
