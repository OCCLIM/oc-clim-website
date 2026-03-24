import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Intervention from "@/components/Intervention";
import Realisations from "@/components/Realisations";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandMarquee />
        <Services />
        <Mission />
        <Intervention />
        <Realisations />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
