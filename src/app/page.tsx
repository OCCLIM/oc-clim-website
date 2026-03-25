import IntroGate from "@/components/intro/IntroGate";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Intervention from "@/components/Intervention";
import Realisations from "@/components/Realisations";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import ZoneIntervention from "@/components/ZoneIntervention";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <IntroGate>
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Stats />
        <Services />
        <Mission />
        <Intervention />
        <Realisations />
        <About />
        <Testimonials />
        <ZoneIntervention />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </IntroGate>
  );
}
